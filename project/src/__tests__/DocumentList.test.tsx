import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DocumentList } from '../components/documents/DocumentList';

describe('DocumentList', () => {
  it('shows loading state', () => {
    render(<DocumentList documents={[]} isLoading={true} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders empty state when no documents', () => {
    render(<DocumentList documents={[]} isLoading={false} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders documents when provided', () => {
    const documents = [
      {
        id: '1',
        title: 'Test Document',
        type: 'contract',
        content: 'Test content',
        version: 1,
        status: 'pending',
        createdBy: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    render(<DocumentList documents={documents} isLoading={false} />);
    expect(screen.getByText('Test Document')).toBeInTheDocument();
  });
});