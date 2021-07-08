import { Route, Link, Switch } from 'react-router-dom'
import './styles/all/rootStyles.css'
import './styles/all/styles.css'
import MainHeader from './components/tool_bar/tool_bar'
import Home from './components/main/home/home'
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import Toogable from "./components/main/home/testFunctionality/toogable";
import Clickable from "./components/main/home/testFunctionality/clickable";
import Profile from './components/main/profile/profile'




function App() {
  return (
    <>
      <div className="extra-page-container">
        <MainHeader />
        <main>  
          <div>
            <Switch>
              <Route path='/' exact><Home /></Route>
              <Route path='/watch'><Toogable Clickable={Clickable} /></Route>
              <Route path="/profile"><Profile/></Route>
            </Switch>
          </div>
        </main>
      </div>
    </>
  )
}

export default App;