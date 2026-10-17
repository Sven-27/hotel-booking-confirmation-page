import React, { useState } from 'react';

import Confirmation from './components/confirmation/Confirmation'; // Added brackets if it's a named export
import Sidebar from './components/sidebar/Sidebar'; // Removed the .tsx extension!
import { Menu } from 'lucide-react'; // Clean hamburger line icon package

export default function App(): React.JSX.Element {
  // Capitalized 'App' and used standard declaration
  // Mobile sidebar overlay toggle tracker state variables
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row min-h-screen w-screen bg-white overflow-x-hidden text-neutral-900">

      {/* 1. Mobile Global Trigger Top Header Bar */}
      {/* Hidden completely on medium tablet/desktop screens (md:hidden) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FDFBF7] border-b border-neutral-200/50 px-4 flex items-center justify-between z-40">
        <span className="font-serif italic text-[#D35A3A] font-semibold text-lg">Maison Soleil</span>
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="p-1.5 rounded-lg border border-neutral-200 bg-white text-neutral-700"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Responsive Adaptive Sidebar Component */}
      <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />


      {/* 2. Main content area on the right */}
      {/* 3. Main Screen Viewport Application Container Box */}
      {/* Adds top padding on mobile ('pt-20') so text clears the fixed mobile header bar */}
      <main className="flex-1 bg-white p-6 pt-20 md:pt-8 md:p-12 transition-all duration-300">

        <Confirmation />

        {/* Rest of your main booking confirmation content goes here */}
      </main>
    </div>
  );
}
