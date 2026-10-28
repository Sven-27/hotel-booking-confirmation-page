import type React from 'react';

export default function WeatherCard(): React.JSX.Element {
  return (
    <div className="relative overflow-hidden bg-[#FCE89D] rounded-2xl pt-3 pb-3.5 px-4 text-[#5C4E43]">
      {/* Decorative Sun Shape with Shaded Border & Bright Center Glow */}
      {/* <div
        className="absolute -right-[20px] -top-[20px] w-[80px] h-[80px] rounded-full shadow-[inset_-2px_-4px_8px_rgba(220,110,0,0.15)]"
        style={{
          background: 'radial-gradient(circle at 45% 45%, #FFE985 0%, #FAAC1B 65%, #E18B00 100%)'
        }}
      /> */}
      {/* <img className="absolute top-[30%]" src="src/assets/images/icon-weather.svg" alt="icon of a sun" /> */}
      <img
        className="absolute -top-[20px] -right-[20px] w-[80px] h-[80px] max-w-none select-none pointer-events-none"
        src="src/assets/images/icon-weather.svg"
        alt="icon of a sun"
      />

      {/* Content Container */}
      <div className="relative z-10 space-y-0.5">
        <span className="text-preset-10 text-neutral-700">
          TODAY IN CASSIS
        </span>
      </div>
      {/* Calibrated typography utilizing custom display tracking for straight legs/bases */}
      {/* <h3
          className="text-[32px] font-normal text-black tracking-normal leading-[1.2] flex items-start"
          style={{
            fontFamily: 'Cormorant Garamond, Playfair Display, "Times New Roman", serif',
            fontVariantNumeric: 'lining-nums'
          }}
        >
          27
          <span className="text-[20px] font-light leading-none pt-0.5 pl-0.5">°</span>
        </h3> */}
      <div>
        <span className="text-preset-2 text-neutral-900" > 27°
        </span>
      </div>
      <div>
        <p className="text-preset-7 text-neutral-700">
          Sunny • light breeze
        </p>
      </div>
    </div>
  );
}
