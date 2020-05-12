import React from 'react';
import {SocialIcon} from 'react-social-icons';
import Parallax from 'react-rellax'
import './socialmedia.scss';

function SocialMedia(props) {
    return (
        <div id="social-media">
            <Parallax speed={0.4} zIndex={9999}>
                <div>
                    {props.media.map((medium) =>
                        <SocialIcon target="_blank" className="mr-2" bgColor="#6c757d" fgColor="#ffffff" style={{height: 36, width: 36}} url={medium}/>
                    )}
                    Follow me
                </div>
            </Parallax>
        </div>
    );
}

export default SocialMedia;
