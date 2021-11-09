type Metadata = {
  Paths: string[];
  Data: string[];
};

function parseActions(metadata: Metadata) {
  const actionArray = [];

  for (let i = 0; i < metadata.Data.length; i += 1) {
    const identifier = metadata.Data[i].split("@");
    const action = identifier[1].split(":");

    if (action[0] === "input") {
      if (
        actionArray[identifier[0]] == null ||
        actionArray[identifier[0]] === undefined
      )
        actionArray[identifier[0]] = [
          metadata.Paths[identifier[0]],
          metadata.Data[i - 1].split("@")[1].split(":")[1],
        ];
      actionArray[identifier[0]].push([action[2]]);
    }
  }

  return actionArray;
}

function func1() {

  // some function
  console.log("Sample Function")

}

export { parseActions, func1 };
export type { Metadata };
