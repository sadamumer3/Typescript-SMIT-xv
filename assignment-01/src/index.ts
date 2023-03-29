const renderTable = (json:[]):void=>
{
  // columns to set in table and to use from api data
  let cols:string[] = ["name","email","phone","website"];
  let colsHTML:string = '<div class="header__item"><a id="#" class="filter__link" >#</a></div>';

  cols.forEach((key,value) => {
    colsHTML += ' <div class="header__item"><a id="'+key+'" class="filter__link" >'+key.toUpperCase()+'</a></div>'; 
  });

  let rowsHTML:string = '';
  
  // looping through each record
  for (let index = 0; index < json.length; index++) {
    const element:[] = json[index];

    let trHTML:string = '<div class="table-row"><div class="table-data">'+(index+1)+'</div>';

  // looping through each data field
    for (const key in element) {
      // only using cols defined on line:4
      if (cols.includes(key) && Object.prototype.hasOwnProperty.call(element, key)) {
      trHTML+='<div class="table-data">'+element[key]+'</div>';
      }
    }

    trHTML+='</div>';
    rowsHTML +=trHTML;
  
  }

  let thead = document.getElementById("thead")! as HTMLInputElement;
  thead.innerHTML = colsHTML;

  let tbody = document.getElementById("tbody")! as HTMLInputElement;
  tbody.innerHTML = rowsHTML;

  // console.log(rowsHTML);
}

const renderError = (errorText:string):void=>
{
  let msgHTML:string = '<h1 style="  width: 100%;  text-align: center;  background-color: #ed7d7d;  color: whitesmoke;  padding: 10px;">Coudn\'t Load Data Kindly check console.</h1>';

  let table = document.getElementById("table")! as HTMLInputElement;
  table.innerHTML = msgHTML;

  console.log("Error",errorText);
}


//
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 ) {
    if (this.status == 200) {

    let json:[] = JSON.parse(this.responseText);
    renderTable(json);

  }else{
    renderError(xhttp.statusText);
 }
}
};


xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
