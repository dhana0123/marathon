export type Project = {
  _id: string;
  name: string;
  toolsUsed: string[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};

export type Tool = {
  id: number;
  title: string;
  category: string;
  icon?: any;
  detail?: string | undefined;
  endPoint?: string;
};
