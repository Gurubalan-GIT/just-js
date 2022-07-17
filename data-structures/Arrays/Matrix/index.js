class Matrix {
    constructor(row,col) {
        return Array(row).fill().map(() => Array(col).fill());
    }
}