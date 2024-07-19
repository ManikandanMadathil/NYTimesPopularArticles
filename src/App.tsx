import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import ArticleDetail from './components/ArticleDetails/ArticleDetail';

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/article/:id" element={<ArticleDetail/>} />
      </Routes>
    </Router>

  );
};

export default App;