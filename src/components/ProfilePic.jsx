import React from "react";
import profileUrl from ".img/ivan_seal_painting.webp";

function ProfilePic() {
	return (
		<>
			<div clasname="profilePic__container">
				<img
					className="profilePic"
					src={`${profileUrl}`}
					alt="picture_by_ https://www.instagram.com/ivanseal/?hl=en"
				/>
			</div>
		</>
	);
}

export default ProfilePic;
