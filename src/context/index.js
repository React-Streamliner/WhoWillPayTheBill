import { render } from "@testing-library/react";
import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage: 1,
        players: []
    }

    addPlayerHandler = (name) => {
        this.setState((prevState)=> ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayer = (index) => {
        var players = [...this.state.players];
        players.splice(index, 1);
        this.setState({players: players});
    }

    render() {
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayer
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {MyContext, MyProvider }