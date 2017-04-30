//暴露公共接口
import {Link} from 'react-router'
import styles from './home.scss'

export default class Home extends React.Component{
	render(){
		return (
			<div className={styles.home}>
				<div className={styles.red}>Home</div>
                <ul role="nav">
                    <li className={styles.blue}><Link to="/a">About</Link></li>
                    <li><Link to="/s">survey</Link></li>
                </ul>
				{this.props.children}
			</div>
		);
	}
}