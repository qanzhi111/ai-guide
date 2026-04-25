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
          <h3 className="text-xl font-semibold mb-2">精选项目集</h3>
          <p className="text-gray-300 mb-4">推荐高质量 AI 应用与开源实践，为你的成长添翼。</p>
          <Link className="text-accent underline" href="#">项目列表</Link>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-2">AI 路线与进阶</h3>
          <p className="text-gray-300 mb-4">不同层级、阶段的知识图谱，助你快速成长为 AI 黑客！</p>
          <Link className="text-accent underline" href="#">成长路线</Link>
        </div>
      </div>
    </section>
  )
}
