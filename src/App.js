import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/home';
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/terms';
import PrivacyPolicy from './pages/privacy-policy';
import BlogsPage from './pages/Blogs';
import ScrollToTop from './shared-components/ScrollToTop';


// import {Button,TextField,AppBar, Toolbar, Typography} from '@material-ui/core'; //importing material ui component



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blogs' exact component={BlogsPage} />
        <Route path='/contactus' exact component={Contact} />
        <Route path='/terms' exact component={Terms} />
        <Route path='/policy' exact component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
