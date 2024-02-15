import {clsxm} from '@/utils';

interface InputProps {
	type?: string;
	id?: string;
	className?: string;
	placeholder?: string;
}

export const Input = ({type = 'text', id, className, placeholder}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			className={clsxm(
				`border border-gray-l2 rounded-md p-2 outline-none focus:border-gray-100`,
				className,
			)}
		/>
	);
};
