import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer.js";
import { LandingPage } from "./pages/landingPage";
import { Category } from "./pages/category";
import { Meal } from "./pages/meal";
import { FavMeals } from "./pages/favMeals";
import { CategoriesPage } from "./pages/categories";
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/meal/:mealId" element={<Meal />} />
          <Route path="/favorite" element={<FavMeals />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

