

const ReceiptCard: React.FC = () => {
  return (
    <div className="card bg-white rotate-[-2deg]">
      <div className="flex pb-8">
        <p className="w-full flex flex-col">
          <small className="text-preset-10 text-neutral-600 uppercase">
            Receipt
          </small>      
          <span className="text-preset-4 text-neutral-900">Your stay</span>
        </p> 
        <small className="w-full text-right text-preset-10 text-neutral-600">
          № MS-2026<br/>
          0421-AH
        </small>
      </div>
      <div className="flex justify-between text-center border-y-1 border-dashed border-neutral-400 py-16 xl:px-24">
        <div className="flex flex-col">
          <small className="text-preset-10 uppercase text-neutral-600">Check in</small>
          <time className="text-preset-2 py-8 text-neutral-900" dateTime="04-25">25 Apr</time>
          <small className="text-preset-7 text-neutral-700">Saturday - <time dateTime="15:00">15:00</time></small>
        </div>
        <div className="flex flex-col">
          <small className="text-preset-10 uppercase text-neutral-600">Check out</small>
          <time className="text-preset-2 py-8 text-neutral-900" dateTime="04-29">29 Apr</time>
          <small className="text-preset-7 text-neutral-700">Wednesday - <time dateTime="11:00">11:00</time></small>
        </div>
      </div>
      <div className="py-12 border-b-1 border-neutral-600">
        <p className="flex items-center justify-between text-preset-5-medium text-neutral-900 pb-10">
          Room · La Garrigue · 4 nights
          <data value="620.00" className="text-preset-9">&euro;&nbsp;620.00</data>
        </p>
        <p className="flex items-center justify-between text-preset-5-medium text-neutral-900 pb-10">
          Breakfast · 2 guests
          <data value="96.00" className="text-preset-9">&euro;&nbsp;96.00</data>
        </p>
        <p className="flex items-center justify-between text-preset-5-medium text-neutral-900 pb-10">
          Tourist tax
          <data value="14.40" className="text-preset-9">&euro;&nbsp;14.40</data>
        </p>
      </div>
      <div className="">
        <p className="flex justify-between items-center pt-16">
          <small className="text-preset-8 uppercase text-neutral-600">Total paid</small>
          <data value="96.00" className="text-preset-3 text-neutral-900">&euro;&nbsp;730.40</data>
        </p>
        <p className="flex justify-between items-center pt-24">
          <small className="text-preset-10 uppercase text-neutral-600">Paid · Wise · GBP</small>
          <img className="w-[95px]" src="src/assets/images/icon-barcode.svg" alt="image of a barcode" />
        </p>
      </div>
    </div>
  )
}

export default ReceiptCard