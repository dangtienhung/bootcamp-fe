import { Button, Drawer, Form, Input } from 'antd';

import { ISkill } from '@/interfaces/skill.interface';
import { useUpdateSkill } from '@/hooks/useSkill';

interface DrawerFormEditProps {
	open: boolean;
	onClose: () => void;
	idSkill: number;
}

const DrawerFormEdit = ({ open, onClose, idSkill }: DrawerFormEditProps) => {
	const { isError, isLoading, form, onSubmit } = useUpdateSkill(idSkill);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	const handleSubmit = (data: ISkill) => {
		onSubmit(data);
		onClose();
	};

	return (
		<Drawer title="Edit" onClose={onClose} open={open}>
			<Form form={form} onFinish={handleSubmit} layout="vertical">
				<Form.Item
					label="Tên kỹ năng"
					name="title"
					required
					rules={[{ required: true, message: 'Vui lòng nhập tên kỹ năng' }]}
				>
					<Input placeholder="Tên kỹ năng" size="large" />
				</Form.Item>
				<Form.Item
					label="Mô tả kỹ năng"
					name="desc"
					required
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập mô tả kỹ năng',
						},
					]}
				>
					<Input.TextArea placeholder="Mô tả kỹ năng" size="large" />
				</Form.Item>

				<Form.Item>
					<Button
						htmlType="submit"
						size="large"
						className="tw-w-full"
						type="primary"
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Drawer>
	);
};

export default DrawerFormEdit;
