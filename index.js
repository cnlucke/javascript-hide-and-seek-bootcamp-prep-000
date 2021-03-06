//  1) index getFirstSelector(selector) returns the first element that matches the selector:
// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}
//  2) index nestedTarget() pulls a .target out of #nested:
//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

//  3) index deepestChild() returns the most deeply nested child in #grand-node:
function deepestChild() {
  const lis = document.querySelector('#grand-node')

  let current = lis
  let next

  while (current != null) {
    //set next to the children of current
    next = current.querySelector('div')

    //if current has no more children, return current
    if (next === null) {
      return current
    }
    //current has children if it gets this far so set current to its child for another trip through the loop
    current = next
  }
}

//  4) index increaseRankBy(n) increases ranks in .ranked-list by n:
function increaseRankBy (n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}
