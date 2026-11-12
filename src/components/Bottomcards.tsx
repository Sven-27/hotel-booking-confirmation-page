////
// import svg files
import ArrivalIcon from '../assets/images/icon-key.svg';
import WifiIcon from '../assets/images/icon-wifi.svg';
import BreakfastIcon from '../assets/images/icon-breakfast.svg'; 
////

function Bottomcards() {
  return (
    <section
      aria-label="Information cards"
      className="mx-auto grid w-full max-w-5xl grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-24 px-24 mt-[var(--spacing-80)]"
    >
      <article className="min-w-0 rounded-2xl border border-slate-200 bg-neutral-50 py-20 px-24 shadow-sm">
        <div id="card1" className="bg-neutral-50" >

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <span className="bg-terracotta-600 flex justify-center items-center rounded-lg w-40 h-40 mr-2">
                <img src={ArrivalIcon} alt="Arrival" />
              </span>
              <div className="text-terracotta-600 uppercase text-preset-6 pl-10" >Arrival</div>
            </div>

            <div className="flex flex-row justify-between items-center ml-4">
              <div className="text-terracotta-600 uppercase text-preset-3" >01</div>
            </div>
              
          </div>

          <div id="card-details1" className="mt-24">
            <div>
              <div id="check-in-info" className="text-neutral-900 text-preset-3">
                Check-in from 15:00
              </div>
              <small id="date" className="text-neutral-600 text-preset-7">
                Sat, 25 April
              </small>
            </div>
            <p id="instructions" className="text-neutral-700 text-preset-5 mt-16" >
                Please ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.
            </p>

          </div>
                 
        </div>
      </article>

      <article className="min-w-0 rounded-2xl border border-slate-200 bg-neutral-50 py-20 px-24 shadow-sm">
        <div id="card2" className="bg-neutral-50" >

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <span className="bg-blue-500 flex justify-center items-center rounded-lg w-40 h-40 mr-2" >
                <img src={WifiIcon} alt="WIFI" />
              </span>
              <div className="text-blue-500 uppercase text-preset-6 pl-10" >WIFI</div>
            </div>

            <div className="flex flex-row justify-between items-center ml-4">
              <div className="text-blue-500 uppercase text-preset-3">02</div>
            </div>

          </div>
          
          <div id="card-details2" className="mt-24">
            <div>
              <div id="wifi-info" className="text-neutral-900 text-preset-3" >
                Le Soleil · Guest
              </div>
              <small id="pw-below" className="text-neutral-600 text-preset-7">
                Password below
              </small>
            </div>
            <div id="wifi-instructions" className="mt-16">
            
              <div id="wifi-info" className="mt-4 p-10 flex flex-row justify-between items-center bg-neutral-200 rounded-lg">
                 <div className="text-neutral-600 uppercase text-preset-8">Network</div>
                 <div className="text-neutral-900 text-preset-7">Le Soleil · Guest</div>
              </div>
              <div id="pw-below" className="mt-2 p-10 flex flex-row justify-between items-center bg-neutral-200 rounded-lg">
                <div className="text-neutral-600 uppercase text-preset-8">Password</div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-neutral-900 text-preset-7">soleil-2026</div>
                  <div className="ml-2 rounded-lg bg-neutral-400 flex items-center">
                    <button 
                      onClick={() => navigator.clipboard.writeText('soleil-2026')} 
                      className="text-neutral-600 uppercase text-preset-10 bg-neutral-200 
                      border border-neutral-400 
                      hover:bg-neutral-400 focus-visible:border-terracotta-600 focus-visible:outline-none 
                      p-1.5 rounded-lg cursor-pointer"
                      >
                        Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </article>

      <article className="min-w-0 rounded-2xl border border-slate-200 bg-neutral-50 py-20 px-24 shadow-sm">
        <div id="card3" className="bg-neutral-50" >
          
          <div className="flex flex-row justify-between items-center">
            
            <div className="flex flex-row items-center">
              <span className="bg-rose-500 flex justify-center items-center rounded-lg w-40 h-40 mr-2" >
                <img src={BreakfastIcon} alt="Breakfast" />
              </span>
              <div className="text-rose-500 uppercase text-preset-6 pl-10" >Breakfast</div>
            </div>
              
            <div className="flex flex-row justify-between items-center ml-4">
              <div className="text-rose-500 uppercase text-preset-3">03</div>
            </div>

          </div>

          <div id="card-details3" className="mt-24">
            <div>
              <div id="breakfast-info" className="text-neutral-900 text-preset-3">
                Served 8 - 10:30
              </div>
              <small id="breakfast-location" className="text-neutral-600 text-preset-7">
                On the terrace
              </small>
            </div>
            <p id="instructions" className="text-neutral-700 text-preset-5 mt-16" >
              Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.
            </p>

          </div>

        </div>
      </article>
    </section>
  )
}

export default Bottomcards
