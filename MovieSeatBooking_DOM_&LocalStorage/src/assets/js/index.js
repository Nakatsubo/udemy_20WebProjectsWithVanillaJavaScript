import  '../scss/style.scss';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// (5)　ローカルストレージの値を保持する関数
populateUI();

let ticketPrice = + movieSelect.value;

// (4) Save selected movie index and price -> ローカルストレージから値を取得する関数
function setMovieDate(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// (3) Update total and count -> 合計シート数と合計金額を切り替える関数
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Copy selected seat intro array -> シートのインデックス番号を取得する
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // ローカルストレージにシートのインデックス番号を保存する
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); // JSON.stringify //-> JavaScript -> JSON

  const selectedSeatsCount = selectedSeats.length;

  // 合計シート数と合計金額を書き換える
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// (5) Get data from localstrage and populate UI -> ローカルストレージの値を保持する関数
function populateUI() {
  // ローカルストレージの値を取得する
  const selectedSeatsArr = JSON.parse(localStorage.getItem('selectedSeats')); // JSON.parse //->  JSON -> JavaScript

  if (selectedSeatsArr !== null && selectedSeatsArr.length > 0) {
    seats.forEach((seat, index) => {
      // indexOf -> 呼び出す String オブジェクト中で、 fromIndex から検索を始め、指定された値が最初に現れたインデックスを返す。値が見つからない場合は -1 を返す。
      if (selectedSeatsArr.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    })
  }

  // ローカルストレージの値を取得する
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// (1) Movie select event -> 映画を切り替えたら、合計金額を切り替える
movieSelect.addEventListener('change', (e) => {
  ticketPrice = + e.target.value;

  // 映画のインデックス番号 値(価格)を取得する
  setMovieDate(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})

// (2) Seat click event -> シートが増減したら、合計シート数を切り替える
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

    // シートのステータスを変更する
    e.target.classList.toggle('selected'); // toggle -> クラスがついていなかったらつける/クラスがついていたら外す
    updateSelectedCount();
  }
})

// (6) Initial count and total set -> 合計シート数と合計金額をリセットする関数
updateSelectedCount();