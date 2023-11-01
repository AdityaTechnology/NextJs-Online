import React from "react";

// function NumberPage(props) {
// 	console.log(props);
// 	return <div>Number is {props.params.num} </div>;
// }

// function NumberPage({ params }) {
// 	console.log(params);
// 	return <div>Number is - {params.num} </div>;
// }

function NumberPage(props) {
	// destructuring
	// const { params } = props;
	const params = props.params;
	console.log(params);
	return <div>Number is :::: {params.num} </div>;
}
export default NumberPage;
