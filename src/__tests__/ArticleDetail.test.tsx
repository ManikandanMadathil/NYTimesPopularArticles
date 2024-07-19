import { render, screen } from '@testing-library/react';
import ArticleDetail from '../components/ArticleDetail';
import { Article } from '../services/ArticleService';

jest.mock("axios")

const mockArticle: Article = {
  id: 1,
  title: 'Sample Article',
  byline: 'By Author',
  abstract: 'Abstract of sample article.',
  url: 'http://nagarro.com',
};

describe('ArticleDetail', () => {
  it('renders article details', () => {
    render(<ArticleDetail article={mockArticle} />);
    
    expect(screen.getByText('Sample Article')).toBeInTheDocument();
    expect(screen.getByText('By Author')).toBeInTheDocument();
    expect(screen.getByText('Abstract of sample article.')).toBeInTheDocument();
  });
});
