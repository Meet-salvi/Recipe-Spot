import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import DishType from './pages/DishType';
import Snack from './pages/Snack';
import Lunch from './pages/Lunch';
import Breakfast from './pages/Brackfast';
import Dinner from './pages/Dinner';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/recipedetails/:id' element={<RecipeDetails />} />
          <Route path='/dishtype/:name' element={<DishType />} />
          <Route path='/snack' element={<Snack />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path='/breackfast' element={<Breakfast/>}/>
          <Route path='/dinner' element={<Dinner/>}/>
          <Route path='/categories/:name' element={<Categories/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
