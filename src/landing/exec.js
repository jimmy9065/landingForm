///////////////////////////////////////////////////
//
// Callback when retrieve the cookie
//
///////////////////////////////////////////////////
var callback = function() {
  console.log('success');
  let p = document.createElement('p');
  p.innerHTML = "Welcome User";
  insertNode.appendChild(p);
}

createLandingForm('xsyLandingDiv');

