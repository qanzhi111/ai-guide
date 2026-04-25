export default function Community() {
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">加入社区 & 参与贡献</h2>
      <div className="bg-card rounded-xl p-8 shadow-lg border border-gold/10 flex flex-col items-center">
        <p className="text-gray-300 mb-3">欢迎加入讨论、提 Issue、提交 PR，与全球 AI 爱好者共建知识宝库，也可加入下方社群持续交流：</p>
        <div className="flex flex-wrap gap-4 mt-2 mb-4">
          <a className="px-4 py-2 bg-accent rounded font-bold text-dark" href="https://github.com/qanzhi111/ai-guide/issues" target="_blank">GitHub Issue 区</a>
          <a className="px-4 py-2 bg-gold rounded font-bold text-dark" href="https://github.com/qanzhi111/ai-guide" target="_blank">参与贡献</a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <a className="px-4 py-2 bg-green-500 rounded font-bold text-white" href="#" title="微信群二维码" target="_blank">微信群</a>
          <a className="px-4 py-2 bg-indigo-500 rounded font-bold text-white" href="#" title="Discord 频道" target="_blank">Discord</a>
          <a className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded font-bold text-white" href="#" title="公众号二维码" target="_blank">公众号</a>
          <a className="px-4 py-2 bg-pink-500 rounded font-bold text-white" href="#" title="小红书/论坛" target="_blank">小红书</a>
        </div>
        <p className="text-gray-400 text-sm"> *如需添加更多社群入口（QQ群/Telegram/官方邮箱等），请联系项目维护者~</p>
      </div>
    </section>
  )
}
