import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const updatedCryptoData = {
    currencyLogo: cryptoData.currency_logo,
    currencyName: cryptoData.currency_name,
    euroValue: cryptoData.euro_value,
    id: cryptoData.id,
    usdValue: cryptoData.usd_value,
  }

  return (
    <li className="crypto-item-container">
      <div className="crypto-type-container">
        <img
          src={updatedCryptoData.currencyLogo}
          alt={updatedCryptoData.currencyName}
          className="crypto-logo"
        />
        <p className="crypto-name">{updatedCryptoData.currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p className="usd-value">{updatedCryptoData.usdValue}</p>
        <p className="euro-value">{updatedCryptoData.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
