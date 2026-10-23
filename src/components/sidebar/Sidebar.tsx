import React, { useState } from 'react';
import WeatherCard from './WeatherCard.tsx';
import SidebarFooter from './SidebarFooter.tsx';
import SidebarHeader from './SidebarHeader.tsx';

// Use ../ to step out of the components folder into src
import stayIconUrl from '../../assets/images/icon-bed.svg';
import houseIconUrl from '../../assets/images/icon-house.svg';
import townIconUrl from '../../assets/images/icon-pin.svg';
import breakfastIconUrl from '../../assets/images/icon-breakfast-outline.svg';
import messagesIconUrl from '../../assets/images/icon-mail.svg';

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isMobileOpen, onClose }: SidebarProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('your-stay');

  return (
    <>
      {/* BACKDROP DIMMER: Darkens the page when the mobile menu slides out. Hidden on desktop. */}
      {isMobileOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/30 backdrop-blur-xs z-40 md:hidden animate-fade-in"
        />
      )}

      {/* MASTER SIDEBAR WRAPPER PANEL */}
      <aside
        className={`
                  w-[320px] sm:w-[384px] bg-neutral-100 border-r border-neutral-200/50 flex flex-col min-h-screen shrink-0
         fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
         md:relative md:transform-none md:z-auto
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Pass down close functionality handler token directly to header button click layer */}
        <SidebarHeader onClose={onClose} />

        {/* Dynamic Navigation Content Panel Area */}
        <div className="flex flex-col flex-1 justify-between px-6 pt-4 pb-6 overflow-y-auto">

          {/* HARDCODED NAVIGATION MENU: Stripped of NavItem for fast Figma SVG implementation */}
          {/* DYNAMIC NAVIGATION MENU */}
          {/* DYNAMIC NAVIGATION MENU */}
          <nav className="spacing-2">

            {/* Item 1: Your Stay */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('your-stay');
                if (isMobileOpen) onClose();
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors select-none focus:outline-none border ${activeTab === 'your-stay'
                ? 'bg-white text-preset-5-medium font-medium shadow-xs border-neutral-100'
                : 'text-preset-5-medium/70 hover:bg-neutral-50 border-transparent'
                }`}
            >
              <div className="flex items-center gap-3.5">
                <img src={stayIconUrl} alt="" className="w-5 h-5 object-contain color-neutral-900" />
                <span className={`${activeTab === 'your-stay' ? 'text-preset-5(medium)' : 'text-preset-5(medium)'}`}>Your stay</span>
              </div>
              <span className="w-4 h-4 rounded-full bg-terracotta-400 text-white text-[10px] flex items-center justify-center font-bold">1</span>
            </button>

            {/* Item 2: The House */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('the-house');
                if (isMobileOpen) onClose();
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors select-none focus:outline-none border ${activeTab === 'the-house'
                ? 'bg-white text-neutral-700 font-medium shadow-xs border-neutral-100'
                : 'text-neutral-700/70 hover:bg-neutral-50 border-transparent'
                }`}
            >
              <img src={houseIconUrl} alt="" className="w-5 h-5 object-contain color-neutral-700" />
              <span className={`${activeTab === 'the-house' ? 'text-preset-5(medium)' : 'text-sm font-normal'}`}>The house</span>
            </button>

            {/* Item 3: Around Town */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('around-town');
                if (isMobileOpen) onClose();
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors select-none focus:outline-none border ${activeTab === 'around-town'
                ? 'bg-white text-neutral-900 font-medium shadow-xs border-neutral-100'
                : 'text-neutral-900/70 hover:bg-neutral-50 border-transparent'
                }`}
            >
              <img src={townIconUrl} alt="" className="w-5 h-5 object-contain color-neutral-700" />
              <span className={`${activeTab === 'around-town' ? 'text-preset-5(medium)' : 'text-sm font-normal'}`}>Around town</span>
            </button>

            {/* Item 4: Breakfast */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('breakfast');
                if (isMobileOpen) onClose();
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors select-none focus:outline-none border ${activeTab === 'breakfast'
                ? 'bg-white text-neutral-900 font-medium shadow-xs border-neutral-100'
                : 'text-neutral-900/70 hover:bg-neutral-50 border-transparent'
                }`}
            >
              <img src={breakfastIconUrl} alt="" className="w-5 h-5 object-contain color-neutral-700" />
              <span className={` ${activeTab === 'breakfast' ? 'text-preset-5(medium)' : 'text-sm font-normal'}`}>Breakfast</span>
            </button>

            {/* Item 5: Messages */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('messages');
                if (isMobileOpen) onClose();
              }}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors select-none focus:outline-none border ${activeTab === 'messages'
                ? 'bg-white text-neutral-900 font-medium shadow-xs border-neutral-100'
                : 'text-neutral-900/70 hover:bg-neutral-50 border-transparent'
                }`}
            >
              <img src={messagesIconUrl} alt="" className="w-5 h-5 object-contain color-neutral-700" />
              <span className={`${activeTab === 'messages' ? 'text-preset-5(medium)' : 'text-sm font-normal'}`}>Messages</span>
            </button>
          </nav>
          <div className="space-y-6 mt-auto">
            <WeatherCard />
            <SidebarFooter />
          </div>
        </div>
      </aside>
    </>
  );
}
