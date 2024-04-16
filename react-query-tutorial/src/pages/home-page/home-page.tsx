import { Button, Col, Row, Skeleton, Table, TableProps } from 'antd';
import { DataType, ISkill } from '../../interfaces/skill.interface';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
	const columns: TableProps<ISkill[]>['columns'] = [
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
	];

	const { data, isError, isLoading } = useQuery({
		queryKey: ['skill'],
		queryFn: async () => {
			const response = await axios.get('http://localhost:3000/skills');
			return response.data;
		},
	});
	console.log('🚀 ~ HomePage ~ data:', data);

	if (isLoading) {
		return <Skeleton active />;
	}

	if (isError) {
		return <div>error</div>;
	}

	const newData = data.map((item: ISkill) => {
		return {
			...item,
			key: item.id,
		};
	});

	return (
		<div className="p-10 h-screen overflow-y-scroll">
			<Row gutter={[40, 40]}>
				<Col span={24}>
					<Button>Add product</Button>
				</Col>

				<Col span={24}>
					<Table columns={columns} dataSource={newData} />
				</Col>
			</Row>
		</div>
	);
};

export default HomePage;
