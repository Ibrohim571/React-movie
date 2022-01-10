import API_URL from "./config";

const getMealByID = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
  return await response.json()
}

const getAllcatigories = async () => {
  const response = await fetch(API_URL + 'categories.php')
  return await response.json()
}

const getFilterCatigory = async (catigoryName) => {
  const response = await fetch(API_URL + `filter.php?c=${catigoryName}`)
  return await response.json()
}

export {getMealByID, getAllcatigories, getFilterCatigory}