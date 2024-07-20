import instance from '@/common/libs/axios/instance';

export const userServices = {
  updateUserProfile: async (data: any) => instance.post('/api/users/profile', data),
};
