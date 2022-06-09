import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrencyDataList: []}

  componentDidMount = () => {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const initialResponse = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const response = await initialResponse.json()
    this.setState({isLoading: false, cryptoCurrencyDataList: response})
  }

  render() {
    const {isLoading, cryptoCurrencyDataList} = this.state

    return (
      <div className="cryptocurrency-tracker-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />
            <CryptocurrenciesList
              cryptoCurrencyDataList={cryptoCurrencyDataList}
            />
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
