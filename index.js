var getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

var nestedTarget = () => {
  return document.querySelector('#nested .target')
}

var increaseRankBy = (n) => {
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

var deepestChild = () => {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node;
}