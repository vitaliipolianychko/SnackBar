    "use strict"

	class snackBar {
	  handleClick() {
		let snack = document.querySelector('.snackbar');
		snack.classList.add('show');
		snack.innerHTML="Default Text";
		setTimeout( () => snack.classList.remove('show'),3000);
	  }

	  handleClick1() {
		let snack = document.querySelector('.snackbar');
		let param = document.querySelector('#inpt').value;

		if (param ==='') {
		  snack.innerHTML='Input cannot be empty';
		}

		else { 
		  snack.innerHTML=param;
		}	
		
		snack.classList.add('show');
		setTimeout( () => snack.classList.remove('show'),3000);
	  }
    }

	let user = new snackBar();