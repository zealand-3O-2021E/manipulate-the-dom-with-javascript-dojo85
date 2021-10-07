let listItems = document.getElementsByTagName('li');
let uList = document.getElementById('listUnhealthy');

for (let k = 0 ; k < listItems.length; k++){
    let item = listItems[k];
    if(item.getAttribute('class') == 'unhealthy'){
        uList.appendChild(item);
    }
}

document.getElementById('unhide').addEventListener('click', unhideItems);
document.getElementById('addButton').addEventListener("click", addItem);
document.getElementById('itemInput').addEventListener('keyup', 
    function(e){ 
        if(e.key == 'Enter')
        {
            addItem();
        }
    });

for (let j = 0; j < listItems.length; j++){
    let oldItems = document.getElementsByTagName('li');
    oldItems[j].addEventListener("click", () => hideItem(listItems[j].id));
    oldItems[j].style.cursor = "pointer";
}

function addItem(){
    let textField = document.getElementById('itemInput');
    let item = textField.value;
    if(item === ""){
        console.log('Field is empty')
        alert("The input field is empty.");
        return;
    }
    let hList = document.getElementById('list');
    uList = document.getElementById('listUnhealthy');
    let newLi = document.createElement('li');
    let text = document.createTextNode(item);
    newLi.appendChild(text);
    newLi.setAttribute('id', getNextId());    
    newLi.style.cursor = "pointer";
    newLi.addEventListener("click", () => hideItem(newLi.id));

    let chekcBox = document.getElementById('checkUnhealthy').checked;
    if(chekcBox)
    {
        newLi.setAttribute('class','unhealthy'); 
        uList.appendChild(newLi);  
    }
    else{
        newLi.setAttribute('class','healthy'); 
        hList.appendChild(newLi);  
    } 
    textField.value = "";
}

function getNextId() {
    let list = document.getElementsByTagName('li');
    let id = 0;
    if(list.length === 0){
        return id = 1;
    }
    for (let i = 0; i < list.length; i++){
        if(list[i].id > id){
            id = list[i].getAttribute('id');
        }        
    }
    return ++id;
}

function hideItem(id){
    let item = document.getElementById(id);
    if(item !== null) {
       item.setAttribute('hidden', true); 
    }    
}

function unhideItems(){
    let list = document.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++){
        list[i].removeAttribute('hidden');
    }
}

