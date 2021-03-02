import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TinderCards />
        <SwipeButtons />
       
      </header>
    </div>
  );
}

export default App;
