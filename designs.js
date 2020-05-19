//global variables
const pickColor = document.getElementById('colorPicker');
const canvas = document.querySelector('#pixelCanvas');
const myForm =document.getElementById('sizePicker');

//colors the selected square the color set by the colorPicker
function colorSquare(){
  this.setAttribute('style', `background-color: ${pickColor.value}`);
};

function makeGrid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  //clears the canvas
  canvas.innerHTML = '';

  //using a nested for loop to set up the grid

  //the first loop creates each row and adds it to the canvas
  for (x = 0; x< height; ++x){
    let row = document.createElement('tr');
    canvas.appendChild(row);

    //this loop creates each square and adds it to the row
    for (z = 0; z< width; z++){
      let square = document.createElement('td');
      row.appendChild(square);
      //adding an event listener to every square
      square.addEventListener('click', colorSquare);
    }
  }
};
//adding an event listener to the submit button
myForm.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
