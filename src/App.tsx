import React, { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList';
import ArticleService, { Article } from './services/ArticleService';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

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
    <div>
      <h1>NY Times Most Popular Articles</h1>
      <ArticleList articles={articles}/>
    </div>
  );
};

export default App;
