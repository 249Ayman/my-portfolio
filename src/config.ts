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
  description: 'Snapshots I actually like enough to keep.',
  introduce:
    'Random days out, campus stuff, trips when I remember to open the camera app. Nothing curated—just places I was.',
}

export const PhotosList: PhotoData[] = [
  {
    title: 'September phone dumps',
    icon: { type: 'emoji', value: '☀️' },
    description:
      'Early September, nice light, I was out with my phone on full quality for some reason. Three shots from the same afternoon.',
    date: '2024-09-07',
    photos: [
      {
        src: '/photos/IMG_20240907_143818.jpg',
        alt: 'First of three phone pics from a sunny day in early September',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
      {
        src: '/photos/IMG_20240907_144627-2.jpg',
        alt: 'Second shot, same walk',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
      {
        src: '/photos/IMG_20240907_153955.jpg',
        alt: 'Third one before the battery complained',
        width: 2880,
        height: 3840,
        variant: '4x5',
      },
    ],
  },
  {
    title: 'Late December',
    icon: { type: 'emoji', value: '🌿' },
    description: 'End of the year, I think I was just glad to be outside for a bit.',
    date: '2024-12-28',
    photos: [
      {
        src: '/photos/IMG_20241228_171452.jpg',
        alt: 'Outside in late December',
        width: 6936,
        height: 9248,
        variant: '4x5',
      },
    ],
  },
  {
    title: 'Stairs and the moon',
    icon: { type: 'emoji', value: '🌙' },
    description:
      'Walked past these steps at night and the moon was doing that thing through the clouds. Took a few tries to get it not blurry.',
    date: '2025-02-12',
    photos: [
      {
        src: '/photos/IMG_20250212_203502.jpg',
        alt: 'Looking up the stairs at night; moon behind thin cloud',
        width: 4624,
        height: 3472,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Those huts on the lake',
    icon: { type: 'emoji', value: '🛶' },
    description:
      'The water was flat and the sky looked fake. Little flags on the roofs, blue trim on the bottoms—felt like a postcard.',
    date: '2025-06-08',
    photos: [
      {
        src: '/photos/20250608_150700.jpg',
        alt: 'Floating huts on the lake, big clouds',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Safari day (August)',
    icon: { type: 'emoji', value: '🦁' },
    description:
      'Whole day in the park. Grey sky most of the time but the animals did not care. Baboon in the road, zebra posing like it knew, rhinos napping with actual buildings far behind them—weird combo.',
    date: '2025-08-09',
    travel: 'Kenya',
    photos: [
      {
        src: '/photos/20250809_103810.jpg',
        alt: 'Hills and mist, very grey morning',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_104712.jpg',
        alt: 'Baboon sitting in the middle of the track',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_110550.jpg',
        alt: 'Zebra in the long grass',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_114410.jpg',
        alt: 'Impala up close, giraffe half hidden in a bush behind',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20250809_122903.jpg',
        alt: 'Two rhinos chilling; you can see the city if you zoom',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Pond, clouds, go-karts',
    icon: { type: 'emoji', value: '☁️' },
    description:
      'Same afternoon—I walked from the pond to the track. Sky went full drama mode. The red tyres around the circuit look loud in photos.',
    date: '2026-03-21',
    photos: [
      {
        src: '/photos/20260321_144005.jpg',
        alt: 'Pond mirroring the sky',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20260321_144020.jpg',
        alt: 'Go-kart place, nobody on the track yet',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
      {
        src: '/photos/20260321_144050.jpg',
        alt: 'Same water again but framed by a tree on the right',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'KCA from under a tree',
    icon: { type: 'emoji', value: '🎓' },
    description:
      'I was sitting in the shade and looked up—tents, cars, and one bird that stayed in the frame long enough.',
    date: '2026-03-26',
    photos: [
      {
        src: '/photos/20260326_124915.jpg',
        alt: 'Campus and sky through leaves',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Moon + red flowers',
    icon: { type: 'emoji', value: '✨' },
    description:
      'Walked out at night and the tulip tree was basically glowing. Moon on one side, ugly lamp post in the middle, still liked the shot.',
    date: '2026-03-28',
    photos: [
      {
        src: '/photos/20260328_214600.jpg',
        alt: 'Night: bright moon, streetlight pole, red flowers on the tree',
        width: 4080,
        height: 3060,
        variant: '4x3',
      },
    ],
  },
]
