import React from 'react';
import Image from './withmask.jpeg'
import './homepage.css'

 class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            predictionId: null,
            receivedlink:null
        };
        
    }
    
    
    async componentDidMount() {
        // Simple POST request with a JSON body using fetch
        var receivedlink=this.props.link
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Prediction-Key': '21cc378a2f774d40838ebdca3aa797b6',    
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({"url": receivedlink})
        };
        const response = await fetch('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5d296d38-4c3a-4645-90d9-e299dccb1f97/classify/iterations/Iteration1/url', requestOptions)
        const data = await response.json();
        this.setState({ predictionId: data.predictions[0].tagName});
        console.log(data)
        
    }
    async componentDidUpdate() {
        // Simple POST request with a JSON body using fetch
        var receivedlink=this.props.link
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Prediction-Key': '21cc378a2f774d40838ebdca3aa797b6',    
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({"url": receivedlink})
        };
        const response = await fetch('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5d296d38-4c3a-4645-90d9-e299dccb1f97/classify/iterations/Iteration1/url', requestOptions)
        const data = await response.json();
        this.setState({ predictionId: data.predictions[0].tagName});
        console.log(data)
        
    }
    
    render() {
        
        const { predictionId } = this.state;
        return (
            <div className="card text-center m-3 result">
                <div className="card-body result result-f">
                   <b>Result :</b> {predictionId}
                </div>
            </div>
        );
    }
}

export { PostRequest }; 