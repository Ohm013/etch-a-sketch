const container = document.querySelector('#container');


function makeDivs (numDivs) {
    for (i = 0; i < numDivs ; i++ ){
    const div = document.createElement('div'); 
    div.classList.add('squares'); 
    div.style.cssText = "border: 1px solid black ; height: 30px ; width: 30px ;"; 
    container.appendChild(div);
    div.addEventListener('click', function(e)  {
        e.stopPropagation() ; 
        e.target.style.background = 'black';
        startColor() ;
    })  //prob gonna have to change the event type to something else instead of 'click' to make boxes become black when hovering over
     
    };
} 

makeDivs(256) ; 


function startColor () {
    addEventListener('mouseover', function(e)  {
        
        e.target.style.background = 'black';

    } )
}