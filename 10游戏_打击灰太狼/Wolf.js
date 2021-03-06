function Wolf() {
    //狼的宽度
    this.width =108;
    //狼的高度
    this.height =101;
    //狼的图片标签元素
    var wolf;
    //大灰太狼图片
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小灰太狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];
    //图片的下标
    var index=0;
    //被打的最后一帧
    var hitLastIndex=wolfXImages.length;
    var normalLastIndex=6;
    //图片的缓存
    var wolfBuffers;

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
    //正常状态
    var WOLF_NORMAL=0;
    //被打状态
    var WOLF_HIT=WOLF_NORMAL+1;
    //状态值
    var state=WOLF_NORMAL;

    this.init=function () {
        //1,创建灰太狼图片
        wolf = document.createElement("img");
        //随机灰太狼类型
        this.randomWolfType();
        //设置图片来源
        wolf.src=wolfBuffers[index];

        wolf.style.width= this.width+'px';
        wolf.style.height= this.height+'px';
        wolf.style.position="absolute";
        //设置灰太狼的位置坐标
        this.randomPosition();
        //设置点击事件
        wolf.onclick=this.clickWolf;

    }
    
    this.clickWolf=function () {
        //正常状态执行被打的动画
        if(state==WOLF_NORMAL){
            state = WOLF_HIT;
            index=normalLastIndex-1;//6
        }

    }
    
    this.randomWolfType=function () {
        var type = Math.floor(Math.random()*2);
        if(type<1){
            //小灰太狼
            wolfBuffers = wolfXImages;
        }else{
            //大灰太狼
            wolfBuffers = wolfHImages;
        }
    }
    
    this.randomPosition=function () {
        //随机的产生0到8的数字
        var random =Math.floor(Math.random()*9);
        //根据随机数设置狼的坐标
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;
    }

    this.getWolf=function () {
        return wolf;
    }
    
    this.run=function () {

        switch(state){
            case WOLF_NORMAL:
                index++;
                if(index>=normalLastIndex){
                    index =0;
                    this.randomPosition();
                    this.randomWolfType();
                }

                wolf.src=wolfBuffers[index];
                break;
            case WOLF_HIT:
                index++;
                if(index>=hitLastIndex){
                    index =0;
                    //被打完后，回归正常状态
                    state = WOLF_NORMAL;
                    this.randomPosition();
                    this.randomWolfType();
                }
                wolf.src=wolfBuffers[index];

                break;
        }

    }
}