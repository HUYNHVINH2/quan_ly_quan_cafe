import React from 'react';
export default class Lifecycle extends React.Component{
    constructor(){
        super()
        this.state = {
            userArr: []
        }
        console.log('CONSTRUCTROR');
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
        this.setState({
            userArr: [
                { username: "aaaaaaaaaaaa", password: '12345'},
                { username: "bbbbbbbbbbbb", password: '12345'},
                { username: "cccccccccccc", password: '12345'},
                { username: "dddddddddddd", password: '12345'},
                { username: "eeeeeeeeeeee", password: '12345'}
            ]
        })

        this.timerInterval = setInterval(() =>{
            console.log(" RANDOM NUMBER ", Math.floor(Math.random() * 10));
        }, 1000)
    }
    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(){
        console.log('COMPONENT-DID-UPDATE');
        
    }

    componentWillUnmount(){
        clearInterval(this.timerInterval);
        console.log('ComponentWillUnmount');
    }
    render(){
        console.log('RENDER');
        const { userArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        userArr.map(user => (
                            <li key={`${user.username}`}>{ user.username }</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}