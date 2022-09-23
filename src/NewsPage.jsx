import {useState, useEffect} from 'react';
import axios from "axios";
import NewsCard from "./components/NewsCard";
import ReactPaginate from 'react-paginate';


const NewsPage = ({selectValue}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);

    const selectFront = selectValue;

    const handlePageChange = event => {
        console.log(event);
        setCurrentPage(event.selected);
    }

    useEffect(()=> {
        setIsLoading(true);
        const fetchData = async () => {
            try{
                const url = `https://hn.algolia.com/api/v1/search_by_date?query=${selectFront}&hitsPerPage=8&page=${currentPage}`;

                const { data } = await axios.get(url,
                {
                    params: {page: currentPage},
                }
                );
                console.log(url);
                const { hits, nbPages } = data;
                setArticles(hits);
                setTotalPages(nbPages); 
            }catch (e){
                console.log(e);
            } finally{
                setIsLoading(false);
            }

        };
        fetchData();
    }, [currentPage, selectFront])

    return(
        <div className="news-container">
            { isLoading ? (
                <p>Loading...</p> 
            ) : (
                articles.map((article) => (
                    <NewsCard article={article} key={article.objectID} />
                ))
            )}
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                breakLabel=""
                frocePage={currentPage}
                pageCount={totalPages}
                renderOnZeroPageCount={null}
                onPageChange={handlePageChange}
                className="pagination"
                activateClassname="previous-page"
                nextClassName="next-page"
                pageRangeDisplayed="9"
                marginPagesDisplayed="0"
            />            
        </div>
    )
};


export default NewsPage;