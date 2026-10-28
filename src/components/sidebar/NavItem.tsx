import React from 'react';
import type { LucideIcon } from 'lucide-react'; 
// Notice the 'type' keyword for verbatimModuleSyntax!

interface NavItemProps {
  label: string;
  Icon: LucideIcon;
  isActive: boolean;
  onClick: () => void; // This line fixes the ts(2322) error!
  badge?: number;
}

export default function NavItem({ 
  label, 
  Icon, 
  isActive, 
  onClick, 
  badge 
}: NavItemProps): React.JSX.Element {
  return (
    <button
      onClick={onClick} //  Attaches the click handler to your HTML button
      type="button"
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
        ${isActive 
          ? 'bg-white shadow-sm text-black' 
          : 'hover:bg-[#F3EDE4] text-gray-700'
        }`}
    >
      <div className="flex items-center space-x-3">
        <Icon className={`w-5 h-5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`} />
        <span>{label}</span>
      </div>
      
      {/* Optional Notification Badge */}
      {badge !== undefined && badge > 0 && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2410C] text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}
