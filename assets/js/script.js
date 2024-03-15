"use strict";

// sessionStorage.setItem("name","Aqshin");
// sessionStorage.setItem("surname","Veliyev");

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("surname"))

// // sessionStorage.clear();

// sessionStorage.removeItem("name")

// localStorage.setItem("name","Aqshin");


// let inputKey = document.querySelector(".input-key");
// let inputValue = document.querySelector(".input-value");

// let addBtn = document.querySelector("button");


// addBtn.addEventListener("click",function(){
//     let key = inputKey.value;
//     let value = inputValue.value;

//     localStorage.setItem(key,value);

//     inputKey.value = "";
//     inputValue.value = "";
// })

// localStorage.setItem("datas",datas)

// let jsonData = {
//     name: "shds",
//     surname: "dsad",
//     phones: [
//         3647364, 437474
//     ],
//     group: [
//         {
//             name: "P418",
//             capacity: 40,
//             teachers: [
//                 "Cavid",
//                 "Hemid"
//             ]
//         }
//     ]
// }

// console.log(jsonData.group[0].capacity)

// for (const iterator of jsonData.group[0].teachers) {
//     console.log(iterator)
// }

// console.log(jsonData);


// let datas = [
//     {
//         name: "Semed",
//         surname: "huseynov"
//     },
//     {
//         name:"Meryem",
//         surname:"Eliyeva"
//     }
// ];

// localStorage.setItem("datas",datas)


// localStorage.setItem("datas", JSON.stringify(jsonData));

// console.log(localStorage.getItem("datas"));

// console.log(JSON.parse(localStorage.getItem("datas")))



//basket

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) == null) {
    localStorage.setItem("basket", JSON.stringify(basket));
} else {

    basket = JSON.parse(localStorage.getItem("basket"));
}

getBasketCount(basket);

function getBasketCount(arr) {
    let basketCount = 0;

    if (arr.length != 0) {
        for (const item of arr) {
            basketCount += item.count;
        }
    }
    document.querySelector(".navigation .basket-count").innerText = basketCount;
}


let addBtns = document.querySelectorAll("#products .add-btn");


addBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productPrice = parseFloat(this.nextElementSibling.firstElementChild.innerText);

        let existProduct = basket.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count++;
        } else {
            basket.push({
                id: productId,
                name: productName,
                description: productDesc,
                image: productImage,
                price: productPrice,
                count: 1
            })
        }

        getBasketCount(basket);

        localStorage.setItem("basket", JSON.stringify(basket));

    })
});

