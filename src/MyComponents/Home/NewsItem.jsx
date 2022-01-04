import "./NewsItem.css";
const NewsItem = (props) => {
  return (
    <li className="newsItem-list">
      <img src={props.img} alt="News-Image" className="newsItem-Img" />
      <div className="newsItem-description">
        <h2 className="newsItem-headline">{props.headline}</h2>
        <p>{props.description}</p>
        <button className="newsItem-button">Read More</button>
        
      </div>
    </li>
  );
};

export default NewsItem;
 