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
        console.log(data);
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

// Event Listeners
submit.addEventListener('submit', searchMeal);