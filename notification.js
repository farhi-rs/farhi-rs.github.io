const handleNotifications = async function() {
  var farhi_rsdb_request = indexedDB.open("farhi_rsdb", 1);
  
  var count = 0;

  farhi_rsdb_request.onupgradeneeded = function(event) {
    try {
      
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
    
    } catch (ex) {}
  };

  farhi_rsdb_request.onsuccess = function(event) {
    try {
      
    farhi_rsdb = event.target.result;

    let trans = farhi_rsdb.transaction("batala", "readwrite");

    let batala = trans.objectStore("batala");
    

    batala.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;

      if (cursor) {
        let itemdata = cursor.value;
        
        let diffdays = dateDiffInDays(new Date(), new Date(addSixMonths(itemdata.renewingstartdate)));
        let diffdaysbeforestart = dateDiffInDays(new Date(), new Date(itemdata.renewingstartdate));
        
        
        if (diffdaysbeforestart <= 0 && diffdays <= 10 && !itemdata.name.includes('#')) showNotification(itemdata, diffdays <= 0);
        
        cursor.continue();
      } else {
        
      }
    }
    
    } catch (ex) {}
  }
  
  
  async function showNotification(itemdata, isRegEnded) {
    let yesterdayObject = new Date();
    yesterdayObject.setDate(yesterdayObject.getDate() - 1);
    
    localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_notifications") === undefined || localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_notifications") === null || localStorage.getItem(yesterdayObject.toISOString().split("T")[0] + "_notifications") === "" ? '' : localStorage.removeItem(yesterdayObject.toISOString().split("T")[0] + "_notifications");
    
    let todayShownNotificationsJson = localStorage.getItem(new Date().toISOString().split("T")[0] + "_notifications");
    let todayShownNotifications = (todayShownNotificationsJson === undefined || todayShownNotificationsJson === null || todayShownNotificationsJson === "") ? [] : JSON.parse(todayShownNotificationsJson);
    
    if (todayShownNotifications.includes(itemdata.id)) return;
    
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('تنبيه', {
            body: 'الزبون ' + itemdata.name + ' ذو المعرف الفريد ' + toUid(itemdata.id) + (isRegEnded ? ' حالة تسجيله حمراء، يرجى تفقده في أقرب وقت' : ' يكاد تسجيله ينتهي، يرجى تفقده في أقرب وقت'),
            icon: './assets/imgs/site_icon.png',
            data: { name: itemdata.name }
          });
        });
        
        todayShownNotifications.push(itemdata.id);
        localStorage.setItem(new Date().toISOString().split("T")[0] + "_notifications", JSON.stringify(todayShownNotifications));
    }

    // show an error message
    const showError = () => {
        console.log("Notifications blocked")
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();
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


  // a and b are javascript Date objects
  function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

}


export default handleNotifications;