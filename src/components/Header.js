import React, {useState} from "react";

function Header({onDarkModeClick, mode}) {

    return(
        <>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {mode ? "Dark" : "Light"} Mode
            </button>
        </>
    )
}

export default Header;