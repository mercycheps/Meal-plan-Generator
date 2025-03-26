
function displayMealPlan(data) {
    console.log(data)
    const container = document.getElementById('mealPlanResult')

    Object.keys(data.week).forEach((day) => {
        container.innerHTML += `<h2> ${day} </h2>`
        data.week[day].meals.forEach((meal) => {
            container.innerHTML += `
        <div>
        ${meal.title}
        Readiness: ${meal.readyInMinutes}
        <div/>
        `
        })

    })
    

}
const myForm = document.getElementById("meal-Plan-Form")
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const diet = document.getElementById("diet").value;
    const calories = document.getElementById("calories").value;

    fetchData()
        .then(data => displayMealPlan(data))
        .catch(error => {
            console.error("Error:", error);
            document.getElementById(`mealResults`).innerHTML = `<p style="color:red;">Error loading meal plan. Try again later.</p>`;
        })

})
const mealPlanButton = document.getElementById("mealPlanButton");
mealPlanButton.addEventListener("click",function(){
    const diet = document.getElementById("diet").value;
    const calories = document.getElementById("calories").value;

 fetchData(diet,calories)
    .then(data => displayMealPlan(data))
    .catch(error => {
    console.error ("Error:", error);
    document.getElementById(`mealResults`).innerHTML = `<p style="color:red;">Error loading meal plan. Try again later.</p>`;
    })
})
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
        "Week": {
            "Monday": {
                "breakfast": [ 
                    {
                
                        "id": 1100990,
                        "image": "blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990.jpg",
                        "imageType": "jpg",
                        "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
                        "readyInMinutes": 30,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/35NX6PZB/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan"
                    }
                ],
                "lunch": [
                    {
                        "id": 639954,
                        "image": "Colorful-Wild-Rice-Salad-639954.jpg",
                        "imageType": "jpg",
                        "title": "Colorful Wild Rice Salad",
                        "readyInMinutes": 30,
                        "servings": 3,
                        "sourceUrl": "https://www.foodista.com/recipe/RRSS27DD/colorful-wild-rice-salad"
                    }
                ],
                "dinner": [
                    {
                        "id": 634404,
                        "image": "Basic-Risotto-634404.jpg",
                        "imageType": "jpg",
                        "title": "Basic Risotto",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/HQMJRX88/basic-risotto"
                    }
                ],
                "nutrients": {
                    "calories": 1814.07,
                    "protein": 45.77,
                    "fat": 74.53,
                    "carbohydrates": 248.65
                }
            },
            "Tuesday": {
                "breakfast": [
                    {
                        "id": 1100990,
                        "image": "blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990.jpg",
                        "imageType": "jpg",
                        "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
                        "readyInMinutes": 30,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/35NX6PZB/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan"
                    }
                ],
                "lunch": [
                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    }
                ],
                "dinner": [
                    {
                        "id": 654009,
                        "image": "Orecchiette-With-Sun-Dried-and-Fresh-Cherry-Tomatoes-654009.jpg",
                        "imageType": "jpg",
                        "title": "Orecchiette With Sun-Dried and Fresh Cherry Tomatoes",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/MCX5NR68/orecchiette-with-sun-dried-and-fresh-cherry-tomatoes"
                    }
                ],
                "nutrients": {
                    "calories": 1965.77,
                    "protein": 47.25,
                    "fat": 75.12,
                    "carbohydrates": 281.04
                }
            },
            "Wednesday": {
                "breakfast": [
                    {
                        "id": 639637,
                        "image": "Classic-scones-639637.jpg",
                        "imageType": "jpg",
                        "title": "Classic scones",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/8R27PR6L/classic-scones"
                    }
                ],
                "lunch": [
                    {
                        "id": 653251,
                        "image": "Noodles-and-Veggies-With-Peanut-Sauce-653251.jpg",
                        "imageType": "jpg",
                        "title": "Noodles and Veggies With Peanut Sauce",
                        "readyInMinutes": 30,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/5VRHVVWQ/noodles-and-veggies-with-peanut-sauce"
                    }
                ],
                "dinner": [
                    {
                        "id": 634404,
                        "image": "Basic-Risotto-634404.jpg",
                        "imageType": "jpg",
                        "title": "Basic Risotto",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/HQMJRX88/basic-risotto"
                    }
                ],
                "nutrients": {
                    "calories": 1739.19,
                    "protein": 50.0,
                    "fat": 57.52,
                    "carbohydrates": 253.13
                }
            },
            "Thursday": {
                "breakfast": [
                    {
                        "id": 644854,
                        "image": "Gluten-Free-Quinoa-and-Corn-Flour-Crepes-644854.jpg",
                        "imageType": "jpg",
                        "title": "Gluten Free Quinoa and Corn Flour Crepes",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "http://www.foodista.com/recipe/MGMB6CBY/gluten-free-quinoa-and-corn-flour-crepes"
                    }
                ],
                "lunch": [
                    {
                        "id": 643634,
                        "image": "Fresh-Tomatoes-With-Beans-and-Macaroni-643634.jpg",
                        "imageType": "jpg",
                        "title": "Macaroni with Fresh Tomatoes and Beans",
                        "readyInMinutes": 25,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/LY45JTQD/fresh-tomatoes-with-beans-and-macaroni"
                    }
                ],
                "dinner": [
                    {
                        "id": 918028,
                        "image": "creamy-corn-chowder-918028.jpg",
                        "imageType": "jpg",
                        "title": "Creamy Corn Chowder",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://pickfreshfoods.com/creamy-corn-chowder/"
                    }
                ],
                "nutrients": {
                    "calories": 1794.15,
                    "protein": 56.6,
                    "fat": 68.22,
                    "carbohydrates": 248.45
                }
            },
            "Friday": {
                "breakfast": [
                    {
                        "id": 644854,
                        "image": "Gluten-Free-Quinoa-and-Corn-Flour-Crepes-644854.jpg",
                        "imageType": "jpg",
                        "title": "Gluten Free Quinoa and Corn Flour Crepes",
                        "readyInMinutes": 60,
                        "servings": 4,
                        "sourceUrl": "http://www.foodista.com/recipe/MGMB6CBY/gluten-free-quinoa-and-corn-flour-crepes"
                    }
                ],
                "lunch": [
                    {
                        "id": 1697577,
                        "image": "spanish-sardines-pasta-1697577.jpg",
                        "imageType": "jpg",
                        "title": "Spanish Sardines Pasta",
                        "readyInMinutes": 25,
                        "servings": 2,
                        "sourceUrl": "https://maplewoodroad.com/spanish-sardines-pasta/"
                    }
                ],
                "dinner": [
                    {
                        "id": 655573,
                        "image": "Penne-Arrabiata-655573.jpg",
                        "imageType": "jpg",
                        "title": "Penne Arrabiata",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/2Y82DVJR/penne-arrabiata"
                    }
                ],
                "nutrients": {
                    "calories": 1809.42,
                    "protein": 58.99,
                    "fat": 68.44,
                    "carbohydrates": 244.75
                }
            },
            "Saturday": {
                "breakfast": [
                    {
                        "id": 716276,
                        "image": "doughnuts-716276.jpg",
                        "imageType": "jpg",
                        "title": "Doughnuts",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.afrolems.com/2014/03/25/doughnuts-recipe/"
                    }
                ],
                "lunch": [

                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    }
                ],
                "dinner": [
                    {
                        "id": 645422,
                        "image": "Green-Cabbage-Stoemp-With-Sausages-645422.jpg",
                        "imageType": "jpg",
                        "title": "Sausages with Green Cabbage Mash",
                        "readyInMinutes": 45,
                        "servings": 2,
                        "sourceUrl": "https://www.foodista.com/recipe/RS6N3QPZ/green-cabbage-stoemp-with-sausages"
                    }
                ],
                "nutrients": {
                    "calories": 1772.62,
                    "protein": 52.32,
                    "fat": 54.75,
                    "carbohydrates": 271.44
                }
            },
            "Sunday": {
                "breakfast": [
                    {
                        "id": 634206,
                        "image": "Banana-Zucchini-Muffins-634206.jpg",
                        "imageType": "jpg",
                        "title": "Banana Zucchini Muffins",
                        "readyInMinutes": 45,
                        "servings": 8,
                        "sourceUrl": "https://www.foodista.com/recipe/JGW253HH/banana-zucchini-muffins"
                    }
                ],
                "lunch": [
                    {
                        "id": 642585,
                        "image": "Farfalle-with-fresh-tomatoes--basil-and-mozzarella-642585.jpg",
                        "imageType": "jpg",
                        "title": "Farfalle with fresh tomatoes, basil and mozzarella",
                        "readyInMinutes": 15,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/B6CC3QXM/farfalle-with-fresh-tomatoes-basil-and-mozzarella"
                    }
                ],
                "dinner": [
                    {
                        "id": 634496,
                        "image": "BBQ-Mac-and-Cheese-634496.jpg",
                        "imageType": "jpg",
                        "title": "BBQ Mac and Cheese",
                        "readyInMinutes": 45,
                        "servings": 4,
                        "sourceUrl": "https://www.foodista.com/recipe/FNMKDX42/bbq-mac-and-cheese"
                    }
                ],
                "nutrients": {
                    "calories": 1836.53,
                    "protein": 58.16,
                    "fat": 72.24,
                    "carbohydrates": 240.48
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