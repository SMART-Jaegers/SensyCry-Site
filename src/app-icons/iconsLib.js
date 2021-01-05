import { clock } from "./resources/ClockResources";
import { logOut } from "./resources/Log-outResources";
import { more2 } from "./resources/More2Resources";
import { more } from "./resources/MoreResources";
import { settings } from "./resources/SettingsResources";
import { start } from "./resources/StartResources";
import { stop } from "./resources/StopResources";

const assets = {
  clock: clock,
  "log-out": logOut,
  more: more,
  more2: more2,
  settings: settings,
  start: start,
  stop: stop,
};

export default assets;
