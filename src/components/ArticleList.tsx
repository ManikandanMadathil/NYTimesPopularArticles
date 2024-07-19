import React from 'react';
import ArticleItem from './ArticleItem';
import { Article } from '../services/ArticleService';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

export default ArticleList;
