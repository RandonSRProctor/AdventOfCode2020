//DAY 3 PART 1 AND 2

  //Determine how many trees ('#') you will encounter

  const fileUrl = 'AdventDay3.txt'

  fetch(fileUrl)
    .then(response => response.text())
    .then( text => 
    {
         
      let rawList = text
      let arrayOfTreeRows = rawList.split('\n')

        function collisionCalculator(rightRate, downRate) 
        {

            //Create a count of tree collisions
            let treeCollisionCount = 0

            //NOTE: 31 characters in each row
            //Create a cursor position variable (that updates at each row by incrementing 3, after index 30 is index 0)

            let cursorIndex = 0
            const rowLength = 31

            //Cycle through each row
            //At the beginning of each cycle update cursor by 3, wrapping the number after 30 to 0
            for (let movesDown = downRate ; movesDown < arrayOfTreeRows.length ; movesDown += downRate) 
            {

                //Move "to the right" three times
                cursorIndex += rightRate

                //Wrap after index 30
                if (cursorIndex >= rowLength) 
                {
                    cursorIndex = (cursorIndex - rowLength)
                }

                if (arrayOfTreeRows[movesDown].charAt(cursorIndex) === '#') 
                {
                    treeCollisionCount++
                }

            }
            
            return treeCollisionCount

        }

    console.log
    (
        collisionCalculator(1,1)*
        collisionCalculator(3,1)*
        collisionCalculator(5,1)*
        collisionCalculator(7,1)*
        collisionCalculator(1,2)
    )
 
    })