import React from "react";
import * as styles from "./index.module.scss";
import { MainButtonExternal } from "../buttons";
import { mainAFighterUrl } from '../../constants';
import useWindowSize from '../../utils/useWindowSize';

import modalCloseButtonIcon from '../../styles/img/modal-close-button.png';

const MintFighterModal = ({ showModal, changeModalStateCb }) => {
    const ws = useWindowSize();

    const isMobileWidth = ws.width <= 767;

    const close = () => {
        document.body.classList.remove("scroll-lock");
        document.documentElement.classList.remove("scroll-lock");
        changeModalStateCb();
    };

    return showModal && (
        <div className={styles.mintFighterModal}>
            <div className={styles.mintFighterModalContent}>
                <div className={styles.mintFighterModalContentBg}></div>
                <h3 className={`title2 ${styles.mintFighterModalTitle}`}>Mint A Fighter</h3>
                <p className={`description ${styles.mintFighterModalText}`}>Welcome to the Galactic Fight League.</p>
                <p className={`description ${styles.mintFighterModalText}`}>The mint/NFT sale will start 29th January 2022 on Magic Eden launchpad</p>
                <p className={`description ${styles.mintFighterModalText}`}>Presale begins at: 17.00 hrs UTC</p>
                <p className={`description ${styles.mintFighterModalText}`}>Public sale begins at: 21.00 hrs UTC</p>
                <p className={`description ${styles.mintFighterModalText}`}>Please follow the link below to take you to the mint address.</p>
                <p className={`description ${styles.mintFighterModalText}`}>Thank You!</p>
                <MainButtonExternal
                    url={mainAFighterUrl}
                    title={"Mint A Fighter"}
                    buttonClassName={styles.mintFighterModalButton}
                    small={isMobileWidth}
                    isDouble
                />
                <div className={styles.mintFighterModalClose} onClick={close} role={'button'} tabIndex={0} onKeyPress={null}>
                    <img src={modalCloseButtonIcon} alt="close icon" title="Close" />
                </div>
            </div>
        </div>
    );
};

export default MintFighterModal;
