import { request } from '@/utils/request';

export interface Website {
  id: string;
  name: string;
  tags: Array<{
    id: string;
    name: string;
    color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  }>;
  url: string;
  url_2?: string;
  cover_url?: string;
  description?: string;
}

export const getWebs = async () => {
  return await request<Website[]>({ url: '/api/webs', method: 'GET' });
};
