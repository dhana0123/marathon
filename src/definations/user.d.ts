export interface User {
  _id: string;
  email: string;
  isVerified: boolean;
  role: "normal" | "admin";
  projects: [];
  createdAt: string;
  updatedAt: string;
  subscription: Subscription;
}

export interface Subscription {
  _id: string;
  plan: "free" | "monthly" | "yearly" | string;
  totalWordsCount: number;
  usedWordsCount: number;
  user: string;
  startDate: string;
  createdAt: string;
  updatedAt: string;
}
