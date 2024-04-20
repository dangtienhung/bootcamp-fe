import {
	Button,
	Col,
	Popconfirm,
	Row,
	Skeleton,
	Space,
	Table,
	TableProps,
	Tooltip,
	message,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteSkill, getAllSkills } from '@/apis/skill.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import DrawerForm from './components/drawer-form';
import DrawerFormEdit from './components/drawer-form-edit';
import { ISkill } from '@/interfaces/skill.interface';
import { useState } from 'react';

const HomePage = () => {
	const queryClient = useQueryClient();

	const columns: TableProps<ISkill>['columns'] = [
		{
			title: 'Tiêu đề kỹ năng',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Mô tả',
			dataIndex: 'desc',
			key: 'desc',
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			key: 'actions',
			render: (_, record) => {
				return (
					<Space size={'small'}>
						<Tooltip title="Edit skill">
							<Button
								type="text"
								icon={<EditOutlined />}
								onClick={() => {
									setIdSkill(record.id);
									setOpenEdit(true);
								}}
							/>
						</Tooltip>
						<Tooltip title="Delete skill">
							<Popconfirm
								title="Delete the skill?"
								description="Are you sure to delete this skill?"
								onConfirm={() => handleDelete(record.id)}
								okText="Yes"
								cancelText="No"
							>
								<Button type="text" danger icon={<DeleteOutlined />}></Button>
							</Popconfirm>
						</Tooltip>
					</Space>
				);
			},
		},
	];

	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [idSkill, setIdSkill] = useState<number | null>(null);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	// lấy dữ liệu với react-query
	const { data, isError, isLoading } = useQuery<ISkill[]>({
		queryKey: ['skill'],
		queryFn: async () => getAllSkills(),
	});

	// xoá dữ liệu với react-query
	const deleteMutation = useMutation({
		mutationFn: (id: number) => deleteSkill(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['skill'] });
			message.success('Delete success');
		},
		onError: () => {
			message.error('Delete failed');
		},
	});

	const handleDelete = (id: number) => {
		deleteMutation.mutate(id);
	};

	if (isLoading) {
		return <Skeleton active />;
	}

	if (isError) {
		return <div>error</div>;
	}

	const newData = data?.map((item: ISkill) => {
		return {
			...item,
			key: item.id,
		};
	});

	return (
		<div className="tw-p-10 tw-h-screen tw-overflow-y-scroll">
			<Row gutter={[40, 40]}>
				<Col span={24}>
					<Button type="primary" onClick={showDrawer}>
						Add product
					</Button>
				</Col>

				<Col span={24}>
					<Table
						columns={columns as ISkill[]}
						dataSource={newData}
						pagination={{
							defaultCurrent: 1,
							defaultPageSize: 3,
							showTotal: (total, range) => {
								return `${range[0]}-${range[1]} of ${total} items`;
							},
						}}
					/>
				</Col>
			</Row>

			<DrawerForm open={open} onClose={onClose} />
			{idSkill && (
				<DrawerFormEdit
					open={openEdit}
					onClose={() => setOpenEdit(!openEdit)}
					idSkill={idSkill}
				/>
			)}
		</div>
	);
};

export default HomePage;
