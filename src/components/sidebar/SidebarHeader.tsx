import type React from 'react';

// 1. Direct SVG Imports so Vite tracks asset path locations accurately
import sunLogoUrl from '../../assets/images/illustration-sun.svg';
import closeIconUrl from '../../assets/images/icon-close.svg';

// 2. Define the prop interface for TypeScript to clear the sidebar error
interface SidebarHeaderProps {
    onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps): React.JSX.Element {
    return (
        /* 1. Added custom ambient drop shadow with a soft blur factor */
        /* 2. Added "mb-4" to inject clean vertical separation spacing right below the divider line */
        <header className="w-full flex flex-row items-center justify-between px-6 pt-4 pb-4 bg-[#FDFBF7] border-b border-neutral-200/40 shadow-[0_4px_12px_-2px_rgba(167,146,223,0.04),0_2px_4px_-1px_rgba(0,0,0,0.03)] mb-4">
            {/* Brand Identity / Logo Area */}
            <div className="flex items-center space-x-2">
                {/* Sun Icon */}
                <div className="flex items-center justify-center w-[34px] h-[34px] border border-[#A792DF]/30 rounded p-1 bg-white shrink-0">
                    <img
                        className="w-full h-full object-contain select-none pointer-events-none"
                        src={sunLogoUrl} // CHANGED: Replaced static text string with resolved URL module
                        alt="icon of a sun"
                    />
                </div>

                {/* Stacked Word Mark Column */}
                <div className="flex flex-col -space-y-1">
                    <span className="text-preset-4 italic text-[#D35A3A]">
                        Maison
                    </span>
                    <span className="text-preset-5 font-semibold text-neutral-900">
                        Soleil
                    </span>
                </div>
            </div>

            {/* Dismiss/Close Button Container */}
            <button
                type="button"
                onClick={onClose} // ADDED: Directly calls your mobile close state function handler
                /* CHANGED: Swapped md:hidden to lg:hidden so it stays visible on tablets */
                className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-200/60 bg-white text-neutral-700 hover:bg-neutral-50 transition-colors shrink-0 lg:hidden"
                aria-label="Close menu"
            >
                <img
                    className="w-5 h-5 object-contain select-none pointer-events-none"
                    src={closeIconUrl} // CHANGED: Replaced static text string with resolved URL module
                    alt="Close icon"
                />
            </button>
        </header>
    );
}
