import type { User } from "./user";

export interface Comment {
  id: string;
  ghest: boolean;
  user?: User;
  name: string;
  password?: string;
  content: string;
  ip: string;
  created: Date;
  updated: Date;
}