/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
   console.log(board);
   //look for duplicates in each row
        for (let array of board){          
            for (let item of array)
        {
            if (item!=="."&array.indexOf(item)!==array.lastIndexOf(item))
            {
                console.log('item', item);
                return false;
            }
            
        };
    };
      


    //look for duplicates in each column
    for (let array of board){//currentRow   
     for (let i=0; i<9; i++){//currentCol
            for (var j=1; j<9; j++){//rowToCompare
                if(array[i]!=="."&&array[i]===board[j][i]&&array!==board[j])
                {
                    console.log(board[j][i]);
                    return false;
                }
              
            }
        }
      };
        
        //look for duplicates in each 3x3 sub-box
        for (let currentRow = 0; currentRow < 9; currentRow++) {
            for (let currentCol = 0; currentCol < 9; currentCol++) {
                const value = board[currentRow][currentCol];
                
                const startRow = currentRow - (currentRow % 3);
                const startCol = currentCol - (currentCol % 3);



                for (let row = startRow; row < (startRow + 3); row++) {
                    for (let col = startCol; col < (startCol + 3); col++) {
                      //  console.log('board[currentRow][currentCol]',board[currentRow][currentCol]);
                     //   console.log('board[row][col]',board[row][col]);
                        if ((row !== currentRow) && (col !== currentCol)&&(value!==".")) {
                            if (board[row][col] === value) {
                                console.log('board[row][col]',board[row][col]);
                            return false;
                            }
                        }
                    }
                }
            }
        }
      
        
        return true;
};

console.log(isValidSudoku([[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]));