const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'For small teams getting started with AI automation.',
    features: [
      '1 AI agent',
      'Up to 5,000 interactions/mo',
      '3 channel integrations',
      'Standard support',
      'Basic analytics dashboard',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$799',
    period: '/month',
    description: 'For growing businesses that need more agents and scale.',
    features: [
      '5 AI agents',
      'Up to 25,000 interactions/mo',
      'Unlimited integrations',
      'Priority support (4hr SLA)',
      'Advanced analytics & exports',
      'Custom knowledge base',
      'A/B testing',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organisations with complex requirements.',
    features: [
      'Unlimited agents',
      'Unlimited interactions',
      'Private cloud deployment',
      'Dedicated support manager',
      'Custom SLAs & compliance docs',
      'SSO & SCIM provisioning',
      'On-premise option available',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-title mb-4">Simple, Predictable Pricing</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No per-seat fees. No surprise overages. Pick a plan and scale with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-colors duration-300 ${
                plan.popular
                  ? 'bg-accent border-accent shadow-lg shadow-accent/10'
                  : 'bg-navy-900 border-navy-700 hover:border-accent/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-accent text-xs font-bold px-4 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-lg mb-1 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm mb-1 ${plan.popular ? 'text-blue-200' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200' : 'text-accent-light'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-slate-300'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center font-semibold py-3 rounded-lg transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-white text-accent hover:bg-blue-50'
                    : 'bg-navy-800 border border-navy-700 text-white hover:bg-navy-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
