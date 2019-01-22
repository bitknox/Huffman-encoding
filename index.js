

var codeArray = []
var originalTree = buildTree('teststring')[1]

treeToCodes(buildTree('teststring')[1], "")

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

function treeToCodes(tree){
if(tree == undefined) {
  return
} else {
if(tree.left != null){
  if(typeof(tree.left) == "object"){
    treeToCodes(tree.left)
  }
  if(typeof(tree.left) == "string"){
    console.log(tree.left)
    if(typeof(tree.right) == "object"){
      treeToCodes(tree.right)
    }
    if(typeof(tree.right) == "string"){
      console.log(tree.right)
    }
  }
} else if(tree.right != null){

}

}
}
