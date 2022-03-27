import {
  changeSkybox,
  defaultCameraView,
  loadApparatus,
  unityContext,
} from "../util/unityContextActions";
import {
  defaultCameraCommand,
  loadTrigger,
  skyboxTrigger,
  unityScene,
} from "../util/constants";

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
