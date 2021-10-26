import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class ChirpCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-container">

                <div className="chirp-card">
                    <h6>{this.props.chirp.username}</h6>
                    <p>{this.props.chirp.someText}</p>
                </div>
            </div>

        )
    }
}

export default ChirpCard