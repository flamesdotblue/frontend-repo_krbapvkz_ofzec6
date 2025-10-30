import React from 'react';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import FeatureHighlights from './components/FeatureHighlights';
import GamesExplorer from './components/GamesExplorer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <FeaturedGames />
      <FeatureHighlights />
      <GamesExplorer />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} GameHostBros. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
