import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export const TextInput = ({ label, value, onChange, placeholder, type = "text" }: TextInputProps) => {
  return (
    <div className="mb-6">
      <Label className="text-lg font-medium mb-3 block text-foreground">
        {label}
      </Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 text-base border-2 focus:border-primary bg-background/70"
      />
    </div>
  );
};