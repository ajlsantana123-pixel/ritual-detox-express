import { QuizButton } from '@/components/ui/quiz-button';

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious?: () => void;
  canProceed: boolean;
  isLastStep?: boolean;
  nextLabel?: string;
}

export const NavigationButtons = ({ 
  onNext, 
  onPrevious, 
  canProceed, 
  isLastStep = false,
  nextLabel 
}: NavigationButtonsProps) => {
  return (
    <div className="flex gap-4 mt-8 justify-center">
      {onPrevious && (
        <QuizButton
          variant="outline"
          size="lg"
          onClick={onPrevious}
          className="min-w-[120px]"
        >
          Voltar
        </QuizButton>
      )}
      <QuizButton
        variant="default"
        size="lg"
        onClick={onNext}
        disabled={!canProceed}
        className="min-w-[120px]"
      >
        {nextLabel || (isLastStep ? 'Ver Resultado' : 'Próxima')}
      </QuizButton>
    </div>
  );
};