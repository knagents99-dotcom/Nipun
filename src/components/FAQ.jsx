import { useState } from 'react'

const faqs = [
  {
    question: 'How long does it take to deploy a NexAgent?',
    answer:
      "Most customers go live within two hours. The configuration wizard walks you through connecting your tools, setting your agent's tone and escalation rules, and uploading your knowledge base — no coding required.",
  },
  {
    question: 'Do I need technical expertise to set this up?',
    answer:
      'No. NexAgent is designed for business teams, not engineers. If you can configure a Zapier workflow, you can deploy a NexAgent. We also offer white-glove onboarding for Enterprise customers.',
  },
  {
    question: 'What AI model powers NexAgent?',
    answer:
      "NexAgent is built on Anthropic's Claude — one of the leading large language models available today, known for its accuracy, nuanced understanding, and strong safety properties.",
  },
  {
    question: 'How does pricing work if I exceed my interaction limit?',
    answer:
      "On Starter and Growth plans, we'll notify you at 80% usage. If you go over, overage is billed at a flat per-interaction rate rather than hard-cutting off. You can also upgrade your plan at any time.",
  },
  {
    question: "Is my company's data used to train your models?",
    answer:
      'No. Your data is never used to train or fine-tune any model. All interactions are processed in isolated environments, and you retain full ownership of your data at all times.',
  },
  {
    question: "Can I customise the agent's personality and tone?",
    answer:
      'Absolutely. Each agent comes with a persona editor where you can set communication style (formal, friendly, concise), define escalation triggers, and even give the agent a custom name and avatar.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-navy-700 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm group-hover:text-accent-light transition-colors duration-200">
          {question}
        </span>
        <span className={`shrink-0 w-5 h-5 rounded-full border border-navy-700 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-45 border-accent' : ''}`}>
          <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-slate-400 text-sm leading-relaxed pb-5">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-navy-900/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title mb-4">Questions We Hear Every Day</h2>
          <p className="section-subtitle">
            Can't find what you're looking for? <a href="#contact" className="text-accent-light hover:underline">Talk to our team.</a>
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-2xl px-6 divide-y divide-navy-700">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
