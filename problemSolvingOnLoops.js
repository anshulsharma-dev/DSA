//                     GCD or HCF

const gcd = (a, b) => {
  let ans = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return console.log(ans);
};
// gcd(88 , 56)


//                       Euclid's  Algorithm for finding gcd
const euclidALgo = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return console.log(a);
};
// euclidALgo(120, 99);

const recursiveEuclidAlgo = (a, b) => {
  if (b === 0 ) {
    return a;
  }
  else  return recursiveEuclidAlgo(b, a % b);
};
console.log(recursiveEuclidAlgo(190, 24));
