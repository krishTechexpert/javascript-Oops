const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// receipe api
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function(){
  try{
    
    const res = await fetch(
      //'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
      'https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b'
    
    )
    const result = await res.json();
    if(!res.ok) throw new Error(`${result.message},${res.status}`)
    let {recipe} =result.data;
    recipe = {
      id:recipe.id,
      title:recipe.title,
      publisher:recipe.publisher,
      sourceUrl:recipe.source_url,
      image:recipe.image_url,
      servings:recipe.servings,
      cookingTime:recipe.cooking_time,
      ingredients:recipe.ingredients
    }
    console.log(recipe)
  }catch(error){
    alert(error)
  }
}
showRecipe();