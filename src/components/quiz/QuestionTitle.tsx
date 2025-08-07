import { ReactNode } from 'react';

interface QuestionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export const QuestionTitle = ({ children, subtitle }: QuestionTitleProps) => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-foreground leading-tight">
        {children}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};