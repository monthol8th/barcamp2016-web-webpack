import Section from './section.jsx';
import Menu from './menu.jsx';
import '../js/anchor.js';
export default class Wrapper extends React.Component {
	render() {
		return (
			<div>
				<Menu />
				<div>
					<Section sectionId="index-section" color="#ecf0f1" text="Index"/>
					<Section sectionId="register-section" color="#bdc3c7" text="Register"/>
					<Section sectionId="schedule-section" color="#ecf0f1" text="Schedule"/>
					<Section sectionId="location-section" color="#bdc3c7" text="Location"/>
					<Section sectionId="sponsors-section" color="#ecf0f1" text="Sponsors"/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Wrapper/>, document.getElementById('app'));
