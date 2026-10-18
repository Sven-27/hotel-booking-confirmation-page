import ConfirmationHeader from './ConfirmationHeader';
import ReceiptCard from './ReceiptCard';
import WelcomeCard from './WelcomeCard';

const Confirmation: React.FC = () => {
  return (
    <div className="pt-[20px] px-[16px] xl:px-[var(--spacing-40)] xl:pt-[var(--spacing-32)]">
      <ConfirmationHeader />
      <main className="sun flex flex-col-reverse items-center md:flex-row md:justify-center group relative">
        <ReceiptCard />
        <WelcomeCard />
        <small className="red-star absolute bottom-[-30px] uppercase text-preset-10 text-neutral-600 flex items-center gap-[12px]">
          Hover to fan
        </small>
      </main>
    </div>
  );
};

export default Confirmation;