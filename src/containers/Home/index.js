//暴露公共接口
import {Link} from 'react-router'
export default class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<div className="red">Home</div>
                <ul role="nav">
                    <li className="blue"><Link to="/a">About</Link></li>
                    <li><Link to="/s">survey</Link></li>
                </ul>
				{this.props.children}
			</div>
		);
	}
}