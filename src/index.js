import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

const changeText="changeText";

function reducer(state={txt:'哈哈'},action){
	if(action.type==changeText){
		return {...state,txt:action.txt}
	}
	return {...state}
}

function change(txt){
	return {
		type:changeText,
		txt:txt
	}
}

let store=createStore(reducer);

class App extends React.Component{
	changeText(){
		console.log(this);
		var val=this.refs.txt.value;
		this.props.dispatch(change(val))
	}

	render(){
		return <div>
				  <div>{this.props.txt}</div>
				  <div><input type="text" ref="txt" /></div>
				  <div><input type="button" value="变变变" onClick={this.changeText.bind(this)} /></div>
			   </div>
	}
}
App=connect(state=>({txt:state.txt}))(App)


ReactDOM.render(
	<Provider store={store}>
	        <App />
	</Provider>
,document.getElementById('container'));       


