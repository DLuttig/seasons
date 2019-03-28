import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   )
//     return (
//       <div>Latittude: </div>
//     )
// }

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {lat: null, errMessage: ''}

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({errMessage: err.message})
      }
    )
  }

render () {
   
        if (this.state.lat && !this.state.errMessage) {
         return ( 
            <div>
              Latittude: {this.state.lat} 
            </div>
          )
        } else if (!this.state.lat && this.state.errMessage) {
          return (
            <div>
              Error: {this.state.errMessage}
            </div>
          ) 
        } else {
            return <div>Loading...</div>
        } 
}
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)