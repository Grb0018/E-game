var adjustp = 1.3*vw;
var adjustt = 2.9*vw;


document.body.ontouchmove = (event)=>{
    for (let i = 0; i < alla.length; i++) {
var itemtop = parseInt($(alla[i]).css('height')) * (i+1);
var chktop = Math.floor(parseInt($(alla[i].parentElement).css('top')) + itemtop) - Math.floor(event.touches[0].clientY + adjustt);
var chkleft = Math.floor(parseInt($(alla[i].parentElement).css('left'))+ adjustp) - Math.floor(event.touches[0].clientX )
        if(chktop>-10 && chktop <10){
            if(chkleft>-25 && chkleft<25){
                part=true
                if(i>0){
                    if(alla[i-1].style.backgroundColor ==='crimson' && alla[i].style.backgroundColor !=='crimson'){
                        if(i==alla.length-1){
                            var lbtop = parseInt($('.lb').css('height'));
                                $('.lb').css({height:lbtop+(1.07*vw)+40+'px'})
                                alla[i].style.backgroundColor = 'crimson';
                                sound()
                                for (let i = 0; i < 5; i++) {
                                    particleM(event)  
                                }
                                side1m();
                                $('#arrow').css({
                                    transform: 'rotate(270deg)',
                                    left: '42vw',
                                    top: '16vw',
                                    Animation: 'left1 2000ms linear infinite'
                                })
                                side.style.backgroundColor = '#ff5c6d'
                        }
                        else{
                            var lbtop = parseInt($('.lb').css('height'));
                            $('.lb').css({height:lbtop+(1.07*vw)+'px'})
                            alla[i].style.backgroundColor = 'crimson';
                            sound()
                            for (let i = 0; i < 5; i++) {
                                particleM(event)  
                            }
                        } 
                    }
                }

                else if(alla[i].style.backgroundColor !=='crimson'){
                        var lbtop = parseInt($('.lb').css('height'));
                        $('.lb').css({height:lbtop+(1.07*vw)+'px'})
                        alla[i].style.backgroundColor = 'crimson';
                        sound()
                        for (let i = 0; i < 5; i++) {
                            particleM(event)  
                        }
                }     
            }
        }
    }
}



function side1m(){
    document.body.ontouchmove = (event)=>{
    var alla1 = side1.querySelectorAll('a');
    for (let i = 0; i < alla1.length; i++) {
        var itemleft = parseInt($(alla1[i]).css('width')) * (i+1);
        var chktop = Math.floor(parseInt($(alla1[i].parentElement).css('top'))) - Math.floor(event.touches[0].clientY + adjustt + (2*vw));
        var chkleft = Math.floor(parseInt($(alla1[i].parentElement).css('left'))+ adjustp+itemleft) - Math.floor(event.touches[0].clientX )
                if(chktop>-26 && chktop <26){
                    if(chkleft>-8 && chkleft<8){
                        part=true
                        if(i>0){
                            if(alla1[i-1].style.backgroundColor ==='crimson' && alla1[i].style.backgroundColor !=='crimson'){
                                if(i==alla1.length-1){
                                    var lbtop = parseInt($('.lb1').css('width'));
                                        $('.lb1').css({width:lbtop+(1*vw)+40+'px'})
                                        sound()
                                        alla1[i].style.backgroundColor = 'crimson';
                                        for (let i = 0; i < 7; i++) {
                                            particleM(event)  
                                        }
                                        side2m();
                                        $('#arrow').css({
                                            transform: 'rotate(270deg)',
                                            left: '42vw',
                                            top: '22.5vw',
                                            Animation: 'left2 2000ms linear infinite'
                                        })
                                }
                                else{
                                    var lbtop = parseInt($('.lb1').css('width'));
                                    $('.lb1').css({width:lbtop+(1*vw)+'px'})
                                    sound()
                                    alla1[i].style.backgroundColor = 'crimson';
                                    for (let i = 0; i < 7; i++) {
                                        particleM(event)  
                                    }
                                } 
                            }
                        }
        
                        else if(alla1[i].style.backgroundColor !=='crimson'){
                                var lbtop = parseInt($('.lb1').css('width'));
                                $('.lb1').css({width:lbtop+(1*vw)+'px'})
                                sound()
                                alla1[i].style.backgroundColor = 'crimson';
                                for (let i = 0; i < 7; i++) {
                                    particleM(event)  
                                }
                        }     
                    }
                }
            }
}}

