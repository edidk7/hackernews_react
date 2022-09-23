import './App.css';
import NewsPage from './NewsPage';
import Header from './components/Header';
import Select from './components/SelectFront';


const App = () => {
  return (
    <div className="section__hacknews">
      <Header titulo='Hacker News'/>
      <div className="container">
        <Select />
        <NewsPage selectFront={"angular"}/>    
      </div>
    </div>
  )
}


export default App;
