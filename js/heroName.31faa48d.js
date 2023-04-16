"use strict";(self["webpackChunkgrimlight_index"]=self["webpackChunkgrimlight_index"]||[]).push([[803],{9352:function(t,e,n){n.d(e,{m:function(){return i}});n(7658);var l=n(9876),a=n(357);const i=(0,l.Q_)("spine",{state:()=>{const{unit:t}=(0,l.Jk)((0,a.n)());return{unit:t,isSpine:!1,players:[]}},actions:{setSpine(t,e){const n=document.getElementById(t);n.innerHTML="",this.player=new spine.SpinePlayer(t,{jsonUrl:`spine/${e}.json`,atlasUrl:`spine/${e}.atlas`,backgroundColor:"#00000000",defaultMix:.4,animation:"idle",showControls:!1,premultipliedAlpha:!0,alpha:!0,viewport:{debugRender:!1,transitionTime:1}})},setSpine_SD(){this.unit.SD.slice().reverse().forEach(((t,e)=>{console.log(t),null!=t&&(this.setSpine("spine_SD_"+(this.unit.SD.length-e-1),t),this.players.push(this.player))}))},changeAnimation(t){this.players.forEach(((e,n)=>{e.animationState.setAnimation(0,t,!0,0),e.animationState.addAnimation(0,"idle",!0,3)}))},storyUse(t,e){const n=document.getElementById(e);""==t?n.innerHTML="":(n.innerHTML="",this.player=new spine.SpinePlayer(e,{jsonUrl:`spine/${t}.json`,atlasUrl:`spine/${t}.atlas`,backgroundColor:"#00000000",showControls:!1,premultipliedAlpha:!0,alpha:!0,viewport:{debugRender:!1}}))}}})},117:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ll}});var l=n(6252);const a={class:"container"},i={class:"row"};function o(t,e,n,o,s,c){const r=(0,l.up)("SideNav"),u=(0,l.up)("MainUnit");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",i,[(0,l.Wm)(r),(0,l.Wm)(u)])])}n(7658);var s=n(2201),c=n(3577),r=n(9963);const u=t=>((0,l.dD)("data-v-21adfcce"),t=t(),(0,l.Cn)(),t),d={key:0,class:"col-md-2 side-nav rounded-4"},p={class:"table table-light rounded rounded-4 overflow-hidden mb-0"},b={colspan:"6",class:"d-flex justify-content-center pt-1 pb-0 border-bottom-0"},_=["src"],m=["src"],g=["src"],v={colspan:"6",class:"d-flex justify-content-center pt-0 pb-1 border-top-0"},w=["src"],y=["src"],h={colspan:"6",class:"d-flex justify-content-center pt-1 pb-0 border-bottom-0"},C=["src"],k=["src"],x=["src"],f={colspan:"6",class:"d-flex justify-content-center pt-0 pb-1 border-top-0"},D=["src"],S=["src"],L=["src"],z={class:"p-0"},M={class:"input-group"},A=u((()=>(0,l._)("i",{class:"bi bi-arrow-clockwise"},null,-1))),I=[A],U=u((()=>(0,l._)("i",{class:"bi bi-sort-down"},null,-1))),T=[U],N={class:"input-group-text fw-bold w-50 py-1"},H={class:"p-0"},P={class:"input-group"},E={class:"p-0"},F={class:"input-group"},J={class:"d-flex justify-content-between"},j={class:"input-group"},q=u((()=>(0,l._)("i",{class:"bi bi-image"},null,-1))),V=[q],Z=u((()=>(0,l._)("i",{class:"bi bi-fonts"},null,-1))),K=[Z],W=u((()=>(0,l._)("button",{class:"btn btn-outline-dark px-2 py-0 fs-5 border-0",type:"button"},[(0,l._)("i",{class:"bi bi-box-arrow-up-right"})],-1))),Y={id:"nav-scroll"},O={key:0},B={key:1,class:"container row mx-0"},R=["src"];function X(t,e,n,a,i,o){const s=(0,l.up)("router-link");return a.isMobile?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("table",p,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",b,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[0]||(e[0]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Attribute_Water.png",alt:""},null,8,_)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[1]||(e[1]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Attribute_Fire.png",alt:""},null,8,m)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[2]||(e[2]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Attribute_Nature.png",alt:""},null,8,g)])])]),(0,l._)("tr",null,[(0,l._)("th",v,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[3]||(e[3]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Attribute_Dark.png",alt:""},null,8,w)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[4]||(e[4]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Attribute_Light.png",alt:""},null,8,y)])])]),(0,l._)("tr",null,[(0,l._)("th",h,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[5]||(e[5]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Guardian.png",alt:""},null,8,C)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[6]||(e[6]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Warrior.png",alt:""},null,8,k)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[7]||(e[7]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Assassin.png",alt:""},null,8,x)])])]),(0,l._)("tr",null,[(0,l._)("th",f,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[8]||(e[8]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Ranger.png",alt:""},null,8,D)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[9]||(e[9]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Mage.png",alt:""},null,8,S)]),(0,l._)("button",{type:"button",class:"btn btn-outline-secondary btn-filter me-1 p-1",onClick:e[10]||(e[10]=(...t)=>a.filter&&a.filter(...t))},[(0,l._)("img",{src:"img/UI_Icon_Class_Sage.png",alt:""},null,8,L)])])]),(0,l._)("tr",null,[(0,l._)("td",z,[(0,l._)("div",M,[(0,l._)("button",{class:"btn btn-outline-secondary px-2 fs-4 w-25 py-1",type:"button",onClick:e[11]||(e[11]=(...t)=>a.clearFilter&&a.clearFilter(...t))},I),(0,l._)("button",{class:"btn btn-outline-secondary px-2 fs-4 w-25 py-1",type:"button",onClick:e[12]||(e[12]=(...t)=>a.sortFilter&&a.sortFilter(...t))},T),(0,l._)("span",N,(0,c.zw)(a.sortValue),1)])])]),(0,l._)("tr",null,[(0,l._)("td",H,[(0,l._)("div",P,[(0,l.wy)((0,l._)("input",{type:"text","aria-label":"search",class:"form-control",placeholder:"Search Name",style:{background:"transparent","font-weight":"bold"},"onUpdate:modelValue":e[13]||(e[13]=t=>a.searchName=t)},null,512),[[r.nr,a.searchName]])])])]),(0,l._)("tr",null,[(0,l._)("td",E,[(0,l._)("div",F,[(0,l.wy)((0,l._)("input",{type:"text","aria-label":"search",class:"form-control",placeholder:"Search Skill & Traits",style:{background:"transparent","font-weight":"bold"},"onUpdate:modelValue":e[14]||(e[14]=t=>a.searchSkill=t)},null,512),[[r.nr,a.searchSkill]])])])])])]),(0,l._)("div",J,[(0,l._)("div",j,[(0,l._)("button",{class:"btn btn-outline-dark px-2 py-0 fs-5",type:"button",onClick:e[15]||(e[15]=t=>a.switchImgText(0))},V),(0,l._)("button",{class:"btn btn-outline-dark px-2 py-0 fs-5 active",type:"button",onClick:e[16]||(e[16]=t=>a.switchImgText(1))},K)]),(0,l.Wm)(s,{to:"/"},{default:(0,l.w5)((()=>[W])),_:1})]),(0,l._)("div",Y,[1===a.ImgText?((0,l.wg)(),(0,l.iD)("div",O,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unitsFilter,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.Name[a.language]},[(0,l.Wm)(s,{onClick:e=>a.initialUnit(t.Cname),class:"btn btn-outline-secondary nav-link text-dark my-1 mx-3 me-md-4",to:{name:"heroName",params:{heroName:t.Name[0]}}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.Name[a.language]),1)])),_:2},1032,["onClick","to"])])))),128))])):(0,l.kq)("",!0),0===a.ImgText?((0,l.wg)(),(0,l.iD)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unitsFilter,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"col-6 p-0 p-1",key:t.Name[a.language]},[(0,l.Wm)(s,{onClick:e=>a.initialUnit(t.Cname),to:{name:"heroName",params:{heroName:t.Name[0]}}},{default:(0,l.w5)((()=>[(0,l._)("img",{class:"rounded rounded-4",src:`img/UI_Card/${t.Imgs[0]}`,alt:""},null,8,R)])),_:2},1032,["onClick","to"])])))),128))])):(0,l.kq)("",!0)])]))}var G=n(2262),Q=n(9876),tt=n(7199),et=n(534),nt=n(357),lt=n(964),at={name:"SideNav",setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{language:e,text:n}=(0,Q.Jk)((0,et.Z)()),{searchName:a,searchSkill:i,elementBtns:o,classBtns:s,elementList:c,classList:r,sortList:u}=(0,Q.Jk)((0,nt.n)());o.value=[!1,!1,!1,!1,!1],s.value=[!1,!1,!1,!1,!1,!1],a.value="",i.value="";const d=(0,G.iH)("Update"),p=(t,e)=>{d.value=u.value[(u.value.indexOf(d.value)+1)%u.value.length]},b=(t,n)=>"ATK"==d.value?n.ATK-t.ATK:"DEF"==d.value?n.DEF-t.DEF:"HP"==d.value?n.HP-t.HP:"Name"==d.value?t.Name[e.value]<n.Name[e.value]?-1:t.Name[e.value]>n.Name[e.value]?1:0:"Update"==d.value?t.Cname>n.Cname?-1:t.Cname<n.Cname?1:0:void 0,_=(0,l.Fl)((()=>lt.sort(((t,e)=>b(t,e))).filter((t=>{var n=o.value[c.value.indexOf(t.Element[0])]||!o.value.includes(!0),l=s.value[r.value.indexOf(t.Class[0])]||!s.value.includes(!0),u=t.Name[e.value].toLowerCase().includes(a.value.toLowerCase());if(t.ActiveDescription.length>0&&t.PassiveDescription.length>0){var p=t.ActiveDescription[e.value][0].toLowerCase().includes(i.value.toLowerCase()),b=t.PassiveDescription[e.value][0].toLowerCase().includes(i.value.toLowerCase()),_=!1;t.TraitsDescription.forEach((t=>{_=_||t[e.value].toLowerCase().includes(i.value.toLowerCase())}))}else p=t.Name[e.value].toLowerCase().includes(i.value.toLowerCase()),b=t.Name[e.value].toLowerCase().includes(i.value.toLowerCase()),_=t.Name[e.value].toLowerCase().includes(i.value.toLowerCase());return n&&l&&u&&(p||b||_)&&d})))),m=t=>{$("#ui-card").carousel({pause:!0,interval:!1}).carousel(0),$("#spine-SD").carousel({pause:!0,interval:!1}).carousel(0),(0,nt.n)().initialUnit(t)},g=t=>{o.value.forEach(((e,n,l)=>{t.target.closest("button").children[0].attributes["src"].value.indexOf(c.value[n])>=0&&(l[n]=!l[n])})),s.value.forEach(((e,n,l)=>{t.target.closest("button").children[0].attributes["src"].value.indexOf(r.value[n])>=0&&(l[n]=!l[n])})),t.target.closest(".btn").classList.toggle("active")},v=(0,G.iH)(1),w=t=>{v.value=t,0===t?($(".bi-image").closest("button").addClass("active"),$(".bi-fonts").closest("button").removeClass("active")):($(".bi-image").closest("button").removeClass("active"),$(".bi-fonts").closest("button").addClass("active"))},y=()=>{o.value=[!1,!1,!1,!1,!1],s.value=[!1,!1,!1,!1,!1,!1],a.value="",i.value="",$(".btn-filter").removeClass("active")};return{isMobile:t,language:e,text:n,filter:g,clearFilter:y,sortFilter:p,searchName:a,searchSkill:i,sortValue:d,unitsFilter:_,initialUnit:m,ImgText:v,switchImgText:w}}},it=n(3744);const ot=(0,it.Z)(at,[["render",X],["__scopeId","data-v-21adfcce"]]);var st=ot;const ct={class:"offset-md-1 col"},rt={class:"row justify-content-center"};function ut(t,e,n,a,i,o){const s=(0,l.up)("UnitCard"),c=(0,l.up)("ToolAccordion"),r=(0,l.up)("UnitStat"),u=(0,l.up)("SpineAnimation"),d=(0,l.up)("UnitSkill"),p=(0,l.up)("UnitDescription");return(0,l.wg)(),(0,l.iD)("div",ct,[(0,l._)("div",rt,[(0,l.Wm)(s),a.isMobile?((0,l.wg)(),(0,l.j4)(c,{key:0})):(0,l.kq)("",!0),(0,l.Wm)(r)]),(0,l.Wm)(u),a.isMobile?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(c,{key:0})),(0,l.Wm)(d),(0,l.Wm)(p)])}var dt=n(9352);const pt=t=>((0,l.dD)("data-v-0361cc57"),t=t(),(0,l.Cn)(),t),bt={class:"col-md-4 offset-md-1 col-11",style:{"text-align":"center"}},_t={id:"ui-card-carousel",class:"carousel slide carousel-fade mx-auto","data-bs-ride":"carousel",style:{width:"70%"}},mt={class:"carousel-inner",id:"ui-card"},gt=["id"],vt=["src"],wt=(0,l.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#ui-card-carousel" data-bs-slide="prev" data-v-0361cc57><span class="carousel-control-prev-icon" aria-hidden="true" data-v-0361cc57></span><span class="visually-hidden" data-v-0361cc57>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#ui-card-carousel" data-bs-slide="next" data-v-0361cc57><span class="carousel-control-next-icon" aria-hidden="true" data-v-0361cc57></span><span class="visually-hidden" data-v-0361cc57>Next</span></button>',2),yt={class:"my-3"},ht={key:0,class:"btn-group",role:"group"},Ct={id:"spine-SD-carousel",class:"carousel slide mx-auto","data-bs-ride":"false"},kt={class:"carousel-indicators"},xt=["data-bs-slide-to","aria-label"],ft={class:"carousel-inner",id:"spine-SD"},Dt=["id"],St=["id"],Lt=pt((()=>(0,l._)("div",{class:"carousel-caption d-none d-md-block"},[(0,l._)("h5")],-1))),zt=(0,l.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#spine-SD-carousel" data-bs-slide="prev" data-v-0361cc57><span class="carousel-control-prev-icon" aria-hidden="true" data-v-0361cc57></span><span class="visually-hidden" data-v-0361cc57>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#spine-SD-carousel" data-bs-slide="next" data-v-0361cc57><span class="carousel-control-next-icon" aria-hidden="true" data-v-0361cc57></span><span class="visually-hidden" data-v-0361cc57>Next</span></button>',2);function Mt(t,e,n,a,i,o){return(0,l.wg)(),(0,l.iD)("div",bt,[(0,l._)("div",_t,[(0,l._)("div",mt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.Imgs,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:(0,c.C_)(["carousel-item",{active:0===e}]),id:`ui-card-carousel-item-${e+1}`},[(0,l._)("img",{src:`img/UI_Card/${a.unit.Imgs[e]}`,class:"d-block w-100",alt:""},null,8,vt)],10,gt)))),128))]),wt]),(0,l._)("h3",yt,(0,c.zw)(a.unit.Name[a.language]),1),a.isMobile?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",ht,[a.isSpine?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",class:"btn btn-secondary mb-3",onClick:e[0]||(e[0]=t=>a.setSpine("spine_FULL"))},"SHOW ANIMATION")),a.isSpine?((0,l.wg)(),(0,l.iD)("button",{key:1,type:"button",class:"btn btn-secondary mb-3",onClick:e[1]||(e[1]=t=>a.isSpine=!a.isSpine)},"HIDE ANIMATION")):(0,l.kq)("",!0)])),(0,l._)("div",Ct,[(0,l._)("div",kt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.SD,((t,e)=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button","data-bs-target":"#spine-SD-carousel","data-bs-slide-to":`${e}`,class:(0,c.C_)({active:0===e}),"aria-current":"true","aria-label":`Slide ${e+1}`},null,10,xt)))),128))]),(0,l._)("div",ft,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.SD,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:(0,c.C_)(["carousel-item",{active:0===e}]),id:`spine-SD-carousel-item-${e+1}`},[(0,l._)("div",{id:`spine_SD_${e}`,class:"spine-div"},null,8,St),Lt],10,Dt)))),128))]),zt])])}var At={name:"MainUnit",setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{language:e}=(0,Q.Jk)((0,et.Z)()),{isSpine:n}=(0,Q.Jk)((0,dt.m)()),{unit:a}=(0,Q.Jk)((0,nt.n)()),i=t=>{(0,dt.m)().setSpine(t,a.value.Fullbody[0]),n.value=!n.value};return(0,l.bv)((()=>{(0,dt.m)().setSpine_SD()})),(0,l.ic)((()=>{(0,dt.m)().setSpine_SD()})),{language:e,isMobile:t,isSpine:n,unit:a,setSpine:i}}};const It=(0,it.Z)(At,[["render",Mt],["__scopeId","data-v-0361cc57"]]);var Ut=It;const Tt=t=>((0,l.dD)("data-v-1b770c87"),t=t(),(0,l.Cn)(),t),Nt={class:"col-md-6 offset-md-1 col-11"},Ht={class:"table table-hover rounded rounded-4 overflow-hidden"},Pt={scope:"col",style:{width:"50%"}},Et={class:"d-inline-block"},Ft={scope:"col",class:"d-flex"},Jt=Tt((()=>(0,l._)("img",{src:"img/UI_Icon_CombatCost.png",alt:"",style:{width:"1.5em"}},null,-1))),jt={class:"my-auto ms-3"},$t=["textContent"],qt=Tt((()=>(0,l._)("i",{class:"bi bi-plus-lg"},null,-1))),Vt=[qt],Zt=Tt((()=>(0,l._)("i",{class:"bi bi-dash-lg"},null,-1))),Kt=[Zt],Wt=["textContent"],Yt={class:"me-2"},Ot=["src"],Bt=["textContent"],Rt=["textContent"],Xt={class:"me-2"},Gt=["src"],Qt=["textContent"],te=["textContent"],ee=["textContent"],ne=["textContent"],le={class:"input-group input-group-sm w-50"},ae=["textContent"],ie={class:"d-flex justify-content-between"},oe=["textContent"],se={class:"d-flex justify-content-between"},ce=["textContent"],re={class:"d-flex justify-content-between"},ue=["textContent"],de=["textContent"],pe=["textContent"],be=["textContent"],_e=["textContent"],me=["textContent"],ge=["textContent"],ve=["textContent"],we=["textContent"],ye=["textContent"],he=["textContent"],Ce=["textContent"],ke=["textContent"];function xe(t,e,n,a,i,o){return(0,l.wg)(),(0,l.iD)("div",Nt,[(0,l._)("table",Ht,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",Pt,[(0,l._)("div",Et,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.Teir,(t=>((0,l.wg)(),(0,l.iD)("img",{class:"img_star",src:"img/UI_Icon_Star_Hero.png",alt:"",key:t})))),128))])]),(0,l._)("th",Ft,[Jt,(0,l._)("h3",jt,[(0,l._)("b",{textContent:(0,c.zw)(a.unit.DP)},null,8,$t)]),(0,l.wy)((0,l._)("button",{type:"button",class:"btn btn-outline-secondary ms-auto",onClick:e[0]||(e[0]=t=>a.isDetail=!a.isDetail)},Vt,512),[[r.F8,!a.isDetail]]),(0,l.wy)((0,l._)("button",{type:"button",class:"btn btn-outline-secondary ms-auto",onClick:e[1]||(e[1]=t=>a.isDetail=!a.isDetail)},Kt,512),[[r.F8,a.isDetail]])])])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.class)},null,8,Wt),(0,l._)("td",null,[(0,l._)("span",Yt,[(0,l._)("img",{src:`img/UI_Icon_Class_${a.unit.Class[0]}.png`,alt:"",style:{width:"2em"}},null,8,Ot)]),(0,l._)("span",{textContent:(0,c.zw)(a.unit.Class[a.language])},null,8,Bt)])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.element)},null,8,Rt),(0,l._)("td",null,[(0,l._)("span",Xt,[(0,l._)("img",{src:`img/UI_Icon_Attribute_${a.unit.Element[0]}.png`,alt:"",style:{width:"2em"}},null,8,Gt)]),(0,l._)("span",{textContent:(0,c.zw)(a.unit.Element[a.language])},null,8,Qt)])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.dmgType)},null,8,te),(0,l._)("td",{textContent:(0,c.zw)(a.unit.DamageType[a.language])},null,8,ee)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.level)},null,8,ne),(0,l._)("td",null,[(0,l._)("div",le,[(0,l.wy)((0,l._)("input",{type:"number","aria-label":"level",class:"form-control",style:{background:"transparent","font-weight":"bold"},min:"1","onUpdate:modelValue":e[2]||(e[2]=t=>a.level=t)},null,512),[[r.nr,a.level]])])])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.atk)},null,8,ae),(0,l._)("td",ie,[(0,l._)("span",null,(0,c.zw)(a.atk),1),(0,l._)("span",null,[(0,l._)("b",null,(0,c.zw)(a.unit.rankATK)+"/"+(0,c.zw)(a.rankLen),1)])])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.def)},null,8,oe),(0,l._)("td",se,[(0,l._)("span",null,(0,c.zw)(a.def),1),(0,l._)("span",null,[(0,l._)("b",null,(0,c.zw)(a.unit.rankDEF)+"/"+(0,c.zw)(a.rankLen),1)])])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.hp)},null,8,ce),(0,l._)("td",re,[(0,l._)("span",null,(0,c.zw)(a.hp),1),(0,l._)("span",null,[(0,l._)("b",null,(0,c.zw)(a.unit.rankHP)+"/"+(0,c.zw)(a.rankLen),1)])])]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.energyGain)},null,8,ue),(0,l._)("td",null,(0,c.zw)(a.unit.energyGainPerAttack),1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.aspd)},null,8,de),(0,l._)("td",null,(0,c.zw)(a.unit.attackSpeed),1)]),a.isDetail?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.range)},null,8,pe),(0,l._)("td",null,(0,c.zw)(a.unit.attackRange),1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.mspd)},null,8,be),(0,l._)("td",null,(0,c.zw)(a.unit.moveSpeed),1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.crit)},null,8,_e),(0,l._)("td",null,(0,c.zw)(a.unit.critChance)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.cdmg)},null,8,me),(0,l._)("td",null,(0,c.zw)(a.unit.critDamage)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.eva)},null,8,ge),(0,l._)("td",null,(0,c.zw)(a.unit.baseEvasionPercent)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.acc)},null,8,ve),(0,l._)("td",null,(0,c.zw)(a.unit.baseAccuracyPercent)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.pres)},null,8,we),(0,l._)("td",null,(0,c.zw)(a.unit.physResist)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.mres)},null,8,ye),(0,l._)("td",null,(0,c.zw)(a.unit.magicResist)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.resilience)},null,8,he),(0,l._)("td",null,(0,c.zw)(a.unit.resilience)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.lifeSteal)},null,8,Ce),(0,l._)("td",null,(0,c.zw)(a.unit.hpAbsorb)+"%",1)]),(0,l._)("tr",null,[(0,l._)("th",{scope:"row",textContent:(0,c.zw)(a.text.healBonus)},null,8,ke),(0,l._)("td",null,(0,c.zw)(a.unit.healBonus)+"%",1)])],64)):(0,l.kq)("",!0)])])])}var fe={name:"UnitStat",components:{},setup(){const{language:t,text:e}=(0,Q.Jk)((0,et.Z)()),n=(0,G.iH)(!1),a=(0,G.iH)(80),{unit:i}=(0,Q.Jk)((0,nt.n)()),o=lt.length;console.log(i.value);const s=(0,l.Fl)((()=>Math.floor(i.value.ATK*(1+.15*(a.value-1))))),c=(0,l.Fl)((()=>Math.floor(i.value.DEF*(1+.15*(a.value-1))))),r=(0,l.Fl)((()=>Math.floor(i.value.HP*(1+.15*(a.value-1)))));return{language:t,text:e,isDetail:n,unit:i,atk:s,def:c,hp:r,rankLen:o,level:a}}};const De=(0,it.Z)(fe,[["render",xe],["__scopeId","data-v-1b770c87"]]);var Se=De;const Le=t=>((0,l.dD)("data-v-a8acb684"),t=t(),(0,l.Cn)(),t),ze={class:"row justify-content-center mb-3"},Me={class:"offset-md-auto col-md-12 col-11"},Ae={class:"container horizontal-accordion"},Ie={class:"card choice expand bg-secondary rounded-end rounded-4"},Ue={class:"card-body py-0 text-center"},Te=Le((()=>(0,l._)("i",{class:"bi bi-play fs-3 align-middle"},null,-1))),Ne={key:0},He={class:"py-0 dropdown div-inline"},Pe=Le((()=>(0,l._)("button",{class:"py-0 btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," other ",-1))),Ee={class:"dropdown-menu"},Fe={class:"card choice small bg-secondary rounded-start rounded-4"},Je={class:"card-body py-0 text-center"},je=Le((()=>(0,l._)("i",{class:"bi bi-soundwave fs-3 align-middle"},null,-1))),$e={key:0},qe={class:"py-0 dropdown div-inline"},Ve=Le((()=>(0,l._)("button",{class:"py-0 btn btn-secondary dropdown-toggle btn-hide",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Other ",-1))),Ze={class:"dropdown-menu"},Ke=Le((()=>(0,l._)("div",{class:"row justify-content-center mb-3"},[(0,l._)("div",{class:"offset-md-auto col-md-12 col-11"},[(0,l._)("div",{id:"soundAlert",class:"alert alert-warning d-none",role:"alert"}," pay attention to volume! ")])],-1)));function We(t,e,n,a,i,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ze,[(0,l._)("div",Me,[(0,l._)("div",Ae,[(0,l._)("div",Ie,[(0,l._)("div",Ue,[Te,a.isMobile?((0,l.wg)(),(0,l.iD)("br",Ne)):(0,l.kq)("",!0),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[0]||(e[0]=t=>a.changeAnimation("attack"))},"attack"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[1]||(e[1]=t=>a.changeAnimation("cheer"))},"cheer"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[2]||(e[2]=t=>a.changeAnimation("daze"))},"daze"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[3]||(e[3]=t=>a.changeAnimation("death"))},"death"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[4]||(e[4]=t=>a.changeAnimation("deploy"))},"deploy"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[5]||(e[5]=t=>a.changeAnimation("flinch"))},"flinch"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[6]||(e[6]=t=>a.changeAnimation("move"))},"move"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary",onClick:e[7]||(e[7]=t=>a.changeAnimation("panic"))},"panic"),(0,l._)("div",He,[Pe,(0,l._)("ul",Ee,[(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[8]||(e[8]=(0,r.iM)((t=>a.changeAnimation("room-idle")),["prevent"]))},"room-idle")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[9]||(e[9]=(0,r.iM)((t=>a.changeAnimation("room-move")),["prevent"]))},"room-move")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[10]||(e[10]=(0,r.iM)((t=>a.changeAnimation("room-panic")),["prevent"]))},"room-panic")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[11]||(e[11]=(0,r.iM)((t=>a.changeAnimation("room-poke")),["prevent"]))},"room-poke")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[12]||(e[12]=(0,r.iM)((t=>a.changeAnimation("room-shock")),["prevent"]))},"room-shock")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[13]||(e[13]=(0,r.iM)((t=>a.changeAnimation("special-active")),["prevent"]))},"special-active")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[14]||(e[14]=(0,r.iM)((t=>a.changeAnimation("special-passive")),["prevent"]))},"special-passive")])])])])]),(0,l._)("div",Fe,[(0,l._)("div",Je,[je,a.isMobile?((0,l.wg)(),(0,l.iD)("br",$e)):(0,l.kq)("",!0),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[15]||(e[15]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapMorningPath)),["prevent"]))},"Morning"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[16]||(e[16]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapNoonPath)),["prevent"]))},"Noon"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[17]||(e[17]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapEveningPath)),["prevent"]))},"Evening"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[18]||(e[18]=(0,r.iM)((t=>a.playSound(a.unit.VoiceGreetingPath)),["prevent"]))},"Greeting"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[19]||(e[19]=(0,r.iM)((t=>a.playSound(a.unit.VoiceDeathPath)),["prevent"]))},"Death"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[20]||(e[20]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapDeployPath)),["prevent"]))},"Deploy"),(0,l._)("button",{type:"button",class:"py-0 btn btn-secondary btn-hide",onClick:e[21]||(e[21]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapVictoryPath)),["prevent"]))},"Victory"),(0,l._)("div",qe,[Ve,(0,l._)("ul",Ze,[(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[22]||(e[22]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTap1Path)),["prevent"]))},"Tap1")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[23]||(e[23]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTap2Path)),["prevent"]))},"Tap2")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[24]||(e[24]=(0,r.iM)((t=>a.playSound(a.unit.VoiceUnlockPath)),["prevent"]))},"Unlock")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[25]||(e[25]=(0,r.iM)((t=>a.playSound(a.unit.VoiceTapLevelUpPath)),["prevent"]))},"LevelUp")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[26]||(e[26]=(0,r.iM)((t=>a.playSound(a.unit.VoiceUltimatePath)),["prevent"]))},"Ultimate")])])])])])])])]),Ke],64)}var Ye={name:"ToolAccordion",components:{},setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{language:e,text:n}=(0,Q.Jk)((0,et.Z)()),{unit:a}=(0,Q.Jk)((0,nt.n)());var i=1;(0,l.bv)((()=>{const t=document.querySelectorAll(".choice");t.forEach((e=>{e.addEventListener("click",(n=>{(n.target.classList.contains("small")||n.target.parentElement.classList.contains("small")||n.target.parentElement.parentElement.classList.contains("small"))&&(i&&(document.getElementById("soundAlert").classList.remove("d-none"),window.setTimeout((function(){document.getElementById("soundAlert").classList.add("d-none")}),5e3),i=0),t.forEach((t=>{t.classList.remove("expand"),t.classList.add("small")})),document.querySelectorAll(".small button").forEach((t=>{t.classList.add("btn-hide")})),e.classList.remove("small"),e.classList.add("expand"),window.setTimeout((function(){document.querySelectorAll(".expand button").forEach((t=>{t.classList.remove("btn-hide")}))}),1e3))}))}))}));const o=t=>{(0,dt.m)().changeAnimation(t)},s=t=>{console.log(t);var e=new Audio("voice/"+t);e.play()};return{language:e,isMobile:t,text:n,unit:a,changeAnimation:o,playSound:s}}};const Oe=(0,it.Z)(Ye,[["render",We],["__scopeId","data-v-a8acb684"]]);var Be=Oe;const Re=t=>((0,l.dD)("data-v-66892775"),t=t(),(0,l.Cn)(),t),Xe={class:"row justify-content-center"},Ge={class:"col-md-auto offset-md-auto col-11"},Qe={class:"table table-hover table-dark rounded rounded-4 overflow-hidden"},tn={scope:"col",style:{width:"30%"}},en=["textContent"],nn={scope:"col"},ln={class:"input-group d-flex justify-content-end",role:"group"},an={class:"input-group-text"},on={key:0},sn={key:0,class:"table-group-divider"},cn={scope:"row",colspan:"2"},rn={class:"d-flex"},un=["textContent"],dn=Re((()=>(0,l._)("span",null," / ",-1))),pn=["textContent"],bn=["textContent"],_n=["textContent"],mn={key:1},gn=["innerHTML"],vn={key:2,class:"table-group-divider"},wn={scope:"row",colspan:"2"},yn=["textContent"],hn=Re((()=>(0,l._)("span",null," / ",-1))),Cn=["textContent"],kn={key:3},xn=["innerHTML"],fn={scope:"col",colspan:"2",style:{width:"30%"}},Dn=["textContent"],Sn={class:"table-group-divider"},Ln={scope:"row",colspan:"2"},zn=["innerHTML"],Mn={key:1},An={key:0},In={scope:"row",class:"table-group-divider"},Un=["textContent"],Tn=Re((()=>(0,l._)("span",null," / ",-1))),Nn=["textContent"],Hn=Re((()=>(0,l._)("br",null,null,-1))),Pn=["textContent"],En=["textContent"],Fn=["innerHTML"],Jn={key:1},jn={scope:"row"},$n=["textContent"],qn=Re((()=>(0,l._)("span",null," / ",-1))),Vn=["textContent"],Zn=["innerHTML"],Kn={scope:"col",colspan:"2",style:{width:"30%"}},Wn=["textContent"],Yn=["innerHTML"];function On(t,e,n,a,i,o){return(0,l.wg)(),(0,l.iD)("div",Xe,[(0,l._)("div",Ge,[(0,l._)("table",Qe,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",tn,[(0,l._)("h4",{textContent:(0,c.zw)(a.text.ability)},null,8,en)]),(0,l._)("th",nn,[(0,l._)("div",ln,[(0,l._)("span",an,(0,c.zw)(a.text.level)+":",1),(0,l._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-light btn-sm",{active:1===a.skillLevel}]),onClick:e[0]||(e[0]=t=>a.skillLevel=1)},"1",2),(0,l._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-light btn-sm",{active:2===a.skillLevel}]),onClick:e[1]||(e[1]=t=>a.skillLevel=2)},"2",2),(0,l._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-light btn-sm",{active:3===a.skillLevel}]),onClick:e[2]||(e[2]=t=>a.skillLevel=3)},"3",2),(0,l._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-light btn-sm",{active:4===a.skillLevel}]),onClick:e[3]||(e[3]=t=>a.skillLevel=4)},"4",2),(0,l._)("button",{type:"button",class:(0,c.C_)(["btn btn-outline-light btn-sm",{active:5===a.skillLevel}]),onClick:e[4]||(e[4]=t=>a.skillLevel=5)},"5",2)])])])]),a.isMobile?((0,l.wg)(),(0,l.iD)("tbody",on,[a.unit.ActiveName.length?((0,l.wg)(),(0,l.iD)("tr",sn,[(0,l._)("th",cn,[(0,l._)("div",rn,[(0,l._)("span",{textContent:(0,c.zw)(a.unit.ActiveName[a.language])},null,8,un),dn,(0,l._)("span",{textContent:(0,c.zw)(a.text.active)},null,8,pn),(0,l._)("span",{textContent:(0,c.zw)(a.unit.cooldown),class:"text-info ms-auto"},null,8,bn),(0,l._)("span",{textContent:(0,c.zw)(a.text.cd),class:"text-info"},null,8,_n)])])])):(0,l.kq)("",!0),a.unit.ActiveName.length?((0,l.wg)(),(0,l.iD)("tr",mn,[(0,l._)("td",{scope:"row",colspan:"2",innerHTML:a.unit.ActiveDescription[a.language][a.skillLevel-1]},null,8,gn)])):(0,l.kq)("",!0),a.unit.PassiveName.length?((0,l.wg)(),(0,l.iD)("tr",vn,[(0,l._)("th",wn,[(0,l._)("span",{textContent:(0,c.zw)(a.unit.PassiveName[a.language])},null,8,yn),hn,(0,l._)("span",{textContent:(0,c.zw)(a.text.passive)},null,8,Cn)])])):(0,l.kq)("",!0),a.unit.PassiveName.length?((0,l.wg)(),(0,l.iD)("tr",kn,[(0,l._)("td",{scope:"row",colspan:"2",innerHTML:a.unit.PassiveDescription[a.language][a.skillLevel-1]},null,8,xn)])):(0,l.kq)("",!0),(0,l._)("tr",null,[(0,l._)("th",fn,[(0,l._)("h4",{textContent:(0,c.zw)(a.text.trait)},null,8,Dn)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.TraitsName,((t,e)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:e},[(0,l._)("tr",Sn,[(0,l._)("th",Ln,(0,c.zw)(a.unit.TraitsName[e][a.language]),1)]),(0,l._)("tr",null,[(0,l._)("td",{scope:"row",colspan:"2",innerHTML:a.unit.TraitsDescription[e][a.language]},null,8,zn)])],64)))),128))])):((0,l.wg)(),(0,l.iD)("tbody",Mn,[a.unit.ActiveName.length?((0,l.wg)(),(0,l.iD)("tr",An,[(0,l._)("th",In,[(0,l._)("span",{textContent:(0,c.zw)(a.unit.ActiveName[a.language])},null,8,Un),Tn,(0,l._)("span",{textContent:(0,c.zw)(a.text.active)},null,8,Nn),Hn,(0,l._)("span",{textContent:(0,c.zw)(a.unit.cooldown),class:"text-info"},null,8,Pn),(0,l._)("span",{textContent:(0,c.zw)(a.text.cd),class:"text-info"},null,8,En)]),(0,l._)("td",{innerHTML:a.unit.ActiveDescription[a.language][a.skillLevel-1]},null,8,Fn)])):(0,l.kq)("",!0),a.unit.PassiveName.length?((0,l.wg)(),(0,l.iD)("tr",Jn,[(0,l._)("th",jn,[(0,l._)("span",{textContent:(0,c.zw)(a.unit.PassiveName[a.language])},null,8,$n),qn,(0,l._)("span",{textContent:(0,c.zw)(a.text.passive)},null,8,Vn)]),(0,l._)("td",{innerHTML:a.unit.PassiveDescription[a.language][a.skillLevel-1]},null,8,Zn)])):(0,l.kq)("",!0),(0,l._)("tr",null,[(0,l._)("th",Kn,[(0,l._)("h4",{textContent:(0,c.zw)(a.text.trait)},null,8,Wn)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.TraitsName,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",{scope:"row",class:(0,c.C_)({"table-group-divider":0===e})},(0,c.zw)(a.unit.TraitsName[e][a.language]),3),(0,l._)("td",{innerHTML:a.unit.TraitsDescription[e][a.language]},null,8,Yn)])))),128))]))])])])}var Bn={name:"UnitSkill",components:{},setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{language:e,text:n}=(0,Q.Jk)((0,et.Z)()),{unit:l}=(0,Q.Jk)((0,nt.n)()),a=(0,G.iH)(5);return{language:e,isMobile:t,text:n,unit:l,skillLevel:a}}};const Rn=(0,it.Z)(Bn,[["render",On],["__scopeId","data-v-66892775"]]);var Xn=Rn;const Gn={class:"row justify-content-center"},Qn={class:"col-md-auto offset-md-auto col-11"},tl={class:"table table-hover table-dark rounded rounded-4 overflow-hidden"},el={rowspan:"2",scope:"col",style:{width:"20%"},class:"align-middle"},nl=["src"],ll={scope:"col"},al=["textContent"],il=["innerHTML"];function ol(t,e,n,a,i,o){return(0,l.wg)(),(0,l.iD)("div",Gn,[(0,l._)("div",Qn,[(0,l._)("table",tl,[(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("th",el,[(0,l._)("img",{src:`img/UI_Card/${a.unit.Img_L}`,class:"w-100",alt:""},null,8,nl)]),(0,l._)("th",ll,[(0,l._)("h4",{textContent:(0,c.zw)(a.text.background)},null,8,al)])]),(0,l._)("tr",null,[(0,l._)("td",{innerHTML:a.unit.Description[a.language]},null,8,il)])])])])])}var sl={name:"UnitDescription",components:{},setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{language:e,text:n}=(0,Q.Jk)((0,et.Z)()),{unit:l}=(0,Q.Jk)((0,nt.n)());return{language:e,isMobile:t,text:n,unit:l}}};const cl=(0,it.Z)(sl,[["render",ol],["__scopeId","data-v-d3605764"]]);var rl=cl;const ul=t=>((0,l.dD)("data-v-91a355ac"),t=t(),(0,l.Cn)(),t),dl={id:"spine-div",class:"row"},pl={class:"nav nav-tabs fs-5"},bl=["onClick","textContent"],_l={class:"nav-item ms-auto"},ml=ul((()=>(0,l._)("i",{class:"bi bi-x-lg"},null,-1))),gl=[ml],vl=ul((()=>(0,l._)("div",{id:"spine_FULL",class:"col"},null,-1)));function wl(t,e,n,a,i,o){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",dl,[(0,l._)("ul",pl,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.unit.Fullbody,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{class:"nav-item",key:e},[null!=a.unit.Fullbody[e]?((0,l.wg)(),(0,l.iD)("a",{key:0,class:"nav-link",onClick:t=>a.setSpine(a.unit.Fullbody[e]),href:"#",textContent:(0,c.zw)(`Skin${e}`)},null,8,bl)):(0,l.kq)("",!0)])))),128)),(0,l._)("li",_l,[(0,l._)("button",{class:"btn fs-5",onClick:e[0]||(e[0]=t=>a.isSpine=!a.isSpine)},gl)])]),vl],512)),[[r.F8,a.isSpine]])}var yl={name:"SpineAnimation",components:{},setup(){const{unit:t,isSpine:e}=(0,Q.Jk)((0,dt.m)()),n=t=>{(0,dt.m)().setSpine("spine_FULL",t)};return{unit:t,isSpine:e,setSpine:n}}};const hl=(0,it.Z)(yl,[["render",wl],["__scopeId","data-v-91a355ac"]]);var Cl=hl,kl={name:"MainUnit",components:{UnitCard:Ut,UnitStat:Se,ToolAccordion:Be,UnitSkill:Xn,UnitDescription:rl,SpineAnimation:Cl},setup(){const{isMobile:t}=(0,Q.Jk)((0,tt.X)()),{isSpine:e}=(0,Q.Jk)((0,dt.m)()),{unit:n}=(0,Q.Jk)((0,nt.n)());return{isMobile:t,isSpine:e,unit:n}}};const xl=(0,it.Z)(kl,[["render",ut]]);var fl=xl,Dl={name:"UnitView",components:{SideNav:st,MainUnit:fl},setup(){console.log((0,s.yj)().params.heroName);const{language:t}=(0,Q.Jk)((0,et.Z)());(0,l.YP)(t,(()=>{(0,et.Z)().changeLanguage()}));const{unit:e}=(0,Q.Jk)((0,nt.n)());e.value=void 0===(0,s.yj)().params.heroName?lt[11]:lt[lt.findIndex((t=>t.Name[0].toLowerCase()===(0,s.yj)().params.heroName.toString().toLowerCase()||t.Name[0].replace(" ","").toLowerCase()===(0,s.yj)().params.heroName.toString().toLowerCase()))],void 0===e.value?(e.value=lt[11],(0,et.Z)().changeLanguage(),(0,s.tv)().push({path:"/"})):(console.log(e.value),(0,et.Z)().changeLanguage())}};const Sl=(0,it.Z)(Dl,[["render",o]]);var Ll=Sl}}]);
//# sourceMappingURL=heroName.31faa48d.js.map