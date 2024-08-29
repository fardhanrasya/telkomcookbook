import "./Home.css"
import RecipeList from '../../components/RecipeList'
import { useEffect, useState } from "react"
import { projectFirestore } from "../../firebase/config"

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setData([])
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({...doc.data(), id: doc.id})
        })
        setData(results)
        setIsPending(false)
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()
  }, [])

  return (
    <div className="home">
      {error && <div className="error"></div>}
      {isPending && <div className="loading"></div>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
