import React from 'react';
import './features.css'

class Features extends React.Component{
    state={
        count:0,
        flow:['Temperature', 'Geofence', 'Distance'],
        assets:['https://assets7.lottiefiles.com/private_files/lf30_tJTMQ4.json', 'https://assets8.lottiefiles.com/private_files/lf30_D4yZiV.json', 'https://assets9.lottiefiles.com/private_files/lf30_9FzSEE.json'],
        selected:'https://assets7.lottiefiles.com/private_files/lf30_tJTMQ4.json'
    }
    updateImage = () => {
      let count = this.state.count + 1;
      count%=3;
    this.setState({count:count})
    }
    componentDidMount(){
        this.interval = () => setInterval(() => this.updateImage(), 7000);
        this.interval();
    }

    componentWillMount(){
        if(this.interval)
            clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <h1>Key Features</h1>
                <div id="player-container">
                    <div>
                        <lottie-player  autoplay loop id="firstLottie" src='https://assets1.lottiefiles.com/private_files/lf30_wBcF24.json' style={{ width:'300px', height:'300px'}}></lottie-player>
                        <p  className="feature-text">Temperature Monitoring</p>
                    </div>
                    <div>
                        <lottie-player  autoplay loop id="firstLottie" src='https://assets8.lottiefiles.com/private_files/lf30_D4yZiV.json' style={{ width:'300px', height:'300px'}}></lottie-player>
                        <p  className="feature-text">Geo Fencing breach Alerts</p>
                    </div>
                   
                   <div>
                    <lottie-player  autoplay loop id="firstLottie" src='https://assets9.lottiefiles.com/private_files/lf30_9FzSEE.json' style={{ width:'300px', height:'300px'}}></lottie-player>
                    <p  className="feature-text">Social Distance Alert</p>
                    
                   </div>
                </div>
            </div>
        )
    }
}

export default Features;