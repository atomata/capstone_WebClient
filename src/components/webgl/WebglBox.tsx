import styled from "styled-components";
import Unity from "react-unity-webgl";
import Overlay from "../Overlay/Overlay";
import { unityContext, load } from "../../util/unityContextActions";
import { parseAssets, Metadata } from "../../util/parsing";
import { useEffect, useState } from "react";

const WebglRoot = styled.div`
  display: relative;
  width: 1600px;
  height: 700px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;


function WebglBox ({ json }: { json: any }): JSX.Element {

    useEffect(function () {
        unityContext.on("loaded", function () {
            console.log("asdf my test")
            console.log(json)
            console.log(json.Metadata)
            // const assetArray = parseAssets(json.Metadata);

            // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
            // Having a timeout bypasses this
            // setTimeout(function() { 
            //     load(assetArray[0]);
            // }, 100)
        });
    }, []);

    return (
        <WebglRoot>           
            <Unity
                unityContext={unityContext}
                style={{
                    height: "inherit",
                    width: "inherit",
                    position: "absolute",
                    zIndex: 0,
                }}
            />
            <Overlay json={json}/>
        </WebglRoot>
    );
}

export default WebglBox;
