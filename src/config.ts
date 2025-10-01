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
  ogImage: '/og-image.webp',
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
  ogImageUseCover: false,
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
  // Add your photos here
  // Example:
  // {
  //   title: 'Your Photo Title',
  //   icon: {
  //     type: 'emoji',
  //     value: '📸',
  //   },
  //   description: 'Your photo description',
  //   date: '2024-01-01',
  //   travel: '',
  //   photos: [
  //     {
  //       src: '/photos/your-photo.jpg',
  //       alt: 'Your Photo Alt Text',
  //       width: 1080,
  //       height: 810,
  //       variant: '4x3',
  //     },
  //   ],
  // },
]
