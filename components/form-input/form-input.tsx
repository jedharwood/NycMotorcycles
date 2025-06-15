const InputField = ({
    type,
    placeholder,
    name,
    register,
    error,
    label,
}: InputFieldProps): JSX.Element => {
    const classes: string = `bg-stone-50 bg-opacity-90 rounded-md w-full p-2.5 text-gray-900 outline-none focus:ring focus:ring-offset hover:ring hover:ring-offset ${
        error
            ? 'focus:ring-rose-400 hover:ring-rose-400'
            : 'focus:ring-teal-500 hover:ring-teal-500'
    }`;
    const errorClasses: string =
        type === 'text-area'
            ? 'text-xs text-rose-400 block'
            : 'text-xs text-rose-400';

    const input =
        type === 'text-area' ? (
            <textarea
                rows={6}
                placeholder={placeholder}
                {...register(name)}
                className={classes}
                data-testid={name}
            />
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={classes}
                data-testid={name}
            />
        );

    return (
        <div className='flex justify-center'>
            <div className='w-full md:w-3/4 lg:w-1/2'>
                <label htmlFor={name} className='mb-2 block'>
                    {label}
                </label>
                {input}
                {error && <span className={errorClasses}>{error.message}</span>}
            </div>
        </div>
    );
};

export default InputField;
