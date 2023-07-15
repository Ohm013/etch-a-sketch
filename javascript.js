const container = document.querySelector('#container');
const rainbow = document.querySelector('#rainbow');

let question = prompt("How many squares per side? ")
 


function makeDivs (numDivs) {

  
  let eachSquare = 384000 / (question ** 2)  // area of each square
  let sqRt = Math.sqrt(eachSquare);  //gets width/length of each square



  
  numDivs = question * question;
  

  for (i = 0; i < numDivs ; i++ ){
    const div = document.createElement('div'); 
    div.classList.add('squares'); 
    div.style.cssText = `border: 1px solid black; width: ${sqRt}px ; height ${sqRt}px`; 
    container.appendChild(div);
    div.addEventListener('mouseover', function(e) {
      e.target.style.background = 'black';
      console.log(e.target);
      //rgb(); 
    }) //prob gonna have to change the event type to something else instead of 'click' to make boxes become black when hovering over
  }
} ;
 
makeDivs(); 


//function startColor () {
  //  div.addEventListener('mouseover', function(e)  {
    //e.target.style.background = 'black';        
//})};








function rgb () {
  rainbow.addEventListener('click', beginrgb); 
  console.log(rgbColor); 
}

function beginrgb() {
    let x = Math.floor(Math.random() *256);
    let y = Math.floor(Math.random() *256);
    let z = Math.floor(Math.random() *256);
    var rgbColor = "rgb("+ x +", "+ y +", "+ z + ")"; 
    
    squares.addEventListener('mouseover', function(e) {
    
    e.target.style.background = rgbColor ;
    
  });
};