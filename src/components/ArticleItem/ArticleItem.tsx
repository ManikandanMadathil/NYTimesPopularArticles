import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../services/ArticleService';
import styles from './ArticleItem.module.css';

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {


  const navigate = useNavigate();

  const handleReadMore = () => {
 
    navigate(`/article/${article.id}`, { state: { article } });
  };

  return (
    <div className={styles.articleItem} >
    <h2 className={styles.articleTitle}>{article.title}</h2>
    <p className={styles.articleByline}>{article.byline}</p>
    <button className={styles.readMoreButton} onClick={handleReadMore}>
      Read More
    </button>
  </div>

  );
};

export default ArticleItem;
