const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Customer Support Agent',
    description: 'Resolve tickets instantly, around the clock. Handles FAQs, escalations, refunds, and account inquiries with human-level accuracy.',
    capabilities: ['24/7 ticket resolution', 'Multi-channel (chat, email, voice)', 'Escalation routing', 'CSAT tracking'],
    color: 'text-blue-400',
    border: 'hover:border-blue-500/50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Sales & Lead Gen Agent',
    description: 'Qualify inbound leads, follow up on prospects, and book meetings automatically — keeping your pipeline full without extra headcount.',
    capabilities: ['Lead scoring & qualification', 'Automated follow-up sequences', 'CRM integration', 'Meeting scheduling'],
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Coding Assistant Agent',
    description: 'Accelerate your engineering team with an agent that reviews PRs, writes boilerplate, suggests fixes, and documents code autonomously.',
    capabilities: ['PR review & feedback', 'Code generation', 'Bug detection', 'Documentation writing'],
    color: 'text-purple-400',
    border: 'hover:border-purple-500/50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'General Purpose Agent',
    description: 'A fully configurable agent tailored to your specific workflows — from data entry and reporting to internal operations and research.',
    capabilities: ['Custom workflow automation', 'Data processing & analysis', 'Internal tool integration', 'Configurable personas'],
    color: 'text-orange-400',
    border: 'hover:border-orange-500/50',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Our Agents</p>
          <h2 className="section-title mb-4">The Right Agent for Every Job</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Each NexAgent is purpose-built for its role — trained, tested, and ready to deploy in hours, not months.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className={`card group flex flex-col ${s.border} transition-colors duration-300`}>
              <div className={`${s.color} mb-4 p-2.5 rounded-lg bg-navy-800 w-fit`}>
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{s.description}</p>
              <ul className="space-y-2 mb-5">
                {s.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-slate-400 text-xs">
                    <svg className={`w-3.5 h-3.5 shrink-0 ${s.color}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-sm font-semibold ${s.color} flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200`}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
