function GamePage() {

    var gamePage;
    var btnBack;
    var wolf;

    var wolfImages=[];
    this.init=function (gameWidth,gameHeight) {

        //创建游戏开始页面
        gamePage = document.createElement('div');
        //2,设置相关的参数
        gamePage.style.width=gameWidth+"px";
        gamePage.style.height=gameHeight+"px";
        gamePage.style.position="absolute";


        //2,创建游戏的地图
        var map = new Map(gameWidth,gameHeight);
        map.init();
        gamePage.appendChild(map.getMap());

        //3,创建狼的对象
        wolf =  new Wolf();
        wolf.init();
        gamePage.appendChild(wolf.getWolf());

        //创建返回按钮
        btnBack = document.createElement('button');
        btnBack.innerHTML="返回";
        btnBack.style.width=gameWidth/6+"px";
        btnBack.style.position="absolute";
        btnBack.onclick=function (ev) {
            callBack(0);
        }
        gamePage.appendChild(btnBack);

    }
    var callBack;
    this.addPageListener=function (call) {
        callBack=call;
    }

    this.getPage=function () {
        
        return gamePage;
    }
    
    this.run=function () {
      wolf.run();
    }
}