class GLCommander {
    gl: WebGLRenderingContext;
  
    init(gl: WebGLRenderingContext) {
      this.gl = gl;
    }
  
    clear = (r: number, g: number, b: number, a: number) => {
      this.gl.clearColor(r, g, b, a);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    };
  }
  
  const glc = new GLCommander();
  
  export default glc;