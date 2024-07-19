import React from 'react';
import { Article } from '../services/ArticleService';

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank">
        Read More
      </a>
    </div>
  );
};

export default ArticleDetail;
