import './App.css';
import NewsPage from './NewsPage';
import Header from './components/Header';


const App = () => {
  return (
    <div className="section__hacknews">
      <Header titulo='Hacker News'/>
      <div className="container">
        <NewsPage />    
      </div>
    </div>
  )
}


export default App;
