function Wolf() {

    this.width =108;
    this.height =101;
    var wolf;
    var wolfImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png'];
    var index=0;
    var length=wolfImages.length;

    //灰太狼的位置坐标
    var arrPos = [
        {left:"170px",top:"220px"},
        {left:"50px",top:"290px"},
        {left:"45px",top:"380px"},
        {left:"70px",top:"490px"},
        {left:"200px",top:"460px"},
        {left:"330px",top:"490px"},
        {left:"320px",top:"366px"},
        {left:"305px",top:"260px"},
        {left:"200px",top:"460px"}
    ];

    this.init=function () {
        //1,创建灰太狼图片
        wolf = document.createElement("img");
        wolf.src=wolfImages[index];
        wolf.style.width= this.width+'px';
        wolf.style.height= this.height+'px';
        wolf.style.position="absolute";
        //设置灰太狼的位置坐标
        var random =Math.floor(Math.random()*9);
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;

    }

    this.getWolf=function () {
        return wolf;
    }
    
    this.run=function () {
        index++;
        if(index>=length){
            index =0;
            //更改灰太狼的位置坐标
            var random =Math.floor(Math.random()*9);
            //设置灰太狼的位置坐标
            wolf.style.left=arrPos[random].left;
            wolf.style.top=arrPos[random].top;
        }

        wolf.src=wolfImages[index];
    }
}