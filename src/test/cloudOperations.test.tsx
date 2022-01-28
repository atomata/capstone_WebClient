import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";
import saveExperienceToCloud from "../util/cloudOperations/writeToCloud";

import {
  getApparatusFromCloud,
  getExperienceFromCloud,
} from "../util/cloudOperations/readFromCloud";

const metadata = {
  Id: "evil-cylinder",
  Paths: [
    "evil-cylinder",
    "evil-cylinder/evil-cylinder",
    "evil-cylinder/evil-cylinder/delta",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
  ],
  Data: [
    "0@identifier:evil-cylinder",
    "0@type:Serialization",
    "1@identifier:evil-cylinder",
    "1@type:AssetBundle",
    "1@key:evil-cylinder",
    "2@identifier:delta",
    "2@type:DeltaTransform",
    "2@input:vec3:position",
    "2@input:vec3/rotation",
    "2@input:vec3/scale",
    "2@input:vec3/position_delta",
    "2@input:vec3/rotation_delta",
    "2@input:vec3/scale_delta",
    "2@input:bool/isLocal",
    "3@identifier:wobble-sphere",
    "3@type:Serialization",
    "4@identifier:wobble-sphere",
    "4@type:AssetBundle",
    "4@key:wobble-sphere",
    "5@identifier:animations",
    "5@type:Event",
    "5@associatedNode:wobble-sphere",
    "5@input:void/Still",
    "5@input:void/Wobble",
    "5@input:void/Bounce",
  ],
};


test("based on the apparatus id it should return the apparatus json, but can reject", () => {
  global.fetch = jest.fn(() =>
      Promise.reject()
  ) as jest.Mock;
  const apparatusId = "wobble-sphere";
  return getApparatusFromCloud(apparatusId)
      .then((testoutput) => {
        expect(testoutput).toEqual(undefined);
      })
});

test("based on the apparatus id it should return the apparatus json", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(metadata),
    })
  ) as jest.Mock;
  const apparatusId = "wobble-sphere";
  return getApparatusFromCloud(apparatusId)
    .then((testoutput) => {
      expect(testoutput).toEqual(metadata);
    })
});


test("based on the user id and exp id, it should return the experience json but can reject", () => {
  global.fetch = jest.fn(() =>
      Promise.reject()
  ) as jest.Mock;
  const userId = "testuser1";
  const expId = "testexp1";
  return getExperienceFromCloud(userId, expId).then((testoutput) => {
    expect(testoutput).toEqual(undefined);
  });
});



test("based on the user id and exp id, it should return the experience json", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          experienceId: "testexp1",
          apparatusId: "wobble-sphere",
          actionList: [],
        }),
    })
  ) as jest.Mock;
  const userId = "testuser1";
  const expId = "testexp1";
  const output = {
    experienceId: "testexp1",
    apparatusId: "wobble-sphere",
    actionList: [],
  };
  return getExperienceFromCloud(userId, expId).then((testoutput) => {
    expect(testoutput).toEqual(output);
  });
});

test("based on the url, it should return the list of blobs", () => {
  const id = "testuser1";
  const output = ["testexp1"];
  return getBlobsInContainer(id).then((testoutput) => {
    expect(testoutput).toEqual(output);
  });
});

test("save an experience to the cloud", () => {
  const id = "testuser2";
  const exp = {
    experienceId: "testexp2",
    apparatusId: "testapp",
    actionList: [],
  };
  const output = ["testexp2"];
  return saveExperienceToCloud(id, exp).then(() => {
    getBlobsInContainer(id).then((testoutput) => {
      expect(testoutput).toEqual(output);
    });
  });
});
