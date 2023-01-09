'use strict';
{ 
  // loading処理
const preImages=[
"img/back00.png",
"img/back01.png",
"img/back02.png",
"img/back02a.png",
"img/back03.png",
"img/back04.png",
"img/back05.png",
"img/blackOut.png",
"img/charm.png",
"img/face00.png",
"img/face01.png",
"img/face02.png",
"img/face03.png",
"img/face04.png",
"img/face05.png",
"img/face06.png",
"img/faceY00.png",
"img/kemoshota00.png",
"img/poison.png",
"img/poison00.png",
"img/poison00a.png",
"img/poison01.png",
"img/poison01a.png",
"img/poison02.png",
"img/poison03.png",
"img/poison04.png",
"img/reset.png",
"img/sleep.png",
"img/status00.png",
"img/stone.png",
"img/atariHantei.png"
]
  
  const prepare=document.getElementById("prepare");
  const preImage =document.getElementById("preImage");
  const load =document.getElementById("load");
  let imageIndex=0;
  preImage.src=preImages[imageIndex];
  
  preImage.addEventListener('load',()=>{if(imageIndex< preImages.length-1){imageIndex++;
    preImage.src = preImages[imageIndex];
    load.textContent=`画像を読み込み中(${imageIndex+1}/${preImages.length})`; 
    if(imageIndex===preImages.length-1){
      load.textContent="click to start"
      load.classList.add("active");
      prepare.style.pointerEvents="auto"
      prepare.addEventListener("click",()=>{
        load.style.display="none"
        prepare.style.opacity="0";
        prepare.style.userSelect="none";
        prepare.style.pointerEvents="none"
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        const textbox1=[
        ["パップの人形劇場へbようこそ！","あり"],
        ["本日の演目はb「駆け出し勇者のデバフ祭り！」b楽しんでいってね！","あり"],
        ["(ドラッグ＆ドロップでb魔法を唱えることができるよ！)","あり"],
        ["（キミも僕のショーをb楽しんでいってね！)","あり"],
        [" ","なし"]
      ];
        
        clickToNext.style.pointerEvents="none"
        textOrder(textbox1[i][0],textbox1[i][1])
        i++
        if(i===3){face.src="img/face09.png"}
        if(i===5){
        
        clickToNext.style.display="none"
        setTimeout(()=>{face.src="img/face00.png";
        text.textContent=" ";
        clickToNext.removeEventListener('click',ClickEvent) },500)  
        }
          
        }
        setTimeout(() => {textOrder("やぁ！b君が噂の勇者クン？","あり")
        clickToNext.addEventListener('click',ClickEvent);
        }, 1000)
        
      })
      
    }   
  }


})



