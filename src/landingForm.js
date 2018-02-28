var createLandingForm = function (targetId) {
  var form = document.createElement("div");
  var insertNode = document.getElementById(targetId);
  document.body.appendChild(form, insertNode);
  drawForm(form, false);
}

///////////////////////////////////////////////////
//
// hide the cover page and form, and continue to play
//
///////////////////////////////////////////////////
var hideForm = function(hasCookie) {
  let el = document.getElementById('xsyCoverDiv');
  el.style.display = "none";
  el = document.getElementById('xsyFormDiv')
  el.style.display = "none";
  document.body.style.overflowY = "visible";
  if(hasCookie == true && control_el)
    callback_continue();
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

