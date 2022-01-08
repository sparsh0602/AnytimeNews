import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsCard from './components/NewsCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const toggleMode = () => {
    console.log("TOGGLE MODE");
  }
  return (
    <Router>
      <div className="App">
        <NavBar title={"AnytimeNews"} />
        <Switch>
          <Route exact path="/">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="general" category={"General"} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/sports">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="sports" category={"Sports"} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/health">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="health" category={"Health"} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/entertainment">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="entertainment" category={"Entertainment"} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/business">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="business" category={"Business"} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/technology">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="technology" category={"Technology"} toggleMode={toggleMode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
