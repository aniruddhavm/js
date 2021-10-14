const Amount = document.querySelector("#Amountt");
const spentOn = document.querySelector("#SpentOn");
const btn = document.querySelector("#button-addon2");
const description = document.querySelector("#expenseTable");
// const amount = document.querySelector("#amt");
let arr = [];
// const obj = {};
let totalExpnse = 0;
function onclick(){
    const obj = {};
    obj.price=parseInt(Amount.value);
    obj.desc=spentOn.value;
    obj.moment=new Date();
    arr.push(obj)
    // console.log(arr);
    totalExpnse=totalExpnse+obj.price;
    
    const allExpenseTable = arr.map(expense => createListItems(expense));
    const joinAllExpenseElement = allExpenseTable.join('');
    // console.log(allExpenseTable);
    description.innerHTML = joinAllExpenseElement;
    Amount.value=null;
    spentOn.value=null;
}
btn.addEventListener("click",onclick,false);

function deletefunction(ani)
{
    newarr=[];
    // console.log(`function called  wit ${ani}`);
    for (let x of arr){
        if(ani!=x.moment.valueOf()){
            newarr.push(x);
        }
        else{totalExpnse=totalExpnse-x.price}
    }
    arr=newarr;
    document.querySelector("#headtotal").textContent = "Total : "+totalExpnse;
    render(arr);
}
function render(newarr){
    const allExpenseTable = newarr.map(expense => createListItems(expense));
    const joinAllExpenseElement = allExpenseTable.join('');
    // console.log(allExpenseTable);
    description.innerHTML = joinAllExpenseElement;   
}
function createListItems({desc , price , moment}){
    {
        document.querySelector("#headtotal").textContent = "Total : "+totalExpnse;
        return ` 
        <li class="list-group-item d-flex justify-content-between">
            <div class="d-flex flex-column">
                ${desc}
                <small class="text-muted">${moment.toLocaleDateString("en-US",{year:"numeric", month:"long",day: "numeric"})}</small>
            </div>
            <div>
                <span class="px-5">
                    ${price}
                </span>
                <button type="button" class="btn btn-outline-danger btn-sm" id= "delete" onclick="deletefunction(${moment.valueOf()})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>`
    }
}