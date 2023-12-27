/**
 * Select file(s).
 * @param {tostring} contentType The content type of files you wish to select. For instance, use "image/*" to select all types of images.
 * @param {Boolean} multiple Indicates if the user can select multiple files.
 * @returns {Promise<File|File[]>} A promise of a file or array of files in case the multiple parameter is true.
 */
function selectFile(contentType, multiple){
    return new Promise(resolve => {
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = multiple;
        input.accept = contentType;

        input.onchange = () => {
            let files = Array.from(input.files);
            if (multiple)
                resolve(files);
            else
                resolve(files[0]);
        };

        input.click();
    });
}


var existingitems;
async function onPickReady() {
    let files = await selectFile("*/*", true);
    let file = files[0];
    loadingscreen.style.animationName = "fadeInAnimation";
    loadingscreen.style.animationDuration = "0.25s";
    loadingscreen.style.animationFillMode = "forwards";
    loadingtext.innerHTML = "جاري المعالجة ...";
    setTimeout(function() {
      let trans = farhi_rsdb.transaction("batala", "readwrite");

      let batala = trans.objectStore("batala");
    
      batala.getAll().onsuccess = function(event) {
        let itemsdata = event.target.result;
        
        existingitems = itemsdata;
      }
      
      handleXlsx(file);
    }, 300);
}

toolbartitle.onclick = onPickReady;







function handleXlsx(file) {
  const reader = new FileReader();

  reader.readAsArrayBuffer(file)
  reader.onload = () => {
    const buffer = reader.result;
    let wb = XLSX.read(buffer, { type: 'buffer' });
    
    handleWb(wb);
      ready();
    
  }
}


function ready() {
    console.log(batalaarray.length);
  // create a new connection  or new transaction
  const trans = farhi_rsdb.transaction('batala', 'readwrite');  
  // Save Names object using variable  
  const batala = trans.objectStore('batala');
  batalaarray.forEach(function(itemdata) {
    batala.put(itemdata);
  });

  // Close the transaction when the operation is complete
    trans.oncomplete = function() {
        console.log("Items added successfully");
        loadingscreen.style.animationName = "fadeOutAnimation";
        loadingscreen.style.animationDuration = "0.25s";
        loadingscreen.style.animationFillMode = "forwards";
        
    };
}


