import ConfirmationHeader from './ConfirmationHeader';
import ReceiptCard from './ReceiptCard';
import WelcomeCard from './WelcomeCard';

const Confirmation: React.FC = () => {
  return (
    <div className="pt-[20px] px-[16px] xl:px-[var(--spacing-40)] xl:pt-[var(--spacing-32)]">
      <ConfirmationHeader />
      <main className="flex flex-col-reverse items-center md:flex-row md:justify-center">
        <ReceiptCard />
        <WelcomeCard />
      </main>
    </div>
  );
};

export default Confirmation;