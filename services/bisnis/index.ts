import instance from '@/common/libs/axios/instance';

export const bisnisServices = {
  createBisnis: async (data: any) => instance.post('/api/bisnis', data),
  updateBisnis: async (data: any, id: string) => instance.post(`/api/bisnis/update/${id}`, data),
};
