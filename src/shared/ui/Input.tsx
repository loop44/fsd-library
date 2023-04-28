interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, value, placeholder, onChange }) => (
  <input
    className="mb-8 border-b border-b-[#9A9A9A] text-sm py-1 px-2 w-full"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    type={type}
  />
);

export default Input;
