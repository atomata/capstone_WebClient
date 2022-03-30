import {
  changeSkybox,
  defaultCameraView,
  loadApparatus,
  pauseApparatus,
  playApparatus,
  setDefault,
  unityContext,
} from "../util/unityContextActions";
import {
  defaultCameraCommand,
  loadTrigger,
  pauseApparatusCommand,
  playApparatusCommand,
  skyboxTrigger,
  unityScene,
} from "../util/constants";
import {convertPathDataToTree} from "../util/jsonParsing";
import {testmetadata1} from "./testConstants";

test("test if the correct appartus is requested", () => {
  const apparatus = "wobble-sphere";
  const spy = jest.spyOn(unityContext, "send");
  loadApparatus(apparatus);
  expect(spy).toHaveBeenCalledWith(unityScene, loadTrigger, apparatus);
});

test("test if the correct skybox is requested", () => {
  const skybox = "mars";
  const spy = jest.spyOn(unityContext, "send");
  changeSkybox(skybox);
  expect(spy).toHaveBeenCalledWith(unityScene, skyboxTrigger, skybox);
});

test("test if the correct camera angle is requested", () => {
  const spy = jest.spyOn(unityContext, "send");
  defaultCameraView();
  expect(spy).toHaveBeenCalledWith(unityScene, defaultCameraCommand);
});

test("test if the correct default trigger is requested", () => {
  const spy = jest.spyOn(unityContext, "send");
  setDefault(convertPathDataToTree(testmetadata1));
  expect(spy).toHaveBeenCalledWith(unityScene, "Trigger","evil-cylinder/default");
});

test("test if the correct trigger requested", () => {
  const spy = jest.spyOn(unityContext, "send");
  playApparatus();
  expect(spy).toHaveBeenCalledWith(unityScene, playApparatusCommand);
});

test("test if the correct trigger requested", () => {
  const spy = jest.spyOn(unityContext, "send");
  pauseApparatus();
  expect(spy).toHaveBeenCalledWith(unityScene, pauseApparatusCommand);
});
