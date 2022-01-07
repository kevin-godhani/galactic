import React, { useEffect, useState } from "react";
import CloseIcon from "../mainPage/thirdBlock/closeIcon";
import * as styles from "./index.module.scss";
import { discordLink } from '../../constants';
import { ButtonWithoutLink } from "../buttons";
// import gsap from 'gsap';

const ExitIntentModal = ({ showModal }) => {
    const [show, setShow] = useState(showModal);

    useEffect(() => {
      setShow(showModal);
    }, [showModal])
  
    const close = () => {
      setShow(false);
    };

    const onBtnClick = () => {
        close();
        window.open(discordLink, '_blank');
    }

    return show && (
        <div className={styles.exitIntentModal}>
            <div className={styles.exitIntentModalContent}>
                <p className={`description ${styles.exitIntentModalText}`}>Join our discord for whitelist opportunities, competitions and giveaways!</p>
                <ButtonWithoutLink
                    callback={onBtnClick}
                    title={"Join Discord"}
                    // small={showSmallButton}
                    containerClassName={styles.exitIntentModalButton}
                    textContainerClassName={styles.exitIntentModalButtonTextContainer}
                />
                <div className={styles.exitIntentModalClose} onClick={close} role={'button'} tabIndex={0} onKeyPress={null}>
                    <CloseIcon onClick={close} />
                </div>
            </div>
        </div>
    );
};

export default ExitIntentModal;
