import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Create.css'
import { projectFirestore } from '../../firebase/config'
import useTheme from '../../hooks/useTheme'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIng, setNewIng] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()
  const {mode} = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    const doc = {title, ingredients, method, cookingTime: cookingTime + ' minutes'}

    try {
      projectFirestore.collection('recipes').add(doc)
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIng.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevValue => [...prevValue, ing])
    }

    setNewIng('')
    ingredientsInput.current.focus()
  }

  return (
    <div className={`create ${mode}`}>
      <div className="page-title">Add a New Recipe</div>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={(e) => setNewIng(e.target.value)}
              value={newIng}
              ref={ingredientsInput}
            />
            <button className="btn" onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map((i) => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe method:</span>
          <input
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minute):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
