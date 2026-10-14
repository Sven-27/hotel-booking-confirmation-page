import ConfirmationHeader from './ConfirmationHeader';
import ReceiptCard from './ReceiptCard';

const Confirmation: React.FC = () => {
  return (
    <div className="pt-[20px] px-[16px] xl:px-[var(--spacing-40)] xl:pt-[var(--spacing-32)]">
      <ConfirmationHeader />
      <main>
        <ReceiptCard />

      </main>
    </div>
  );
};

export default Confirmation;