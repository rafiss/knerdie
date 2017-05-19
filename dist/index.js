"use strict";function __$styleInject(e,t){if("undefined"==typeof document)return t;e=e||"";var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),i.appendChild(o),t}function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function __extends(e,t){function i(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}Object.defineProperty(exports,"__esModule",{value:!0});var WebFont=_interopDefault(require("webfontloader")),Konva=_interopDefault(require("konva")),PubSub=_interopDefault(require("pubsub-js")),log$1=_interopDefault(require("loglevel"));__$styleInject("/* This file is processed by PostCSS, by default variables and nested rules are supported.\n   More rules can be added in rollup.config.js */\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: white;\n}\n\n#container-wrapper {\n  width: 70%;\n  /* whatever width you want */\n  display: inline-block;\n  position: relative;\n}\n\n#container-wrapper:after {\n  padding-top: 55%;\n  display: block;\n  content: '';\n}\n\n#container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  /* fill parent */\n  background-color: white;\n  border: 1px solid black;\n  /*background: linear-gradient(at bottom, #52709F , #5A83B8);*/\n}\n",void 0);var sources=[{source:"assets/kam.png",sprite:{width:220,height:250},animations:{idle:[0,0,253,295,254,0,253,297,508,0,253,307,762,0,253,297],death:[0,311,311,312,312,311,311,312,624,311,311,312]}},{source:"assets/mrfigg.png",sprite:{width:160,height:250},animations:{idle:[0,0,207,305,208,0,207,308,416,0,207,309,624,0,207,308],death:[0,310,257,310,258,310,257,310,516,310,257,310]}},{source:"assets/isaak.png",sprite:{width:200,height:260},animations:{idle:[0,0,215,297,216,0,215,303,434,0,215,305,648,0,215,303],death:[0,308,283,303,284,308,283,303,568,308,280,303]}},{source:"assets/olive.png",sprite:{width:210,height:230},animations:{idle:[0,1,253,295,254,0,253,297,508,0,253,307,762,0,253,297],death:[0,311,311,312,312,311,311,312,624,311,311,312]}},{source:"assets/flying_book.png",sprite:{width:300,height:200},animations:{idle:[0,0,350,260,355,0,338,260,715,0,330,260,1055,0,338,260]}},{source:"assets/splash-blinking-isaak.png",sprite:{width:397,height:417},animations:{idle:[0,0,397,417,398,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417,0,0,397,417]}},{source:"assets/splash-blinking-kam.png",sprite:{width:471,height:554},animations:{idle:[0,0,471,554,472,0,471,554,472,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554,0,0,471,554]}},{source:"assets/splash-blinking-olive.png",sprite:{width:427,height:547},animations:{idle:[0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,428,0,427,547,428,0,427,547,428,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547,0,0,427,547]}},{source:"assets/splash-blinking-mrfigg.png",sprite:{width:547,height:643},animations:{idle:[0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,548,0,547,643,0,0,547,643,0,0,547,643,548,0,547,643,0,0,547,643,548,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643,0,0,547,643]}},{source:"assets/splash-studybreak.jpg"},{source:"assets/books.png"},{source:"assets/books2.png"},{source:"assets/wave1.png"},{source:"assets/wave2.png"},{source:"assets/wave3.png"},{source:"assets/bg.png"},{source:"assets/life-isaak.png"},{source:"assets/life-mrfigg.png"},{source:"assets/life-olive.png"},{source:"assets/button-backtowork.png"}],InternalImageLoader=function(){function e(){this.loading=0,this.images={}}return e.prototype.load=function(e,t,i){var o=this;void 0===t&&(t=""),this.loading+=e.length;for(var n=function(e){var n=new Image;n.src=t+e.source,n.onload=function(){o.loading--,o.images[e.source]={img:n,animations:e.animations,sprite:e.sprite},log$1.info("\t- "+e.source),0===o.loading&&i()}},r=0,s=e;r<s.length;r++){n(s[r])}},Object.defineProperty(e.prototype,"numImages",{get:function(){return Object.keys(this.images).length},enumerable:!0,configurable:!0}),e.prototype.getImage=function(e){return this.images[e].img},e.prototype.getAnimations=function(e){return this.images[e].animations},e.prototype.getSprite=function(e){return this.images[e].sprite},e}(),ImageLoader=new InternalImageLoader,Renderer=function(){function e(e,t){var i=this;this.container=e,this.world=t,this.shapes={},this.stage=new Konva.Stage({container:e.id,height:t.height,width:t.width}),this.initialWidth=this.stage.getWidth(),this.initialHeight=this.stage.getHeight(),this.mainLayer=new Konva.Layer,this.stage.add(this.mainLayer),this.stage.setHeight(this.container.clientHeight),this.stage.setWidth(this.container.clientWidth),this.stage.draw(),this.onResize(),window.onresize=function(){i.onResize()},PubSub.subscribe("world.addobject",function(e,t){return i.onWorldObjectAdded(t)}),PubSub.subscribe("world.removeobject",function(e,t){return i.onWorldObjectRemoved(t)})}return e.prototype.getShape=function(e){return this.shapes[e.id]},e.prototype.run=function(e){var t=e&&this.prevTimestamp?e-this.prevTimestamp:0;return this.prevTimestamp=e,requestAnimationFrame(this.run.bind(this)),this.render(t),this},e.prototype.onResize=function(){this.stage.setHeight(this.container.clientHeight),this.stage.setWidth(this.container.clientWidth),this.stage.draw()},e.prototype.worldToScreen=function(e,t){return[e*(this.container.clientWidth/this.world.width),t*(this.container.clientHeight/this.world.height)]},e.prototype.onWorldObjectAdded=function(e){var t=this.worldToScreen(e.x,e.y),i=t[0],o=t[1],n=this.container.clientWidth/this.world.width,r=this.container.clientHeight/this.world.height,s=null;switch(e.type){case"IMAGE":var a=ImageLoader.getImage(e.source),c=ImageLoader.getAnimations(e.source);c?(s=new Konva.Sprite(Object.assign({},{x:i,y:o,image:a,scaleX:e.scale*n,scaleY:e.scale*r,animation:"idle",animations:c,frameIndex:0,frameRate:5},e.konvaOpts)),s.start()):s=new Konva.Image(Object.assign({},{x:i,y:o,image:a,scaleX:e.scale*n,scaleY:e.scale*r},e.konvaOpts));break;case"TEXT":s=new Konva.Text(Object.assign({},{x:i,y:o,text:e.source,fontSize:e.scale*n,fontFamily:"Varela Round",fill:"black",width:this.stage.getWidth()},e.konvaOpts));break;default:log.error("Unknown shape type: "+e.type)}this.shapes[e.id]=s,this.mainLayer.add(s),s.moveToTop(),this.mainLayer.draw()},e.prototype.onWorldObjectRemoved=function(e){this.shapes[e.id].destroy(),delete this.shapes[e.id]},e.prototype.render=function(e){for(var t=this.container.clientWidth/this.world.width,i=this.container.clientHeight/this.world.height,o=0,n=this.world.getObjects();o<n.length;o++){var r=n[o];this.drawWorldObject(r,t,i)}this.mainLayer.draw()},e.prototype.drawWorldObject=function(e,t,i){var o=this.shapes[e.id],n=this.worldToScreen(e.x,e.y),r=n[0],s=n[1];if(o.setAbsolutePosition({x:r,y:s}),"IMAGE"===e.type)o.scaleX(t*e.scale),o.scaleY(i*e.scale);else if("TEXT"===e.type){var a=o;a.fontSize(t*e.scale),a.width(a.getStage().getWidth())}},e}(),World=function(){function e(t,i,o,n,r){void 0===n&&(n=e.initialVelocity),void 0===r&&(r=3),this._width=t,this._height=i,this.score=o,this._currentVelocity=n,this._lives=r,this.objects={},this.layers={}}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentVelocity",{get:function(){return this._currentVelocity},set:function(e){this._currentVelocity=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numObjects",{get:function(){return Object.keys(this.objects).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numLayers",{get:function(){return Object.keys(this.layers).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lives",{get:function(){return this._lives},enumerable:!0,configurable:!0}),e.prototype.decrementLives=function(){this._lives--},e.prototype.addObjects=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,o=e;i<o.length;i++){var n=o[i];this.objects[n.id]=n,log$1.debug("Added world object "+n.id),PubSub.publishSync("world.addobject",n)}},e.prototype.removeObjects=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,o=e;i<o.length;i++){var n=o[i];this.objects[n.id]?(delete this.objects[n.id],log$1.debug("Removed world object "+n.id),PubSub.publishSync("world.removeobject",n)):log$1.warn("World does not contain object "+n.id)}},e.prototype.addLayers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,o=e;i<o.length;i++){var n=o[i];this.layers[n.id]=n,log$1.debug("Added world layer "+n.id),this.addObjects(n)}},e.prototype.removeLayers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,o=e;i<o.length;i++){var n=o[i];this.layers[n.id]?(delete this.layers[n.id],log$1.debug("Removed world layer "+n.id),this.removeObjects(n)):log$1.warn("World does not contain layer "+n.id)}},e.prototype.getObjects=function(){return Object.values(this.objects)},e.prototype.getLayers=function(){return Object.values(this.layers)},e.prototype.getScore=function(){return this.score},e.prototype.printWorldState=function(){log$1.info("world height: "+this._height+"\n"),log$1.info("world width: "+this._width+"\n"),log$1.info("world speed: "+this._currentVelocity);for(var e=0,t=this.getObjects();e<t.length;e++){var i=t[e];log$1.info("id: "+i.id+"\n"),log$1.info("  x: "+i.x+"\n"),log$1.info("  y: "+i.y+"\n"),log$1.info("  scale: "+i.scale+"\n")}},e}();World.initialVelocity=.1;var Score=function(){function e(){var e=this;this._maxScore=0,PubSub.subscribe("game.gamescreen",function(){e.prevTimestamp=null,e._score=0,e.continue=!0,e.tick()}),PubSub.subscribe("physics.collision",function(){e.continue=!1})}return e.prototype.tick=function(e){e&&this.prevTimestamp&&this.prevTimestamp;this.prevTimestamp=e,PubSub.publish("score.tick",{score:this._score,maxScore:this._maxScore}),this.continue?(this._score+=1,this._maxScore=Math.max(this._score,this._maxScore),requestAnimationFrame(this.tick.bind(this))):(this.prevTimestamp=null,this._score=0)},Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxScore",{get:function(){return this._maxScore},enumerable:!0,configurable:!0}),e}(),Physics=function(){function e(t,i){var o=this;this.world=t,this.worldGen=i,this.keyUpPressed=!0,this.keyDown=!1,this.startTime=null,this.character=this.worldGen.character,PubSub.subscribe("keyboard.keydown",function(t,i){i.keyCode===e.flapKey&&o.keyUpPressed&&(o.keyDown=!0,o.character.yVelocity>0&&(o.character.yVelocity=0),o.keyUpPressed=!1)}),PubSub.subscribe("keyboard.keyup",function(t,i){i.keyCode===e.flapKey&&(o.keyUpPressed=!0)})}return e.prototype.start=function(){this.startTime=null,this.physicsLoop()},e.prototype.stop=function(){this.character.lifeLost()},e.prototype.physicsLoop=function(){if(this.collisionDetection(this.world))return void PubSub.publishSync("physics.collision",null);this.updatePositions(this.world,this.startTime),this.worldGen.worldGenLoop(),this.step()},e.prototype.collisionDetection=function(e){for(var t=0,i=e.getObjects();t<i.length;t++){var o=i[t];if(this.worldGen.character.id!==o.id){if(o.collidable&&this.boxesIntersect(this.character,o))return!0}else if(this.character.y+this.character.scaledHeight>this.world.height)return this.character.y=this.world.height-this.character.scaledHeight,!0}},e.prototype.boxesIntersect=function(e,t){return!(e.x+e.scaledWidth<t.x)&&(!(e.x>t.x+t.scaledWidth)&&(!(e.y+e.scaledHeight<t.y)&&!(e.y>t.y+t.scaledHeight)))},e.prototype.updatePositions=function(e,t){var i=(new Date).getTime(),o=i-(this.startTime||i);this.startTime=i;for(var n=0,r=e.getObjects();n<r.length;n++){var s=r[n];this.worldGen.character.id!==s.id&&this.updatePosition(s,o)}this.updateCharacterPosition(this.worldGen.character,o)},e.prototype.updatePosition=function(e,t){0!==e.xVelocity&&(e.x+=-1*(e.xVelocity*t+this.world.currentVelocity))},e.prototype.updateCharacterPosition=function(t,i){t.x<3*t.scaledWidth&&(t.x+=t.xVelocity*i);var o;this.keyDown?(o=6*-e.gravity,this.keyDown=!1):o=e.gravity;var n=Math.max(0,t.y+i*(t.yVelocity+i*o/2));t.y=n;var r;r=0===n?0:t.yVelocity+i*o,t.yVelocity=Math.min(r,e.terminalVelocity)},e.prototype.step=function(){var t=this;setTimeout(function(){return window.requestAnimationFrame(t.physicsLoop.bind(t))},1e3/e.fps)},e}();Physics.fps=60,Physics.gravity=.002,Physics.flapKey=32,Physics.terminalVelocity=1.5;var WorldObject=function(){function e(t,i,o,n,r,s,a,c,l){switch(void 0===c&&(c="IMAGE"),void 0===l&&(l={}),this._x=t,this._y=i,this._scale=o,this._xVelocity=n,this._yVelocity=r,this._source=s,this._collidable=a,this._type=c,this._konvaOpts=l,this._id=e.count++,c){case"IMAGE":this.loadImage(s);break;case"TEXT":this._width=0,this._height=0}}return Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaledHeight",{get:function(){return this._height*this._scale},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaledWidth",{get:function(){return this._width*this._scale},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"yVelocity",{get:function(){return this._yVelocity},set:function(e){this._yVelocity=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"xVelocity",{get:function(){return this._xVelocity},set:function(e){this._xVelocity=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"collidable",{get:function(){return this._collidable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"konvaOpts",{get:function(){return this._konvaOpts},enumerable:!0,configurable:!0}),e.prototype.loadImage=function(e){this._source=e;var t=ImageLoader.getImage(e);if(ImageLoader.getSprite(e)){var i=ImageLoader.getSprite(e);this._width=i.width,this._height=i.height}else this._width=t.width,this._height=t.height},e}();WorldObject.count=0;var LayerObject=function(e){function t(t,i,o,n,r,s){return e.call(this,t,i,o,n,r,s,!1)||this}return __extends(t,e),Object.defineProperty(t.prototype,"followingLayer",{get:function(){return this._followingLayer},set:function(e){this._followingLayer=e},enumerable:!0,configurable:!0}),t}(WorldObject),BackgroundObject=function(e){function t(){return e.call(this,0,0,1,0,0,t.image)||this}return __extends(t,e),t}(LayerObject);BackgroundObject.image="assets/bg.png";var FlyingBookObject=function(e){function t(i,o){var n=e.call(this,i,0,.4*Math.random()+t.smallestScale,.3*Math.random()+t.smallestVelocity,0,t.image,!0)||this;return n.y=Math.random()*(o-n.scaledHeight),n}return __extends(t,e),t}(WorldObject);FlyingBookObject.image="assets/flying_book.png",FlyingBookObject.smallestScale=.3,FlyingBookObject.smallestVelocity=1.2*World.initialVelocity;var Character=function(e){function t(i,o,n,r){var s=e.call(this,i,o,1,n,r,t.images[0],!0)||this;return s.life=0,s}return __extends(t,e),t.prototype.lifeLost=function(){this.life++;var e=Math.min(this.life,t.images.length-1);this.loadImage(t.images[e])},t}(WorldObject);Character.images=["assets/kam.png","assets/olive.png","assets/mrfigg.png","assets/isaak.png"];var RelativeYPosition;!function(e){e[e.BOTTOM=0]="BOTTOM",e[e.TOP=1]="TOP",e[e.MIDDLE=2]="MIDDLE"}(RelativeYPosition||(RelativeYPosition={}));var RelativeXPosition;!function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.MIDDLE=2]="MIDDLE"}(RelativeXPosition||(RelativeXPosition={}));var ParallaxObject=function(e){function t(t,i,o,n,r){var s=e.call(this,t,100,1,n,0,r)||this;switch(i){case RelativeYPosition.BOTTOM:s.y=o-s.scaledHeight;break;case RelativeYPosition.MIDDLE:s.y=o-s.scaledHeight/2;break;case RelativeYPosition.TOP:s.y=0;break;default:s.y=0}return s}return __extends(t,e),t}(LayerObject),StaticObject=function(e){function t(t,i,o,n,r,s){void 0===r&&(r=NaN),void 0===s&&(s=1);var a=e.call(this,i,r,s,0,0,t,!1)||this;return isNaN(r)&&a.positionY(o,n),a}return __extends(t,e),t.prototype.positionY=function(e,t){switch(e){case RelativeYPosition.BOTTOM:this.y=t-this.scaledHeight;break;case RelativeYPosition.MIDDLE:this.y=t/2-this.scaledHeight/2;break;case RelativeYPosition.TOP:this.y=0;break;default:this.y=0}},t}(WorldObject),BookStackObject=function(e){function t(i,o,n){var r=e.call(this,i,0,Math.max(.6,.6*Math.random()+.2),n,0,t.images[Math.floor(Math.random()*t.images.length)],!0)||this;return r.y=o-r.scaledHeight,r}return __extends(t,e),t}(WorldObject);BookStackObject.images=["assets/books.png","assets/books2.png"];var WorldGenerator=function(){function e(e){this.world=e,this._character=new Character(0,0,World.initialVelocity,0)}return e.prototype.worldGenLoop=function(){this.updateLayers(),this.addObjects(),this.removeObjects(),this.updateWorldProperties()},e.prototype.start=function(){for(var e=0,t=this.world.getObjects();e<t.length;e++){var i=t[e];this.world.removeObjects(i)}this.maxNumberOfObjects=40,this.probabilityToAddObject=.012,this.character.x=0,this.character.y=0,this.character.xVelocity=World.initialVelocity;var o=new ParallaxObject(0,RelativeYPosition.BOTTOM,this.world.height,.05*World.initialVelocity,"assets/wave1.png"),n=new ParallaxObject(o.scaledWidth,RelativeYPosition.BOTTOM,this.world.height,.05*World.initialVelocity,"assets/wave1.png");o.followingLayer=n;var r=new ParallaxObject(0,RelativeYPosition.BOTTOM,this.world.height,.4*World.initialVelocity,"assets/wave2.png"),s=new ParallaxObject(r.scaledWidth,RelativeYPosition.BOTTOM,this.world.height,.4*World.initialVelocity,"assets/wave2.png");r.followingLayer=s;var a=new ParallaxObject(0,RelativeYPosition.BOTTOM,this.world.height,1*World.initialVelocity,"assets/wave3.png"),c=new ParallaxObject(r.scaledWidth,RelativeYPosition.BOTTOM,this.world.height,1*World.initialVelocity,"assets/wave3.png");a.followingLayer=c,this.world.addObjects(new BackgroundObject),this.world.addLayers(o),this.world.addLayers(n),this.world.addLayers(r),this.world.addLayers(s),this.world.addLayers(a),this.world.addLayers(c),this.world.addObjects(this.character),this.setupLives()},e.prototype.stop=function(){},e.prototype.printWorldGeneratorState=function(){log$1.info("probabilityToAddObject: "+this.probabilityToAddObject+"\n"),log$1.info("maxNumberOfObjects: "+this.maxNumberOfObjects+"\n"),log$1.info("currentVelocity: "+this.world.currentVelocity+"\n")},e.prototype.addObjects=function(){for(var e=Math.floor(this.maxNumberOfObjects-(this.world.numObjects-1)),t=0;t<e;t++){if(Math.random()>this.probabilityToAddObject)return;var i=this.pickObject(this.world.width,this.world.height);this.world.addObjects(i)}},e.prototype.removeObjects=function(){for(var e=0,t=this.world.getObjects();e<t.length;e++){var i=t[e];this.character.id!==i.id&&i.x+i.scaledWidth<0&&this.world.removeObjects(i)}},e.prototype.pickObject=function(e,t){var i=Math.random();switch(!0){case i>=0&&i<.4:return new BookStackObject(e,t-42,World.initialVelocity);case i>=.4&&i<1:return new FlyingBookObject(e,.8*t);default:return new FlyingBookObject(e,.8*t)}},e.prototype.updateLayers=function(){for(var e=0,t=this.world.getLayers();e<t.length;e++){var i=t[e];if(i.x+i.scaledWidth<=0){i.x=i.followingLayer.x+i.followingLayer.scaledWidth;var o=i.followingLayer;i.followingLayer=null,o.followingLayer=i}}},e.prototype.updateWorldProperties=function(){this.world.currentVelocity+=.01,this.maxNumberOfObjects=Math.min(this.maxNumberOfObjects+.01,e.globalMaxNumberOfObjects),this.probabilityToAddObject=Math.min(this.probabilityToAddObject+2e-5,e.globalMaxProbabilityToAddObject)},e.prototype.setupLives=function(){for(var e=[],t=30,i=["assets/life-isaak.png","assets/life-mrfigg.png","assets/life-olive.png"],o=0;o<this.world.lives;o++){var n=new StaticObject(i[o],t,null,this.world.height,30);e.push(n),t+=1.1*n.scaledWidth}(r=this.world).addObjects.apply(r,e);var r},Object.defineProperty(e.prototype,"character",{get:function(){return this._character},enumerable:!0,configurable:!0}),e}();WorldGenerator.globalMaxNumberOfObjects=160,WorldGenerator.globalMaxProbabilityToAddObject=.1;var TextObject=function(e){function t(t,i,o,n,r,s,a){void 0===r&&(r=NaN),void 0===s&&(s=12),void 0===a&&(a={});var c=e.call(this,i,r,s,0,0,t,!1,"TEXT",a)||this;return isNaN(r)&&c.positionY(o,n),c}return __extends(t,e),t.prototype.positionY=function(e,t){switch(e){case RelativeYPosition.BOTTOM:this.y=t-this.scaledHeight;break;case RelativeYPosition.MIDDLE:this.y=t/2-this.scaledHeight/2;break;case RelativeYPosition.TOP:this.y=0;break;default:this.y=0}},t}(WorldObject),Scene=function(){function e(e,t,i){this.world=e,this.objects=t,this.generator=i}return e.prototype.start=function(){(e=this.world).addObjects.apply(e,this.objects),this.generator&&this.generator.start();var e},e.prototype.stop=function(){(e=this.world).removeObjects.apply(e,this.objects),this.generator&&this.generator.stop();var e},e}(),StartScene=function(e){function t(i){return e.call(this,i,[new StaticObject(t.SPLASH_SCREEN_SOURCE,0,RelativeYPosition.MIDDLE,i.height),new StaticObject(t.SPLASH_SCREEN_MRFIGG_SOURCE,1177,null,i.height,864),new StaticObject(t.SPLASH_SCREEN_KAM_SOURCE,1600,null,i.height,1050),new StaticObject(t.SPLASH_SCREEN_OLIVE_SOURCE,1024,null,i.height,1055),new StaticObject(t.SPLASH_SCREEN_ISAAK_SOURCE,782,null,i.height,1088)])||this}return __extends(t,e),t}(Scene);StartScene.SPLASH_SCREEN_SOURCE="assets/splash-studybreak.jpg",StartScene.SPLASH_SCREEN_ISAAK_SOURCE="assets/splash-blinking-isaak.png",StartScene.SPLASH_SCREEN_OLIVE_SOURCE="assets/splash-blinking-olive.png",StartScene.SPLASH_SCREEN_MRFIGG_SOURCE="assets/splash-blinking-mrfigg.png",StartScene.SPLASH_SCREEN_KAM_SOURCE="assets/splash-blinking-kam.png";var GameScene=function(e){function t(t,i){return e.call(this,t,[],i)||this}return __extends(t,e),t}(Scene),EndScene=function(e){function t(t,i){return void 0===i&&(i=[]),e.call(this,t,i,null)||this}return __extends(t,e),t.prototype.start=function(){e.prototype.start.call(this),this.endTextTop=new TextObject("",0,NaN,this.world.height,this.world.height/2-100,80,{align:"center",fill:"#444444"}),this.endTextMiddle=new TextObject("",0,NaN,this.world.height,this.endTextTop.y+1.5*this.endTextTop.scale,50,{align:"center",fill:"#444444"}),this.endTextBottom=new TextObject("",0,NaN,this.world.height,this.endTextMiddle.y+1.5*this.endTextMiddle.scale,50,{align:"center",fill:"#444444"}),this.world.addObjects(this.endTextTop,this.endTextMiddle,this.endTextBottom)},t.prototype.updateText=function(e,t,i){e.text("Whoops! You hit the books."),t.text("YOUR SCORE: "+this.world.getScore().score+"      HIGH SCORE: "+this.world.getScore().maxScore),i.text("PRESS <SPACE> TO PLAY AGAIN")},t}(Scene),GameOverScene=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){e.prototype.start.call(this),this.backToWorkButton=new StaticObject("assets/button-backtowork.png",this.world.width/2-405,null,this.world.height,920),this.world.addObjects(this.backToWorkButton)},t.prototype.updateText=function(e,t,i){e.text("Ouch, now that's what we call cramming!"),t.text("YOUR SCORE: "+this.world.getScore().score+"      HIGH SCORE: "+this.world.getScore().maxScore),i.text("")},t}(EndScene),Game=function(){function e(e,t,i){var o=this;this.renderer=e,this.world=t,this.opts=i,this.state="START_SCREEN";var n=new WorldGenerator(t);this.physics=new Physics(t,n),this.startScene=new StartScene(t),this.gameScene=new GameScene(t,n),this.endScene=new EndScene(t),this.gameOverScene=new GameOverScene(t),this.startScene.start(),PubSub.subscribe("keyboard.keydown",function(e,t){if(32===t.keyCode)switch(o.state){case"END_SCREEN":o.state="GAME_SCREEN",o.endScene.stop(),o.startGame();break;case"START_SCREEN":o.state="GAME_SCREEN",o.startScene.stop(),o.startGame()}}),PubSub.subscribe("physics.collision",function(){switch(o.state){case"GAME_SCREEN":var r=e.getShape(n.character);r.animation("death"),r.frameIndex(0),r.setZIndex(1/0);var s=function(e){e===r.animations()[r.animation()].length/4-1?r.stop():setTimeout(function(){return s(r.frameIndex())},800/r.frameRate())};if(s(r.frameIndex()),o.gameScene.stop(),o.physics.stop(),t.lives<=0){o.state="GAME_OVER_SCREEN",o.gameOverScene.start(),o.gameOverScene.updateText(e.getShape(o.gameOverScene.endTextTop),e.getShape(o.gameOverScene.endTextMiddle),e.getShape(o.gameOverScene.endTextBottom));o.renderer.getShape(o.gameOverScene.backToWorkButton).on("click",function(){i.onExit()})}else o.state="END_SCREEN",o.endScene.start(),o.endScene.updateText(e.getShape(o.endScene.endTextTop),e.getShape(o.endScene.endTextMiddle),e.getShape(o.endScene.endTextBottom)),o.world.decrementLives()}})}return e.prototype.startGame=function(){var e=this;PubSub.publishSync("game.gamescreen",null),this.gameScene.start(),this.physics.start();var t=new TextObject("0",0,RelativeYPosition.TOP,this.world.height,30,70,{align:"right",fill:"#444444"});this.world.addObjects(t),this.world.currentVelocity=World.initialVelocity,PubSub.subscribe("score.tick",function(i,o){var n=o.score,r=e.renderer.getShape(t);r&&r.text(n+"  ")})},e}(),Keyboard=function(){function e(){var e=this;this.keys={},window.onkeydown=function(t){e.keys[t.keyCode]=!0,PubSub.publishSync("keyboard.keydown",t)},window.onkeyup=function(t){e.keys[t.keyCode]=!1,PubSub.publishSync("keyboard.keyup",t)},window.onkeypress=function(e){PubSub.publishSync("keyboard.keypress",e)}}return e.prototype.isKeyDown=function(e){return this.keys[e]},e}(),keyboard=new Keyboard,main=function(e,t){void 0===e&&(e=document.getElementById("container")),void 0===t&&(t={assetPrefix:"",logLevel:"info",onExit:function(){}}),log$1.setLevel(t.logLevel),log$1.info("Loading fonts..."),WebFont.load({google:{families:["Varela Round"]}}),log$1.info("Loading assets..."),ImageLoader.load(sources,t.assetPrefix,function(){log$1.info("Initializing game..."),console.log(keyboard);var i=new Score,o=new World(2880,1620,i),n=new Renderer(e,o).run();new Game(n,o,t);log$1.info("Done init. Game started.")})};exports.main=main;