import { isFunction, isPlainObject } from "lodash";

export default getScriptsFromConfig;

function getScriptsFromConfig(scripts, input) {
  if (isPlainObject(scripts)) {
    return scripts;
  } else if (isFunction(scripts)) {
    return scripts(input);
  }
  return {};
}
