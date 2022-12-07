function generate_cell(number) {
	let cell = document.createElement('div');
	cell.classList.add('grid-cell')
	cell.innerText = number;
	return cell
}

function generate_bombs(min, max) {
	for(let i = min; i < max; min++) {
		Math.floor(Math.random() * 16 );

		let min
		let max
		let bombs = i
		
	}
}

let bombs = generate_bombs(1, 100);

let generate_grid = document.getElementById('grid-generator');
generate_grid.addEventListener('click', function() {
	for (let i = 1; i <= 100; i++) {
		let grid = document.getElementById('container-grid');
		let grid_cell = generate_cell(i);
		grid.append(grid_cell);

		grid_cell.addEventListener('click', function(){
			console.log(this.innerText);
			this.classList.toggle('clicked')
		})
	}
});