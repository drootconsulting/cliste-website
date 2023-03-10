import { XMasonry, XBlock } from "react-xmasonry";
import React from 'react'
import image from '../assets/images/image.png';
function MasonryCard() {
    return (
        <XMasonry>
            <XBlock>
                <div className="card">
                    <h1>Simple Card</h1>
                    <p>Any text!</p>
                </div>
            </XBlock>
            <XBlock width={2}>
                <div className="card">
                    <h1>Wider card</h1>
                    <p>Any text!</p>
                </div>
            </XBlock>
        </XMasonry>
    )
}

export default MasonryCard