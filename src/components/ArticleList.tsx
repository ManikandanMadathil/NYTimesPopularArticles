import React from 'react';
import ArticleItem from './ArticleItem/ArticleItem';
import { Article } from '../services/ArticleService';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
          <h1>NY Times Most Popular Articles</h1>
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}
    </div>
    </>
  );
};

export default ArticleList;
