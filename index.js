var rowCount = 0;
function addRow(name, nin, cardnumber,  cardissuingdate, cardexpiredate, cardissuingplace, phonenumber, birthdate, birthplace, birthcertificatenumber, residence, renewingstartdate, renewingenddate, status, uid, _fromTop, _newelyAdded) {
  datatablebody.innerHTML = (_fromTop ? '' : datatablebody.innerHTML) + ' <tbody>\n     <tr>\n       '
  +
  '<th id ="tablenameitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablenameitemat_' + rowCount + '\')">' + name + '</th>'
  +
  '<th id ="tableninitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableninitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableninitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableninitemat_' + rowCount + '\')">' + nin + '</th>'
  +
  '<th id ="tablecardnumberitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardnumberitemat_' + rowCount + '\')">' + cardnumber + '</th>'
  +
  '<th id ="tablecardissuingdateitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')">' + cardissuingdate + '</th>'
  +
  '<th id ="tablecardexpiredateitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')">' + cardexpiredate + '</th>'
  +
  '<th id ="tablecardissuingplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')">' + cardissuingplace + '</th>'
  +
  '<th id ="tablephonenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablephonenumberitemat_' + rowCount + '\')">0' + phonenumber + '</th>'
  +
  '<th id ="tablebirthdateitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthdateitemat_' + rowCount + '\')">' + birthdate + '</th>'
  +
  '<th id ="tablebirthplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthplaceitemat_' + rowCount + '\')">' + birthplace + '</th>'
  +
  '<th id ="tablebirthcertificatenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')">' + birthcertificatenumber + '</th>'
  +
  '<th id ="tableresidenceitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableresidenceitemat_' + rowCount + '\')">' + residence + '</th>'
  +
  '<th id ="tablerenewingstartdateitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')">' + renewingstartdate + '</th>'
  +
  '<th id ="tablerenewingenddateitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')">' + renewingenddate + '</th>'
  +
  '<th id ="tablestatusitemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablestatusitemat_' + rowCount + '\')">' + status + '</th>'
  +
  '<th id ="tableuiditemat_' + rowCount + '" class="tabledataitem ' + (_newelyAdded ? 'newelyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableuiditemat_' + rowCount + '\')">' + uid + '</th>'
  +
  '\n     </tr>\n    </tbody>'
  +
  (_fromTop ? datatablebody.innerHTML : '');
  
  rowCount++;
}

var lastScrollY = 0;
var fabFadedOut = false;
var upButtonDisabled = true;
var downButtonDisabled = false;
window.onscroll = function() {
  let scrollFactor = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  
  let shadowsize = window.scrollY <= 50 ? window.scrollY / 4 : 12.5;
  
  datatablehead.style.boxShadow = '0px ' + shadowsize + 'px ' + shadowsize*2 + 'px rgba(0, 0, 0, 0.4)';
  
  let translationsize = window.scrollY <= 50 ? (-50 + toplayerofdatatablehead.offsetHeight * (window.scrollY / 50)) : (-50 + toplayerofdatatablehead.offsetHeight);
  
  toplayerofdatatablehead.style.transform = 'translateY(' + translationsize + 'px)';
  
  
  
  
  if (scrollFactor >= (window.innerWidth <= window.innerHeight ? 0.1 : 0.03) && upButtonDisabled) {
    upbutton.style.animationName = "enablingActionButtonAnimation";
    upbutton.style.animationDuration = "0.25s";
    upbutton.style.animationFillMode = "forwards";
    
    upbutton.style.pointerEvents = "auto";
    
    
    upButtonDisabled = false;
  } else if (scrollFactor < (window.innerWidth <= window.innerHeight ? 0.1 : 0.03) && !upButtonDisabled) {
    upbutton.style.animationName = "disablingActionButtonAnimation";
    upbutton.style.animationDuration = "0.25s";
    upbutton.style.animationFillMode = "forwards";
    
    upbutton.style.pointerEvents = "none";
    
    
    upButtonDisabled = true;
  }
  
  
  if (scrollFactor <= (window.innerWidth <= window.innerHeight ? 0.9 : 0.97) && downButtonDisabled) {
    downbutton.style.animationName = "enablingActionButtonAnimation";
    downbutton.style.animationDuration = "0.25s";
    downbutton.style.animationFillMode = "forwards";
    
    downbutton.style.pointerEvents = "auto";
  
  
    downButtonDisabled = false;
  } else if (scrollFactor > (window.innerWidth <= window.innerHeight ? 0.9 : 0.97) && !downButtonDisabled) {
    downbutton.style.animationName = "disablingActionButtonAnimation";
    downbutton.style.animationDuration = "0.25s";
    downbutton.style.animationFillMode = "forwards";
    
    downbutton.style.pointerEvents = "none";
  
    downButtonDisabled = true;
  }
  
  
  let scrollDelta = 7;
  
  if (window.scrollY - lastScrollY >= scrollDelta) {
    if (!fabFadedOut) {
        realfab.style.animationName = "fadeOutAnimation";
        realfab.style.animationDuration = "0.25s";
        realfab.style.animationFillMode = "forwards";
    }
    lastScrollY = window.scrollY;
    
    fabFadedOut = true;
  } else if (window.scrollY - lastScrollY <= -scrollDelta) {
    if (fabFadedOut) {
        realfab.style.animationName = "fadeInAnimation";
        realfab.style.animationDuration = "0.25s";
        realfab.style.animationFillMode = "forwards";
    }
    lastScrollY = window.scrollY;
    
    fabFadedOut = false;
  } else {
    // Do nothing...
  }
}




