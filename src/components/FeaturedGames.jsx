import React from 'react';

const games = [
  {
    name: 'Terraria',
    tag: 'new',
    price: '$9.99/mo',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Palworld',
    tag: 'popular',
    price: '$9.99/mo',
    color: 'from-sky-500 to-sky-600',
  },
  {
    name: 'Vintage Story',
    tag: 'popular',
    price: '$9.99/mo',
    color: 'from-violet-500 to-violet-600',
  },
];

const Tag = ({ label }) => (
  <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
    {label}
  </span>
);

export default function FeaturedGames() {
  return (
    <section id="featured" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Games</h2>
            <p className="mt-1 text-slate-300">From trending titles to fresh drops—spin up a server in seconds.</p>
          </div>
          <a href="#games" className="text-sky-400 hover:text-sky-300">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div key={g.name} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 ring-1 ring-white/10 transition">
              <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${g.color} opacity-20`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <Tag label={g.tag} />
                  <span className="rounded-md bg-black/30 px-2 py-1 text-xs ring-1 ring-white/10">Starting at {g.price}</span>
                </div>
                <div className="mt-auto">
                  <div className="mb-3 h-14 w-14 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-lg font-bold">
                    {g.name[0]}
                  </div>
                  <h3 className="text-xl font-semibold">{g.name}</h3>
                  <button className="mt-4 inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur ring-1 ring-white/20 transition hover:bg-white/20">
                    Start server
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
