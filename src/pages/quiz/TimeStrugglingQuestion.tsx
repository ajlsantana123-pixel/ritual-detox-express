import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';

export const TimeStrugglingQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'under_3_months', label: 'Menos de 3 meses' },
    { value: '3_to_6_months', label: 'Entre 3 e 6 meses' },
    { value: 'over_1_year', label: 'Mais de 1 ano' },
    { value: 'always', label: 'Desde sempre' }
  ];

  const handleNext = () => {
    if (answers.timeStruggling) {
      navigate('/quiz/clothing-feelings');
    }
  };

  return (
    <QuizLayout 
      progress={((currentStep + 5) / totalSteps) * 100} 
      currentStep={currentStep + 5} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Há quanto tempo você sofre com inchaço ou dificuldade para emagrecer?
      </QuestionTitle>

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.timeStruggling === option.value}
            onClick={() => updateAnswer('timeStruggling', option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/previous-attempts')}
        canProceed={!!answers.timeStruggling}
      />
    </QuizLayout>
  );
};