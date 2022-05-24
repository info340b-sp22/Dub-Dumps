import React, { useState } from 'react'; //import React Component

export default function Header(props) {
    return (
        <>
            <header className="flex-container header">
                <div className="flex-container logo-header">
                    <img src="img/logo.png" alt="Dub Dumps logo" className="logo" />
                    <h1 className="dub-dumps">DUB DUMPS</h1>
                </div>
            </header>
        </>
    )
}