//オーディオを定義
  const voice1 = document.getElementById("voice1");
  voice1.volume =0.01
  const voice2 = document.getElementById("voice2");
  voice2.volume =0.01
  const poisonSound = document.getElementById("poisonSound");
  poisonSound.volume =0.01
  const sleepSound = document.getElementById("sleepSound");
  sleepSound.volume =0.01
  const petrifySound = document.getElementById("petrifySound");
  petrifySound.volume =0.01
  const charmSound = document.getElementById("charmSound");
  charmSound.volume =0.01
  const resetSound = document.getElementById("resetSound");
  resetSound.volume =0.01

  //テキストの処理
  const guard=document.getElementById("guard");
  const clickToNext=document.getElementById("clickToNext");
   const text=document.getElementById("text");
   const nextMouse=document.getElementById("nextMouse") ;
  

   function textOrder(rawText,nextText){
      text.innerHTML="";
      let str =`${rawText}`;
      const arr =[...str];
      let i=0;
      // ガードが出現
      guard.style.display="block";
      // 続きの文章が無い場合、arr.length秒後、ガードが解除
      // 続きの文章がある場合、クリックイベントを追加
      setTimeout(() => {if(nextText==="あり"){
      clickToNext.style.display="block"
      clickToNext.style.pointerEvents="auto"
      nextMouse.style.opacity="1";
      }else{
        guard.style.display="none";
      }
     }, arr.length*50);
    let showText =()=>{
    if(arr[i]!=="b"){text.innerHTML +=`${arr[i]}`};
    if(arr[i]==="b"){text.innerHTML+="<br>"}
    if(i>=arr.length-1){clearInterval(id)}
    i++;
    if(rawText!==" " && rawText!=="…。"){
    voice1.currentTime=0;
    voice1.play()
    }
    
    }
    let id =setInterval(showText,50);
    }


 // フラッシュの定義
    const flash=document.getElementById("flash");
    function useFlash(){
      flash.classList.add("active")
      
      setTimeout(()=>{flash.classList.remove("active")},1500)  
     }

     const black=document.getElementById("black");
    function useblack(){
      black.classList.add("active")
      
      setTimeout(()=>{black.classList.remove("active")},5000)  
     }

  // ステータス欄の定義
  const statusBox=document.getElementById("status");
  let poisonNum =0 
  let poisonStatusNum= document.getElementById("poisonNum");
  let sleepNum =0 
  let sleepStatusNum= document.getElementById("sleepNum");
  let petrifyNum =0 
  let petrifyStatusNum= document.getElementById("petrifyNum");
  let charmNum =0 
  let charmStatusNum= document.getElementById("charmNum");

  // 顔グラの定義
  const face=document.getElementById("face");
  


 //毒の処理
   {
    const images = [
    'img/kemoshota00.png',
    'img/poison00.png',
    'img/poison00a.png',
    'img/poison01.png',
    'img/poison01a.png',
    'img/poison02.png',
    'img/poison03.png',
    'img/poison04.png',
  ];
  
  
  const poison_back = document.getElementById("poison_back")
  const poison= document.getElementById("poison")
   // デフォルトのドラッグ機能をオフ
   poison_back.ondragstart = e=>{
    return false;
    }

  // マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
  poison_back.onmousedown = e=>{
   if(poisonNum>=4){poison.style.display="none"};
   document.addEventListener("mousemove",onMouseMove);
    }
  
   // clientX,clientYで画面左端、上端からのマウスの位置を取得。
  // offsetWidth,offsetHeightで要素のサイズを取得できる。
  //下の処理で、マウスに画像が追随する。
  const onMouseMove = e=>{
    poison.style.display=null;
    let x = e.clientX;
    let y = e.clientY;
    let width = poison_back.offsetWidth;
    let height = poison_back.offsetHeight;
    poison.style.top = (y-height/2) + "px";
    poison.style.left = (x-width/2) + "px";
    poison.style.opacity = "1"
    if(poisonNum<4){
      poison_back.style.opacity="0.5"
    }   
    }

 

   // 下は、マウスを放したときの処理
   
   poison.onmouseup = e=>{
      document.removeEventListener("mousemove",onMouseMove);
      poison.style.opacity ="0";
      poison_back.style.opacity="1";


      let x = e.clientX;
      let y = e.clientY;
      const kemoshota =document.getElementById("kemoshota")
      const atari =document.getElementById("atariHantei");
      const atariRect =atari.getBoundingClientRect();
     
      if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
      
       poisonSound.currentTime= 0;
       poisonSound.play()     
       useFlash();
       poisonNum++
       kemoshota.src = images[poisonNum];
       poisonStatusNum.textContent=`${poisonNum}`;
      
      if(poisonNum===1){textOrder("ふふふ…b毒の魔法はいかがかな？")}
      if(poisonNum===2){textOrder("苦しそうだね。b降参しちゃってもいいんだよ？")}
      if(poisonNum===3){face.src="img/face07.png";
        textOrder("さっさと降参しちゃいなよ。bこのままだとb本当に死んじゃうよ？")}
      if(poisonNum===4){textOrder("…。")}
      if(poisonNum===5){
        poison_back.style.pointerEvents="none"
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0"
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          face.src="img/face00.png";
          kemoshota.src = images[poisonNum+1]
          textOrder("ふふ…bそんなに焦らなくても大丈夫だよ。","あり")
          }
        if(i===2){
          textOrder("僕が君にbぴったりの肉体をb用意してあげる！","あり")
          }
        if(i===3){
          text.textContent=" ";
          text.style.left="100px"
          face.style.opacity="0"
          useblack();
          statusBox.style.opacity="0"
          poisonStatusNum.style.opacity="0"
          sleepStatusNum.style.opacity="0"
          petrifyStatusNum.style.opacity="0"
          charmStatusNum.style.opacity="0"
          clickToNext.style.display="none"
          setTimeout(()=>{textOrder("Ending1b～転生したら淫魔だった件～","なし")},5000)  
          setTimeout(()=>{kemoshota.src = images[poisonNum+2]
          clickToNext.removeEventListener('click',ClickEvent)
          
        },2000)  
         } 
        }
        setTimeout(() => {
          textOrder("あ～あb本当に死んじゃった…。","あり")
          face.src="img/face08.png";
          clickToNext.addEventListener('click',ClickEvent);
          }, 1000)
      }
      if(poisonNum>=5){
              poison.style.display="none"
        poison_back.style.opacity="0.2"
      }
        poison.style.top="97px"
        poison.style.left="985px"
        poison.style.display="none"
    }else{
      poison.style.display="none";
    }
    }
  }
        

}