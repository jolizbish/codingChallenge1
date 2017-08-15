/*
n = number of days for which we have averages, also equal to dailyAvgs.length
k = max interval length
dailyAvgs = array of daily averages
subRange = array of numbers, is one subrange of dailyAvgs
*/

// FOR ALL RANGES
function countAvgPriceTrends(n, k, dailyAvgs) {
  // var totalResults = [];
  for (var i = 0; i <= n - k; i ++) { // is it <= or < ???
    // console.log(dailyAvgs.slice(i, i + k));
    calcIncreaseDecreaseDiff(k, dailyAvgs.slice(i, i + k))
  }
  // console.log(results);
}


// COUNTS ALL SUBRANGES
function calcIncreaseDecreaseDiff(k, subRange) {
  var results = [];
  for (var j = 0; j < k-1; j++) {
  var counter = 0;
    for (var m = j + 1; m < k+1; m++) {
      // console.log('subRangeSliceSort:', subRange.slice(j, m + 1).sort());
      // console.log('subRangeSlice:', subRange.slice(j, m + 1));
      if (JSON.stringify(subRange.slice(j, m + 1).sort()) === JSON.stringify(subRange.slice(j, m + 1))) {
        console.log('+ triggered');
        counter++;
      } else if (JSON.stringify(subRange.slice(j, m).reverse().sort()) === JSON.stringify(subRange.slice(j,m))) {
        console.log('- triggered');
        counter--;
      }
    }
    // results.push(counter);
    // console.log(counter);
    results.push(counter);
  }

  console.log(results);
  // compare subrange.sort() to subrange => increment
  // compare subrange.sort() to reversed subrange => decrement
}

countAvgPriceTrends(5, 3, [188930, 194123, 201345, 154243, 154243]); //[3, 0 ,-1]
