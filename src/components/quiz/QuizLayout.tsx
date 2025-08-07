import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface QuizLayoutProps {
  children: ReactNode;
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export const QuizLayout = ({ children, progress, currentStep, totalSteps }: QuizLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Pergunta {currentStep} de {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% completo
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-6 md:p-8 shadow-card border-0 bg-gradient-warm">
          {children}
        </Card>
      </div>
    </div>
  );
};