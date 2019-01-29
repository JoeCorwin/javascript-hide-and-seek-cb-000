function getFirstSelector(selector) {
  let element = document.querySelectorAll(selector)
  return element[0]
}

 function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')
}

//  function deepestChild() {
//   let lastChild = document.getElementById('grand-node').querySelectorAll('div')
//   return lastChild[lastChild.length - 1]
// }
//
//  function increaseRankBy(n) {
//   let ranked = document.querySelectorAll('.ranked-list li')
//   for (let i = 0; i < ranked.length; i++) {
//     ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString()
//   }
