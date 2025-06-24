import React from "react";

export default function Icon({ icon_path }) {
	console.log(icon_path);
	return (
		<div>
			<img src={`${icon_path}`} />
		</div>
	);
}
