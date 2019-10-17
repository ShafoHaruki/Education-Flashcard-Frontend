import React from "react";
import "./CSS/fontSelector.css";

export default class FontSelector extends React.Component {
  render() {
    return (
      <div className="fontSelector">
        <p className="fontSelectHeader">
          Spice up your learning with different funky fonts !
        </p>
        <button
          className="fontSelectButton"
          onClick={() => {
            this.props.onFontSelect("");
          }}
        >
          Font 1 : Default Font
        </button>
        <button
          className="fontSelectButton"
          onClick={() => {
            this.props.onFontSelect("liuJianMaoCao");
          }}
        >
          Font 2 : Liu Jian Mao Cao
        </button>
        <button
          className="fontSelectButton"
          onClick={() => {
            this.props.onFontSelect("zcoolKuaiLe");
          }}
        >
          Font 3 : ZCOOL KuaiLe
        </button>
        <button
          className="fontSelectButton"
          onClick={() => {
            this.props.onFontSelect("longCang");
          }}
        >
          Font 4 : Long Cang
        </button>
        <button
          className="fontSelectButton"
          onClick={() => {
            this.props.onFontSelect("maShanZheng");
          }}
        >
          Font 5 : Ma Shan Zheng
        </button>
      </div>
    );
  }
}
