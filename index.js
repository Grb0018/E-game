const side = document.getElementById('side');
const lb = document.getElementsByClassName('lb')
////////////////////////
const side1 = document.getElementById('side1');
const lb1 = document.getElementsByClassName('lb1')
//////////////////////
const side2 = document.getElementById('side2');
const lb2 = document.getElementsByClassName('lb2')
////////////////////////////
const side3 = document.getElementById('side3');
const lb3 = document.getElementsByClassName('lb3')
////////////////////////////
var vw = screen.availWidth/100;
var down = 0.5*vw;
var part=true;
var alla = side.querySelectorAll('a');

function sound(){
    var audio = new Audio('./img/Touch.mp3')
    audio.play()
}

side.onmousemove = (e)=>{
    for (let i = 0; i < alla.length; i++) {
        
        alla[i].onmousemove = (e)=>{
            part=true;
            var lbtop = parseInt($('.lb').css('height'));
            if(i==alla.length-1 && alla[i-1].style.backgroundColor ==='crimson'){
                sound()
                sidefun1();
                $('#side').css({'background-color':'#ff5c6d'});
                $('.lb').css({height:lbtop+down+50+'px'});

            }
            else if(i==0){
                $('.lb').css({height:lbtop+down+'px'})
                alla[i].style.backgroundColor = 'crimson';
                sound()
                for (let i = 0; i <3; i++) {
                    particle(event)
                }
                
            }
            else{
                if(alla[i-1].style.backgroundColor ==='crimson'){
                    alla[i].style.backgroundColor = 'crimson';
                    $('.lb').css({height:lbtop+down+'px'});
                    sound()
                    for (let i = 0; i <3; i++) {
                        particle(event)
                    }
                }
            }
        }
    }
}

function sidefun1(){
    $('#arrow').css({
        transform: 'rotate(270deg)',
        left: '42vw',
        top: '16vw',
        Animation: 'left1 2000ms linear infinite'
    })
    var down1 = 0.4*vw;
    var alla1 = side1.querySelectorAll('a');
    side.onmousemove = (e)=>{
        for (let i = 0; i < alla1.length; i++) {
            alla1[i].onmousemove = (e)=>{
                part=true;
                var lbtop = parseInt($('.lb1').css('width'));
                if(i==0){
                    sound()
                    $('.lb1').css({width:lbtop+down1+'px'})
                    alla1[i].style.backgroundColor = 'crimson';
                    for (let i = 0; i <3; i++) {
                        particle(event)
                    }
                    
                }
                else if(i==alla1.length-1){
                    if(alla1[i-1].style.backgroundColor ==='crimson'){
                        sound()
                        alla1[i].style.backgroundColor = 'crimson';
                        $('.lb1').css({width:lbtop+down1+5*vw+'px'});
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                        sidefun2()
                    }
                }
                else{
                    if(alla1[i-1].style.backgroundColor ==='crimson'){
                        alla1[i].style.backgroundColor = 'crimson';
                        $('.lb1').css({width:lbtop+down1+'px'});
                        sound()
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                    }
                }
            }
        }
    }
}

function sidefun2(){
    $('#arrow').css({
        transform: 'rotate(270deg)',
        left: '42vw',
        top: '22.5vw',
        Animation: 'left2 2000ms linear infinite'
    })
    var down2 = 0.4*vw;
    var alla2 = side2.querySelectorAll('a');
    side.onmousemove = (e)=>{
        for (let i = 0; i < alla2.length; i++) {
            alla2[i].onmousemove = (e)=>{
                part=true;
                var lbtop = parseInt($('.lb2').css('width'));
                if(i==0){
                    sound()
                    $('.lb2').css({width:lbtop+down2+'px'})
                    alla2[i].style.backgroundColor = 'crimson';
                    for (let i = 0; i <3; i++) {
                        particle(event)
                    }
                    
                }
                else if(i==alla2.length-1){
                    sound()
                    if(alla2[i-1].style.backgroundColor ==='crimson'){
                        alla2[i].style.backgroundColor = 'crimson';
                        $('.lb2').css({width:lbtop+down2+5*vw+'px'});
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                        sidefun3();
                        $('#arrow').css({
                            top: '29vw',
                            Animation: 'left1 2000ms linear infinite'
                        })
                    }
                    
                    
                }
                else{
                    if(alla2[i-1].style.backgroundColor ==='crimson'){
                        sound()
                        alla2[i].style.backgroundColor = 'crimson';
                        $('.lb2').css({width:lbtop+down2+'px'});
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                    }
                }
            }
        }
    }
}


