import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nushirvan Naseer",
	description: "Personal Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./favicon.svg" sizes="any" />
			</head>
			<Analytics/>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
