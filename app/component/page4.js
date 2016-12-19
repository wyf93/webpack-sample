import React,{Component} from 'react';
import ScrollView from './common/scrollView';
import ListItem from './common/listitem';

export default class Page4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}

		this.requestPage = this.requestPage.bind(this);
	};
	componentDidMount() {
		let arr = [];
		for(let i = 0;i<40;i++) {
			arr.push(i);
		}
		this.setState({
			items: arr
		});
	}

	requestPage(page, callback) {
		console.log(this)
		console.log(page)
		console.log(this.refs.scrollView)
		var a = 1.00001;
		
		console.log(a)
		callback();
	}

	render() {
		return (
			<div className="page">
				<ScrollView requestPage={this.requestPage} ref="scrollView">
					{this.state.items.map((item, index) => {	
						return <ListItem key={index} data={item}/>
					})}
				</ScrollView>
			</div>
		);
	}
}