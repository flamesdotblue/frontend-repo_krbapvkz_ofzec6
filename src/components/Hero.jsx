import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Clock, Star } from 'lucide-react';

const Badge = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/20 backdrop-blur">
    <Icon className="h-4 w-4 text-emerald-300" />
    {children}
  </span>
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <Badge icon={Rocket}>Launch in under 60 seconds</Badge>
          <Badge icon={Shield}>7-day money-back guarantee</Badge>
          <Badge icon={Clock}>99.9% uptime SLA</Badge>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-white to-sky-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Host The Best Game Servers In The World
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-slate-200 sm:text-xl">
          From the most popular titles to the latest releases. Spin up your server and jump in with friends—no config headaches.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#games"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View All Games
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <Star className="h-5 w-5 text-yellow-300" /> Why GameHostBros?
          </a>
        </div>
      </div>
    </section>
  );
}
