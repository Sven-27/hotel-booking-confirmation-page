import type React from 'react';

// 1. Direct SVG Imports so Vite tracks asset path locations accurately
import sunLogoUrl from '../../assets/images/logo.svg';
import closeIconUrl from '../../assets/images/icon-close.svg';

// 2. Define the prop interface for TypeScript to clear the sidebar error
interface SidebarHeaderProps {
    onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps): React.JSX.Element {
    return (
        /* 1. Added custom ambient drop shadow with a soft blur factor */
        /* 2. Added "mb-4" to inject clean vertical separation spacing right below the divider line */
        <header className="w-[336] flex flex-row items-center justify-between px-6 pt-4 pb-4  mb-4">
            {/* Brand Identity / Logo Area */}
            <div className="flex items-center space-x-2">
                {/* Sun Icon */}
                <div>
                    <img
                        className="w-[106.92] h-[42] object-contain select-none pointer-events-none"
                        src={sunLogoUrl} // CHANGED: Replaced static text string with resolved URL module
                        alt="icon of a sun"
                    />
                </div>
            </div>

            {/* Dismiss/Close Button Container */}
            <button
                type="button"
                onClick={onClose} // ADDED: Directly calls your mobile close state function handler
                /* CHANGED: Swapped md:hidden to lg:hidden so it stays visible on tablets */
                className="relative flex items-center justify-center w-20 h-20 rounded-lg border border-neutral-200/60 text-neutral-700 hover:bg-white transition-colors shrink-0 lg:hidden"
                aria-label="Close menu"
            >
                <img
                    className="w-20 h-20 object-contain select-none pointer-events-none"
                    src={closeIconUrl} // CHANGED: Replaced static text string with resolved URL module
                    alt="Close icon"
                />
            </button>
        </header>

    );
}
