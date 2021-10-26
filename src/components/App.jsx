import React from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import ChirpCard from "./ChirpCard"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            someText: '',
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            chirps: [{
                id: uuidv4(), username: "@MichaelMyers",
                someText: "When will I get tired you asked?? NEVER", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
            }, {
                id: uuidv4(), username: "@SunflowerSunshine",
                someText: "Fall is offically here!!", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
            }, {
                id: uuidv4(), username: "@OneFishTwoFish",
                someText: "Finding Dory is an awesome!, who knew!!!", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
            }]


        };
    };

    // componentDidMount() {
    //     this.setState = ({
    //         chirps: [...this.state.chirps, {
    //             id: uuidv4(), username: "@MichaelMyers",
    //             someText: "When will I get tired you asked?? NEVER", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    //         }],
    //         chirps: [...this.state.chirps, {
    //             id: uuidv4(), username: "@SunflowerSunshine",
    //             someText: "Fall is offically here!!", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    //         }],
    //         chirps: [...this.state.chirps, {
    //             id: uuidv4(), username: "@OneFishTwoFish",
    //             someText: "Finding Dory is an awesome!, who knew!!!", timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    //         }]
    //     });
    // }


    handleIt(e) {
        this.setState = ({
            username: '',
            someText: '',
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            chirps: [...this.state.chirps, {
                id: uuidv4(), username: this.state.username, someText: this.state.someText,
                timestamp: this.state.timestamp
            }]
        });
    }
    handleUsername(e) {
        this.setState({ username: e.target.value })
    }
    handleText(e) {
        this.setState({ someText: e.target.value })
    }
    handleClick = () => {
        // this.newChirp = { id: uuidv4(), username: this.state.username, someText: this.state.someText, timestamp: moment().format('MMMM Do YYYY, h:mm:ss a') }

        this.setState({ chirps: [...this.state.chirps, { id: uuidv4(), username: this.state.username, someText: this.state.someText, timestamp: moment().format('MMMM Do YYYY, h:mm:ss a') }] })
    }
    render() {
        return (
            <>
                <main>
                    <h1 className="bg-danger">RUN</h1>
                    <section>
                        <div className="col-md-3">
                            <form className="form-group">
                                <label>
                                    Username
                                    <input value={this.state.username} onChange={e => this.handleUsername(e)} />
                                </label>
                                <label>
                                    whatUSay
                                    <input value={this.state.someText} onChange={e => this.handleText(e)} />
                                </label>

                            </form>
                        </div>
                    </section>
                    <button onClick={this.handleClick}>Submit</button>
                </main>
                {this.state.chirps.map((chirp) => <ChirpCard chirp={chirp} key={chirp.id} />)}
            </>
        )
    };
}

export default App;