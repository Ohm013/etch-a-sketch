// Issue #1 : When coloring, the marker would color the div squares, the whole container, and if mouse on the page it would make the whole whole page black

// Solution #1: Restricted the mouseover event to only container and using target.matches >> container.addEventListener('mouseover', function(e) { 
  //target = e.target ;

   // if (target.matches = "div.squares") 
   //   changeColor(target) ; 

// Issue #2:  When clicking on the button to make the grid it makes a new one on top of the old one looking weird need to fix the issue so it deletes the old one and keeps the new requested grid layout. //

// Solution #2 Added >>> container.textContent = ""; <<< to update the grid box to blank every time the function is called.

// Issue #3: When resizing grid, it resizes improperly. Leaves a few squares on the last row by themselves.

const container = document.querySelector('#container');
const rainbow = document.querySelector('#rainbow');
const gridSize = document.querySelector("#gridSize");
const clear = document.querySelector("#clear"); 
const black = document.querySelector("#black"); 
const eraser = document.querySelector("#eraser");


//make function to start game off with 16x16 which then can be changed with the button
function defaultGrid (size){
size = 256
for (i = 0; i < 256  ; i++ ){
  const div = document.createElement('div'); 
  div.classList.add('squares'); 
  div.style.cssText = `border: .3px solid black; width: 35.5px ; height 35.5px`; 
  container.appendChild(div);
}};

defaultGrid() ; 

//try two loops(nested loop) for gridSize function

gridSize.addEventListener('click', function(e) {
    white(); 
    container.textContent = ""; //resets the container to blank 
    question = prompt("How many squares on each side? (Enter only one number) "); 
      if (question > 100) {
        alert ("Number must be 100 or less"); 
      }
      for (let i = 0 ; i < question ; i++) {
        const div = document.createElement('div');
        div.classList.add('squares'); 
        div.style.cssText = `border: .3px solid black;`
        container.appendChild(div); 
        
        for (let j = 0 ; j < question; j++){
          const column = document.createElement('div');
          column.classList.add('cubes'); 
          column.style.cssText = `border: .3px solid black;`
          container.appendChild(column); 
      }
      
}

})

//let numDivs = (question ** 2) ; 
//let eachSquare = 360000 / (numDivs) ;   // area of each square
//let wL = Math.floor((Math.sqrt(eachSquare)));  // gets width & length of each square
//for (let i = 0; i < numDivs ; i++ ){
  //    numDivs = question ** 2; 
    //  const div = document.createElement('div'); 
      //div.classList.add('squares'); 
      //div.style.cssText = `border: .3px solid black; width: ${wL}px ; height ${wL}px`; 
      //container.appendChild(div)
 // };
//});
eraser.addEventListener('click', erase);

function erase () {
  container.addEventListener('mouseover', function(e) {
    e.target.style.background = "white";
  })

}

clear.addEventListener('click', white);

function white () { //resets all squares to white when clear is clicked
    const squares = document.querySelectorAll('.squares') ;
    const cubes = document.querySelectorAll('cubes'); 
    cubes.forEach(cube => cube.style.background = "white");
    squares.forEach(square => square.style.background = "white");
}


black.addEventListener('click', dark) ; 

function changeColor (target) {
  target.style.backgroundColor = "black" ; 
}

function dark () {
  container.addEventListener('mouseover', function(e) {
      target = e.target ;

      if ((target.matches = "div.squares") || (target.matches = "div.cubes")) {
        changeColor(target) ; 
}});
};
  

rainbow.addEventListener('click',beginrgb); 

function beginrgb() { 
    container.addEventListener('mouseover', function(e) {  //rainbow color event listener
      if ((e.target.matches = "div.squares") || (e.target.matches = "div.cubes")) {
        let x = Math.floor(Math.random() *256);
        let y = Math.floor(Math.random() *256);
        let z = Math.floor(Math.random() *256);
        var rgbColor = `rgb(${x},${y}, ${z})`; 
        e.target.style.background = rgbColor; 
    }});
 };
  
