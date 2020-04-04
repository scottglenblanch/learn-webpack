module.exports = function(source) {

  const censorList = [{
    original: 'Voldemort',
    censored: '<He who should not be named>',
  }, {
    original: 'Scott',
    censored: '<The Creator of this Project>',
  }];

  return censorList.reduce((
    accum,
    censorObj
  ) => accum.split(censorObj.original).join(censorObj.censored), source)
}