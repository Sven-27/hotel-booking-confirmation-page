import React from 'react';

export default function SidebarFooter(): React.JSX.Element {
  return (
    <div className="text-preset-10 text-neutral-600 border-t-1 border-dashed border-neutral-400 pt-[16px] mt-[20px]">
      <small className="text-preset-10 uppercase block">Est. 1987</small>
      <small className="text-preset-10 uppercase block my-[10px]">
        Maison Soleil · 12 Rue Des Oliviers · Cassis
      </small>
      <small className="text-preset-10 uppercase block">
        © 2026 Maison Soleil
      </small>
    </div>
  );
}
