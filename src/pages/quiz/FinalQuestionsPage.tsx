import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizLayout } from '@/components/quiz/QuizLayout';
import { QuestionTitle } from '@/components/quiz/QuestionTitle';
import { QuestionImage } from '@/components/quiz/QuestionImage';
import { OptionButton } from '@/components/quiz/OptionButton';
import { NavigationButtons } from '@/components/quiz/NavigationButtons';
import { useQuiz } from '@/contexts/QuizContext';
import confidentWomanImage from '@/assets/woman-confident-dress.webp';

export const FinalQuestionsPage = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, currentStep, totalSteps } = useQuiz();
  const [localStep, setLocalStep] = useState(1);

  const questions = [
    {
      key: 'bodyChanges' as const,
      title: 'Você sente que seu corpo mudou depois da menopausa ou da maternidade?',
      options: [
        { value: 'completely_changed', label: 'Sim, completamente' },
        { value: 'slightly_changed', label: 'Mudou um pouco, mas consigo lidar' },
        { value: 'trying_to_understand', label: 'Ainda estou tentando entender o que mudou' },
        { value: 'no_changes', label: 'Não notei grandes mudanças' }
      ]
    },
    {
      key: 'selfPerception' as const,
      title: 'Qual dessas frases representa melhor como você se sente hoje?',
      options: [
        { value: 'dont_recognize', label: '"Me olho no espelho e não me reconheço"' },
        { value: 'ashamed_photos', label: '"Tenho vergonha de tirar fotos"' },
        { value: 'no_time', label: '"Não tenho tempo pra cuidar de mim"' },
        { value: 'want_to_feel_good', label: '"Eu só queria me sentir bem de novo"' }
      ]
    },
    {
      key: 'priorities' as const,
      title: 'Você sente que prioriza todo mundo (família, trabalho, casa) menos você?',
      options: [
        { value: 'all_the_time', label: 'Sim, o tempo todo' },
        { value: 'sometimes_try', label: 'Às vezes, mas tento me cuidar' },
        { value: 'have_time', label: 'Não, tenho tempo pra mim' },
        { value: 'never_thought', label: 'Nunca parei pra pensar nisso' }
      ]
    },
    {
      key: 'mainDifficulty' as const,
      title: 'Qual sua maior dificuldade hoje quando tenta emagrecer ou se cuidar?',
      options: [
        { value: 'lack_of_time', label: 'Falta de tempo' },
        { value: 'lack_of_energy', label: 'Falta de energia/disposição' },
        { value: 'lack_of_motivation', label: 'Falta de motivação/confiança' },
        { value: 'dont_know_where_to_start', label: 'Não saber por onde começar' }
      ]
    },
    {
      key: 'desires' as const,
      title: 'O que você mais deseja ao eliminar o inchaço e secar a barriga?',
      options: [
        { value: 'wear_tight_clothes', label: 'Usar roupas justas sem se sentir mal' },
        { value: 'receive_compliments', label: 'Ouvir elogios do meu parceiro e amigas' },
        { value: 'have_energy', label: 'Ter mais energia e leveza no corpo' },
        { value: 'like_myself', label: 'Voltar a gostar de mim mesma' },
        { value: 'all_above', label: 'Todas as anteriores' }
      ],
      image: confidentWomanImage,
      imageAlt: 'Mulher sorrindo com vestido justo'
    },
    {
      key: 'timeframe' as const,
      title: 'Em quanto tempo você gostaria de ver os primeiros resultados?',
      options: [
        { value: 'up_to_3_days', label: 'Em até 3 dias' },
        { value: 'in_1_week', label: 'Em 1 semana' },
        { value: 'in_15_days', label: 'Em 15 dias' },
        { value: 'no_rush', label: 'Não tenho pressa, mas quero algo que funcione' }
      ]
    }
  ];

  const currentQuestion = questions[localStep - 1];
  const currentAnswer = answers[currentQuestion.key];

  const handleNext = () => {
    if (localStep < questions.length) {
      setLocalStep(localStep + 1);
    } else {
      navigate('/quiz/processing');
    }
  };

  const handlePrevious = () => {
    if (localStep > 1) {
      setLocalStep(localStep - 1);
    } else {
      navigate('/quiz/clothing-feelings');
    }
  };

  const progress = ((currentStep + 6 + localStep) / totalSteps) * 100;
  const stepNumber = currentStep + 6 + localStep;

  return (
    <QuizLayout 
      progress={progress}
      currentStep={stepNumber} 
      totalSteps={totalSteps}
    >
      <QuestionTitle>
        {currentQuestion.title}
      </QuestionTitle>

      {currentQuestion.image && (
        <QuestionImage 
          src={currentQuestion.image} 
          alt={currentQuestion.imageAlt || ''} 
          className="max-w-sm mx-auto"
        />
      )}

      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <OptionButton
            key={option.value}
            selected={currentAnswer === option.value}
            onClick={() => updateAnswer(currentQuestion.key, option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>

      <NavigationButtons
        onNext={handleNext}
        onPrevious={handlePrevious}
        canProceed={!!currentAnswer}
        isLastStep={localStep === questions.length}
      />
    </QuizLayout>
  );
};