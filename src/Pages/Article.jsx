import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ArticalCard from '../components/ArticalCard';

import "./Article.css"

const Article = () => {
   const[articles,setArticles]=useState([]);
   useEffect(()=>{
    const articledata=axios.get('https://newsapi.org/v2/everything?q=computer+science+OR+programming+OR+AI+OR+machine+learning&sortBy=publishedAt&language=en&pageSize=10&apiKey=d7b65ef4aec942e7b80080c59513c07d');
    articledata.then((response)=>{
        console.log(response.data.articles);
        setArticles(response.data.articles)
        
    })
   },[]) 

  return (
    <div className="article-page">
      <h1 className="article-heading">Articles</h1>
      <div className="article-grid">
        {articles.map((item, index) => (
          <ArticalCard 
            key={index} 
            title={item.title} 
            imageurl={item.urlToImage} 
            url={item.url} 
          />
        ))}
      </div>
    </div>
  )
}

export default Article