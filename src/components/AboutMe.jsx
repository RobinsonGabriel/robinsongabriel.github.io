import React from "react";
import Icon from "./Icon";

export default function AboutMe() {
	return (
		<div className="aboutMe__container">
			<h1 className="aboutMe__header">Gabriel Robinson</h1>
			<h2 className="aboutMe__subHeader">
				I do stuff with computers (Hardware and software)
			</h2>
			<p className="aboutMe__bodyText">
				Hello, I am just a guy that finds a lot of the facets of technology
				really fascinating. I've been interested in gettings things to work ever
				since I was really little. From setting up the family electronics when I
				was just starting to walk to now pursuing a Masters at Colorado
				University for Computer Science, I like to keep learning and playing
				with new things.
			</p>
			<div className="techStack__container">
				<h3 className="techStack__header">Tech Stack of Choice:</h3>
				<ul className="techStack__list">
					<li className="techStack__item__react">
						React (It's what this site was done in!)
					</li>
					<li className="techStack__item__node">Node</li>
					<li className="techStack__item__sass">Sass</li>
					<li className="techStack__item__postgres">Mongodb/Postgres</li>
				</ul>
			</div>
			<p className="aboutMe__bodyText">
				I've worked on a diverse array of enterprise gear in data centers around
				the area and found it highly valuable to see how the sausage (or data)
				gets made. Having that larger picture of what is actually going on when
				I touch anything part of a cloud network or any other form of
				distributed system gives me a few extra things to keep in my back pocket
				when I am studying anything new or writing code that not everyone will
				get the chance to make use of and I'm grateful for it!
			</p>
			<p className="aboutMe__bodyText">
				I do my best to not overspecialize and have a strong interest in
				mycology, philosophy, the visual arts, and a lot of other little niche
				interests I try to entertain to keep my brain active and let me enjoy
				things to the greatest possible extent.
			</p>
		</div>
	);
}
