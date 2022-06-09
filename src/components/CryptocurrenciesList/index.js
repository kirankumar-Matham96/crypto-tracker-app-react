import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrencyDataList} = props

  return (
    <ul className="cryptocurrency-list-container">
      <li className="list-container-header">
        <div className="header-coin-type-container">
          <p className="header-text">Coin</p>
          <p className="header-text">Type</p>
        </div>
        <div className="header-coin-values-container">
          <p className="header-text">USD</p>
          <p className="header-text">EURO</p>
        </div>
      </li>
      {cryptoCurrencyDataList.map(eachCrypto => (
        <CryptocurrencyItem cryptoData={eachCrypto} key={eachCrypto.id} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
