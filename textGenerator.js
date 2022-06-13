const input = 'generate this'

const generator = (text, multiplyer) => {
  const letters = text.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let newLetters = []
  
  letters.forEach(x => {
    if (vowels.includes(x)) {
      for (let i = 0; i < multiplyer; i++)
        newLetters.push(x)
      if (multiplyer === 0)
        newLetters.push(x)
    }
    else
      newLetters.push(x)
  })
  
  const result = newLetters.join("", " ")
  
  console.log(result)
}

generator(input, 3)