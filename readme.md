# Meal Plan Generator

## Description

The Meal Plan Generator is a web application that allows users to create personalized meal plans based on their dietary preferences and calorie targets. It integrates with the Spoonacular API to fetch meal suggestions and provides options to save, delete, and export meal plans as PDFs.

## Features

- Select dietary preferences (Vegan, Vegetarian, Keto, Paleo, or Any)
- Set target calorie intake
- Generate meal plans dynamically
- Save and delete meal plans
- Export meal plans as a PDF
- Display images for meals
- Mark meal plans as favorites
- Filter and select previously saved menus
- Uses a local JSON server to store saved meal plans

## Technologies Used

- HTML5, CSS3, JavaScript
- Spoonacular API
- jsPDF & html2canvas (for PDF generation)
- JSON Server (for local storage of meal plans)

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js
- JSON Server (if using local storage)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/meal-plan-generator.git
   cd meal-plan-generator
   ```
2. Install dependencies (if applicable):
   ```sh
   npm install
   ```
3. Start the JSON Server (if applicable):
   ```sh
   json-server --watch db.json
   ```
4. Open `index.html` in your browser.

## Usage

1. Select a dietary preference from the dropdown.
2. Enter your target calorie intake.
3. Click "Get Personalized Meal Plan" to fetch meals.
4. Save, delete, or mark meal plans as favorites.
5. Filter and select previously saved menus.
6. Download the meal plan as a PDF.

## File Structure

```
meal-plan-generator/
│── index.html      # Main HTML file
│── index.css       # Stylesheet
│── index.js        # JavaScript logic
│── db.json         # Local JSON database (if using JSON Server)
│── README.md       # Project Documentation
```

## API Usage

This project integrates with the Spoonacular API to fetch meal plans. Ensure you have an API key and update the `index.js` file accordingly:

```js
const API_KEY = "your_spoonacular_api_key";
```

## License

This project is licensed under the MIT License.

## Author

- **Your Name** - [GitHub Profile](https://github.com/your-username/)

