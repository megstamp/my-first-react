import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Counter /> 
          {
            // you can make comments in JS but not jsx, putting a curly brace converts the jsx to JS
          }
        </header>
    </div>
  );
}

export default App;


// line 8 says bring in everything in the Component folder into this line
