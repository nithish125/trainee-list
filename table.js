var table = document.createElement('table');
var tr = document.createElement('tr');
var arrheader = ['photo', 'Name', 'mobile','batch', 'git', 'referby', 'location'];
var array = [{
    photo: 1,
    Name: 'arunkumar',
    mobile: '6374323635',
    batch: 'FSD-10',
    git:"arunnnj",
    referby:"arun",
    location:'chennai'
  },
  {
    photo: 1,
    Name: 'prem',
    mobile: 'Ashiq',
    batch: 'FSD-10',
    git:"",
    referby:"",
    location:'chennai'
  },
  
  {
    photo:1,
    Name: 'pradeep',
    mobile: 'Ashiq',
    batch: 'FSD-10',
    git:"VVVVVV",
    referby:"MMM",
    location:'chennai'
  },
  {
    photo: 1,
    Name: 'srikanh',
    mobile: 'Ashiq',
    batch: 'FSD-10',
    git:"MMMMMMMM",
    referby:"MMMMM",
    location:'chennai'
  }
];

for (var j = 0; j < arrheader.length; j++) {
  var th = document.createElement('th'); //column
  var text = document.createTextNode(arrheader[j]); //cell
  th.setAttribute("class","bor")
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);

for (var i = 0; i < array.length; i++) {
  var tr = document.createElement('tr');
var td=[ td1,td2,td3,td4,td5,td6]
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  var text1 = document.createTextNode(array[i]. photo);
  var text2 = document.createTextNode(array[i].Name);
  var text3 = document.createTextNode(array[i].mobile);
  var text4 = document.createTextNode(array[i].batch);
  var text5 = document.createTextNode(array[i].git);
  var text6 = document.createTextNode(array[i].referby);
  var text7 = document.createTextNode(array[i].location);

  var img=document.createElement("img")
  img.src=
  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);
  td7.appendChild(text7);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);

  table.setAttribute("border", "2px solid")

  table.appendChild(tr);
}
document.body.appendChild(table);