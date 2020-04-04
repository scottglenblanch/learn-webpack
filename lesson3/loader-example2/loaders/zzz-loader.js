module.exports = function(source) {

  const returnSource = `
    globalPrintLines = function() {
      const lineList=[${source
        .split('\n')
        .map(s => `'${s}'`)
        .join(',')
      }];
      
      
      lineList.forEach((line, i) => {
        console.log('line ' + i, line)
      });
      
    };
  `

  return returnSource;
}
