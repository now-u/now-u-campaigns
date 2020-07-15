import React from 'react';
import PropTypes from 'prop-types';
import classes from './AppDownloadSquare.module.scss';
import { Text, Button } from '../index';
import { appleStore, googlePlayBadge } from '../../assets';

const AppDownloadSquare = ({ adText }) => {

    const text = adText ?
                    adText :
                    'Are you interested? Start taking actions today!';

    return (
        <div className={classes.appDownloadContainer}>
            <div className={classes.appDownloadContent}>
                <div>
                    <Text type="p">{text}</Text>
                </div>
                <div>
                    <Text type="p">Download here:</Text>
                    <div className={classes.downloadBtns}>
                        <Button
                            variant="other"
                            onClick={()=> window.open("https://apps.apple.com/us/app/now-u/id1516126639", "_blank")}
                        >
                            <img src={appleStore} alt="app download from apple store" />
                        </Button>
                        <Button
                            variant="other"
                            onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.nowu.app", "_blank")}
                        >
                            <img src={googlePlayBadge} alt="app download from google store" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

AppDownloadSquare.propTypes = {
    adText: PropTypes.string
}

export default AppDownloadSquare;
