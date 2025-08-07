import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { TextInput } from '@/components/quiz/TextInput';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';

export const MeasurementsQuestion = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();

  const handleNext = () => {
    if (answers.height && answers.weight && answers.targetWeight) {
      navigate('/quiz/bloating');
    }
  };

  const canProceed = !!(answers.height && answers.weight && answers.targetWeight);

  return (
    <QuizLayout 
      progress={((currentStep + 2) / totalSteps) * 100} 
      currentStep={currentStep + 2} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        Vamos entender melhor seu perfil
      </QuestionTitle>

      <div className="space-y-6">
        <TextInput
          label="Qual sua altura?"
          value={answers.height}
          onChange={(value) => updateAnswer('height', value)}
          placeholder="Ex: 1,65m"
        />

        <TextInput
          label="Qual seu peso atual?"
          value={answers.weight}
          onChange={(value) => updateAnswer('weight', value)}
          placeholder="Ex: 70kg"
        />

        <TextInput
          label="Qual peso você gostaria de atingir?"
          value={answers.targetWeight}
          onChange={(value) => updateAnswer('targetWeight', value)}
          placeholder="Ex: 60kg"
        />
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={() => navigate('/quiz/age')}
        canProceed={canProceed}
      />
    </QuizLayout>
  );
};