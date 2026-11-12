import type React from 'react';

export default function WeatherCard(): React.JSX.Element {
  return (
    <div className="relative overflow-hidden  rounded-2xl pt-3 pb-3.5 px-4">
      <img
        className="absolute -top-[20px] -right-[20px] w-[80px] h-[80px] max-w-none select-none pointer-events-none"
        src="src/assets/images/icon-weather.svg"
        alt="icon of weather" />
      {/* Content Container */}
      <div className="relative z-10 space-y-0.5">
        <span className="text-preset-10 text-neutral-700">
          TODAY IN CASSIS
        </span>
      </div>
      <div>
        <span className="text-preset-2 text-neutral-900 my-[16px]" > 27°
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
