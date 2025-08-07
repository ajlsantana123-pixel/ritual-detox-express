import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import tightDressImage from '@/assets/woman-tight-dress.webp';

export const ClothingFeelingsQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'frustrated', label: 'Frustrada' },
    { value: 'sad', label: 'Triste' },
    { value: 'avoid_trying', label: 'Evito até tentar' },
    { value: 'dont_care', label: 'Não ligo muito' }
  ];

  const handleNext = () => {
    if (answers.clothingFeelings) {
      navigate('/quiz/final-questions');
    }
  };

  return (
    <QuizLayout 
      progress={((currentStep + 6) / totalSteps) * 100} 
      currentStep={currentStep + 6} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Como você se sente quando tenta usar uma roupa que gostava e ela não serve mais?
      </QuestionTitle>

      <QuestionImage 
        src={tightDressImage} 
        alt="Mulher segurando vestido apertado" 
        className="max-w-sm mx-auto"
      />

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.clothingFeelings === option.value}
            onClick={() => updateAnswer('clothingFeelings', option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/time-struggling')}
        canProceed={!!answers.clothingFeelings}
      />
    </QuizLayout>
  );
};