interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color: 'blue' | 'darkBlue' | 'red' | 'green';
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

const BUTTON_COLORS = {
  blue: 'bg-fsd-blue',
  darkBlue: 'bg-fsd-darkBlue',
  red: 'bg-fsd-red',
  green: 'bg-fsd-green'
};

const BUTTON_SIZES = {
  sm: 'py-1 w-6 font-semibold text-xs',
  md: 'py-1 px-4 font-semibold text-xs',
  lg: 'py-3 w-full font-normal text-sm'
};

const Button: React.FC<ButtonProps> = ({ onClick, text, color, size, className = '' }) => (
  <button
    className={`text-white text-center rounded uppercase  ${BUTTON_SIZES[size]} ${BUTTON_COLORS[color]} transition hover:bg-opacity-90 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
