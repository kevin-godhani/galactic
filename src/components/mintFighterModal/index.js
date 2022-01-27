import React from "react";
import * as styles from "./index.module.scss";
import { MainButtonExternal } from "../buttons";
import { walletSetupGuideUrl } from '../../constants';

import modalCloseButtonIcon from '../../styles/img/modal-close-button.png';

const MintFighterModal = ({ showModal, changeModalStateCb }) => {
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
                <p className={`description ${styles.mintFighterModalText}`}>Welcome to the Galactic Fight League. <br />
                    The mint/NFT sale will start on 29th January 2022</p>
                <p className={`description ${styles.mintFighterModalText}`}>Presale begins at: 1700hrs UTC. <br />
                    Public sale begins at: 2100 hrs UTC</p>
                <p className={`description ${styles.mintFighterModalText}`}>If this is your first NTF investment, please read our guide on the process below. These transactions will be carried out on the Solana network and each will cost a small amount of Sol. Please ensure you have a Solana wallet like Phantom - phantom.app set up with enough Sol to make the purchase and cover any fees.</p>
                <p className={`description ${styles.mintFighterModalText}`}>How to set up and fund a wallet to purchase a fighter.</p>
                <p className={`description ${styles.mintFighterModalText}`}>Thank You!</p>
                <MainButtonExternal
                    url={walletSetupGuideUrl}
                    title={"Wallet Setup Guide"}
                    buttonClassName={styles.mintFighterModalButton}
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
