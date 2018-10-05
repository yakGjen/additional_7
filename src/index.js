module.exports = function solveSudoku(matrix) {
	let arr = matrix;
  let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	checkSingle(arr);
	checkProbability(arr);
	// 1-й квадрат в центре не 2, а 2 вероятности
	// проверить логику прохода по второй строке
	
	function checkSingle(arr) {
		sample = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ???
		arr.forEach((item, j) => {
			for(let i = 0; i < item.length; i++) {
				if (item[i] === 0) {
					checkTr(item);
					checkCol(i);
					checkSmallSqure(i, item, j);
				}
				// подстановка значений
				if (sample.length === 1) {
					item[i] = sample[0];
					//sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				}
				sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			}
			//console.log('br');
		});
		//console.log(arr);
		/*console.log(`
			[6, 5, 0, 7, 3, 0, 0, 8, 0],
			[0, 0, 0, 4, 8, 0, 5, 3, 0],
			[8, 4, 0, 9, 2, 5, 0, 0, 0],
			[0, 9, 0, 8, 0, 0, 0, 0, 0],
			[5, 3, 0, 2, 0, 9, 6, 0, 0],
			[0, 0, 6, 0, 0, 0, 8, 0, 0],
			[0, 0, 9, 0, 0, 0, 0, 0, 6],
			[0, 0, 7, 0, 0, 0, 0, 5, 0],
			[1, 6, 5, 3, 9, 0, 4, 7, 0]	
		`);*/
	}
	
	//checkSingle(arr);
	
	function checkTr(tr) {
		//console.log(sample);
		tr.forEach(item => {
			if (sample.indexOf(item) !== -1) {
				sample.splice(sample.indexOf(item), 1);
			}
		});
	}
	function checkCol(posZer) {
		arr.forEach(item => {
			if(sample.indexOf(item[posZer]) !== -1) {
				sample.splice(sample.indexOf(item[posZer]), 1);
			}
		});
	}
	function checkSmallSqure(posZer, tr, numStr) {
		// матрица квадратов
		const sq1 = [arr[0][0], arr[0][1], arr[0][2], arr[1][0], arr[1][1], arr[1][2], arr[2][0], arr[2][1], arr[2][2]];
		const sq2 = [arr[0][3], arr[0][4], arr[0][5], arr[1][3], arr[1][4], arr[1][5], arr[2][3], arr[2][4], arr[2][5]];
		const sq3 = [arr[0][6], arr[0][7], arr[0][8], arr[1][6], arr[1][7], arr[1][8], arr[2][6], arr[2][7], arr[2][8]];
		const sq4 = [arr[3][0], arr[3][1], arr[3][2], arr[4][0], arr[4][1], arr[4][2], arr[5][0], arr[5][1], arr[5][2]];
		const sq5 = [arr[3][3], arr[3][4], arr[3][5], arr[4][3], arr[4][4], arr[4][5], arr[5][3], arr[5][4], arr[5][5]];
		const sq6 = [arr[3][6], arr[3][7], arr[3][8], arr[4][6], arr[4][7], arr[4][8], arr[5][6], arr[5][7], arr[5][8]];
		const sq7 = [arr[6][0], arr[6][1], arr[6][2], arr[7][0], arr[7][1], arr[7][2], arr[8][0], arr[8][1], arr[8][2]];
		const sq8 = [arr[6][3], arr[6][4], arr[6][5], arr[7][3], arr[7][4], arr[7][5], arr[8][3], arr[8][4], arr[8][5]];
		const sq9 = [arr[6][6], arr[6][7], arr[6][8], arr[7][6], arr[7][7], arr[7][8], arr[8][6], arr[8][7], arr[8][8]];
		// каталог ответов с указателями на соответствующую матрицу
		const smSq1 = {
			'arr[0][0]': sq1,
			'arr[0][1]': sq1,
			'arr[0][2]': sq1,
			'arr[1][0]': sq1,
			'arr[1][1]': sq1,
			'arr[1][2]': sq1,
			'arr[2][0]': sq1,
			'arr[2][1]': sq1,
			'arr[2][2]': sq1,
		};
		const smSq2 = {
			'arr[0][3]': sq2,
			'arr[0][4]': sq2,
			'arr[0][5]': sq2,
			'arr[1][3]': sq2,
			'arr[1][4]': sq2,
			'arr[1][5]': sq2,
			'arr[2][3]': sq2,
			'arr[2][4]': sq2,
			'arr[2][5]': sq2,
		};
		const smSq3 = {
			'arr[0][6]': sq3,
			'arr[0][7]': sq3,
			'arr[0][8]': sq3,
			'arr[1][6]': sq3,
			'arr[1][7]': sq3,
			'arr[1][8]': sq3,
			'arr[2][6]': sq3,
			'arr[2][7]': sq3,
			'arr[2][8]': sq3,
		};
		const smSq4 = {
			'arr[3][0]': sq4,
			'arr[4][1]': sq4,
			'arr[5][2]': sq4,
			'arr[3][0]': sq4,
			'arr[4][1]': sq4,
			'arr[5][2]': sq4,
			'arr[3][0]': sq4,
			'arr[4][1]': sq4,
			'arr[5][2]': sq4,
		};
		const smSq5 = {
			'arr[3][3]': sq5,
			'arr[3][4]': sq5,
			'arr[3][5]': sq5,
			'arr[4][3]': sq5,
			'arr[4][4]': sq5,
			'arr[4][5]': sq5,
			'arr[5][3]': sq5,
			'arr[5][4]': sq5,
			'arr[5][5]': sq5,
		};
		const smSq6 = {
			'arr[3][6]': sq6,
			'arr[3][7]': sq6,
			'arr[3][8]': sq6,
			'arr[4][6]': sq6,
			'arr[4][7]': sq6,
			'arr[4][8]': sq6,
			'arr[5][6]': sq6,
			'arr[5][7]': sq6,
			'arr[5][8]': sq6,
		};
		const smSq7 = {
			'arr[6][0]': sq7,
			'arr[6][1]': sq7,
			'arr[6][2]': sq7,
			'arr[7][0]': sq7,
			'arr[7][1]': sq7,
			'arr[7][2]': sq7,
			'arr[8][0]': sq7,
			'arr[8][1]': sq7,
			'arr[8][2]': sq7,
		};
		const smSq8 = {
			'arr[6][3]': sq8,
			'arr[6][4]': sq8,
			'arr[6][5]': sq8,
			'arr[7][3]': sq8,
			'arr[7][4]': sq8,
			'arr[7][5]': sq8,
			'arr[8][3]': sq8,
			'arr[8][4]': sq8,
			'arr[8][5]': sq8,
		};
		const smSq9 = {
			'arr[6][6]': sq9,
			'arr[6][7]': sq9,
			'arr[6][8]': sq9,
			'arr[7][6]': sq9,
			'arr[7][7]': sq9,
			'arr[7][8]': sq9,
			'arr[8][6]': sq9,
			'arr[8][7]': sq9,
			'arr[8][8]': sq9,
		};
		
		const arrSmSq = [smSq1, smSq2, smSq3, smSq4, smSq5, smSq6, smSq7, smSq8, smSq9];
		
		let sampleStr = `arr[${numStr}][${posZer}]`;
		
		arrSmSq.forEach(obj => {
			if (obj.hasOwnProperty(sampleStr)) {
				let square = obj[sampleStr];
				square.forEach(iremSquare => {
					if (sample.indexOf(iremSquare) !== -1) {
						sample.splice(sample.indexOf(iremSquare), 1);
					}
				});
			}
		});
	}
	
	function checkProbability() {
		arr.forEach((item, j) => {
			for(let i = 0; i < item.length; i++) {
				if (item[i] === 0) {
					checkTr(item);
					checkCol(i);
					checkSmallSqure(i, item, j);
				}
				// подстановка значений
				if (sample.length === 1) {
					item[i] = sample[0];
					//sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				}
				sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			}
			//console.log(item);
			//console.log('br');
		});
		//console.log(arrProb);
	}
	return arr;
}
