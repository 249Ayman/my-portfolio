/**
 * Recompress JPEGs over a size threshold for Cloudflare Workers (25 MiB asset limit).
 * Run: node scripts/compress-large-photos.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

/** Stay clearly under Workers 25 MiB limit */
const MAX_BYTES = 22 * 1024 * 1024
const MAX_EDGE = 3840
const JPEG_QUALITY = 82

async function processDir(relativeDir) {
  const dir = path.join(root, relativeDir)
  if (!fs.existsSync(dir)) return

  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.jpg'))

  for (const name of files) {
    const filePath = path.join(dir, name)
    const before = fs.statSync(filePath).size
    if (before <= MAX_BYTES) continue

    const meta = await sharp(filePath).metadata()
    const buf = await sharp(filePath)
      .rotate()
      .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer()

    fs.writeFileSync(filePath, buf)
    console.log(`${relativeDir}/${name}: ${(before / 1024 / 1024).toFixed(1)} MiB -> ${(buf.length / 1024 / 1024).toFixed(1)} MiB (${meta.width}x${meta.height})`)
  }
}

await processDir('public/photos')
await processDir('src/photos')
