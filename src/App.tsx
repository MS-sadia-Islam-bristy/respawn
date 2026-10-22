/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CreatorProvider } from './context/CreatorContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WatchLive } from './components/WatchLive';
import { AboutCreator } from './components/AboutCreator';
import { SocialHub } from './components/SocialHub';
import { RoadTo1K } from './components/RoadTo1K';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  return (
    <CreatorProvider>
      <div className="min-h-screen bg-[#090909] text-[#F7F7F7] flex flex-col font-sans selection:bg-[#F20D2F] selection:text-white">
        {/* Sticky 3-zone Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero />
          <WatchLive />
          <AboutCreator />
          <SocialHub />
          <RoadTo1K />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast for Copy Feedback */}
        <ToastNotification />
      </div>
    </CreatorProvider>
  );
}
