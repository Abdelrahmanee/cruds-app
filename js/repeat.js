

var pName = document.getElementById("pName")
var pPrice = document.getElementById("pPrice")
var pCategory = document.getElementById("pCategory")
var pDescription = document.getElementById("pDescription")

var tBody = document.getElementById("tBody");

var productArray = [];
function addProduct() {
    var product = {
        productName: pName.value,
        productPrice: pPrice.value,
        productCategory: pCategory.value,
        productDescription: pDescription.value
    }
    productArray.push(product)
    console.log(productArray);
    Display();
}

function Display() {
    var box = ``;
    for (var i = 0; i < productArray.length; i++) {
        box += `
        <tr>
        <td>${productArray[i].productName}</td>
        <td>${productArray[i].productPrice}</td>
        <td>${productArray[i].productCategory}</td>
        <td>${productArray[i].productDescription}</td>
        </tr>
        `
    }
    tBody.innerHTML = box;
}