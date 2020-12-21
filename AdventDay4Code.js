

//DAY 4 PART 1
/*
  fetch(fileUrl)
    .then(response => response.text())
    .then( text => 
    {

      let rawList = text
      let arrayOfPassports = rawList.split('\n\n')

      const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
      let totalValidPassports = 0

      for (let i = 0 ; i < arrayOfPassports.length ; i++) 
      {  

        let isValid = true

        arrayOfPassports[i] = arrayOfPassports[i].split(/ |\n/)
            
        for (let j = 0 ; j < arrayOfPassports[i].length ; j++) 
        {
          arrayOfPassports[i][j] = arrayOfPassports[i][j].slice(0,3)
        } 

        requiredFields.forEach( field => 
        {
          if (arrayOfPassports[i].includes(field) === false) 
          {
            isValid = false
          }
        })

        if(isValid) 
        {
          totalValidPassports++
        }
        
      }

      console.log(totalValidPassports)
        

    })

    */

    //DAY 4 PART 2

  fetch(fileUrl)
  .then(response => response.text())
  .then( text => 
  {

    let totalValidPassports = 0

    let rawList = text
    let arrayOfPassports = rawList.split('\n\n')

    for (let passportString of arrayOfPassports) 
    {  
      const passportObject = createPassportObject(passportString)
      if ( isPassportValid(passportObject) )
      {
        totalValidPassports++
      }
    }
    console.log(totalValidPassports)
  })


  function createPassportObject(passportAsString) 
  {
    const passportAsArray = createPassportArray(passportAsString)
    let passportAsObject = {}
    for (let passportEntry of passportAsArray)
    {
      const passportEntryKey = passportEntry.substring(0,3)
      const passportEntryValue =passportEntry.substring(4)
      passportAsObject[passportEntryKey] = passportEntryValue
    }
    return passportAsObject
  }

  function createPassportArray(passportAsString) 
  {
    let passportAsArray = passportAsString.split(/ |\n/)
    return passportAsArray
  }

  function isPassportValid(passportAsObject) 
  {if(containsAllKeys(passportAsObject))
    {
      if (isBirthYearValid(passportAsObject.byr) &&
        isIssueYearValid(passportAsObject.iyr) &&
        isExpirationYearValid(passportAsObject.eyr) &&
        isHeightValid(passportAsObject.hgt) &&
        isHairColorValid(passportAsObject.hcl) &&
        isEyeColorValid(passportAsObject.ecl) &&
        isPassportIDValid(passportAsObject.pid))
        {return true} else {return false}
    }
  }

  function containsAllKeys(passportAsObject)
  {
    if('byr' in passportAsObject &&
       'iyr' in passportAsObject &&
       'eyr' in passportAsObject &&
       'hgt' in passportAsObject &&
       'hcl' in passportAsObject &&
       'ecl' in passportAsObject &&
       'pid' in passportAsObject)
       {return true} else {return false}
  }

  function isBirthYearValid(entry)
  {
  const minimumBirthYear = 1920
  const maximumBirthYear = 2002
  if(entry != null &&
     parseInt(entry) >= minimumBirthYear &&
     parseInt(entry) <= maximumBirthYear)
     {return true} else {return false}
  }

  function isIssueYearValid(entry)
  {
  const minimumIssueYear = 2010
  const maximumIssueYear = 2020
  if(entry != null &&
    parseInt(entry) >= minimumIssueYear &&
    parseInt(entry) <= maximumIssueYear)
     {return true} else {return false}
  }
  
  function isExpirationYearValid(entry)
  {
  const minimumExpirationYear = 2020
  const maximumExpirationYear = 2030
  if(entry != null &&
    parseInt(entry) >= minimumExpirationYear &&
    parseInt(entry) <= maximumExpirationYear)
    {return true} else {return false}
  }

  function isHeightValid(entry)
  {
  const minimumHeightInCentimeters = 150
  const maximumHeightInCentimeters = 193
  const minimumHeightInInches = 59
  const maximumHeightInInches = 76
  let conclusion = null
  if(entry != null)
  {
    if(entry.substring(entry.length-2) === 'cm')
    {
      if(parseInt(entry.substring(0, entry.length-2)) >= minimumHeightInCentimeters &&
         parseInt(entry.substring(0, entry.length-2)) <= maximumHeightInCentimeters)
         {conclusion = true}
    }
    if(entry.substring(entry.length-2) === 'in')
    {
      if(parseInt(entry.substring(0, entry.length-2)) >= minimumHeightInInches &&
         parseInt(entry.substring(0, entry.length-2)) <= maximumHeightInInches)
         {conclusion = true}
    }
    return conclusion
    } else {return false}
  }
  
  function isHairColorValid(entry)
  {
    conclusion = true
    if(entry.substring(0,1) === '#')
    {
      for (let char of entry.substring(1))
      {
        if (char === '0' ||
            char === '1' ||
            char === '2' ||
            char === '3' ||
            char === '4' ||
            char === '5' ||
            char === '6' ||
            char === '7' ||
            char === '8' ||
            char === '9' ||
            char === 'a' ||
            char === 'b' ||
            char === 'c' ||
            char === 'd' ||
            char === 'e' ||
            char === 'f')
            {conclusion = true} else {conclusion = false}
      }
    } else {conclusion = false}
    return conclusion
  }

  function isEyeColorValid(entry)
  {
    if(entry === 'amb' ||
       entry === 'blu' ||
       entry === 'brn' ||
       entry === 'gry' ||
       entry === 'grn' ||
       entry === 'hzl' ||
       entry === 'oth')
       {return true} else {return false}
  }

  function isPassportIDValid(entry)
  {
    if (entry != null &&
        entry.length === 9)
        {return true} else {return false}
  }

  function isCountryIDValid(entry)
  {
    return true // :-P
  }
