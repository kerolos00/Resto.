let getFoodDetails = JSON.parse(localStorage.getItem('foodDetails'));
let foodDetails = getFoodDetails.recipe;
let ingredients = foodDetails.ingredients;
console.log(ingredients);

(function displayData() {
    let temp = '';
    temp = `
    <div class="col-md-4 ">
        <div class="foodItem-details">
            <img class="w-100" src="${foodDetails.image_url}" alt="dish-2">
        </div>
    </div>
    <div class="col-md-8 ps-5">
        <div class="foodItem-details">
            <h2 class="h1 fw-bold p-4">${foodDetails.title}</h2>
            <h3 class="fw-bold">Ingredients: </h3>
            <div id="ingredients" class="text-muted p-3"></div>
            <h3 class="fw-bold ">Visit us fot more details:</h3>
            <a href="${foodDetails.source_url}" target="_blank" class="text-muted p-3">${foodDetails.source_url}</a>
        </div>
    </div>
    `
    document.getElementById('displayDetails').innerHTML=temp;
    ingredientsLine()
})()


function ingredientsLine(){
    let temp='';
    for(let i=0;i<ingredients.length;i++){
        temp+=`<p>${ingredients[i]}</p>`
    }
    document.getElementById('ingredients').innerHTML=temp;

}
