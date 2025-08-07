import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const QuizStart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirecionar imediatamente para a primeira pergunta
    navigate('/quiz/gender', { replace: true });
  }, [navigate]);

  return null;
};