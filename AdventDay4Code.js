//DAY 4 PART 1

const fileUrl = 'AdventDay4.txt'

  fetch(fileUrl)
    .then(response => response.text())
    .then( text => 
    {
        let rawList = text
        let arrayOfPassports = rawList.split('\n\n')

        let totalValidPassports = 0

        for (let i = 0 ; i < arrayOfPassports.length ; i++) {
            arrayOfPassports[i] = arrayOfPassports[i].split(/ |\n/)
            arrayOfPassports[i].forEach( (entry) => {
                
            })
        }

        console.log(arrayOfPassports)
        

    })