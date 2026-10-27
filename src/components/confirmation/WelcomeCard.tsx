import React from 'react'

const WelcomeCard: React.FC = () => {
  return (
    <div className="card rotate-[4deg] bg-[radial-gradient(circle_at_top_right,_#E07A3F_0%,_#C25A2E_30%,_#9F3E1D_90%)] animate-fan 
            lg:group-hover:ml-[82px] lg:group-hover:rotate-[-4deg]">
      <div className="flex justify-between">
        <small className="uppercase text-preset-5-medium text-sun-50 pt-3">Welcome card</small>
        <img src="src/assets/images/icon-sun.svg" className="mt-[15px]" /> 
      </div>
      <section className="pt-12">
        <h2 className="text-preset-4 italic text-sun-200">
          A note from your host,<br/> 
          <span className="text-preset-1-italic text-sun-50">Margaux.</span>
        </h2>
        <p className="text-preset-5-medium text-sun-50 pt-24">
          We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </section>
      <div className="flex flex-col justify-end h-[100px] xl:h-[125px]">
        <small className="text-preset-10 uppercase text-sun-50">Room</small>
        <p className="text-preset-4 text-sun-50">La Garrigue</p>
      </div>
    </div>
  )
}

export default WelcomeCard