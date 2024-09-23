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

//Because out params don't exist in javascript, this just became 50x longer code
function AddToOrderList(FoodItem){
    if("MerchItem1" == FoodItem){
        MerchItem1++;
    }
    if("MerchItem2" == FoodItem){
        MerchItem2++;
    }
    if("MerchItem3" == FoodItem){
        MerchItem3++;
    }
    if("MerchItem4" == FoodItem){
        MerchItem4++;
    }
    if("MerchItem5" == FoodItem){
        MerchItem5++;
    }
    if("MerchItem6" == FoodItem){
        MerchItem6++;
    }
    if("MerchItem7" == FoodItem){
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

function RemoveFromOrderList(FoodItem){
    if("MerchItem1" == FoodItem){
        MerchItem1--;
        console.log("Minus" + FoodItem)
        if (MerchItem1 < 0){
            MerchItem1 = 0
        }
    }
    if("MerchItem2" == FoodItem){
        MerchItem2--;
        console.log("Minus" + FoodItem)
        if (MerchItem2 < 0){
            MerchItem2 = 0
        }
    }
    if("MerchItem3" == FoodItem){
        MerchItem3--;
        console.log("Minus" + FoodItem)
        if (MerchItem3 < 0){
            MerchItem3 = 0
        }
    }
    if("MerchItem4" == FoodItem){
        MerchItem4--;
        console.log("Minus" + FoodItem)
        if (MerchItem4 < 0){
            MerchItem4 = 0
        }
    }
    if("MerchItem5" == FoodItem){
        MerchItem5--;
        if (MerchItem5 < 0){
            MerchItem5 = 0
        }
    }
    if("MerchItem6" == FoodItem){
        MerchItem6--;
        if (MerchItem6 < 0){
            MerchItem6 = 0
        }
    }
    if("MerchItem7" == FoodItem){
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

    UpdateCardText('MerchItem1', MerchItem1, 'MerchItemName')
    UpdateCardText('MerchItem2', MerchItem2, 'MerchItemName')
    UpdateCardText('MerchItem3', MerchItem3, 'MerchItemName')
    UpdateCardText('MerchItem4', MerchItem4, 'MerchItemName')
    UpdateCardText('MerchItem5', MerchItem5, 'MerchItemName')
    UpdateCardText('MerchItem6', MerchItem6, 'MerchItemName')
    UpdateCardText('MerchItem7', MerchItem7, 'MerchItemName')
    // AddToList()
}

function AddToOrderList(FoodItem){
    //AddToOrderList('MerchItem1')
    if('MerchItem1' == FoodItem){
        MerchItem1++;
    }
    if('MerchItem2' == FoodItem){
        MerchItem2++;
    }
    if("MerchItem3" == FoodItem){
        MerchItem3++;
    }
    if("MerchItem4" == FoodItem){
        MerchItem4++;
    }
    if("MerchItem5" == FoodItem){
        MerchItem5++;
    }
    if("MerchItem6" == FoodItem){
        MerchItem6++;
    }
    if("MerchItem7" == FoodItem){
        MerchItem7++;
    }
    
    localStorage.setItem("MerchItem1", MerchItem1)
    localStorage.setItem("MerchItem2", MerchItem2)
    localStorage.setItem("MerchItem3", MerchItem3)
    localStorage.setItem("MerchItem4", MerchItem4)
    localStorage.setItem("MerchItem5", MerchItem5)
    localStorage.setItem("MerchItem6", MerchItem6)
    localStorage.setItem("MerchItem7", MerchItem7)

    UpdateCardText('MerchItem1', MerchItem1, 'MerchItemName')
    UpdateCardText('MerchItem2', MerchItem2, 'MerchItemName')
    UpdateCardText('MerchItem3', MerchItem3, 'MerchItemName')
    UpdateCardText('MerchItem4', MerchItem4, 'MerchItemName')
    UpdateCardText('MerchItem5', MerchItem5, 'MerchItemName')
    UpdateCardText('MerchItem6', MerchItem6, 'MerchItemName')
    UpdateCardText('MerchItem7', MerchItem7, 'MerchItemName')
}

function ClickedACard(CardParent, Count, FoodItem){
    CardParent.querySelector('p').innerHTML = "You have ordered " + Count + " " + FoodItem
}

function UpdateCardText(CardParent, Count, FoodItem){
    ElList.querySelector("#" + CardParent).innerHTML = "<h2>"+ FoodItem +"</h2><p>You currently have " + Count + " orders of " + FoodItem.toLowerCase() + " in your basket</p>\
    <div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"" + CardParent + "\")'>&#8722;</button>\
    <button type='button' onclick='AddToOrderList(\"" + CardParent + "\")''>&#43;</button></div>"
}