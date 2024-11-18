import { dictionary } from "./dictionary.js"

const btnTranslate = document.getElementById('translate')
const answer = document.getElementById('answer')
const average = null

const filterWord = () =>  {
  const search = document.getElementById('search').value.toLowerCase()

  average = searchAnimal(search)
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

//filtros
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

const englishOrSpanish = () => {
  let average = filterWord()
  const optEnEs = document.getElementById('select-EN-ES').value
  
  if (optEnEs === "EN-ES") {
    answer.textContent = average[0].spanish
  } else if (optEnEs === "ES-EN") {
    answer.textContent = average[0].english
  }
 
}


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

  document.getElementById('div-descriptions').appendChild(container)
}

const showDescriptions = () =>{
  dictionary.forEach(word => {
    makeDescriptions(word)
  })
}

btnTranslate.addEventListener('click', englishOrSpanish)

window.addEventListener('DOMContentLoaded', showDescriptions)