import React, { useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Webcam from "react-webcam";
// import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import WebCam from "../component/webCam";

export const Camera = () => {
	// const videoEl = useRef(null);

	// useEffect(() => {
	// 	if (!videoEl) {
	// 		return;
	// 	}
	// 	navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
	// 		let video = videoEl.current;
	// 		video.srcObject = stream;
	// 		video.play();
	// 	});
	// }, [videoEl]);

	// const stopHandler = () => {
	// 	navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
	// 		let video = videoEl.current;
	// 		video.srcObject = stream;
	// 		video.pause();
	// 	});
	// };

	return (
		<>
			<WebCam />
			{/* <div className="container">
				<video ref={videoEl} />
			</div>

			<button className="btn btn-dark" onClick={stopHandler}>
				Stop Recording
			// </button> */}
		</>
	);
};

// const WebcamComponent = () => <Webcam />;
// export const Camera = () => {
// 	// const { store, actions } = useContext(Context);

// 	const videoConstraints = {
// 		width: 1280,
// 		height: 720,
// 		facingMode: "user"
// 	};

// 	const WebcamCapture = () => {
// 		const webcamRef = React.useRef(null);

// 		const capture = React.useCallback(() => {
// 			const imageSrc = webcamRef.current.getScreenshot();
// 		}, [webcamRef]);

// 		return (
// 			<>
// 				<Webcam
// 					audio={false}
// 					height={720}
// 					ref={webcamRef}
// 					screenshotFormat="image/jpeg"
// 					width={1280}
// 					videoConstraints={videoConstraints}
// 				/>
// 				<button onClick={capture}>Capture photo</button>
// 			</>
// 		);
// 	};

// function WebcamCaptureFront() {
// 	const videoConstraints = () => {
// 		facingMode: "user";
// 	};
// 	return <Webcam videoConstraints={videoConstraints} />;
// }

// function WebcamCaptureBack() {
// 	const videoConstraints = () => {
// 		facingMode: {
// 			exact: "environment";
// 		}
// 	};
