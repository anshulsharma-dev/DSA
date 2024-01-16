const about = () => {
  console.log("software engineer");
};

// Pattern Problem
const patterProblem = (n) => {
  // loop to repeat a task for n rows
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    // console.log(str);
  }
};

patterProblem(4);
patterProblem(9);
patterProblem(3);