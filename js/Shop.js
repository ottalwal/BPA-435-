let ElList = document.querySelector('#OrderList')

function LocalStorageSet(){
    if (localStorage.length == 0){
        localStorage.setItem("MerchItem1", 0)
        localStorage.setItem("MerchItem2", 0)
        localStorage.setItem("MerchItem3", 0)
        localStorage.setItem("MerchItem4", 0)
        localStorage.setItem("MerchItem5", 0)
        localStorage.setItem("MerchItem6", 0)
        localStorage.setItem("MerchItem7", 0)
        localStorage.setItem("Balance", 0)
        localStorage.setItem("TotalCost", 0)
        localStorage.setItem("MerchItemPrice1", 20)
        localStorage.setItem("MerchItemPrice2", 10)
        localStorage.setItem("MerchItemPrice3", 15)
        localStorage.setItem("MerchItemPrice4", 20)
        localStorage.setItem("MerchItemPrice5", 30)
        localStorage.setItem("MerchItemPrice6", 20)
        localStorage.setItem("MerchItemPrice7", 50)
    }
}

LocalStorageSet()

let MerchItem1 = localStorage.getItem("MerchItem1");
let MerchItem2 = localStorage.getItem("MerchItem2");
let MerchItem3 = localStorage.getItem("MerchItem3");
let MerchItem4 = localStorage.getItem("MerchItem4");
let MerchItem5 = localStorage.getItem("MerchItem5");
let MerchItem6 = localStorage.getItem("MerchItem6");
let MerchItem7 = localStorage.getItem("MerchItem7");

function CallAThing(){
    console.log(localStorage.getItem("MerchItemPrice1"))
    UpdateCardText('MerchItem1', MerchItem1, 'MerchItemName', localStorage.getItem("MerchItemPrice1"))
    UpdateCardText('MerchItem2', MerchItem2, 'MerchItemName', localStorage.getItem("MerchItemPrice2"))
    UpdateCardText('MerchItem3', MerchItem3, 'MerchItemName', localStorage.getItem("MerchItemPrice3"))
    UpdateCardText('MerchItem4', MerchItem4, 'MerchItemName', localStorage.getItem("MerchItemPrice4"))
    UpdateCardText('MerchItem5', MerchItem5, 'MerchItemName', localStorage.getItem("MerchItemPrice5"))
    UpdateCardText('MerchItem6', MerchItem6, 'MerchItemName', localStorage.getItem("MerchItemPrice6"))
    UpdateCardText('MerchItem7', MerchItem7, 'MerchItemName', localStorage.getItem("MerchItemPrice7"))
}

//Because out params don't exist in javascript, this just became 50x longer
function AddToOrderList(Merch){
    if("MerchItem1" == Merch){
        MerchItem1++;
    }
    if("MerchItem2" == Merch){
        MerchItem2++;
    }
    if("MerchItem3" == Merch){
        MerchItem3++;
    }
    if("MerchItem4" == Merch){
        MerchItem4++;
    }
    if("MerchItem5" == Merch){
        MerchItem5++;
    }
    if("MerchItem6" == Merch){
        MerchItem6++;
    }
    if("MerchItem7" == Merch){
        MerchItem7++;
    }
    
    localStorage.setItem("MerchItem1", MerchItem1)
    localStorage.setItem("MerchItem2", MerchItem2)
    localStorage.setItem("MerchItem3", MerchItem3)
    localStorage.setItem("MerchItem4", MerchItem4)
    localStorage.setItem("MerchItem5", MerchItem5)
    localStorage.setItem("MerchItem6", MerchItem6)
    localStorage.setItem("MerchItem7", MerchItem7)
}

