import glc from "../glcommander";

let r = 0;
const render = () => {
  glc.clear(r, 0.0, 0.0, 1.0);
  r += 0.001;
  window.requestAnimationFrame(render);
};

const init = (id: string): void => {
  r = 0;
  const canvas = document.querySelector(`#${id}`) as HTMLCanvasElement;

  if (!canvas) {
    return;
  }

  const gl = canvas.getContext(`webgl`);

  if (!gl) {
    return;
  }
  glc.init(gl);
  window.requestAnimationFrame(render);
};

export default init;