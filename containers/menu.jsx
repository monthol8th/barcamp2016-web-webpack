import Menu from 'react-burger-menu';
var Slide = Menu.push;
class Menus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	__stateChanged(state) {
		this.setState({isOpen: state.isOpen});
		return state.isOpen;
	}
	__changeState() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div >
				<nav className="uk-navbar flex flex-center-x" data-uk-sticky>
					<ul className="uk-navbar-nav uk-hidden-small">
						<li className="uk-active">
							<a className="scroll" href="#register-section">Register</a>
						</li>
						<li>
							<a className="scroll" href="#schedule-section">Schedule</a>
						</li>
						<li>
							<a className="scroll" href="#location-section">Location</a>
						</li>
						<li>
							<a className="scroll" href="#sponsors-section">Sponsors</a>
						</li>
						<li>
							<a href="">Resend Email</a>
						</li>
						<li>
							<a href="">Who's Coming</a>
						</li>
						<li>
							<a href="">Sessions</a>
						</li>
					</ul>
					<a href="#offcanvas-1" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></a>
				</nav>
				<div id="offcanvas-1" className="uk-offcanvas" aria-hidden="true">
					<div className="uk-offcanvas-bar" mode="push">
						<div className="uk-panel">Lorem ipsum dolor sit amet,
							<a href="#">consetetur</a>
							sadipscing elitr.</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Menus;
