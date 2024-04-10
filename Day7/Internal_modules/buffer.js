const b = new Buffer.from('ABCDEFGH');
console.log(b.toString());
b.write('Other');
console.log(b.toString());