function RemoveFromOrderList(Merch){
    if("MerchItem1" == Merch){
        MerchItem1--;
        console.log("Minus" + Merch)
        if (MerchItem1 < 0){
            MerchItem1 = 0
        }
    }
    if("MerchItem2" == Merch){
        MerchItem2--;
        console.log("Minus" + Merch)
        if (MerchItem2 < 0){
            MerchItem2 = 0
        }
    }
    if("MerchItem3" == Merch){
        MerchItem3--;
        console.log("Minus" + Merch)
        if (MerchItem3 < 0){
            MerchItem3 = 0
        }
    }
    if("MerchItem4" == Merch){
        MerchItem4--;
        console.log("Minus" + Merch)
        if (MerchItem4 < 0){
            MerchItem4 = 0
        }
    }
    if("MerchItem5" == Merch){
        MerchItem5--;
        if (MerchItem5 < 0){
            MerchItem5 = 0
        }
    }
    if("MerchItem6" == Merch){
        MerchItem6--;
        if (MerchItem6 < 0){
            MerchItem6 = 0
        }
    }
    if("MerchItem7" == Merch){
        MerchItem7--;
        if (MerchItem7 < 0){
            MerchItem7 = 0
        }
    }
    
    localStorage.setItem("MerchItem1", MerchItem1)
    localStorage.setItem("MerchItem2", MerchItem2)
    localStorage.setItem("MerchItem3", MerchItem3)
    localStorage.setItem("MerchItem4", MerchItem4)
    localStorage.setItem("MerchItem5", MerchItem5)
    localStorage.setItem("MerchItem6", MerchItem6)
    localStorage.setItem("MerchItem7", MerchItem7)
    
    console.log(localStorage.getItem("MerchItemPrice1"))
    CallAThing()
    console.log(localStorage.getItem("MerchItemPrice1"))
}

function AddToOrderList(Merch){
    if('MerchItem1' == Merch){
        MerchItem1++;
    }
    if('MerchItem2' == Merch){
        MerchItem2++;
    }
    if("MerchItem3" == Merch){
        MerchItem3++;
    }
    if("MerchItem4" == Merch){
        MerchItem4++;
    }
    if("MerchItem5" == Merch){
        MerchItem5++;
    }
    if("MerchItem6" == Merch){
        MerchItem6++;
    }
    if("MerchItem7" == Merch){
        MerchItem7++;
    }
    
    localStorage.setItem("MerchItem1", MerchItem1)
    localStorage.setItem("MerchItem2", MerchItem2)
    localStorage.setItem("MerchItem3", MerchItem3)
    localStorage.setItem("MerchItem4", MerchItem4)
    localStorage.setItem("MerchItem5", MerchItem5)
    localStorage.setItem("MerchItem6", MerchItem6)
    localStorage.setItem("MerchItem7", MerchItem7)

    UpdateCardText('MerchItem1', MerchItem1, 'MerchItemName', 20)
    UpdateCardText('MerchItem2', MerchItem2, 'MerchItemName', 10)
    UpdateCardText('MerchItem3', MerchItem3, 'MerchItemName', 15)
    UpdateCardText('MerchItem4', MerchItem4, 'MerchItemName', 20)
    UpdateCardText('MerchItem5', MerchItem5, 'MerchItemName', 30)
    UpdateCardText('MerchItem6', MerchItem6, 'MerchItemName', 20)
    UpdateCardText('MerchItem7', MerchItem7, 'MerchItemName', 50)
}

function ClickedACard(CardParent, Count, Merch){
    CardParent.querySelector('p').innerHTML = "You have ordered " + Count + " " + Merch
}

function UpdateCardText(CardParent, Count, Merch, Price){
    ElList.querySelector("#" + CardParent).innerHTML = "<h2>"+ Merch +"</h2><h1>Price: $" + Price + "</h1>\
    <div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"" + CardParent + "\")'>&#8722;</button>" + Count + " ($" + Count*Price +")\
    <button type='button' onclick='AddToOrderList(\"" + CardParent + "\")''>&#43;</button></div>"
    
    let TotalPrice = 0;
    for(let i = 1; i<ElList.childElementCount; i++){
        TotalPrice += parseFloat(localStorage.getItem("MerchItem" + i) * localStorage.getItem("MerchItemPrice" + i))
    }

    localStorage.setItem("TotalCost", TotalPrice)

    document.querySelector("#TotalCost").innerHTML = "<h2>Total Price of their Cart: " + localStorage.getItem("TotalCost") + "</h2>"
}