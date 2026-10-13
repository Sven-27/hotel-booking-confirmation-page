import ActiveButtons from './ActiveButtons';

const ConfirmationHeader: React.FC = () => {
  return (
    <section>
      <div className="pb-[16px]">
        <p className="text-preset-8 uppercase text-neutral-600"><small>Booking · Confirmed</small></p>
        <h1 className="text-preset-1-normal text-neutral-900">Bienvenue, <span className="italic text-terracotta-600">Lucia.</span></h1>
      </div>
      <ActiveButtons />
    </section>
  )
}

export default ConfirmationHeader