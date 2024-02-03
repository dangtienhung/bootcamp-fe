import FormLabel from './form-label';

interface IFormGroupProps {
	title: string;
	id: string;
	children: React.ReactNode;
}

const FormGroup = ({ title, id, children }: IFormGroupProps) => {
	return (
		<div className="mb-6">
			<FormLabel id={id} title={title} />
			{children}
		</div>
	);
};

export default FormGroup;
