export default {
  nav: {
    home: '首页',
    projects: '项目',
    skills: '技能',
    contact: '联系我'
  },
  hero: {
    greeting: '你好，我是',
    name: '你的名字',
    title: '全栈开发工程师 | 问题解决者 | 技术爱好者',
    description: '我是一名充满热情的开发者，热爱构建现代化的Web应用程序并解决复杂问题。欢迎来到我的作品集，在这里展示我的技术之旅和项目。',
    viewProjects: '查看项目',
    contactMe: '联系我',
    coreSkills: ['Vue.js', 'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript']
  },
  projects: {
    title: '项目',
    subtitle: '这里是我最近的一些作品',
    all: '全部',
    demo: '演示',
    code: '代码',
    technologiesUsed: '使用技术',
    viewLive: '查看在线演示',
    viewCode: '查看源代码',
    details: {
      ecommerce: {
        title: 'Hello Auslan — 互动手语学习平台',
        shortDesc: 'Auslan手语互动学习平台',
        description: 'Hello Auslan是一个现代化的网络平台，旨在帮助家庭、教育工作者和学生以有趣和互动的方式学习Auslan手语。该平台结合了视觉故事讲述、互动游戏和进度跟踪，使各年龄段的人都能轻松学习手语。用户可以探索字母与数字、基础词汇和故事书模式等模块，每个模块都配有动态动画、手势识别和实时反馈。Hello Auslan高度关注可访问性和用户体验，赋能学校和家长在日常生活中支持包容性沟通。',
        technologies: 'React, Vite, Node.js, AWS Amplify, S3, Tailwind CSS, Framer Motion, REST API集成'
      },
      taskManager: {
        title: '老年人群 — 智能健康与护理平台',
        shortDesc: '为老年护理提供全面数字化支持',
        description: '一个响应式网络平台，旨在改善老年人的数字医疗服务访问。\n\n该项目具有安全认证、实时地图导航和使用OpenAI的AI辅助问答功能。\n\n还包括服务列表、反馈互动和自动新闻更新。\n\n以可访问性和易用性为设计理念，界面在各种设备上提供流畅、直观的体验。',
        technologies: 'React, Node.js, Express, MongoDB, OpenAI API, Google Maps API, RESTful API, Tailwind CSS, JWT认证'
      },
      weather: {
        title: '天气仪表板',
        shortDesc: '精美的天气预报和实时天气状况',
        description: '一个优雅的天气仪表板，提供全面的天气信息，包括当前状况、每小时预报、7天预报和天气警报。应用具有基于位置的天气检测、多城市搜索功能、交互式天气地图和详细的气象数据。专注于视觉设计和数据可视化，让天气信息既美观又易于访问。',
        technologies: 'React, OpenWeatherMap API, Chart.js, 地理定位API, Axios, Styled Components'
      },
      blog: {
        title: '博客平台',
        shortDesc: '支持Markdown和社交功能的现代博客',
        description: '一个功能丰富的博客平台，支持Markdown编辑、代码片段语法高亮、嵌套回复评论系统、用户个人资料、社交分享功能和SEO优化。平台包括富文本编辑器、图片上传功能、文章分类和标签、搜索功能以及RSS订阅生成。专为重视功能性和美学的开发者和内容创作者设计。',
        technologies: 'Next.js, React, Node.js, MongoDB, Markdown-it, Prism.js, Next-Auth, TailwindCSS'
      }
    },
    sampleProjects: {
      ecommerce: {
        title: '电商平台',
        description: '一个功能完整的电商平台，集成支付功能、产品管理和用户认证系统。'
      },
      taskManager: {
        title: '任务管理应用',
        description: '一个协作任务管理应用，具有实时更新和团队协作功能。'
      },
      weather: {
        title: '天气仪表板',
        description: '一个漂亮的天气仪表板，使用外部API显示当前天气和天气预报。'
      },
      blog: {
        title: '博客平台',
        description: '一个现代化的博客平台，支持Markdown、评论和社交分享功能。'
      }
    }
  },
  skills: {
    title: '技能与经验',
    subtitle: '我的技术专长和职业历程',
    technicalSkills: '技术技能',
    experienceEducation: '工作经历与教育背景',
    categories: {
      frontend: '前端开发',
      backend: '后端开发',
      database: '数据库与工具'
    },
    timeline: {
      senior: {
        title: '高级全栈开发工程师',
        company: '科技公司',
        description: '负责使用Vue.js和Node.js开发现代Web应用程序。指导初级开发人员并设计可扩展的解决方案。'
      },
      fullstack: {
        title: '全栈开发工程师',
        company: '创业公司XYZ',
        description: '开发和维护多个客户项目。使用React、Vue.js和Node.js交付高质量的Web应用程序。'
      },
      frontend: {
        title: '前端开发工程师',
        company: '数字代理公司',
        description: '构建响应式和交互式用户界面。与设计师和后端开发人员协作，创建无缝的用户体验。'
      },
      education: {
        title: '计算机科学学士',
        company: '大学名称',
        description: '学习计算机科学基础、算法、数据结构和软件工程原理。'
      }
    }
  },
  contact: {
    title: '联系方式',
    subtitle: '欢迎联系我获取机会或打个招呼！',
    email: '邮箱',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    phone: '电话',
    connectWithMe: '与我联系',
    footer: '使用 Vue.js 构建'
  }
}
