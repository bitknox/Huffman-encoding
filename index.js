
function Node(data, right, left){
  this.data = data;
  this.right = right;
  this.left = left;
}

function frequency(string){
  var frekvens = {}
  for (let value of string) {
  if(frekvens[value] == undefined){
    frekvens[value] = 1;
  } else {
    frekvens[value] += 1
  }
}
return frekvens
}

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}
function sortfreq(freqs){

var letterfreq=[];
for( var let in freqs){
letterfreq.push([freqs[let],let]);
}
return letterfreq.sort();
}
freqss = frequency("abcdegcaa")
sorted = sortfreq(freqss)
while(sorted.length>1){
var tree = new Node(sorted[0][0]+sorted[1][0],sorted[1][1],sorted[0][1])
var index = sorted[0][0]+sorted[1][0]
sorted.remove(0)
sorted.remove(0)
sorted.push([index, tree])
}

console.log(JSON.stringify(sorted))
