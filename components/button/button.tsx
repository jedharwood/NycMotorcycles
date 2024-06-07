type ButtonProps = {
  text: string;
  type: 'button' | 'submit';
  buttonColour?: ComponentColour;
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
};

const Button = ({
  text,
  type,
  buttonColour = 'green',
  disabled = false,
  onClick,
  id,
}: ButtonProps): JSX.Element => {
  const backgroundColour: string =
    buttonColour === 'red' ? 'bg-rose-500' : 'bg-teal-700';
  const hoverState: string =
    buttonColour === 'red' ? 'hover:bg-rose-400' : 'hover:bg-teal-500';
  const baseClasses: string = `rounded-md px-6 py-2 text-lg ${backgroundColour}`;
  const classes: string = disabled
    ? baseClasses
    : `${baseClasses} ${hoverState}`;

  return (
    <div className='flex justify-center'>
      <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        data-testid={id}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
