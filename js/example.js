//Unordered list html element
let groceryList = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
let creamItem = document.createElement('li');
creamItem.innerText = 'cream';
groceryList.appendChild(creamItem);

// ADD NEW ITEM START OF LIST
let kaleItem = document.createElement('li');
kaleItem.innerText = 'kale';
groceryList.appendChild(kaleItem);
groceryList.insertBefore(groceryList.children[groceryList.children.length - 1], groceryList.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(let i = 0; i < groceryList.children.length; i+=1) {
    groceryList.children[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let listCount = groceryList.children.length;
let span = document.createElement('span');
span.innerText = listCount;
let h2 = document.getElementsByTagName('h2')[0];
h2.append(span);