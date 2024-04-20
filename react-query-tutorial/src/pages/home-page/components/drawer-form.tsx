import { Button, Drawer, Form, Input } from 'antd';

import { ISkill } from '@/interfaces/skill.interface';
import { useCreateSkill } from '@/hooks/useSkill';

interface DrawerFormProps {
	open: boolean;
	onClose: () => void;
}

const DrawerForm = ({ open, onClose }: DrawerFormProps) => {
	const [form] = Form.useForm();
	const { onSubmit } = useCreateSkill();
	const handleSubmit = (data: Omit<ISkill, 'id'>) => {
		onSubmit(data), onClose(), form.resetFields();
	};

	return (
		<Drawer title="Basic Drawer" onClose={onClose} open={open}>
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

export default DrawerForm;
