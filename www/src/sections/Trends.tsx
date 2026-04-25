export default function Trends() {
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">增长趋势</h2>
      <div className="bg-card rounded-xl p-8 shadow-lg border border-accent/10 flex flex-col items-center">
        <span className="text-7xl font-extrabold bg-gradient-to-br from-gold to-accent bg-clip-text text-transparent py-2">↑</span>
        <div className="w-full h-32 bg-gradient-to-r from-accent/30 to-gold/10 rounded my-6 flex items-end">
          {/* 可集成真实增长数据，亦可插入预设数据，后续支持 fetch GitHub API */}
          <div className="h-[70%] w-1/6 bg-gold rounded-t-lg mx-1" title="4 stars"/>
          <div className="h-[80%] w-1/6 bg-accent rounded-t-lg mx-1" title="7 stars"/>
          <div className="h-[90%] w-1/6 bg-gold rounded-t-lg mx-1" title="10 stars"/>
          <div className="h-[85%] w-1/6 bg-accent rounded-t-lg mx-1" title="8 stars"/>
          <div className="h-[98%] w-1/6 bg-gold rounded-t-lg mx-1" title="13 stars"/>
          <div className="h-[95%] w-1/6 bg-accent rounded-t-lg mx-1" title="12 stars"/>
        </div>
        <p className="text-accent text-center">* 持续开源增长，Star 数与影响力快速提升！ </p>
      </div>
    </section>
  )
}
