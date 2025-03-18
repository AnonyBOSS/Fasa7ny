function search() {
    var input = document.getElementById("search-input").value;
    var imageContainers = document.getElementsByClassName("image-container");
  
    for (var i = 0; i < imageContainers.length; i++) {
      var title = imageContainers[i].getElementsByClassName("img-title")[0];
      var country = title.textContent.toLowerCase();
  
      if (country.includes(input)) {
        imageContainers[i].style.display = "block";
      } else {
        imageContainers[i].style.display = "none";
      }
    }
  }
  function addItem() {
    var itemInput = document.getElementById('itemInput');
    var itemName = itemInput.value.trim();

    if (itemName !== '') {
        var table = document.getElementById('wishlistTable').getElementsByTagName('tbody')[0];
        
        var newRow = table.insertRow(table.rows.length);
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        
        cell1.innerHTML = itemName;
        cell2.innerHTML = '<button onclick="deleteItem(this)">Delete</button>';
        
        itemInput.value = '';
    } else {
        alert('Please enter an item!');
    }
}

function deleteItem(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


  