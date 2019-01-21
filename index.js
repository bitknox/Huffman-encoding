

var originalTree = buildTree('twojastarazapierdala')
treeToCodes(buildTree('twojastarazapierdala'), "")
//console.log(JSON.stringify(buildTree('twojastarazapierdala')))
//console.log(originalTree.left)
function Node (data, right, left) {
  this.data = data
  this.right = right
  this.left = left
}

function frequency (string) {
  var frequency = {}
  for (let value of string) {
    if (frequency[value] === undefined) {
      frequency[value] = 1
    } else {
      frequency[value] += 1
    }
  }
  return frequency
}

function sortfreq (freqs) {
  var letterfreq = []
  for (var letters in freqs) {
    letterfreq.push([freqs[letters], letters])
  }
  return letterfreq.sort()
}

function buildTree (string) {
  Array.prototype.remove = function (index) {
    this.splice(index, 1)
  }
  var freqss = frequency(string)
  var sorted = sortfreq(freqss)
  while (sorted.length > 1) {
    var tree = new Node(sorted[0][0] + sorted[1][0], sorted[1][1], sorted[0][1])
    var index = sorted[0][0] + sorted[1][0]
    sorted.remove(0)
    sorted.remove(0)
    sorted.push([index, tree])
  }
  return sorted[0]
}
var prefix = ""
var ary = []
function treeToCodes(tree, prefix){
if(tree !== null){
    for(var k in tree){
      if(typeof(tree[k]) == "object"){
        if(isNaN(tree[k])){
          if(tree[k].right == "object"){
            treeToCodes(tree[k].right, prefix +"1")
          }
          else {
            console.log("Found leaf" + prefix)
          }
          if(tree[k].left == "object"){
            treeToCodes(tree[k].left, prefix+"0")
          } else {
            console.log("Found leaf" + prefix)
          }
      } else{
        console.log("Found end...")
      }
  }
}
} else {
  console.log("Tree was null")
}
}
