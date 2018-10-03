function Wolf() {

    var wolf;
    //狼的宽度
    this.width =108;
    //狼的高度
    this.height =101;
    //大灰太狼图片
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小灰太狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];
    //图片的来源
    var buffer;
    var imgSize=wolfHImages.length;
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
    //播放图片的下标
    var index=0;

    var WOLF_NORMAL=0;
    var WOLF_HIT=WOLF_NORMAL+1;

    var state = WOLF_NORMAL;

    this.init=function () {
        //1,创建狼
        wolf = document.createElement('img');
        //2,设置相关的参数
        wolf.style.width= this.width+'px';
        wolf.style.height= this.height+'px';
        wolf.style.position="absolute";
        //设置位置关系
        this.radomPosition();
        //设置图片的来源
       this.randomType();
       //设置点击事件
        wolf.onclick=this.hitWolf;
        wolf.src=buffer[index];


    }
    
    this.hitWolf=function () {
        if(state==WOLF_NORMAL){
            state = WOLF_HIT;
            index = 5;
            hitCall(type);
        }

    }

    var hitCall;
    this.setHitListener=function (call) {
        hitCall=call;
    }
    var type;
    this.randomType=function () {
        type=Math.floor(Math.random()*2);
        if(type==0){
            buffer = wolfHImages;
        }else{
            buffer = wolfXImages;
        }
    }
    this.radomPosition=function () {
        var randomPosition=Math.floor(Math.random()*9);
        wolf.style.left=arrPos[randomPosition].left;
        wolf.style.top=arrPos[randomPosition].top;
    }
    
    this.getWolf=function () {
        return wolf;
    }
    
    this.run=function () {

        switch (state){
            case WOLF_NORMAL:
                index++;
                if(index>=6){
                    index=0;
                    this.radomPosition();
                    this.randomType();
                }
                wolf.src=buffer[index];
                break;
            case WOLF_HIT:
                index++;
                if(index>=imgSize){
                    index=0;
                    state = WOLF_NORMAL;
                    this.radomPosition();
                    this.randomType();
                }
                wolf.src=buffer[index];
                break;
        }


    }
}