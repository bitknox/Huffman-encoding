

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

function treeToCodes(tree , code){
if(tree == undefined) {
  return
} else {

  if(tree.left == null){
  if(typeof(tree.right) == "object"){
    code += "1"
    treeToCodes(tree.right,code)
  }
  if(typeof(tree.right) == "string"){
    code += "1"
    console.log(tree.right, code)
    code = code.slice(0,-1)
    code += "0"
    console.log(tree.left, code)
    var treestring = JSON.stringify(tree)
    var orgtree = JSON.stringify(originalTree)
    var newtree = JSON.parse(orgtree.replace(treestring, null))
    treeToCodes(newtree,"")
  }
} else {
  if(typeof(tree.left) == "object"){
    code += "0"
    treeToCodes(tree.left, code)
  }
  if(typeof(tree.left) == "string"){
    code += "0"
    console.log(tree.left, code);
    code = code.slice(0,-1)
    code += "1"
    console.log(tree.right, code);
    var treestring = JSON.stringify(tree)
    var orgtree = JSON.stringify(originalTree)
    var newtree = JSON.parse(orgtree.replace(treestring, null ))
    console.log(JSON.stringify(newtree))
    treeToCodes(newtree, "")
  }
}


}
}
