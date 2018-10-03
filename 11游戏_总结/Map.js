function Map(gameWidth,gameHeight) {

    this.gameWidth=gameWidth;
    this.gameHeight=gameHeight;

    var map;
    this.init=function () {

        //1,创建地图对象
        map = document.createElement('img');
        map.style.width=this.gameWidth+"px";
        map.style.height=this.gameHeight+"px";
        map.style.position="absolute";
        map.src="../img/game_bg.jpg";
    }
    
    this.getMap=function () {
        return map;
    }

    this.run=function () {

    }
}