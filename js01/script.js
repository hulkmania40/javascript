const secondHand=document.querySelector(`.sec-hand`);
      const minHand=document.querySelector(`.min-hand`);
      const hourHand=document.querySelector(`.hour-hand`);

      function setDate(){

        const now=new Date();
        const sec=now.getSeconds();
        const sectodeg=((sec/60)*360)+90;
        secondHand.style.transform=`rotate(${sectodeg}deg)`;
      
        const min=now.getMinutes();
        const mintodeg=((min/60)*360)+90;
        minHand.style.transform=`rotate(${mintodeg}deg)`;
      
        const hour=now.getHours();
        const hourtodeg=((hour/12)*360)+90;
        hourHand.style.transform=`rotate(${hourtodeg}deg)`;
      }
      setInterval(setDate,1000);
