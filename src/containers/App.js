import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    
    render () {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        console.log(filteredRobots);
        if (robots.length === 0) {
            return <h1 className="tc f1 lh-title pd1">Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f2">robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
            }
    }
}

export default App;