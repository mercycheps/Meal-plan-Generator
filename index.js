
function save(data) {
    if (!data) return;
    localStorage.setItem("savedMenu", JSON.stringify(data))
}

function deleteSavedMenu(){
    const container = document.getElementById('mealPlanResult')
    container.innerHTML = ""
    localStorage.removeItem("savedMenu")
}
function searchMenus() {
    let query = document.getElementById("search").value.toLowerCase();
    fetch("http://localhost:3000/menus")
        .then(response => response.json())
        .then(menus => {
            let filteredMenus = menus.filter(menu => menu.name.toLowerCase().includes(query));
            displayMenus(filteredMenus);
        });
}


function displayMealPlan(data) {
    const container = document.getElementById('mealPlanResult')
    container.innerHTML = ""

    Object.keys(data.week).forEach((day) => {
        container.innerHTML += `<h2 style="text-transform: capitalize;"> ${day} </h2>`
        const dayElement = document.createElement("div")
        dayElement.classList.add("meal-day")
        container.appendChild(dayElement)
        dayElement.id = day
        data.week[day].meals.forEach((meal) => {
            dayElement.innerHTML += `
        <div>
        <img class="meal-image" src="https://img.spoonacular.com/recipes/${meal.image}" />
        ${meal.title}
        Readiness: ${meal.readyInMinutes}
        <div/>
        `
        })

    })
}

const savedMenu = localStorage.getItem('savedMenu')
if (savedMenu) {
    displayMealPlan(JSON.parse(savedMenu))
}


document.addEventListener("DOMContentLoaded", function (event) {

    const myForm = document.getElementById("meal-Plan-Form")
    myForm.addEventListener("submit", function (event) {
        event.preventDefault();

        fetchData()
            .then(data => {
                displayMealPlan(data)
                const saveMenuBtn = document.getElementById(`saveMenu`);
                saveMenuBtn.addEventListener("click", () => {
                    save(data)

                });
            })
            .catch(error => {
                console.error("Error:", error);
                document.getElementById(`mealResults`).innerHTML = `<p style="color:red;">Error loading meal plan. Try again later.</p>`;
            })

    })

});


const dietInput = document.getElementById("diet");
const caloriesInput = document.getElementById("calories");

dietInput.addEventListener("change", function () {
    console.log("Diet changed to:", dietInput.value);

});

caloriesInput.addEventListener("change", function () {
    console.log("Calories changed to:", caloriesInput.value);

});

