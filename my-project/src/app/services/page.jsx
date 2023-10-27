import React from "react";
import ServiceFirst from "../components/ServiceFirst";
import ServiceSecond from "../components/ServiceSecond";

export default function ServicePage() {
	return (
		<div className='min-h-screen max-w-4xl mx-auto mt-20'>
			<ServiceFirst />
			<ServiceSecond />
		</div>
	);
}
