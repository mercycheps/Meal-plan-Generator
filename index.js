const myForm = document.getElementById("meal-Plan-Form")
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const diet = document.getElementById("diet").value;
    const calories = document.getElementById("calories").value;
    const apiKey = `https://api.spoonacular.com/mealplanner/generate`

    fetch(apiKey)
        .then(response => {
            if (response.ok) {
                throw new Error("Failed to fetch meal plan");
            }
            return response.json();

        })
        .then(data => displayMealPlan(data))
        .catch(error => {
            console.error("Error:", error);
            document.getElementById(`mealResults`).innerHTML = `<p style="color:red;">Error loading meal plan. Try again later.</p>`;
        })
})