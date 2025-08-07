import { createContext, useContext, useState, ReactNode } from 'react';

export interface QuizAnswers {
  gender: string;
  age: string;
  height: string;
  weight: string;
  targetWeight: string;
  bloating: string;
  previousAttempts: string;
  timeStruggling: string;
  clothingFeelings: string;
  bodyChanges: string;
  selfPerception: string;
  priorities: string;
  mainDifficulty: string;
  desires: string;
  timeframe: string;
}

interface QuizContextType {
  answers: QuizAnswers;
  updateAnswer: (key: keyof QuizAnswers, value: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialAnswers: QuizAnswers = {
  gender: '',
  age: '',
  height: '',
  weight: '',
  targetWeight: '',
  bloating: '',
  previousAttempts: '',
  timeStruggling: '',
  clothingFeelings: '',
  bodyChanges: '',
  selfPerception: '',
  priorities: '',
  mainDifficulty: '',
  desires: '',
  timeframe: ''
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 15;

  const updateAnswer = (key: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  return (
    <QuizContext.Provider value={{
      answers,
      updateAnswer,
      currentStep,
      setCurrentStep,
      totalSteps
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};