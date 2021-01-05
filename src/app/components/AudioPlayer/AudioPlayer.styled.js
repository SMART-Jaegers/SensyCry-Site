import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";

export const AudioPlayerStyled = styled(AudioPlayer)`
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(49, 108, 122, 0.15);
  border-radius: 15.5px;
  width: 202px;
  height: 28px;
  padding: 0 0 0 17px;
  .rhap_progress-container {
    margin: 0;
    margin-right: 20px;
  }
  .rhap_progress-indicator {
    display: none;
  }
  .rhap_progress-bar {
    background: #c4c4c4;
    border-radius: 1px;
    height: 2px;
  }
  .rhap_play-pause-button {
    font-size: 20px;
    width: 20px;
    height: 20px;
  }

  .rhap_progress-filled {
    background: #316c7a;
    border-radius: 1px;
  }

  .rhap_controls-section {
    flex: none;
  }
`;
