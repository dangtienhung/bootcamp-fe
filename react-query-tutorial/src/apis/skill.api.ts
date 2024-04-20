import { ISkill } from '@/interfaces/skill.interface';
import { instaces } from './instances';

export const getAllSkills = async () => {
	return await instaces.get('/skills');
};

export const createSkill = async (data: Omit<ISkill, 'id'>) => {
	return await instaces.post('/skills', data);
};
