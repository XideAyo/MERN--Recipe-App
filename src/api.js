export const randomRecipes = (num) => 
`https://api.spoonacular.com/recipes/random?apiKey=48abee8869364d2293052aa427fc6f34&number=${num}&tags=american`

export const selectedCuisine = (cuisine) => 
`https://api.spoonacular.com/recipes/complexSearch?apiKey=48abee8869364d2293052aa427fc6f34&cuisine=${cuisine}`

export const singleMeal = (id) => 
`https://api.spoonacular.com/recipes/${id}/information?apiKey=48abee8869364d2293052aa427fc6f34`

export const similarMeal = (id) => 
`https://api.spoonacular.com/recipes/${id}/similar?apiKey=48abee8869364d2293052aa427fc6f34`