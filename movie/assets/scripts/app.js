const addMovieModel = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const cancleAddMovieButton = addMovieModel.querySelector('.btn--passive');
const addMovieButton = cancleAddMovieButton.nextElementSibling;
const userInput = addMovieModel.querySelectorAll('input');
const entryTextSelection = document.getElementById("entry-text");
const movies = [];

const entryTextSelectionClear = () => {
    if(movies.length === 0 ){
        entryTextSelection.style.display = "block";
    } else{
        entryTextSelection.style.display = "none";
    }
};

const toggleBackDrop = () => {
  backDrop.classList.toggle('visible');
};

const toggleMovieModel = () => {
  console.log(this, "vavdcakg");
  addMovieModel.classList.toggle('visible');
  toggleBackDrop();
};

const backDropClickHandler = () => {
  toggleMovieModel();
};

const cancleAddMovieHandler = () => {
  toggleMovieModel();
  // clearMovieInput();
};

const clearMovieInput = () => {
    for(const users of userInput){
        users.value = "";
    }
};

const addMoviesName = (title, image, rating) => {
    const uiContent = document.getElementById("movie-list");
    const liCreate = document.createElement("li");
    liCreate.className = "movie-element";
    liCreate.innerHTML = `
        <div class="movie-element__image">
            <img src="${image}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5</p>
        </div>
    `;
    uiContent.append(liCreate);
};

const addMovieButtonHandler = () => {
  const titleValue = userInput[0].value;
  const imageURLValue = userInput[1].value;
  const ratingValue = userInput[2].value;
  if (
    titleValue.trim() === '' ||
    imageURLValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
      alert("please enter valid value (Rating value betweeen 1-5)")
      return;
  }

  const newMovie = {
      title : titleValue,
      image : imageURLValue,
      rating : ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModel();
  clearMovieInput();
  entryTextSelectionClear();
  addMoviesName(newMovie.title, newMovie.image, newMovie.rating);
};

startAddMovieButton.addEventListener('click', toggleMovieModel);
backDrop.addEventListener('click', backDropClickHandler);
cancleAddMovieButton.addEventListener('click', cancleAddMovieHandler);
addMovieButton.addEventListener('click', addMovieButtonHandler);
