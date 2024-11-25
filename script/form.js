import { dictionary } from "./dictionary.js"

const spanishWord = document.getElementById('form-Spanish')
const englishWord = document.getElementById('form-English')
const exampleWord = document.getElementById('form-Example') 
const formBtn = document.getElementById('form-btn') 

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

  storeObj()
}

const  storeObj = () =>{

  const storeDictionary = JSON.stringify(dictionary)

  localStorage.setItem('storeD', storeDictionary)

}


formBtn.addEventListener('click', chooseCategorie)