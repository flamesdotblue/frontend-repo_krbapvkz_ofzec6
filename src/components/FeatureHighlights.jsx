import React from 'react';
import { Zap, Wrench, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Super Quick Setup',
    desc: 'Get your game server up and running in no time, so you can start playing with your friends right away.',
  },
  {
    icon: Users,
    title: 'Helpful Staff',
    desc: 'Our friendly and experienced team is ready to support you when you need a hand with your server.',
  },
  {
    icon: Wrench,
    title: 'Make It Your Own',
    desc: 'Customize your server easily with our game panel and make it the perfect hangout spot for you and your friends.',
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="w-full bg-slate-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Built For Effortless Hosting</h2>
          <p className="mt-2 text-slate-300">Everything you need to launch, manage, and scale your game server with confidence.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-400/30">
                <Icon className="h-6 w-6 text-sky-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
