import React, {Component} from "react";
import iScroll from "iscroll/build/iscroll-probe";

export default class ScrollView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pullDownStatus: 0,
			pullUpStatus: 0
		}

		this.pullDownTips = [
			'',
			'继续下拉刷新',
			'松手开始刷新',
			'正在刷新',
			'刷新成功'
		];
		this.pullUpTips = [
			'',
			'继续上拉加载',
			'松手开始加载',
			'正在加载',
			'加载成功'
		];
		this.page = 1;
		this.isTouching = false;

		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onScrollEnd = this.onScrollEnd.bind(this);
	};

	componentDidMount() {
		this.pullHeight = parseInt(getComputedStyle(document.querySelector('.pullDownText')).height);
		this.iScroll = new iScroll('.scroll-container', {
            // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
            probeType: 3,
            // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
            //bounce: true,
		});
		this.iScroll.on('scroll', this.onScroll);
		this.iScroll.on('scrollEnd', this.onScrollEnd);
	}

	shouldComponentUpdate() {
		this.itemLen = this.props.children.length;
		return true;
	}

	componentDidUpdate() {
		if(this.itemLen !== this.props.children.length) {
			this.iScroll.refresh();
		}
		
	}

	onTouchStart() {
		this.isTouching = true;
	}

	onTouchEnd() {
		this.isTouching = false;
	}

	onScroll() {
		let self = this;
		if(this.isTouching) {
			if(this.iScroll.y > 0) {
				if(this.iScroll.y > this.pullHeight) {
					this.state.pullDownStatus !==2&&this.setState({pullDownStatus: 2});
				}
				else {
					this.state.pullDownStatus !==1&&this.setState({pullDownStatus: 1});
				}
			}
			if(this.iScroll.y < this.iScroll.maxScrollY) {
				if(this.iScroll.y < (this.iScroll.maxScrollY - this.pullHeight)) {
					this.state.pullUpStatus !==2&&this.setState({pullUpStatus: 2});
				}
				else {
					this.state.pullUpStatus !==1&&this.setState({pullUpStatus: 1});
				}
			}
		}
		else {
			if(this.iScroll.y > this.pullHeight) {
				if(this.state.pullDownStatus !== 3) {
					this.setState({
						pullDownStatus: 3
					});
					this.iScroll.scrollTo(0, this.pullHeight,300);
					//父组件传递方法请求数据
					this.props.requestPage(1,function () {
						setTimeout(function () {
							self.setState({pullDownStatus: 0})
							self.iScroll.scrollTo(0, 0, 600);
						}, 700);
					});
				}
			}
			if(this.iScroll.y < (this.iScroll.maxScrollY - this.pullHeight)) {
				if(this.state.pullUpStatus !== 3 && this.state.pullUpStatus !== 4) {
					this.setState({
						pullUpStatus: 3
					});
					this.iScroll.scrollTo(0, this.iScroll.maxScrollY - this.pullHeight, 300);
					//父组件传递方法请求数据
					this.props.requestPage(this.page, function () {
						setTimeout(function () {
							self.setState({pullUpStatus: 0});
							self.iScroll.scrollTo(0, self.iScroll.maxScrollY, 600);
						}, 700);
					});		
				}
			}
		}
	}

	onScrollEnd() {
		
	}

	render() {	
		return (
			<div className="scroll-container">
				<div className="scroll-list" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
					<div className={this.state.pullDownStatus>0?"pullDownText active":"pullDownText"}>{this.pullDownTips[this.state.pullDownStatus]}</div>
					{this.props.children}
					<div className={this.state.pullUpStatus>0?"pullUpText active":"pullUpText"}>{this.pullUpTips[this.state.pullUpStatus]}</div>
				</div>
			</div>
		);
	}
}