import React from 'react';
import { ArticleResponse } from '../../services/ArticleService';
import ArticleItem from '../ArticleItem/ArticleItem';

interface ArticleListProps {
  articles: ArticleResponse[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
      <h1>NY Times Most Popular Articles</h1>
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={{
            abstract:article.abstract,
            byline:article.byline,
            id:article.id,
            imageUrl:article.media[0]['media-metadata'][2].url,
            title:article.title,
            url:article.url
          }}
        />
      ))}
    </div>
    </>
  );
};

export default ArticleList;

