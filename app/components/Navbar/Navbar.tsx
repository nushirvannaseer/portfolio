import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex w-[80%] mx-auto bg-slate-900 p-5 justify-between rounded-b-xl border-slate-800 border-b border-x">
			<Link href="/">Home</Link>
			<div className="flex">
				<Link href="/projects/web" className="mx-5">Projects</Link>
				<span className="mx-5">Contact</span>
			</div>
		</nav>
	);
};

export default Navbar;
