var control_el;
var submitURL = "http://localhost:8082/api";
var aid = 120874;

//// + "="///////////////////////////////////////////////
//
// Customize form component
// In drawForm(), you can customize the conponent
// that you want to display on the form
//
///////////////////////////////////////////////////
var drawForm = function(form, isRegister) {
  //Name label and input
  let div = document.createElement('div');
  let label = document.createElement('label');
  label.innerHTML = 'Name:';
  label.style.display = "inline-block"
  label.style.width = "80px";
  label.style.textAlign = "right";
  var name = document.createElement('input');
  name.id = 'xsyFormName';
  div.appendChild(label);
  div.appendChild(name);

  //append the component to the form
  form.appendChild(div);

  //Email label and input
  div = document.createElement('div');
  label = document.createElement('label');
  label.innerHTML = 'email:';
  label.style.display = "inline-block"
  label.style.width = "80px";
  label.style.textAlign = "right";
  var email = document.createElement('input');
  email.id = 'xsyFormEmail';
  div.appendChild(label);
  div.appendChild(email);

  //append the component to the form
  form.appendChild(div);

  //Phone label and input
  div = document.createElement('div');
  label = document.createElement('label');
  label.innerHTML = 'phone:';
  label.style.display = "inline-block"
  label.style.width = "80px";
  label.style.textAlign = "right";
  var cell = document.createElement('input');
  cell.id = 'xsyFormCell';
  div.appendChild(label);
  div.appendChild(cell);

  //append the component to the form
  form.appendChild(div);

  //submit button and cancel button
  div = document.createElement('div');
  div.style.margin = "10px 10px 0px 10px"
  let btn1 = document.createElement('button');
  btn1.innerHTML = 'Submit';
  btn1.style.marginLeft="10px";
  btn1.style.marginRight="10px";
  btn1.onclick = submitForm;
  if(isRegister){
    let btn2 = document.createElement('button');
    btn2.innerHTML = 'Cancel';
    btn2.style.marginLeft="10px";
    btn2.onclick = hideForm;
    div.appendChild(btn2);
  }
  div.appendChild(btn1);

  //Do not edit
  //append the components to the form
  form.appendChild(div);
}

///////////////////////////////////////////////////
//
// Extract the information from the form and submit
//
///////////////////////////////////////////////////
var submitForm = function() {
  //Extract the info from Form. You might need to customize it, 
  //if you use other setting for the form.
  let name = document.getElementById('xsyFormName').value;
  let email = document.getElementById('xsyFormEmail').value;
  let cell = document.getElementById('xsyFormCell').value;

  //Cookie extractor
  let cookies = getXsyCookie();

  //Send the form, no need to change;
  if(name && email && cell){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", submitURL, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        let value = xhttp.responseText;
        document.cookie = "xsy_mc_tln=" + value + ";max-age=61516800";
        //in case the cookie is not written yet.
        hideForm(true);
      }
    }

    let obj = {name: name, email: email, cell: cell, uid:cookies, aid: aid};
    xhttp.send(JSON.stringify(obj));
  }
};
