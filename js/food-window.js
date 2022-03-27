// Loading Page
$(document).ready(() => {
    $('.loadingPage').fadeOut(3000, () => {
        $('body').css('overflow', 'unset');
    });
})
// getting food Type
let foodType = localStorage.getItem('foodType');
let foodsItem = [];
// Menu food type
let menuTitle = document.getElementById('menuTitle');
menuTitle.innerHTML = foodType.toLocaleUpperCase() + " Menu";


    // Fitch food dishes from API
    (async function getFoodData() {
        let request = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${foodType}`);
        let response = await request.json();
        foodsItem = response.recipes;
        displayData()
    })()

function displayData() {
    let temp = '';
    for (let i = 0; i < foodsItem.length; i++) {
        temp += `
    <div class="col-md-3">
        <div class="foodItem">
            <a class="text-decoration-none"><img class="w-100" src="${foodsItem[i].image_url == null ? '../images/cuisine-food-india-indian-wallpaper-preview.jpg' : foodsItem[i].image_url}" alt="image_url" onclick="foodDetails(${i})"></a>
            <h3 class="h5 pt-3">${foodsItem[i].title}</h3>
        </div>
    </div>
    `
    }
    document.getElementById('displayData').innerHTML = temp
}

// Get Food details
function foodDetails(index) {
    let foodId = foodsItem[index].recipe_id;
    getFoodDetails(foodId, index);
    console.log(foodId);
}

async function getFoodDetails(foodId,index) {
    let request = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${foodId}`);
    let response = await request.json();
    localStorage.setItem('foodDetails', JSON.stringify(response));
    document.getElementsByTagName('img')[index].parentElement.href = '../food-details.html';
}