let menu = document.querySelector('#menu-on');

menu.addEventListener('input',function(e){
    let main = document.querySelector('.main-content');
  if(e.target.checked==true){
    main.style.backgroundImage="linear-gradient(to bottom,hsl(233, 26%, 24%), white)";
  }else{
    main.style.backgroundImage="";
  }

});
