import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Welcome to Next JS",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<nav>Home</nav>
				{children}
				<footer>this i footer</footer>
			</body>
		</html>
	);
}
