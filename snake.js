window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

var position_x,position_y,gs,tc,ax,ay,xv,yv,trail,tail;
position_x=position_y=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
    position_x+=xv;
    position_y+=yv;
    if(position_x<0) {
        position_x= tc-1;
    }
    if(position_x>tc-1) {
        position_x= 0;
    }
    if(position_y<0) {
        position_y= tc-1;
    }
    if(position_y>tc-1) {
        position_y= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==position_x && trail[i].y==position_y) {
            tail = 5;
        }
    }
    trail.push({x:position_x,y:position_y});
    while(trail.length>tail) {
        trail.shift();
    }

    if(ax==position_x && ay==position_y) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}
