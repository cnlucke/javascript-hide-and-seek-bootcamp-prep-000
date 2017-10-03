//  1) index getFirstSelector(selector) returns the first element that matches the selector:
// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}
//  2) index nestedTarget() pulls a .target out of #nested:
//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('div.nested div.target')
}

//  3) index deepestChild() returns the most deeply nested child in #grand-node:

//  4) index increaseRankBy(n) increases ranks in .ranked-list by n:
