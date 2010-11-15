AUI.add("aui-tree-view",function(a){var S=a.Lang,T=S.isString,AO="boundingBox",g="children",I="container",AA="content",s="contentBox",o=".",AD="file",AL="hitarea",w="icon",AQ="label",C="lastSelected",V="leaf",AS="node",AI="ownerTree",AM="root",B=" ",AB="tree",i="tree-view",e="type",k="view",r=function(){return Array.prototype.slice.call(arguments).join(B);},x=function(A){return(A instanceof a.TreeNode);},Q=a.ClassNameManager.getClassName,d=Q(AB,AL),U=Q(AB,w),P=Q(AB,AQ),q=Q(AB,AS,AA),h=Q(AB,AM,I),K=Q(AB,k,AA);var X=a.Component.create({NAME:i,ATTRS:{type:{value:AD,validator:T},lastSelected:{value:null,validator:x},io:{value:null},paginator:{value:null}},EXTENDS:a.TreeData,prototype:{CONTENT_TEMPLATE:"<ul></ul>",bindUI:function(){var A=this;A._delegateDOM();},renderUI:function(){var A=this;A._renderElements();},syncUI:function(){var A=this;A.refreshIndex();},registerNode:function(L){var A=this;L.set(AI,A);X.superclass.registerNode.apply(this,arguments);},_createFromHTMLMarkup:function(L){var A=this;L.all("> li").each(function(AZ){var AX=AZ.one("> *").remove();var AW=AX.outerHTML();docFrag=null;var Aa=new a.TreeNode({boundingBox:AZ,label:AW});var AV=AZ.one("> ul");if(AV){Aa.set(V,false);Aa.set(I,AV);Aa.render();A._createFromHTMLMarkup(AV);}else{Aa.render();}var AU=AZ.get(W).get(W);var AY=a.Widget.getByNode(AU);AY.appendChild(Aa);});},_renderElements:function(){var A=this;var L=A.get(s);var AU=A.get(g);var AV=A.get(e);var AW=Q(AB,AV);L.addClass(K);A.set(I,L);L.addClass(r(AW,h));if(AU.length){A.eachChildren(function(AX){A.appendChild(AX,true);});}else{A._createFromHTMLMarkup(L);}},_delegateDOM:function(){var A=this;var L=A.get(AO);L.delegate("click",a.bind(A._onClickHitArea,A),o+d);L.delegate("dblclick",a.bind(A._onClickHitArea,A),o+U);L.delegate("dblclick",a.bind(A._onClickHitArea,A),o+P);L.delegate("mouseenter",a.bind(A._onMouseEnterNodeEl,A),o+q);L.delegate("mouseleave",a.bind(A._onMouseLeaveNodeEl,A),o+q);L.delegate("click",a.bind(A._onClickNodeEl,A),o+q);},_onClickNodeEl:function(L){var A=this;var AV=A.getNodeByChild(L.currentTarget);if(AV&&!AV.isSelected()){var AU=A.get(C);if(AU){AU.unselect();}AV.select();}},_onMouseEnterNodeEl:function(L){var A=this;var AU=A.getNodeByChild(L.currentTarget);if(AU){AU.over();}},_onMouseLeaveNodeEl:function(L){var A=this;var AU=A.getNodeByChild(L.currentTarget);if(AU){AU.out();}},_onClickHitArea:function(L){var A=this;var AU=A.getNodeByChild(L.currentTarget);if(AU){AU.toggle();}}}});a.TreeView=X;var AT=S.isNumber,f="above",Z="append",AE="below",c="block",AJ="body",H="clearfix",AG="default",E="display",t="down",n="drag",Y="draggable",AP="dragCursor",O="dragNode",D="expanded",AH="helper",AF="insert",z="offsetHeight",W="parentNode",v="scrollDelay",M="state",AC="tree-drag-drop",j="up",N=a.DD.DDM,R=Q(AH,H),AN=Q(w),p=Q(AB,n,AH),J=Q(AB,n,AH,AA),b=Q(AB,n,AH,AQ),G=Q(AB,n,AF,f),AR=Q(AB,n,AF,Z),m=Q(AB,n,AF,AE),y=Q(AB,n,M,Z),l=Q(AB,n,M,AF,f),AK=Q(AB,n,M,AF,AE),F='<div class="'+p+'">'+'<div class="'+[J,R].join(B)+'">'+'<span class="'+AN+'"></span>'+'<span class="'+b+'"></span>'+"</div>"+"</div>";var u=a.Component.create({NAME:AC,ATTRS:{helper:{value:null},scrollDelay:{value:100,validator:AT}},EXTENDS:a.TreeView,prototype:{direction:AE,dropAction:null,lastY:0,node:null,nodeContent:null,destructor:function(){var A=this;var L=A.get(AH);if(L){L.remove(true);}},bindUI:function(){var A=this;u.superclass.bindUI.apply(this,arguments);A._bindDragDrop();},renderUI:function(){var A=this;u.superclass.renderUI.apply(this,arguments);var L=a.Node.create(F).hide();a.one(AJ).append(L);A.set(AH,L);N.set(AP,AG);},_createDrag:function(AV){var L=this;if(!L.dragTimers){L.dragTimers=[];}if(!N.getDrag(AV)){var A=L.dragTimers;var AU=50*A.length;var AW=setTimeout(function(){if(!N.getDrag(AV)){var AX=new a.DD.Drag({bubbleTargets:L,node:AV,target:true}).plug(a.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false,borderStyle:null}).plug(a.Plugin.DDNodeScroll,{scrollDelay:L.get(v),node:L.get(AO)});}a.Array.removeItem(A,AW);},AU);A.push(AW);}},_bindDragDrop:function(){var A=this;var L=A.get(AO);A._createDragInitHandler=a.bind(function(){A.eachChildren(function(AU){if(AU.get(Y)){A._createDrag(AU.get(s));}},true);L.detach("mouseover",A._createDragInitHandler);},A);L.on("mouseover",A._createDragInitHandler);A.after("insert",a.bind(A._afterAppend,A));A.after("append",a.bind(A._afterAppend,A));A.on("drag:align",A._onDragAlign);A.on("drag:start",A._onDragStart);A.on("drop:exit",A._onDropExit);A.on("drop:hit",A._onDropHit);A.on("drop:over",A._onDropOver);},_appendState:function(L){var A=this;A.dropAction=Z;A.get(AH).addClass(y);L.addClass(AR);},_goingDownState:function(L){var A=this;A.dropAction=AE;A.get(AH).addClass(AK);L.addClass(m);},_goingUpState:function(L){var A=this;A.dropAction=f;A.get(AH).addClass(l);L.addClass(G);},_resetState:function(L){var A=this;var AU=A.get(AH);AU.removeClass(y);AU.removeClass(l);AU.removeClass(AK);if(L){L.removeClass(G);L.removeClass(AR);L.removeClass(m);}},_updateNodeState:function(A){var Ad=this;var AZ=A.drag;var AW=A.drop;var L=AW.get(AS);var Ac=L.get(W);var AY=AZ.get(AS).get(W);var AV=a.Widget.getByNode(Ac);Ad._resetState(Ad.nodeContent);if(!AY.contains(Ac)){var Ae=L.get(z)/3;var AU=L.getY();var Ab=AU+Ae*1;var Aa=AU+Ae*2;var AX=AZ.mouseXY[1];if((AX>AU)&&(AX<Ab)){Ad._goingUpState(L);}else{if(AX>Aa){Ad._goingDownState(L);}else{if((AX>Ab)&&(AX<Aa)){if(AV&&!AV.isLeaf()){Ad._appendState(L);}else{if(Ad.direction==j){Ad._goingUpState(L);}else{Ad._goingDownState(L);}}}}}}Ad.nodeContent=L;},_afterAppend:function(L){var A=this;var AU=L.tree.node;if(AU.get(Y)){A._createDrag(AU.get(s));}},_onDragAlign:function(AU){var A=this;var L=A.lastY;var AV=AU.target.lastXY[1];if(AV!=L){A.direction=(AV<L)?j:t;}A.lastY=AV;},_onDragStart:function(AX){var A=this;var AV=AX.target;var AZ=AV.get(AS).get(W);var AU=a.Widget.getByNode(AZ);var AY=A.get(C);if(AY){AY.unselect();}AU.select();var AW=A.get(AH);var L=AW.one(o+b);AW.setStyle(E,c).show();L.html(AU.get(AQ));AV.set(O,AW);},_onDropOver:function(L){var A=this;
A._updateNodeState(L);},_onDropHit:function(AW){var A=this;var AY=A.dropAction;var AX=AW.drag.get(AS).get(W);var AU=AW.drop.get(AS).get(W);var AZ=a.Widget.getByNode(AU);var AV=a.Widget.getByNode(AX);var L=A.getEventOutputMap(A);L.tree.dropNode=AZ;L.tree.dragNode=AV;if(AY==f){AZ.insertBefore(AV);A.bubbleEvent("dropInsert",L);}else{if(AY==AE){AZ.insertAfter(AV);A.bubbleEvent("dropInsert",L);}else{if(AY==Z){if(AZ&&!AZ.isLeaf()){AZ.appendChild(AV);if(!AZ.get(D)){AZ.expand();}A.bubbleEvent("dropAppend",L);}}}}A._resetState(A.nodeContent);A.bubbleEvent("drop",L);A.dropAction=null;},_onDropExit:function(){var A=this;A.dropAction=null;A._resetState(A.nodeContent);}}});a.TreeViewDD=u;},"@VERSION@",{skinnable:true,requires:["aui-tree-node","dd-drag","dd-drop","dd-proxy"]});