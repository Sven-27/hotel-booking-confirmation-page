import ConfirmationHeader from './ConfirmationHeader';
import MainCard from '../MainCard';

const Confirmation: React.FC = () => {
  return (
    <div className="pt-[20px] px-[16px] xl:px-[var(--spacing-40)] xl:pt-[var(--spacing-32)]">
      <ConfirmationHeader />
      <main>
        <MainCard radialColor1='terracotta-400' radialColor2='#C25A2E'>
          iufghiub
        </MainCard>

      </main>
    </div>
  );
};

export default Confirmation;