function delay(x) {
  return new Promise(resolve => {
	setTimeout(() => {
	  resolve(x - 1);
	}, 1000);
  });
}

async function asyncClick() {

  // variable declaration
  x = document.getElementById("one").value;
  var t;
  target = document.getElementById("target");
  error = document.getElementById("error");

  // wait x seconds if x is valid
  if (x > 0) {

	if (error.firstChild)
	  error.removeChild(error.firstChild);
	while (x > 0) {
	  t = document.createTextNode("Please wait " + x + " seconds");
	  if (target.firstChild)
		target.removeChild(target.firstChild);
	  target.appendChild(t);
	  x = await delay(x);
	}

	// finished processing
	t = document.createTextNode("Finished Processing.");
	if (target.firstChild)
	  target.removeChild(target.firstChild);
	target.appendChild(t);

  } else {
	// invalid x, show error message
	t = document.createTextNode("Error! Please input a positive number.")
	if (error.firstChild)
	  error.removeChild(error.firstChild);
	error.appendChild(t);
	if (target.firstChild)
	  target.removeChild(target.firstChild);
  }

  return;
}
