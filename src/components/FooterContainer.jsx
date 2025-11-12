import React from "react";
import Icon from "./Icon";

export default function Footer() {
	return (
		<footer className="footer__container">
			<p className="footer__citation">
				Social Icons made by: &nbsp;
				<a
					className="footer__citation_link"
					href="https://github.com/chancancode/entypo-plus"
				>
					John Gardener
				</a>
			</p>
			<span className="icon__container">
				<Icon icon_path="\img\icons\github.svg" />
				<Icon icon_path="\img\icons\linkedin.svg" />
			</span>
		</footer>
	);
}
