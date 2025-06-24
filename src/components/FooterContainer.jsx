import React from "react";
import Icon from "./Icon";

export default function Footer() {
	return (
		<footer className="footer__container">
			<p>
				Social Icons made by:{" "}
				<a href="https://github.com/chancancode/entypo-plus">John Gardener</a>
			</p>
			<Icon icon_path="src\img\github.svg" />
			<Icon icon_path="src\img\linkedin.svg" />
		</footer>
	);
}
