interface QuestionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const QuestionImage = ({ src, alt, className = "" }: QuestionImageProps) => {
  return (
    <div className={`mb-6 flex justify-center ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="rounded-xl shadow-soft max-w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
};