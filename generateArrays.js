const generateArrays = (amount) => {
  if (!amount)
    return []
  
  let outerArray = []
  let limit = 1
  
  for (let i = 1; i <= amount; i++) {
    let innerArray = []
    for (let x = 1; x <= limit; x++) {
      innerArray.push(x)
      if (x == limit) {
        outerArray.push(innerArray)
      }
    }
    limit++
  }
  
  console.log(outerArray)
}
-
generateArrays(7)