import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
// import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Camera = () => {
	// const { store, actions } = useContext(Context);

	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: "user"
	};

	const WebcamCapture = () => {
		const webcamRef = React.useRef(null);

		const capture = React.useCallback(() => {
			const imageSrc = webcamRef.current.getScreenshot();
		}, [webcamRef]);

		class WebcamCapture extends React.Component {
			render() {
				const videoConstraints = {
					facingMode: "user"
				};

				return <Webcam videoConstraints={videoConstraints} />;
			}
		}

		class WebcamCaptured extends React.Component {
			render() {
				const videoConstraints = {
					facingMode: { exact: "environment" }
				};

				return <Webcam videoConstraints={videoConstraints} />;
			}
		}
		return (
			<>
				{/* <div className="emptyDiv" /> */}
				<div className="container">
					<h1> Camera </h1>
					<div className="camera">
						<Webcam
							audio={false}
							height={720}
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							width={1280}
							videoConstraints={videoConstraints}
						/>
						<button onClick={capture}>Capture photo</button>
					</div>
					<br />
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</>
		);
	};
};
