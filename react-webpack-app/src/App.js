import React from 'react'
import ButtonApp from '@/send'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="app">
                <h1>content</h1>
                <ButtonApp />
            </div>
        )
    }
}

export default App