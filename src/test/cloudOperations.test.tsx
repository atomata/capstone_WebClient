import {
  getApparatusFromCloud,
  getExperienceFromCloud,
  getBlobNamesInContainer,
  getBlobsInContainer,
  setupApparatusData,
} from "../util/cloudOperations/readFromCloud";
import { deleteExp, saveExp } from "../util/cloudOperations/writeToCloud";
import { testSerializedExperience, testmetadata1 } from "./testConstants";
import { ExperienceData } from "../util/types";
import {convertPathDataToTree} from "../util/jsonParsing";


describe("appratus json data", () => {
  global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(testmetadata1),
      })) as jest.Mock;

  it("based on the apparatus id it should return the apparatus json", () => {
    const apparatusId = "evil-cylinder";
    return getApparatusFromCloud(apparatusId).then((testoutput) => {
      expect(testoutput).toEqual(testmetadata1);
    });
  });

  it("setup apparatus data", () => {
    const experienceDataTemp: ExperienceData = {
      apparatusRoot: convertPathDataToTree(testmetadata1),
      experience: {
        experienceId: "exp1",
        apparatusId: "",
        actionList: [],
        skyboxId: "",
      },
    };

    const apparatusId = "evil-cylinder";
    setupApparatusData(apparatusId, experienceDataTemp).then(() => {
      expect(experienceDataTemp.apparatusRoot).toEqual(convertPathDataToTree(testmetadata1));
    });
  });
});

test("based on the apparatus id it should return the apparatus json, but can reject", () => {
  global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;
  const apparatusId = "wobble-sphere";
  return getApparatusFromCloud(apparatusId).then((testoutput) => {
    expect(testoutput).toEqual(undefined);
  });
});



test("based on the user id and exp id, it should return the experience json but can reject", () => {
  global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;
  const userId = "testuser1";
  const expId = "testexp1";
  return getExperienceFromCloud(userId, expId).then((testoutput) => {
    expect(testoutput).toEqual(undefined);
  });
});

test("based on the user id and exp id, it should return the experience json", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(testSerializedExperience),
    })
  ) as jest.Mock;
  const userId = "testuser1";
  const expId = "testexp1";
  return getExperienceFromCloud(userId, expId).then((testoutput) => {
    expect(testoutput).toEqual(testSerializedExperience);
  });
});

test("based on the url, it should return the list of blob names", () => {
  const id = "testuser1";
  const output = ["testexp1"];
  return getBlobNamesInContainer(id).then((testoutput) => {
    expect(testoutput).toEqual(output);
  });
});

test("based on the url, it should return the list of blobs", () => {
  const id = "testuser1";
  const output = ["testexp1", "February 09, 2022, 09:41:49 PM"];
  return getBlobsInContainer(id).then((testoutput) => {
    expect(testoutput[0]).toEqual(output);
  });
});

test("save an experience to the cloud", () => {
  const id = "testuser1";
  const output = ["testexp1"];
  return saveExp(id, testSerializedExperience).then(() => {
    getBlobsInContainer(id).then((testoutput) => {
      expect(testoutput).toEqual(output);
    });
  });
});

test("delete an experience form cloud", () => {
  const id = "testuser1";
  const output = [];
  return deleteExp(id, "testexp1").then(() => {
    getBlobsInContainer(id).then((testoutput) => {
      expect(testoutput).toEqual(output);
    });
  });
});


