export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-accent to-accent-muted overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 md:py-20 text-center">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your First Agent Could Be Live<br className="hidden sm:block" /> by End of Day
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
              Join 500+ companies that have replaced manual workflows with intelligent NexAgents. No contracts. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@nexagent.io"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:hello@nexagent.io"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Talk to Sales
              </a>
            </div>

            <p className="text-blue-200/70 text-xs mt-6">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
