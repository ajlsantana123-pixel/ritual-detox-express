import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import frustrationsImage from '@/assets/diet-frustration-collage.webp';

export const PreviousAttemptsQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'restrictive_diets', label: 'Dietas restritivas (jejum, low carb)' },
    { value: 'random_teas', label: 'Chás aleatórios da internet' },
    { value: 'gym_no_results', label: 'Academia sem resultado' },
    { value: 'side_effects_meds', label: 'Remédios que deram efeito colateral' },
    { value: 'all_above', label: 'Todas as anteriores' }
  ];

  const handleNext = () => {
    if (answers.previousAttempts) {
      navigate('/quiz/time-struggling');
    }
  };

  return (
    <QuizLayout 
      progress={((currentStep + 4) / totalSteps) * 100} 
      currentStep={currentStep + 4} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Você já tentou alguma dessas soluções e se frustrou?
      </QuestionTitle>

      <QuestionImage 
        src={frustrationsImage} 
        alt="Colagem de frascos, folhas de chá e mulher cansada" 
        className="max-w-md mx-auto"
      />

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.previousAttempts === option.value}
            onClick={() => updateAnswer('previousAttempts', option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/bloating')}
        canProceed={!!answers.previousAttempts}
      />
    </QuizLayout>
  );
};