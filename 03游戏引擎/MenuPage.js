function MenuPage(gameWidth,gameHeight) {
    this.gameWidth=gameWidth;
    this.gameHeight=gameHeight;
    var menuPage;
    var btnStart;
    this.init=function () {
        //1,创建菜单页面
        menuPage = document.createElement('div');
        //2,设置相关的参数
        menuPage.style.width=this.gameWidth+"px";
        menuPage.style.height=this.gameHeight+"px";
        menuPage.style.position="absolute";
        menuPage.style.background="#3f3f3f";
        menuPage.innerHTML="游戏菜单";
        menuPage.style.color="#ffffff";

        //创建开始按钮
        btnStart = document.createElement('button');
        btnStart.innerHTML="开始游戏";
        btnStart.style.width=gameWidth/3+"px";
        btnStart.style.position="absolute";
        btnStart.style.left=(gameWidth-gameWidth/3)/2+"px";
        btnStart.onclick=this.turnToGamePage;
        menuPage.appendChild(btnStart);
    }

    this.getPage=function () {
        return menuPage;
    }
    
    this.turnToGamePage=function () {
       // console.log("跳转到游戏页面")
        callBack(2);
    }

    var callBack;
    this.addPageListener=function (call) {
        callBack=call;
    }
}