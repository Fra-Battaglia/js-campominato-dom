function generate_cell(number) {
	let cell = document.createElement('div');
	cell.classList.add('grid-cell')
	cell.innerText = number;
	return cell
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

function generate_bombs (min, max) {
	min = 1;
	max= 100;

	const bombsArray = [];
	i = 0
	while (i < 16) {
		let bomb = getRandomInt (100)

		if ( ! bombsArray.includes(bomb)) {
			bombsArray.push(bomb)

			i++
		}
		
	}
	return bombsArray
}

let bombs = generate_bombs (100);

console.log(bombs);


let generate_grid = document.getElementById('grid-generator');
generate_grid.addEventListener('click', function() {
	for (let i = 1; i <= 100; i++) {
		let grid = document.getElementById('container-grid');
		let grid_cell = generate_cell(i);
		grid.append(grid_cell);
		
		grid_cell.addEventListener('click', function(){
			console.log(this.innerText);

			if (bombs.includes(parseInt(this.innerText))) {
				this.classList.add('bomb');
				alert('hai cliccato una bomba');
			}

			else {
				this.classList.add('clicked');
			}
		})
	}
});