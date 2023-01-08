import React, { } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { green } from '@mui/material/colors';
import Slider from '@mui/material/Slider';
import { styled,  } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import SkipNextRounded from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRounded from '@mui/icons-material/SkipPreviousRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import Textarea from '../components/Video/Textarea';
export default function Home() {
    const [paused, setPaused] = React.useState(false);
    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
      });
    const mainIconColor = '#000';
    // const theme = useTheme();
    return (
        <Box>
            <Textarea />
            <Box
                sx={{
                    mt:"5%",
                    height: 400,
                    PaddingTop: 24,
                    backgroundColor: 'white',
                    position: 'relative',
                    paddingLeft: '10px',
                    paddingTop: '10px',
                    paddingRight:'10px',
                    paddingBottom:'10px'
                }}
            >
                <Box
                    sx={{
                        float:'left',
                        width: '45%',
                        height: '100%',
                        backgroundColor: 'white',
                    }}
                >
                    <Box
                        sx={{
                            float:'left',
                            width:'99%',
                            height:'100%'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor:'rgb(38,60,80)',
                                width:'100%',
                                height:'100%'
                            }}
                        >
                            <Typography variant="h5"  
                                sx={{
                                    color: 'rgb(227,160,14)',
                                    paddingTop:'25px',
                                    textAlign:'left',
                                    paddingLeft:'20px'
                                }}
                            >
                                French speaking video
                            </Typography>
                            <Typography variant="h6" gutterBottom
                                sx={{
                                    color:'rgb(227,160,14)',
                                    paddingTop:'130px',
                                    textAlign:'left',
                                    paddingLeft:'20px'
                                }}
                            >
                                Details de la video
                            </Typography>
                            <Typography gutterBottom
                                sx={{
                                    fontSize: 16,
                                    color:'white',
                                    textAlign:'left',
                                    paddingLeft:'20px'
                                }}
                            >
                                1 chapiter
                            </Typography>
                            <Typography gutterBottom
                                sx={{
                                    color:'white',
                                    paddingTop:'50px',
                                    textAlign:'left',
                                    paddingLeft:'20px'
                                }}
                            >
                                <PlayCircleRoundedIcon sx={{ color: green[400],paddingRight:'10px' }}/>Lire la video 
                            </Typography>
                            <Typography gutterBottom
                                sx={{
                                    fontSize: 16,
                                    color:'rgb(227,160,14)',
                                    textAlign:'left',
                                    paddingLeft:'20px',
                                }}
                            >
                                Vous n`utilisez pas encore Nure?
                            </Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Box
                    sx={{
                        float:'left',
                        width: '55%',
                        height: '100%',
                        backgroundColor: 'blue',
                        textAlign:'center',
                        fontSize: 34,
                        fontWeight: 'bold',
                    }}
                >
                    Video
                </Box>
                {/* video slide */}
                
            </Box>
            <Box 
                sx={{
                    backgroundColor:'white',
                    paddingRight:'12px',
                    paddingLeft:'12px',
                }}
            >
                <Box>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={1}
                        min={0}
                        step={1}
                        max={100}
                        
                        sx={{
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
                            },
                        }}
                    />
                </Box>
                {/* time show box */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                    >
                    
                </Box>

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
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={() => setPaused(!paused)}
                    >
                        {paused ? (
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
                    
                    <TinyText sx={{ fontSize:'1rem',paddingTop:'12px',paddingLeft:'40px' }}>{'00: 00: 00 '}</TinyText>
                    <TinyText sx={{ fontSize:'1rem',paddingTop:'12px', }}> / {' 00: 01: 38'}</TinyText>
                    <Stack spacing={2} direction="row" sx={{ width:'200px',paddingLeft:'20px',paddingTop:'12px' }} >
                        <VolumeDownRounded htmlColor={mainIconColor} />
                        <Slider
                            aria-label="Volume"
                            defaultValue={30}
                            sx={{
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
                            }}
                        />
                        <VolumeUpRounded htmlColor='rgba(0,0,0,0.4)' />
                    </Stack>
                </Box>
                
            </Box>
        </Box>
    );
}