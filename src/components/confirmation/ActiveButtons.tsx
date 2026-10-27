const ActiveButtons: React.FC = () => {
  return (
    <div className="flex justify-between gap-[16px] sm:mb-[12px]">
      <button type="button" className="button active-state text-neutral-900 text-preset-5-semibold  border border-solid border-neutral-400 border-[1px] hover:bg-neutral-400">Print receipt</button>
      <button type="button" className="button active-state text-preset-5-semibold text-sun-50 bg-neutral-900 hover:bg-neutral-800">Add to calendar</button>
    </div>
  )
}

export default ActiveButtons