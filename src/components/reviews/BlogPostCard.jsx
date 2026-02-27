import { useState } from "react";
import "./BlogPostCard.css";

function BlogPostCard({ image, title, specs, children }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="blog-card">

      {image && (
        <div className="blog-card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="blog-card-content">

        <h2 className="blog-card-title">{title}</h2>

        {specs && (
          <ul className="blog-card-specs">
            {specs.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        )}

        <div className={`blog-card-text ${expanded ? "expanded" : ""}`}>
          {children}
        </div>

        <button className="expand-button" onClick={toggleExpand}>
          {expanded ? "Näytä vähemmän" : "Lue lisää"}
        </button>

      </div>
    </article>
  );
}

export default BlogPostCard;