const steps = [
  {
    number: '01',
    title: 'Choose Your Agent',
    description:
      "Browse our agent catalog and select the one that fits your use case — or tell us your workflow and we'll recommend the right fit.",
  },
  {
    number: '02',
    title: 'Configure & Integrate',
    description:
      "Connect your tools, set your agent's tone and escalation rules, and train it on your company's knowledge base in minutes.",
  },
  {
    number: '03',
    title: 'Go Live in Hours',
    description:
      'Deploy to your channels — web chat, email, Slack, or API — and watch your agent start handling real interactions immediately.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">The Process</p>
          <h2 className="section-title mb-4">Up and Running Before Lunch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Three steps. No engineering team required. No six-month implementation cycle.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-navy-700 via-accent/40 to-navy-700" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 border border-navy-700 mb-6">
                  <span className="text-accent-light font-bold text-lg">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-7 left-1/2 w-px h-full -translate-x-1/2 bg-navy-700" style={{ top: '3.5rem' }} />
                )}
                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Free Trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
