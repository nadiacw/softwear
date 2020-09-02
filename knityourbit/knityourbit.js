let m, b, t;
let border = false;

document.addEventListener("DOMContentLoaded", function () {
    // get table
    t = document.getElementById("pattern");
});

var checkbox = document.getElementById("borders");
checkbox.addEventListener('change', function () {
    if (this.checked) {
        // Checkbox is checked
        border = true;
    } else {
        // Checkbox is not checked
        border = false;
    }
    knitIt();
});


function knitIt() {
    m = document.getElementById("message").value;
    // text to binary
    b = text2Binary(m);
    document.getElementById("binaryText").innerHTML = b.toString();
    // remove spaces
    b = b.replace(/\s/g, '');
    console.log(b);
    b = Array.from(b);
    console.log(b);



    // empty table
    for (let i = 0; i < t.rows.length; i++) {
        // t.deleteRow(i);
        t.innerHTML = '';
    }

    // FILL TABLE

    // first 4 rows are kpkp
    knitRow(); purlRow(); knitRow(); purlRow();


    // MESSAGE

    let n_rows = b.length / 8;
    for (let c = 0; c < n_rows; c++) {
        // for each char c in the message, make a new row

        let row = t.insertRow();

        // first cell is the character
        let td = document.createElement("td");
        let text = document.createTextNode(m[c]);
        td.style.color = "#4400ff";
        td.appendChild(text);
        row.appendChild(td);

        // second cell is the border
        if (border) {
            td = document.createElement("td");
            text = document.createTextNode("k");
            td.appendChild(text);
            row.appendChild(td);
        }

        // next 8 cells are the char in binary
        // format these!
        for (let i = 0; i < 8; i++) {
            td = document.createElement("td");
            let bin = b[c * 8 + i];
            // change binary for k and p
            if (bin == 0) { bin = 'k'; td.style.backgroundColor = "#6495ED"; }
            else if (bin == 1) { bin = 'p'; td.style.backgroundColor = "#4400ff"; }
            text = document.createTextNode(bin);
            td.style.color = "white";
            td.appendChild(text);
            row.appendChild(td);
        }

        // last cell is the border
        if (border) {
            td = document.createElement("td");
            text = document.createTextNode("k");
            td.appendChild(text);
            row.appendChild(td);
        }

        // add a purl row in between each message row
        purlRow();
    }


    // end with more kpkp
    knitRow(); purlRow(); knitRow(); purlRow();


}



function text2Binary(string) {
    return string.split('').map(function (char) {
        if (char.charCodeAt(0).toString(2).length == 6) {
            return '00' + char.charCodeAt(0).toString(2);
        }
        if (char.charCodeAt(0).toString(2).length == 7) {
            return '0' + char.charCodeAt(0).toString(2);
        }
    }).join(' ');
}


function knitRow() {
    let row = t.insertRow();
    let td = document.createElement("td");
    let text = document.createTextNode("knit 1 row");
    td.style.paddingRight = "30px";
    td.appendChild(text);
    row.appendChild(td);
    let sts;
    if (border) sts = 10;
    else if (!border) sts = 8;
    for (let i = 0; i < sts; i++) {
        td = document.createElement("td");
        text = document.createTextNode("k");
        td.appendChild(text);
        row.appendChild(td);
    }
}

function purlRow() {
    let row = t.insertRow();
    let td = document.createElement("td");
    let text = document.createTextNode("purl 1 row");
    td.style.paddingRight = "30px";
    td.appendChild(text);
    row.appendChild(td);
    let sts;
    if (border) sts = 10;
    else if (!border) sts = 8;
    for (let i = 0; i < sts; i++) {
        td = document.createElement("td");
        text = document.createTextNode("p");
        td.appendChild(text);
        row.appendChild(td);
    }
}