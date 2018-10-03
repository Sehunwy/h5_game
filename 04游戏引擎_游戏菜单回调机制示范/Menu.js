function Menu() {
    var width=200;

    var btn1;
    var btn2;

    var onclick1;
    var onclick2;
    this.init=function (id) {
        var box = document.getElementById(id);

        //创建盒子
        var menu = document.createElement('div');
        //设置相关的参数
        menu.style.width=width+"px";
        menu.style.margin="auto";
        menu.style.background="antiquewhite";
        box.appendChild(menu);

        //创建按钮1
        btn1 = document.createElement('div');
        //设置相关的参数
        btn1.style.width=width;
        btn1.style.textAlign="center";
        btn1.style.background="darkolivegreen";
        btn1.style.color="white";
        btn1.style.marginTop=width/6+"px";
        btn1.innerHTML="按钮1";
        btn1.onclick=function (ev) {

            onclick1();
        }

        //创建按钮1
        btn2 = document.createElement('div');
        //设置相关的参数
        btn2.style.width=width;
        btn2.style.textAlign="center";
        btn2.style.marginTop=width/6+"px";
        btn2.style.background="darkolivegreen";
        btn2.style.color="white";
        btn2.innerHTML="按钮2";
        btn2.onclick=function (ev) {
            onclick2();
        }

        menu.appendChild(btn1);
        menu.appendChild(btn2);

    }
    
    this.setTitle=function (title1,title2) {
        btn1.innerHTML=title1;
        btn2.innerHTML=title2;
    }
    this.addBtn1Listener=function (call) {
        onclick1=call;
    }
    this.addBtn2Listener=function (call) {
        onclick2=call;
    }
}