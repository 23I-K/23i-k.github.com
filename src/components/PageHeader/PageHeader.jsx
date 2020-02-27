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

  componentDidMount() {
    this.webGlInstance = new WebGl();
    // this.webGlInstance.insertImageToCenter(require("assets/img/neonShalaver.png"));
  }

  render() {
    return (
      <div className="page-header header-filter">
        <canvas/>
        <Container>
          <div className="content-center brand content-center-top-fix">
            <img src={require("assets/img/neonShalaver.png")} alt={'shaverLover neon logo'}/>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
