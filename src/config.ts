import type {
  GithubConfig,
  Link,
  PhotoData,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'Ayman Idrees',
  description:
    'Fullstack Developer with 3+ years of experience building responsive, high-performance web applications. Skilled in React, Next.js, Astro, TypeScript, and modern web technologies. Currently expanding into mobile development.',
  website: 'https://249ayman.com/',
  lang: 'en',
  base: '/',
  author: 'Ayman Idrees',
  ogImage: '/og-placeholder.svg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Photos',
    url: '/photos',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
  {
    name: 'Photos',
    url: '/photos',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'email',
    url: 'mailto:dev@249ayman.com',
    icon: 'icon-[mdi--email]',
  },
  {
    name: 'github',
    url: 'https://github.com/249ayman',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'twitter',
    url: 'https://x.com/aymanedris5',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/ayman-idrees/',
    icon: 'icon-[mdi--linkedin]',
  }
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
        },
        {
          name: 'JavaScript',
          icon: 'icon-[mdi--language-javascript]',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[mdi--language-typescript]',
        },
        {
          name: 'Sass',
          icon: 'icon-[mdi--sass]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
        },
        {
          name: 'Next.js',
          icon: 'icon-[devicon--nextjs]',
        },
        {
          name: 'Astro',
          icon: 'icon-[lineicons--astro]',
        },
        {
          name: 'Redux',
          icon: 'icon-[logos--redux]',
        },
        {
          name: 'Zustand',
          icon: 'icon-[mdi--state-machine]',
        },
        {
          name: 'Jest',
          icon: 'icon-[mdi--test-tube]',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Drizzle ORM',
          icon: 'icon-[mdi--database]',
        },
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
        },
        {
          name: 'Vercel',
          icon: 'icon-[lineicons--vercel]',
        },
        {
          name: 'Cloudflare',
          icon: 'icon-[mdi--cloud]',
        },
        {
          name: 'jQuery',
          icon: 'icon-[mdi--jquery]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Node.js',
          icon: 'icon-[mdi--nodejs]',
        },
        {
          name: 'Express.js',
          icon: 'icon-[mdi--server]',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[mdi--database-outline]',
        },
        {
          name: 'PostgreSQL',
          icon: 'icon-[mdi--database]',
        },
        {
          name: 'React Native',
          icon: 'icon-[mdi--react]',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: '249ayman',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Ayman Idrees',
  introduce: 'Here, I share insights about fullstack development, web technologies, mobile development, and my journey as a developer.',
  author: 'Ayman Idrees',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: true,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'A showcase of my fullstack development projects and contributions.',
  introduce: 'Here are some of the projects I\'ve worked on, showcasing my skills in React, Next.js, Astro, backend technologies, and modern web development.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: 'A collection of moments from my life and travels.',
  introduce: 'Here I share photos from my daily life, travels, and experiences across different places.',
}

export const PhotosList: PhotoData[] = [
  {
    title: 'Late summer light',
    icon: { type: 'emoji', value: '☀️' },
    description:
      'High-resolution phone shots from a bright day out in early September—open sky, warm light, and the kind of details you only notice when you slow down.',
    date: '2024-09-07',
    photos: [
      {
        src: '/photos/IMG_20240907_143818.jpg',
        alt: 'Outdoor scene on a sunny September day, captured on a phone',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
      {
        src: '/photos/IMG_20240907_144627-2.jpg',
        alt: 'Another frame from the same September walk, phone camera',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
      {
        src: '/photos/IMG_20240907_153955.jpg',
        alt: 'Late-afternoon outdoor photograph, September',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
    ],
  },
  {
    title: 'Year-end pause',
    icon: { type: 'emoji', value: '🌿' },
    description: 'A quiet moment from late December—winter air and soft daylight before the new year.',
    date: '2024-12-28',
    photos: [
      {
        src: '/photos/IMG_20241228_171452.jpg',
        alt: 'Outdoor photograph from late December',
        width: 6936,
        height: 9248,
        variant: '4x5',
      },
    ],
  },
  {
    title: 'Moon over the stairs',
    icon: { type: 'emoji', value: '🌙' },
    description:
      'Night walk: concrete steps leading up toward a covered crossing, with a bright moon behind thin clouds and tree silhouettes.',
    date: '2025-02-12',
    photos: [
      {
        src: '/photos/IMG_20250212_203502.jpg',
        alt: 'Nighttime view up an outdoor staircase toward a green-roofed structure, moon visible through clouds',
        width: 4624,
        height: 3472,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Floating cabins on the water',
    icon: { type: 'emoji', value: '🛶' },
    description:
      'Wooden huts on a calm lake under a huge blue sky—turquoise bases, small flags on the roofs, and dense green trees along the far shore.',
    date: '2025-06-08',
    photos: [
      {
        src: '/photos/20250608_150700.jpg',
        alt: 'Floating wooden cabins with blue bases on still water, bright sky and cumulus clouds',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Misty savanna morning',
    icon: { type: 'emoji', value: '🦁' },
    description:
      'A full day on safari: rolling hills in low cloud, zebra and impala in the grass, baboons on the track, and rhinos resting by a pool with a distant city on the horizon.',
    date: '2025-08-09',
    travel: 'Kenya',
    photos: [
      {
        src: '/photos/20250809_103810.jpg',
        alt: 'Rolling savanna hills and valleys under heavy grey cloud, mist in the distance',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_104712.jpg',
        alt: 'Olive baboon sitting on a reddish dirt path, bush and hills behind',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_110550.jpg',
        alt: 'Zebra in tall dry grass, rolling landscape under overcast sky',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_114410.jpg',
        alt: 'Male impala in savanna grass, giraffe feeding on a bush in the background',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_122903.jpg',
        alt: 'Two rhinoceroses resting by a watering hole, dry grass and distant city skyline',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Skies, water, and a go-kart loop',
    icon: { type: 'emoji', value: '☁️' },
    description:
      'Bright spring afternoon: a pond mirroring cumulus clouds, an outdoor go-kart track edged with red tyre barriers, and long views over grass and buildings.',
    date: '2026-03-21',
    photos: [
      {
        src: '/photos/20260321_144005.jpg',
        alt: 'Calm pond reflecting blue sky and white clouds, building and trees beyond',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20260321_144020.jpg',
        alt: 'Outdoor go-kart track with red tyre walls and parked karts under a dramatic cloudy sky',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20260321_144050.jpg',
        alt: 'Tree-framed view of water reflecting clouds, with distant low buildings',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Campus under the trees',
    icon: { type: 'emoji', value: '🎓' },
    description:
      'Looking up through branches at KCA University—white event tents, parked cars, and a bird circling in an open blue sky.',
    date: '2026-03-26',
    photos: [
      {
        src: '/photos/20260326_124915.jpg',
        alt: 'View through tree leaves toward blue sky, KCA University tents and buildings below',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Full moon and flame-red blooms',
    icon: { type: 'emoji', value: '✨' },
    description:
      'Night scene: a bright moon beside a tall lamp post, an African tulip tree in full red-orange flower, and a deep navy sky.',
    date: '2026-03-28',
    photos: [
      {
        src: '/photos/20260328_214600.jpg',
        alt: 'Full moon, streetlamp, and flowering tree with red-orange blossoms against dark night sky',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
]
