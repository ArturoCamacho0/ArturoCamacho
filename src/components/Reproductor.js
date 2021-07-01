import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import '../assets/css/Reproductor.css';

import play from '../assets/images/pause-play.svg';
import next from '../assets/images/forward-button.svg';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
});

export default function Reproductor() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <React.Fragment>
            <audio type="audio/mp3" preload="auto" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-19/838d3222-433e-c046-a263-91e611b88f08.mp3"/>
            <div className="reproductor">
                <div className={classes.root + "reproductor__slider"}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider className="reproductor__slider-item"
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="reproductor__info">
                    <div className="reproductor__title">
                        <p>Escúcha mi Podcast!</p>
                    </div>

                    <div className="reproductor__buttons">
                        <a className="reproductor__buttons-play" href="https://anchor.fm/arturocamacho0" target="_blank" rel="noreferrer">
                            <img src={next} id="back" alt="Next" />
                        </a>

                        <a className="reproductor__buttons-play" href="https://anchor.fm/arturocamacho0" target="_blank" rel="noreferrer">
                            <img src={play} alt="Play"/>
                        </a>

                        <a className="reproductor__buttons-play" href="https://anchor.fm/arturocamacho0" target="_blank" rel="noreferrer">
                            <img src={next} alt="Next" />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
