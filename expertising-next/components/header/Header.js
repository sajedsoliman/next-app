// import React from "react";
import NavLink from "./NavLink";

function Header() {
	return (
		<header className="bg-white-200 transition hover:shadow-md border-b-2 flex items-center justify-center p-4 pr-0">
			<nav className="flex flex-row h-full">
				<NavLink where="/">Home</NavLink>
				<NavLink where="/about">About</NavLink>
				<NavLink where="/faq">FAQ</NavLink>
				<NavLink where="/contact">Contact</NavLink>
				<NavLink where="/">Get a Quote</NavLink>
			</nav>
		</header>
	);
}

export default Header;
