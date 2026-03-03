import { useEffect, useRef } from 'react'

/* ── 数据 ── */
const games = [
  {
    title: '疯狂8点',
    desc: '经典纸牌游戏，挑战你的策略与运气！',
    url: 'https://crazy-eights.co-me-ai.xyz/',
    icon: '🃏',
    color: 'from-purple-600 to-pink-600',
    glow: 'shadow-purple-500/50',
    border: 'border-purple-500/30',
  },
  {
    title: '新星防御',
    desc: '宇宙塔防，守护你的星球！',
    url: 'https://tower-defense.co-me-ai.xyz/',
    icon: '🚀',
    color: 'from-cyan-600 to-blue-600',
    glow: 'shadow-cyan-500/50',
    border: 'border-cyan-500/30',
  },
  {
    title: '数块消除',
    desc: '益智数学消除，锻炼大脑！',
    url: 'https://math-match.co-me-ai.xyz/',
    icon: '🔢',
    color: 'from-green-600 to-teal-600',
    glow: 'shadow-green-500/50',
    border: 'border-green-500/30',
  },
]

const apps = [
  {
    title: '语法练习（初中）',
    desc: '专为初中生设计的英语语法练习平台。',
    url: 'https://grammar-exercises.co-me-ai.xyz/',
    icon: '📚',
    color: 'from-orange-600 to-red-600',
    glow: 'shadow-orange-500/50',
    border: 'border-orange-500/30',
  },
]

/* ── 卡片组件 ── */
function ProjectCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex flex-col gap-3 p-6 rounded-2xl
        bg-white/5 border ${item.border}
        backdrop-blur-sm cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:${item.glow}
        hover:bg-white/10 hover:border-white/20
        no-underline
      `}
    >
      {/* 渐变顶条 */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* 图标 */}
      <span className="text-4xl filter drop-shadow-lg">{item.icon}</span>

      {/* 标题 */}
      <h3 className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
        {item.title}
      </h3>

      {/* 描述 */}
      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

      {/* 访问按钮 */}
      <div className={`
        mt-auto inline-flex items-center gap-2 text-xs font-semibold
        bg-gradient-to-r ${item.color} bg-clip-text text-transparent
        group-hover:gap-3 transition-all duration-200
      `}>
        立即访问 <span>→</span>
      </div>
    </a>
  )
}

/* ── 占位卡片 ── */
function ComingSoonCard() {
  return (
    <div className="
      flex flex-col items-center justify-center gap-3 p-6 rounded-2xl min-h-[160px]
      bg-white/3 border border-white/10 border-dashed
      backdrop-blur-sm
    ">
      <span className="text-3xl opacity-40">✨</span>
      <p className="text-sm text-gray-500 text-center">
        持续添加中<br />
        <span className="text-gray-600">敬请期待！</span>
      </p>
    </div>
  )
}

/* ── 区块标题 ── */
function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  )
}

/* ── 主应用 ── */
export default function App() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0a0a14,
        color1: 0x8b5cf6,
        color2: 0x06b6d4,
        colorMode: 'variance',
        birdSize: 1.2,
        wingSpan: 30,
        speedLimit: 4,
        separation: 60,
        alignment: 50,
        cohesion: 50,
        quantity: 3,
      })
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div ref={vantaRef} className="min-h-screen w-full relative overflow-x-hidden">
      {/* 全局暗色遮罩，让内容更易读 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* ── Hero 区块 ── */}
        <header className="flex flex-col items-center text-center mb-20 sm:mb-24">
          {/* 头像 */}
          <div className="relative mb-8">
            {/* 外圈光晕 */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 opacity-60 blur-lg animate-pulse" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-80" />
            <img
              src="/touxiang.png"
              alt="Bela"
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-white/20"
            />
          </div>

          {/* 主标题 */}
          <h1 className="glitch-title text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight" data-text="Bela的AI作品集">
            Bela的AI作品集
          </h1>

          {/* 副标题 */}
          <p className="text-lg sm:text-xl text-gray-300 font-medium tracking-wider">
            欢迎和我一起玩AI&nbsp;
            <span className="wave-emoji inline-block">~~</span>
          </p>

          {/* 装饰线 */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </header>

        {/* ── AI 作品总标题 ── */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-center">
            <span className="neon-text">AI 作品</span>
          </h2>
        </div>

        {/* ── 游戏区块 ── */}
        <section className="mb-14">
          <SectionTitle icon="🎮" title="我的AI游戏" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {games.map((g) => (
              <ProjectCard key={g.title} item={g} />
            ))}
            <ComingSoonCard />
          </div>
        </section>

        {/* ── 应用区块 ── */}
        <section className="mb-14">
          <SectionTitle icon="⚡" title="我的AI应用" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {apps.map((a) => (
              <ProjectCard key={a.title} item={a} />
            ))}
            <ComingSoonCard />
          </div>
        </section>

        {/* ── 视频区块 ── */}
        <section className="mb-14">
          <SectionTitle icon="🎬" title="我的AI视频" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ComingSoonCard />
          </div>
        </section>

        {/* ── 页脚 ── */}
        <footer className="text-center text-gray-600 text-sm mt-8 pb-4">
          <p>
            Made with&nbsp;
            <span className="text-pink-500">❤️</span>
            &nbsp;by Bela &amp; AI &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  )
}
