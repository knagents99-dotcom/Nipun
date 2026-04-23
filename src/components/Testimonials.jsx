const testimonials = [
  {
    quote:
      "NexAgent's customer support agent reduced our ticket backlog by 74% in the first month. The setup was almost embarrassingly easy — two hours and it was live.",
    name: 'Sarah Okonkwo',
    title: 'VP of Customer Experience',
    company: 'Meridian Financial',
    avatar: 'SO',
  },
  {
    quote:
      "Our sales team was skeptical at first, but the lead qualification agent now books more qualified calls per week than our entire SDR team did before. It's not even close.",
    name: 'James Hartley',
    title: 'Head of Revenue',
    company: 'Vantage SaaS',
  },
  {
    quote:
      "We deployed the coding assistant across our 40-person engineering org and reclaimed roughly 15 hours per developer per month. ROI was visible in week one.",
    name: 'Priya Nambiar',
    title: 'CTO',
    company: 'Stratum Labs',
  },
]

const Star = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Customer Stories</p>
          <h2 className="section-title mb-4">Results Teams Actually Talk About</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Don't take our word for it — here's what our customers see in their first 30 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
              </div>

              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-navy-700">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                  <span className="text-accent-light text-xs font-bold">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
