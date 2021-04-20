import React from 'react'

class ButtonApp extends React.Component {
  constructor() {
    super()
  }

  handleClick() {
    var ajax = new XMLHttpRequest()
    ajax.open('POST','http://localhost:3001/user/login')
    ajax.send()
    ajax.onreadystatechange = function () {
      if (ajax.readyState===4&&ajax.status===200) {
        console.log(1)
      }
    }
  }

  render() {
    return (
      <div id="button">
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default ButtonApp