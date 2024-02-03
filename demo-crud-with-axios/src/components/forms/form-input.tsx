interface IFormInputProps {
	type?: string;
	placeholder?: string;
	name?: string;
	value?: string | number;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const FormInput = ({
	type = 'text',
	placeholder,
	name,
	value,
	handleChange,
	className,
}: IFormInputProps) => {
	return (
		<input
			type={type}
			className={`bg-gray-50 border border-gray-600 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
				className !== undefined ? className : ''
			}`}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={(e) => handleChange && handleChange(e)}
		/>
	);
};

export default FormInput;
