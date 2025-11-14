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
        title: '食物捐赠与公益互助平台',
        shortDesc: '精美的天气预报和实时天气状况',
        description: 'FoodShare 是一套端到端 UI/UX 设计方案，目标是让“食物捐赠”这件事不再复杂、也不用靠猜。它把 食物识别、捐赠匹配、社区互动与公益点位导航 整合到同一个 App 里，让普通用户、社区机构和食物银行之间的流程真正顺畅起来',
        technologies: 'React, OpenWeatherMap API, Chart.js, 地理定位API, Axios, Styled Components'
      },
      blog: {
        title: 'Melbourne Parking — 实时停车可视化平台',
        shortDesc: '支持Markdown和社交功能的现代博客',
        description: 'Melbourne Parking 是一个面向墨尔本市区的智能停车平台，旨在帮助驾驶者、通勤者和访客快速找到可停车的位置。平台整合了官方实时路侧停车数据，并将其以清晰直观的方式展示在交互式地图上，让用户随时了解街道和停车场的使用情况。用户可以在地图中探索每个街区的停车状态，包括空置（绿）、占用（红）、未知（黄）等标记。点击任意车位即可查看详细信息，如车位编号、当前状态、最后更新时间以及精确经纬度。同时提供地点搜索、自动刷新、实时提示等功能，让寻找停车位变得更轻松、更高效。',
        technologies: 'React、Vite、Node.js、Python、Leaflet、OpenStreetMap、REST API 数据集成'
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
