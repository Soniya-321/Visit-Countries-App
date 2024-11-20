import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, toggleVisitStatus} = props
  const {id, name, imageUrl} = countryDetails
  const handleClick = () => {
    toggleVisitStatus(id)
  }

  return (
    <li className="country-item-visited">
      <img src={imageUrl} className="visited-img" alt="thumbnail" />
      <div className="text">
        <p>{name}</p>
        <button type="button" onClick={handleClick}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
