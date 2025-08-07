import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import genderImage from '@/assets/gender-silhouettes.webp';

export const GenderQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'female', label: 'Sou mulher', icon: '♀️' },
    { value: 'male', label: 'Sou homem', icon: '♂️' }
  ];

  const handleNext = () => {
    if (answers.gender) {
      navigate('/quiz/age');
    }
  };

  return (
    <QuizLayout 
      progress={(currentStep / totalSteps) * 100} 
      currentStep={currentStep} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Qual o seu gênero?
      </QuestionTitle>

      <QuestionImage 
        src={genderImage} 
        alt="Silhuetas feminina e masculina estilizadas" 
        className="max-w-md mx-auto"
      />

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.gender === option.value}
            onClick={() => updateAnswer('gender', option.value)}
            icon={option.icon}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz')}
        canProceed={!!answers.gender}
      />
    </QuizLayout>
  );
};