import {clsxm} from '@/utils';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({children, className}: ButtonProps) => {
	return (
		<button
			type="submit"
			className={clsxm(`font-semibold py-3 rounded-md w-full`, className)}>
			{children}
		</button>
	);
};
