import React, { useEffect, useRef } from 'react';
// @mui
import { makeStyles } from "@mui/styles";

// style
const useStyles = makeStyles(theme => ({
    videostyle : {
        float:'left',
        width: '55%',
        height: '100%',
        textAlign:'center',
        fontSize: 34,
        fontWeight: 'bold',
    }
}));

export default function Videoarea({ 
    videoplay, 
    setVideoplay, 
    setVideocurrenttime, 
    setVideoalltime, 
    slidemovevalue, 
    videovolume 
}) {
    // definitions
    const classes = useStyles();

    const myVideoEl = useRef(null);

    // handle events
    const onTimeUpdate = (event) => {
        setVideocurrenttime(myVideoEl.current.currentTime);
        // setVideoalltime(myVideoEl.current.duration);
    };

    const ontime = ()=>{
        setVideoalltime(myVideoEl.current.duration);
    }

    // effects
    useEffect(() => {
        myVideoEl.current.currentTime = slidemovevalue;
    },[slidemovevalue]);

    useEffect(() => {
        myVideoEl.current.volume = videovolume * 0.01; 
    },[videovolume]);
    
    useEffect(() => {
        if (videoplay === 'true') {
            myVideoEl.current.pause();
        }else{
            const promise = myVideoEl.current.play();
            promise.then(() => {
                // Autoplay started
            }).catch(error => {
                // Autoplay was prevented.
                myVideoEl.current.play();
            });
        }
    }, [videoplay]);

    return (
        // responsive
        <div className={classes.videostyle}>
             <video 
                ref={myVideoEl} 
                width="100%" 
                height="100%" 
                onLoadedData={ontime} 
                onTimeUpdate={(event) => {
                    onTimeUpdate(event);
                }}
            >
                 <source src='/video.mp4' type="video/mp4" />
             </video> 
        </div>
    )
}