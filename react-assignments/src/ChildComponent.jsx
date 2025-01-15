import React from "react";

function RenderData({ props }) {

    const hobbiesArray = props.info.hobbies;

    return (
        <>
            <h2> {props.name}</h2>
            <h3> {props.info.age}</h3>
            <h3> {props.info.city}</h3>
            <h3> {props.info.job}</h3>
            <h4>{hobbiesArray.map((hobby) => hobby + ", ")}</h4>
        </>
    )

}

export default RenderData;
