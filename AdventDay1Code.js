//DAY 1

const fileUrl = 'AdventDay1.txt'
const onlineUrl = 'https://adventofcode.com/2020/day/1/input'

fetch(fileUrl)
  .then(response => response.text())
  .then( text => {
       
      let rawList = text
      let arrayOfNumbers = rawList.split('\n')

        for ( let i = 0 ; i < 200 ; i++) 
        {
            let firstAnswer = parseInt(arrayOfNumbers[i])
            
            for (let j = 0 ; j < 200 ; j++) 
            {
                let secondAnswer = parseInt(arrayOfNumbers[j])
                
                for (let k = 0 ; k < 200 ; k++) 
                {
                    let thirdAnswer = parseInt(arrayOfNumbers[k])

                    if (i!=j && j!=k && i!=k) 
                    {
                        if (firstAnswer+secondAnswer+thirdAnswer==2020)
                        {
                        console.log(firstAnswer)
                        console.log(secondAnswer)
                        console.log(thirdAnswer)
                        console.log("Answer is: " + (firstAnswer*secondAnswer*thirdAnswer))
                        }
                    }
                }
            }
        }
  })
