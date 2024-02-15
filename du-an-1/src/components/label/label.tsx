import {clsxm} from '@/utils';

interface LabelProps {
	id?: string;
	className?: string;
	children: React.ReactNode;
}

export const Label = ({children, className, id}: LabelProps) => {
	return (
		<label
			htmlFor={id}
			className={clsxm(`text-sm font-semibold`, className)}>
			{children}
		</label>
	);
};
