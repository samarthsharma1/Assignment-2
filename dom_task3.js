//Examine the document object

//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-Title');
console.log(headerTitle);
headerTitle.textContent ='Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML= '<h3>Hello</h3>';
headerTitle.style.borderBottom ='solid 3px #000';