upbutton.onclick = function() {
  window.scrollTo(window.scrollX, 0);
}



downbutton.onclick = function() {
  window.scrollTo(window.scrollX, document.documentElement.scrollHeight);
}




var searchenabled = false;
toolbarsearchbutton.onclick = function() {
  searchenabled = !searchenabled;
  
  toolbarsearchicon.style.animationName = "fadeOutAnimation";
  toolbarsearchicon.style.animationDuration = "0.2s";
  toolbarsearchicon.style.animationFillMode = "forwards";
  
  setTimeout(function() {
    toolbarsearchicon.innerHTML = searchenabled ? "clear" : "search";
    
    toolbarsearchicon.style.animationName = "fadeInAnimation";
    toolbarsearchicon.style.animationDuration = "0.2s";
    toolbarsearchicon.style.animationFillMode = "forwards";
    
    toolbarsearchfield.style.pointerEvents = searchenabled ? 'auto' : 'none';
    toolbarsearchfield.style.animationName = searchenabled ? "fadeInAnimation" : "fadeOutAnimation";
    toolbarsearchfield.style.animationDuration = "0.2s";
    toolbarsearchfield.style.animationFillMode = "forwards";
    
    if (searchenabled) {
      let lastsearchfactor = searchfactor == "" ? defaultsearchfactor : searchfactor;
      searchfactor = "";
      whenTitleItemClicked(lastsearchfactor);
      
      window.scrollTo(document.getElementById(lastsearchfactor).offsetLeft, window.scrollY);
    } else {
      document.getElementById(searchfactor).style = undefined;
      
      window.scrollTo(datatable.offsetWidth, window.scrollY);
    }
  }, 200);
  
}


var lasttoolbarsearchinputvalue = "";
function whenSearchTextChange() {
  if (toolbarsearchinput.innerHTML != lasttoolbarsearchinputvalue) {
      lasttoolbarsearchinputvalue = toolbarsearchinput.innerHTML;
      if (toolbarsearchinput.innerHTML == "") {
          toolbarsearchhint.style.animationName = "fadeInAnimation";
          toolbarsearchhint.style.animationDuration = "0.25s";
          toolbarsearchhint.style.animationFillMode = "forwards";
      } else {
          toolbarsearchhint.style.animationName = "fadeOutAnimation";
          toolbarsearchhint.style.animationDuration = "0.25s";
          toolbarsearchhint.style.animationFillMode = "forwards";
      }
  }
}


toolbarsearchinput.onkeydown = whenSearchTextChange;
toolbarsearchinput.onchange = whenSearchTextChange;
toolbarsearchinput.oninput = whenSearchTextChange;
toolbarsearchinput.oncut = whenSearchTextChange;
toolbarsearchinput.onpaste = whenSearchTextChange;


window.onload = function() {
  window.scrollTo(datatable.offsetWidth, 0);
}



// Data items listeners...
function whenDataItemClicked(itemid) {
  let dataitem = document.getElementById(itemid);
  
  
}

function whenDataItemHovered(itemid) {
  let dataitem = document.getElementById(itemid);
  
  
}

function whenDataItemDismissed(itemid) {
  let dataitem = document.getElementById(itemid);
  
  
}





// Title items listeners...
var searchfactor = "";
const defaultsearchfactor = "tabletitleuiditem";

