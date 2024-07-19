import React, { useState } from 'react';
import { Article } from '../services/ArticleService';

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => setExpanded(!expanded);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <button onClick={handleToggleExpand}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
      {expanded && (
        <div>
          <p>{article.abstract}</p>
          <a href={article.url} target="_blank" >Read More</a>
        </div>
      )}
    </div>
  );
};

export default ArticleItem;
