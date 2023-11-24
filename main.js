function addRow(name, nin, phonenumber, birthdate, birthplace, residence, renewingstartdate, renewingenddate, status, uid) {
  datatablebody.innerHTML += ' <tbody>\n     <tr>\n       '
  +
  '<th class="tabledataitem">' + name + '</th>'
  +
  '<th class="tabledataitem">' + nin + '</th>'
  +
  '<th class="tabledataitem">0' + phonenumber + '</th>'
  +
  '<th class="tabledataitem">' + birthdate + '</th>'
  +
  '<th class="tabledataitem">' + birthplace + '</th>'
  +
  '<th class="tabledataitem">' + residence + '</th>'
  +
  '<th class="tabledataitem">' + renewingstartdate + '</th>'
  +
  '<th class="tabledataitem">' + renewingenddate + '</th>'
  +
  '<th class="tabledataitem">' + status + '</th>'
  +
  '<th class="tabledataitem">' + uid + '</th>'
  +
  '\n     </tr>\n    </tbody>';
}

var lastScrolY = 0;
var fabFadedOut = false;
var fabFadedIn = true;
window.onscroll = function() {
  let shadowsize = window.scrollY <= 50 ? window.scrollY / 4 : 12.5;
  
  datatablehead.style.boxShadow = '0px ' + shadowsize + 'px ' + shadowsize*2 + 'px rgba(0, 0, 0, 0.4)';
  
  let scrollDelta = 7;
  
  if (window.scrollY - lastScrolY >= scrollDelta && !fabFadedOut) {
    realfab.style.animationName = "fadeOutAnimation";
    realfab.style.animationDuration = "0.25s";
    realfab.style.animationFillMode = "forwards";
    lastScrolY = window.scrollY;
    
    fabFadedOut = true;
    fabFadedIn = false;
  } else if (window.scrollY - lastScrolY <= -scrollDelta && !fabFadedIn) {
    realfab.style.animationName = "fadeInAnimation";
    realfab.style.animationDuration = "0.25s";
    realfab.style.animationFillMode = "forwards";
    lastScrolY = window.scrollY;
    
    fabFadedIn = true;
    fabFadedOut = false;
  } else {
    // Do nothing...
  }
}

window.onload = function() {
  window.scrollTo(datatable.offsetWidth, 0);
}


for (var i = 0; i < 20; i++) {
  addRow("Hamza Bounegab the best developer ever yeah yeah yeah yeah", 1234567890582068, 792342393, "15/06/2003", "El Attaf - Ain defla", "El Attaf - Ain defla", "11/24/2023", "11/05/2024", "registered lastly", 1234567890);
}