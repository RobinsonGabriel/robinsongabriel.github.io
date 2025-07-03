import React from "react";

export default function Icon({ icon_path }) {
	return <img className="icon__img" src={`${icon_path}`} />;
}