var batalaarray = [];
function handleWb(workbook) {
  // Accessing sheet names
const sheetNames = workbook.SheetNames;

//let sheetIndex = 0;

//analyzeSheet(sheetNames[sheetIndex]);

// Loop through each sheet in the workbook
sheetNames.forEach(function(sheetName) {
    // Accessing worksheet by name
    const worksheet = workbook.Sheets[sheetName];

    let progress = 0;
    let total = 0;

    // Extracting all rows from the worksheet
    /*
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, cellText: true, raw: true });
    */
    // Get the range of the worksheet (range object will contain the sheet dimensions)
    let range = null;
    try {
      range = XLSX.utils.decode_range(worksheet['!ref']);
    } catch (ex) {
        /*
     progress++;
          console.clear();
          console.log("Page " + (sheetIndex+1) + " of " + sheetNames.length);
          console.log("Total : " + total);
          console.log("Progress : " + (100 * progress / total) + " %");
          if (progress <= total) {
            rowIndex++;
            let row = rows[rowIndex];
            analyzeRow(row);
          } else {
            sheetIndex++;
            if (sheetIndex <= sheetNames.length) { 
              analyzeSheet(sheetNames[sheetIndex]);
            } else {
                ready();
             
            }
          } */
        return;
    }

    // Initialize an array to store rows
    const rows = [];

    // Iterate through each row and column in the worksheet
    for (let row = range.s.r; row <= range.e.r; row++) {
        const rowData = []; // Initialize an array to store cell data for each row

        for (let col = range.s.c; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
            const cell = worksheet[cellAddress];
            
            let cellData = "";
            if (cell) {
              if (cellAddress.includes("C")) {
                cellData = tostring(cell.v);
              } else if (cellAddress.includes("C")) {
                cellData = "";
              } else {
                cellData = XLSX.utils.format_cell(cell); // Format date as string
              }
            } else {
              cellData = "";
            }
            rowData.push(cellData); // Push formatted date string to the row data array
        }

        rows.push(rowData); // Push the row data array to the rows array
    }
    
    
    total = rows.length;

    
    // Output all rows
    rows.forEach(function(row, rowIndex) {
        if (row == undefined) return;
        let name = "";
        let nameindex = 15;
        if (tostring([15]) != "undefined" && tostring(row[15]) != "null" && tostring(row[15]) != "") {
          nameindex = 15;
        } else if (tostring(row[16]) != "undefined" && tostring(row[16]) != "null" && tostring(row[16]) != "") {
          nameindex = 16;
        } else if (tostring(row[17]) != "undefined" && tostring(row[17]) != "null" && tostring(row[17]) != "") {
          nameindex = 17;
        }
        
        if (tostring(row[nameindex]) != "undefined" && tostring(row[nameindex]) != "null") name = tostring(row[nameindex]);
        
        if (name == "") return;
        
        
        let skip = false;
        if (existingitems != undefined && existingitems != null) existingitems.forEach(function(itemdata) {
          if (itemdata.name.replaceAll(/&nbsp;/g, ' ').replaceAll(" ", "") === name.replaceAll(" ", "")) {
            skip = true;
          }
        });
        
        if (skip) return;
        
        let renewingstartdate = "";
        let startindex = 11;
        if (tostring(row[11]) != "undefined" && tostring(row[11]) != "null" && tostring(row[11]) != "") {
          startindex = 11;
        } else if (tostring(row[12]) != "undefined" && tostring(row[12]) != "null" && tostring(row[11]) != "") {
          startindex = 12;
        } else if (tostring(row[13]) != "undefined" && tostring(row[13]) != "null" && tostring(row[13]) != "") {
          startindex = 13;
        } else if (tostring(row[14]) != "undefined" && tostring(row[14]) != "null" && tostring(row[14]) != "") {
          startindex = 14;
        }
        
        if (tostring(row[startindex]) != "undefined" && tostring(row[startindex]) != "null") renewingstartdate = tostring(row[startindex]).replaceAll(" ", "").replaceAll(".", "");
        
        try {
          new Date("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1]).toISOString();
        } catch (ex) {
          try {
            new Date("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0]).toISOString();
          } catch (ex) {
            renewingstartdate = "";
          }
        }
        
        /*
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[6]) != "undefined" && tostring(rowAfter[6]) != "null" && tostring(rowAfter[6]).replaceAll(" ", "") != "") {
              let lastrenewingstartdate = renewingstartdate;
              renewingstartdate = tostring(rowAfter[6]);
              try {
                new Date("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1]).toISOString();
              } catch (ex) {
                try {
                  new Date("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0]).toISOString();
                } catch (ex) {
                  renewingstartdate = lastrenewingstartdate;
                }
              }
            }
            
          } else {
            break;
          }
        }
        */
        
        if (renewingstartdate != "") {
          try {
            renewingstartdate = negateSixMonths("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1]);
          } catch (ex) {
            try {
              renewingstartdate = negateSixMonths("20" + renewingstartdate.split("/")[2] + "-" + (renewingstartdate.split("/")[1].length == 1 ? "0" : "") + renewingstartdate.split("/")[1] + "-" + (renewingstartdate.split("/")[0].length == 1 ? "0" : "") + renewingstartdate.split("/")[0]);
            } catch (ex) {
              renewingstartdate = "";
            }
          }
        } else {
            /*
          progress++;
          console.clear();
          console.log("Page " + (sheetIndex+1) + " of " + sheetNames.length);
          console.log("Total : " + total);
          console.log("Progress : " + (100 * progress / total) + " %");
          if (progress <= total) {
            rowIndex++;
            let row = rows[rowIndex];
            analyzeRow(row);
          } else {
            sheetIndex++;
            if (sheetIndex <= sheetNames.length) { 
              analyzeSheet(sheetNames[sheetIndex]);
            } else {
                ready();
             
            }
          }
          */
            return;
        }
        
        
        
        
        let phonenumber = "";
        let phoneindex = 8;
        if (tostring(row[8]) != "undefined" && tostring(row[8]) != "null" && tostring(row[8]) != "") {
          phoneindex = 8;
        } else if (tostring(row[9]) != "undefined" && tostring(row[9]) != "null" && tostring(row[9]) != "") {
          phoneindex = 9;
        } else if (tostring(row[10]) != "undefined" && tostring(row[10]) != "null" && tostring(row[10]) != "") {
          phoneindex = 10;
        }
        
        if (tostring(row[phoneindex]) != "undefined" && tostring(row[phoneindex]) != "null" && tostring(row[phoneindex]).replaceAll(" ", "") != "") if (!isNaN(Number(tostring(row[phoneindex])))) if (tostring(row[phoneindex]).length == 9 || tostring(row[phoneindex]).length == 10) phonenumber = (tostring(row[phoneindex]).length == 9 ? "0" : "") + tostring(row[phoneindex]);
        /*
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[5]) != "undefined" && tostring(rowAfter[5]) != "null" && tostring(rowAfter[5]).replaceAll(" ", "") != "") if (!isNaN(Number(tostring(rowAfter[5])))) if (tostring(rowAfter[5]).length == 9 || tostring(rowAfter[5]).length == 10) phonenumber = (tostring(rowAfter[5]).length == 9 ? "0" : "") + tostring(rowAfter[5]);
          } else {
            break;
          }
        }
        */
        
        
        let residence = "";
        let resindex = 5;
        if (tostring(row[5]) != "undefined" && tostring(row[5]) != "null" && tostring(row[5]) != "") {
          resindex = 5;
        } else if (tostring(row[6]) != "undefined" && tostring(row[6]) != "null" && tostring(row[6]) != "") {
          resindex = 6;
        } else if (tostring(row[7]) != "undefined" && tostring(row[7]) != "null" && tostring(row[7]) != "") {
          resindex = 7;
        }
        
        
        if (tostring(row[resindex]) != "undefined" && tostring(row[resindex]) != "null" && tostring(row[resindex]).replaceAll(" ", "") != "") residence = tostring(row[resindex]);
        /*
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[4]) != "undefined" && tostring(rowAfter[4]) != "null" && tostring(rowAfter[4]).replaceAll(" ", "") != "") residence = tostring(rowAfter[4]);
          } else {
            break;
          }
        }
        */
        residence = residence.replaceAll("undefined", "").replaceAll("null", "");
        
        
        let nin = "";
        /*
        if (tostring(row[2]) != "undefined" && tostring(row[2]) != "null" && tostring(row[2]).replaceAll(" ", "") != "") nin = tostring(row[2]);
        
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[2]) != "undefined" && tostring(rowAfter[2]) != "null" && tostring(rowAfter[2]).replaceAll(" ", "") != "") nin = tostring(rowAfter[2]);
          } else {
            break;
          }
        }
        */
        
        
        
        let worknumber = "";
        let workindex = 2;
        
        
        if (tostring(row[workindex]) != "undefined" && tostring(row[workindex]) != "null" && tostring(row[workindex]).replaceAll(" ", "") != "") worknumber = tostring(row[workindex]);
        /*
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[1]) != "undefined" && tostring(rowAfter[1]) != "null" && tostring(rowAfter[1]).replaceAll(" ", "") != "") worknumber = tostring(rowAfter[1]);
          } else {
            break;
          }
        }
        */
        
        
        
        let birthdate = "";
        let birthindex = 0;
        if (tostring(row[0]) != "undefined" && tostring(row[0]) != "null" && tostring(row[0]) != "") {
          birthindex = 0;
        } else if (tostring(row[1]) != "undefined" && tostring(row[1]) != "null" && tostring(row[1]) != "") {
          birthindex = 1;
        } else if (tostring(row[2]) != "undefined" && tostring(row[2]) != "null" && tostring(row[2]) != "") {
          birthindex = 2;
        }
        
        if (tostring(row[birthindex]) != "undefined" && tostring(row[birthindex]) != "null") birthdate = tostring(row[birthindex]).replaceAll(" ", "").replaceAll(".", "/");
        
        try {
          new Date((Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1]).toISOString();
        } catch (ex) {
          try {
            new Date((Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0]).toISOString();
          } catch (ex) {
            birthdate = "";
          }
        }
        
        /*
        for (let i = rowIndex+1; i < rows.length; i++) {
          let rowAfter = rows[i];
          
          if (tostring(rowAfter[7]) == "undefined" || tostring(rowAfter[7]) == "null" || tostring(rowAfter[7]) == "") {
            if (tostring(rowAfter[0]) != "undefined" && tostring(rowAfter[0]) != "null" && tostring(rowAfter[0]).replaceAll(" ", "") != "") {
              let lastbirthdate = birthdate;
              birthdate = tostring(rowAfter[0]);
              try {
                new Date((Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1]).toISOString();
              } catch (ex) {
                try {
                  new Date((Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0]).toISOString();
                } catch (ex) {
                  birthdate = lastbirthdate;
                }
              }
            }
            
          } else {
            break;
          }
        }
        */
        try {
          birthdate = (Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1];
          
          new Date(birthdate).toISOString();
        } catch (ex) {
          try {
            birthdate = (Number(birthdate.split("/")[2]) >= 50 ? "19" : "20") + birthdate.split("/")[2] + "-" + (birthdate.split("/")[1].length == 1 ? "0" : "") + birthdate.split("/")[1] + "-" + (birthdate.split("/")[0].length == 1 ? "0" : "") + birthdate.split("/")[0];
          
            new Date(birthdate).toISOString();
          } catch (ex) {
            birthdate = "";
          }
        }
        
        
        let itemdata = {
        name: name,
        nametokenized: tokenize(name, true),
        renewingstartdate: renewingstartdate,
        phonenumber: phonenumber,
        worknumber: worknumber,
        nin: nin,
        cardnumber: "",
        cardissuingdate: "",
        cardexpiredate: "",
        cardissuingplace: "",
        cardissuingplacetokenized: "",
        birthdate: birthdate,
        birthplace: "",
        birthplacetokenized: "",
        birthcertificatenumber: "",
        residence: residence,
        residencetokenized: tokenize(residence, true),
        note: ""
        };
  
        
        


        if (itemdata.name != "") {
           batalaarray.push(itemdata);
            
        } else { /*
           onsuccess(null);
           */
            return;
        }
        
        /*
        function onsuccess(event) {
          progress++;
          console.clear();
          console.log("Page " + (sheetIndex+1) + " of " + sheetNames.length);
          console.log("Total : " + total);
          console.log("Progress : " + (100 * progress / total) + " %");
          if (progress <= total) {
            rowIndex++;
            let row = rows[rowIndex];
            analyzeRow(row);
          } else {
            sheetIndex++;
            if (sheetIndex <= sheetNames.length) { 
              analyzeSheet(sheetNames[sheetIndex]);
            } else {
              ready();
              
            }
          }
        }
       */
        
        //query.onsuccess = onsuccess;


    });

});

}






function negateSixMonths(datestr) {
    if (datestr === undefined || datestr === null) return datestr;
    
    let date = new Date(datestr);
    
    return date.addMonths(-6).toISOString().split("T")[0];
}


function tostring(input) {
  if (typeof input == "String") return input;
  else return String(input);
}
