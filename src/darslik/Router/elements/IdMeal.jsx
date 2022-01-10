import {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealByID } from '../api';
import Loader from '../Loader';

function IdMeal(props) {
  const {id} = useParams()
  const {goBack} = useHistory()
  const [retcipe, setRetcipe] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getMealByID(id).then(data => setRetcipe(data.meals[0]))
    }, 600);
  }, [id])

  return (
    <div>
      <button className='btn' onClick={goBack}>Go Back</button>
      {!retcipe.idMeal ? <Loader /> : (
        <div className='recipe'>
          <img src={retcipe.strMealThumb} alt={retcipe.strMeal} />
          <h1>{retcipe.strMeal}</h1>
          <h5><b>Category</b> {retcipe.strCategory}</h5>
          {retcipe.strArea ? <h5><b>Area</b> {retcipe.strArea}</h5> : null}
          <p>{retcipe.strInstructions}</p>
          <table className='centred'>
            <thead>
              <tr>
                <th>Incredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {console.log(Object.keys(retcipe))}
              {Object.keys(retcipe).map(key => {
                if(retcipe[key] && key.includes('Ingredient')) {
                  return (
                  <tr>
                    <td>{retcipe[key]}</td>
                    <th>{retcipe[`strMeasure${key.slice(13)}`]}</th>
                  </tr>
                  )
                }
              })}
            </tbody>
          </table>
          {retcipe.strYoutube ? (
            <div className='row'>
              <h4>Video Recipe</h4>
              <iframe src={`https://www.youtube.com/embed/${retcipe.strYoutube.slice(-11)}`} allowFullScreen></iframe>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default IdMeal;