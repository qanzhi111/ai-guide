# 官网快速说明（www）

本目录为 ai-guide 项目的高颜值导航官网源码，基于 Next.js 14 + TailwindCSS + framer-motion 动效，注重内容可维护性、极致视觉、易部署。

- **本地预览**：
  ```bash
  cd www
  npm install
  npm run dev
  ```
- **一键部署**（推荐 Vercel）
  1. 访问 https://vercel.com/import 选择本仓库的 `www` 目录
  2. 自动构建并绑定个性域名

- **主要页面&分区说明**：
  - 首页突出项目一图流介绍、Star&关注、精选内容卡片、路线图、更新日志、成长趋势等
  - 内容可对接 markdown/静态配置，将来可插入 issues/CHANGELOG 等自动化内容
  - 所有区块高度组件化，支持高定制主题

- **自定义**
  - 所有内容文件均在 `src/content/` 下可独立维护
  - 样式自定义请修改 `src/styles/`，动效自定义见 `src/components/`

---

如需接入更多内容、数据源或美化风格，请在 issues 区反馈，AI 助手会自动协助。
