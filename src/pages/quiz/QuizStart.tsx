import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuizButton } from '@/components/ui/quiz-button';
import { useQuiz } from '@/contexts/QuizContext';

export const QuizStart = () => {
  const navigate = useNavigate();
  const { totalSteps } = useQuiz();

  return (
    <QuizLayout 
      progress={0} 
      currentStep={0} 
      totalSteps={totalSteps}
    >
      <div className="text-center">
        <div className="mb-8">
          <span className="text-4xl">🎯</span>
        </div>
        
        <QuestionTitle>
          Descubra qual ritual natural pode ajudar seu corpo a eliminar o inchaço e a gordura acumulada nos próximos 14 dias.
        </QuestionTitle>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Vamos começar pelo básico:
        </p>

        <QuizButton
          variant="default"
          size="lg"
          onClick={() => navigate('/quiz/gender')}
          className="px-12 py-4 text-lg"
        >
          Começar Quiz
        </QuizButton>
      </div>
    </QuizLayout>
  );
};