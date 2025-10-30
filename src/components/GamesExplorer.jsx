import React, { useMemo, useState } from 'react';
import { Search, Gamepad, Monitor, Cloud } from 'lucide-react';

const ALL_GAMES = [
  { name: 'Minecraft', platforms: ['Steam', 'Windows', 'macOS'] },
  { name: 'ARK: Survival Ascended', platforms: ['Steam', 'Windows'] },
  { name: 'V Rising', platforms: ['Steam', 'Windows'] },
  { name: 'Palworld', platforms: ['Steam', 'Windows', 'Xbox'] },
  { name: 'Terraria', platforms: ['Steam', 'Windows', 'macOS'] },
  { name: 'Vintage Story', platforms: ['Windows', 'macOS'] },
  { name: 'Valheim', platforms: ['Steam', 'Windows'] },
  { name: 'Rust', platforms: ['Steam', 'Windows'] },
  { name: 'Satisfactory', platforms: ['Epic', 'Windows'] },
  { name: 'Project Zomboid', platforms: ['Steam', 'Windows'] },
];

const PLATFORMS = ['All Platforms', 'Steam', 'Windows', 'Epic', 'Xbox', 'PlayStation', 'macOS'];

export default function GamesExplorer() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All Platforms');

  const filtered = useMemo(() => {
    return ALL_GAMES.filter((g) => {
      const matchesPlatform = active === 'All Platforms' || g.platforms.includes(active);
      const matchesQuery = g.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesPlatform && matchesQuery;
    });
  }, [query, active]);

  return (
    <section id="games" className="w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Over 59 Games Ready to Launch</h2>
            <p className="mt-1 text-slate-300">Choose from popular titles like Minecraft, ARK, V Rising, and Palworld.</p>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a game..."
              className="w-full rounded-xl bg-white/10 py-2.5 pl-10 pr-3 text-sm placeholder:text-slate-400 ring-1 ring-white/15 backdrop-blur focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setActive(p)}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                active === p
                  ? 'bg-sky-500 text-white ring-sky-400'
                  : 'bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <div key={g.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30">
                  <Gamepad className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <div className="font-semibold">{g.name}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{g.platforms.join(' • ')}</div>
                </div>
              </div>
              <button className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-400">Create</button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
              No results. Try a different search or platform.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
