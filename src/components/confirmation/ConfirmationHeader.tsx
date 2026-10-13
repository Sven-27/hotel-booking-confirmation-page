import ActiveButtons from './ActiveButtons';

const ConfirmationHeader: React.FC = () => {
  return (
    <section>
      <div>
        <p><small>Booking · Confirmed</small></p>
        <h1>Bienvenue, <span>Lucia</span>.</h1>
      </div>
      <ActiveButtons />
    </section>
  )
}

export default ConfirmationHeader