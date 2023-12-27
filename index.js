const pageItemsLimit = 20;

var pageIndex = -1; // to be calculated later automatically

const hamzaitemdata = {
  name: 'HMZ',
  status: "RICH",
  renewingstartdate: "2021-02-26",
  renewingenddate: "UNTIL HE DIES",
  phonenumber: "0792342393",
  worknumber: "FLM",
  nin: "KING",
  cardnumber: "001",
  cardissuingdate: "2022-11-16",
  cardexpiredate: "UNTIL HES DIES",
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
  
  let uid = toUid(id);
  
  _fromTop = true;
  
  rowRelatedPageDataIndecies.set(id, rowCount+1);
  
  rowRelatedDataIds.set(rowCount+1, id);
  
  
  let dataitemhtml =
  '\n     <tr>\n       '
  +
  '<th id ="tableuiditemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableuiditemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableuiditemat_' + rowCount + '\')" oncontextmenu="whenDataUidItemGetRightClicked(event, ' + rowCount + ')">' + uid + '</th>'
  +
  '<th id ="tablenameitemat_' + rowCount + '" class="tabledataitem ' + (id === -1 ? '' : 'stickyitem') + ' ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + (name.includes('#') ? 'redflageditem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablenameitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablenameitemat_' + rowCount + '\')" oncontextmenu="whenDataNameItemGetRightClicked(event, ' + rowCount + ')">' + name.replace('#', '') + '</th>'
  +
  '<th id ="tablestatusitemat_' + rowCount + '" class="tabledataitem statusdataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + (_hamzacase ? "" : '" style="background-color: ' + getStatusColor(renewingstartdate)) + '" onclick="whenDataItemClicked(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablestatusitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablestatusitemat_' + rowCount + '\')">' + status + '</th>'
  +
  '<th id ="tablerenewingstartdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingstartdateitemat_' + rowCount + '\')">' + renewingstartdate + '</th>'
  +
  '<th id ="tablerenewingenddateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablerenewingenddateitemat_' + rowCount + '\')">' + renewingenddate + '</th>'
  +
  '<th id ="tablephonenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (phonenumber.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablephonenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablephonenumberitemat_' + rowCount + '\')">' + phonenumber.replace('#', '') + '</th>'
  +
  '<th id ="tableworknumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (worknumber.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableworknumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableworknumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableworknumberitemat_' + rowCount + '\')">' + worknumber.replace('#', '') + '</th>'
  +
  '<th id ="tableninitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (nin.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableninitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableninitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableninitemat_' + rowCount + '\')">' + nin.replace('#', '') + '</th>'
  +
  '<th id ="tablecardnumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (cardnumber.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardnumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardnumberitemat_' + rowCount + '\')">' + cardnumber.replace('#', '') + '</th>'
  +
  '<th id ="tablecardissuingdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingdateitemat_' + rowCount + '\')">' + cardissuingdate + '</th>'
  +
  '<th id ="tablecardexpiredateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardexpiredateitemat_' + rowCount + '\')">' + cardexpiredate + '</th>'
  +
  '<th id ="tablecardissuingplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (cardissuingplace.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablecardissuingplaceitemat_' + rowCount + '\')">' + cardissuingplace.replace('#', '') + '</th>'
  +
  '<th id ="tablebirthdateitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthdateitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthdateitemat_' + rowCount + '\')">' + birthdate + '</th>'
  +
  '<th id ="tablebirthplaceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (birthplace.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthplaceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthplaceitemat_' + rowCount + '\')">' + birthplace.replace('#', '') + '</th>'
  +
  '<th id ="tablebirthcertificatenumberitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (birthcertificatenumber.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tablebirthcertificatenumberitemat_' + rowCount + '\')">' + birthcertificatenumber.replace('#', '') + '</th>'
  +
  '<th id ="tableresidenceitemat_' + rowCount + '" class="tabledataitem ' + (_newlyAdded ? 'newlyaddeditem' : '') + (residence.includes('#') ? 'redflageditem' : '') + (_hamzacase ? 'hamzaitem' : '') + '" onclick="whenDataItemClicked(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseenter="whenDataItemHovered(\'' + 'tableresidenceitemat_' + rowCount + '\')" onmouseleave="whenDataItemDismissed(\'' + 'tableresidenceitemat_' + rowCount + '\')">' + residence.replace('#', '') + '</th>'
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


var sortingenabled = false;
toolbarsortbutton.onclick = function() {
  if (sortingenabled) return;
  sortingenabled = true;
  searchfactor = "unselected";
  toolbarsearchbutton.onclick();
  
  toolbarsearchicon.style.animationName = "disablingActionButtonAnimation";
  toolbarsearchicon.style.animationDuration = "0.2s";
  toolbarsearchicon.style.animationFillMode = "forwards";
  toolbarsearchbutton.style.pointerEvents = "none";
  
  
  toolbarsorticon.style.animationName = "fadeOutAnimation";
  toolbarsorticon.style.animationDuration = "0.2s";
  toolbarsorticon.style.animationFillMode = "forwards";
  
  setTimeout(function() {
    toolbarsorticon.style.animationName = "fadeInAnimation";
    toolbarsorticon.style.animationDuration = "0.2s";
    toolbarsorticon.style.animationFillMode = "forwards";
  }, 200);
}


var searchenabled = false;
toolbarsearchbutton.onclick = function() {
  requestSearch(searchenabled);
  //searchenabled = !searchenabled;
  searchenabled = true;
  if (!sortingenabled && searchfactor === "unselected") searchfactor = bydefaultsearchfactor;
  
  realfabtext.innerHTML = 'الغاء';
  realfabicon.innerHTML = 'close';
  
  if (!sortingenabled) {
    toolbarsearchicon.style.animationName = "fadeOutAnimation";
    toolbarsearchicon.style.animationDuration = "0.2s";
    toolbarsearchicon.style.animationFillMode = "forwards";
    
    toolbarsorticon.style.animationName = "disablingActionButtonAnimation";
    toolbarsorticon.style.animationDuration = "0.2s";
    toolbarsorticon.style.animationFillMode = "forwards";
    toolbarsortbutton.style.pointerEvents = "none";
  }
  
  setTimeout(function() {
    //toolbarsearchicon.innerHTML = searchenabled ? "clear" : "search";
    if (!sortingenabled) {
    toolbarsearchicon.style.animationName = "fadeInAnimation";
    toolbarsearchicon.style.animationDuration = "0.2s";
    toolbarsearchicon.style.animationFillMode = "forwards";
    
    toolbarsearchfield.style.pointerEvents = searchenabled ? 'auto' : 'none';
    toolbarsearchfield.style.animationName = searchenabled ? "fadeInAnimation" : "fadeOutAnimation";
    toolbarsearchfield.style.animationDuration = "0.2s";
    toolbarsearchfield.style.animationFillMode = "forwards";
    }
    
    if (searchfactor !== "unselected") if (searchenabled) {
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
  if ((canSearch && toolbarsearchinput.innerHTML.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") != "") || (sortingenabled && canSearch)) {
    emptyPage();
    pageData = [];
    if (sortingenabled) searchPages = [[]];
    totalitemscount = -1;
    pageIndex = 0;
    prepareDB(sortingenabled ? "جاري التصنيف ..." : "جاري البحث ...", true);
  }
}



function search(batala, onsuccessevent) {
  //let factorindex = batala.index(searchfactor);
  
  let searchinput = tokenize(toolbarsearchinput.innerHTML);
  
  datatableheadlayerscontainer.style.animationName = "fadeOutAnimation";
  datatableheadlayerscontainer.style.animationDuration = "0.25s";
  datatableheadlayerscontainer.style.animationFillMode = "forwards";
  
  batala.getAll().onsuccess = function(event) {
    let itemsdata = event.target.result;
    
    let eachitemhandling = function(itemdata) {
        if ((sortingenabled ? true : searchFound(itemdata, searchfactor, searchinput)) && !pageData.includes(itemdata)) {
            let fakeevent = {
              target: {
                result: {
                  value: itemdata
                }
              }
            }
            onsuccessevent(fakeevent);
            if (totalitemscount == -1) {
              totalitemscount = 1;
            } else {
              totalitemscount++;
            }
            //pageIndex = parseInt(Math.max(1, parseInt(Math.ceil(totalitemscount / pageItemsLimit)))) - 1;
            whenDataIsReady();
          }
    };
    
    if (sortingenabled) {
      sort(itemsdata, searchfactor);
    }
    
    itemsdata.forEach(eachitemhandling);
    
    if (totalitemscount === -1) {
      totalitemscount = 0;
      pageIndex = 0;
      whenDataIsReady();
    }
    
    for (let i = pageIndex; i < parseInt(Math.ceil(totalitemscount / pageItemsLimit)) - 1; i++) {
      rightbutton.onclick();
    }
    
    /*
    emptyPage();
  
    pageIndex = parseInt(Math.ceil(totalitemscount / pageItemsLimit)) - 1;
  
    if (searchenabled) {
      loadSearchPage(+1);
    } else {
      prepareDB("جاري تحميل البيانات ...");
    }
  
    pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.ceil(totalitemscount / pageItemsLimit));
    */
    
    
    
    loadingscreen.style.animationName = "fadeOutAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
    
  }
  
}


function sort(itemsdata, sortfactor) {
  itemsdata.sort(function(firstitem, seconditem) {
    
    if (sortfactor === "uid") {
      return - (firstitem["id"] - seconditem["id"]);
    } else if (sortfactor === "status") {
      let dateoffirst = firstitem["renewingstartdate"];
      let dateofsecond = seconditem["renewingstartdate"];
      
      let datestampoffirst = toTimestamp(dateoffirst);
      let datestampofsecond = toTimestamp(dateofsecond);
      
      let diff = datestampofsecond - datestampoffirst;
      
      if (diff < -1) {
        diff = -1;
      } else if (diff > 1) {
        diff = 1;
      }
      
      return diff;
    } else if (sortfactor.includes("date")) {
      let isEndDate = sortfactor === "renewingenddate";
      
      let isStartDate = sortfactor === "renewingstartdate";
      
      let dateoffirst = firstitem[isEndDate ? "renewingstartdate" : sortfactor];
      let dateofsecond = seconditem[isEndDate ? "renewingstartdate" : sortfactor];
      
      
      let datestampoffirst = toTimestamp(dateoffirst);
      let datestampofsecond = toTimestamp(dateofsecond);
      
      let diff = ((isStartDate) ? -1 : 1) * (datestampofsecond - datestampoffirst);
      
      if (diff < -1) {
        diff = -1;
      } else if (diff > 1) {
        diff = 1;
      }
      
      if (dateoffirst === undefined || dateoffirst === null || dateoffirst === "") {
        diff = -1;
      } else if (dateofsecond === undefined || dateofsecond === null || dateofsecond === "") {
        diff = 1;
      }
      
      return diff;
    } else if (firstitem[sortfactor] === undefined || seconditem[sortfactor] === undefined || firstitem[sortfactor] === null || seconditem[sortfactor] === null || firstitem[sortfactor] === "" || seconditem[sortfactor] === "") {
      return (firstitem[sortfactor] === undefined || firstitem[sortfactor] === null || firstitem[sortfactor] === "") ? -1 : ((seconditem[sortfactor] === undefined || seconditem[sortfactor] === null || seconditem[sortfactor] === "") ? 1 : 0);
    } else {
      return -1 * (firstitem[sortfactor].localeCompare(seconditem[sortfactor], ["ar", "fr"]));
    }
    
    return 0;
  });
}


function searchFound(itemdata, searchfactor, searchinput) {
  if (searchfactor == "uid") {
    return toUid(itemdata.id).includes(searchinput.toUpperCase());
  } else if (searchfactor == "status") {
    return getStatus(itemdata).includes(searchinput);
  } else if (searchfactor.includes("date")) {
    let datesearchinput = searchinput.replaceAll("/", "-");
    
    if (datesearchinput.split("-")[0].length == 2) datesearchinput = reverseDateStr(datesearchinput);
    
    let datedata = itemdata[searchfactor == "renewingenddate" ? "renewingstartdate" : searchfactor];
    
    return (searchfactor == "renewingenddate" ? addSixMonths(datedata) : datedata).includes(datesearchinput);
  } else {
    return itemdata[searchfactor].includes(searchinput);
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
          newstatusitem.style.backgroundColor = getStatusColor(getArabicDate(newrenewingstartdateiteminput.value));
      } else {
          newrenewingenddateitem.innerHTML = "إملئ تاريخ البداية أولا";
          
          newstatusitem.innerHTML = "إملئ تاريخ البداية أولا";
          newstatusitem.style.backgroundColor = "white";
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
      window.scrollTo(1000000, 0);
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
var lastClickedDataItem = "";
function whenDataItemClicked(itemid) {
  let dataitem = document.getElementById(itemid);
  
  let rowId = parseInt(itemid.split("_")[1]);
  
  let pageDataIndex = rowId + (searchenabled ? (pageItemsLimit*pageIndex) : 0);
  
  
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
    
    
    if (lastClickedDataItem != "") {
      lastClickedDataItem.style = "";
    }
    
    dataitem.style.backgroundColor = "black";
    dataitem.style.color = "white";
    
    lastClickedDataItem = dataitem;
    
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
      
      if (lastClickedDataItem != "" && itemtype != "status") {
        lastClickedDataItem.style = "";
      }
      
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
      
      
      typedNote = pageData[pageDataIndex].note;
      
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
      
      lasteditedpagedataindex = rowId;
      
      try {
        if (itemtype == "status" || itemtype == "renewingenddate") {
          newrenewingstartdateiteminput.focus();
        } else if (itemtype == "uid" || itemtype == "name") {
          newnameiteminput.focus();
          newnameiteminput.focus();
          window.scrollTo(10000, window.scrollY);
        } else {
          document.getElementById("new" + itemtype + "iteminput").focus();
        }
      } catch (ex) {
        // Do nothing ...
      }
      
      fabscontainer.style.animationName = "fadeInAnimation";
      fabscontainer.style.animationDuration = "0.25s";
      fabscontainer.style.animationFillMode = "forwards";
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
  
  
  
  if (sortingenabled) {
    toolbarsorticon.style.animationName = "fadeOutAnimation";
    toolbarsorticon.style.animationDuration = "0.2s";
    toolbarsorticon.style.animationFillMode = "forwards";
  
    setTimeout(function() {
      toolbarsorticon.style.animationName = "fadeInAnimation";
      toolbarsorticon.style.animationDuration = "0.2s";
      toolbarsorticon.style.animationFillMode = "forwards";
    }, 200);
  
    requestSearch(true);
  }
}

function whenTitleItemHovered(titleitemid) {
  let titleitem = document.getElementById(titleitemid);
  
  
}

function whenTitleItemDismissed(titleitemid) {
  let titleitem = document.getElementById(titleitemid);
  
  
}

function emptyPage(dontEmpty) {
  rowCount = -1;
  if (!searchenabled && !dontEmpty) {
    pageData = [];
    searchPages = [[]];
  }
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

var searchPages = [[]];

var typedNote = "";

var loadingData = false;

function prepareDB(loadingmsg, belowToolbar) {
  loadingData = true;
  
  loadingscreen.style.top = (belowToolbar ? toolbar.offsetHeight : 0) + "px;";
  
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
      store.createIndex('status', 'status', {multiEntry: true});
      store.createIndex('renewingstartdate', 'renewingstartdate', {multiEntry: true});
      store.createIndex('renewingenddate', 'renewingenddate', {multiEntry: true});
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
            if (rowCount < pageItemsLimit) {
              if (searchPages[pageIndex] === undefined || searchPages[pageIndex] === null) searchPages[pageIndex] = [];
              
              searchPages[pageIndex].push(itemdata.id);
              
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
        
        if (notificationEventWaiting != null) {
          messageFunc(notificationEventWaiting);
          
          notificationEventWaiting = null;
        }
        
        loadingData = false;
        
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
      
      newbirthplaceiteminput.innerHTML = "العطاف - عين الدفلى";
      whenTextChange('newbirthplaceiteminput', 'newbirthplaceitemhint');
      
      newcardissuingplaceiteminput.innerHTML = "العطاف - عين الدفلى";
      whenTextChange('newcardissuingplaceiteminput', 'newcardissuingplaceitemhint');
      
      newresidenceiteminput.innerHTML = "العطاف - عين الدفلى";
      whenTextChange('newresidenceiteminput', 'newresidenceitemhint');
  } else if (addingEnabled || modifyingEnabled || searchenabled) {
    
      newitemnamechecked = false;
      
      if (!searchenabled) {
        newitemsbar.innerHTML = '';
        realfabtext.innerHTML = 'إضافة زبون جديد';
        realfabicon.innerHTML = 'person_add';
      }
      
      
      if (modifyingEnabled) datatablebody.rows[lasteditedrowindex].innerHTML = lasteditedrowhtml;
      
      
      
      if (searchenabled && !modifyingEnabled) {
        toolbarsearchfield.style.animationName = "fadeOutAnimation";
        toolbarsearchfield.style.animationDuration = "0.2s";
        toolbarsearchfield.style.animationFillMode = "forwards";
        
        
        realfabtext.innerHTML = 'إضافة زبون جديد';
        realfabicon.innerHTML = 'person_add';
        
        if (sortingenabled) {
          toolbarsearchicon.style.animationName = "enablingActionButtonAnimation";
          toolbarsearchicon.style.animationDuration = "0.2s";
          toolbarsearchicon.style.animationFillMode = "forwards";
          toolbarsearchbutton.style.pointerEvents = "auto";
          
          sortingenabled = false;
        } else {
          toolbarsorticon.style.animationName = "enablingActionButtonAnimation";
          toolbarsorticon.style.animationDuration = "0.2s";
          toolbarsorticon.style.animationFillMode = "forwards";
          toolbarsortbutton.style.pointerEvents = "auto";
        }
        
        emptyPage();
        
        pageData = [];
        searchPages = [[]];
        
        if (searchfactor !== "unselected") document.getElementById("tabletitle" + searchfactor + "item").style = undefined;
        
        pageIndex = -1;
        
        totalitemscount = 0;

        prepareDB("جاري تحميل البيانات ...");
        
        searchenabled = false;
      }
      
      modifyingEnabled = false;
      addingEnabled = false;
      
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

var newitemnamechecked = false;
donefab.onclick = function() {
  // create a new connection  or new transaction
  const trans = farhi_rsdb.transaction('batala', 'readwrite');  
  // Save Names object using variable  
  const batala = trans.objectStore('batala');
  
  let checkuser = (localStorage.getItem("checkuser") === undefined || localStorage.getItem("checkuser") === null || localStorage.getItem("checkuser") === "") ? 'true' : localStorage.getItem("checkuser");
  
  if (!newitemnamechecked && checkuser == "true") {
      
      loadingscreen.style.animationName = "fadeInAnimation";
      loadingscreen.style.animationDuration = "0.25s";
      loadingscreen.style.animationFillMode = "forwards";
  
      loadingtext.innerHTML = "جاري التحقق ...";
      
      batala.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;
    
      if (cursor) {
        if (cursor.value.name.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") === newnameiteminput.innerHTML.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") || cursor.value.nin.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") === newniniteminput.innerHTML.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") || cursor.value.worknumber.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") === newworknumberiteminput.innerHTML.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") || cursor.value.phonenumber.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") === newphonenumberiteminput.innerHTML.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "")) {
          loadingscreen.style.animationName = "fadeOutAnimation";
          loadingscreen.style.animationDuration = "0.25s";
          loadingscreen.style.animationFillMode = "forwards";
          newitemnamechecked = true;
          
          
          messageboxicon.innerHTML = "warning";
    
          messageboxtext.innerHTML = modifyingEnabled ? "لم يتم تغيير أي معلومة لهذا الزبون، إذا كنت تريد المتابعة على أي حال إضغط تم مرة أخرى" : "واحدة من معلومات هذا الزبون الجديد (إسمه، رقم عمله، رقم تعريفه أو رقم هاتفه) موجود مسبقا في التطبيق، إذا كنت تريد إضافته على أي حال إضغط على تم";
    
          messagebox.style.animationName = "fadeInAnimation";
          messagebox.style.animationDuration = "0.25s";
          messagebox.style.animationFillMode = "forwards";
    
          clearTimeout(messageboxtimer);
    
          messageboxtimer = setTimeout(function() {
            messagebox.style.animationName = "fadeOutAnimation";
            messagebox.style.animationDuration = "0.25s";
            messagebox.style.animationFillMode = "forwards";
          }, 250 + 10000);
        } else {
          cursor.continue();
        }
      
      } else {
        loadingscreen.style.animationName = "fadeOutAnimation";
        loadingscreen.style.animationDuration = "0.25s";
        loadingscreen.style.animationFillMode = "forwards";
        newitemnamechecked = true;
        donefab.onclick();
      }
    }
  
    return;
  }
  
  newitemnamechecked = false;
    
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
  residencetokenized: tokenize(newresidenceiteminput.innerHTML, true),
  note: typedNote
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
      
      if (!searchenabled) {
        realfabtext.innerHTML = 'إضافة زبون جديد';
        realfabicon.innerHTML = 'person_add';
      }
      
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
          
          //if (pageIndex === parseInt(Math.ceil(totalitemscount / pageItemsLimit)) - 1 && rowCount < pageItemsLimit) addRow(totalitemscount, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
          
          emptyPage();

          prepareDB("جاري تحميل البيانات ...");

          
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
          pageData[lasteditedpagedataindex + (searchenabled ? (pageIndex * pageItemsLimit) : 0)] = itemdata;
          
          modifyingEnabled = false;
          
          whenDataIsReady();
          
          
          document.getElementById("tableuiditemat_" + lasteditedpagedataindex).innerHTML = toUid(itemdata.id).replace('#', '');
          
          if (toUid(itemdata.id).includes('#')) document.getElementById("tableuiditemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tableuiditemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablenameitemat_" + lasteditedpagedataindex).innerHTML = itemdata.name.replace('#', '');
          
          if (itemdata.name.includes('#')) document.getElementById("tablenameitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablenameitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablestatusitemat_" + lasteditedpagedataindex).innerHTML = getStatus(itemdata);
          
          document.getElementById("tablestatusitemat_" + lasteditedpagedataindex).style.backgroundColor = getStatusColor(getArabicDate(itemdata.renewingstartdate));
      
          document.getElementById("tablerenewingstartdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.renewingstartdate);
    
          document.getElementById("tablerenewingenddateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(addSixMonths(itemdata.renewingstartdate));
      
          document.getElementById("tablephonenumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.phonenumber.replace('#', '');
          
          if (itemdata.phonenumber.includes('#')) document.getElementById("tablephonenumberitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablephonenumberitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tableworknumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.worknumber.replace('#', '');
          
          if (itemdata.worknumber.includes('#')) document.getElementById("tableworknumberitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tableworknumberitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tableninitemat_" + lasteditedpagedataindex).innerHTML = itemdata.nin.replace('#', '');
          
          if (itemdata.nin.includes('#')) document.getElementById("tableninitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tableninitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablecardnumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.cardnumber.replace('#', '');
          
          if (itemdata.cardnumber.includes('#')) document.getElementById("tablecardnumberitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablecardnumberitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablecardissuingdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.cardissuingdate);
      
          document.getElementById("tablecardexpiredateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.cardexpiredate);
      
          document.getElementById("tablecardissuingplaceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.cardissuingplace.replace('#', '');
          
          if (itemdata.cardissuingplace.includes('#')) document.getElementById("tablecardissuingplaceitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablecardissuingplaceitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablebirthdateitemat_" + lasteditedpagedataindex).innerHTML = getArabicDate(itemdata.birthdate);
      
          document.getElementById("tablebirthplaceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.birthplace.replace('#', '');
          
          if (itemdata.birthplace.includes('#')) document.getElementById("tablebirthplaceitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablebirthplaceitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tablebirthcertificatenumberitemat_" + lasteditedpagedataindex).innerHTML = itemdata.birthcertificatenumber.replace('#', '');
          
          if (itemdata.birthcertificatenumber.includes('#')) document.getElementById("tablebirthcertificatenumberitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tablebirthcertificatenumberitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
      
          document.getElementById("tableresidenceitemat_" + lasteditedpagedataindex).innerHTML = itemdata.residence.replace('#', '');
          
          if (itemdata.residence.includes('#')) document.getElementById("tableresidenceitemat_" + lasteditedpagedataindex).classList.add("redflageditem");
          else document.getElementById("tableresidenceitemat_" + lasteditedpagedataindex).classList.remove("redflageditem");
          
          
          if (searchenabled) {
            realfabtext.innerHTML = 'إلغاء';
            realfabicon.innerHTML = 'close';
          }
          
          window.scrollTo(10000, window.scrollY);
          
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
    
    return date.addMonths(6).toISOString().split("T")[0];
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
  if (isoDate === undefined || isoDate === null || isoDate === "") return "";
  
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

function getISODate(arabicDate) {
  const months = {
    "جانفي": 0, "فيفري": 1, "مارس": 2, "أفريل": 3, "ماي": 4, "جوان": 5,
    "جويلية": 6, "أوت": 7, "سبتمبر": 8, "أكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11
  };

  const days = {
    "الأحد": 0, "الاثنين": 1, "الثلاثاء": 2, "الأربعاء": 3, "الخميس": 4, "الجمعة": 5, "السبت": 6
  };

  // Split the Arabic date string
  const parts = arabicDate.split(' ');

  // Retrieve day, month, and year from the Arabic date string
  const dayOfWeek = parts[0];
  const day = parseInt(parts[1]);
  const month = parts[2];
  const year = parseInt(parts[3]);

  // Retrieve the month index from the months object
  const monthIndex = months[month];

  // Retrieve the day index from the days object
  const dayIndex = days[dayOfWeek];

  // Create a new Date object using the extracted values
  const date = new Date(year, monthIndex, day);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null; // Return null for an invalid date
  }

  // Get the ISO date string from the Date object
  const isoDate = date.toISOString().split('T')[0]; // Extracting only the date part

  return isoDate;
}


function reverseDateStr(datestr) {
    if (datestr === undefined || datestr === null || datestr === "") return "";
    
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


function getStatusColor(renewingstartdatearabic) {
  let renewingstartdate = getISODate(renewingstartdatearabic);
  
  let diffdays = dateDiffInDays(new Date(), new Date(addSixMonths(renewingstartdate)));
  let diffdaysbeforestart = dateDiffInDays(new Date(), new Date(renewingstartdate));
    
  if (diffdaysbeforestart > 0) {
    return "#C1C1C1";
  } else if (diffdays < 0) {
    return "#FF5050";
  } else if (diffdays < 10) {
    return "#FF6600";
  } else {
    return "#56FF55";
  }

}


rightbutton.onclick = function() {
  emptyPage();
  
  pageIndex++;
  
  if (searchenabled) {
    loadSearchPage(+1);
  } else {
    prepareDB("جاري تحميل الصفحة الموالية ...");
  }
  
  pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.ceil(totalitemscount / pageItemsLimit));
}

leftbutton.onclick = function() {
  emptyPage();
  
  pageIndex--;
  
  if (searchenabled) {
    loadSearchPage(-1);
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
      newrenewingstartdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newrenewingstartdateiteminput") {
      newphonenumberiteminput.focus();
      newphonenumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newphonenumberiteminput") {
      newworknumberiteminput.focus();
      newworknumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newworknumberiteminput") {
      newniniteminput.focus();
      newniniteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newniniteminput") {
      newcardnumberiteminput.focus();
      newcardnumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardnumberiteminput") {
      newcardissuingdateiteminput.focus();
      newcardissuingdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardissuingdateiteminput") {
      newcardexpiredateiteminput.focus();
      newcardexpiredateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardexpiredateiteminput") {
      newcardissuingplaceiteminput.focus();
      newcardissuingplaceiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardissuingplaceiteminput") {
      newbirthdateiteminput.focus();
      newbirthdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthdateiteminput") {
      newbirthplaceiteminput.focus();
      newbirthplaceiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthplaceiteminput") {
      newbirthcertificatenumberiteminput.focus();
      newbirthcertificatenumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthcertificatenumberiteminput") {
      newresidenceiteminput.focus();
      newresidenceiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newresidenceiteminput") {
      if ((document.getElementById('newnameiteminput') !== undefined ? (document.getElementById('newnameiteminput') !== null ? document.getElementById('newnameiteminput').innerHTML : "") : "").replaceAll(" ", "") !== "" && (document.getElementById('newrenewingstartdateiteminput') !== undefined ? (document.getElementById('newrenewingstartdateiteminput') !== null ? document.getElementById('newrenewingstartdateiteminput').value : "") : "").replaceAll(" ", "") !== "") {
        donefab.click();
      } else {
        try {
          newnameiteminput.focus();
          window.scrollTo(10000, window.scrollY);
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
    
    if (addingEnabled) window.scrollTo(window.scrollX, 0);
    
  } else if (event.key === "Escape") {
    // If the user presses the "Escape" key on the keyboard
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    
    let _scrollY = window.scrollY;
    
    if (newiteminputid == "newnameiteminput") {
      realfab.click();
    } else if (newiteminputid == "newrenewingstartdateiteminput") {
      newnameiteminput.focus();
      newnameiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newphonenumberiteminput") {
      newrenewingstartdateiteminput.focus();
      newrenewingstartdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newworknumberiteminput") {
      newphonenumberiteminput.focus();
      newphonenumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newniniteminput") {
      newworknumberiteminput.focus();
      newworknumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardnumberiteminput") {
      newniniteminput.focus();
      newniniteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardissuingdateiteminput") {
      newcardnumberiteminput.focus();
      newcardnumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardexpiredateiteminput") {
      newcardissuingdateiteminput.focus();
      newcardissuingdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newcardissuingplaceiteminput") {
      newcardexpiredateiteminput.focus();
      newcardexpiredateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthdateiteminput") {
      newcardissuingplaceiteminput.focus();
      newcardissuingplaceiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthplaceiteminput") {
      newbirthdateiteminput.focus();
      newbirthdateiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newbirthcertificatenumberiteminput") {
      newbirthplaceiteminput.focus();
      newbirthplaceiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    } else if (newiteminputid == "newresidenceiteminput") {
      newbirthcertificatenumberiteminput.focus();
      newbirthcertificatenumberiteminput.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
    
    if (addingEnabled) window.scrollTo(window.scrollX, 0);
    
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



var searchpageloadingtimer;
function loadSearchPage(delta) {
  let currentPageItems = [];
  
  loadingscreen.style.animationName = "fadeInAnimation";
  loadingscreen.style.animationDuration = "0.25s";
  loadingscreen.style.animationFillMode = "forwards";
  loadingtext.innerHTML = delta == +1 ? "جاري تحميل الصفحة الموالية ..." : "جاري تحميل الصفحة السابقة ...";
  
  
  clearTimeout(searchpageloadingtimer);
  
  searchpageloadingtimer = setTimeout(function() {
  
  for (let i = pageIndex * pageItemsLimit; i < (pageIndex+1) * pageItemsLimit; i++) {
    if (i < 0 || i >= pageData.length) break;
    let itemdata = pageData[i];
    /*
    let jumpfirstiteration = false;
    for (let pi = 0; pi < searchPages.length; pi++) {
      if (pi == pageIndex) continue;
      
      if (searchPages[pi] === undefined || searchPages[pi] === null) {
        //jumpfirstiteration = true;
        //break;
        continue;
      } else if (searchPages[pi].includes(itemdata.id)) {
        jumpfirstiteration = true;
        break;
      }
    }
    
    if (jumpfirstiteration) continue;
    */
    currentPageItems.push(itemdata.id);
    
    addRow(itemdata.id, itemdata.name, getStatus(itemdata), getArabicDate(itemdata.renewingstartdate), getArabicDate(addSixMonths(itemdata.renewingstartdate)), itemdata.phonenumber, itemdata.worknumber, itemdata.nin, itemdata.cardnumber, getArabicDate(itemdata.cardissuingdate), getArabicDate(itemdata.cardexpiredate), itemdata.cardissuingplace, getArabicDate(itemdata.birthdate), itemdata.birthplace, itemdata.birthcertificatenumber, itemdata.residence, true);
    
    if (currentPageItems.length == pageItemsLimit) break;
  }
  
  searchPages[pageIndex] = currentPageItems;
      
      //console.log(pageIndex)
  
  loadingscreen.style.animationName = "fadeOutAnimation";
  loadingscreen.style.animationDuration = "0.25s";
  loadingscreen.style.animationFillMode = "forwards";
  
  whenDataIsReady();
  
  }, 250);
}


function toTimestamp(isoDate) {
  // Split the ISO date string into year, month, and day
  const [year, month, day] = isoDate.split('-').map(Number);

  // Create a new Date object using the provided year, month, and day
  const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript Dates

  // Get the timestamp in milliseconds
  const timestamp = date.getTime();

  return timestamp;
}


function whenSearchInputKeyDown(event) {
    // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
      
    toolbarsearchbutton.click();
  }
}



toolbarextoxlsxbutton.onclick = function() {
  if (window.confirm('هل تريد بالفعل حفظ نسخة من قاعدة البيانات الخاصة بالتطبيق كملف Excel ؟')) {
    saveWholeDatabaseAsXlsx();
  }
}


function saveWholeDatabaseAsXlsx() {
  
  let redFlagedAddresses = [];
  
  let availableColumns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
  
  let dateColumns = [availableColumns[3], availableColumns[5], availableColumns[6], availableColumns[12], availableColumns[13]];
  
  let onfinish = function() {
    // Convert the data to a worksheet
    let ws = XLSX.utils.aoa_to_sheet(xlsxData);
    
    // Styling...
    styleXlsx(ws, xlsxData.length, redFlagedAddresses, dateColumns);

    // Create a workbook
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Add the worksheet to the workbook

    // Generate the Excel file
    XLSX.writeFile(wb, 'farhi_rs_batala_wholedb_backup_at_[' + new Date().toISOString().split('T')[0] + '].xlsx'); // Download the file as 'farhi_rs_batala_wholedb.xlsx'
    
    
    
    loadingscreen.style.animationName = "fadeOutAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
    
    messageboxicon.innerHTML = "done_all";
    
    messageboxtext.innerHTML = "تمت صناعة النسخة بنجاح، يمكنك تحميلها الآن";
    
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
  
  let whenSortFactorNotSelected = function() {
    loadingscreen.style.animationName = "fadeOutAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
    
    messageboxicon.innerHTML = "close";
    
    messageboxtext.innerHTML = "زر التصنيف مفعل، إختر معيار التصنيف أولا حتى تتمكن من صناعة ملف Excel";
    
    messagebox.style.animationName = "fadeInAnimation";
      
    messagebox.style.animationDuration = "0.25s";
    messagebox.style.animationFillMode = "forwards";
    
    clearTimeout(messageboxtimer);
    
    messageboxtimer = setTimeout(function() {
      messagebox.style.animationName = "fadeOutAnimation";
      messagebox.style.animationDuration = "0.25s";
      messagebox.style.animationFillMode = "forwards";
    }, 250 + 3500);
  }
  
  loadingscreen.style.top = "0px";
  loadingscreen.style.animationName = "fadeInAnimation";
  loadingscreen.style.animationDuration = "0.25s";
  loadingscreen.style.animationFillMode = "forwards";
  
  loadingtext.innerHTML = "جاري تحضير الملف ...";
  
  let xlsxData = [[
    "مكان الإقامة",
    "رقم شهادة الميلاد",
    "مكان الميلاد",
    "تاريخ الميلاد",
    "بلدية الإصدار",
    "تاريخ نهاية صلحية البطاقة",
    "تاريخ إصدار البطاقة",
    "رقم البطاقة",
    "الرقم البيومتري لبطاقة التعريف الوطنية | بطاقة مماثلة",
    "رقم طلب العمل",
    "رقم الهاتف",
    "تاريخ نهاية التجديد",
    "تاريخ بداية التجديد",
    "إسم الزبون",
    "المعرف الفريد"
  ],
  []
  ];
  
  // create a new connection  or new transaction
  const trans = farhi_rsdb.transaction('batala', 'readwrite');  
  // Save Names object using variable  
  const batala = trans.objectStore('batala');
  
  let count = 0;
  
  let rowCount = 1;
  let onsuccess = function(event) {
      let cursor = event.target.result;
      let xlsxRowData = [];
      
      let rowAddress = (count - rowCount) + 3;
      
      if (cursor) {
        let itemdata = cursor.value;
        
        if (itemdata.residence.includes('#')) redFlagedAddresses.push(availableColumns[0] + rowAddress);
        if (itemdata.birthcertificatenumber.includes('#')) redFlagedAddresses.push(availableColumns[1] + rowAddress);
        if (itemdata.birthplace.includes('#')) redFlagedAddresses.push(availableColumns[2] + rowAddress);
        if (itemdata.cardissuingplace.includes('#')) redFlagedAddresses.push(availableColumns[4] + rowAddress);
        if (itemdata.cardnumber.includes('#')) redFlagedAddresses.push(availableColumns[7] + rowAddress);
        if (itemdata.nin.includes('#')) redFlagedAddresses.push(availableColumns[8] + rowAddress);
        if (itemdata.worknumber.includes('#')) redFlagedAddresses.push(availableColumns[9] + rowAddress);
        if (itemdata.phonenumber.includes('#')) redFlagedAddresses.push(availableColumns[10] + rowAddress);
        if (itemdata.name.includes('#')) redFlagedAddresses.push(availableColumns[13] + rowAddress);
        
        xlsxRowData = [
          unescapeHtml(itemdata.residence.replace('#', '')),
          unescapeHtml(itemdata.birthcertificatenumber.replace('#', '')),
          unescapeHtml(itemdata.birthplace.replace('#', '')),
          unescapeHtml(itemdata.birthdate).replaceAll("-", "/"),
          unescapeHtml(itemdata.cardissuingplace.replace('#', '')),
          unescapeHtml(itemdata.cardexpiredate).replaceAll("-", "/"),
          unescapeHtml(itemdata.cardissuingdate).replaceAll("-", "/"),
          unescapeHtml(itemdata.cardnumber.replace('#', '')),
          unescapeHtml(itemdata.nin.replace('#', '')),
          unescapeHtml(itemdata.worknumber.replace('#', '')),
          unescapeHtml(itemdata.phonenumber.replace('#', '')),
          unescapeHtml(addSixMonths(itemdata.renewingstartdate)).replaceAll("-", "/"),
          unescapeHtml(itemdata.renewingstartdate).replaceAll("-", "/"),
          unescapeHtml(itemdata.name.replace('#', '')),
          unescapeHtml(toUid(itemdata.id))
        ];
        
        xlsxData.splice(2, 0, xlsxRowData); // Insert the new xlsxRowData at the 2nd index
        
        rowCount++;
        if (cursor.continue) cursor.continue();
      } else {
        onfinish();
      }
  };
  
  if (sortingenabled) {
    
    if (searchfactor === "" || searchfactor === "unselected") {
      whenSortFactorNotSelected();
      return;
    }
    
    count = pageData.length;
    
    pageData.forEach(function(itemdata) {
      let fakeevent = {
        target: {
          result: {
            value: itemdata
          }
        }
      };
            
      onsuccess(fakeevent);
    });
    
    let fakeendevent = {
      target: {
        result: false
      }
    };
    onsuccess(fakeendevent);
  } else {
    let batalacount = batala.count();
        
    batalacount.onsuccess = function() {
      count = batalacount.result;
      batala.openCursor().onsuccess = onsuccess;
    }
  }
  
}


function styleXlsx(worksheet, totalNumberOfRows, redFlagedAddresses, dateColumns) {
  const totalColumns = 15; // Total columns in the row
  for (let rowNumber = 1; rowNumber <= totalNumberOfRows; rowNumber++) {
    // Set style for the entire row
    const rowAddresses = Array.from({ length: totalColumns }, (_, i) => XLSX.utils.encode_cell({ r: rowNumber - 1, c: i }));
    // Apply style to each cell in the row
    rowAddresses.forEach(address => {
      if (worksheet[address] === undefined || worksheet[address] === null) return;
      
      let rowStyle = {
        font: {
          bold: rowNumber === 1, // Make the font bold for the entire row
          color: {
            rgb: (rowNumber === 1 || redFlagedAddresses.includes(address)) ? "FFFFFF" : "000000"
          }
        },
        alignment: {
          // Define alignment properties
          wrapText: true, // Enable text wrapping
          vertical: "center",
          horizontal: (rowNumber === 1 || address.includes('O')) ? "center" : "right"
        },
        fill: (rowNumber === 1 || redFlagedAddresses.includes(address)) ? {
          fgColor: {
            rgb: redFlagedAddresses.includes(address) ? "FF0000" : "2196F3"
          }
        } : null
      };
      
      worksheet[address].s = rowStyle;
      
      const columnWidth = worksheet[address].v.length;
      worksheet[address].w = columnWidth;
    });
  }
}


function unescapeHtml(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || '';
}


function whenNewUidItemGetClicked() {
  dialogcontainer.style.animationName = "fadeInAnimation";
  dialogcontainer.style.animationDuration = "0.25s";
  dialogcontainer.style.animationFillMode = "forwards";
  
  dialogboxinput.value = typedNote;
  
  dialogboxinput.focus();
  
  let dismissDialog = function() {
    dialogcontainer.style.animationName = "fadeOutAnimation";
    dialogcontainer.style.animationDuration = "0.25s";
    dialogcontainer.style.animationFillMode = "forwards";
  }
  
  dialogokbutton.onclick = function() {
    dismissDialog();
    typedNote = dialogboxinput.value;
  }
  
  dialogcancelbutton.onclick = dismissDialog;
  
  //dialogcontainer.onclick = dismissDialog;
}

function whenDataUidItemGetRightClicked(event, rowId) {
    
  event.preventDefault();
    
  let pageDataIndex = rowId + (searchenabled ? (pageItemsLimit*pageIndex) : 0);
  
  if (pageData[pageDataIndex] !== undefined || pageData[pageDataIndex] !== null) if (pageData[pageDataIndex].note !== undefined || pageData[pageDataIndex].note !== null || pageData[pageDataIndex].note !== "") showDialog("ملاحظتك السابقة عن الزبون : \n" + (pageData[pageDataIndex].note === "" ? "لا يوجد" : pageData[pageDataIndex].note), "info", "تم");
}


function messageFunc(event) {
  const receivedData = event.data; // Data received from the Service Worker
  if (receivedData && receivedData.message) {
    const name = receivedData.message;
    // Process the received message from the Service Worker
    toolbarsearchinput.innerHTML = name;
    whenTextChange('toolbarsearchinput', 'toolbarsearchhint');
    if (!searchenabled) {
      toolbarsearchbutton.onclick();
      whenTitleItemClicked('tabletitlenameitem');
    }
    toolbarsearchbutton.onclick();
  }
}

var notificationEventWaiting = null;
// Add an event listener to receive messages from the Service Worker
navigator.serviceWorker.addEventListener('message', event => {
  if (! loadingData) {
    messageFunc(event);
  } else {
    notificationEventWaiting = event;
  }
});

var lastGotoMessage = "";
toolbargotobutton.onclick = function() {
  let max = Math.max(1, parseInt(Math.ceil(totalitemscount / pageItemsLimit)));
  
  let typedPageIndexStr = window.prompt(lastGotoMessage + "أكتب رقم الصفحة المحصور بين 1 و " + max);
  
  let typedPageIndex = parseInt(typedPageIndexStr);
    
  if (isNaN(typedPageIndex) || (typedPageIndex < 1 || typedPageIndex > max)) {
    if (typedPageIndexStr !== null) if (typedPageIndexStr.replaceAll(' ', '') !== '') {
      lastGotoMessage = isNaN(typedPageIndex) ? "رقم الصفحة المعطى سابقا غير مكتوب بشكل صحيح\n" : "رقم الصفحة المعطى سابقا خارج النطاق\n";
      window.alert(lastGotoMessage);
    }
  } else {
    lastGotoMessage = "";
    
    if (searchenabled) {
      
    let factor = typedPageIndex > pageIndex ? +1 : -1;
    
    if (factor === +1) {
      for (let i = pageIndex; i < typedPageIndex - 1; i++) {
        rightbutton.onclick();
      }
    } else {
      for (let i = pageIndex; i > typedPageIndex - 1; i--) {
        leftbutton.onclick();
      }
    }
    
    } else {
      
    
    emptyPage();
    
    let factor = typedPageIndex > pageIndex ? +1 : -1;
  
    pageIndex = typedPageIndex - 1;
  
    if (searchenabled) {
      loadSearchPage(factor);
    } else {
      prepareDB("جاري تحميل الصفحة المطلوبة ...");
    }
  
    pageindexhint.innerHTML = "الصفحة " + (pageIndex + 1) + " من " + parseInt(Math.ceil(totalitemscount / pageItemsLimit));
    }
  }
  
  
}


let pdfFrame = null;
function whenDataNameItemGetRightClicked(event, rowId) {
  
  event.preventDefault();
  
  let pageDataIndex = rowId + (searchenabled ? (pageItemsLimit*pageIndex) : 0);
    
  let itemdata = pageData[pageDataIndex];
  
  if (pdfFrame === null) {
    // Create a new iframe element
    pdfFrame = document.createElement('iframe');

    // Set attributes for the iframe
    pdfFrame.setAttribute('width', '1050px'); // Set the width as required
    pdfFrame.setAttribute('height', '1485px'); // Set the height as required
    pdfFrame.setAttribute('frameborder', '0'); // Optional: Set frame border
    
    pdfFrame.setAttribute('class', 'printable');

    // Set the source of the iframe to load an HTML file
    pdfFrame.src = './externalcontent/receipt.html';
  
    pdfFrame.style = "position: fixed; left: -100%; top: -100%;";
      
    document.body.appendChild(pdfFrame);
  } else {
    document.body.removeChild(pdfFrame);
    try {
      fill();
    } catch (ex) {}
    document.body.appendChild(pdfFrame);
  }
    
  function fill() {
    pdfFrame.contentWindow.document.getElementById("tableuiditem").innerHTML = toUid(itemdata.id);
    pdfFrame.contentWindow.document.getElementById("tablenameitem").innerHTML = unescapeHtml(itemdata.name).replace('#', '');
    pdfFrame.contentWindow.document.getElementById("tablerenewingstartdateitem").innerHTML = getArabicDate(itemdata.renewingstartdate);
    pdfFrame.contentWindow.document.getElementById("tableninitem").innerHTML = unescapeHtml(itemdata.nin).replace('#', '');
    pdfFrame.contentWindow.document.getElementById("tablephonenumberitem").innerHTML = unescapeHtml(itemdata.phonenumber).replace('#', '');
    pdfFrame.contentWindow.document.getElementById("tableworknumberitem").innerHTML = unescapeHtml(itemdata.worknumber).replace('#', '');
    pdfFrame.contentWindow.document.getElementById("tableresidenceitem").innerHTML = unescapeHtml(itemdata.residence).replace('#', '');
    
    let today = new Date();
    pdfFrame.contentWindow.document.getElementById("datemessage").innerHTML = "تم تسليم هذا الوصل بيوم " + getArabicDate(today) + " بتوقيت " + today.toLocaleTimeString();
  }
  
  pdfFrame.onload = function() {
    try {
      fill();
    } catch (ex) {}
    pdfFrame.contentWindow.print();
    /*
    setTimeout(function() {
      document.body.removeChild(pdfFrame);
    }, 1000);
    */
  }
  
  //html2pdf(pdfFrame);
}



let yesterdayObject = new Date();
yesterdayObject.setDate(yesterdayObject.getDate() - 1);
    
localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_xlsxbackup") === undefined || localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_xlsxbackup") === null || localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_xlsxbackup") === "" ? '' : localStorage.removeItem(yesterdayObject.toISOString().split("T")[0] + "_xlsxbackup");
    
let canxlsxbackup = localStorage.getItem(new Date().toISOString().split("T")[0] + "_xlsxbackup");

if (canxlsxbackup === undefined || canxlsxbackup === null || canxlsxbackup === "") canxlsxbackup = "true";

if (canxlsxbackup == "true") {
  localStorage.setItem(new Date().toISOString().split("T")[0] + "_xlsxbackup", "false");
  
  setTimeout(function() {
    saveWholeDatabaseAsXlsx();
  }, 1000);
}


let dontsavetheme = false;
let welcomeTimer;
const changetheme = function() {
  let theme = (localStorage.getItem("theme") === undefined || localStorage.getItem("theme") === null || localStorage.getItem("theme") === "") ? 'dark' : localStorage.getItem("theme");
  
  if (theme === (dontsavetheme ? 'light' : 'dark')) {
    theme = 'light';
    document.documentElement.style.animationName = "bodyLightThemeAnimation";
    document.getElementById('toolbar').style.animationName = "toolbarLightThemeAnimation";
    toolbarthemeicon.innerHTML = "light_mode";
    
    function showMsg() {
      showMessage("تم تفعيل الوضع العادي", "light_mode", 5000);
    }
    
    clearTimeout(welcomeTimer);
    
    if (dontsavetheme) {
      welcomeTimer = setTimeout(showMsg, 500 + 10000);
    } else {
      showMsg();
    }
  } else {
    theme = 'dark';
    document.documentElement.style.animationName = "bodyDarkThemeAnimation";
    document.getElementById('toolbar').style.animationName = "toolbarDarkThemeAnimation";
    toolbarthemeicon.innerHTML = "dark_mode";
    
    function showMsg() {
      showMessage("تم تفعيل الوضع الليلي", "dark_mode", 5000);
    }
    
    clearTimeout(welcomeTimer);
    
    if (dontsavetheme) {
      welcomeTimer = setTimeout(showMsg, 500 + 10000);
    } else {
      showMsg();
    }
  }
  
  document.documentElement.style.animationDuration = "0.25s";
  document.documentElement.style.animationFillMode = "forwards";
  
  document.getElementById('toolbar').style.animationDuration = "0.25s";
  document.getElementById('toolbar').style.animationFillMode = "forwards";
  
  if (!dontsavetheme) localStorage.setItem("theme", theme);
}

dontsavetheme = true;
changetheme();
dontsavetheme = false;

toolbarthemebutton.onclick = changetheme;


toolbarcheckuserbutton.onclick = function() {
  let checkuser = (localStorage.getItem("checkuser") === undefined || localStorage.getItem("checkuser") === null || localStorage.getItem("checkuser") === "") ? 'true' : localStorage.getItem("checkuser");
  
  if (checkuser == "true") {
    localStorage.setItem("checkuser", "false");
    toolbarcheckusericon.innerHTML = "groups";
    showMessage("تم تعطيل وضع التأكد قبل الإضافة أو التعديل، لن يتم تنبيهك بوجود الزبون مسبقا مجددا", "toggle_off", 10000);
  } else {
    localStorage.setItem("checkuser", "true");
    toolbarcheckusericon.innerHTML = "conditions";
    showMessage("تم تفعيل وضع التأكد قبل الإضافة أو التعديل", "toggle_on", 10000);
  }
}

let checkuser = (localStorage.getItem("checkuser") === undefined || localStorage.getItem("checkuser") === null || localStorage.getItem("checkuser") === "") ? 'true' : localStorage.getItem("checkuser");
  
  if (checkuser == "false") {
    toolbarcheckusericon.innerHTML = "groups";
    showMessage("تم تعطيل وضع التأكد قبل الإضافة أو التعديل، لن يتم تنبيهك بوجود الزبون مسبقا مجددا", "toggle_off", 10000);
  } else {
    toolbarcheckusericon.innerHTML = "conditions";
    showMessage("تم تفعيل وضع التأكد قبل الإضافة أو التعديل", "toggle_on", 10000);
  }
  
  
  
  function whenPaste(event, inputid) {
    let input = document.getElementById(inputid);
    /*
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');
    
    postedText = unescapeHtml(postedText);
    
    navigator.clipboard.writeText(postedText);
    */
    /*
    // Prevents the default paste action
    event.preventDefault();

    // Get the text content from the clipboard
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');

    // Replace the input field value with the plain text
    
    let currentPositionStart = input.selectionStart;
    let currentPositionEnd = input.selectionEnd;
    
    console.log(currentPositionStart)
    console.log(currentPositionEnd)
    
    let newvalue = (input.tagName.toLowerCase() == "input") ? input.value : input.innerHTML;
    if (currentPositionStart != currentPositionEnd) {
      newvalue = newvalue.replace(newvalue.substring(currentPositionStart, currentPositionEnd+1), "");
      
      currentPositionStart = currentPositionEnd;
    }
    
    newvalue = newvalue.substring(currentPositionEnd) + pastedText + newvalue.substring(0, currentPositionStart+1);
    
    if (input.tagName.toLowerCase() == "input") {
      input.value = newvalue;
    } else {
      input.innerHTML = newvalue;
    }
    
    try {
      whenTextChange(inputid, inputid.replaceAll("input", "") + "hint");
    } catch (ex) {
      // Do nothing...
    }
    
    */
    
    
    showMessage("تم لصق النص بنجاح", "content_paste", 2500);
  }
  
  
  // I just finally wrote this function after duplicating this line alot so dont blame me if its not used alot in the program
  function showMessage(msg, icn, dur) {
    messageboxicon.innerHTML = icn;
    
    messageboxtext.innerHTML = msg;
    
    messagebox.style.animationName = "fadeInAnimation";
      
    messagebox.style.animationDuration = "0.25s";
    messagebox.style.animationFillMode = "forwards";
    
    clearTimeout(messageboxtimer);
    
    messagedialogbuttonslayout.style.width = "0px";
    messagedialogbuttonslayout.style.height = "0px";
    messagedialogbuttonslayout.style.opacity = "0";
    messagedialogbuttonslayout.style.pointerEvents = "none";
    messagedialogbuttonslayout.style.marginTop = "0px";
    
    messageboxtimer = setTimeout(function() {
      messagebox.style.animationName = "fadeOutAnimation";
      messagebox.style.animationDuration = "0.25s";
      messagebox.style.animationFillMode = "forwards";
    }, 250 + dur);
  }
  
  
  function showDialog(msg, icn, okbutton, okbuttonfunc) {
    messageboxicon.innerHTML = icn;
    
    messageboxtext.innerHTML = msg;
    
    messagebox.style.animationName = "fadeInAnimation";
      
    messagebox.style.animationDuration = "0.25s";
    messagebox.style.animationFillMode = "forwards";
    
    clearTimeout(messageboxtimer);
    
    messagedialogbuttonslayout.style.width = "fit-content";
    messagedialogbuttonslayout.style.height = "fit-content";
    messagedialogbuttonslayout.style.opacity = "1";
    messagedialogbuttonslayout.style.pointerEvents = "auto";
    messagedialogbuttonslayout.style.marginTop = "20px";
    
    let dismissDialog = function() {
      messagebox.style.animationName = "fadeOutAnimation";
      messagebox.style.animationDuration = "0.25s";
      messagebox.style.animationFillMode = "forwards";
      
      messagedialogokbutton.style.opacity = "1";
    }
    
    if (okbutton != undefined && okbutton != null) {
      messagedialogokbutton.innerHTML = okbutton;
    } else {
      messagedialogokbutton.style.opacity = "0";
    }
    
    messagedialogokbutton.onclick = function() {
      dismissDialog();
      if (okbuttonfunc) okbuttonfunc();
    };
    
  }
  
  let _clearTimeout = window.clearTimeout;
  
  this.clearTimeout = function(timeout) {
    if (timeout == messageboxtimer) {
      messagedialogbuttonslayout.style.width = "0px";
      messagedialogbuttonslayout.style.height = "0px";
      messagedialogbuttonslayout.style.opacity = "0";
      messagedialogbuttonslayout.style.pointerEvents = "none";
      messagedialogbuttonslayout.style.marginTop = "0px";
    }
    _clearTimeout(timeout); 
  }