function Game() {
    //菜单页面
    var MENU_PAGE=0;
    //游戏页面
    var GAME_PAGE=MENU_PAGE+1;

    var state = GAME_PAGE;


    var gameWidth = 480;
    var gameHeight = 750;
    var game;
    var menuPage;

    var that;

    var id;
    this.init=function () {
        game = document.createElement('div');
        game.style.width=gameWidth+"px";
        game.style.height=gameHeight+"px";
        game.style.position="relative";
        game.style.margin="auto";
        document.body.appendChild(game);
        that = this;
        this.turnToPage(GAME_PAGE);

    }
    

   
   this.run=function() {
       switch(state){
           case MENU_PAGE:
               menuPage.run();
               break;
           case GAME_PAGE:
               gamePage.run();
               break;
       }
   }

    var gamePage;
    this.turnToPage=function (id) {
        state = id;
        switch(state){
            case GAME_PAGE:
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
            case MENU_PAGE:
                if(gamePage!=null)
                game.removeChild(gamePage.getPage());

                if(menuPage==null){
                    //1, 创建游戏菜单页面
                    menuPage =  new MenuPage(gameWidth,gameHeight);
                    //菜单页面初始化,创建菜单页面里面显示的内容
                    menuPage.init();
                    //设置页面监听事件
                    menuPage.addPageListener(that.turnToPage);
                }
                game.appendChild(menuPage.getPage());
                break;
        }

    }
}