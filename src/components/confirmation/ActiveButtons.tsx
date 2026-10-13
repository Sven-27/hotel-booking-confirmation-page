const ActiveButtons: React.FC = () => {
  return (
    <div className="flex justify-between gap-[16px] sm:mb-[12px]">
      <button type="button" className="button text-neutral-900 text-preset-5-semibold">Print receipt</button>
      <button type="button" className="button text-neutral-900 text-preset-5-semibold text-sun-50 bg-neutral-900">Add to calendar</button>
    </div>
  )
}

export default ActiveButtons