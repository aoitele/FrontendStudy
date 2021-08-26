import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2.tsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <switch>
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
      </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
