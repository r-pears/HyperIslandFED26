import React, { Component } from "react";

const WrapComponent = ({ Component, Props }) => {
	return(
	<div className="wrap">
		<Component {...Props} />
	</div>
    )
};

export default WrapComponent;
