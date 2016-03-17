const React = require('react');
const Actions = require('./actions');
const connect = require('react-redux').connect;

class Application extends React.Component{

    constructor(props){
        super(props);
        console.log("Application:");
        console.log(props);
        this.state={
        }
    }

//    componentWillReceiveProps(props){
//    }

    render() {
        return (
            <div>
                <input onChange={(e)=>{
                console.log(this.props);
                this.props.dispatch(Actions.setValue(e.target.value)) }}/>
                {this.props.value}
            </div>
        )
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        task: state.exampleReducerNamespace.task,
        value: state.exampleReducerNamespace.value
    }
}


//Application.defaultProps = { }

module.exports = connect(mapStateToProps)(Application);
