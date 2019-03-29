import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

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
  // constructor (props) {
  //   super(props)

  //   this.state = {lat: null, errMessage: ''}
  // }

  state = { lat: null, errorMessage: ''}

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errMessage: err.message})
    )
  }


  RenderContent () {
   
        if (this.state.lat && !this.state.errMessage) {
         return ( 
           <SeasonDisplay lat={this.state.lat} />
         )
        } else if (!this.state.lat && this.state.errMessage) {
          return (
            <div>
              Error: {this.state.errMessage}
            </div>
          ) 
        } else {
            return <Spinner message="Please accept location location request" />
        }
      }
       
  render() {
    return (
      <div className="border red">{this.RenderContent()}</div>
    )
  }
}  


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)