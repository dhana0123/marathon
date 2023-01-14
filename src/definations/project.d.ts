export type Project = {
  _id: string;
  name: string;
  toolsUsed: string[];
  productName?: string;
  description?: string;
  liked?: {
    id: string;
    text: string;
  }[];
  tools?: string;
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
  toneRequired: boolean;
  brandNameRequired: boolean;
  descriptionRequired: boolean;
  brandName?: string;
  descriptionName?: string;
  brandPlaceholder?: string;
  descriptionPlaceholder?: string;
};
