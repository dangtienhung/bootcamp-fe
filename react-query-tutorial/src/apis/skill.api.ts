import { ISkill } from '@/interfaces/skill.interface';
import { instaces } from './instances';

export const getAllSkills = async (): Promise<ISkill[]> => {
	const response = await instaces.get('/skills');
	return response.data;
};

export const createSkill = async (
	data: Omit<ISkill, 'id'>
): Promise<ISkill> => {
	const response = await instaces.post('/skills', data);
	return response.data;
};

export const deleteSkill = async (id: number): Promise<void> => {
	return await instaces.delete(`/skills/${id}`);
};

export const updateSkill = async (skill: ISkill): Promise<ISkill> => {
	const response = await instaces.put(`/skills/${skill.id}`, skill);
	return response.data;
};

export const getSkillById = async (id: number): Promise<ISkill> => {
	const response = await instaces.get(`/skills/${id}`);
	return response.data;
};
