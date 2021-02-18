module.exports = function check(str, bracketsConfig) {
  const res = [];

  for (let char of str) {
    for (let item of bracketsConfig) {
      if (char === item[0]) {
        res.push(char);
      } 
      if (char === item[1]) {
        const lastIndex = res.length - 1;
        if (res[lastIndex] === item[0]) {
          if (item[0] === item[1]) {
            const countItem = res.filter((item) => item === char);
            if (countItem.length % 2 === 0) {
              res.splice(-2);
            }
            continue;
          }
          res.pop();
        } else {
          return false;
        }
      }
    }
  }
  return res.length === 0;
};
