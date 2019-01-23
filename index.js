var removetree
var decoded = ""
var codes = {}
var originalTree = buildTree('teststring')[1]
var decodetree = buildTree('teststring')[1]
treeToCodes(buildTree('teststring')[1], '')
console.log(buildTree('teststring')[1])
var codestring = createString('teststring', codes)
console.log(codestring);
decode(decodetree, codestring)
console.log(decoded)

function Node(data, right, left) {
	this.data = data
	this.right = right
	this.left = left
}

function frequency(string) {
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

function sortfreq(freqs) {
	var letterfreq = []
	for (var letters in freqs) {
		letterfreq.push([freqs[letters], letters])
	}
	return letterfreq.sort()
}

function buildTree(string) {
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

function treeToCodes(tree, code) {
	if (tree == undefined) {

	} else {
		if (tree.left != null) {
			if (typeof (tree.left) === 'object') {
				code += '0'
				treeToCodes(tree.left, code)
			}
			if (typeof (tree.left) === 'string') {
				removetree = tree
				code += '0'
				codes[tree.left] = code
				code = code.slice(0, -1)
				if (typeof (tree.right) === 'object') {
					code += '1'
					treeToCodes(tree.right, code)
				}
				if (typeof (tree.right) === 'string') {
					code += '1'
					codes[tree.right] = code
					var removestring = JSON.stringify(removetree)
					var tree = JSON.stringify(originalTree)
					originalTree = JSON.parse(tree.replace(removestring, null))
					treeToCodes(originalTree, '')
				}
			}
      if(typeof(tree.right != "string") || typeof(tree.right != "object")){
        removetree = tree
        var removestring = JSON.stringify(removetree)
        var tree = JSON.stringify(originalTree)
        originalTree = JSON.parse(tree.replace(removestring, null))
        treeToCodes(originalTree, '')
      }
		} else if (tree.right != null) {
			if (typeof (tree.right) === 'object') {
				code += '1'
				treeToCodes(tree.right, code)
			}
		} else {
			removetree = tree
			var removestring = JSON.stringify(removetree)
			var tree = JSON.stringify(originalTree)
			originalTree = JSON.parse(tree.replace(removestring, null))
			treeToCodes(originalTree, '')
		}
	}
}

function createString(string, codes) {
	var codestring = ''
	for (var i = 0; i < string.length; i++) {
		codestring += codes[string.charAt(i)]
	}
	return codestring
}
//work in progess
function decode(tree, codestring) {
	console.log(codestring.length)
	if (codestring.length > -1) {
		console.log(codestring.length)
		char = codestring.charAt(0);
		newcode = codestring.substring(1);
		console.log(newcode)
		if (char == "1") {
			console.log(typeof (tree.right))
			if (typeof (tree.right) == "object") {
				decode(tree.right, newcode)
			}
			if (typeof (tree.right) == "string") {
				console.log(tree.right + "was end")
				decoded += tree.right
				decode(decodetree, newcode)
			}
		}
		if (char == "0") {
			console.log(typeof (tree.left))
			if (typeof (tree.left) == "object") {
				decode(tree.left, newcode)
			}
			if (typeof (tree.left) == "string") {
				console.log(tree.left + "was end")
				decoded += tree.left
				decode(decodetree, newcode)
			}
		}
	}
}
