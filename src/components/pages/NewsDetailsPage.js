import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "7aaa7a00b5274fcaae8e5661fe422cd2"

const NewsDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const search = params.search;
  const [articles, setArticles] = useState(null);
    const [error, setError] = useState(null);
    // console.log('localStorage.getItem(articles) ',JSON.parse( localStorage.getItem('articles')));
    // setArticles(JSON.parse(localStorage.getItem('articles')));

    useEffect(() => {
      console.log('useEffect');
      setArticles(JSON.parse(localStorage.getItem('articles')))
    // axios.get(baseURL, {
    //   params: {
    //     q: search,
    //     apiKey: ApiKey
    //   } })
    //     .then(response => {
    //       setArticles(response.data.articles);
    //     })
    //     .catch(error => {
    //       setError(error.message);
    //     })
  }, []);
    console.log('articles ', articles);


  if (!articles) return null;

  return (
    <div className="single-news">
      <h2 className='single-news-title'>{articles[id].title}</h2>
      <img className='single-news-img' src={articles[id].urlToImage} alt={articles[id].source.name}/>
      <p className='single-news-info'>{articles[id].content}</p>
    </div>
  )
};

export default NewsDetailsPage;