import EventManagement from "../components/EventManagement";

function OnePage() {
	return (
		<div>
			One page
			<EventManagement num={100}>
				<h1>My Event Management Content</h1>
			</EventManagement>
		</div>
	);
}

export default OnePage;
