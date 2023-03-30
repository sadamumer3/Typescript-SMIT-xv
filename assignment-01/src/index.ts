
const renderTable = (json:[DataForm]):void=>
{
  // columns to set in table and to use from api data
  let cols:string[] = ["id","name","email","phone","website"];
  let colsHTML:string = '';

  cols.forEach((key,value) => {
    colsHTML += ' <div class="header__item"><a id="'+key+'" class="filter__link" >'+key.toUpperCase()+'</a></div>'; 
  });

  let rowsHTML:string = '';
  
  // looping through each record
  for (let index = 0; index < json.length; index++) {
    const element:DataForm = json[index];

    let trHTML:string = '<div class="table-row"><div class="table-data">'+element.id+'</div>';
    trHTML+='<div class="table-data">'+element.name+'</div>';
    trHTML+='<div class="table-data">'+element.email+'</div>';
    trHTML+='<div class="table-data">'+element.phone+'</div>';
    trHTML+='<div class="table-data">'+element.website+'</div>';

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

interface DataForm  {
  id:number,
  name:string
  email: string,
  phone:number,
  website:string
};

const main = async()=>
{

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange =await function() {
    if (this.readyState == 4 ) {
      if (this.status == 200) {
  
      let json:[DataForm] = JSON.parse(this.responseText);

      let sadam:DataForm ={id:11,name:"Saddam Umer",email:"sadamumer3@gmail.com",phone:923168552260,website:"sadamumer3.io"};
      json.push(sadam);

      renderTable(json);
  
    }else{
      renderError(xhttp.statusText);
   }
  }
  };
  
  
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}

main();