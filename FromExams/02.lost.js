function args(params) {
    let dimensions = params[0].split(" "),
        rows = dimensions[0],
        cols = dimensions[1];

    let maze = mm(rows, cols);

    let row = (rows / 2) | 0,
        col = (cols / 2) | 0,
        point = maze[row][col],
        bit,
        lastRow = row,
        lastCol = col,
        visited = true,
        delta;

    while (true) {
        if ((row <= 0 || row >= rows - 1) || (col <= 0 || col >= cols - 1)) {
            console.log("No rakiya, only JavaScript " + lastRow + " " + lastCol);
            break;
        }

        if (point % 2 === 1) {
            delta = row - 1;
            if (maze[delta][col] !== true) {
                lastRow = row - 1;
                lastCol = col;
                row--;
                point = maze[row][col];
                continue;
            }
        }
        bit = (point >> 1) & 1; 
        if (bit === 1) {
            delta = col + 1;
            if (maze[row][delta] !== true) {
                lastRow = row;
                lastCol = col + 1;
                col++;
                point = maze[row][col];
                continue;
            }
        }
        bit = (point >> 2) & 1; 
        if (bit === 1) {
            delta = row + 1;
            if (maze[delta][col] !== true) {
                lastRow = row + 1;
                lastCol = col;
                row++;
                point = maze[row][col];
                continue;
            }
        }
        bit = (point >> 3) & 1; 
        if (bit === 1) {
            delta = col - 1;
            if (maze[row][delta] !== true) {
                lastRow = row;
                lastCol = col - 1;
                col--;
                point = maze[row][col];
                continue;
            }
        } else {
            console.log("No JavaScript, only rakiya " + lastRow + " " + lastCol);
            break;
        }
    }
    function mm(rows, cols) {
        let maze = new Array(rows);
        for (let i = 0; i < rows; i++) {
            maze[i] = new Array(cols);
            let figures = params[i + 1].split(" ").map(Number);
            for (let j = 0; j < cols; j++) {
                maze[i][j] = figures[j];
            }
        }
        return maze;
    }
}

args([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);