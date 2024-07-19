import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';
import { Article } from '../services/ArticleService';


const articles: Article[] = [
  {
    id: 1,
    title: 'Test Article 1',
    byline: 'Byline 1',
    abstract: 'Abstract 1',
    url: 'https://example.com/1',
  },
  {
    id: 2,
    title: 'Test Article 2',
    byline: 'Byline 2',
    abstract: 'Abstract 2',
    url: 'https://example.com/2',
  },
];

describe('ArticleList', () => {
  it('renders a list of articles', () => {
    render(<ArticleList articles={articles} />);

    articles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.byline)).toBeInTheDocument();
    });
  });
});
