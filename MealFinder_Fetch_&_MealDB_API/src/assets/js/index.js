import  '../scss/style.scss';

const search  = document.getElementById('search'),
      submit  = document.getElementById('submit'),
      random  = document.getElementById('random'),
      mealsEL = document.getElementById('meals'),
      resultHeading = document.getElementById('result-heading'),
      single_mealEL = document.getElementById('single-meals');

// Search meal and fetch from API
function searchMeal(e) {
  // event.preventDefaultメソッドは、submitイベントの発生元であるフォームが持つデフォルトの動作をキャンセルするメソッドです。
  e.preventDefault();

  // Clear single meal
  single_mealEL.innerHTML = '';

  // Get search term
  const term = search.value;
  // console.log(term);

  // Check for empty
  // trim() メソッド -> 文字列の両端の空白を削除します。
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
        } else {
          meals.innerHTML = data.meals
            .map(meal => `
              <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealId="${meal.idMeal}">
                  <h3>${meal.strMeal}</h3>
                </div>
              </div>
            `).join('');
        }
        // Clear search text
        search.value = '';
      })
  } else {
    alert('Please enter a search term');
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  .then(res => res.json())
  .then(date => {
    // console.log(date);
    const meal = date.meals[0];

    addMealDOM(meal);
  })
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEL.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealDOM(meal);
    }) 
}

// Add meal to DOM
function addMealDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i += 1) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  single_mealEL.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients<h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Event Listeners
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);

mealsEL.addEventListener('click', e => {
  const mealInfo = e.path.find(item  => {
    // console.log(item);
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  })

  // console.log(mealInfo);
  if (mealInfo) {
    const mealId = mealInfo.getAttribute('data-mealId');
    // console.log(mealId);

    getMealById(mealId);
  }
});