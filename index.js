var rowCount = 0;
function addRow(name, nin, cardnumber,  cardissuingdate, cardexpiredate, cardissuingplace, phonenumber, birthdate, birthplace, birthcertificatenumber, residence, renewingstartdate, renewingenddate, status, uid, _fromTop, _newlyAdded) {
  datatablebody.innerHTML = (_fromTop ? '' : datatablebody.innerHTML) + ' <tbody>\n     <tr>\n       '
  +
  '<th id ="tablenameitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablenameitemat_' + rowCount + '\')">' + name + '</th>'
  +
  '<th id ="tableninitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableninitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableninitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableninitemat_' + rowCount + '\')">' + nin + '</th>'
  +
  '<th id ="tablecardnumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardnumberitemat_' + rowCount + '\')">' + cardnumber + '</th>'
  +
  '<th id ="tablecardissuingdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')">' + cardissuingdate + '</th>'
  +
  '<th id ="tablecardexpiredateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')">' + cardexpiredate + '</th>'
  +
  '<th id ="tablecardissuingplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')">' + cardissuingplace + '</th>'
  +
  '<th id ="tablephonenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablephonenumberitemat_' + rowCount + '\')">0' + phonenumber + '</th>'
  +
  '<th id ="tablebirthdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthdateitemat_' + rowCount + '\')">' + birthdate + '</th>'
  +
  '<th id ="tablebirthplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthplaceitemat_' + rowCount + '\')">' + birthplace + '</th>'
  +
  '<th id ="tablebirthcertificatenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')">' + birthcertificatenumber + '</th>'
  +
  '<th id ="tableresidenceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableresidenceitemat_' + rowCount + '\')">' + residence + '</th>'
  +
  '<th id ="tablerenewingstartdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')">' + renewingstartdate + '</th>'
  +
  '<th id ="tablerenewingenddateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')">' + renewingenddate + '</th>'
  +
  '<th id ="tablestatusitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablestatusitemat_' + rowCount + '\')">' + status + '</th>'
  +
  '<th id ="tableuiditemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableuiditemat_' + rowCount + '\')">' + uid + '</th>'
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
  
  let translationsize = window.scrollY <= 50 ? (-50 + datatablehead.offsetHeight * (window.scrollY / 50)) : (-50 + datatablehead.offsetHeight);
  
  
  buttonslayerofdatatablehead.style.transform = 'translateY(' + translationsize + 'px)';
  
  
  
  
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
      let lastsearchfactor = searchfactor == "" ? bydefaultsearchfactor : searchfactor;
      searchfactor = "";
      whenTitleItemClicked(lastsearchfactor);
      
      window.scrollTo(document.getElementById(lastsearchfactor).offsetLeft, window.scrollY);
    } else {
      document.getElementById(searchfactor).style = undefined;
      
      window.scrollTo(datatable.offsetWidth, window.scrollY);
    }
  }, 200);
  
}


var lastinputvalues = {};
function whenSearchTextChange(input, inputhint) {
  if (input.innerHTML != lastinputvalues[input.id]) {
      lastinputvalues[input.id] = input.innerHTML;
      if (input.innerHTML == "") {
          inputhint.style.animationName = "fadeInAnimation";
          inputhint.style.animationDuration = "0.25s";
          inputhint.style.animationFillMode = "forwards";
      } else {
          inputhint.style.animationName = "fadeOutAnimation";
          inputhint.style.animationDuration = "0.25s";
          inputhint.style.animationFillMode = "forwards";
      }
  }
}


var allinputfields = document.getElementsByClassName("inputfield");

for (let i = 0; i < allinputfields.length; i++) {
  let inputfield = allinputfields[i];
  
  inputfield.onkeydown = whenSearchTextChange(inputfield.children[1], inputfield.children[0]);
  inputfield.onchange = whenSearchTextChange(inputfield.children[1], inputfield.children[0]);
  inputfield.oninput = whenSearchTextChange(inputfield.children[1], inputfield.children[0]);
  inputfield.oncut = whenSearchTextChange(inputfield.children[1], inputfield.children[0]);
  inputfield.onpaste = whenSearchTextChange(inputfield.children[1], inputfield.children[0]);
}



window.onload = function() {
  window.scrollTo(document.documentElement.offsetWidth, 0);
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
const bydefaultsearchfactor = "tabletitleuiditem";

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
