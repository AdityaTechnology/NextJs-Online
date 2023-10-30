import ServiceFirst, { Games, Transport } from "../components/ServiceFirst";
import ServiceSecond from "../components/ServiceSecond";

export default function ServicePage() {
	const location = {
		city: "delhi",
		pin: "223344",
	};
	return (
		<>
			<Transport />
			<Games />
			<div className='min-h-screen max-w-4xl mx-auto mt-20'>
				<ServiceFirst
					sname='football'
					fee={10000}
					address={location}
				/>
				<ServiceFirst
					sname='cricket'
					fee={20000}
					address={location}
				/>
				<ServiceFirst
					sname='hockey'
					fee={15000}
					address={location}
				/>
			</div>
		</>
	);
}
