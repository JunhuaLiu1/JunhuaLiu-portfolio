# 🎯 Junhua Liu - Personal Portfolio

> 一个现代化、响应式的个人作品集网站，采用移动端优先设计理念

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Mobile First](https://img.shields.io/badge/Design-Mobile_First-green)](https://www.w3.org/TR/mobile-bp/)

## ✨ 项目特色

### 📱 移动端优先设计
- **响应式字体系统**：最小16px字体，确保移动端可读性
- **触摸友好交互**：按钮最小44px点击区域，优化触摸体验
- **智能导航系统**：桌面端横向导航，移动端汉堡菜单
- **自适应布局**：卡片垂直堆叠，避免横向滚动
- **图片自动缩放**：完美适配各种屏幕尺寸

### 🚀 技术亮点
- **现代化技术栈**：Next.js 15 + React 19 + TypeScript 5
- **优化性能**：SSR/SSG 混合渲染，Geist 字体优化
- **美观界面**：Tailwind CSS 4 + 渐变设计 + 平滑动画
- **代码质量**：ESLint 规范 + TypeScript 类型安全

### 🎨 设计系统
- **现代美学**：简洁卡片设计，柔和色彩搭配
- **交互体验**：悬停效果，平滑过渡动画
- **视觉层次**：清晰的信息架构和内容组织
- **无障碍友好**：符合 Web 可访问性标准

## 🛠️ 技术栈

### 前端核心
- **框架**: Next.js 15.5.2 (App Router)
- **UI库**: React 19.1.0 + React DOM 19.1.0
- **语言**: TypeScript 5.x
- **样式**: Tailwind CSS 4.0

### 开发工具
- **代码检查**: ESLint 9.x + eslint-config-next
- **CSS处理**: PostCSS 4.x
- **字体优化**: Geist 字体系列
- **构建工具**: Next.js 内置构建系统

## 🚀 快速开始

### 环境要求
- Node.js 18.0+ 
- npm 8.0+ / yarn 1.22+ / pnpm 7.0+ / bun 1.0+

### 安装依赖
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install

# 或使用 bun
bun install
```

### 启动开发服务器
```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev

# 或使用 bun
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本
```bash
# 构建
npm run build

# 启动生产服务器
npm run start
```

### 代码检查
```bash
# ESLint 检查
npm run lint
```

## 📁 项目结构

```
ljh-portfolio/
├── src/
│   └── app/
│       ├── globals.css      # 全局样式和移动端优化
│       ├── layout.tsx       # 全局布局组件
│       └── page.tsx         # 主页面组件
├── public/
│   └── images/
│       └── profile.jpg      # 个人头像
├── package.json             # 项目依赖配置
├── next.config.ts          # Next.js 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── postcss.config.mjs      # PostCSS 配置
└── eslint.config.mjs       # ESLint 配置
```

## 📱 移动端优化特性

### 响应式设计
- **断点系统**: 移动端 → 平板 → 桌面端渐进增强
- **字体缩放**: 使用 `clamp()` 函数实现流体字体
- **布局适配**: Flexbox + Grid 完美响应式布局

### 性能优化
- **图片优化**: Next.js Image 组件自动优化
- **字体优化**: Geist 字体预加载和显示优化
- **CSS优化**: Tailwind CSS JIT 编译

### 用户体验
- **触摸优化**: `touch-action: manipulation` 减少延迟
- **平滑滚动**: CSS `scroll-behavior: smooth`
- **视觉反馈**: 悬停和点击状态优化

## 🎯 页面功能

### 主要区块
1. **Hero 区域**: 个人介绍 + 核心价值主张
2. **关于我**: 教育背景 + 工作经历 + 技术栈
3. **技能展示**: 核心技术能力展示
4. **项目作品**: 精选项目展示
5. **联系方式**: 表单 + 社交媒体链接

### 交互功能
- 响应式导航菜单（汉堡菜单）
- 平滑锚点滚动
- 联系表单提交
- 悬停动画效果

## 🚢 部署

### Vercel 部署（推荐）
1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台
- **Netlify**: 支持 Next.js SSG
- **AWS Amplify**: 全栈应用支持
- **Docker**: 使用官方 Next.js 镜像

## 🔧 自定义配置

### 个人信息
编辑 `src/app/page.tsx` 中的个人信息：
- 姓名和职位
- 教育背景
- 工作经历
- 技能列表
- 项目信息
- 联系方式

### 样式主题
在 `src/app/globals.css` 中自定义：
- 颜色变量
- 字体设置
- 动画效果
- 响应式断点

### 添加新页面
在 `src/app/` 目录下创建新的路由文件夹和 `page.tsx` 文件。

## 📚 学习资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 官方文档](https://react.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [移动端优先设计](https://developers.google.com/web/fundamentals/design-and-ux/responsive)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！
