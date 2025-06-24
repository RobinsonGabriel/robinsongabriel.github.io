import React from "react";
import NavOption from "./NavOption";

function NavBar() {
	{
		return (
			<nav className="navbar__container">
				<NavOption path={"/"} pathName={"Home"} />
				<NavOption path={"/"} pathName={"Blog (Under Construction)"} />
				<NavOption path={"/"} pathName={"Projects (Under Construction)"} />
			</nav>
		);
	}
}

export default NavBar;
