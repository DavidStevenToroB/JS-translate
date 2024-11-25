import { dictionary } from "./dictionary.js"

const spanishWord = document.getElementById('form-Spanish')
const englishWord = document.getElementById('form-English')
const exampleWord = document.getElementById('form-Example') 
const formBtn = document.getElementById('form-btn') 
const btnTranslate = document.getElementById('translate')
const answer = document.getElementById('answer')
const asideDictionary =  document.getElementById('aside-Dictionary')
const optCategories = document.getElementById('select-categories')
const sortOption = document.getElementById('A-Z')
const btn_adder = document.getElementById('add')
const close = document.getElementById('close')

//view
btn_adder.addEventListener('click', (() => {
  const adder_section = document.querySelector('.form')
  adder_section.style.display = 'block'
}
))

//close
const closed = () => {
 const adder_section = document.querySelector('.form')
  adder_section.style.display = 'none'
}

//search
const filterWord = () => {
  const search = document.getElementById('search').value.toLowerCase()
  let average = null

  if (search.length == 0) {
    answer.innerHTML = 'buscar significado...'
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
              answer.textContent = 'la palabra no se encuentra en el diccionario'
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

// diccionary
const makeDescriptions = (word) => {

  const container = document.createElement('div')
  container.id = 'div-descriptions'
  
  const lenguageE = document.createElement('h4')
  lenguageE.textContent = 'English:'
  
  const english = document.createElement('h4')
  english.textContent = word.english

  const lenguageS = document.createElement('h4')
  lenguageS.textContent = 'Español:'

  const spanish = document.createElement('h4')
  spanish.textContent = word.spanish

  const exampleT = document.createElement('h4')
  exampleT.textContent = 'Example:'

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
  animals()
  fruits()
  colors()
  physical_descriptions()
  skills()
  verbs()
}
const animals = () => {
  dictionary.categories.animals.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.animals.forEach(word => {
   makeDescriptions(word)
  })
}
const fruits = () => {
  dictionary.categories.fruits.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.fruits.forEach(word => {
   makeDescriptions(word)
  })
}
const colors = () => {
  dictionary.categories.colors.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.colors.forEach(word => {
   makeDescriptions(word)
  })
}
const physical_descriptions = () => {
  dictionary.categories.physical_descriptions.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.physical_descriptions.forEach(word => {
   makeDescriptions(word)
  })
}
const skills = () => {
  dictionary.categories.skills.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.skills.forEach(word => {
   makeDescriptions(word)
  })
}
const verbs = () => {
  dictionary.categories.verbs.sort((a,b) =>{
    if (sortOption.value == "A-Z") {
    return a.english.localeCompare(b.english)
    } else if (sortOption.value == "Z-A") {
    return b.english.localeCompare(a.english)
    }
  }
  )
  dictionary.categories.verbs.forEach(word => {
   makeDescriptions(word)
  })
}

//form
const chooseCategorie = () => {
  let word 
  let categories = document.getElementById('create-word').value
  
  if (categories == "animals") {
    word = dictionary.categories.animals
    createWord(word)
  } else if (categories === "fruits") {
    word = dictionary.categories.fruits
    createWord(word)
  } else if (categories === "colors") {
    word = dictionary.categories.colors
    createWord(word)
  } else if (categories === "descriptions") {
    word = dictionary.categories.physical_descriptions
    createWord(word)
  } else if (categories === "skills") {
    word = dictionary.categories.skills
    createWord(word)
  } else if (categories ===  "verbs") {
    word = dictionary.categories.verbs
    createWord(word)
  }
  
}
const createWord = (word) => {
  let id = word.length + 1
  let spanish = spanishWord.value
  let english = englishWord.value
  let example = exampleWord.value

  let wordTranlation = {
    "id": id ,"english": english, "spanish": spanish, "example": example
  }
  
  word.push(wordTranlation)
  closed()
}

formBtn.addEventListener('click', chooseCategorie)
btnTranslate.addEventListener('click', englishOrSpanish)
optCategories.addEventListener('change', categories)
sortOption.addEventListener('change', categories)
close.addEventListener('click',closed)

window.addEventListener('DOMContentLoaded', categories)