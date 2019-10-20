1)
// *******
// ******
// *****
// ****
// ***
// **
// *

function getTriangle1(size) {
    let str = "";
   
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (b < a){
          str += "";
        } else {
          str += "*";
        }
      }str += "\n";
    }console.log(str);
   }
2)
//    *
//    **
//    ***
//    ****
//    *****
//    ******
//    *******

function getTriangle2(size) {
    let str = "";
   
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (b > a){
          str += "";
        } else {
          str += "*";
        }
      }str += "\n";
    }console.log(str);
   }

3)
// *****
// *****
// *****
// *****
// *****

function getSquare(size) {
    let str = "";
   
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (a===0 || a===size-1 || b===0 || b===size-1 ){
          str += "";
        } else {
          str += "*";
        }
      }str += "\n";
    }console.log(str);
   }

4)
//    *******
//    *     *
//    *     *
//    *     *
//    *     *
//    *     *
//    *******

function getEmptySquare(size) {
    let str = "";
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
         if (i === 0 || i === size - 1 || j === 0 || j === size- 1) {
   str += "*";
  }else {
  str += ' '; }
       
      }
        str += "\n";
    }
    console.log(str);
  }

5)
// *******
//  *    *
//   *   *
//    *  *
//     * *
//      **
//       *

function getEmptyTriangle1(size) {
    let str = "";
   
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (a===b || a===0 || b===size-1){
          str += "*";
        } else {
          str += " ";
        }
      }str += "\n";
    }console.log(str);
}

6)

// *      
// **     
// * *    
// *  *   
// *   *  
// *    * 
// *******

function getEmptyTriangle2(size) {
    let str = "";
   
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (a===b || b===0 || a===size-1){
          str += "*";
        } else {
          str += " ";
        }
      }str += "\n";
    }console.log(str);
}

