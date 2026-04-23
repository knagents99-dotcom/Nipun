const companies = ['Meridian', 'Vantage', 'CoreLogic', 'Stratum', 'Fieldstone']

export default function TrustBar() {
  return (
    <section className="border-y border-navy-700 bg-navy-900/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-medium mb-8">
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-slate-500 font-bold text-lg tracking-tight hover:text-slate-300 transition-colors duration-200 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
