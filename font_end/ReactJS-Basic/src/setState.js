import React from 'react';
export default class SetState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "my state"
        }
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(){
        this.setState({
            message: 'my state affter set state'
        })
    }

    render(){
        return(
            <div>
                <div>Xin Chao Moi Nguoi</div>
                <div>{this.state.message}</div>
                <button onClick = { this.updateMessage }>Click Me</button>
                { console.log("RENDER")}
                <Content myNumber = { this.state.message }></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    // sẽ được gọi trước khi render() gọi
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    // được gọi sau render()
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    // dược chạy khi thay đổi state
    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    // dược chạy khi thay đổi state
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    // được chạy sau render()
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
           <div>
              <h3>{this.props.myNumber}</h3>
              { console.log('RENDER CONTENT')}
           </div>
        );
    }

}