function Wolf() {

    this.width =108;
    this.height =101;
    var wolf;
    var wolfImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png'];
    var index=0;
    var length=wolfImages.length;
    this.init=function () {
        //1,创建灰太狼图片
        wolf = document.createElement("img");
        wolf.src=wolfImages[index];
        wolf.style.width= this.width+'px';
        wolf.style.height= this.height+'px';
        wolf.style.position="absolute";

    }

    this.getWolf=function () {
        return wolf;
    }
    
    this.run=function () {
        index++;
        if(index>=length)
            index =0;
        wolf.src=wolfImages[index];
    }
}