var insertNode;
var form;

var createLandingForm = function (targetId) {
  console.log('creating Form');
  form = document.createElement("div");
  form.style.height = "150px";
  form.id = 'xsyFormDiv'

  insertNode = document.getElementById(targetId);
  insertNode.appendChild(form, insertNode);

  let cookie = document.cookie;
  let matcher = /xsy_mc_tln/;
  console.log("extracted cookie:"+matcher.exec(cookie));

  if(!matcher.test(cookie)){
    drawForm(form, false);
  }
  else{
    hideForm(true);
  }
}

///////////////////////////////////////////////////
//
// hide the cover page and form, and continue to play
//
///////////////////////////////////////////////////
var hideForm = function(hasCookie) {
  console.log('hideForm')
  form.style.display = "none";
  if(hasCookie)
    callback();
};

//********************************************************* 
// 
// Extrack all the cookie that start with xsy_ 
// 
//********************************************************* 
function getXsyCookie(){ 
  let matcher = RegExp(/(xsy_[a-z]+_[a-z]+=[^;]+;)/, 'g'); 
  let aCookies = [], sCookies = document.cookie, cookie; 
  console.log('find all the cookies'); 
  while((cookie = matcher.exec(sCookies)) != null){ 
    console.log(cookie[1]); 
    aCookies.push(cookie[1]); 
  } 

  console.log(aCookies.join('')); 
  return aCookies.join(''); 
} 
