import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import FoodData from "./pages/FoodData/FoodData";
import FindRecipe from "./pages/FindRecipe/FindRecipe";
import RecipeResults from "./components/RecipeResults/RecipeResults";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useRecipe } from "../contexts/RecipeContext";

function App() {
  const { data } = useRecipe();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/findrecipe" element={<FindRecipe />}>
          <Route
            path="results/:query"
            element={<RecipeResults data={data} />}
          />
          <Route path="details/:query/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="/fooddata" element={<FoodData />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

