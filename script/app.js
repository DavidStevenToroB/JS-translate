import { dictionary } from "./dictionary.js"

const btnTranslate = document.getElementById('translate')
const answer = document.getElementById('answer')
const asideDictionary =  document.getElementById('aside-Dictionary')
const optCategories = document.getElementById('select-categories')
const sortOption = document.getElementById('A-Z')
let words
//search
const filterWord = () => {
  const search = document.getElementById('search').value.toLowerCase()
  let average = null

  if (search.length == 0) {
    answer.innerHTML = 'buscar significado'
  } else{
    average = searchAnimal(search)
  }

  if (average.length == 0) {
    average = searchFruits(search)
    if (average.length == 0) {
      average = searchColors(search)
      if (average.length == 0) {
        average = searchPhysicalDescriptions(search)
        if (average.length == 0) {
          average = searchSkills(search)
          if (average.length == 0) {
            average = searchVerbs(search)
            if (average.length == 0){
              average = null
            }
          }
        }
      }
    }
  } 
  
  return average

}

//filters
const searchAnimal = (search) => {

  let filteredDictionary = dictionary.categories.animals.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}
const searchFruits = (search) => {

  let filteredDictionary = dictionary.categories.fruits.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}
const searchColors = (search) => {

    let filteredDictionary = dictionary.categories.colors.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}
const searchPhysicalDescriptions = (search) => {

   let filteredDictionary = dictionary.categories.physical_descriptions.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}
const searchSkills = (search) => {

 let filteredDictionary = dictionary.categories.skills.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}
const searchVerbs = (search) => {

 let filteredDictionary = dictionary.categories.verbs.filter(word => 
    word.english.toLowerCase().includes(search) ||
    word.spanish.toLowerCase().includes(search)
  )

  return filteredDictionary
}

// orden by translate
const englishOrSpanish = () => {
  let average = filterWord()
  const optEnEs = document.getElementById('select-EN-ES').value
  
  if (optEnEs === "EN-ES") {
    answer.textContent = average[0].spanish
  } else if (optEnEs === "ES-EN") {
    answer.textContent = average[0].english
  }
}

// categories
const categories = () => {

  let categories = optCategories.value
  showAllDescriptions()

  if (categories == "all") {
    asideDictionary.innerHTML = ''
    showAllDescriptions()
  } else if (categories == "animals") {
    asideDictionary.innerHTML = ''
    animals()
  } else if (categories === "fruits") {
    asideDictionary.innerHTML = ''
    fruits()
  } else if (categories === "colors") {
    asideDictionary.innerHTML = ''
    colors()
  } else if (categories === "descriptions") {
    asideDictionary.innerHTML = ''
    physical_descriptions()
  } else if (categories === "skills") {
    asideDictionary.innerHTML = ''
    skills()
  } else if (categories ===  "verbs") {
    asideDictionary.innerHTML = ''
    verbs()
  }
}

// sort

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
////////////////////////////////////////////////
//REVISAR EL SORT
////////////////////////////////////////////////
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const sort =  () => {
  let optSort = sortOption.value
  animalsSort(optSort)
}

const animalsSort = (optSort) => {
  dictionary.categories.animals.sort((a,b) =>{
    if (optSort == "A-Z") {
      words = a.english.localeCompare(b.english)
    } else if (optSort == "Z-A") {
      words = b.english.localeCompare(a.english)
    }
  }
  )
  for (let i = 0; i < words.length; i++) {
    makeDescriptions(words[i])
  }
}
const fruitsSort = () => {
  dictionary.categories.fruits.forEach(word => {
   makeDescriptions(word)
  })
}
const colorsSort = () => {
  dictionary.categories.colors.forEach(word => {
   makeDescriptions(word)
  })
}
const physical_descriptionsSort = () => {
  dictionary.categories.physical_descriptions.forEach(word => {
   makeDescriptions(word)
  })
}
const skillsSort = () => {
  dictionary.categories.skills.forEach(word => {
   makeDescriptions(word)
  })
}
const verbsSort = () => {
  dictionary.categories.verbs.forEach(word => {
   makeDescriptions(word)
  })
}

// diccionary
const makeDescriptions = (word) => {

  const container = document.createElement('div')
  container.id = 'div-descriptions'
  
  const lenguageE = document.createElement('h4')
  lenguageE.textContent = 'English: '
  
  const english = document.createElement('h4')
  english.textContent = word.english

  const lenguageS = document.createElement('h4')
  lenguageS.textContent = 'Spanish: '

  const spanish = document.createElement('h4')
  spanish.textContent = word.spanish

  const exampleT = document.createElement('h4')
  exampleT.textContent = 'Example: '

  const example = document.createElement('h4')
  example.textContent = word.example

  container.appendChild(lenguageE)
  lenguageE.appendChild(english)
  container.appendChild(lenguageS)
  lenguageS.appendChild(spanish)
  container.appendChild(exampleT)
  exampleT.appendChild(example)

  asideDictionary.appendChild(container)
}
const showAllDescriptions = () => {
  animals(dictionary)
  fruits(dictionary)
  colors(dictionary)
  physical_descriptions(dictionary)
  skills(dictionary)
  verbs(dictionary)
}
const animals = () => {
  dictionary.categories.animals.forEach(word => {
   makeDescriptions(word)
  })
}
const fruits = () => {
  dictionary.categories.fruits.forEach(word => {
   makeDescriptions(word)
  })
}
const colors = () => {
  dictionary.categories.colors.forEach(word => {
   makeDescriptions(word)
  })
}
const physical_descriptions = () => {
  dictionary.categories.physical_descriptions.forEach(word => {
   makeDescriptions(word)
  })
}
const skills = () => {
  dictionary.categories.skills.forEach(word => {
   makeDescriptions(word)
  })
}
const verbs = () => {
  dictionary.categories.verbs.forEach(word => {
   makeDescriptions(word)
  })
}

btnTranslate.addEventListener('click', englishOrSpanish)
optCategories.addEventListener('change', categories)
sortOption.addEventListener('change', sort)
