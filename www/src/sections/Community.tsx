export default function Community() {
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">加入社区 & 参与贡献</h2>
      <div className="bg-card rounded-xl p-8 shadow-lg border border-gold/10 flex flex-col items-center">
        <p className="text-gray-300 mb-3">欢迎加入讨论、提 Issue、提交 PR，与全球 AI 爱好者共建知识宝库！</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a className="px-4 py-2 bg-accent rounded font-bold text-dark" href="https://github.com/qanzhi111/ai-guide/issues" target="_blank">提 Issue</a>
          <a className="px-4 py-2 bg-gold rounded font-bold text-dark" href="https://github.com/qanzhi111/ai-guide" target="_blank">参与贡献</a>
        </div>
      </div>
    </section>
  )
}
