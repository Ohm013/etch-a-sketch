// Issue #1 : When coloring, the marker would color the div squares, the whole container, and if mouse on the page it would make the whole whole page black

// Solution #1: Restricted the mouseover event to only container and using target.matches >> container.addEventListener('mouseover', function(e) { 
  //target = e.target ;

   // if (target.matches = "div.squares") 
   //   changeColor(target) ; 

// Issue #2:  When clicking on the button to make the grid it makes a new one on top of the old one looking weird need to fix the issue so it deletes the old one and keeps the new requested grid layout. //

// Solution #2 Added >>> container.textContent = ""; <<< to update the grid box to blank every time the function is called.

// Issue #3: When resizing grid, it resizes improperly. Leaves a few squares on the last row by themselves. Tried "box-sizing : border-box"in CSS and that solved some of the grids but not all bc border-box means it takes into account the border of each cube when making the size of it

const container = document.querySelector('#container');
const rainbow = document.querySelector('#rainbow');
const gridSize = document.querySelector("#gridSize");
const clear = document.querySelector("#clear"); 
const black = document.querySelector("#black"); 
const eraser = document.querySelector("#eraser");


//make function to start game off with 16x16 which then can be changed with the button
//function defaultGrid (size){
//size = 256
//for (i = 0; i < 256  ; i++ ){
 // let dimension = Math.floor((Math.sqrt(360000 / 256)));
  //const div = document.createElement('div'); 
  //div.classList.add('squares'); 
  //div.style.cssText = `border: .3px solid black; width: ${dimension}px ; height ${dimension}px`; 
  //container.appendChild(div);
//}};



let rows = document.createElement('div');
let columns = document.createElement('div');

function newGrid () {
        white(); 
        container.textContent = ""; //resets the container to blank 
        let question = prompt("How many squares on each side? (Enter only one number) "); 
          if (question > 100) {
            alert ("Number must be 100 or less"); 
        } else if (question <= 100) {
          for (let i = 0 ; i < question ; i++) {
            rows = document.createElement('div');
            rows.classList.add('rows'); 
            rows.style.cssText = `border: .1px solid black`;
            container.appendChild(rows); 
            
            for (let j = 0 ; j < question; j++){
              columns = document.createElement('div');
              columns.classList.add('columns'); 
              columns.style.cssText =  `border: .1px solid black`; 
              rows.appendChild(columns); 
           };
       };
   };
};
  
gridSize.addEventListener('click', newGrid);

eraser.addEventListener('click', erase);

function erase () {
  container.addEventListener('mouseover', function(e) {
    e.target.style.background = "white";
  })

}

clear.addEventListener('click', white);

function white () { //resets all squares to white when clear is clicked
    const squares = document.querySelectorAll('.rows') ;
    const cubes = document.querySelectorAll('squares'); 
    cubes.forEach(cube => cube.style.background = "white");
    squares.forEach(square => square.style.background = "white");
    container.style.cssText = "background : white" ; 
}


black.addEventListener('click', dark) ; 

function changeColor (target) {
  target.style.backgroundColor = "black" ; 
}

function dark () {
  container.addEventListener('mouseover', function(e) {
      target = e.target ;

      if ((target.matches = "div.rows") || (target.matches = "div.columns")) {
        changeColor(target) ; 
}});
};
  

rainbow.addEventListener('click',beginrgb); 

function beginrgb() { 
    container.addEventListener('mouseover', function(e) {  //rainbow color event listener
      if ((e.target.matches = "div.rows") || (e.target.matches = "div.columns")) {
        let x = Math.floor(Math.random() *256);
        let y = Math.floor(Math.random() *256);
        let z = Math.floor(Math.random() *256);
        var rgbColor = `rgb(${x},${y}, ${z})`; 
        e.target.style.background = rgbColor; 
    }});
 };
  
