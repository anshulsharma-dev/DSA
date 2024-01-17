const about = () => {
  console.log("Data Structures and Alogorithms");
};

//                           Pattern Problem
// ****
// ****
// ****
// ****
const patterProblem1 = (n) => {
  // loop to repeat a task for n rows
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
};
// patterProblem1(4);

//             PATTERN PROBLEM 2
//      *
//     **
//    ***
//   ****
//  *****
// ******
const patterProblem2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = i;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
};
// patterProblem2(6);

//               PATTERN PROBLEM 3
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
const patterProblem3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * i - 1;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
};
// patterProblem3(6);

//                                     PATTERN PROBLEM 4
// ******
// *****
// ****
// ***
// **
// *
const patterProblem4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let stars = n - i + 1;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
};
// patterProblem4(6);

//                                      PATTERN PROBLEM 5

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
const upperTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * i - 1;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
};
const lowerTriangle = (n) => {
  for (let i = 1; i <= n - 1; i++) {
    let str = "";
    let spaces = i;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * (n - i) - 1;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
};
function patternProblem5(n) {
  upperTriangle(n);
  lowerTriangle(n);
}
// patternProblem5(5);

// PATTERN   PROBLEM  6

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
const upper = (n) => {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let stars = row;
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }
    let spaces = n - 2 * row;
    for (let k = 1; k <= spaces; k++) {
      str += " ";
    }
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }
    console.log(str);
  }
};

const middle = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
  }
  console.log(str);
};

const downer = (n) => {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let leftStars = (n - 1) / 2 - row + 1;
    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }
    let spaces = 2 * row - 1;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }
    console.log(str);
  }
};

const patternButterfly = (n) => {
  upper(n);
  middle(n);
  downer(n);
};
// patternButterfly(9);
