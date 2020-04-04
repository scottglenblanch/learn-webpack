String.prototype.reverseString = function() {

  return 'This reverse of \n\t' + this+ '\nis\n\t'
      + this.split('').reverse().join('');
}
