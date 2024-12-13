export type UserRole = 'admin' | 'approver' | 'requester' | 'viewer';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  department: string;
  createdAt: Date;
  updatedAt: Date;
}