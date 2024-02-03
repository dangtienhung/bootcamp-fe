interface IFormTextareaProps {
	placeholder?: string;
	name?: string;
	value?: string | number;
	handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	className?: string;
	cols?: number;
	rows?: number;
}

const FormTextarea = ({
	placeholder,
	name,
	value,
	handleChange,
	className,
	cols = 30,
	rows = 10,
}: IFormTextareaProps) => {
	return (
		<textarea
			className={`bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
				className !== undefined ? className : ''
			}`}
			placeholder={placeholder}
			cols={cols}
			rows={rows}
			name={name}
			value={value}
			onChange={(e) => handleChange && handleChange(e)}
		></textarea>
	);
};

export default FormTextarea;
