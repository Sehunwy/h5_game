function GamePage() {
    var gamePage;
    var btnBack;
    this.init=function () {

        //创建游戏开始页面
        gamePage = document.createElement('div');
        //2,设置相关的参数
        gamePage.style.width=gameWidth+"px";
        gamePage.style.height=gameHeight+"px";
        gamePage.style.position="absolute";
        gamePage.style.background="#3f3f3f";
        gamePage.innerHTML="游戏开始";
        gamePage.style.color="#ffffff";
        gamePage.style.textAlign="center";

        //创建返回按钮
        btnBack = document.createElement('button');
        btnBack.innerHTML="返回";
        btnBack.style.width=gameWidth/6+"px";
        btnBack.style.position="absolute";
        btnBack.onclick=function (ev) {
            game.removeChild(gamePage)

            game.appendChild(menuPage);
        }
        gamePage.appendChild(btnBack);


    }
}