export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-navy-900 border border-navy-700 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-xs font-medium tracking-wide">Powered by Claude · Enterprise-Ready</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            AI Agents That{' '}
            <span className="text-accent-light">Work While</span>{' '}
            You Sleep
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            Deploy intelligent agents that handle customer support, qualify leads, write code, and automate workflows — so your team focuses on what matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Get Started Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-slate-500 text-xs mt-0.5">Businesses served</p>
            </div>
            <div className="w-px h-10 bg-navy-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-slate-500 text-xs mt-0.5">Uptime SLA</p>
            </div>
            <div className="w-px h-10 bg-navy-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">&lt;2 hrs</p>
              <p className="text-slate-500 text-xs mt-0.5">Time to deploy</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  const agents = [
    { name: 'Support Agent', status: 'Active', tickets: '1,284', color: 'bg-emerald-400' },
    { name: 'Sales Agent', status: 'Active', tickets: '347', color: 'bg-blue-400' },
    { name: 'Dev Assistant', status: 'Active', tickets: '892', color: 'bg-purple-400' },
  ]

  return (
    <div className="relative">
      <div className="bg-navy-900 border border-navy-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-navy-700 bg-navy-800">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
          <span className="ml-3 text-slate-500 text-xs font-mono">nexagent.io/dashboard</span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Total Interactions Today</p>
              <p className="text-3xl font-bold text-white">24,519</p>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-emerald-400 text-xs font-semibold">+18.4%</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {agents.map((agent) => (
              <div key={agent.name} className="flex items-center justify-between bg-navy-800 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${agent.color}`} />
                  <span className="text-white text-sm font-medium">{agent.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-400 text-xs">{agent.tickets} tasks</span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    {agent.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-navy-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">Response time (ms)</p>
            <div className="flex items-end gap-1.5 h-14">
              {[60, 40, 75, 50, 85, 45, 90, 55, 70, 48, 80, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/30 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 shadow-lg">
        <p className="text-slate-500 text-xs">Satisfaction</p>
        <p className="text-white font-bold text-lg">97.2%</p>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 shadow-lg">
        <p className="text-slate-500 text-xs">Cost saved / mo</p>
        <p className="text-emerald-400 font-bold text-lg">$48,200</p>
      </div>
    </div>
  )
}