function whenTitleItemClicked(titleitemid) {
  
  if (!searchenabled || titleitemid === searchfactor) return;
  
  let titleitem = document.getElementById(titleitemid);
  let lasttitleitem = document.getElementById(searchfactor);
  
  let lastsearchfactor = searchfactor;
  searchfactor = titleitemid;
  
  titleitem.style.color = 'white';
  titleitem.style.background = '#2196f3';
  
  if (lasttitleitem != null) {
      lasttitleitem.style = undefined;
  }
  
  toolbarsearchhint.innerHTML = 'إبحث عن أي زبون بإستخدام ' + titleitem.innerHTML;
  
  window.scrollTo(document.getElementById(titleitemid).offsetLeft, 0);
}

function whenTitleItemHovered(titleitemid) {
  let titleitem = document.getElementById(titleitemid);
  
  
}

function whenTitleItemDismissed(titleitemid) {
  let titleitem = document.getElementById(titleitemid);
  
  
}


realfab.onclick = function() {
  let trans = farhi_rsdb.transaction("batala", "readwrite");
  
  let batala = trans.objectStore("batala");
  
  let itemdata = {
    name: "حمزة بونقاب",
    nin: "1000000000",
    cardnumber: "6000",
    cardissuingdate: "15/01/2023",
    cardexpiredate: "15/01/2024",
    cardissuingplace: "العطاف",
    phonenumber: "792342393",
    birthdate: "15/06/2003",
    birthplace: "العطاف",
    birthcertificatenumber: "00926",
    residence: "العطاف",
    renewingstartdate: "15/11/2023",
    renewingenddate: "15/05/2024",
    state: "unregistered"
  };
  
  let addRequest = batala.add(itemdata);
    
  addRequest.onsuccess = function(event) {
    addRow(itemdata.name, itemdata.nin, itemdata.cardnumber, itemdata.cardissuingdate, itemdata.cardexpiredate, itemdata.cardissuingplace, itemdata.phonenumber, itemdata.birthdate, itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, itemdata.renewingstartdate, itemdata.renewingenddate, itemdata.state, rowCount+1);
  };
}




prepareDB();


var pageData = [];

var farhi_rsdb;


function prepareDB() {

  var farhi_rsdb_request = indexedDB.open("farhi_rsdb", 1);

  farhi_rsdb_request.onupgradeneeded = function(event) {
    let farhi_rsdb = event.target.result;

    if (!farhi_rsdb.objectStoreNames.contains("batala")) farhi_rsdb.createObjectStore("batala", { keyPath: 'id', autoIncrement: true });
  };

  farhi_rsdb_request.onsuccess = function(event) {
    farhi_rsdb = event.target.result;

    let trans = farhi_rsdb.transaction("batala", "readwrite");

    let batala = trans.objectStore("batala");

    batala.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;

      if (cursor) {
        let itemdata = cursor.value;

        pageData.push(itemdata);
        addRow(itemdata.name, itemdata.nin, itemdata.cardnumber, itemdata.cardissuingdate, itemdata.cardexpiredate, itemdata.cardissuingplace, itemdata.phonenumber, itemdata.birthdate, itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, itemdata.renewingstartdate, itemdata.renewingenddate, itemdata.state, itemdata.id, true);
        cursor.continue();
      } else {

      }
    };

    operateOnDb();
  };

}



function operateOnDb() {

}


realfab.onclick = function() {
  let trans = farhi_rsdb.transaction("batala", "readwrite");
  
  let batala = trans.objectStore("batala");
  
  let itemdata = {
    name: "حمزة بونقاب",
    nin: "1000000000",
    cardnumber: "6000",
    cardissuingdate: "15/01/2023",
    cardexpiredate: "15/01/2024",
    cardissuingplace: "العطاف",
    phonenumber: "792342393",
    birthdate: "15/06/2003",
    birthplace: "العطاف",
    birthcertificatenumber: "00926",
    residence: "العطاف",
    renewingstartdate: "15/11/2023",
    renewingenddate: "15/05/2024",
    state: "unregistered"
  };
  
  let addRequest = batala.add(itemdata);
    
  addRequest.onsuccess = function(event) {
    addRow(itemdata.name, itemdata.nin, itemdata.cardnumber, itemdata.cardissuingdate, itemdata.cardexpiredate, itemdata.cardissuingplace, itemdata.phonenumber, itemdata.birthdate, itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, itemdata.renewingstartdate, itemdata.renewingenddate, itemdata.state, rowCount+1);
  };
}
