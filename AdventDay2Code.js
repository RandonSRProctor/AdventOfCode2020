//DAY 2 PART 1


//How many passwords are valid according to their policies?
//"3-4 l: vdcv"
//["3-4", "l:", "vvcv"]

const fileUrl = 'AdventDay2.txt'

fetch(fileUrl)
  .then(response => response.text())
  .then( text => {
       
    let rawList = text
    let arrayOfPasswords = rawList.split('\n')

    //Keep count of valid passwords
    let validPasswordCount = 0

    //Cycle through each entry to verify if valid or not
    for (let i = 0 ; i < 1000 ; i++) 
    {

        //Password is valid if letter-match count falls within boundary (inclusive)
        //Create a counter variable
        let matchCount = 0

        //Split up the entry into an array
        let boundaryLetterPassword = arrayOfPasswords[i].split(' ')

        //Assign each field to a variable
        let boundary = boundaryLetterPassword[0]
        let specialLetterWithColon = boundaryLetterPassword[1]
        let password = boundaryLetterPassword[2]

        //Split the boundary into two fields and parse each to an integer

        let boundaryArray = boundary.split("-")

        boundaryArray[0] = parseInt(boundaryArray[0])
        boundaryArray[1] = parseInt(boundaryArray[1])

        //Slice the colon off the letter

        let specialLetter = specialLetterWithColon.charAt(0)

        //Cycle through the password by character, increment matchCount for each character that matches letter

        for (let i = 0 ; i < password.length ; i++) 
        {
            if (password.charAt(i) == specialLetter) 
            {
                matchCount++
            }

        }

        //Determine if matchCount falls between boundary numbers.  Yes->Increment validPasswordCount No->Do nothing

        if (matchCount >= boundaryArray[0] && matchCount <= boundaryArray[1]) 
        {
            validPasswordCount++
        }

    }

    console.log(validPasswordCount)

  })

  

  
  //DAY 2 PART 2

  //How many passwords are valid according to their policies?
  //Only one of the characters at the index points separated by hyphen can be a match for a valid password (index 1; not 0)
//"3-4 l: vdcv"
//["3-4", "l:", "vvcv"]

const fileUrl = 'AdventDay2.txt'

fetch(fileUrl)
  .then(response => response.text())
  .then( text => {
       
    let rawList = text
    let arrayOfPasswords = rawList.split('\n')

    //Keep count of valid passwords
    let validPasswordCount = 0

    //Cycle through each entry to verify if valid or not
    for (let i = 0 ; i < 1000 ; i++) 
    {

        //Password is valid if letter-match count falls within boundary (inclusive)
        //Create a counter variable
        let matchCount = 0

        //Split up the entry into an array
        let boundaryLetterPassword = arrayOfPasswords[i].split(' ')

        //Assign each field to a variable
        let indexes = boundaryLetterPassword[0]
        let specialLetterWithColon = boundaryLetterPassword[1]
        let password = boundaryLetterPassword[2]

        //Split the boundary into two fields and parse each to an integer

        let indexArray = indexes.split("-")

        indexArray[0] = parseInt(indexArray[0])
        indexArray[1] = parseInt(indexArray[1])

        //Slice the colon off the letter

        let specialLetter = specialLetterWithColon.charAt(0)

        //Check for a match at each index point (compensating for non-zero-index)

    
        if (password.charAt(indexArray[0]-1) == specialLetter) 
        {
            matchCount++
        }

        if (password.charAt(indexArray[1]-1) == specialLetter) 
        {
            matchCount++
        }

        

        //Determine if there is exactly one match.  If so, increment validPasswordCount

        if (matchCount == 1) 
        {
            validPasswordCount++
        }

    }

    console.log(validPasswordCount)

  })