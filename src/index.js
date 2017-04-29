import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import DevTools from './containers/DevTools/DevTools.js'
import Home from './containers/Home/index.js'
import Survey from './containers/Survey/index.js'
import About from './containers/About/index.js'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import abc from 'react-router'

const changeText = "changeText";
const initialState = {
    txt: '哈哈'
};
//注意：这里传入空对象，也不会用默认值的
function reducer(state = initialState, action={}) {
    if (action.type == changeText) {
        return {...state, txt: action.txt }
    }
    return {...state }
}

let rootReducer=combineReducers({
	test:reducer
});

function change(txt) {
    return {
        type: changeText,
        txt: txt
    }
}

let store = createStore(rootReducer,{}, DevTools.instrument());

@connect(state => ({ txt: state.test.txt }))
class App extends React.Component {
    changeText() {
        var val = this.refs.txt.value;
        this.props.dispatch(change(val))
    }

    render() {
        return <div>
				  <div>{this.props.txt}</div>
				  <div><input type="text" ref="txt" /></div>
				  <div><input type="button" value="变变变" onClick={this.changeText.bind(this)} /></div>
			   </div>
    }
}


ReactDOM.render(
    <Provider store={store}>
		<Router history={browserHistory}>
            <Route path="/" component={Home}>
                <Route path="s" component={Survey} />
                <Route path="a" component={About}/>
            </Route>
		</Router>
	</Provider>, document.getElementById('container'));
