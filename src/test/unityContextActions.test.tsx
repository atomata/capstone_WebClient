import {callToWebGL, load,voidTrigger,unityContext} from '../util/unityContextActions'

test("load", ()=> {
    
    // when the load function has been called, it will send an message to unityContext.send("Container", "LoadApparatus", arg)

    Mock().load("hallo world")

})