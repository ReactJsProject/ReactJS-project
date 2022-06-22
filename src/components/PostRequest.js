import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            predictionId: null
        };
    }

    async componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Prediction-Key': '21cc378a2f774d40838ebdca3aa797b6',    
            'Content-Type': 'application/octet-stream',
            'My-Custom-Header': 'foobar'
             },
            body: <image src={this.props.image}/>
        };
        const response = await fetch('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5d296d38-4c3a-4645-90d9-e299dccb1f97/classify/iterations/Iteration1/image', requestOptions)
        const data = await response.json();
        this.setState({ predictionId: data.created });
    }

    render() {
        const { predictionId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">face Mask Api Response Id : {this.props.image}</h5>
                <div className="card-body">
                    Returned Id: {predictionId}
                </div>
            </div>
        );
    }
}

export { PostRequest }; 