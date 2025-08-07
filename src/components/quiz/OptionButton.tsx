import { QuizButton } from '@/components/ui/quiz-button';

interface OptionButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
}

export const OptionButton = ({ selected, onClick, children, icon }: OptionButtonProps) => {
  return (
    <QuizButton
      variant="outline"
      size="lg"
      selected={selected}
      onClick={onClick}
      className="w-full text-left justify-start h-auto py-4 px-6 mb-3 text-base"
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span>{children}</span>
      </div>
    </QuizButton>
  );
};