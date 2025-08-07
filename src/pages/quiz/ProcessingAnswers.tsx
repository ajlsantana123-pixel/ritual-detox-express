import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { useQuiz } from '@/contexts/QuizContext';

export const ProcessingAnswers = () => {
  const navigate = useNavigate();
  const { totalSteps } = useQuiz();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular processamento das respostas
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Redirecionar para o resultado após completar
          setTimeout(() => {
            navigate('/quiz/result');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <QuizLayout 
      progress={100} 
      currentStep={totalSteps} 
      totalSteps={totalSteps}
    >
      <div className="text-center">
        <div className="mb-8">
          <span className="text-6xl">🔍</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">
          Analisando suas respostas...
        </h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-primary-soft p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Processando dados</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <div className="text-left space-y-2 text-sm text-muted-foreground">
            <p className={progress > 20 ? "text-primary" : ""}>
              ✓ Avaliando seu perfil corporal...
            </p>
            <p className={progress > 50 ? "text-primary" : ""}>
              ✓ Identificando bloqueios metabólicos...
            </p>
            <p className={progress > 80 ? "text-primary" : ""}>
              ✓ Encontrando a solução ideal para você...
            </p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Aguarde enquanto preparamos seu resultado personalizado...
        </p>
      </div>
    </QuizLayout>
  );
};