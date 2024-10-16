import React from "react";

function ArticleCard({ heading, text }) {
  return (
    <div className="max-w-4xl mx-auto pb-10 poppin">
      <div className="mb-5">
        <h2 className="font-semibold text-2xl">{heading}</h2>
      </div>
      <div className="text-lg text-[#5E5E6F] font-medium">
        {text.slice(0, Math.min(text.length, 3)).map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ArticleCard;
