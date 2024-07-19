import React from 'react';
import { Article } from '../../services/ArticleService';
import { useLocation, useParams } from 'react-router-dom';
import styles from './ArticleDetail.module.css';

const ArticleDetail: React.FC = () => {
  const location = useLocation();

  const { id } = useParams<{ id: string }>();
  const article = location.state?.article as Article;

  if (!article) {
    return <div>No article data available.</div>;
  }

  return (
    <div className={styles.articleDetails}>
    <h1 className={styles.articleTitle}>{article.title}</h1>
    <p className={styles.articleByline}>{article.byline}</p>
    <p className={styles.articleAbstract}>{article.abstract}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.readMoreLink}>
      Read More
    </a>
  </div>
  );
};

export default ArticleDetail;
