import react from "react";
import ReactDOM from "react-dom";
import "./News.css";
import NewsItem from "./NewsItem.jsx";

const newsArr = [
  {
    id: "n1",
    headline: "lorem asdna ajjndajnnjdnafjaaj",
    description:
      "wr IIT Jodhpur family. You are welcome to visit our campus with your family. We shall be happy to provide free hospitality. You are always in our mind. For any support that may be required do not hesitate to approach us.",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  },
  {
    id: "n2",
    headline: "lorem asdna",
    description:
      "We are launching this portal to be in close touch with you, to know how you are dealin",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  },
  {
    id: "n3",
    headline: "lorem asdna ",
    description:
      "allenges of professional life, to connect you to your batch mates and your hostel friends",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  },
  {
    id: "n4",
    headline: "lorem asdnajb",
    description:
      "allenges of professional life, to connect you to your batch mates and your hostel friends",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  },
  {
    id: "n5",
    headline: "lorem asdnajbasj",
    description:
      "allenges of professional life, to connect you to your batch mates and your hostel friends",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  },
  {
    id: "n6",
    headline: "lorem asdnajba",
    description:
      "allenges of professional life, to connect you to your batch mates and your hostel friends",
    img: "https://cdn-icons-png.flaticon.com/256/5527/5527749.png"
  }
];

const newsList = newsArr.map((news) => (
  <NewsItem
    key={news.id}
    id={news.id}
    headline={news.headline}
    description={news.description}
    img={news.img}
  />
));

function News() {
  return (
    <div className="News-section">
      <h1 className="News-h1">
        <span>Latest News</span>
      </h1>

      <div className="News-card">
        {/* <hr /> */}
        <div> 
          <ul>{newsList}</ul>
        </div>
      </div>
    </div>
  );
} 

export default News;
