import React, { useState } from 'react';
import { Article } from '../../services/ArticleService';
import { useNavigate } from 'react-router-dom';
import styles from './ArticleItem.module.css'

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => setExpanded(!expanded);

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  return (
    <div className={styles.articleItem}>
    <h2 className={styles.articleTitle}>{article.title}</h2>
    <p className={styles.articleByline}>{article.byline}</p>
    <button className={styles.readMoreButton} onClick={handleReadMore}>
      Read More
    </button>
  </div>
    // <div>
    //   <h2>{article.title}</h2>
    //   <p>{article.byline}</p>
    //   <button onClick={handleToggleExpand}>
    //     {expanded ? 'Show Less' : 'Show More'}
    //   </button>
    //   {expanded && (
    //     <div>
    //       <p>{article.abstract}</p>
    //       <button onClick={handleReadMore}>Read More</button>
    //     </div>
    //   )}
    // </div>
  );
};

export default ArticleItem;
