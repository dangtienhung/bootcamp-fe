import { Form, message } from 'antd';
import {
	createSkill,
	deleteSkill,
	getAllSkills,
	getSkillById,
	updateSkill,
} from '@/apis/skill.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ISkill } from '@/interfaces/skill.interface';
import { useEffect } from 'react';

export const useGetAllSkills = () => {
	// lấy dữ liệu với react-query
	return useQuery<ISkill[]>({
		queryKey: ['skill'],
		queryFn: async () => getAllSkills(),
	});
};

export const useDeleteSkill = () => {
	const queryClient = useQueryClient();

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

	return { handleDelete };
};

export const useCreateSkill = () => {
	const queryClient = useQueryClient();

	const createSkillMutation = useMutation({
		mutationFn: (data: Omit<ISkill, 'id'>) => createSkill(data),
		onSuccess: () => {
			message.success('Tạo kỹ năng thành công');
			queryClient.invalidateQueries({ queryKey: ['skill'] });
		},
	});

	const onSubmit = (data: Omit<ISkill, 'id'>) => {
		createSkillMutation.mutate(data);
	};

	return { onSubmit };
};

export const useUpdateSkill = (id: number) => {
	const [form] = Form.useForm();
	const queryClient = useQueryClient();

	const editMutation = useMutation({
		mutationFn: (data: ISkill) => updateSkill(data),
		onSuccess: () => {
			message.success('Cập nhật kỹ năng thành công');
			queryClient.invalidateQueries({ queryKey: ['skill'] });
			// reset form
			form.resetFields();
		},
		onError: () => {
			message.error('Cập nhật kỹ năng thất bại');
		},
	});

	const { data, isLoading, isError, isSuccess } = useQuery({
		queryKey: ['skill', id],
		queryFn: () => getSkillById(id),
		enabled: id !== null || id !== undefined,
	});

	const onSubmit = (data: Omit<ISkill, 'id'>) => {
		editMutation.mutate({
			...data,
			id: id,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			form.setFieldsValue(data);
		}
	}, [data, isSuccess, form]);

	return { onSubmit, isLoading, isError, form };
};
