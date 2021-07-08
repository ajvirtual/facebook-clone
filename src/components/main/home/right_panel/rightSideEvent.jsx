import React from 'react';

function RightSideEvent({type_event, text}) {
    return (
        <>        
            <div className="right-side-event">
            {text}
            </div>
            <span className="right-side-separator"></span>
        </>
    );
}

export default RightSideEvent;