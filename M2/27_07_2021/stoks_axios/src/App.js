import './App.css';
import { Component } from 'react';
import axios from 'axios';
import{ LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

class App extends Component {
  state={
    data:[]
  }

  // [{date:07/2021, price:1223.00}, ] 

  componentDidMount = async () => {
    const { data } = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo')
    console.log(data)
    const dates = Object.keys(data['Monthly Time Series']).slice(0,10)
    console.log('datas----->', dates)

    const stockPrices =  dates.map(date => {
      return {
        date,
        price: data['Monthly Time Series'][date]['4. close']
      }
    })
    this.setState({
      data: stockPrices
    })

   }

  render() {
  return (
    <>
     <LineChart width={600} height={300} data={this.state.data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
    </LineChart>
    </>
  );}
}

export default App;
