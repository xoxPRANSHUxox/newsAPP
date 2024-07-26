import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5949a85b685943168dccc421fae80e8b`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Set to empty array if no articles are returned
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error state if needed
        setArticles([]); // Set to empty array on error
      });
  }, [category]);

  return (
    <div className="card-container">
        {articles.map((news, index) => {
          return (
            <NewsItem 
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
    </div>
  );
}
