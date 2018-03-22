import React, {Component} from 'react';
import TabsInterface from './TabsInterface';
import APIInterface from './APIInterface';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
    }

    render() {

      return (
        <div className="App">
          <header className="Pokedex-App">
            <h1 className="App-title">Hello World</h1>
              <p className="App-intro">
                  Welcome to my FAN~foxtrotting~tabulous pokedex APP
              </p>
          </header>

            <APIInterface />

            {/*<TabsInterface />*/}


        </div>
      );
    }
}
export default App;
