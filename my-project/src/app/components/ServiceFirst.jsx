import React from "react";
export default function ServiceFirst(props) {
	console.log(props);
	// Props are readonly
	// props.sname = "new service";

	// destructuring
	const { sname, fee, address } = props;
	console.log("Sname = ", sname, " Fee = ", fee);
	return (
		<>
			<div className='border border-gray-400 p-10'>
				{/* Second Service :{props.sname}
				<p>Traing Fee is {props.fee}</p> */}
				Second Service :{sname}
				<p>Traing Fee is {fee}</p>
				{/* <p>Location : {props.address.city}</p> */}
				<p>Location :: {address.city}</p>
			</div>
		</>
	);
}

// javascript ( ES1,ES2...ES5,ES6...ES2015,....ES2022)

export function Games() {
	return (
		<>
			<h1>Games Section</h1>
		</>
	);
}

export function Transport() {
	return (
		<>
			<h1>Transportation</h1>
		</>
	);
}
