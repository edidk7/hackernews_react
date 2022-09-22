import {useState, useEffect} from 'react';
import axios from "axios";
import NewsCard from "./components/NewsCard"


const NewsPage = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true);
        const fetchData = async () => {
            try{
                const { data } = await axios.get("https://hn.algolia.com/api/v1/search_by_date?query=react&page=0");
                const { hits } = data;
                setArticles(hits);
            }catch (e){
                console.log(e);
            } finally{
                setIsLoading(false);
            }

        };
        fetchData();
    }, [])

    return(
        <div className="news-container">
            { isLoading ? (
                <p>Loading...</p> 
            ) : (
                articles.map((article) => (
                    <NewsCard article={article} key={article.objectID} />
                ))
            )}
        </div>
    )
};


export default NewsPage;