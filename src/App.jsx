import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FooterContainer from "./components/FooterContainer";
function App() {
	return (
		<>
			<Navbar />
			<Main />
			<FooterContainer />
		</>
	);
}

export default App;
