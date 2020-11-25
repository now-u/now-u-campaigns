import React from 'react';
import classes from './WaveBreak.module.scss';

const WaveBreak = () => {
    return (
        <object data='' type='image/svg+xml' className={classes.waveContainer}>
            <svg
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 800 99'
            >
                <rect className={classes.waveBottom} />
                <path
                    className={classes.waveTop}
                    d='M.5,50.5c400-50,399,49,800,0V.5H.5Z'
                    transform='translate(-0.5 -0.5)'
                />
            </svg>
        </object>
    );
};

export default WaveBreak;
