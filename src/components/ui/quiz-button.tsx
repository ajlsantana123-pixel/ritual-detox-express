import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const quizButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-soft hover:shadow-card",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02]",
        outline: "border-2 border-primary bg-background text-foreground hover:bg-primary-soft hover:border-primary",
        soft: "bg-primary-soft text-foreground hover:bg-primary hover:text-primary-foreground",
        natural: "bg-gradient-secondary text-secondary-foreground hover:opacity-90 hover:scale-[1.02]"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof quizButtonVariants> {
  selected?: boolean
}

const QuizButton = React.forwardRef<HTMLButtonElement, QuizButtonProps>(
  ({ className, variant, size, selected, ...props }, ref) => {
    return (
      <button
        className={cn(
          quizButtonVariants({ variant, size, className }),
          selected && "ring-2 ring-primary bg-primary text-primary-foreground scale-[1.02]"
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
QuizButton.displayName = "QuizButton"

export { QuizButton, quizButtonVariants }