import {Component} from 'react'
import CountriesItem from '../CountriesItem'
import VisitedCountryItem from '../VisitedCountryItem'
import './index.css'

class Countries extends Component {
  constructor(props) {
    super(props)
    const {initialCountriesList} = props
    this.state = {
      countriesList: initialCountriesList,
    }
  }
  toggleVisitStatus = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(country =>
        country.id === id
          ? {...country, isVisited: !country.isVisited}
          : country,
      ),
    }))
  }

  render() {
    const {countriesList} = this.state
    const visitedCountries = countriesList.filter(country => country.isVisited)
    return (
      <div className="app-container">
        <h1>Countries</h1>
        <ul>
          {countriesList.map(each => (
            <CountriesItem
              initialCountriesList={each}
              key={each.id}
              toggleVisitStatus={this.toggleVisitStatus}
            />
          ))}
        </ul>
        <h1>Visited Countries</h1>
        {visitedCountries.length === 0 ? (
          <div className="no-visited-list">
            <p>No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="visited-contries">
            {visitedCountries.map(country => (
              <VisitedCountryItem
                key={country.id}
                countryDetails={country}
                toggleVisitStatus={this.toggleVisitStatus}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Countries
