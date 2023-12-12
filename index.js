const pageItemsLimit = 20;

var pageIndex = -1; // to be calculated later automatically

const hamzaitemdata = {
  name: 'حمزة بونقاب',
  status: "لا يحتاج منحة البطالة",
  renewingstartdate: "2021-02-26",
  renewingenddate: "حتى يموت",
  phonenumber: "لا تتصلو به",
  worknumber: "FLAME CORP",
  nin: "KING",
  cardnumber: "001",
  cardissuingdate: "2022-11-16",
  cardexpiredate: "حتى يموت",
  cardissuingplace: "EL ATTAF",
  birthdate: "2003-06-15",
  birthplace: "EL ATTAF",
  birthcertificatenumber: "001",
  residence: "EL ATTAF"
};

var hamzadataitemhtml;

const newitemshtml = newitemsbar.innerHTML;

newitemsbar.innerHTML = "";

var rowCount = -1;

var rowRelatedDataIds = new Map();
var rowRelatedPageDataIndecies = new Map();

var totalitemscount = 0;

var lastdatatablebodyhtml = "";

function addRow(id, name, status, renewingstartdate, renewingenddate, phonenumber, worknumber, nin, cardnumber,  cardissuingdate, cardexpiredate, cardissuingplace, birthdate, birthplace, birthcertificatenumber, residence, _fromTop, _newlyAdded, _hamzacase) {
  ;
  let uid = toUid(id);
  
  _fromTop = true;
  
  rowRelatedPageDataIndecies.set(id, rowCount+1);
  
  rowRelatedDataIds.set(rowCount+1, id);
  
  
  let dataitemhtml =
  '\n     <tr>\n       '
  +
  '<th id ="tableuiditemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableuiditemat_' + rowCount + '\')">' + uid + '</th>'
  +
  '<th id ="tablenameitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablenameitemat_' + rowCount + '\')">' + name + '</th>'
  +
  '<th id ="tablestatusitemat_' + rowCount + '" class="tabledataitem statusdataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablestatusitemat_' + rowCount + '\')">' + status + '</th>'
  +
  '<th id ="tablerenewingstartdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')">' + renewingstartdate + '</th>'
  +
  '<th id ="tablerenewingenddateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')">' + renewingenddate + '</th>'
  +
  '<th id ="tablephonenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablephonenumberitemat_' + rowCount + '\')">' + phonenumber + '</th>'
  +
  '<th id ="tableworknumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableworknumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableworknumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableworknumberitemat_' + rowCount + '\')">' + worknumber + '</th>'
  +
  '<th id ="tableninitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableninitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableninitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableninitemat_' + rowCount + '\')">' + nin + '</th>'
  +
  '<th id ="tablecardnumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardnumberitemat_' + rowCount + '\')">' + cardnumber + '</th>'
  +
  '<th id ="tablecardissuingdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')">' + cardissuingdate + '</th>'
  +
  '<th id ="tablecardexpiredateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')">' + cardexpiredate + '</th>'
  +
  '<th id ="tablecardissuingplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')">' + cardissuingplace + '</th>'
  +
  '<th id ="tablebirthdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthdateitemat_' + rowCount + '\')">' + birthdate + '</th>'
  +
  '<th id ="tablebirthplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthplaceitemat_' + rowCount + '\')">' + birthplace + '</th>'
  +
  '<th id ="tablebirthcertificatenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')">' + birthcertificatenumber + '</th>'
  +
  '<th id ="tableresidenceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableresidenceitemat_' + rowCount + '\')">' + residence + '</th>'
  +
  '\n     </tr>';
  
  
  if (_hamzacase) {
    hamzadataitemhtml = dataitemhtml;
    
    datatablebody.innerHTML =
    ' \n<tbody>     <tr>\n       '
    +
    hamzadataitemhtml
    +
    '\n     </tr>\n    </tbody>';
  } else {
    lastdatatablebodyhtml = (_fromTop ? '' : lastdatatablebodyhtml)
    + 
    dataitemhtml
    +
    (_fromTop ? lastdatatablebodyhtml : '');
  
  
    datatablebody.innerHTML =
    ' <tbody>\n     <tr>\n       '
    +
    (hamzadataitemhtml)
    +
    '\n     </tr>\n'
    +
    '\n     <tr>\n       '
    +
    lastdatatablebodyhtml
    +
    '\n     </tr>\n    </tbody>'
    ;
  
  }
    
    
  window.scrollTo(document.documentElement.scrollWidth, window.scrollY);
  
  rowCount++;
}


