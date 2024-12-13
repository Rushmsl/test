export type ApprovalType = 'serial' | 'parallel';

export interface ApprovalStep {
  id: string;
  order: number;
  approverId: string;
  status: 'pending' | 'approved' | 'rejected';
  comment?: string;
  signatureUrl?: string;
  completedAt?: Date;
}

export interface Workflow {
  id: string;
  documentId: string;
  type: ApprovalType;
  steps: ApprovalStep[];
  currentStep: number;
  isCompleted: boolean;
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}