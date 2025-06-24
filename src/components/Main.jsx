import React from "react";
import ProfilePic from "./ProfilePic";
import AboutMe from "./AboutMe";

export default function Main() {
	return (
		<div>
			<main className="main__container">
				<ProfilePic />
				<AboutMe />
			</main>
		</div>
	);
}
