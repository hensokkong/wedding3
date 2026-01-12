   import {guestlistimg} from "/guest_list/guest.js";
    
    const params = new URLSearchParams(window.location.search);
    const guestCode = params.get('guest');
    
  
    /*const guestList = {
      "001": "Hen Sovorleak",
      "002": "Heng Sokunthea",
      "003": "Hen Sokkong",
      "004": "Sareth SreyMuch",
      "005": "Nem Maneth"
    };
    const guestName = guestList[guestCode] || "Valued Guest";
    document.getElementById("guestName").textContent = guestName;*/

    
    const guestpic = guestlistimg[guestCode] || "img/Untitled-1.jpg";
    document.getElementById("guestIMG").src = guestpic;