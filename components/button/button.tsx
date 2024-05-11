import { useIntl } from 'react-intl';

type ButtonProps = {
  type: 'button' | 'submit';
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  buttonColour?: ComponentColour;
};

const Button = ({
  type,
  text,
  disabled = false,
  onClick,
  buttonColour = 'green',
}: ButtonProps): JSX.Element => {
  const intl = useIntl();
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
      >
        {intl.formatMessage({
          id: text,
        })}
      </button>
    </div>
  );
};

export default Button;
