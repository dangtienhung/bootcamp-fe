interface IChildrenFileProps {
	children: React.ReactNode;
}

const ChildrenFile = ({ children }: IChildrenFileProps) => {
	return <div>{children}</div>;
};

export default ChildrenFile;
