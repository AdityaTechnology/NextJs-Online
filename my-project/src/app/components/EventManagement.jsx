"use client";

// function EventManagement(props) {
// 	console.log(props);
// 	return (
// 		<div>
// 			EventManagement num : {props.num}
// 			<p>{props.children}</p>
// 		</div>
// 	);
// }

function EventManagement({ num, children }) {
	// function display() {
	// 	console.log("You have clicked me");
	// }
	const display = () => {
		console.log("You have clicked me");
	};
	return (
		<div>
			EventManagement num : {num}
			<br />
			{children}
			<div className='h-2 bg-gray-800' />
			<button
				onClick={display}
				className='px-10 py-2 bg-blue-800 text-gray-50 text-xl font-semibold'
			>
				Click here
			</button>
		</div>
	);
}
export default EventManagement;
