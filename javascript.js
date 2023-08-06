// Issue #1 : When coloring, the marker would color the div squares, the whole container, and if mouse on the page it would make the whole whole page black

// Solution #1: Restricted the mouseover event to only container and  using target.matches >> container.addEventListener('mouseover', function(e) { 
  //target = e.target ;

   // if (target.matches = "div.squares") 
   //   changeColor(target) ; 

// Issue #2:  When clicking on the button to make the grid it makes a new one on top of the old one looking weird need to fix the issue so it deletes the old one and keeps the new requested grid layout. //

// Solution #2 Added >>> container.textContent = ""; <<< to update the grid box to blank every time the function is called.

//**/ Issue #3 **: When resizing grid, it resizes improperly. Leaves a few squares on the last row by themselves. Tried "box-sizing : border-box"in CSS and that solved some of the grids but not all bc border-box means it takes into account the border of each cube when making the size of it
// ** Solution #3 ** : Did nested loops, one for rows and inside loop to make squares within the row (basicaly columns). Added "flex: 1 1 auto" to the rows and columns in CSS. the flex: 1 1 auto was huge and changing flex direction to column for the container. flex: 1 1 auto allows the insinde squares to grow or shrink as needed to fit the container


// Issue #4 : The container background would remain the color it was previously colored when grid sizing and changing colors
// Solution #4 : added "container.style.background = "white";" when switchin between colors and grid resize 

//Issue #5: When coloring, if mouse hovers over the side borders or moves fast it colors the whole row the chosen color but doesn't do it when I clear and begin coloring again. Only when page is refreshed at the first 16 x 16. How to not make it color whole row?
// Solution #5 : Removed the javascript css for the "row.style.css = border 1px solid black" for column as well


const container = document.querySelector('#container');
const rainbow = document.querySelector('#rainbow');
const gridSize = document.querySelector("#gridSize");
const clear = document.querySelector("#clear"); 
const black = document.querySelector("#black"); 
const eraser = document.querySelector("#eraser");

//try two loops(nested loop) for gridSize function

function newGrid (size) {
        white(); 
        container.textContent = ""; //resets the container to blank , no lines from previous grid
          if ( size > 100) {
            alert ("Number must be 100 or less"); 
        } else if (size <= 100) {
          for (let i = 0 ; i < size ; i++) {
            rows = document.createElement('div');
            rows.classList.add('rows'); 
            container.appendChild(rows); 
            
            for (let j = 0 ; j < size; j++){
              columns = document.createElement('div');
              columns.classList.add('columns'); 
              rows.appendChild(columns); 
           };
       };
   };
};

newGrid(16); //Starts game off with 16 x 16


gridSize.addEventListener('click', () => {
  size = prompt("How many squares on each side? (Enter only one number) "); 
  newGrid(size) ;
});

eraser.addEventListener('click', erase);

function erase () {
  container.addEventListener('mouseover', function(e) {
    e.target.style.background = "white";
  })

}

clear.addEventListener('click', white);


function white () { //resets all squares to white when clear is clicked
    container.style.background = "white"; 
    const columns = document.querySelectorAll('.columns') ;
    columns.forEach(column => column.style.background = "");
    
}


black.addEventListener('click', dark) ; 

function changeColor (target) {
  target.style.backgroundColor = "black" ; 
  container.style.background = "white"; 
};

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
        container.style.background = "white"; 
    }});
 };
  

// The first function was the code for default 16 x 16 when game is first loaded

//make function to start game off with 16x16 which then can be changed with the button
//function defaultGrid (size){
//size = 256
//for (i = 0; i < 256  ; i++ ){
 // let dimension = Math.floor((Math.sqrt(360000 / 256)));
 // const div = document.createElement('div'); 
  //div.classList.add('squares'); 
  //div.style.cssText = `border: .3px solid black; width: ${dimension}px ; height ${dimension}px`; 
  //container.appendChild(div);
//}};

//defaultGrid() ; 


//  This was attemped grid resize function that didnt work because it would leave extra space or put a couple squares on a new row by itself. Wouldnt fill container properly. Box-border worked to an extenet but not fully

//let numDivs = (question ** 2) ; 
//let eachSquare = 360000 / (numDivs) ;   // area of each square
//let wL = Math.floor((Math.sqrt(eachSquare)));  // gets width & length of each square
//for (let i = 0; i < numDivs ; i++ ){
//numDivs = question ** 2; 
//const div = document.createElement('div'); 
//div.classList.add('squares'); 
//div.style.cssText = `border: .1px solid black; width: ${wL}px ; height ${wL}px`; 
//container.appendChild(div)
//}
//});