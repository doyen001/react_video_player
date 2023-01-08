import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

import Textarea from '../components/Video/Textarea';
import Videoarea from '../components/Video/Videoarea';
import Buttonarea from '../components/Video/Buttonarea';
const useStyle = makeStyles(theme =>({
    header : {
        mt:"5%",
        height: 400,
        PaddingTop: 24,
        backgroundColor: 'white',
        position: 'relative',
        paddingLeft: '10px',
        paddingTop: '10px',
        paddingRight:'10px',
        paddingBottom:'10px'
    }
}));
export default function Video() {
    
    const classes = useStyle();
    const [videoplay, setVideoplay] = useState('true');
    const [videocurrenttime, setVideocurrenttime] = useState(0);
    const [videoalltime, setVideoalltime] = useState(0);
    const [slidemovevalue,setSlidemovevalue] = useState(0);
    const [volume, setVolumn] = useState(0);
    return (
        <Box>
            <Box className={classes.header}>
                <Textarea />
                <Videoarea 
                    videoplay = {videoplay}
                    setVideocurrenttime = {setVideocurrenttime}
                    setVideoalltime = {setVideoalltime}
                    setVideoplay = {setVideoplay}
                    slidemovevalue = {slidemovevalue}
                    videovolume = {volume}
                />
            </Box>
            <Buttonarea 
                videoplay = {videoplay}
                setVideoplay  = {setVideoplay}
                videocurrenttime = {videocurrenttime}
                videoalltime = {videoalltime}
                setVideoalltime = {setVideoalltime}
                setVideocurrenttime = {setVideocurrenttime}
                setSlidemovevalue = {setSlidemovevalue}
                setVolumn = {setVolumn}
            />
        </Box>
    );
}