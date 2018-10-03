function GamePage(gameWidth,gameHeight) {

    var GAME_START=0;
    var GAME_RUN=GAME_START+1;
    var GAME_OVER=GAME_RUN+1;
    var state =GAME_START;

    this.gameWidth=gameWidth;
    this.gameHeight=gameHeight;
    var game;
    var map;

    var scoreH1;
    var score=0;

    var timeProgress;
    var timeProgressWidth=270;

    var wolf;
    this.init=function () {
        //1,创建一个div盒子
        game = document.createElement('div');
        //2,设置相关的参数
        game.style.width=this.gameWidth+"px";
        game.style.height=this.gameHeight+"px";
        game.style.position="relative";
        game.style.margin="auto";
        //2,创建地图对象
        map = new Map(this.gameWidth,this.gameHeight);
        map.init();
        //添加地图对象
        game.appendChild(map.getMap());

        //添加狼
        wolf = new Wolf();
        wolf.init();
        wolf.setHitListener(this.changeScore);
        game.appendChild(wolf.getWolf());

        //添加分数
        scoreH1 = document.createElement('h1');
        scoreH1.style.position="absolute";
        scoreH1.style.left="90px";
        scoreH1.style.top="-10px";
        scoreH1.style.color="#ffffff";
        scoreH1.innerHTML=score;
        game.appendChild(scoreH1);

        timeProgress = document.createElement('img');
        timeProgress.style.position="absolute";
        timeProgress.style.width=timeProgressWidth+"px";
        timeProgress.style.height=25+"px";
        timeProgress.style.left="94px";
        timeProgress.style.top="100px";
        timeProgress.src="../img/progress.png";
        game.appendChild(timeProgress);
    }
    
    this.changeScore=function (type) {
        if(type==0){
            score = score+10;
        }else{
            score = score+5;
        }
        scoreH1.innerHTML=score;
    }
    
    this.getPage=function () {
        return game;
    }

    var time=0;
    this.run=function () {

        switch (state){
            case GAME_START:
                break;
            case GAME_RUN:
                wolf.run();
                if(time%5==0){
                    timeProgressWidth=timeProgressWidth-50;
                    timeProgress.style.width=timeProgressWidth+"px";
                    if(timeProgressWidth<=2){
                        state =  GAME_OVER;
                        timeProgress.style.display='none';
                    }
                }

                time++;
                break;
            case GAME_OVER:


                break;
        }


    }
}