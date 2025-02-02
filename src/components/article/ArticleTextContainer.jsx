import React from "react";
import ArticleData from "../../data/ArticleData";
import ArticleCard from "./ArticleCard";

function ArticleContainer({article}) {
  return (
    <div className="lg:max-w-[840px]  mx-auto grid grid-cols-1  gap-2 poppin">
      {" "}
      {ArticleData.map((article) =>
        article.description ? (
          <ArticleCard
            key={article.id}
            heading={article.title}
            text={article.description}
            bgColor={article.bgColor}
            padding={article.padding}
            borderRadius={article.borderRadius}
          />
        ) : null
      )}
    </div>
  );
}

export default ArticleContainer;
