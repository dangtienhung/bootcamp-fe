interface IFormLabelProps {
	title: string;
	id: string;
}

const FormLabel = ({ title, id }: IFormLabelProps) => {
	return (
		<label htmlFor={id} className="block mb-2 font-medium">
			{title}
		</label>
	);
};

export default FormLabel;
