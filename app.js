const name = document.querySelector('.name-input');
const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const expenseBtn = document.querySelector('.expense-btn');
const table = document.querySelector('.table');

// ----event listners----
expenseBtn.addEventListener('click',generateExpense)

//-----functions-----
// function checkInput(){
//     if(name.value === ''){
//         alert('Enter the name where you made your expense!')
//         return;
//     }
//     if(date.value === ''){
//         alert('Enter date!');
//         return;
//     }
//     if(isNaN(amount.value) || amount.value === '' || amount.value === 0 ){
//         alert('Invalid amount. Please enter a valid input.')
//         return;
//     }
//     return;
// }


// generate expense
function generateExpense(event){
    event.preventDefault();
    
    if(name.value === ''){
        alert('Enter the name where you made your expense!')
        return;
    }
    if(date.value === ''){
        alert('Enter date!');
        return;
    }
    if(isNaN(amount.value) || amount.value === '' || amount.value === 0 ){
        alert('Invalid amount. Please enter a valid input.')
        amount.value = '';
        return;
    }
    
    const nameValue = name.value;
    const dateValue = date.value;
    const amountValue = amount.value;
    // tr
    const tr = document.createElement('tr');
    // td
    const td1 = document.createElement('td');
    td1.textContent = nameValue;
    const td2 = document.createElement('td');
    td2.textContent = dateValue;
    const td3 = document.createElement('td');
    td3.innerHTML = `$${amountValue}`;
    // delete button
    const tdBtn = document.createElement('button');
    tdBtn.textContent = 'Delete';
    tdBtn.classList.add('td-btn');
    const td4 = document.createElement('td');
    td4.addEventListener('click',function(event){
        event.target.parentElement.parentElement.remove();
    })
    // appending children
    td4.appendChild(tdBtn);
    tr.append(td1,td2,td3,td4);
    table.appendChild(tr);
    name.value = '';
    date.value = '';
    amount.value = '';
    // console.log('hello world')
   
}

