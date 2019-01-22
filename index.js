
var removetree
var codeArray = []
var originalTree = buildTree('hugeassmemsdudedoyoumindthis?')[1]

treeToCodes(buildTree('hugeassmemsdudedoyoumindthis?')[1], "")

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

function treeToCodes(tree, code){

if(tree == undefined) {
  return
} else {
if(tree.left != null){
  if(typeof(tree.left) == "object"){
    code += "0"
    treeToCodes(tree.left, code)
  }
  if(typeof(tree.left) == "string"){
    removetree = tree
    code+= "0"
    console.log(code)
    console.log(tree.left)
    code = code.slice(0, -1)
    if(typeof(tree.right) == "object"){
      code += "1"
      treeToCodes(tree.right, code)
    }
    if(typeof(tree.right) == "string"){
      code += "1"
      console.log(code)
      console.log(tree.right)
      //delete removetree because both children have been printed - call function
    }
  }
} else if(tree.right != null){
  //if left has been deleted do something
}
if(tree.right = null && tree.left == null){
  //delete the parent because it has no children - call function

}
}

}
