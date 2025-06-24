import React from "react";

function NavOption({ path, pathName }) {
	return (
		<>
			<span className="navOption__btn">
				<a href={path}>{pathName}</a>
			</span>
		</>
	);
}

export default NavOption;
