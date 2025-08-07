import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { QuizProvider } from "./contexts/QuizContext";

// Quiz pages
import { QuizStart } from "./pages/quiz/QuizStart";
import { GenderQuestion } from "./pages/quiz/GenderQuestion";
import { AgeQuestion } from "./pages/quiz/AgeQuestion";
import { MeasurementsQuestion } from "./pages/quiz/MeasurementsQuestion";
import { BloatingQuestion } from "./pages/quiz/BloatingQuestion";
import { PreviousAttemptsQuestion } from "./pages/quiz/PreviousAttemptsQuestion";
import { TimeStrugglingQuestion } from "./pages/quiz/TimeStrugglingQuestion";
import { ClothingFeelingsQuestion } from "./pages/quiz/ClothingFeelingsQuestion";
import { FinalQuestionsPage } from "./pages/quiz/FinalQuestionsPage";
import { QuizResult } from "./pages/quiz/QuizResult";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <QuizProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<QuizStart />} />
            <Route path="/quiz/gender" element={<GenderQuestion />} />
            <Route path="/quiz/age" element={<AgeQuestion />} />
            <Route path="/quiz/measurements" element={<MeasurementsQuestion />} />
            <Route path="/quiz/bloating" element={<BloatingQuestion />} />
            <Route path="/quiz/previous-attempts" element={<PreviousAttemptsQuestion />} />
            <Route path="/quiz/time-struggling" element={<TimeStrugglingQuestion />} />
            <Route path="/quiz/clothing-feelings" element={<ClothingFeelingsQuestion />} />
            <Route path="/quiz/final-questions" element={<FinalQuestionsPage />} />
            <Route path="/quiz/result" element={<QuizResult />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QuizProvider>
  </QueryClientProvider>
);

export default App;
