import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";
import saveExperienceToCloud from "../util/cloudOperations/writeToCloud";

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
