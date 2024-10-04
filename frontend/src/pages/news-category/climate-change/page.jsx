import React, { useState, useEffect } from "react";
import NewsItem from "../../../components/News/NewsItem";
import ComponentGrid from "../../../components/Grid/ComponentGrid";
import { getNewsByCategory } from "../../../services/ApiNews";

const ClimateChangePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getNewsByCategory("climate-change".toLowerCase());
        const formattedArticles = data.map((article) => ({
          id: article.id,
          title: article.title,
          image: article.images,
          date: article.creationDate,
          content: article.content,
        }));
        setArticles(
          formattedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <ComponentGrid
        items={articles.map((article) => ({
          id: article.id,
          title: article.title,
          image: article.image,
          date: article.creationDate,
          content: article.content,
        }))}
        ItemComponent={NewsItem}
        itemsPerPage={12}
        columns={4}
        containerClassName="news-grid-container"
        gridClassName="news-grid"
      />
    </div>
  );
};

export default ClimateChangePage;
