

const ReceiptCard: React.FC = () => {
  return (
    <div className="card bg-white p-16 rounded-xl">
      <div className="flex border-b border-neutral-400 pb-8">
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
    </div>
  )
}

export default ReceiptCard