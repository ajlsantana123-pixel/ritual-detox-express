import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import ageImage from '@/assets/age-groups-icons.webp';

export const AgeQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'under30', label: 'Menos de 30 anos', icon: '🌸' },
    { value: '30-39', label: 'Entre 30 e 39 anos', icon: '🌿' },
    { value: '40-49', label: 'Entre 40 e 49 anos', icon: '🍃' },
    { value: '50plus', label: '50 anos ou mais', icon: '🌺' }
  ];

  const handleNext = () => {
    if (answers.age) {
      navigate('/quiz/measurements');
    }
  };

  return (
    <QuizLayout 
      progress={((currentStep + 1) / totalSteps) * 100} 
      currentStep={currentStep + 1} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Qual sua idade?
      </QuestionTitle>

      <QuestionImage 
        src={ageImage} 
        alt="Ícones representando diferentes faixas etárias" 
        className="max-w-md mx-auto"
      />

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.age === option.value}
            onClick={() => updateAnswer('age', option.value)}
            icon={option.icon}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/gender')}
        canProceed={!!answers.age}
      />
    </QuizLayout>
  );
};