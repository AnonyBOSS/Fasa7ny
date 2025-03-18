function addRow() {
    var hotelName = document.getElementById("hotelName").value;
    var price = document.getElementById("price").value;

    if (hotelName && price) {
        var table = document.getElementById("hotelTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = hotelName;
        cell2.innerHTML = "$" + price;
        cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        
        document.getElementById("hotelForm").reset();
    } else {
        alert("Hotel name and price are required!");
    }
}

function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("hotelTable").deleteRow(i);
}
