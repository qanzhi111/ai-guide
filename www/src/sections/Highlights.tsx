import Link from 'next/link'
export default function Highlights() {
  // 精选内容以静态展示，后续可自动拉取或手动维护
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">精选内容</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">AI 知识速查表</h3>
          <p className="text-gray-300 mb-4">涵盖主流框架、工具、常用 prompt、知识点梳理，一站速查！</p>
          <Link className="text-accent underline" href="#">立即查看</Link>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">AI 热门榜单</h3>
          <p className="text-gray-300 mb-4">持续追踪年度最受关注AI应用、爆款项目和趋势推荐，紧跟技术风向标！</p>
          <Link className="text-accent underline" href="#">Top 榜单</Link>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">AI 实用工具导航</h3>
          <p className="text-gray-300 mb-4">收录海量高效 AI 工具、Prompt Hub 和一键体验资源，快速提升生产力。</p>
          <Link className="text-accent underline" href="#">工具入口</Link>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">AI 路线与进阶</h3>
          <p className="text-gray-300 mb-4">不同层级、阶段的知识图谱/成长路线，一站进阶，成为 AI 黑客！</p>
          <Link className="text-accent underline" href="#">成长路线</Link>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">典型案例集</h3>
          <p className="text-gray-300 mb-4">行业落地精选案例 & Open Source 里程碑回顾，助你从0到1复用实践。</p>
          <Link className="text-accent underline" href="#">案例精选</Link>
        </div>
      </div>
    </section>
  )
}
