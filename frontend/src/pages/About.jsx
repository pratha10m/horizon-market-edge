import React from 'react';
import kPhoto from "../assets/k.jpg";



const VARIANT_COPY = {
  'asset-management': {
    headline: 'Our Investment Philosophy & Approach',
    intro:
      'Our firm\u2019s investment philosophy is founded on a disciplined, research-driven and systematic approach designed to deliver consistent performance in all market environments. We combine quantitative models, macroeconomic research, and experienced risk management to pursue long-term, risk-adjusted returns.',
  },
  'hedge-fund': {
    headline: 'Our Investment Philosophy & Approach',
    intro:
      'We deploy sophisticated, opportunistic strategies across markets with an emphasis on absolute returns and active risk management. Our research-driven process blends algorithmic models with macro insight to adapt to changing market regimes.',
  },
  'prop-firm': {
    headline: 'Our Trading Philosophy & Approach',
    intro:
      'As a proprietary trading firm, we prioritise fast, reliable execution and rigorous risk controls. Our traders and quant developers collaborate to iterate strategies quickly while preserving capital.',
  },
  'trading-education': {
    headline: 'Our Teaching Philosophy & Approach',
    intro:
      'We focus on practical, hands-on trading education that blends theory with real-market practice. Our curriculum emphasises risk management, strategy development, and psychology to help traders become consistently profitable.',
  },
};

export default function AboutUs({
  companyName = 'Horizon Market Edge',
  companyType = 'asset-management',
  founder = {
    name: 'Kelvin Fonu',
    title: 'Founder & CEO',
    photo: kPhoto,
    bio:
      'Kelvin Fonu holds a formal background in finance and brings over six years of practical experience across equities, macro markets, derivatives, and proprietary trading systems. His work blends discretionary insight with systematic research, forming the foundation of Horizon Market Edge’s institutional-grade investment process.',
  },
}) {
  const copy = VARIANT_COPY[companyType] || VARIANT_COPY['asset-management'];

  return (
    <section className="bg-white text-slate-900">
      {/* Header / Hero */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{copy.headline}</h1>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">{copy.intro}</p>
        </header>

        {/* Founder section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-12">
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-slate-400/40 ring-1 ring-slate-200/50">
  <img
    src={founder.photo}
    alt={founder.name}
    className="w-full h-full object-cover"
  />
</div>

          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-center lg:text-left">Our Founder</h2>
            <div className="mt-6 prose prose-slate max-w-none">
              <h3 className="text-lg font-medium">{founder.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{founder.title}</p>

              <p>{founder.bio}</p>

              <p>
                Driven by a commitment to rigorous analysis and disciplined execution, {companyName} was
                founded to bring institutional-grade research and robust risk management to investors
                seeking long-term, sustainable outcomes.
              </p>

              <p>
                Our approach blends technology, quantitative methods and market expertise to design
                systems that adapt to different market regimes while prioritising capital
                preservation.
              </p>
            </div>
          </div>
        </div>

        {/* Team + Values section */}
        <div className="mt-20 border-t pt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">Our Team</h2>
            <p className="mt-4 text-slate-600">
              Our people are our greatest asset. Analysts, researchers, developers and traders work
              together to design and run the strategies that support our clients' goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold">Integrity</h4>
              <p className="text-sm text-slate-500 mt-2">Client-first transparency and governance.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Discipline</h4>
              <p className="text-sm text-slate-500 mt-2">Process-driven with robust risk controls.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Innovation</h4>
              <p className="text-sm text-slate-500 mt-2">Technology and research at the core of our edge.</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-slate-600">
              To empower investors through advanced research, disciplined strategy design, and
              long-term, sustainable financial performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-slate-600">
              To be a globally recognised firm for innovation, reliability and excellence in
              quantitative and macro-driven investment systems.
            </p>
          </div>
        </div>

        {/* Why choose us / CTA */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold">Why Choose {companyName}?</h4>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Research-driven models • Disciplined execution • Risk-focused strategies • Long-term
              perspective
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg shadow hover:opacity-95"
            >
              Get in touch
            </a>
          </div>
        </div>

        <footer className="mt-20 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
