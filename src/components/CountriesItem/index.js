import './index.css'

const CountriesItem = props => {
  const {initialCountriesList, toggleVisitStatus} = props
  const {id, name, isVisited} = initialCountriesList

  const handleClick = () => {
    toggleVisitStatus(id)
  }

  return (
    <li className="country-item">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited-btn">Visited</p>
      ) : (
        <button type='button' className="visit-btn" onClick={handleClick}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesItem
