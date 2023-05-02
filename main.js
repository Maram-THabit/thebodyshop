var myButton = document.getElementById('up');
window.onscroll= function (){
    'use strict';
    if(window.pageyOffset>=100){
        myButton.style.display='block';
    }
    //  else{
    //    myButton.style.display='none';
    //  }
    };
    myButton.onclick=function(){
        'use strict';
        window.scrollTo(0,0);
    }