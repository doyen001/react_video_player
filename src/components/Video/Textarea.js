import React from 'react'
import Box from '@mui/material/Box';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(theme => ({
    Textheader : {
        float:'left',
        width: '45%',
        height: '100%',
        backgroundColor: 'white'
    },
    textbody : {
        float:'left',
        width:'99%',
        height:'100%'
    },
    body : {
        backgroundColor:'rgb(38,60,80)',
        width:'100%',
        height:'100%'
    },
    text_1 : {
        color: 'rgb(227,160,14)',
        paddingTop:'25px',
        textAlign:'left',
        paddingLeft:'20px'
    },
    text_2 : {
        color:'rgb(227,160,14)',
        paddingTop:'130px',
        textAlign:'left',
        paddingLeft:'20px'
    },
    text_3 : {
        fontSize: 16,
        color:'white',
        textAlign:'left',
        paddingLeft:'20px'
    },
    text_4 : {
        color:'white',
        paddingTop:'50px',
        textAlign:'left',
        paddingLeft:'20px'
    },
    text_5 : {
        fontSize: 16,
        color:'rgb(227,160,14)',
        textAlign:'left',
        paddingLeft:'20px'
    },
}));
export default function Textarea() {
    const classes = useStyle();
    return (
        <Box className={classes.Textheader}>
                    <Box className={classes.textbody} >
                        <Box className={classes.body}
                        >
                            <Typography variant="h5" className={classes.text_1}>
                                French speaking video
                            </Typography>
                            <Typography variant="h6" className={classes.text_2} gutterBottom  >
                                Details de la video
                            </Typography>
                            <Typography gutterBottom className={classes.text_3} >
                                1 chapiter
                            </Typography>
                            <Typography gutterBottom className={classes.text_4} >
                                <PlayCircleRoundedIcon sx={{ color: green[400],paddingRight:'10px' }}/>Lire la video 
                            </Typography>
                            <Typography gutterBottom className={classes.text_5} >
                                Vous n`utilisez pas encore Nure?
                            </Typography>
                        </Box>
                    </Box>
                    
                </Box>
    );
}