import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArticalCard from '../components/ArticalCard';
import "./Article.css";

// const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const promise=axios.get('https://dev.to/api/articles');
    promise.then((response)=>{
      console.log(response.data);
      setArticles(response.data);
    })
  }, []);

  return (
    <div className="article-page">
      <h1 className="article-heading">Tech Articles</h1>
      <div className="article-grid">
        {articles.map((item, idx) => (
          <ArticalCard
            key={idx}
            title={item.title}
            imageurl={item.cover_image}
            url={item.canonical_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Article;