var lastScrollY = 0;
var fabFadedOut = false;
var upButtonDisabled = true;
var downButtonDisabled = false;
window.onscroll = function() {
  let scrollFactor = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  
  //let shadowsize = window.scrollY <= 50 ? window.scrollY / 4 : 12.5;
  
  //newitemsbar.style.boxShadow = '0px ' + shadowsize + 'px ' + shadowsize*2 + 'px rgba(0, 0, 0, 0.4)';
  
  //titlesbar.style.boxShadow = '0px ' + shadowsize + 'px ' + shadowsize*2 + 'px rgba(0, 0, 0, 0.4)';
  
  let translationsize = window.scrollY <= 50 ? (-110 + datatablehead.offsetHeight * (window.scrollY / 50)) : (-110 + datatablehead.offsetHeight);
  
  
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
        fabscontainer.style.animationName = "fadeOutAnimation";
        fabscontainer.style.animationDuration = "0.25s";
        fabscontainer.style.animationFillMode = "forwards";
    }
    lastScrollY = window.scrollY;
    
    fabFadedOut = true;
  } else if (window.scrollY - lastScrollY <= -scrollDelta) {
    if (fabFadedOut) {
        fabscontainer.style.animationName = "fadeInAnimation";
        fabscontainer.style.animationDuration = "0.25s";
        fabscontainer.style.animationFillMode = "forwards";
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
  requestSearch(searchenabled);
  //searchenabled = !searchenabled;
  searchenabled = true;
  
  realfabtext.innerHTML = 'الغاء';
  realfabicon.innerHTML = 'close';
  
  toolbarsearchicon.style.animationName = "fadeOutAnimation";
  toolbarsearchicon.style.animationDuration = "0.2s";
  toolbarsearchicon.style.animationFillMode = "forwards";
  
  setTimeout(function() {
    //toolbarsearchicon.innerHTML = searchenabled ? "clear" : "search";
    
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
      whenTitleItemClicked("tabletitle" + lastsearchfactor + "item");
      
      window.scrollTo(document.getElementById("tabletitle" + lastsearchfactor + "item").offsetLeft, window.scrollY);
    } else {
      document.getElementById("tabletitle" + searchfactor + "item").style = undefined;
      
      window.scrollTo(datatable.offsetWidth, window.scrollY);
    }
  }, 200);
  
}



function requestSearch(canSearch) {
  if (canSearch && toolbarsearchinput.innerHTML.replaceAll(" ", "") != "") {
    emptyPage();
  
    prepareDB("جاري البحث ...", true);
  }
}



function search(batala, onsuccessevent) {
  let factorindex = batala.index(searchfactor);
  
  let searchinput = tokenize(toolbarsearchinput.innerHTML);
  
  datatableheadlayerscontainer.style.animationName = "fadeOutAnimation";
  datatableheadlayerscontainer.style.animationDuration = "0.25s";
  datatableheadlayerscontainer.style.animationFillMode = "forwards";
  
  factorindex.getAll().onsuccess = function(event) {
    let itemsdata = event.target.result;
    
    itemsdata.forEach(function(itemdata) {
      (searchinput.includes(" ") ? searchinput.split(/\s+/) : [searchinput]).forEach(function(word) {
        if (itemdata[searchfactor].includes(word) && !pageData.includes(itemdata)) {
          let fakeevent = {
            target: {
              result: {
                value: itemdata
              }
            }
          }
          onsuccessevent(fakeevent);
          pageIndex = 0;
          whenDataIsReady();
        }
      });
    });
    
    loadingscreen.style.animationName = "fadeOutAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
    
  }
  
}




