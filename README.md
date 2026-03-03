# Bella的AI作品集

> 个人 AI 作品集网站，展示 AI 游戏、AI 应用与 AI 视频。

## 技术栈

| 技术 | 用途 |
|---|---|
| React 18 | UI 框架 |
| Vite | 构建工具 |
| Tailwind CSS | 样式 |
| Vanta.js (CDN) | 飞鸟动画背景 |
| Three.js (CDN) | Vanta.js 依赖 |

## 设计特色

- **动态背景**：Vanta.js BIRDS 飞鸟动画（紫 + 青双色）
- **霓虹标题**：CSS 渐变动画 + 故障特效（`clip-path` 双伪元素实现）
- **卡片交互**：悬停发光 + 抬升动效
- **响应式布局**：手机 / iPad / 桌面完美适配

## 项目结构

```
Bela portfolio/
├── index.html          # 入口 HTML，引入 Three.js + Vanta.js CDN
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind 配置
├── postcss.config.js   # PostCSS 配置
├── vercel.json         # Vercel 部署配置
├── package.json
├── .gitignore
├── touxiang.png        # 头像图片
└── src/
    ├── main.jsx        # React 入口
    ├── App.jsx         # 主组件（背景、头像、卡片）
    └── index.css       # 霓虹 / 故障动画样式
```

## 本地运行

```bash
# 安装依赖（如 node_modules 不存在）
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build
```

## 部署到 Vercel

1. 将项目推送到 GitHub（`node_modules` 和 `dist` 已在 `.gitignore` 中）
2. 登录 [vercel.com](https://vercel.com) → Import Project → 选择仓库
3. Vercel 自动识别 Vite，点击 **Deploy** 即可

## 作品列表

### AI 游戏
| 名称 | 链接 |
|---|---|
| 疯狂8点 | https://crazy-eights.co-me-ai.xyz/ |
| 新星防御 | https://tower-defense.co-me-ai.xyz/ |
| 数块消除 | https://math-match.co-me-ai.xyz/ |

### AI 应用
| 名称 | 链接 |
|---|---|
| 语法练习（初中） | https://grammar-exercises.co-me-ai.xyz/ |

### AI 视频
持续添加中，敬请期待！
