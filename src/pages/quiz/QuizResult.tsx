import { useEffect } from 'react';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuizButton } from '@/components/ui/quiz-button';
import { useQuiz } from '@/contexts/QuizContext';

export const QuizResult = () => {
  const { totalSteps } = useQuiz();

  useEffect(() => {
    // Redirecionar automaticamente após 3 segundos
    const timer = setTimeout(() => {
      window.location.href = 'https://naviroo.site/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://naviroo.site/';
  };

  return (
    <QuizLayout 
      progress={100} 
      currentStep={totalSteps} 
      totalSteps={totalSteps}
    >
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">🎉</span>
        </div>
        
        <QuestionTitle>
          Resultado:
        </QuestionTitle>
        
        <div className="text-left space-y-4 mb-8">
          <p className="text-lg leading-relaxed">
            Seu corpo pode estar travado por retenção, metabolismo lento e excesso de toxinas.
          </p>
          
          <p className="text-lg leading-relaxed">
            Mas existe um ritual natural e simples, inspirado na cultura japonesa, que pode começar a liberar o inchaço em até 72h — mesmo que você já tenha tentado de tudo.
          </p>
          
          <p className="text-lg leading-relaxed">
            Mais de 9.500 mulheres já testaram essa combinação e tiveram resultados reais, sem sofrimento.
          </p>
        </div>

        <div className="bg-primary-soft p-6 rounded-xl mb-8">
          <h3 className="text-xl font-bold mb-4">
            👉 Quer descobrir esse protocolo passo a passo?
          </h3>
          <p className="text-lg mb-4">
            🔽 Clique aqui para acessar a apresentação completa agora mesmo.
          </p>
        </div>

        <QuizButton
          variant="default"
          size="lg"
          onClick={handleRedirect}
          className="px-12 py-4 text-lg animate-pulse"
        >
          Acessar Apresentação Completa
        </QuizButton>

        <p className="text-sm text-muted-foreground mt-4">
          Redirecionando automaticamente em alguns segundos...
        </p>
      </div>
    </QuizLayout>
  );
};