function side2m(){
    document.body.ontouchmove = (event)=>{
    var alla2 = side2.querySelectorAll('a');
    for (let i = 0; i < alla2.length; i++) {
        var itemleft = parseInt($(alla2[i]).css('width')) * (i+1);
        var chktop = Math.floor(parseInt($(alla2[i].parentElement).css('top'))) - Math.floor(event.touches[0].clientY + adjustt + (2*vw));
        var chkleft = Math.floor(parseInt($(alla2[i].parentElement).css('left'))+ adjustp+itemleft) - Math.floor(event.touches[0].clientX )
                if(chktop>-26 && chktop <26){
                    if(chkleft>-8 && chkleft<8){
                        part=true
                        if(i>0){
                            if(alla2[i-1].style.backgroundColor ==='crimson' && alla2[i].style.backgroundColor !=='crimson'){
                                if(i==alla2.length-1){
                                    var lbtop = parseInt($('.lb2').css('width'));
                                        $('.lb2').css({width:lbtop+(1.35*vw)+40+'px'})
                                        sound()
                                        alla2[i].style.backgroundColor = 'crimson';
                                        for (let i = 0; i < 7; i++) {
                                            particleM(event)  
                                        }
                                        side3m()
                                        $('#arrow').css({
                                            transform: 'rotate(270deg)',
                                            left: '43vw',
                                            top: '29vw',
                                            Animation: 'left1 2000ms linear infinite'
                                        })
                                }
                                else{
                                    var lbtop = parseInt($('.lb2').css('width'));
                                    $('.lb2').css({width:lbtop+(1.35*vw)+'px'})
                                    alla2[i].style.backgroundColor = 'crimson';
                                    sound()
                                    for (let i = 0; i < 7; i++) {
                                        particleM(event)  
                                    }
                                } 
                            }
                        }
        
                        else if(alla2[i].style.backgroundColor !=='crimson'){
                                var lbtop = parseInt($('.lb2').css('width'));
                                $('.lb2').css({width:lbtop+(1.35*vw)+'px'})
                                alla2[i].style.backgroundColor = 'crimson';
                                for (let i = 0; i < 7; i++) {
                                    particleM(event)  
                                }
                                sound()
                        }     
                    }
                }
            }
}}

function side3m(){
    document.body.ontouchmove = (event)=>{
    var alla3 = side3.querySelectorAll('a');
    for (let i = 0; i < alla3.length; i++) {
        var itemleft = parseInt($(alla3[i]).css('width')) * (i+1);
        var chktop = Math.floor(parseInt($(alla3[i].parentElement).css('top'))) - Math.floor(event.touches[0].clientY + adjustt + (2*vw));
        var chkleft = Math.floor(parseInt($(alla3[i].parentElement).css('left'))+ adjustp+itemleft) - Math.floor(event.touches[0].clientX )
                if(chktop>-26 && chktop <26){
                    if(chkleft>-8 && chkleft<8){
                        part=true
                        if(i>0){
                            if(alla3[i-1].style.backgroundColor ==='crimson' && alla3[i].style.backgroundColor !=='crimson'){
                                if(i==alla3.length-1){
                                    var lbtop = parseInt($('.lb3').css('width'));
                                        $('.lb3').css({width:lbtop+(1.35*vw)+40+'px'})
                                        alla3[i].style.backgroundColor = 'crimson';
                                        for (let i = 0; i < 7; i++) {
                                            particleM(event)  
                                        }
                                        sound()
                                        $('#side'). fadeOut()
                        $('#side1').fadeOut()
                        $('#side2').fadeOut()
                        $('#side3').fadeOut()
                        $('#arrow').fadeOut()
                        $('#ele').fadeIn(2000)
                        var audio = new Audio('./img/elephant.wav');
                        audio.play()
                                }
                                else{
                                    var lbtop = parseInt($('.lb3').css('width'));
                                    $('.lb3').css({width:lbtop+(1.35*vw)+'px'})
                                    alla3[i].style.backgroundColor = 'crimson';
                                    for (let i = 0; i < 7; i++) {
                                        particleM(event)  
                                    }
                                    sound()
                                } 
                            }
                        }
        
                        else if(alla3[i].style.backgroundColor !=='crimson'){
                                var lbtop = parseInt($('.lb3').css('width'));
                                $('.lb3').css({width:lbtop+(1.35*vw)+'px'})
                                alla3[i].style.backgroundColor = 'crimson';
                                sound()
                                for (let i = 0; i < 7; i++) {
                                    particleM(event)  
                                }
                        }     
                    }
                }
            }
}}


var elem = document.getElementById("game");
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }


  