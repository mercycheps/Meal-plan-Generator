
function save(data) {
    if (!data) return;
    localStorage.setItem("savedMenu", JSON.stringify(data))
}

async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const content = document.getElementById("mealPlanResult");

    html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("download.pdf");
    });
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
        <div class="meal">
        <img class="meal-image" src="https://img.spoonacular.com/recipes/${meal.image}" />
            <div>
                <p> ${meal.title} </p>
                <span> Readiness: ${meal.readyInMinutes} </span><br/>
                <span> Servings: ${meal.servings} </span><br/>
                <a href="${meal.sourceUrl}" target="_blank" > Go to Recipe </a>
            </div>
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