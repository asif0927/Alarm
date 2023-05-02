let usersendate=document.querySelector("#userdate");
let setalarmbtn=document.querySelector("#setalarmbtn");
let remainingtime=document.querySelector(".remaining-time");
let maindiv=document.querySelector(".main-div");
var x=document.getElementById("myAudio"); 
let body=document.querySelector("body");
let audio = new Audio("./mp3kutu-madrigal-seni-dert-etmeler.mp3");
console.log(usersendate);
console.log(remainingtime);
setalarmbtn.addEventListener("click",()=>{
    let userdt=new Date(usersendate.value);
    let currenttime=new Date();
    if(userdt.getTime()<=currenttime.getTime()){
      Swal.fire({
        position:'center',
        icon: 'error',
        title: 'Oops...',
        text: 'You Cannot set Alarm from the past!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else if(usersendate.value==""){
        let p=document.createElement("p");
        p.textContent="Input is empty";
        p.style.color="white";
        p.style.fontSize="29px";
        maindiv.appendChild(p);
        p.style.marginLeft="40%";
    }
    else {
      let countdown=setInterval(()=>{
            if(userdt.getTime()-currenttime.getTime()<=0){
              clearInterval(countdown);
              audio.play();
              remainingtime.textContent="00:00:00";
              body.style.backgroundColor="blue";
              return;
            }
            let returnmillisec=Math.floor((userdt.getTime()-currenttime.getTime())/1000);//qalan millisaniye
            let hours=Math.floor(returnmillisec/3600);//1deq=60san 1saat=60deq
            let minute=Math.floor((returnmillisec/3600)/60);
            let second=Math.floor((returnmillisec/3600)/3600);
            remainingtime.textContent=`${hours<10?'0'+hours:hours}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`;
            currenttime=new Date();
      },1000);
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Alarm set successfully',
          showConfirmButton: false,
          timer: 1500
      });
  }
});
console.log(x);