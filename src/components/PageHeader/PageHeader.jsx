/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {WebGl} from 'assets/js/webGLFluid';
import {Container} from "reactstrap";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.webGlFluidConfig = {
      SIM_RESOLUTION: 64,
      DYE_RESOLUTION: 256,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 2,
      VELOCITY_DISSIPATION: 3,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 12,
      SPLAT_RADIUS: 0.4,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: {r: 23, g: 25, b: 65},
      TRANSPARENT: true,
      TRANSPARENT_WITH_CHECKERBOARD: false,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.4,
      BLOOM_THRESHOLD: 0.2,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: false,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
      ACTIVATE_AT_HOVER: true,
      INIT_SPLATS_ON_START: false,
      DISABLE_TOUCH_MOVE: false,
      ENABLE_ORIENTATION_MOVE: false
    };
  }
  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      this.webGlFluidConfig.ENABLE_ORIENTATION_MOVE = true;
    }
    this.webGlInstance = new WebGl(this.webGlFluidConfig);
  }

  render() {
    return (
      <div className="page-header header-filter">
        <canvas/>
        <Container>
          <div className="content-center brand">
            <img src={require("assets/img/neonShalaver.png")} alt={'shaverLover neon logo'}/>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
