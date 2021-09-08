import React from 'react';
import "./CompCss.css";
import img from "./assets/github-logo.png"
import img1 from "./assets/image1.jpg"
import img2 from "./assets/group.png"
import img3 from "./assets/star-1.png"
import img4 from "./assets/over.png"
import img5 from "./assets/res.png"
import img6 from "./assets/por.png"
import img7 from "./assets/pack.png"


const NewComp = () => {
  return (
    <div className="MainContainer">
      <div className="HeadContain">
        <div className="Links">
        <div className="HeadIcons"><img src={img}/></div>
        <div className="HeadLinks">
          <div className="B">Why GitHub?</div>
          <div className="B">Team</div>
          <div className="B">Enterprise</div>
          <div className="B">Explore</div>
          <div className="B">Marketplace</div>
          <div className="B">Pricing</div>
        </div>
        </div>
        <div className="Empty"></div>
        <div className="Searchs">
        <input 
        placeholder="  Search"
        className="Search"/>
        <a href="#" className="SignIn">Sign in</a>
        <button className="Signup">Sign up</button>
        <div className="Burger">
          <div className="A"></div>
          <div className="A"></div>
          <div className="A"></div>
        </div>
        </div>

      </div>

      <div className="First">
        <div className="Mini">
          <div className="Pic">
            <div className="pics"><img src={img1}/></div>
          </div>
          <div className="Text">
            <b>Muomaife Frederick</b>
          <div className="sText">Muomaife Frederick</div>
          </div>
          <button className="button1">Follow</button>
          <div className="Num">
            <div className="ico"><img src={img2}/></div>
            <div className="tes">6</div>
            <div className="test">Followers</div>
            <div className="dot"></div>
            <div className="tes">8</div>
            <div className="test">Following</div>
            <div className="dot"></div>
            <div className="ico"><img src={img3}/></div>
            <div className="tes">1</div>
            <div className="tes"></div>
            <div className="tes"></div>
            <div className="tes"></div>
          </div>
        </div>
        <div className="Mini2">
          <div className="Over">
            <div className="small">
              <div className="same">
                <div className="ico"><img src={img4}/></div>
                <div className="tes1">Overview</div>
              </div>
              <div className="same1">
                <div className="ico"><img src={img5}/></div>
                <div className="tes1">Respositories</div>
                <div className="tes2">37</div>
              </div>
              <div className="same">
                <div className="ico"><img src={img6}/></div>
                <div className="tes1">Projects</div>
              </div>
              <div className="same">
                <div className="ico"><img src={img7}/></div>
                <div className="tes1">Packages</div>
              </div>
              <div className="same">
                <div className="ico"></div>
                <div className="tes1"></div>
              </div>

            </div>
            <div className="small1"></div>
          </div>
          <div className="pinned">Pinned</div>
          <div className="Box">
            <div className="boxes">
            <div className="minbox">
            <div className="Title">DevData_CollectionWeb</div>
                <div className="Java">
                  
                </div>
            </div>
              <div className="minbox">
              </div>
            </div>
            <div className="boxes"> </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NewComp;











