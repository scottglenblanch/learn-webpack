module.exports = function(source) {
  const lineList = source.split('\n');

  const returnSource = `
    (function() {
      const lineList=${lineList}
      
      phraseList.forEach((phrase, i) => {
        console.log('line ' + i, phrase)
      })
      
    })();
  `

  return returnSource;
}