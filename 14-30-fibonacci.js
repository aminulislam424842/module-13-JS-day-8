function fibonacci(n) {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    let next = series[i - 2] + series[i - 1];
    series.push(next);
  }
  return series;                              
}

console.log(fibonacci(10)); 