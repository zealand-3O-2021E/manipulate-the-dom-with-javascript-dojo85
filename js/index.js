// //Write your Javascript code here
// // console.log("Shoppinglist")

// // let one = document.getElementById('0');
// // console.log(one);

// // let list1 = document.getElementsByTagName('li');
// // console.log(list1);

// // for (let i = 0; i < list1.length; i++){
// //     console.log(list1[i]);
// // }

// let nodes = document.getElementsByClassName('unhealthy');

// // for (let j = 0  ; j < nodes.length ; j++){
// //     console.log(nodes[j]);
// // }

// // // the change og value actually alters the list
// // // for the next execution of the loop
// for (let k = 0 ; k < nodes.length;){
//     nodes[k].setAttribute('class','healthy');
// }

// // let someItem = document.getElementById('1');

// // let parentNode = someItem.parentNode;
// // console.log(parentNode);
// // let first = parentNode.firstElementChild;
// // console.log(first);
// // first.setAttribute('style', 'background-color: blue;')
// // let last = parentNode.lastElementChild;
// // last.setAttribute('style','background-color: black;')

// // let newChild = document.createElement('li');
// // console.log(newChild);
// // newChild.innerHTML = 'Chocolate';
// // document.getElementById('list').appendChild(newChild);


// //Task 7
// // let unhealthy = document.querySelectorAll('ul > .unhealthy');
// // for (let i = 0; i < unhealthy.length; i++){
// //     console.log(unhealthy[i]);
// // }

// // let listNode = document.getElementById('listUnhealthy');

// // for (let i = 0; i < unhealthy.length; i++){
// //     listNode.appendChild(unhealthy[i])
// // }

// //Task 8
// let element = document.getElementById('0');
// element.innerText='Bananas';
// let beer = document.getElementById('2');
// beer.innerText = 'Bier';

// //Task 9
// // let list = document.getElementById('list');
// // list.removeChild(list.childNodes[0]);


// // //Task 10
// let para = document.createElement('p');
// let heading = document.createElement('h1');
// heading.innerText = 'this is a heading';
// para.appendChild(heading);
// document.getElementById('para1').innerHTML = para.innerHTML;



// let button = document.getElementById('firstButton');
// button.innerText = "Press here";
// button.setAttribute('class', 'btn btn-warning');

// let hi = document.createTextNode('hi');
// let para = document.getElementById('para1');
// para.appendChild(hi);
// para.innerHTML += '<h1>hello</h1>';

document.getElementById('addButton').addEventListener("click", addItem);

function addItem(){
    let item = document.getElementById('itemInput').value;
    let hList = document.getElementById('list');
    let uList = document.getElementById('listUnhealthy');
    let newLi = document.createElement('li');
    let text = document.createTextNode(item);
    newLi.appendChild(text);
    newLi.setAttribute('id', getNextId())

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
}

function getNextId() {
    let list = document.getElementsByTagName('li');
    let id;
    if(list.length == 0){
        return id = 1;
    }
    for (let i = 0; i < list.length; i++){
        id = list[i].getAttribute('id');
    }
    return ++id;
}

