import React, { useEffect, useState } from "react";
import Counter from "./Counter"


const Home = ({ time }) => {
	const stringTime = time.toString()
	console.log(stringTime + 1)
	const digit1 = time > 999 ? stringTime[3] : time > 99 ? stringTime[2] : time < 100 && time > 9 ? stringTime[1] : time < 10 ? stringTime[0] : stringTime[0]
	const digit2 = time > 999 ? stringTime[2] : time > 99 ? stringTime[1] : time < 10 ? "" : stringTime[0]
	const digit3 = time > 999 ? stringTime[1] : time > 99 ? stringTime[0] : ""
	const digit4 = time > 999 ? stringTime[0] : ""

	return (
		<div className="text-center d-flex justify-content-center bg-dark mt-5 mx-5" style={{height: "75px", borderRadius:"20px"}}>
			<span
				className="digit1 border bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
					{digit4}
			</span>
			<span
				className="digit1 border bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
					{digit3}
			</span>
			
			<span className="digit1 border bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit2}
			
			</span>
			<span className="digit1 border bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit1}
			</span>
		</div>
	);
};

export default Home;