import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilterCatigory } from "./api";
import MealList from "./elements/MealList";
import Loader from "./Loader";

function Meals() {
  const {mealsId} = useParams()
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilterCatigory(mealsId).then(data => setMeals(data.meals))
  }, [mealsId])
  console.log(mealsId);
  return (
    <div className="menu">
      {!meals.length ? <Loader /> : <MealList meals = {meals}/>}
    </div>
  );
}

export default Meals;