////////////////////////////////////////
//
//  Load the form in html, and set
//  the onplay event callback = showForm(this);
//  The form.js must be loaded in the
//  body before the video is created;
//
/////////////////////////////////////////
var createCoverForm = function() {
  var background = document.createElement("div");
  var form = document.createElement("div");

  background.id = "xsyCoverDiv"
  background.style = "display:none;position:fixed;width:100%;height:100%;background:#000;z-index:2;top:0;left:0;opacity:0.7;"

  form.id = "xsyFormDiv"
  form.style = "display:none;background:#fff;padding:20px 10px 20px 10px;line-height:30px;width:40%;left:30%;top:35%;color:#000;z-index:2;position:fixed;text-align:center";

  document.body.appendChild(background, document.body.lastChild);
  document.body.appendChild(form, background);

  drawForm(form, true);
};

///////////////////////////////////////////////////
//
// Show the Form and Cover Page
//
///////////////////////////////////////////////////
var showForm = function(sender) {
  let cookie = document.cookie;
  console.log(cookie);
  let matcher = /xsy_mc_tln/;

  if(sender)
    control_el = sender;

  console.log("extracted cookie:"+matcher.exec(cookie));
  if(!matcher.test(cookie)){
    console.log('no cookie');

    callback_trigger();

    let cover = document.getElementById('xsyCoverDiv');
    let form = document.getElementById('xsyFormDiv');
    cover.style.display = "block";
    form.style.display = "inline";
    document.body.style.overflowY = "hidden";
  }
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

