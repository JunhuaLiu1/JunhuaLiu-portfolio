# 🎯 现代化个人作品集网站

> 一个基于 Next.js 构建的现代化、响应式个人作品集网站模板，采用移动端优先设计理念

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Mobile First](https://img.shields.io/badge/Design-Mobile_First-green)](https://www.w3.org/TR/mobile-bp/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

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

## 🔧 快速部署

### 使用此模板

1. **克隆或下载此仓库**
```bash
git clone <repository-url>
cd portfolio-website
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
cp .env.example .env.local
# 编辑 .env.local 文件添加您的配置
```

4. **自定义内容**
   - 更换 `public/images/` 中的图片
   - 修改各个组件中的文本内容
   - 更新联系信息和社交链接

5. **启动开发服务器**
```bash
npm run dev
```

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
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # 全局样式和移动端优化
│   │   ├── layout.tsx           # 全局布局组件
│   │   └── page.tsx             # 主页面组件
│   ├── components/
│   │   └── sections/
│   │       ├── Header.tsx       # 导航组件
│   │       ├── Hero.tsx         # 英雄区域
│   │       ├── About.tsx        # 关于模块
│   │       ├── Skills.tsx       # 技能展示
│   │       ├── Projects.tsx     # 项目展示
│   │       ├── Contact.tsx      # 联系表单
│   │       └── Footer.tsx       # 页脚组件
│   └── hooks/
│       ├── useContactForm.ts    # 表单处理钩子
│       ├── useMobileMenu.ts     # 移动菜单钩子
│       └── useSmoothScroll.ts   # 平滑滚动钩子
├── public/
│   ├── images/
│   │   ├── 1.png               # 项目图片
│   │   ├── 2.png               # 项目图片
│   │   ├── 3.png               # 项目图片
│   │   └── profile.jpg         # 个人头像
│   └── documents/
│       └── *.pdf               # 项目文档
├── .env.example                 # 环境变量示例
├── .gitignore                   # Git 忽略文件
├── CONTRIBUTING.md              # 贡献指南
├── LICENSE                      # 开源许可证
├── package.json                 # 项目依赖配置
├── next.config.ts              # Next.js 配置
├── tailwind.config.js          # Tailwind CSS 配置
├── tsconfig.json               # TypeScript 配置
├── postcss.config.mjs          # PostCSS 配置
└── eslint.config.mjs           # ESLint 配置
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

## 🔌 高级特性

### 📱 移动端优先设计
- **自适应布局**：使用 CSS Grid 和 Flexbox 实现完美响应式
- **触摸优化**：所有交互元素都满足 44px 最小点击区域
- **性能优化**：图片懒加载、字体预加载、CSS 压缩

### 🎆 交互动画
- **平滑滚动**：导航链接实现平滑滚动到目标区域
- **悬停效果**：卡片、按钮等元素具有精美动画
- **加载状态**：表单提交和页面加载反馈

### 🔍 SEO 优化
- **语义化 HTML**：正确使用标签结构
- **Meta 标签**：完整的页面元数据信息
- **开放图谱**：支持社交媒体分享预览

### ⚙️ 技术特性
- **TypeScript 类型安全**：完整的类型定义和检查
- **ESLint 规范**：代码质量和一致性保证
- **组件化开发**：高度模块化和可重用的组件结构
- **自定义 Hooks**：封装业务逻辑，提高代码可维护性

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

## 🛠️ 常见问题解决

### 构建问题
**问题**: Tailwind CSS 样式不生效  
**解决**: 检查 `tailwind.config.js` 中的 `content` 路径配置

**问题**: TypeScript 类型错误  
**解决**: 运行 `npm run type-check` 检查类型问题

### 性能优化
**问题**: 页面加载速度慢  
**解决**: 
- 优化图片大小和格式
- 启用 Next.js 图片优化
- 检查第三方库的引入

### 移动端适配
**问题**: 移动端布局问题  
**解决**: 使用浏览器开发者工具的设备模拟器测试

## 🔧 开发工具推荐

### 编辑器插件
**VS Code 推荐插件**:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter

### 调试工具
- **React Developer Tools**: React 组件调试
- **Lighthouse**: 性能和 SEO 分析
- **Chrome DevTools**: 移动端调试

## 🔧 自定义配置

### 个性化配置
根据需要编辑以下组件中的内容：

**主要组件配置：**
- `src/components/sections/Hero.tsx` - 个人介绍和标语
- `src/components/sections/About.tsx` - 教育背景和工作经历
- `src/components/sections/Skills.tsx` - 技能和专长
- `src/components/sections/Projects.tsx` - 项目展示
- `src/components/sections/Contact.tsx` - 联系方式和社交链接

**资源文件配置：**
- `public/images/` - 替换个人头像和项目图片
- `public/documents/` - 添加项目相关文档

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
