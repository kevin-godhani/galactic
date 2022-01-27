import React from "react";
import * as styles from "./index.module.scss";
import { MainButtonExternal } from "../buttons";
import { walletSetupGuideUrl } from '../../constants';
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
                <p className={`description ${styles.mintFighterModalText}`}>The mint/NFT sale will start on 29th January 2022</p>
                <p className={`description ${styles.mintFighterModalText}`}>Presale begins at: 1700hrs UTC.</p>
                <p className={`description ${styles.mintFighterModalText}`}>Public sale begins at: 2100 hrs UTC</p>
                <p className={`description ${styles.mintFighterModalText}`}>If this is your first \n NTF investment, please read our guide on the process below.</p>
                <p className={`description ${styles.mintFighterModalText}`}>Thank You!</p>
                <MainButtonExternal
                    url={walletSetupGuideUrl}
                    title={"Wallet Setup Guide"}
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
