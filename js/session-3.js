
// var Prodact={
//     p_price:300,    //property
//     p_Name:"TV",
//     p_id:3,
//     p_subCat:false,
//     p_num:undefined,
//     p_sale:function (p_price){    //method
//         return p_price*.2;
//     }
// }
// console.log(Prodact.p_price);
// console.log(Prodact.p_Name);
// console.log(Prodact["p_id"]);

// console.log(Prodact.p_sale(Prodact.p_price));
// Prodact.p_abdo="ABdo?";
// Prodact["MESH ABDO"]="MESH ABDO";
// console.log(Prodact);


// var arr=["abdo","kareem","Amr","hassan","reda"]
// arr.push("raed")
// arr.pop()
// arr.pop()
// arr.unshift("abdo1")
// arr.shift()
// arr.sort()
// arr.reverse()
// console.log(arr.join(" "));
// console.log(arr.splice(1,3));
// console.log(arr.splice(1,0,"Emad AL deen"));
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// var ids=[11,12,2,3,1,4,6,52,3,7,9,1]
// ids.sort()
// for(var i =0;i<ids.length;i++){
//     console.log(ids[i]);
// }


// var arr2=["marmn","tamim","rahma","abdo","kareem","Amr","hassan","reda"]
// console.log(arr2.slice(0,3));

// console.log(arr2);
prodactName = document.getElementById("prodactName")
prodactPrice = document.getElementById("prodactPrice")
prodactCategory = document.getElementById("prodactCategory")
prodactDescription = document.getElementById("prodactDescription")


var tableHtml = document.getElementById("tBody");
var searchItem=document.getElementById("searchItem")
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("updateBtn")
var index;
var Allprodacts = [];

if (localStorage.getItem("AllProducts") != null) {
    Allprodacts = JSON.parse(localStorage.getItem("AllProducts"))
    Display(Allprodacts);


}
function addProdact() {
    var product = {
        prodactName: prodactName.value,
        prodactPrice: prodactPrice.value,
        prodactCategory: prodactCategory.value,
        prodactDescription: prodactDescription.value
    }
    
    localStorage.setItem("AllProducts", JSON.stringify(Allprodacts))
    Allprodacts.push(product)
    // console.log(Allprodacts);
    Display(Allprodacts)
}

function Display(arr) {

    var box = ``;

    for (var i = 0; i < Allprodacts.length; i++) {
        
        
        box += `
        <tr>
        <td>${i}</td>
        <td>${Allprodacts[i].prodactName}</td>
        <td>${Allprodacts[i].prodactPrice}</td>
        <td>${Allprodacts[i].prodactCategory}</td>
        <td>${Allprodacts[i].prodactDescription}</td>
        <td>
            <button onclick="DeleteItem(${i})" class="btn btn-outline-danger " >Delete</button>
            <button onclick="setFormUpdate(${i})" class="btn btn-outline-success " >Update</button>
        </td>
        </tr>
        `
    }
    
    tableHtml.innerHTML = box;

}
function setFormUpdate(i) {
    index=i;
    addBtn.classList.replace("d-block", "d-none")
    updateBtn.classList.replace("d-none", "d-block")
    prodactName.value=Allprodacts[i].prodactName;
    prodactPrice.value=Allprodacts[i].prodactPrice;
    prodactCategory.value=Allprodacts[i].prodactCategory;
    prodactDescription.value=Allprodacts[i].prodactDescription;

}
function Update(index) {
    Allprodacts[index].prodactName=prodactName.value;

    Allprodacts[index].prodactPrice=prodactPrice.value;
    Allprodacts[index].prodactCategory=prodactCategory.value;
    Allprodacts[index].prodactDescription=prodactDescription.value;
    addProdact()
    updateBtn.classList.replace("d-block", "d-none")
    addBtn.classList.replace("d-none", "d-block")
}

function DeleteItem(index) {
    // console.log(Allprodacts, "Before");
    Allprodacts.splice(index, 1);
    // console.log(Allprodacts, "After");
    localStorage.setItem("AllProducts", JSON.stringify(Allprodacts))
    Display(Allprodacts)
    console.log("INDEX : ", index);
}

function SearchProducts(term) {

    var matchedProducts=[];
    for(var i=0 ;i<Allprodacts.length;i++){
        if(Allprodacts[i].prodactName.toLowerCase().includes(term.toLowerCase())===true){
            matchedProducts.push(Allprodacts[i])
        }
    }
    console.log(matchedProducts);
    Display(matchedProducts)
}
console.log(Allprodacts);