import React, { useState, useEffect, useCallback } from "react";
import * as styles from "./index.module.scss";

const CustomTimer = () => {
  const [minute, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDays] = useState(0);

  const timer = useCallback(() => {
    const time =
      Date.parse("January, 20, 2022, 19:00") - Date.parse(new Date());
    if (time < 0) {
      setMinutes(0);
      setDays(0);
      setHour(0);
    } else {
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setMinutes(minutes);
      setDays(days);
      setHour(hours);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(timer, 1000 * 60);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (day === 0 && hour === 0 && minute === 0) {
      timer();
    }
  }, [day, hour, minute, timer]);

  return (
    <div className={styles.timerWrapper}>
      <h5 className={styles.timer}>
        <span>{day}</span>
        <span>D:</span>
        <span>{hour}</span>
        <span>H:</span>
        <span>{minute}</span>
        <span>M</span>
      </h5>
      <p>-Until Mint-</p>
    </div>
  );
};

export default CustomTimer;
