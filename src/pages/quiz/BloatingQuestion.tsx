import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import bellyImage from '@/assets/woman-belly-discomfort.webp';

export const BloatingQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const options = [
    { value: 'daily', label: 'Sim, todos os dias' },
    { value: 'almost_always', label: 'Quase sempre' },
    { value: 'sometimes', label: 'Às vezes' },
    { value: 'no', label: 'Não' }
  ];

  const handleNext = () => {
    if (answers.bloating) {
      navigate('/quiz/previous-attempts');
    }
  };

  return (
    <QuizLayout 
      progress={((currentStep + 3) / totalSteps) * 100} 
      currentStep={currentStep + 3} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Você sente sua barriga sempre inchada, mesmo comendo pouco?
      </QuestionTitle>

      <QuestionImage 
        src={bellyImage} 
        alt="Mulher tocando a barriga com expressão incomodada" 
        className="max-w-sm mx-auto"
      />

      <div className="space-y-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={answers.bloating === option.value}
            onClick={() => updateAnswer('bloating', option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/measurements')}
        canProceed={!!answers.bloating}
      />
    </QuizLayout>
  );
};