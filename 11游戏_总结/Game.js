function Game() {

    var gameWidth = 480;
    var gameHeight = 730;

    //游戏的画布
    var canvas;
    //主要游戏逻辑页面
    var gamePage;

    //数据初始化
    this.init=function () {
        //1，获得游戏画布
        canvas = document.body;
        //2,创建游戏页面
        gamePage = new GamePage(gameWidth,gameHeight);
        //3,数据初始化
        gamePage.init();
        //4,把游戏的页面添加到画布上面
        canvas.appendChild(gamePage.getPage())

    }
    

    //每隔300毫秒调用一次
    this.run=function () {
        gamePage.run();
    }
}