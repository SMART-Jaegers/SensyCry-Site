import React from "react";
import Icon from "../../../app-icons/Icon";
import { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AudioPlayerStyled } from "./AudioPlayer.styled";
import testAudio from "../../../testData/SoundHelix-Song-1.mp3";
import testAudio1 from "../../../testData/test2.wav";

const AudioPlayer = () => {
  return (
    <AudioPlayerStyled
      src={"https://sensycry-records.s3.amazonaws.com/SoundHelix-Song-1.mp3"}
      showJumpControls={false}
      showDownloadProgress={false}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      customIcons={{
        play: (
          <Icon
            icon="start"
            size={18}
            color={"#79A3AD"}
            viewBox="0 0 16 16"
            style={{ display: "block" }}
          />
        ),
        pause: (
          <Icon
            icon="stop"
            size={18}
            color={"#79A3AD"}
            viewBox="0 0 16 16"
            style={{ display: "block" }}
          />
        ),
      }}
      layout="horizontal-reverse"
      customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
    />
  );
};

export default AudioPlayer;
