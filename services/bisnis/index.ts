import instance from '@/common/libs/axios/instance';

export const bisnisServices = {
  createBisnis: async (data: any) => instance.post('/api/bisnis', data),
  updateBisnis: async (data: any, id: string) => instance.patch(`/api/bisnis/update/${id}`, data),
  deleteBusines: async (id: string) => instance.delete(`/api/bisnis/delete/${id}`),
};