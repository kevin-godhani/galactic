import React from "react";
import PropTypes from "prop-types";
import * as styles from "./index.module.scss";

const YoutubeEmbed = ({ title, embedId, width, height }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width={width || "853"}
      height={height || "480"}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title || "Embedded youtube"}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default YoutubeEmbed;