function sidefun3(){
    $('#arrow').css({
        transform: 'rotate(270deg)',
        left: '43vw',
        top: '29vw',
        Animation: 'left1 2000ms linear infinite'
    })
    var down3 = 0.4*vw;
    var alla3 = side3.querySelectorAll('a');
    side.onmousemove = (e)=>{
        for (let i = 0; i < alla3.length; i++) {
            alla3[i].onmousemove = (e)=>{
                part=true;
                var lbtop = parseInt($('.lb3').css('width'));
                if(i==0){
                    sound()
                    $('.lb3').css({width:lbtop+down3+'px'})
                    alla3[i].style.backgroundColor = 'crimson';
                    for (let i = 0; i <3; i++) {
                        particle(event)
                    }
                    
                }
                else if(i==alla3.length-1){
                    
                    if(alla3[i-1].style.backgroundColor ==='crimson'){
                        sound()
                        alla3[i].style.backgroundColor = 'crimson';
                        $('.lb3').css({width:lbtop+down3+5*vw+'px'});
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                        $('#side'). fadeOut()
                        $('#side1').fadeOut()
                        $('#side2').fadeOut()
                        $('#side3').fadeOut()
                        $('#arrow').fadeOut()
                        $('#ele').fadeIn(2000)
                        var audio = new Audio('./img/elephant.wav');
                        audio.play()
                    }
                    
                }
                else{
                    if(alla3[i-1].style.backgroundColor ==='crimson'){
                        sound()
                        alla3[i].style.backgroundColor = 'crimson';
                        $('.lb3').css({width:lbtop+down3+'px'});
                        for (let i = 0; i <3; i++) {
                            particle(event)
                        }
                    }
                }
            }
        }
    }
}





































///////
var create = 0;
var dire=['l','r'];
var count = 5*vw
function particle(event){
    if(part == true){
        var c = document.createElement('c');
         create=1;
         var left;
         var chk = dire[Math.floor(Math.random()*2)]
         if(chk=='l'){
           left  = (event.clientX - Math.floor(Math.random()*count)) + 'px';
         }
         else{
           left= (event.clientX + Math.floor(Math.random()*count)) + 'px';
         }
         var height= (event.clientY - Math.floor(Math.random()*count)) + 'px';
         c.setAttribute('style','width:0.2vw;height:0.2vw;display:block;position:absolute;z-index:5;border-radius:count%;box-shadow:0px 0px 10px white;');
        c.style.left  = event.clientX + 'px' ;
        c.style.top = event.clientY +'px';
       c.style.backgroundColor = 'white';
     
        $(c).animate({
         left: left,
         top: height
        },500)
        setTimeout(()=>{
         $(c).fadeOut()
        },490)
        document.body.append(c);
        setTimeout(()=>{c.remove();part=false},2000)
        
    } 
}

function particleM(event){
    if(part == true){
        var c = document.createElement('c');
         create=1;
         var left;
         var chk = dire[Math.floor(Math.random()*2)]
         if(chk=='l'){
           left  = (event.touches[0].clientX - Math.floor(Math.random()*count)) + 'px';
         }
         else{
           left= (event.touches[0].clientX + Math.floor(Math.random()*count)) + 'px';
         }
         var height= (event.touches[0].clientY - Math.floor(Math.random()*count)) + 'px';
         c.setAttribute('style','width:0.2vw;height:0.2vw;display:block;position:absolute;z-index:5;border-radius:count%;box-shadow:0px 0px 10px white;');
        c.style.left  = event.touches[0].clientX + 'px' ;
        c.style.top = event.touches[0].clientY -15 +'px';
       c.style.backgroundColor = 'white';
     
        $(c).animate({
         left: left,
         top: height
        },500)
        setTimeout(()=>{
         $(c).fadeOut()
        },490)
        document.body.append(c);
        setTimeout(()=>{c.remove();part=false},2000)
        
    } 
}