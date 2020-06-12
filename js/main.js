let controller = {
    up : document.querySelector('#up'),
    left : document.querySelector('#left'),
    right : document.querySelector('#right'),
    obj : document.querySelector('.obj'),
    start : document.querySelector('#start'),
    con : document.querySelector('.control'),
    enemy : document.getElementById('enemy'),
    enemy1 : document.getElementById('enemy1'),
    enemy2 : document.getElementById('enemy2'),
    enemy3 : document.getElementById('enemy3'),
    enemy4 : document.getElementById('enemy4'),
    enemy5 : document.getElementById('enemy5'),
    enemy6 : document.getElementById('enemy6'),
    enemy7 : document.getElementById('enemy7'),
    enemy8 : document.getElementById('enemy8'),
    enemy9 : document.getElementById('enemy9'),
    enemy10 : document.getElementById('enemy10'),
    enemy11 : document.getElementById('enemy11'),
} 

let root = document.documentElement;
let x;
let y;
let timerId = setTimeout(function tick() {
    x = controller.obj.offsetLeft;
    y = controller.obj.offsetTop;
    timerId = setTimeout(tick, 100); 
  }, 100);

controller.left.addEventListener('click', function(){
    if (window.matchMedia("(max-width: 1000px)").matches) {
    controller.obj.style.marginLeft = 10 + "%";
    }else{
    controller.obj.style.marginLeft = 25 + "%";
    }
    root.style.setProperty("--foo", x);
    controller.obj.style.animationDuration = 0.7 + 's';
    controller.obj.style.animationName = 'moveLeft';
    controller.obj.style.animationTimingFunction = 'linear';
});

controller.right.addEventListener('click', function(){
    if (window.matchMedia("(max-width: 1000px)").matches) {
        controller.obj.style.marginLeft = 65 + "%";
    }else{
        controller.obj.style.marginLeft = 75 + "%";
    }
    root.style.setProperty("--foo", x);
    controller.obj.style.animationDuration = 0.7 + 's';
    controller.obj.style.animationName = 'moveRight';
    controller.obj.style.animationTimingFunction = 'linear';
});
    
controller.start.addEventListener('click', function(){
    controller.start.style.display = "none";
    controller.con.style.display = "flex";
    $('body, html').scrollTop($(document).height());
    let timer = setTimeout(function up() {
        $('#score').html('FINISH - ' + window.pageYOffset);
        window.scrollBy(0,-10);
        if(window.pageYOffset < 10){
            alert('YOU WIN');
            location.reload();
        }else if(controller.obj.offsetLeft > controller.enemy.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy.offsetTop && window.pageYOffset > controller.enemy.offsetTop - 500){
            location.reload();
        } else if(controller.obj.offsetLeft < controller.enemy1.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy1.offsetTop && window.pageYOffset > controller.enemy1.offsetTop - 500){
            location.reload();
        }
         else if(controller.obj.offsetLeft < controller.enemy2.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy2.offsetTop && window.pageYOffset > controller.enemy2.offsetTop - 500){
            location.reload();
         }
        else if(controller.obj.offsetLeft > controller.enemy3.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy3.offsetTop && window.pageYOffset > controller.enemy3.offsetTop - 500){
            location.reload();
        }
         else if(controller.obj.offsetLeft < controller.enemy4.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy4.offsetTop && window.pageYOffset > controller.enemy4.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft > controller.enemy5.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy5.offsetTop && window.pageYOffset > controller.enemy5.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft < controller.enemy6.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy6.offsetTop && window.pageYOffset > controller.enemy6.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft > controller.enemy7.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy7.offsetTop && window.pageYOffset > controller.enemy7.offsetTop - 500){
            location.reload();
         }  else if(controller.obj.offsetLeft < controller.enemy8.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy8.offsetTop && window.pageYOffset > controller.enemy8.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft > controller.enemy9.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy9.offsetTop && window.pageYOffset > controller.enemy9.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft < controller.enemy10.offsetLeft + 50 && window.pageYOffset + 300 < controller.enemy10.offsetTop && window.pageYOffset > controller.enemy10.offsetTop - 500){
            location.reload();
         } else if(controller.obj.offsetLeft > controller.enemy11.offsetLeft - 50 && window.pageYOffset + 300 < controller.enemy11.offsetTop && window.pageYOffset > controller.enemy11.offsetTop - 500){
            location.reload();
         }  else{
            //  console.log(200);
         }


        timer = setTimeout(up, 20); 
      }, 500);  

});

