import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArticalCard from '../components/ArticalCard';
import "./Article.css";

const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY;

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://api.mediastack.com/v1/news", {
          params: {
            access_key: apiKey,
            keywords: "technology,science,ai,programming",
            languages: "en",
            sort: "published_desc",
            limit: 10,
          },
        });

        console.log("Mediastack raw data:", response.data);

        // Mediastack gives data inside response.data.data
        setArticles(response.data.data || []);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="article-page">
      <h1 className="article-heading">Articles</h1>
      <div className="article-grid">
        {articles.map((item, index) => (
          <ArticalCard 
            key={index} 
            title={item.title} 
            imageurl={item.image}   // Mediastack uses "image"
            url={item.url} 
          />
        ))}
      </div>
    </div>
  );
};

export default Article;

