import { request } from '@/utils/request';

export type NotionSelect = {
  id: string;
  color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  name: string;
};

export interface Website {
  id: string;
  name: string;
  tags: Array<NotionSelect>;
  url: string;
  url_type?: NotionSelect;
  url_2?: string;
  url_2_type?: NotionSelect;
  cover_url?: string;
  description?: string;
}

export const getWebs = async () => {
  return await request<Website[]>({ url: '/api/webs', method: 'GET' });
};
