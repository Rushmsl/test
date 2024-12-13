export type DocumentStatus = 'draft' | 'pending' | 'approved' | 'rejected';
export type DocumentType = 'contract' | 'invoice' | 'proposal' | 'other';

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  content: string;
  version: number;
  status: DocumentStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  fileUrl?: string;
  templateId?: string;
}