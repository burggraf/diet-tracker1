import"./index.4914e6e5.js";import{a as n}from"./overlays-ab6211c7.e7d97763.js";const a=async e=>{(await n.create(e)).present()},o=async e=>{const s={header:e.header||void 0,subHeader:e.subHeader||void 0,message:e.message||void 0,buttons:e.buttons||["OK"]};return a(s)},l=async e=>{const s={header:e.header||"Confirm",subHeader:e.subHeader||void 0,message:e.message||"Are you sure?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{e.cancelHander?e.cancelHander():console.log("Cancel")}},{text:"OK",handler:()=>{e.okHander?e.okHander():console.log("okHandler was not found...not doing anything")}}]};return a(s)};export{o as a,l as s};
