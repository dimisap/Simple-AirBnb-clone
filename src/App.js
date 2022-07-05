import './App.css';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component'
import CardList from './components/cardlist/cardlist.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <CardList/>
    </div>
  );
}

export default App;
