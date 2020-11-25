import React from 'react';
import PropTypes from 'prop-types';
import classes from './AppDownloadSquare.module.scss';
import { Text, Button } from '../index';
import { appleStore, googlePlayBadge } from '../../assets';
import { appleStoreURL, googleStoreURL } from '../../utils/constants';

const AppDownloadSquare = ({ adText }) => {

    const text = adText ?
                    adText :
                    'Start taking actions today!';

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
                            id="AppDownloadSquare-AppleAppStore"
                            variant="other"
                            onClick={()=> window.open(appleStoreURL, "_blank")}
                        >
                            <img src={appleStore} alt="app download from apple store" />
                        </Button>
                        <Button
                            id="AppDownloadSquare-GoogleAppStore"
                            variant="other"
                            onClick={()=> window.open(googleStoreURL, "_blank")}
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
