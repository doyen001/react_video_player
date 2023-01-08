import React from 'react';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled,  } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import SkipNextRounded from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRounded from '@mui/icons-material/SkipPreviousRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import Slider from '@mui/material/Slider';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { makeStyles } from "@mui/styles";

// style
const useStyles = makeStyles (theme =>({
    button_body : {
        backgroundColor:'white',
        paddingRight:'12px',
        paddingLeft:'12px',
    },
    video_slide : {
        
        color: '#2196f3',
        height: 4,
        '& .MuiSlider-thumb': {
        width: 8,
        height: 8,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
        },
        
        '&.Mui-active': {
            width: 20,
            height: 20,
        },
        },
        '& .MuiSlider-rail': {
        opacity: 0.28,
        }
    },
    timebar : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: -2,
    },
    nowtime : {
        fontSize:'1rem',
        paddingTop:'12px',
        paddingLeft:'40px' 
    },
    alltime : {
        fontSize:'1rem',
        paddingTop:'12px' 
    },
    volume : {
        color: 'rgba(0,0,0,0.87)',
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            width: 24,
            height: 24,
            backgroundColor: '#fff',
            '&:before': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'none',
            },
        },
    }
}));

export default function Buttonarea({
    videoplay,
    setVideoplay,
    videocurrenttime,
    videoalltime,
    setSlidemovevalue,
    setVideocurrenttime,
    setVolumn
}) {
    // definitions
    const classes = useStyles();

    const handlePlayClick = () => {
        if(videoplay === 'true'){
            setVideoplay('false');
        }else{
            setVideoplay('true');
        }
    };

    const slideRmove = () => {
        setSlidemovevalue(videocurrenttime);
    }

    const formatDuration = (value) => {
        let bal=parseInt(value);
        const minute = Math.floor(bal / 60);
        const secondLeft = bal - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });

    const mainIconColor = '#000';

    const PrettoSlider = styled(Slider)({
      color: '#52af77',
      height: 8,
      '& .MuiSlider-track': {
        border: 'none',
      },
      '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
      '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
          transform: 'rotate(45deg)',
        },
      },
    });

    return (
        <Box className={classes.button_body} >
            <Box>
                <PrettoSlider
                    aria-label="time-indicator"
                    size="small"
                    value={videocurrenttime}
                    min={0}
                    step={1}
                    max={videoalltime}
                    onChange={(_, value) => setVideocurrenttime(videocurrenttime)}
                    onClick={() => slideRmove()}
                    className={classes.video_slide}
                />
            </Box>
            {/* time show box */}
            <Box className={classes.timebar} />

            <Box
                sx={{
                    display: 'flex',
                    mt: -1,
                }}
                >
                <IconButton aria-label="previous song">
                    <SkipPreviousRounded fontSize="medium" htmlColor={mainIconColor} />
                </IconButton>
                <IconButton
                    aria-label={videoplay === 'true' ? 'play' : 'pause'}
                    onClick={handlePlayClick}
                >
                    {videoplay === 'true' ? (
                    <PlayArrowRounded
                        sx={{ fontSize: '2rem' }}
                        htmlColor={mainIconColor}
                    />
                    ) : (
                    <PauseRounded sx={{ fontSize: '2rem' }} htmlColor={mainIconColor} />
                    )}
                </IconButton>
                <IconButton aria-label="next song">
                    <SkipNextRounded fontSize="medium" htmlColor={mainIconColor} />
                </IconButton>
                
                <TinyText className={classes.nowtime}>{formatDuration(videocurrenttime)}</TinyText>
                <TinyText className={classes.alltime}> / {formatDuration(videoalltime)}</TinyText>
                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1,width:'200px' }} alignItems="center">
                    <VolumeDownRounded htmlColor={mainIconColor} />
                    <Slider
                        aria-label="Volume"
                        defaultValue={30}
                        className={classes.volume}
                        onChange={(_, defaultValue) => setVolumn(defaultValue)}
                    />
                    <VolumeUpRounded htmlColor={mainIconColor} />
                </Stack>
            </Box>
        </Box>
    )
}