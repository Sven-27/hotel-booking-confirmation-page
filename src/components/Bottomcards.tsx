////
// import svg files
import ArrivalIcon from '../assets/images/icon-key.svg';
import WifiIcon from '../assets/images/icon-wifi.svg';
import BreakfastIcon from '../assets/images/icon-breakfast.svg';    


const Bottomcards: React.FC = () => {
  ////



  ////
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <div style={{ width: '1100px', height: '252px', border: '1px solid black', marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        
        <div className="bg-neutral-50" style={{ borderRadius: '16px', border: '1px solid black', width: '350.67px', padding: '24px 20px'}}>

          <div style={{  display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <span className="bg-terracotta-600" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px'}}>
                <img src={ArrivalIcon} alt="Arrival" />
              </span>
              
              <div style={{ width: '260.67px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '16px' }}>
                <div className="text-terracotta-600 uppercase" >Arrival</div>
                <div className="text-terracotta-600 uppercase" >01</div>
              </div>
              
          </div>

          <div id="card-details1">
            <div>
              <div id="check-in-info">
                Check-in from 15:00
              </div>
              <div id="date">
                Sat, 25 April
              </div>
            </div>
            <div id="instructions">
                Please ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.
            </div>

          </div>
          
        </div>

        <div className="bg-neutral-50" style={{ borderRadius: '16px', border: '1px solid black', width: '350.67px', padding: '24px 20px'}}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              
              <span className="bg-blue-500" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px'}}>
                <img src={WifiIcon} alt="WIFI" />
              </span>
              
              <div style={{ width: '260.67px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '16px' }}>
                <div className="text-blue-500 uppercase" >WIFI</div>
                <div className="text-blue-500 uppercase">02</div>
              </div>

          </div>

          <div id="details2">
            <div>
              <div id="wifi-info">
                Le Soleil · Guest
              </div>
              <div id="pw-below">
                Password below
              </div>
            </div>
            <div id="wifi-instructions">
              <div id="wifi-info" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                 <div>Network</div>
                 <div>Le Soleil · Guest</div>
              </div>
              <div id="pw-below" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>Password</div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>soleil-2026</div>
                  <button>Copy</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-neutral-50" style={{ borderRadius: '16px', border: '1px solid black', width: '350.67px', padding: '24px 20px'}}>
          
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              
              <span className="bg-rose-500" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '40px', height: '40px'}}>
                <img src={BreakfastIcon} alt="Breakfast" />
              </span>
              
              <div style={{ width: '260.67px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '16px' }}>
                <div className="text-rose-500 uppercase" >Breakfast</div>
                <div className="text-rose-500 uppercase">03</div>
              </div>

          </div>

          <div id="card-details3">
            <div>
              <div id="breakfast-info">
                Served 8 - 10:30
              </div>
              <div id="breakfast-location">
                On the terrace
              </div>
            </div>
            <div id="instructions">
              Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Bottomcards;