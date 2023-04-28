interface ButtonProps {
  onClick: () => void;
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
  sm: 'py-1 w-6 font-semibold',
  md: 'py-1 px-4 font-semibold',
  lg: 'py-3 w-full font-normal'
};

const Button: React.FC<ButtonProps> = ({ onClick, text, color, size, className = '' }) => (
  <button
    className={`text-white text-center rounded uppercase text-xs ${BUTTON_SIZES[size]} ${BUTTON_COLORS[color]} transition hover:bg-opacity-90 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
