import React from "react";
import Header from "./header/Header";

function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				{children}
				{/* Footer */}
			</div>
		</>
	);
}

export default Layout;
