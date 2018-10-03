function Map(gameWidth,gameHeight) {
    this.gameWidth=gameWidth;
    this.gameHeight=gameHeight;
    var map;
    this.init=function () {
        map = document.createElement('img');
        map.src="../img/game_bg.jpg";
        map.style.position="absolute";
        map.style.width=this.gameWidth+"px";
        map.style.height=this.gameHeight+"px";
    }
    
    this.getMap=function () {
        return map;
    }
}