function fetchData() {
    const apiKey = '6b2bbbe463384177bd03918cbcbe18b4'

    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}`

    return Promise.resolve({
        "week": {
            "monday": {
                "meals": [
                    {
                        "id": 716276,
                        "image": "doughnuts-716276.jpg",
                        "imageType": "jpg",
                        "title": "Doughnuts",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.afrolems.com/2014/03/25/doughnuts-recipe/"
                    },
                    {
                        "id": 653251,
                        "image": "Noodles-and-Veggies-With-Peanut-Sauce-653251.jpg",
                        "imageType": "jpg",
                        "title": "Noodles and Veggies With Peanut Sauce",
                        "readyInMinutes": 30,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/5VRHVVWQ/noodles-and-veggies-with-peanut-sauce"
                    },
                    {
                        "id": 658290,
                        "image": "Rice-with-Fried-Egg-and-Sausage-658290.jpg",
                        "imageType": "jpg",
                        "title": "Rice with Fried Egg and Sausage",
                        "readyInMinutes": 45,
                        "servings": 1,
                        "sourceUrl": "https://www.foodista.com/recipe/LX87XTNW/rice-with-fried-egg-and-sausage"
                    }
                ],
                "nutrients": {
                    "calories": 1765.65,
                    "protein": 49.43,
                    "fat": 56.95,
                    "carbohydrates": 262.31
                }
            },
            "tuesday": {
                "meals": [
                    {
                        "id": 644854,
                        "image": "Gluten-Free-Quinoa-and-Corn-Flour-Crepes-644854.jpg",
                        "imageType": "jpg",
                        "title": "Gluten Free Quinoa and Corn Flour Crepes",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "http://www.foodista.com/recipe/MGMB6CBY/gluten-free-quinoa-and-corn-flour-crepes"
                    },
                    {
                        "id": 650119,
                        "image": "Linguine-Alla-Carbonara-650119.jpg",
                        "imageType": "jpg",
                        "title": "Linguine Alla Carbonara",
                        "readyInMinutes": 30,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/X4N72XB2/linguine-alla-carbonara"
                    },
                    {
                        "id": 1697703,
                        "image": "butternut-squash-pasta-1697703.jpg",
                        "imageType": "jpg",
                        "title": "Butternut Squash Pasta",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "https://maplewoodroad.com/butternut-squash-pasta/"
                    }
                ],
                "nutrients": {
                    "calories": 1862.71,
                    "protein": 62.07,
                    "fat": 64.78,
                    "carbohydrates": 261.46
                }
            },
            "wednesday": {
                "meals": [
                    {
                        "id": 664280,
                        "image": "Vanilla-Bean-Cherry-Granola-Bars-664280.jpg",
                        "imageType": "jpg",
                        "title": "Vanilla Bean Cherry Granola Bars",
                        "readyInMinutes": 45,
                        "servings": 8,
                        "sourceUrl": "https://www.foodista.com/recipe/CQMZ3THJ/vanilla-bean-cherry-granola-bars"
                    },
                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    },
                    {
                        "id": 1697703,
                        "image": "butternut-squash-pasta-1697703.jpg",
                        "imageType": "jpg",
                        "title": "Butternut Squash Pasta",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "https://maplewoodroad.com/butternut-squash-pasta/"
                    }
                ],
                "nutrients": {
                    "calories": 1742.23,
                    "protein": 54.06,
                    "fat": 60.12,
                    "carbohydrates": 251.31
                }
            },
            "thursday": {
                "meals": [
                    {
                        "id": 655219,
                        "image": "Peanut-Butter-And-Chocolate-Oatmeal-655219.jpg",
                        "imageType": "jpg",
                        "title": "Peanut Butter And Chocolate Oatmeal",
                        "readyInMinutes": 45,
                        "servings": 1,
                        "sourceUrl": "https://www.foodista.com/recipe/JCCVHSNP/peanut-butter-and-chocolate-oatmeal"
                    },
                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    },
                    {
                        "id": 642121,
                        "image": "Easy-Tabouleh-642121.jpg",
                        "imageType": "jpg",
                        "title": "Easy Tabouleh",
                        "readyInMinutes": 45,
                        "servings": 1,
                        "sourceUrl": "https://www.foodista.com/recipe/HC6SVFST/easy-tabouleh"
                    }
                ],
                "nutrients": {
                    "calories": 1743.65,
                    "protein": 49.86,
                    "fat": 73.02,
                    "carbohydrates": 236.63
                }
            },
            "friday": {
                "meals": [
                    {
                        "id": 1100990,
                        "image": "blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990.jpg",
                        "imageType": "jpg",
                        "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
                        "readyInMinutes": 30,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/35NX6PZB/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan"
                    },
                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    },
                    {
                        "id": 664678,
                        "image": "Vegetarian-Moussaka-With-Portabella-664678.jpg",
                        "imageType": "jpg",
                        "title": "Vegetarian Moussaka With Portabella",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/TQCPKTLM/vegetarian-moussaka-with-portabella"
                    }
                ],
                "nutrients": {
                    "calories": 1709.19,
                    "protein": 41.38,
                    "fat": 66.45,
                    "carbohydrates": 246.32
                }
            },
            "saturday": {
                "meals": [
                    {
                        "id": 644854,
                        "image": "Gluten-Free-Quinoa-and-Corn-Flour-Crepes-644854.jpg",
                        "imageType": "jpg",
                        "title": "Gluten Free Quinoa and Corn Flour Crepes",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "http://www.foodista.com/recipe/MGMB6CBY/gluten-free-quinoa-and-corn-flour-crepes"
                    },
                    {
                        "id": 643789,
                        "image": "Fried-Salmon-Cakes-643789.jpg",
                        "imageType": "jpg",
                        "title": "Fried Salmon Cakes",
                        "readyInMinutes": 30,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/LM2XHFP8/fried-salmon-cakes"
                    },
                    {
                        "id": 1005368,
                        "image": "panzanella-salad-1005368.jpg",
                        "imageType": "jpg",
                        "title": "Panzanella Salad",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://pickfreshfoods.com/panzanella-salad/"
                    }
                ],
                "nutrients": {
                    "calories": 1773.4,
                    "protein": 54.38,
                    "fat": 68.46,
                    "carbohydrates": 241.75
                }
            },
            "sunday": {
                "meals": [
                    {
                        "id": 647555,
                        "image": "Hotcakes-647555.jpg",
                        "imageType": "jpg",
                        "title": "Hotcakes",
                        "readyInMinutes": 45,
                        "servings": 8,
                        "sourceUrl": "https://www.foodista.com/recipe/8QJLKHTF/hotcakes"
                    },
                    {
                        "id": 1697541,
                        "image": "pasta-with-feta-cheese-and-asparagus-1697541.jpg",
                        "imageType": "jpg",
                        "title": "Pasta With Feta Cheese And Asparagus",
                        "readyInMinutes": 20,
                        "servings": 2,
                        "sourceUrl": "https://maplewoodroad.com/pasta-with-feta-cheese-and-asparagus/"
                    },
                    {
                        "id": 664718,
                        "image": "Vegetarian-Tostadas-664718.jpg",
                        "imageType": "jpg",
                        "title": "Vegetarian Tostadas",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/X7JDFN2M/vegetarian-tostadas"
                    }
                ],
                "nutrients": {
                    "calories": 1816.11,
                    "protein": 58.89,
                    "fat": 72.26,
                    "carbohydrates": 234.25
                }
            }
        }
    })


    return fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch meal plan");
            }
            return response.json();

        })
}