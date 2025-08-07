import { useNavigate } from 'react-router-dom';
import { QuizButton } from '@/components/ui/quiz-button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-6xl">🌸</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
          Descubra Seu Ritual Natural de Bem-Estar
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Um quiz personalizado para descobrir qual método natural pode ajudar você a eliminar o inchaço e se sentir melhor em apenas 14 dias.
        </p>

        <div className="bg-gradient-warm p-8 rounded-2xl shadow-card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            🎯 Descubra em poucos minutos:
          </h2>
          <ul className="text-left space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-primary">✨</span>
              Qual ritual natural é ideal para seu perfil
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✨</span>
              Como eliminar o inchaço de forma natural
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✨</span>
              O protocolo usado por mais de 9.500 mulheres
            </li>
          </ul>
        </div>

        <QuizButton
          variant="default"
          size="lg"
          onClick={() => navigate('/quiz')}
          className="px-12 py-4 text-xl animate-pulse"
        >
          Começar Quiz Gratuito
        </QuizButton>
        
        <p className="text-sm text-muted-foreground mt-4">
          ⏱️ Leva apenas 2-3 minutos para completar
        </p>
      </div>
    </div>
  );
};

export default Index;
