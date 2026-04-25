import changelog from '../content/changelog.md'
export default function Changelog() {
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">更新日志</h2>
      <div className="prose prose-invert prose-base max-w-3xl mx-auto bg-card rounded-lg p-6 border border-gold/10" dangerouslySetInnerHTML={{__html: changelog}} />
    </section>
  )
}
