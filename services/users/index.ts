import instance from '@/common/libs/axios/instance';

export const userServices = {
  updateUserProfile: (data: any) => instance.post('/api/users', data),
};
