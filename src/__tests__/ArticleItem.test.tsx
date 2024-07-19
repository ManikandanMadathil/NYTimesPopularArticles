
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ArticleItem from '../components/ArticleItem/ArticleItem';
import { Article } from '../services/ArticleService';

const article: Article = {
  id: 1,
  title: 'Test Article',
  byline: 'Test Byline',
  abstract: 'Test Abstract',
  url: 'https://nagarro.com',
  imageUrl:""
};

describe('ArticleItem', () => {
  it('renders the article title and byline', () => {
    render(<ArticleItem article={article} />);

    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.byline)).toBeInTheDocument();
  });

  it('expands and shows additional details when clicked', () => {
    render(<ArticleItem article={article} />);

    const button = screen.getByText('Show More');
    fireEvent.click(button);

    expect(screen.getByText(article.abstract)).toBeInTheDocument();
    expect(screen.getByText('Read More')).toHaveAttribute('href', article.url);
  });

  it('collapses details when clicked again', () => {
    render(<ArticleItem article={article} />);

    const button = screen.getByText('Show More');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByText(article.abstract)).toBeNull();
  });
});