var lastinputvalues = new Map();
var donehidden = true;
function whenTextChange(inputid, inputhintid) {
  
  let input = document.getElementById(inputid);
  let inputhint = document.getElementById(inputhintid);
  
  if (inputhintid !== "newrenewingstartdateitemhint" && inputhintid !== "newrenewingstartdateitemhint" && inputhintid !== "newcardissuingdateitemhint" && inputhintid !== "newcardexpiredateitemhint" && inputhintid !== "newbirthdateitemhint") if (input.innerHTML != lastinputvalues.get(input)) {
      lastinputvalues.set(input, input.innerHTML);
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
    
    
    
  if (inputid == "newrenewingstartdateiteminput") {
      if (newrenewingstartdateiteminput.value.replaceAll(" ", "") !== "") {
          newrenewingenddateitem.innerHTML = getArabicDate(addSixMonths(newrenewingstartdateiteminput.value));
          
          newstatusitem.innerHTML = getStatus({renewingstartdate: newrenewingstartdateiteminput.value});
      } else {
          newrenewingenddateitem.innerHTML = "إملئ تاريخ البداية أولا";
          
          newstatusitem.innerHTML = "إملئ تاريخ البداية أولا";
      }
  }
    
  
    
  if ((document.getElementById('newnameiteminput') !== undefined ? (document.getElementById('newnameiteminput') !== null ? document.getElementById('newnameiteminput').innerHTML : "") : "").replaceAll(" ", "") !== "" && (document.getElementById('newrenewingstartdateiteminput') !== undefined ? (document.getElementById('newrenewingstartdateiteminput') !== null ? document.getElementById('newrenewingstartdateiteminput').value : "") : "").replaceAll(" ", "") !== "") {
      donefab.style.animationName = "fadeInAnimation";
      donefab.style.animationDuration = "0.25s";
      donefab.style.animationFillMode = "forwards";
      
      donehidden = false;
  } else {
      if (!donehidden) {
        donefab.style.animationName = "fadeOutAnimation";
        donefab.style.animationDuration = "0.25s";
        donefab.style.animationFillMode = "forwards";
          
        donehidden = true;
      }
  }
}


var initialScroll = true;
window.onload = function() {
  if (initialScroll) {
      initialScroll = false;
      window.scrollTo(document.documentElement.scrollWidth, 0);
  }
}


// Data items listeners...
var dataitemsclicks = new Map();
var dataitemsclicktimers = new Map();
var messageboxtimer;
var lasteditedrowhtml = "";
var lasteditedrowindex;
var lasteditedrowid;
var lasteditedpagedataindex;
var modifyingEnabled = false;
var lastdataitemOffsetLeft = 0;
function whenDataItemClicked(itemid) {
  let dataitem = document.getElementById(itemid);
  
  let rowId = parseInt(itemid.split("_")[1]);
  
  let pageDataIndex = rowId;
  
  let itemtype = itemid.split("_")[0].replaceAll("table", "").replaceAll("itemat", "");
    
  // Copy the text inside the text field
   
  let copiedcontent = null;
  if (rowId !== -1) if (itemtype == "uid") {
    copiedcontent = toUid(pageData[pageDataIndex]["id"]);
  } else if (itemtype == "status") {
    copiedcontent = null;
  } else if (itemtype.includes("date")) {
    if (itemtype == "renewingenddate") {
      copiedcontent = reverseDateStr(addSixMonths(pageData[pageDataIndex]["renewingstartdate"])).replaceAll("-", "/");
    } else {
      copiedcontent = reverseDateStr(pageData[pageDataIndex][itemtype]).replaceAll("-", "/");
    }
  } else {
    copiedcontent = pageData[pageDataIndex][itemtype];
  }
  
  if (copiedcontent == null) {
    messageboxicon.innerHTML = "warning";
    
    messageboxtext.innerHTML = "لا يمكنك نسخ محتوى هذا المربع";
  } else {
    messageboxicon.innerHTML = "content_copy";
    
    messageboxtext.innerHTML = "تم نسخ المحتوى في الحافظة";
    
    navigator.clipboard.writeText(copiedcontent);
  }
    
  messagebox.style.animationName = "fadeInAnimation";
  messagebox.style.animationDuration = "0.25s";
  messagebox.style.animationFillMode = "forwards";
    
  clearTimeout(messageboxtimer);
    
  messageboxtimer = setTimeout(function() {
      messagebox.style.animationName = "fadeOutAnimation";
      messagebox.style.animationDuration = "0.25s";
      messagebox.style.animationFillMode = "forwards";
  }, 250 + 2500);
    
    
  
  dataitemsclicks.set(itemid, (dataitemsclicks.get(itemid) == undefined ? 0 : dataitemsclicks.get(itemid)) + 1);
    
  clearTimeout(dataitemsclicktimers.get(itemid));
    
  if ((dataitemsclicks.get(itemid) == undefined ? 0 : dataitemsclicks.get(itemid)) < 2) dataitemsclicktimers.set(itemid, setTimeout(function() {
      
      dataitemsclicks.set(itemid, 0);
      
  }, 500));
    
    
  if (dataitemsclicks.get(itemid) >= 2) {
      dataitemsclicks.set(itemid, 0);
      // when data item get clicked 2 times (doubleclicked)
      // We replace the corresponding data row with an editable one
      
      
      let hamzarow = rowId == -1;
      
      
      let rowIndex = rowCount - 1 - rowId + 3;
      
      
      lasteditedrowid = rowId;
      
      
      if (hamzarow) {
          // Hamza special items
          
          messageboxicon.innerHTML = "close";
    
          messageboxtext.innerHTML = "إسمي و معلوماتي لن تزول أو يتم تعديلها في هذا البرنامج 😈";
    
          messagebox.style.animationName = "fadeInAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
    
          clearTimeout(messageboxtimer);
    
          messageboxtimer = setTimeout(function() {
            messagebox.style.animationName = "fadeOutAnimation";
            messagebox.style.animationDuration = "0.25s";
            messagebox.style.animationFillMode = "forwards";
          }, 250 + 2500);
          
          return;
      }
      
      if (modifyingEnabled || addingEnabled) {
          messageboxicon.innerHTML = "warning";
    
          messageboxtext.innerHTML = "لا يمكنك تعديل صفين أو التعديل و الإضافة في نفس الوقت";
    
          messagebox.style.animationName = "fadeInAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
    
          clearTimeout(messageboxtimer);
    
          messageboxtimer = setTimeout(function() {
            messagebox.style.animationName = "fadeOutAnimation";
            messagebox.style.animationDuration = "0.25s";
            messagebox.style.animationFillMode = "forwards";
          }, 250 + 2500);
          
          return;
      }
      
      lasteditedrowindex = rowIndex;
      
      lasteditedpagedataindex = pageDataIndex;
     
      modifyingEnabled = true;
      
      lastdataitemOffsetLeft = dataitem.offsetLeft;
      
      
      realfabtext.innerHTML = 'إلغاء';
      realfabicon.innerHTML = 'close';
      
      
      lasteditedrowhtml = datatablebody.rows[rowIndex].innerHTML;
      
      datatablebody.rows[rowIndex].innerHTML = newitemshtml;
      
      
      newuiditem.innerHTML = toUid(pageData[pageDataIndex].id);
      
      
      
      newnameiteminput.innerHTML = pageData[pageDataIndex].name;
      whenTextChange("newnameiteminput", "newnameitemhint");
      
      newstatusitem.innerHTML = getStatus(pageData[pageDataIndex]);
      
      newrenewingstartdateiteminput.value = pageData[pageDataIndex].renewingstartdate;
      whenTextChange("newrenewingstartdateiteminput", "newrenewingstartdateitemhint");
    
      newrenewingenddateitem.innerHTML = getArabicDate(addSixMonths(pageData[pageDataIndex].renewingstartdate));
      
      newphonenumberiteminput.innerHTML = pageData[pageDataIndex].phonenumber;
      whenTextChange("newphonenumberiteminput", "newphonenumberitemhint");
      
      newworknumberiteminput.innerHTML = pageData[pageDataIndex].worknumber;
      whenTextChange("newworknumberiteminput", "newworknumberitemhint");
      
      newniniteminput.innerHTML = pageData[pageDataIndex].nin;
      whenTextChange("newniniteminput", "newninitemhint");
      
      newcardnumberiteminput.innerHTML = pageData[pageDataIndex].cardnumber;
      whenTextChange("newcardnumberiteminput", "newcardnumberitemhint");
      
      newcardissuingdateiteminput.value = pageData[pageDataIndex].cardissuingdate;
      whenTextChange("newcardissuingdateiteminput", "newcardissuingdateitemhint");
      
      newcardexpiredateiteminput.value = pageData[pageDataIndex].cardexpiredate;
      whenTextChange("newcardexpiredateiteminput", "newcardexpiredateitemhint");
      
      newcardissuingplaceiteminput.innerHTML = pageData[pageDataIndex].cardissuingplace;
      whenTextChange("newcardissuingplaceiteminput", "newcardissuingplaceitemhint");
      
      newbirthdateiteminput.value = pageData[pageDataIndex].birthdate;
      whenTextChange("newbirthdateiteminput", "newbirthdateitemhint");
      
      newbirthplaceiteminput.innerHTML = pageData[pageDataIndex].birthplace;
      whenTextChange("newbirthplaceiteminput", "newbirthplaceitemhint");
      
      newbirthcertificatenumberiteminput.innerHTML = pageData[pageDataIndex].birthcertificatenumber;
      whenTextChange("newbirthcertificatenumberiteminput", "newbirthcertificatenumberitemhint");
      
      newresidenceiteminput.innerHTML = pageData[pageDataIndex].residence;
      whenTextChange("newresidenceiteminput", "newresidenceitemhint");
      
      try {
        if (itemtype == "status" || itemtype == "renewingenddate") {
          newrenewingstartdateiteminput.focus();
        } else if (itemtype == "uid") {
          newnameiteminput.focus();
        } else {
          document.getElementById("new" + itemtype + "iteminput").focus();
        }
      } catch (ex) {
        // Do nothing ...
      }
  }
}

function whenDataItemHovered(itemid) {
  let dataitem = document.getElementById(itemid);
  
  
}

function whenDataItemDismissed(itemid) {
  let dataitem = document.getElementById(itemid);
  
  
}





// Title items listeners...
var searchfactor = "";
const bydefaultsearchfactor = "uid";

function whenTitleItemClicked(titleitemid) {
  if (!searchenabled || titleitemid === ("tabletitle" + searchfactor + "item")) return;
  
  let titleitem = document.getElementById(titleitemid);
  let lasttitleitem = document.getElementById("tabletitle" + searchfactor + "item");
  
  let lastsearchfactor = searchfactor;
  searchfactor = titleitemid.replaceAll("tabletitle", "").replaceAll("item", "");
  
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

function emptyPage() {
  rowCount = -1;
  pageData = [];
  lastdatatablebodyhtml = "";
  rowRelatedDataIds = new Map();
  rowRelatedPageDataIndecies = new Map();
  
  if (addingEnabled || modifyingEnabled) realfab.onclick();
  
  datatablebody.innerHTML = "";
  
  addRow(-1, hamzaitemdata.name, hamzaitemdata.status, hamzaitemdata.renewingstartdate, hamzaitemdata.renewingenddate, hamzaitemdata.phonenumber, hamzaitemdata.worknumber, hamzaitemdata.nin, hamzaitemdata.cardnumber, hamzaitemdata.cardissuingdate, hamzaitemdata.cardexpiredate, hamzaitemdata.cardissuingplace, hamzaitemdata.birthdate, hamzaitemdata.birthplace, hamzaitemdata.birthcertificatenumber, hamzaitemdata.residence, false, false, true);
}

emptyPage();

prepareDB("جاري تحميل البيانات ...");

var pageData = [];

var farhi_rsdb;


function prepareDB(loadingmsg, belowToolbar) {
  
  loadingscreen.style.top = (belowToolbar ? toolbar.offsetHeight : 0) + "px";
  
  loadingscreen.style.animationName = "fadeInAnimation";
  loadingscreen.style.animationDuration = "0.25s";
  loadingscreen.style.animationFillMode = "forwards";
  
  loadingtext.innerHTML = loadingmsg !== undefined ? (loadingmsg !== null ? (loadingmsg) : "جاري العمل ...") : "جاري العمل ...";

  var farhi_rsdb_request = indexedDB.open("farhi_rsdb", 1);

  farhi_rsdb_request.onupgradeneeded = function(event) {
    let farhi_rsdb = event.target.result;
    
    let store = null;

    if (!farhi_rsdb.objectStoreNames.contains("batala")) {
      store = farhi_rsdb.createObjectStore("batala", { keyPath: 'id', autoIncrement: true });
    } else {
      let trans = farhi_rsdb.transaction("batala", "readwrite");

      store = trans.objectStore("batala");
    }
    
    if (store !== null) {
      store.createIndex('uid', 'id', {multiEntry: true});
      store.createIndex('name', 'nametokenized', {multiEntry: true});
      store.createIndex('renewingstartdate', 'renewingstartdate', {multiEntry: true});
      store.createIndex('phonenumber', 'phonenumber', {multiEntry: true});
      store.createIndex('worknumber', 'worknumber', {multiEntry: true});
      store.createIndex('nin', 'nin', {multiEntry: true});
      store.createIndex('cardnumber', 'cardnumber', {multiEntry: true});
      store.createIndex('cardissuingdate', 'cardissuingdate', {multiEntry: true});
      store.createIndex('cardexpiredate', 'cardexpiredate', {multiEntry: true});
      store.createIndex('cardissuingplace', 'cardissuingplacetokenized', {multiEntry: true});
      store.createIndex('birthdate', 'birthdate', {multiEntry: true});
      store.createIndex('birthplace', 'birthplacetokenized', {multiEntry: true});
      store.createIndex('birthcertificatenumber', 'birthcertificatenumber', {multiEntry: true});
      store.createIndex('residence', 'residencetokenized', {multiEntry: true});
    }
  };

  farhi_rsdb_request.onsuccess = function(event) {
    farhi_rsdb = event.target.result;

    let trans = farhi_rsdb.transaction("batala", "readwrite");

    let batala = trans.objectStore("batala");
    
    let batalacount = null;
        
    if (totalitemscount == 0) batalacount = batala.count();
        
    let onsuccess = function() {
    if (batalacount !== null) totalitemscount = batalacount.result;
    
    if (pageIndex === -1) pageIndex = parseInt(Math.max(1, parseInt(Math.ceil(totalitemscount / pageItemsLimit)))) - 1;

    let onsuccess = function(event) {
      let cursor = event.target.result;

      if (cursor) {
        let itemdata = cursor.value;
        
        if (itemdata != null) {
          pageData.push(itemdata);
          
          if (searchenabled) {
            if (totalitemscount <= pageItemsLimit || true) {
              addRow(itemdata.id, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
            }
          } else {
            addRow(itemdata.id, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
          }
        }
        
        if (cursor.continue) cursor.continue();
      } else {
        
        loadingscreen.style.animationName = "fadeOutAnimation";
        loadingscreen.style.animationDuration = "0.25s";
        loadingscreen.style.animationFillMode = "forwards";
          
        whenDataIsReady();
        
      }
    };
    
    
    if (searchenabled) {
      search(batala, onsuccess);
    } else {
      batala.openCursor(IDBKeyRange.bound((pageIndex*pageItemsLimit) + 1, ((pageIndex+1)*pageItemsLimit))).onsuccess = onsuccess;
    }
    
    
    };

    if (batalacount !== null) {
      batalacount.onsuccess = onsuccess;
    } else {
      onsuccess();
    }
    
  };

}



function whenDataIsReady() {
  if (((pageIndex+1)* pageItemsLimit) >= totalitemscount) {
    // disable right button
    rightbutton.style.pointerEvents = "none";
    
    rightbutton.style.animationName = "disablingActionButtonAnimation";
    rightbutton.style.animationDuration = "0.25s";
    rightbutton.style.animationFillMode = "forwards";
  } else {
    // enable right button
    rightbutton.style.pointerEvents = "auto";
    
    rightbutton.style.animationName = "enablingActionButtonAnimation";
    rightbutton.style.animationDuration = "0.25s";
    rightbutton.style.animationFillMode = "forwards";
  }
  
  if (pageIndex == 0) {
    // disable left button
    leftbutton.style.pointerEvents = "none";
    
    leftbutton.style.animationName = "disablingActionButtonAnimation";
    leftbutton.style.animationDuration = "0.25s";
    leftbutton.style.animationFillMode = "forwards";
  } else {
    // enable left button
    leftbutton.style.pointerEvents = "auto";
    
    leftbutton.style.animationName = "enablingActionButtonAnimation";
    leftbutton.style.animationDuration = "0.25s";
    leftbutton.style.animationFillMode = "forwards";
  }
  
  pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.max(1, parseInt(Math.ceil(totalitemscount / pageItemsLimit))));
  
}


var addingEnabled = false;
realfab.onclick = function() {
  // create a new connection  or new transaction
  const trans = farhi_rsdb.transaction('batala', 'readwrite');  
  // Save Names object using variable  
  const batala = trans.objectStore('batala');
  
  var batalacount = null;
  
  if (totalitemscount == 0) {
    batalacount = batala.count();
  
    loadingscreen.style.animationName = "fadeInAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
  
    loadingtext.innerHTML = "جاري التحضير للإضافة ...";
  }
  
  let onsuccess = function() {
    
  if (batalacount !== null) {
    totalitemscount = batalacount.result;
    
    loadingscreen.style.animationName = "fadeOutAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
  }
    
  if (!addingEnabled && !modifyingEnabled && !searchenabled) {
      
      newitemsbar.innerHTML = newitemshtml;
      realfabtext.innerHTML = 'الغاء';
      realfabicon.innerHTML = 'close';
      
      
      newuiditem.innerHTML = toUid(totalitemscount+1);
      
      newnameiteminput.focus();
      
      addingEnabled = true;
      
      
      let currentDateStr = new Date().toISOString().split("T")[0];
      
      newrenewingstartdateiteminput.value = currentDateStr; 
      whenTextChange('newrenewingstartdateiteminput', 'newrenewingstartdateitemhint');
      
      newcardissuingplaceiteminput.innerHTML = "العطاف - عين الدفلى";
      whenTextChange('newcardissuingplaceiteminput', 'newcardissuingplaceitemhint');
      
      newresidenceiteminput.innerHTML = "العطاف - عين الدفلى";
      whenTextChange('newresidenceiteminput', 'newresidenceitemhint');
  } else if (addingEnabled || modifyingEnabled || searchenabled) {
      
      newitemsbar.innerHTML = '';
      realfabtext.innerHTML = 'إضافة زبون جديد';
      realfabicon.innerHTML = 'person_add';
      
      
      if (modifyingEnabled) datatablebody.rows[lasteditedrowindex].innerHTML = lasteditedrowhtml;
      
      
      modifyingEnabled = false;
      addingEnabled = false;
      
      if (searchenabled) {
        toolbarsearchfield.style.animationName = "fadeOutAnimation";
        toolbarsearchfield.style.animationDuration = "0.2s";
        toolbarsearchfield.style.animationFillMode = "forwards";
        
        emptyPage();
        
        document.getElementById("tabletitle" + searchfactor + "item").style = undefined;
        
        pageIndex = -1;
        
        totalitemscount = 0;

        prepareDB("جاري تحميل البيانات ...");
      }
      searchenabled = false;
      
      
      if (!donehidden) {
        donefab.style.animationName = "fadeOutAnimation";
        donefab.style.animationDuration = "0.25s";
        donefab.style.animationFillMode = "forwards";
          
        donehidden = true;
      }
  }
    
  window.scrollTo(document.documentElement.scrollWidth, 0);
  
  }
  
  if (batalacount === null) {
    onsuccess();
  } else {
    batalacount.onsuccess = onsuccess;
  }
  
}


donefab.onclick = function() {
  // create a new connection  or new transaction
  const trans = farhi_rsdb.transaction('batala', 'readwrite');  
  // Save Names object using variable  
  const batala = trans.objectStore('batala');
    
  let itemdata = {
  name: newnameiteminput.innerHTML,
  nametokenized: tokenize(newnameiteminput.innerHTML, true),
  renewingstartdate: newrenewingstartdateiteminput.value,
  phonenumber: newphonenumberiteminput.innerHTML,
  worknumber: newworknumberiteminput.innerHTML,
  nin: newniniteminput.innerHTML,
  cardnumber: newcardnumberiteminput.innerHTML,
  cardissuingdate: newcardissuingdateiteminput.value,
  cardexpiredate: newcardexpiredateiteminput.value,
  cardissuingplace: newcardissuingplaceiteminput.innerHTML,
  cardissuingplacetokenized: tokenize(newcardissuingplaceiteminput.innerHTML, true),
  birthdate: newbirthdateiteminput.value,
  birthplace: newbirthplaceiteminput.innerHTML,
  birthplacetokenized: tokenize(newbirthplaceiteminput.innerHTML, true),
  birthcertificatenumber: newbirthcertificatenumberiteminput.innerHTML,
  residence: newresidenceiteminput.innerHTML,
  residencetokenized: tokenize(newresidenceiteminput.innerHTML, true)
  };
    
  loadingscreen.style.animationName = "fadeInAnimation";
  loadingscreen.style.animationDuration = "0.25s";
  loadingscreen.style.animationFillMode = "forwards";
  
  loadingtext.innerHTML = "جاري العمل ...";
    
  let query;
    
  if (modifyingEnabled) {
      itemdata.id = rowRelatedDataIds.get(lasteditedrowid+1);
      lasteditedrowid = rowRelatedDataIds.get(lasteditedrowid);
  }
    
  query = batala.put(itemdata);
   
    
  query.onsuccess = function(event) {
      if (addingEnabled) {
        newitemsbar.innerHTML = '';
      }
      realfabtext.innerHTML = 'إضافة زبون جديد';
      realfabicon.innerHTML = 'person_add';
      
      if (modifyingEnabled) datatablebody.rows[lasteditedrowindex].innerHTML = lasteditedrowhtml;
      
      if (!donehidden) {
        donefab.style.animationName = "fadeOutAnimation";
        donefab.style.animationDuration = "0.25s";
        donefab.style.animationFillMode = "forwards";
          
        donehidden = true;
      }
      
      
      
      
      donefab.style.animationName = "fadeOutAnimation";
      donefab.style.animationDuration = "0.25s";
      donefab.style.animationFillMode = "forwards";
      
      loadingscreen.style.animationName = "fadeOutAnimation";
      loadingscreen.style.animationDuration = "0.25s";
      loadingscreen.style.animationFillMode = "forwards";
      
      if (addingEnabled) {
          
          totalitemscount++;
        
          addingEnabled = false;
          
          itemdata.id = totalitemscount;
          
          pageData.push(itemdata);
          
          if (pageIndex === parseInt(Math.ceil(totalitemscount / pageItemsLimit)) - 1 && rowCount < pageItemsLimit) addRow(totalitemscount, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
          
          
          whenDataIsReady();
          
          messageboxicon.innerHTML = "done_all";
    
          messageboxtext.innerHTML = "تم إضافة زبون جديد بنجاح";
    
          messagebox.style.animationName = "fadeInAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
    
          clearTimeout(messageboxtimer);
    
          messageboxtimer = setTimeout(function() {
            messagebox.style.animationName = "fadeOutAnimation";
            messagebox.style.animationDuration = "0.25s";
            messagebox.style.animationFillMode = "forwards";
          }, 250 + 2500);
      } else if (modifyingEnabled) {
          
          modifyingEnabled = false;
          
          pageData[lasteditedpagedataindex] = itemdata;
          
          whenDataIsReady();
          
          document.getElementById("tableuiditemat_" + lasteditedpagedataindex).innerHTML = toUid(itemdata.id);
      
          document.getElementById("tablenameitemat_" + lasteditedpagedataindex).innerHTML = itemdata.name;
      
          document.getElementById("tablestatusitemat_" + lasteditedpagedataindex).innerHTML = getStatus(itemdata);
      
          document.getElementById("tablerenewingstartdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.renewingstartdate);
    
          document.getElementById("tablerenewingenddateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(addSixMonths(itemdata.renewingstartdate));
      
          document.getElementById("tablephonenumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.phonenumber;
      
          document.getElementById("tableworknumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.worknumber;
      
          document.getElementById("tableninitemat_" + lasteditedpagedataindex).innerHTML = itemdata.nin;
      
          document.getElementById("tablecardnumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.cardnumber;
      
          document.getElementById("tablecardissuingdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.cardissuingdate);
      
          document.getElementById("tablecardexpiredateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.cardexpiredate);
      
          document.getElementById("tablecardissuingplaceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.cardissuingplace;
      
          document.getElementById("tablebirthdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.birthdate);
      
          document.getElementById("tablebirthplaceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.birthplace;
      
          document.getElementById("tablebirthcertificatenumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.birthcertificatenumber;
      
          document.getElementById("tableresidenceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.residence;
          
          
          messageboxicon.innerHTML = "done_all";
    
          messageboxtext.innerHTML = "تم تعديل الصف بنجاح";
    
          messagebox.style.animationName = "fadeInAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
    
          clearTimeout(messageboxtimer);
    
          messageboxtimer = setTimeout(function() {
            messagebox.style.animationName = "fadeOutAnimation";
            messagebox.style.animationDuration = "0.25s";
            messagebox.style.animationFillMode = "forwards";
          }, 250 + 2500);
      }
  }
  
}


function toUid(id) {
  if (id == -1) {
    let hmzids = ["NUMBER 1", "THE BEST", "FLAME CEO", "RICH&RICH", "HMZBN"];
    try {
      return hmzids[Math.floor((Math.random()*hmzids.length))];
    } catch (ex) {
      return "NUMBER 1";
    }
  }
  
  let itemId = id % pageItemsLimit;
  let pageId = (itemId == 0 ? 0 : 1) + Math.floor(id / (pageItemsLimit));
  
  return "P" + pageId + "N" + (itemId == 0 ? pageItemsLimit : itemId);
}


function addSixMonths(datestr) {
    if (datestr === undefined || datestr === null) return datestr;
    
    let date = new Date(datestr);
    
    return date.addMonths(6).addDays(8).toISOString().split("T")[0];
}


    
Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};

Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


function getArabicDate(isoDate) {
  if (isoDate === undefined || isoDate === null) return "";
  
  const months = [
    "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان",
    "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const days = [
    "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"
  ];

  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];

  return `${dayOfWeek} ${day} ${month} ${year}`;
}

function reverseDateStr(datestr) {
    if (datestr === undefined || datestr === null) return "";
    
    let splitteddatestr = datestr.split("-");
    
    return splitteddatestr[2] + "-" + splitteddatestr[1] + "-" + splitteddatestr[0];
}



// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}



function getStatus(itemdata) {
    let diffdays = dateDiffInDays(new Date(), new Date(addSixMonths(itemdata.renewingstartdate)));
    let diffdaysbeforestart = dateDiffInDays(new Date(), new Date(itemdata.renewingstartdate));
    
    if (diffdaysbeforestart > 0) {
      return "لم يبدأ تسجيله بعد";
    } else {
      return diffdays < 0 ? ("إنتهى تسجيله منذ " + (diffdays == -1 ? "يوم واحد" : (diffdays == -2 ? "يومين" : (-diffdays >= 3 && -diffdays <= 10 ? ((-diffdays) + " أيام") : ((-diffdays) + " " + "يوما")))) + ("، يرجى الإتصال به فورا")) : (diffdays == 0 ? "إنتهى تسجيله اليوم، يرجى الإتصال به فورا" :  "تبقى للزبون " + (diffdays == 1 ? "يوم واحد" : (diffdays == 2 ? "يومين" : (diffdays >= 3 && diffdays <= 10 ? (diffdays + " أيام") : (diffdays + " يوما")))) + " | " + (diffdays > 10 ? "حالة التسجيل جيدة" : (diffdays <= 10 && diffdays >= 5 ? "لم يتبقى له الكثير، يرجى الإتصال به" : "يكاد تسجيله ينتهي، يرجى الإتصال به في أقرب وقت")));
    }
}


rightbutton.onclick = function() {
  emptyPage();
  
  pageIndex++;
  
  if (searchenabled) {
    loadSearchPage();
  } else {
    prepareDB("جاري تحميل الصفحة الموالية ...");
  }
  
  pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.ceil(totalitemscount / pageItemsLimit));
}

leftbutton.onclick = function() {
  emptyPage();
  
  pageIndex--;
  
  if (searchenabled) {
    loadSearchPage();
  } else {
    prepareDB("جاري تحميل الصفحة السابقة ...");
  }
  
  pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.ceil(totalitemscount / pageItemsLimit));
}

function whenKeyPressOnNewItemInput(event, newiteminputid) {
  let newiteminput = document.getElementById(newiteminputid);
  
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    
    if (newiteminputid == "newnameiteminput") {
      newrenewingstartdateiteminput.focus();
    } else if (newiteminputid == "newrenewingstartdateiteminput") {
      newphonenumberiteminput.focus();
    } else if (newiteminputid == "newphonenumberiteminput") {
      newworknumberiteminput.focus();
    } else if (newiteminputid == "newworknumberiteminput") {
      newniniteminput.focus();
    } else if (newiteminputid == "newniniteminput") {
      newcardnumberiteminput.focus();
    } else if (newiteminputid == "newcardnumberiteminput") {
      newcardissuingdateiteminput.focus();
    } else if (newiteminputid == "newcardissuingdateiteminput") {
      newcardexpiredateiteminput.focus();
    } else if (newiteminputid == "newcardexpiredateiteminput") {
      newcardissuingplaceiteminput.focus();
    } else if (newiteminputid == "newcardissuingplaceiteminput") {
      newbirthdateiteminput.focus();
    } else if (newiteminputid == "newbirthdateiteminput") {
      newbirthplaceiteminput.focus();
    } else if (newiteminputid == "newbirthplaceiteminput") {
      newbirthcertificatenumberiteminput.focus();
    } else if (newiteminputid == "newbirthcertificatenumberiteminput") {
      newresidenceiteminput.focus();
    } else if (newiteminputid == "newresidenceiteminput") {
      if ((document.getElementById('newnameiteminput') !== undefined ? (document.getElementById('newnameiteminput') !== null ? document.getElementById('newnameiteminput').innerHTML : "") : "").replaceAll(" ", "") !== "" && (document.getElementById('newrenewingstartdateiteminput') !== undefined ? (document.getElementById('newrenewingstartdateiteminput') !== null ? document.getElementById('newrenewingstartdateiteminput').value : "") : "").replaceAll(" ", "") !== "") {
        donefab.click();
      } else {
        try {
          newnameiteminput.focus();
        } catch (ex) {
          // Ignore...
        }
        
        messageboxicon.innerHTML = "warning";
    
        messageboxtext.innerHTML = "إملئ على الأقل الإسم و تاريخ بداية التجديد ليتم إضافة الزبون";
    
        messagebox.style.animationName = "fadeInAnimation";
        messagebox.style.animationDuration = "0.25s";
        messagebox.style.animationFillMode = "forwards";
        
        clearTimeout(messageboxtimer);
        
        messageboxtimer = setTimeout(function() {
          messagebox.style.animationName = "fadeOutAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
        }, 250 + 2000);
      }
    }
    
  } else if (event.key === "Escape") {
    // If the user presses the "Escape" key on the keyboard
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    
    if (newiteminputid == "newnameiteminput") {
      realfab.click();
    } else if (newiteminputid == "newrenewingstartdateiteminput") {
      newnameiteminput.focus();
    } else if (newiteminputid == "newphonenumberiteminput") {
      newrenewingstartdateiteminput.focus();
    } else if (newiteminputid == "newworknumberiteminput") {
      newphonenumberiteminput.focus();
    } else if (newiteminputid == "newniniteminput") {
      newworknumberiteminput.focus();
    } else if (newiteminputid == "newcardnumberiteminput") {
      newniniteminput.focus();
    } else if (newiteminputid == "newcardissuingdateiteminput") {
      newcardnumberiteminput.focus();
    } else if (newiteminputid == "newcardexpiredateiteminput") {
      newcardissuingdateiteminput.focus();
    } else if (newiteminputid == "newcardissuingplaceiteminput") {
      newcardexpiredateiteminput.focus();
    } else if (newiteminputid == "newbirthdateiteminput") {
      newcardissuingplaceiteminput.focus();
    } else if (newiteminputid == "newbirthplaceiteminput") {
      newbirthdateiteminput.focus();
    } else if (newiteminputid == "newbirthcertificatenumberiteminput") {
      newbirthplaceiteminput.focus();
    } else if (newiteminputid == "newresidenceiteminput") {
      newbirthcertificatenumberiteminput.focus();
    }
    
  }
}


function tokenize(strunfor, returnSet) {
  returnSet = false;
  
  let str = strunfor.replaceAll(/&nbsp;/g, ' ');
  
  let thearray = str.split(/\s+/); // space
  
  let theset = new Set();
  
  thearray.forEach(function(word) {
    if (word === "") return;
    theset.add(word);
  });
  
  let finalstr = [...theset].join(" ");
  
  return returnSet ? theset : finalstr;
}




function loadSearchPage() {
  for (let i = pageIndex * pageItemsLimit; i < (pageIndex+1) * pageItemsLimit; i++) {
    if (i >= pageData.length) return;
    
    let itemdata = pageData[i];
    
    addRow(i+1, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
  }
}