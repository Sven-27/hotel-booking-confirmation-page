////
import React from 'react';
// import svg files
import ArrivalIcon from '../assets/images/icon-key.svg';
import WifiIcon from '../assets/images/icon-wifi.svg';
import BreakfastIcon from '../assets/images/icon-breakfast.svg';    


const Bottomcards: React.FC = () => {
  ////
  
  //// maxWidth: '1100px', height: '252px',
  //// width: '350.67px', 


  ////
  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="pt-[20px] px-[16px] xl:px-[var(--spacing-40)] xl:pt-[var(--spacing-32)]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

      <div style={{ maxWidth: '1300px', marginBottom: '40px', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
        
        <div id="card1" className="bg-neutral-50 bottomcard" style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', border: '1px solid var(--color-neutral-400)'}}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <span className="bg-terracotta-600" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px', marginRight: '8px' }}>
                <img src={ArrivalIcon} alt="Arrival" />
              </span>
              <div className="text-terracotta-600 uppercase text-preset-6" >Arrival</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: '16px' }}>
              
              <div className="text-terracotta-600 uppercase text-preset-3" >01</div>
            </div>
              
          </div>

          <div id="card-details1" style={{ marginTop: '24px' }}>
            <div>
              <div id="check-in-info" className="text-neutral-900 text-preset-3">
                Check-in from 15:00
              </div>
              <small id="date" className="text-neutral-600 text-preset-7">
                Sat, 25 April
              </small>
            </div>
            <p id="instructions" className="text-neutral-700 text-preset-5" style={{ marginTop: '16px' }}>
                Please ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.
            </p>

          </div>
          
        </div>

        <div id="card2" className="bg-neutral-50 bottomcard" style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', border: '1px solid var(--color-neutral-400)'}}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <span className="bg-blue-500" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px', marginRight: '8px'}}>
                <img src={WifiIcon} alt="WIFI" />
              </span>
              <div className="text-blue-500 uppercase text-preset-6" >WIFI</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: '16px' }}>
              
              <div className="text-blue-500 uppercase text-preset-3">02</div>
            </div>
          </div>
          

          <div id="details2" style={{ marginTop: '24px' }}>
            <div>
              <div id="wifi-info" className="text-neutral-900 text-preset-3" >
                Le Soleil · Guest
              </div>
              <small id="pw-below" className="text-neutral-600 text-preset-7">
                Password below
              </small>
            </div>
            <div id="wifi-instructions" style={{ marginTop: '16px' }}>
            
              <div id="wifi-info" style={{ marginTop: '16px', padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'var(--color-neutral-200)', borderRadius: '8px' }}>
                 <div className="text-neutral-600 uppercase text-preset-8">Network</div>
                 <div className="text-neutral-900 text-preset-7">Le Soleil · Guest</div>
              </div>
              <div id="pw-below" 
                style={{ padding: '10px', marginTop: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-neutral-200)', borderRadius: '8px' }}>
                <div className="text-neutral-600 uppercase text-preset-8">Password</div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="text-neutral-900 text-preset-7">soleil-2026</div>
                  <div style={{ marginLeft: '10px', borderRadius: '8px', backgroundColor: 'var(--color-neutral-400)', alignItems: 'center', display: 'flex' }}>
                    <button 
                      onClick={() => navigator.clipboard.writeText('soleil-2026')} 
                      className="text-neutral-600 uppercase text-preset-10 bg-neutral-200 
                      border border-neutral-400 
                      hover:bg-neutral-400 focus-visible:border-terracotta-600 focus-visible:outline-none" 
                      style={{ padding: '4px 8px 2px 8px', borderRadius: '8px', cursor: 'pointer' }}>
                        Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div id="card3" className="bg-neutral-50 bottomcard" style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', border: '1px solid var(--color-neutral-400)'}}>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <span className="bg-rose-500" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px', marginRight: '8px'}}>
                <img src={BreakfastIcon} alt="Breakfast" />
              </span>
              <div className="text-rose-500 uppercase text-preset-6" >Breakfast</div>
            </div>
              
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: '16px' }}>
              
              <div className="text-rose-500 uppercase text-preset-3">03</div>
            </div>

          </div>

          <div id="card-details3" style={{ marginTop: '24px' }}>
            <div>
              <div id="breakfast-info" className="text-neutral-900 text-preset-3">
                Served 8 - 10:30
              </div>
              <small id="breakfast-location" className="text-neutral-600 text-preset-7">
                On the terrace
              </small>
            </div>
            <p id="instructions" className="text-neutral-700 text-preset-5" style={{ marginTop: '16px' }}>
              Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Bottomcards;