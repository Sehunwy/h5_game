function Game() {
    var gameWidth = 480;
    var gameHeight = 750;
    var game;
    var menuPage;

    var that;
    this.init=function () {
        game = document.createElement('div');
        game.style.width=gameWidth+"px";
        game.style.height=gameHeight+"px";
        game.style.position="relative";
        game.style.margin="auto";
        document.body.appendChild(game);

        this.turnToPage(2);
        that = this;
    }

    var gamePage;
    this.turnToPage=function (state) {
        switch(state){
            case 1:
                if(menuPage!=null)
                game.removeChild(menuPage.getPage());
                //1，创建GamePage页面
                if(gamePage==null){
                    gamePage = new GamePage();
                    gamePage.init(gameWidth,gameHeight);
                    gamePage.addPageListener(that.turnToPage);
                }
                //2,把gamePage页面添加到当前game
                game.appendChild(gamePage.getPage());
                break;
            case 2:
                if(gamePage!=null)
                game.removeChild(gamePage.getPage());

                if(menuPage==null){
                    //1, 创建游戏菜单页面
                    menuPage =  new MenuPage(gameWidth,gameHeight);
                    //菜单页面初始化,创建菜单页面里面显示的内容
                    menuPage.init();
                    //设置页面监听事件
                    menuPage.addPageListener(this.turnToPage);
                }
                game.appendChild(menuPage.getPage());
                break;
        }

    }
}