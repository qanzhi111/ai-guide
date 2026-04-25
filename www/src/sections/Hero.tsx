import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-16 flex flex-col items-center bg-gradient-to-b from-primary to-dark">
      <motion.h1
        initial={{opacity:0, y: -20}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.7}}
        className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold to-accent text-center mb-6"
      >
        AI Guide
      </motion.h1>
      <motion.p
        initial={{opacity:0, y: 10}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.4}}
        className="text-xl md:text-2xl mb-6 text-gray-300 text-center max-w-xl"
      >
        🚀 一个开源的 AI 知识库项目，精华速览，路线可期。
      </motion.p>
      <a
        className="px-7 py-2 rounded bg-gold text-dark font-bold text-lg shadow hover:bg-accent transition-colors"
        href="https://github.com/qanzhi111/ai-guide" target="_blank" rel="noopener"
      >
        Star on GitHub
      </a>
    </section>
  )
}
