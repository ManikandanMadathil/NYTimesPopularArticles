import React, { useEffect, useState } from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleService, { ArticleResponse } from '../../services/ArticleService';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<ArticleResponse[]>([]);

  useEffect(() => {
    const articleService = new ArticleService();
    const fetchArticles = async () => {
      try {
        const articles = await articleService.getArticles();
        setArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.appContainer}>

      <ArticleList articles={articles}/>
    </div>
  );
};

export default Home;
