import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';

const App = () => {
  
  return (
    <div className='App'>
       <Router>
          <Header />
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:name' element={<Category />} />
                <Route path='/recipe/:id' element={<Recipe />}/>
                <Route path='/*' element={<NotFound />} />
              </Routes>
          <Footer />
       </Router>
    </div>
  )
}

export default App
