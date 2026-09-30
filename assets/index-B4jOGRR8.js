(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="165",jn={ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,Va=1,fc=2,Ao=1,Co=2,on=3,An=0,Dt=1,Xt=2,wn=0,mi=1,Ha=2,Wa=3,qa=4,pc=5,Gn=100,mc=101,gc=102,vc=103,_c=104,xc=200,Mc=201,yc=202,Sc=203,Ma=204,ya=205,bc=206,Ec=207,wc=208,Tc=209,Ac=210,Cc=211,Rc=212,Pc=213,Lc=214,Ic=0,Dc=1,Uc=2,_s=3,Nc=4,Oc=5,Fc=6,Bc=7,Ro=0,zc=1,kc=2,Tn=0,Gc=1,Vc=2,Hc=3,Po=4,Wc=5,qc=6,Xc=7,Lo=300,xi=301,Mi=302,Sa=303,ba=304,As=306,Ea=1e3,Hn=1001,wa=1002,Gt=1003,Yc=1004,Wi=1005,Yt=1006,Os=1007,bn=1008,Cn=1009,jc=1010,$c=1011,xs=1012,Io=1013,yi=1014,En=1015,Cs=1016,Do=1017,Uo=1018,Si=1020,Kc=35902,Zc=1021,Jc=1022,Zt=1023,Qc=1024,el=1025,gi=1026,bi=1027,tl=1028,No=1029,nl=1030,Oo=1031,Fo=1033,Fs=33776,Bs=33777,zs=33778,ks=33779,Xa=35840,Ya=35841,ja=35842,$a=35843,Ka=36196,Za=37492,Ja=37496,Qa=37808,er=37809,tr=37810,nr=37811,ir=37812,sr=37813,ar=37814,rr=37815,or=37816,cr=37817,lr=37818,ur=37819,dr=37820,hr=37821,Gs=36492,fr=36494,pr=36495,il=36283,mr=36284,gr=36285,vr=36286,sl=3200,al=3201,Bo=0,rl=1,Sn="",jt="srgb",Pn="srgb-linear",Ca="display-p3",Rs="display-p3-linear",Ms="linear",tt="srgb",ys="rec709",Ss="p3",Kn=7680,_r=519,ol=512,cl=513,ll=514,zo=515,ul=516,dl=517,hl=518,fl=519,xr=35044,Mr="300 es",cn=2e3,bs=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yr=1234567;const Oi=Math.PI/180,Ei=180/Math.PI;function Ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Ra(s,e){return(s%e+e)%e}function pl(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ml(s,e,t){return s!==e?(t-s)/(e-s):0}function Fi(s,e,t){return(1-t)*s+t*e}function gl(s,e,t,n){return Fi(s,e,1-Math.exp(-t*n))}function vl(s,e=1){return e-Math.abs(Ra(s,e*2)-e)}function _l(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ml(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yl(s,e){return s+Math.random()*(e-s)}function Sl(s){return s*(.5-Math.random())}function bl(s){s!==void 0&&(yr=s);let e=yr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function El(s){return s*Oi}function wl(s){return s*Ei}function Tl(s){return(s&s-1)===0&&s!==0}function Al(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rl(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),u=r((e+n)/2),d=a((e-n)/2),h=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*u,c*d,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:Oi,RAD2DEG:Ei,generateUUID:Ti,clamp:Mt,euclideanModulo:Ra,mapLinear:pl,inverseLerp:ml,lerp:Fi,damp:gl,pingpong:vl,smoothstep:_l,smootherstep:xl,randInt:Ml,randFloat:yl,randFloatSpread:Sl,seededRandom:bl,degToRad:El,radToDeg:wl,isPowerOfTwo:Tl,ceilPowerOfTwo:Al,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:Rl,normalize:wt,denormalize:fi};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,a,r,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l)}set(e,t,n,i,a,r,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],w=i[1],S=i[4],T=i[7],O=i[2],L=i[5],R=i[8];return a[0]=r*_+o*w+c*O,a[3]=r*p+o*S+c*L,a[6]=r*m+o*T+c*R,a[1]=l*_+u*w+d*O,a[4]=l*p+u*S+d*L,a[7]=l*m+u*T+d*R,a[2]=h*_+f*w+g*O,a[5]=h*p+f*S+g*L,a[8]=h*m+f*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-n*a*u+n*o*c+i*a*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*r-o*l,h=o*c-u*a,f=l*a-r*c,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*r)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*a-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new We;function ko(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pl(){const s=Es("canvas");return s.style.display="block",s}const Sr={};function Go(s){s in Sr||(Sr[s]=!0,console.warn(s))}function Ll(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const br=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Er=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qi={[Pn]:{transfer:Ms,primaries:ys,toReference:s=>s,fromReference:s=>s},[jt]:{transfer:tt,primaries:ys,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Rs]:{transfer:Ms,primaries:Ss,toReference:s=>s.applyMatrix3(Er),fromReference:s=>s.applyMatrix3(br)},[Ca]:{transfer:tt,primaries:Ss,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Er),fromReference:s=>s.applyMatrix3(br).convertLinearToSRGB()}},Il=new Set([Pn,Rs]),Ke={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Il.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=qi[e].toReference,i=qi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qi[s].primaries},getTransfer:function(s){return s===Sn?Ms:qi[s].transfer}};function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zn;class Dl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Es("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=vi(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ul=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Ws(i[r].image)):a.push(Ws(i[r]))}else a=Ws(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nl=0;class Rt extends Yn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Hn,i=Hn,a=Yt,r=bn,o=Zt,c=Cn,l=Rt.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Ti(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Lo;Rt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,T=(f+1)/2,O=(m+1)/2,L=(u+h)/4,R=(d+_)/4,N=(g+p)/4;return S>T&&S>O?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=L/n,a=R/n):T>O?T<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(T),n=L/i,a=N/i):O<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(O),n=R/a,i=N/a),this.set(n,i,a,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends Yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ho extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fl extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let p=1-o;const m=c*h+l*f+u*g+d*_,w=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const O=Math.sqrt(S),L=Math.atan2(O,m*w);p=Math.sin(p*L)/O,o=Math.sin(o*L)/O}const T=o*w;if(c=c*p+h*T,l=l*p+f*T,u=u*p+g*T,d=d*p+_*T,p===1-o){const O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(a/2),h=c(n/2),f=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*o+i*l-a*c,this._y=i*u+r*c+a*o-n*l,this._z=a*u+r*l+n*c-i*o,this._w=r*u-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),u=2*(o*t-a*i),d=2*(a*n-r*t);return this.x=t+c*l+r*d-o*u,this.y=n+c*u+o*l-a*d,this.z=i+c*d+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new b,wr=new qn;class Gi{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Vt):Vt.fromBufferAttribute(a,r),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Yi.subVectors(this.max,Ri),Jn.subVectors(e.a,Ri),Qn.subVectors(e.b,Ri),ei.subVectors(e.c,Ri),fn.subVectors(Qn,Jn),pn.subVectors(ei,Qn),Un.subVectors(Jn,ei);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Un.z,Un.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Un.z,0,-Un.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Un.y,Un.x,0];return!Xs(t,Jn,Qn,ei,Yi)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,Jn,Qn,ei,Yi))?!1:(ji.crossVectors(fn,pn),t=[ji.x,ji.y,ji.z],Xs(t,Jn,Qn,ei,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new b,new b,new b,new b,new b,new b,new b,new b],Vt=new b,Xi=new Gi,Jn=new b,Qn=new b,ei=new b,fn=new b,pn=new b,Un=new b,Ri=new b,Yi=new b,ji=new b,Nn=new b;function Xs(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Nn.fromArray(s,a);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=e.dot(Nn),l=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Bl=new Gi,Pi=new b,Ys=new b;class Ps{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(Ys)),this.expandByPoint(Pi.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new b,js=new b,$i=new b,mn=new b,$s=new b,Ki=new b,Ks=new b;class Pa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(js);const a=e.distanceTo(t)*.5,r=-this.direction.dot($i),o=mn.dot(this.direction),c=-mn.dot($i),l=mn.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*c-o,h=r*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+r*h+2*o)+h*(r*d+h+2*c)+l}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(js).addScaledVector($i,h),f}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,a){$s.subVectors(t,e),Ki.subVectors(n,e),Ks.crossVectors($s,Ki);let r=this.direction.dot(Ks),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mn.subVectors(this.origin,e);const c=o*this.direction.dot(Ki.crossVectors(mn,Ki));if(c<0)return null;const l=o*this.direction.dot($s.cross(mn));if(l<0||c+l>r)return null;const u=-o*mn.dot(Ks);return u<0?null:this.at(u/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,a,r,o,c,l,u,d,h,f,g,_,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l,u,d,h,f,g,_,p)}set(e,t,n,i,a,r,o,c,l,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ti.setFromMatrixColumn(e,0).length(),a=1/ti.setFromMatrixColumn(e,1).length(),r=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=r*u,f=r*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=r*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=_-h*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const h=r*u,f=r*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const h=r*c,f=r*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=r*c,f=r*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zl,e,kl)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),gn.crossVectors(n,Ft),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),gn.crossVectors(n,Ft)),gn.normalize(),Zi.crossVectors(Ft,gn),i[0]=gn.x,i[4]=Zi.x,i[8]=Ft.x,i[1]=gn.y,i[5]=Zi.y,i[9]=Ft.y,i[2]=gn.z,i[6]=Zi.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],w=n[3],S=n[7],T=n[11],O=n[15],L=i[0],R=i[4],N=i[8],E=i[12],M=i[1],D=i[5],W=i[9],G=i[13],Z=i[2],J=i[6],Y=i[10],ee=i[14],$=i[3],me=i[7],I=i[11],C=i[15];return a[0]=r*L+o*M+c*Z+l*$,a[4]=r*R+o*D+c*J+l*me,a[8]=r*N+o*W+c*Y+l*I,a[12]=r*E+o*G+c*ee+l*C,a[1]=u*L+d*M+h*Z+f*$,a[5]=u*R+d*D+h*J+f*me,a[9]=u*N+d*W+h*Y+f*I,a[13]=u*E+d*G+h*ee+f*C,a[2]=g*L+_*M+p*Z+m*$,a[6]=g*R+_*D+p*J+m*me,a[10]=g*N+_*W+p*Y+m*I,a[14]=g*E+_*G+p*ee+m*C,a[3]=w*L+S*M+T*Z+O*$,a[7]=w*R+S*D+T*J+O*me,a[11]=w*N+S*W+T*Y+O*I,a[15]=w*E+S*G+T*ee+O*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+a*c*d-i*l*d-a*o*h+n*l*h+i*o*f-n*c*f)+_*(+t*c*f-t*l*h+a*r*h-i*r*f+i*l*u-a*c*u)+p*(+t*l*d-t*o*f-a*r*d+n*r*f+a*o*u-n*l*u)+m*(-i*o*u-t*c*d+t*o*h+i*r*d-n*r*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],w=d*p*l-_*h*l+_*c*f-o*p*f-d*c*m+o*h*m,S=g*h*l-u*p*l-g*c*f+r*p*f+u*c*m-r*h*m,T=u*_*l-g*d*l+g*o*f-r*_*f-u*o*m+r*d*m,O=g*d*c-u*_*c-g*o*h+r*_*h+u*o*p-r*d*p,L=t*w+n*S+i*T+a*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=w*R,e[1]=(_*h*a-d*p*a-_*i*f+n*p*f+d*i*m-n*h*m)*R,e[2]=(o*p*a-_*c*a+_*i*l-n*p*l-o*i*m+n*c*m)*R,e[3]=(d*c*a-o*h*a-d*i*l+n*h*l+o*i*f-n*c*f)*R,e[4]=S*R,e[5]=(u*p*a-g*h*a+g*i*f-t*p*f-u*i*m+t*h*m)*R,e[6]=(g*c*a-r*p*a-g*i*l+t*p*l+r*i*m-t*c*m)*R,e[7]=(r*h*a-u*c*a+u*i*l-t*h*l-r*i*f+t*c*f)*R,e[8]=T*R,e[9]=(g*d*a-u*_*a-g*n*f+t*_*f+u*n*m-t*d*m)*R,e[10]=(r*_*a-g*o*a+g*n*l-t*_*l-r*n*m+t*o*m)*R,e[11]=(u*o*a-r*d*a-u*n*l+t*d*l+r*n*f-t*o*f)*R,e[12]=O*R,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*p+t*d*p)*R,e[14]=(g*o*i-r*_*i-g*n*c+t*_*c+r*n*p-t*o*p)*R,e[15]=(r*d*i-u*o*i+u*n*c-t*d*c-r*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*r,0,l*c-i*o,u*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,d=o+o,h=a*l,f=a*u,g=a*d,_=r*u,p=r*d,m=o*d,w=c*l,S=c*u,T=c*d,O=n.x,L=n.y,R=n.z;return i[0]=(1-(_+m))*O,i[1]=(f+T)*O,i[2]=(g-S)*O,i[3]=0,i[4]=(f-T)*L,i[5]=(1-(h+m))*L,i[6]=(p+w)*L,i[7]=0,i[8]=(g+S)*R,i[9]=(p-w)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=ti.set(i[0],i[1],i[2]).length();const r=ti.set(i[4],i[5],i[6]).length(),o=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const l=1/a,u=1/r,d=1/o;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=cn){const c=this.elements,l=2*a/(t-e),u=2*a/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(o===cn)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===bs)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=cn){const c=this.elements,l=1/(t-e),u=1/(n-i),d=1/(r-a),h=(t+e)*l,f=(n+i)*u;let g,_;if(o===cn)g=(r+a)*d,_=-2*d;else if(o===bs)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new b,Ht=new it,zl=new b(0,0,0),kl=new b(1,1,1),gn=new b,Zi=new b,Ft=new b,Tr=new it,Ar=new qn;class Ct{constructor(e=0,t=0,n=0,i=Ct.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ar.setFromEuler(this),this.setFromQuaternion(Ar,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ct.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gl=0;const Cr=new b,ni=new qn,sn=new it,Ji=new b,Li=new b,Vl=new b,Hl=new qn,Rr=new b(1,0,0),Pr=new b(0,1,0),Lr=new b(0,0,1),Ir={type:"added"},Wl={type:"removed"},ii={type:"childadded",child:null},Zs={type:"childremoved",child:null};class pt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new b,t=new Ct,n=new qn,i=new b(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Rr,e)}rotateY(e){return this.rotateOnAxis(Pr,e)}rotateZ(e){return this.rotateOnAxis(Lr,e)}translateOnAxis(e,t){return Cr.copy(e).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rr,e)}translateY(e){return this.translateOnAxis(Pr,e)}translateZ(e){return this.translateOnAxis(Lr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Li,Ji,this.up):sn.lookAt(Ji,Li,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(sn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ir),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wl),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ir),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Hl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new b(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new b,an=new b,Js=new b,rn=new b,si=new b,ai=new b,Dr=new b,Qs=new b,ea=new b,ta=new b;class Kt{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Wt.subVectors(i,t),an.subVectors(n,t),Js.subVectors(e,t);const r=Wt.dot(Wt),o=Wt.dot(an),c=Wt.dot(Js),l=an.dot(an),u=an.dot(Js),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(r*u-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,n,i,a,r,o,c){return this.getBarycoord(e,t,n,i,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,rn.x),c.addScaledVector(r,rn.y),c.addScaledVector(o,rn.z),c)}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),an.subVectors(e,t),Wt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Wt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;si.subVectors(i,n),ai.subVectors(a,n),Qs.subVectors(e,n);const c=si.dot(Qs),l=ai.dot(Qs);if(c<=0&&l<=0)return t.copy(n);ea.subVectors(e,i);const u=si.dot(ea),d=ai.dot(ea);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(si,r);ta.subVectors(e,a);const f=si.dot(ta),g=ai.dot(ta);if(g>=0&&f<=g)return t.copy(a);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ai,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Dr.subVectors(a,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Dr,o);const m=1/(p+_+h);return r=_*m,o=h*m,t.copy(n).addScaledVector(si,r).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Ra(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=na(r,a,e+1/3),this.g=na(r,a,e),this.b=na(r,a,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=qo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ke.fromWorkingColorSpace(bt.copy(this),e),Math.round(Mt(bt.r*255,0,255))*65536+Math.round(Mt(bt.g*255,0,255))*256+Math.round(Mt(bt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,a=bt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-a)/d+(i<a?6:0);break;case i:c=(a-n)/d+2;break;case a:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=jt){Ke.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Qi);const n=Fi(vn.h,Qi.h,t),i=Fi(vn.s,Qi.s,t),a=Fi(vn.l,Qi.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ge;Ge.NAMES=qo;let ql=0;class Ai extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=mi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ya,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_r,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_r&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ln extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new b,es=new xe;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Go("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xr&&(e.usage=this.usage),e}}class Xo extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yo extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xl=0;const kt=new it,ia=new pt,ri=new b,Bt=new Gi,Ii=new Gi,_t=new b;class Pt extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)?Yo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new We().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Bt.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Bt.min,Ii.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,Ii.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(Ii.min),Bt.expandByPoint(Ii.max))}Bt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)_t.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(e,l),_t.add(ri)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new b,c[N]=new b;const l=new b,u=new b,d=new b,h=new xe,f=new xe,g=new xe,_=new b,p=new b;function m(N,E,M){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(a,N),f.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[N].add(_),o[E].add(_),o[M].add(_),c[N].add(p),c[E].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,E=w.length;N<E;++N){const M=w[N],D=M.start,W=M.count;for(let G=D,Z=D+W;G<Z;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new b,T=new b,O=new b,L=new b;function R(N){O.fromBufferAttribute(i,N),L.copy(O);const E=o[N];S.copy(E),S.sub(O.multiplyScalar(O.dot(E))).normalize(),T.crossVectors(L,E);const D=T.dot(c[N])<0?-1:1;r.setXYZW(N,S.x,S.y,S.z,D)}for(let N=0,E=w.length;N<E;++N){const M=w[N],D=M.start,W=M.count;for(let G=D,Z=D+W;G<Z;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new b,a=new b,r=new b,o=new b,c=new b,l=new b,u=new b,d=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new Qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new it,On=new Pa,ts=new Ps,Nr=new b,oi=new b,ci=new b,li=new b,sa=new b,ns=new b,is=new xe,ss=new xe,as=new xe,Or=new b,Fr=new b,Br=new b,rs=new b,os=new b;class Q extends pt{constructor(e=new Pt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ns.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(sa.fromBufferAttribute(d,e),r?ns.addScaledVector(sa,u):ns.addScaledVector(sa.sub(t),u))}t.add(ns)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(a),On.copy(e.ray).recast(e.near),!(ts.containsPoint(On.origin)===!1&&(On.intersectSphere(ts,Nr)===null||On.origin.distanceToSquared(Nr)>(e.far-e.near)**2))&&(Ur.copy(a).invert(),On.copy(e.ray).applyMatrix4(Ur),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],w=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let T=w,O=S;T<O;T+=3){const L=o.getX(T),R=o.getX(T+1),N=o.getX(T+2);i=cs(this,m,e,n,l,u,d,L,R,N),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const w=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);i=cs(this,r,e,n,l,u,d,w,S,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],w=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=w,O=S;T<O;T+=3){const L=T,R=T+1,N=T+2;i=cs(this,m,e,n,l,u,d,L,R,N),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const w=p,S=p+1,T=p+2;i=cs(this,r,e,n,l,u,d,w,S,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Yl(s,e,t,n,i,a,r,o){let c;if(e.side===Dt?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,e.side===An,o),c===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(os);return l<t.near||l>t.far?null:{distance:l,point:os.clone(),object:s}}function cs(s,e,t,n,i,a,r,o,c,l){s.getVertexPosition(o,oi),s.getVertexPosition(c,ci),s.getVertexPosition(l,li);const u=Yl(s,e,t,n,oi,ci,li,rs);if(u){i&&(is.fromBufferAttribute(i,o),ss.fromBufferAttribute(i,c),as.fromBufferAttribute(i,l),u.uv=Kt.getInterpolation(rs,oi,ci,li,is,ss,as,new xe)),a&&(is.fromBufferAttribute(a,o),ss.fromBufferAttribute(a,c),as.fromBufferAttribute(a,l),u.uv1=Kt.getInterpolation(rs,oi,ci,li,is,ss,as,new xe)),r&&(Or.fromBufferAttribute(r,o),Fr.fromBufferAttribute(r,c),Br.fromBufferAttribute(r,l),u.normal=Kt.getInterpolation(rs,oi,ci,li,Or,Fr,Br,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new b,materialIndex:0};Kt.getNormal(oi,ci,li,d.normal),u.face=d}return u}class Qe extends Pt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(d,2));function g(_,p,m,w,S,T,O,L,R,N,E){const M=T/R,D=O/N,W=T/2,G=O/2,Z=L/2,J=R+1,Y=N+1;let ee=0,$=0;const me=new b;for(let I=0;I<Y;I++){const C=I*D-G;for(let re=0;re<J;re++){const ue=re*M-W;me[_]=ue*w,me[p]=C*S,me[m]=Z,l.push(me.x,me.y,me.z),me[_]=0,me[p]=0,me[m]=L>0?1:-1,u.push(me.x,me.y,me.z),d.push(re/R),d.push(1-I/N),ee+=1}}for(let I=0;I<N;I++)for(let C=0;C<R;C++){const re=h+C+J*I,ue=h+C+J*(I+1),B=h+(C+1)+J*(I+1),j=h+(C+1)+J*I;c.push(re,ue,j),c.push(ue,B,j),$+=6}o.addGroup(f,$,E),f+=$,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=wi(s[t]);for(const i in n)e[i]=n[i]}return e}function jl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jo(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const $l={clone:wi,merge:At};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=Zl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $o extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new b,zr=new xe,kr=new xe;class Lt extends $o{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ei*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,zr,kr),t.subVectors(kr,zr)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,di=1;class Jl extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(ui,di,e,t);i.layers=this.layers,this.add(i);const a=new Lt(ui,di,e,t);a.layers=this.layers,this.add(a);const r=new Lt(ui,di,e,t);r.layers=this.layers,this.add(r);const o=new Lt(ui,di,e,t);o.layers=this.layers,this.add(o);const c=new Lt(ui,di,e,t);c.layers=this.layers,this.add(c);const l=new Lt(ui,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ko extends Rt{constructor(e,t,n,i,a,r,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ql extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ko(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qe(5,5,5),a=new Rn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:wn});a.uniforms.tEquirect.value=t;const r=new Q(i,a),o=t.minFilter;return t.minFilter===bn&&(t.minFilter=Yt),new Jl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const aa=new b,eu=new b,tu=new We;class yn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=aa.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),i=this.coplanarPoint(aa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ps,ls=new b;class La{constructor(e=new yn,t=new yn,n=new yn,i=new yn,a=new yn,r=new yn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],w=i[13],S=i[14],T=i[15];if(n[0].setComponents(c-a,h-l,p-f,T-m).normalize(),n[1].setComponents(c+a,h+l,p+f,T+m).normalize(),n[2].setComponents(c+r,h+u,p+g,T+w).normalize(),n[3].setComponents(c-r,h-u,p-g,T-w).normalize(),n[4].setComponents(c-o,h-d,p-_,T-S).normalize(),t===cn)n[5].setComponents(c+o,h+d,p+_,T+S).normalize();else if(t===bs)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zo(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function nu(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&h.length===0&&s.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}class Jt extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const w=m*h-r;for(let S=0;S<l;S++){const T=S*d-a;g.push(T,-w,0),_.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const S=w+l*m,T=w+l*(m+1),O=w+1+l*(m+1),L=w+1+l*m;f.push(S,T,L),f.push(T,O,L)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.widthSegments,e.heightSegments)}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Du="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$u=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,th=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ih=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ph=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ph=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ih=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:iu,alphahash_pars_fragment:su,alphamap_fragment:au,alphamap_pars_fragment:ru,alphatest_fragment:ou,alphatest_pars_fragment:cu,aomap_fragment:lu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:hu,begin_vertex:fu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:vu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:yu,color_fragment:Su,color_pars_fragment:bu,color_pars_vertex:Eu,color_vertex:wu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Iu,colorspace_fragment:Du,colorspace_pars_fragment:Uu,envmap_fragment:Nu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Fu,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:$u,envmap_vertex:zu,fog_vertex:ku,fog_pars_vertex:Gu,fog_fragment:Vu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:qu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:Yu,lights_pars_begin:ju,lights_toon_fragment:Ku,lights_toon_pars_fragment:Zu,lights_phong_fragment:Ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:ed,lights_physical_pars_fragment:td,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:cd,map_fragment:ld,map_pars_fragment:ud,map_particle_fragment:dd,map_particle_pars_fragment:hd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:xd,normal_fragment_begin:Md,normal_fragment_maps:yd,normal_pars_fragment:Sd,normal_pars_vertex:bd,normal_vertex:Ed,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Rd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Ud,dithering_pars_fragment:Nd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:zd,shadowmap_vertex:kd,shadowmask_pars_fragment:Gd,skinbase_vertex:Vd,skinning_pars_vertex:Hd,skinning_vertex:Wd,skinnormal_vertex:qd,specularmap_fragment:Xd,specularmap_pars_fragment:Yd,tonemapping_fragment:jd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:Zd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:eh,worldpos_vertex:th,background_vert:nh,background_frag:ih,backgroundCube_vert:sh,backgroundCube_frag:ah,cube_vert:rh,cube_frag:oh,depth_vert:ch,depth_frag:lh,distanceRGBA_vert:uh,distanceRGBA_frag:dh,equirect_vert:hh,equirect_frag:fh,linedashed_vert:ph,linedashed_frag:mh,meshbasic_vert:gh,meshbasic_frag:vh,meshlambert_vert:_h,meshlambert_frag:xh,meshmatcap_vert:Mh,meshmatcap_frag:yh,meshnormal_vert:Sh,meshnormal_frag:bh,meshphong_vert:Eh,meshphong_frag:wh,meshphysical_vert:Th,meshphysical_frag:Ah,meshtoon_vert:Ch,meshtoon_frag:Rh,points_vert:Ph,points_frag:Lh,shadow_vert:Ih,shadow_frag:Dh,sprite_vert:Uh,sprite_frag:Nh},fe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},$t={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};$t.physical={uniforms:At([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const us={r:0,b:0,g:0},Bn=new Ct,Oh=new it;function Fh(s,e,t,n,i,a,r){const o=new Ge(0);let c=a===!0?0:1,l,u,d=null,h=0,f=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function _(w){let S=!1;const T=g(w);T===null?m(o,c):T&&T.isColor&&(m(T,1),S=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(w,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===As)?(u===void 0&&(u=new Q(new Qe(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:wi($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Bn.copy(S.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Oh.makeRotationFromEuler(Bn)),u.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,(d!==T||h!==T.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,f=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Q(new Jt(2,2),new Rn({name:"BackgroundMaterial",uniforms:wi($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=T,h=T.version,f=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,S){w.getRGB(us,jo(s)),n.buffers.color.setClear(us.r,us.g,us.b,S,r)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(o,c)},render:_,addToRenderList:p}}function Bh(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let a=i,r=!1;function o(M,D,W,G,Z){let J=!1;const Y=d(G,W,D);a!==Y&&(a=Y,l(a.object)),J=f(M,G,W,Z),J&&g(M,G,W,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,T(M,D,W,G),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function d(M,D,W){const G=W.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let J=Z[D.id];J===void 0&&(J={},Z[D.id]=J);let Y=J[G];return Y===void 0&&(Y=h(c()),J[G]=Y),Y}function h(M){const D=[],W=[],G=[];for(let Z=0;Z<t;Z++)D[Z]=0,W[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,D,W,G){const Z=a.attributes,J=D.attributes;let Y=0;const ee=W.getAttributes();for(const $ in ee)if(ee[$].location>=0){const I=Z[$];let C=J[$];if(C===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(C=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(C=M.instanceColor)),I===void 0||I.attribute!==C||C&&I.data!==C.data)return!0;Y++}return a.attributesNum!==Y||a.index!==G}function g(M,D,W,G){const Z={},J=D.attributes;let Y=0;const ee=W.getAttributes();for(const $ in ee)if(ee[$].location>=0){let I=J[$];I===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(I=M.instanceColor));const C={};C.attribute=I,I&&I.data&&(C.data=I.data),Z[$]=C,Y++}a.attributes=Z,a.attributesNum=Y,a.index=G}function _(){const M=a.newAttributes;for(let D=0,W=M.length;D<W;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){const W=a.newAttributes,G=a.enabledAttributes,Z=a.attributeDivisors;W[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),Z[M]!==D&&(s.vertexAttribDivisor(M,D),Z[M]=D)}function w(){const M=a.newAttributes,D=a.enabledAttributes;for(let W=0,G=D.length;W<G;W++)D[W]!==M[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function S(M,D,W,G,Z,J,Y){Y===!0?s.vertexAttribIPointer(M,D,W,Z,J):s.vertexAttribPointer(M,D,W,G,Z,J)}function T(M,D,W,G){_();const Z=G.attributes,J=W.getAttributes(),Y=D.defaultAttributeValues;for(const ee in J){const $=J[ee];if($.location>=0){let me=Z[ee];if(me===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const I=me.normalized,C=me.itemSize,re=e.get(me);if(re===void 0)continue;const ue=re.buffer,B=re.type,j=re.bytesPerElement,ne=B===s.INT||B===s.UNSIGNED_INT||me.gpuType===Io;if(me.isInterleavedBufferAttribute){const K=me.data,he=K.stride,ge=me.offset;if(K.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)m($.location+be,K.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<$.locationSize;be++)p($.location+be);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let be=0;be<$.locationSize;be++)S($.location+be,C/$.locationSize,B,I,he*j,(ge+C/$.locationSize*be)*j,ne)}else{if(me.isInstancedBufferAttribute){for(let K=0;K<$.locationSize;K++)m($.location+K,me.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let K=0;K<$.locationSize;K++)p($.location+K);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let K=0;K<$.locationSize;K++)S($.location+K,C/$.locationSize,B,I,C*j,C/$.locationSize*K*j,ne)}}else if(Y!==void 0){const I=Y[ee];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv($.location,I);break;case 3:s.vertexAttrib3fv($.location,I);break;case 4:s.vertexAttrib4fv($.location,I);break;default:s.vertexAttrib1fv($.location,I)}}}}w()}function O(){N();for(const M in n){const D=n[M];for(const W in D){const G=D[W];for(const Z in G)u(G[Z].object),delete G[Z];delete D[W]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const W in D){const G=D[W];for(const Z in G)u(G[Z].object),delete G[Z];delete D[W]}delete n[M.id]}function R(M){for(const D in n){const W=n[D];if(W[M.id]===void 0)continue;const G=W[M.id];for(const Z in G)u(G[Z].object),delete G[Z];delete W[M.id]}}function N(){E(),r=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function zh(s,e,t){let n;function i(l){n=l}function a(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(l[f],u[f]);else{h.multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function kh(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){return!(L!==Zt&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const R=L===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Cn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==En&&!R)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:T,maxSamples:O}}function Gh(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new yn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||a&&!p)a?u(null):l();else{const w=a?0:n,S=w*4;let T=m.clippingState||null;c.value=T,T=u(g,h,S,f);for(let O=0;O!==S;++O)T[O]=t[O];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,T=f;S!==_;++S,T+=4)r.copy(d[S]).applyMatrix4(w,o),r.normal.toArray(p,T),p[T+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Vh(s){let e=new WeakMap;function t(r,o){return o===Sa?r.mapping=xi:o===ba&&(r.mapping=Mi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Sa||o===ba)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ql(c.height);return l.fromEquirectangularTexture(s,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Jo extends $o{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Gr=[.125,.215,.35,.446,.526,.582],Vn=20,ra=new Jo,Vr=new Ge;let oa=null,ca=0,la=0,ua=!1;const kn=(1+Math.sqrt(5))/2,hi=1/kn,Hr=[new b(-kn,hi,0),new b(kn,hi,0),new b(-hi,0,kn),new b(hi,0,kn),new b(0,kn,-hi),new b(0,kn,hi),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Wr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,ca,la),this._renderer.xr.enabled=ua,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Cs,format:Zt,colorSpace:Pn,depthBuffer:!1},i=qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hh(a)),this._blurMaterial=Wh(a,e,t)}return i}_compileMaterial(e){const t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,i){const o=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Vr),u.toneMapping=Tn,u.autoClear=!1;const f=new ln({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Q(new Qe,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Vr),_=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const S=this._cubeSize;ds(i,w*S,m>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Q(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Hr[(i-a-1)%Hr.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Q(this._lodPlanes[i],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Vn-1),_=a/g,p=isFinite(a)?1+Math.floor(u*_):Vn;p>Vn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const m=[];let w=0;for(let R=0;R<Vn;++R){const N=R/_,E=Math.exp(-N*N/2);m.push(E),R===0?w+=E:R<p&&(w+=2*E)}for(let R=0;R<m.length;R++)m[R]=m[R]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const T=this._sizeLods[i],O=3*T*(i>S-pi?i-S+pi:0),L=4*(this._cubeSize-T);ds(t,O,L,3*T,2*T),c.setRenderTarget(t),c.render(d,ra)}}function Hh(s){const e=[],t=[],n=[];let i=s;const a=s-pi+1+Gr.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let c=1/o;r>s-pi?c=Gr[r-s+pi-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,w=new Float32Array(_*g*f),S=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let L=0;L<f;L++){const R=L%3*2/3-1,N=L>2?0:-1,E=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(E,_*g*L),S.set(h,p*g*L);const M=[L,L,L,L,L,L];T.set(M,m*g*L)}const O=new Pt;O.setAttribute("position",new Qt(w,_)),O.setAttribute("uv",new Qt(S,p)),O.setAttribute("faceIndex",new Qt(T,m)),e.push(O),i>pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qr(s,e,t){const n=new Wn(s,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wh(s,e,t){const n=new Float32Array(Vn),i=new b(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Xr(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Yr(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qh(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sa||c===ba,u=c===xi||c===Mi;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Wr(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Wr(s)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Xh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yh(s,e,t,n){const i={},a=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",r),delete i[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let S=0,T=w.length;S<T;S+=3){const O=w[S+0],L=w[S+1],R=w[S+2];h.push(O,L,L,R,R,O)}}else if(g!==void 0){const w=g.array;_=g.version;for(let S=0,T=w.length/3-1;S<T;S+=3){const O=S+0,L=S+1,R=S+2;h.push(O,L,L,R,R,O)}}else return;const p=new(ko(h)?Yo:Xo)(h,1);p.version=_;const m=a.get(d);m&&e.remove(m),a.set(d,p)}function u(d){const h=a.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function jh(s,e,t){let n;function i(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function c(h,f){s.drawElements(n,f,a,h*r),t.update(f,n,1)}function l(h,f,g){g!==0&&(s.drawElementsInstanced(n,f,a,h*r,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(h[p]/r,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,a,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}}function d(h,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/r,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,a,h,0,_,0,g);let m=0;for(let w=0;w<g;w++)m+=f[w];for(let w=0;w<_.length;w++)t.update(m,n,_[w])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $h(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kh(s,e,t){const n=new WeakMap,i=new nt;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let O=o.attributes.position.count*T,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*L*4*d),N=new Ho(R,O,L,d);N.type=En,N.needsUpdate=!0;const E=T*4;for(let D=0;D<d;D++){const W=m[D],G=w[D],Z=S[D],J=O*L*4*D;for(let Y=0;Y<W.count;Y++){const ee=Y*E;g===!0&&(i.fromBufferAttribute(W,Y),R[J+ee+0]=i.x,R[J+ee+1]=i.y,R[J+ee+2]=i.z,R[J+ee+3]=0),_===!0&&(i.fromBufferAttribute(G,Y),R[J+ee+4]=i.x,R[J+ee+5]=i.y,R[J+ee+6]=i.z,R[J+ee+7]=0),p===!0&&(i.fromBufferAttribute(Z,Y),R[J+ee+8]=i.x,R[J+ee+9]=i.y,R[J+ee+10]=i.z,R[J+ee+11]=Z.itemSize===4?i.w:1)}}h={count:d,texture:N,size:new xe(O,L)},n.set(o,h),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:a}}function Zh(s,e,t,n){let i=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class Qo extends Rt{constructor(e,t,n,i,a,r,o,c,l,u=gi){if(u!==gi&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gi&&(n=yi),n===void 0&&u===bi&&(n=Si),super(null,i,a,r,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ec=new Rt,tc=new Qo(1,1);tc.compareFunction=zo;const nc=new Ho,ic=new Fl,sc=new Ko,jr=[],$r=[],Kr=new Float32Array(16),Zr=new Float32Array(9),Jr=new Float32Array(4);function Ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=jr[i];if(a===void 0&&(a=new Float32Array(i),jr[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ls(s,e){let t=$r[e];t===void 0&&(t=new Int32Array(e),$r[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Jr.set(n),s.uniformMatrix2fv(this.addr,!1,Jr),gt(t,n)}}function sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Zr.set(n),s.uniformMatrix3fv(this.addr,!1,Zr),gt(t,n)}}function af(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Kr.set(n),s.uniformMatrix4fv(this.addr,!1,Kr),gt(t,n)}}function rf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const a=this.type===s.SAMPLER_2D_SHADOW?tc:ec;t.setTexture2D(e||a,i)}function mf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ic,i)}function gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sc,i)}function vf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nc,i)}function _f(s){switch(s){case 5126:return Jh;case 35664:return Qh;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return rf;case 35667:case 35671:return of;case 35668:case 35672:return cf;case 35669:case 35673:return lf;case 5125:return uf;case 36294:return df;case 36295:return hf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return vf}}function xf(s,e){s.uniform1fv(this.addr,e)}function Mf(s,e){const t=Ci(e,this.size,2);s.uniform2fv(this.addr,t)}function yf(s,e){const t=Ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Sf(s,e){const t=Ci(e,this.size,4);s.uniform4fv(this.addr,t)}function bf(s,e){const t=Ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ef(s,e){const t=Ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wf(s,e){const t=Ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tf(s,e){s.uniform1iv(this.addr,e)}function Af(s,e){s.uniform2iv(this.addr,e)}function Cf(s,e){s.uniform3iv(this.addr,e)}function Rf(s,e){s.uniform4iv(this.addr,e)}function Pf(s,e){s.uniform1uiv(this.addr,e)}function Lf(s,e){s.uniform2uiv(this.addr,e)}function If(s,e){s.uniform3uiv(this.addr,e)}function Df(s,e){s.uniform4uiv(this.addr,e)}function Uf(s,e,t){const n=this.cache,i=e.length,a=Ls(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ec,a[r])}function Nf(s,e,t){const n=this.cache,i=e.length,a=Ls(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||ic,a[r])}function Of(s,e,t){const n=this.cache,i=e.length,a=Ls(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||sc,a[r])}function Ff(s,e,t){const n=this.cache,i=e.length,a=Ls(t,i);mt(n,a)||(s.uniform1iv(this.addr,a),gt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||nc,a[r])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return yf;case 35666:return Sf;case 35674:return bf;case 35675:return Ef;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Lf;case 36295:return If;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Qr(s,e){s.seq.push(e),s.map[e.id]=e}function Vf(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const a=da.exec(n),r=da.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Qr(t,l===void 0?new zf(o,s,e):new kf(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Gf(o),Qr(t,d)),t=d}}}class vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Vf(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function eo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hf=37297;let Wf=0;function qf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Xf(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===Ss&&t===ys?n="LinearDisplayP3ToLinearSRGB":e===ys&&t===Ss&&(n="LinearSRGBToLinearDisplayP3"),s){case Pn:case Rs:return[n,"LinearTransferOETF"];case jt:case Ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function to(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+qf(s.getShaderSource(e),r)}else return i}function Yf(s,e){const t=Xf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jf(s,e){let t;switch(e){case Gc:t="Linear";break;case Vc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case Po:t="ACESFilmic";break;case qc:t="AgX";break;case Xc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $f(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function Kf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Ni(s){return s!==""}function no(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function io(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(Jf,ep)}const Qf=new Map;function ep(s,e){let t=He[e];if(t===void 0){const n=Qf.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(s){return s.replace(tp,np)}function np(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function ao(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ip(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function sp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case Mi:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ap(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function rp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ro:e="ENVMAP_BLENDING_MULTIPLY";break;case zc:e="ENVMAP_BLENDING_MIX";break;case kc:e="ENVMAP_BLENDING_ADD";break}return e}function op(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cp(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=ip(t),l=sp(t),u=ap(t),d=rp(t),h=op(t),f=$f(t),g=Kf(a),_=i.createProgram();let p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(p=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?He.tonemapping_pars_fragment:"",t.toneMapping!==Tn?jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Yf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),r=Ta(r),r=no(r,t),r=io(r,t),o=Ta(o),o=no(o,t),o=io(o,t),r=so(r),o=so(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=w+p+r,T=w+m+o,O=eo(i,i.VERTEX_SHADER,S),L=eo(i,i.FRAGMENT_SHADER,T);i.attachShader(_,O),i.attachShader(_,L),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(O).trim(),Z=i.getShaderInfoLog(L).trim();let J=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,O,L);else{const ee=to(i,O,"vertex"),$=to(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ee+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Z==="")&&(Y=!1);Y&&(D.diagnostics={runnable:J,programLog:W,vertexShader:{log:G,prefix:p},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(O),i.deleteShader(L),N=new vs(i,_),E=Zf(i,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Hf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=L,this}let lp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dp(e),t.set(e,n)),n}}class dp{constructor(e){this.id=lp++,this.code=e,this.usedTimes=0}}function hp(s,e,t,n,i,a,r){const o=new Wo,c=new up,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,M,D,W,G){const Z=W.fog,J=G.geometry,Y=E.isMeshStandardMaterial?W.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),$=ee&&ee.mapping===As?ee.image.height:null,me=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const I=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,C=I!==void 0?I.length:0;let re=0;J.morphAttributes.position!==void 0&&(re=1),J.morphAttributes.normal!==void 0&&(re=2),J.morphAttributes.color!==void 0&&(re=3);let ue,B,j,ne;if(me){const Ye=$t[me];ue=Ye.vertexShader,B=Ye.fragmentShader}else ue=E.vertexShader,B=E.fragmentShader,c.update(E),j=c.getVertexShaderID(E),ne=c.getFragmentShaderID(E);const K=s.getRenderTarget(),he=G.isInstancedMesh===!0,ge=G.isBatchedMesh===!0,be=!!E.map,P=!!E.matcap,Ee=!!ee,Ae=!!E.aoMap,Se=!!E.lightMap,_e=!!E.bumpMap,Ue=!!E.normalMap,Le=!!E.displacementMap,Pe=!!E.emissiveMap,Xe=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,H=E.clearcoat>0,te=E.dispersion>0,ie=E.iridescence>0,ae=E.sheen>0,Te=E.transmission>0,de=x&&!!E.anisotropyMap,le=H&&!!E.clearcoatMap,Fe=H&&!!E.clearcoatNormalMap,oe=H&&!!E.clearcoatRoughnessMap,Me=ie&&!!E.iridescenceMap,Ve=ie&&!!E.iridescenceThicknessMap,De=ae&&!!E.sheenColorMap,pe=ae&&!!E.sheenRoughnessMap,ze=!!E.specularMap,ke=!!E.specularColorMap,st=!!E.specularIntensityMap,v=Te&&!!E.transmissionMap,q=Te&&!!E.thicknessMap,z=!!E.gradientMap,X=!!E.alphaMap,se=E.alphaTest>0,Ce=!!E.alphaHash,Be=!!E.extensions;let at=Tn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(at=s.toneMapping);const ct={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:B,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ge,batchingColor:ge&&G._colorsTexture!==null,instancing:he,instancingColor:he&&G.instanceColor!==null,instancingMorph:he&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Pn,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:P,envMap:Ee,envMapMode:Ee&&ee.mapping,envMapCubeUVHeight:$,aoMap:Ae,lightMap:Se,bumpMap:_e,normalMap:Ue,displacementMap:h&&Le,emissiveMap:Pe,normalMapObjectSpace:Ue&&E.normalMapType===rl,normalMapTangentSpace:Ue&&E.normalMapType===Bo,metalnessMap:Xe,roughnessMap:A,anisotropy:x,anisotropyMap:de,clearcoat:H,clearcoatMap:le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:te,iridescence:ie,iridescenceMap:Me,iridescenceThicknessMap:Ve,sheen:ae,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:ze,specularColorMap:ke,specularIntensityMap:st,transmission:Te,transmissionMap:v,thicknessMap:q,gradientMap:z,opaque:E.transparent===!1&&E.blending===mi&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:se,alphaHash:Ce,combine:E.combine,mapUv:be&&_(E.map.channel),aoMapUv:Ae&&_(E.aoMap.channel),lightMapUv:Se&&_(E.lightMap.channel),bumpMapUv:_e&&_(E.bumpMap.channel),normalMapUv:Ue&&_(E.normalMap.channel),displacementMapUv:Le&&_(E.displacementMap.channel),emissiveMapUv:Pe&&_(E.emissiveMap.channel),metalnessMapUv:Xe&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:de&&_(E.anisotropyMap.channel),clearcoatMapUv:le&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(E.sheenRoughnessMap.channel),specularMapUv:ze&&_(E.specularMap.channel),specularColorMapUv:ke&&_(E.specularColorMap.channel),specularIntensityMapUv:st&&_(E.specularIntensityMap.channel),transmissionMapUv:v&&_(E.transmissionMap.channel),thicknessMapUv:q&&_(E.thicknessMap.channel),alphaMapUv:X&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ue||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(be||X),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xt,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Be&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function m(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),E.push(o.mask)}function T(E){const M=g[E.type];let D;if(M){const W=$t[M];D=$l.clone(W.uniforms)}else D=E.uniforms;return D}function O(E,M){let D;for(let W=0,G=u.length;W<G;W++){const Z=u[W];if(Z.cacheKey===M){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new cp(s,M,E,a),u.push(D)),D}function L(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:O,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:N}}function fp(){let s=new WeakMap;function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function t(a){s.delete(a)}function n(a,r,o){s.get(a)[r]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ro(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oo(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(d,h,f,g,_,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function o(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||pp),n.length>1&&n.sort(h||ro),i.length>1&&i.sort(h||ro)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:u,sort:l}}function mp(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new oo,s.set(n,[r])):i>=a.length?(r=new oo,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function gp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ge};break;case"SpotLight":t={position:new b,direction:new b,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function vp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _p=0;function xp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mp(s){const e=new gp,t=vp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,a=new it,r=new it;function o(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,w=0,S=0,T=0,O=0,L=0,R=0;l.sort(xp);for(let E=0,M=l.length;E<M;E++){const D=l[E],W=D.color,G=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*G,d+=W.g*G,h+=W.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],G);R++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,$=t.get(D);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(W).multiplyScalar(G),Y.distance=Z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;const ee=D.shadow;if(D.map&&(n.spotLightMap[O]=D.map,O++,ee.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[_]=ee.matrix,D.castShadow){const $=t.get(D);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=J,T++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(W).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ee=D.shadow,$=t.get(D);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[m]=Y,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==w||N.numPointShadows!==S||N.numSpotShadows!==T||N.numSpotMaps!==O||N.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=w,N.numPointShadows=S,N.numSpotShadows=T,N.numSpotMaps=O,N.numLightProbes=R,n.version=_p++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const S=l[m];if(S.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),d++}else if(S.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),r.identity(),a.copy(S.matrixWorld),a.premultiply(p),r.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function co(s){const e=new Mp(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function yp(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new co(s),e.set(i,[o])):a>=r.length?(o=new co(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Sp extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bp extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tp(s,e,t){let n=new La;const i=new xe,a=new xe,r=new nt,o=new Sp({depthPacking:al}),c=new bp,l={},u=t.maxTextureSize,d={[An]:Dt,[Dt]:An,[Xt]:Xt},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Ep,fragmentShader:wp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let m=this.type;this.render=function(L,R,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),W=s.state;W.setBlending(wn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=m!==on&&this.type===on,Z=m===on&&this.type!==on;for(let J=0,Y=L.length;J<Y;J++){const ee=L[J],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const me=$.getFrameExtents();if(i.multiply(me),a.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/me.x),i.x=a.x*me.x,$.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/me.y),i.y=a.y*me.y,$.mapSize.y=a.y)),$.map===null||G===!0||Z===!0){const C=this.type!==on?{minFilter:Gt,magFilter:Gt}:{};$.map!==null&&$.map.dispose(),$.map=new Wn(i.x,i.y,C),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const I=$.getViewportCount();for(let C=0;C<I;C++){const re=$.getViewport(C);r.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),W.viewport(r),$.updateMatrices(ee,C),n=$.getFrustum(),T(R,N,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===on&&w($,N),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(E,M,D)};function w(L,R){const N=e.update(_);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Wn(i.x,i.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(R,null,N,h,_,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(R,null,N,f,_,null)}function S(L,R,N,E){let M=null;const D=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,G=R.uuid;let Z=l[W];Z===void 0&&(Z={},l[W]=Z);let J=Z[G];J===void 0&&(J=M.clone(),Z[G]=J,R.addEventListener("dispose",O)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,E===on?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=s.properties.get(M);W.light=N}return M}function T(L,R,N,E,M){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===on)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const G=e.update(L),Z=L.material;if(Array.isArray(Z)){const J=G.groups;for(let Y=0,ee=J.length;Y<ee;Y++){const $=J[Y],me=Z[$.materialIndex];if(me&&me.visible){const I=S(L,me,E,M);L.onBeforeShadow(s,L,R,N,G,I,$),s.renderBufferDirect(N,null,G,I,L,$),L.onAfterShadow(s,L,R,N,G,I,$)}}}else if(Z.visible){const J=S(L,Z,E,M);L.onBeforeShadow(s,L,R,N,G,J,null),s.renderBufferDirect(N,null,G,J,L,null),L.onAfterShadow(s,L,R,N,G,J,null)}}const W=L.children;for(let G=0,Z=W.length;G<Z;G++)T(W[G],R,N,E,M)}function O(L){L.target.removeEventListener("dispose",O);for(const N in l){const E=l[N],M=L.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Ap(s){function e(){let v=!1;const q=new nt;let z=null;const X=new nt(0,0,0,0);return{setMask:function(se){z!==se&&!v&&(s.colorMask(se,se,se,se),z=se)},setLocked:function(se){v=se},setClear:function(se,Ce,Be,at,ct){ct===!0&&(se*=at,Ce*=at,Be*=at),q.set(se,Ce,Be,at),X.equals(q)===!1&&(s.clearColor(se,Ce,Be,at),X.copy(q))},reset:function(){v=!1,z=null,X.set(-1,0,0,0)}}}function t(){let v=!1,q=null,z=null,X=null;return{setTest:function(se){se?ne(s.DEPTH_TEST):K(s.DEPTH_TEST)},setMask:function(se){q!==se&&!v&&(s.depthMask(se),q=se)},setFunc:function(se){if(z!==se){switch(se){case Ic:s.depthFunc(s.NEVER);break;case Dc:s.depthFunc(s.ALWAYS);break;case Uc:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case Nc:s.depthFunc(s.EQUAL);break;case Oc:s.depthFunc(s.GEQUAL);break;case Fc:s.depthFunc(s.GREATER);break;case Bc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}z=se}},setLocked:function(se){v=se},setClear:function(se){X!==se&&(s.clearDepth(se),X=se)},reset:function(){v=!1,q=null,z=null,X=null}}}function n(){let v=!1,q=null,z=null,X=null,se=null,Ce=null,Be=null,at=null,ct=null;return{setTest:function(Ye){v||(Ye?ne(s.STENCIL_TEST):K(s.STENCIL_TEST))},setMask:function(Ye){q!==Ye&&!v&&(s.stencilMask(Ye),q=Ye)},setFunc:function(Ye,lt,ut){(z!==Ye||X!==lt||se!==ut)&&(s.stencilFunc(Ye,lt,ut),z=Ye,X=lt,se=ut)},setOp:function(Ye,lt,ut){(Ce!==Ye||Be!==lt||at!==ut)&&(s.stencilOp(Ye,lt,ut),Ce=Ye,Be=lt,at=ut)},setLocked:function(Ye){v=Ye},setClear:function(Ye){ct!==Ye&&(s.clearStencil(Ye),ct=Ye)},reset:function(){v=!1,q=null,z=null,X=null,se=null,Ce=null,Be=null,at=null,ct=null}}}const i=new e,a=new t,r=new n,o=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,w=null,S=null,T=null,O=null,L=new Ge(0,0,0),R=0,N=!1,E=null,M=null,D=null,W=null,G=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=Y>=2);let $=null,me={};const I=s.getParameter(s.SCISSOR_BOX),C=s.getParameter(s.VIEWPORT),re=new nt().fromArray(I),ue=new nt().fromArray(C);function B(v,q,z,X){const se=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(v,Ce),s.texParameteri(v,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(v,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<z;Be++)v===s.TEXTURE_3D||v===s.TEXTURE_2D_ARRAY?s.texImage3D(q,0,s.RGBA,1,1,X,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(q+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return Ce}const j={};j[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ne(s.DEPTH_TEST),a.setFunc(_s),_e(!1),Ue(Va),ne(s.CULL_FACE),Ae(wn);function ne(v){l[v]!==!0&&(s.enable(v),l[v]=!0)}function K(v){l[v]!==!1&&(s.disable(v),l[v]=!1)}function he(v,q){return u[v]!==q?(s.bindFramebuffer(v,q),u[v]=q,v===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=q),v===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=q),!0):!1}function ge(v,q){let z=h,X=!1;if(v){z=d.get(q),z===void 0&&(z=[],d.set(q,z));const se=v.textures;if(z.length!==se.length||z[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,Be=se.length;Ce<Be;Ce++)z[Ce]=s.COLOR_ATTACHMENT0+Ce;z.length=se.length,X=!0}}else z[0]!==s.BACK&&(z[0]=s.BACK,X=!0);X&&s.drawBuffers(z)}function be(v){return f!==v?(s.useProgram(v),f=v,!0):!1}const P={[Gn]:s.FUNC_ADD,[mc]:s.FUNC_SUBTRACT,[gc]:s.FUNC_REVERSE_SUBTRACT};P[vc]=s.MIN,P[_c]=s.MAX;const Ee={[xc]:s.ZERO,[Mc]:s.ONE,[yc]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[Ac]:s.SRC_ALPHA_SATURATE,[wc]:s.DST_COLOR,[bc]:s.DST_ALPHA,[Sc]:s.ONE_MINUS_SRC_COLOR,[ya]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[Ec]:s.ONE_MINUS_DST_ALPHA,[Cc]:s.CONSTANT_COLOR,[Rc]:s.ONE_MINUS_CONSTANT_COLOR,[Pc]:s.CONSTANT_ALPHA,[Lc]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(v,q,z,X,se,Ce,Be,at,ct,Ye){if(v===wn){g===!0&&(K(s.BLEND),g=!1);return}if(g===!1&&(ne(s.BLEND),g=!0),v!==pc){if(v!==_||Ye!==N){if((p!==Gn||S!==Gn)&&(s.blendEquation(s.FUNC_ADD),p=Gn,S=Gn),Ye)switch(v){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.ONE,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,w=null,T=null,O=null,L.set(0,0,0),R=0,_=v,N=Ye}return}se=se||q,Ce=Ce||z,Be=Be||X,(q!==p||se!==S)&&(s.blendEquationSeparate(P[q],P[se]),p=q,S=se),(z!==m||X!==w||Ce!==T||Be!==O)&&(s.blendFuncSeparate(Ee[z],Ee[X],Ee[Ce],Ee[Be]),m=z,w=X,T=Ce,O=Be),(at.equals(L)===!1||ct!==R)&&(s.blendColor(at.r,at.g,at.b,ct),L.copy(at),R=ct),_=v,N=!1}function Se(v,q){v.side===Xt?K(s.CULL_FACE):ne(s.CULL_FACE);let z=v.side===Dt;q&&(z=!z),_e(z),v.blending===mi&&v.transparent===!1?Ae(wn):Ae(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),a.setFunc(v.depthFunc),a.setTest(v.depthTest),a.setMask(v.depthWrite),i.setMask(v.colorWrite);const X=v.stencilWrite;r.setTest(X),X&&(r.setMask(v.stencilWriteMask),r.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),r.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Pe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):K(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(v){E!==v&&(v?s.frontFace(s.CW):s.frontFace(s.CCW),E=v)}function Ue(v){v!==hc?(ne(s.CULL_FACE),v!==M&&(v===Va?s.cullFace(s.BACK):v===fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):K(s.CULL_FACE),M=v}function Le(v){v!==D&&(J&&s.lineWidth(v),D=v)}function Pe(v,q,z){v?(ne(s.POLYGON_OFFSET_FILL),(W!==q||G!==z)&&(s.polygonOffset(q,z),W=q,G=z)):K(s.POLYGON_OFFSET_FILL)}function Xe(v){v?ne(s.SCISSOR_TEST):K(s.SCISSOR_TEST)}function A(v){v===void 0&&(v=s.TEXTURE0+Z-1),$!==v&&(s.activeTexture(v),$=v)}function x(v,q,z){z===void 0&&($===null?z=s.TEXTURE0+Z-1:z=$);let X=me[z];X===void 0&&(X={type:void 0,texture:void 0},me[z]=X),(X.type!==v||X.texture!==q)&&($!==z&&(s.activeTexture(z),$=z),s.bindTexture(v,q||j[v]),X.type=v,X.texture=q)}function H(){const v=me[$];v!==void 0&&v.type!==void 0&&(s.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Fe(){try{s.texStorage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function De(v){re.equals(v)===!1&&(s.scissor(v.x,v.y,v.z,v.w),re.copy(v))}function pe(v){ue.equals(v)===!1&&(s.viewport(v.x,v.y,v.z,v.w),ue.copy(v))}function ze(v,q){let z=c.get(q);z===void 0&&(z=new WeakMap,c.set(q,z));let X=z.get(v);X===void 0&&(X=s.getUniformBlockIndex(q,v.name),z.set(v,X))}function ke(v,q){const X=c.get(q).get(v);o.get(q)!==X&&(s.uniformBlockBinding(q,X,v.__bindingPointIndex),o.set(q,X))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},$=null,me={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,w=null,S=null,T=null,O=null,L=new Ge(0,0,0),R=0,N=!1,E=null,M=null,D=null,W=null,G=null,re.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),r.reset()}return{buffers:{color:i,depth:a,stencil:r},enable:ne,disable:K,bindFramebuffer:he,drawBuffers:ge,useProgram:be,setBlending:Ae,setMaterial:Se,setFlipSided:_e,setCullFace:Ue,setLineWidth:Le,setPolygonOffset:Pe,setScissorTest:Xe,activeTexture:A,bindTexture:x,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:Me,texImage3D:Ve,updateUBOMapping:ze,uniformBlockBinding:ke,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:ae,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:le,scissor:De,viewport:pe,reset:st}}function Cp(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):Es("canvas")}function _(A,x,H){let te=1;const ie=Xe(A);if((ie.width>H||ie.height>H)&&(te=H/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ae=Math.floor(te*ie.width),Te=Math.floor(te*ie.height);d===void 0&&(d=g(ae,Te));const de=x?g(ae,Te):d;return de.width=ae,de.height=Te,de.getContext("2d").drawImage(A,0,0,ae,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ae+"x"+Te+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Gt&&A.minFilter!==Yt}function m(A){s.generateMipmap(A)}function w(A,x,H,te,ie=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=x;if(x===s.RED&&(H===s.FLOAT&&(ae=s.R32F),H===s.HALF_FLOAT&&(ae=s.R16F),H===s.UNSIGNED_BYTE&&(ae=s.R8)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.R8UI),H===s.UNSIGNED_SHORT&&(ae=s.R16UI),H===s.UNSIGNED_INT&&(ae=s.R32UI),H===s.BYTE&&(ae=s.R8I),H===s.SHORT&&(ae=s.R16I),H===s.INT&&(ae=s.R32I)),x===s.RG&&(H===s.FLOAT&&(ae=s.RG32F),H===s.HALF_FLOAT&&(ae=s.RG16F),H===s.UNSIGNED_BYTE&&(ae=s.RG8)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.RG8UI),H===s.UNSIGNED_SHORT&&(ae=s.RG16UI),H===s.UNSIGNED_INT&&(ae=s.RG32UI),H===s.BYTE&&(ae=s.RG8I),H===s.SHORT&&(ae=s.RG16I),H===s.INT&&(ae=s.RG32I)),x===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),x===s.RGBA){const Te=ie?Ms:Ke.getTransfer(te);H===s.FLOAT&&(ae=s.RGBA32F),H===s.HALF_FLOAT&&(ae=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ae=Te===tt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(A,x){let H;return A?x===null||x===yi||x===Si?H=s.DEPTH24_STENCIL8:x===En?H=s.DEPTH32F_STENCIL8:x===xs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===Si?H=s.DEPTH_COMPONENT24:x===En?H=s.DEPTH_COMPONENT32F:x===xs&&(H=s.DEPTH_COMPONENT16),H}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function O(A){const x=A.target;x.removeEventListener("dispose",O),R(x),x.isVideoTexture&&u.delete(x)}function L(A){const x=A.target;x.removeEventListener("dispose",L),E(x)}function R(A){const x=n.get(A);if(x.__webglInit===void 0)return;const H=A.source,te=h.get(H);if(te){const ie=te[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(A),Object.keys(te).length===0&&h.delete(H)}n.remove(A)}function N(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const H=A.source,te=h.get(H);delete te[x.__cacheKey],r.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ie=0;ie<x.__webglFramebuffer[te].length;ie++)s.deleteFramebuffer(x.__webglFramebuffer[te][ie]);else s.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)s.deleteFramebuffer(x.__webglFramebuffer[te]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let te=0,ie=H.length;te<ie;te++){const ae=n.get(H[te]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),r.memory.textures--),n.remove(H[te])}n.remove(A)}let M=0;function D(){M=0}function W(){const A=M;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),M+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Z(A,x){const H=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,A,x);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function J(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function Y(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,x);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function ee(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){B(H,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}const $={[Ea]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},me={[Gt]:s.NEAREST,[Yc]:s.NEAREST_MIPMAP_NEAREST,[Wi]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Os]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},I={[ol]:s.NEVER,[fl]:s.ALWAYS,[cl]:s.LESS,[zo]:s.LEQUAL,[ll]:s.EQUAL,[hl]:s.GEQUAL,[ul]:s.GREATER,[dl]:s.NOTEQUAL};function C(A,x){if(x.type===En&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===Os||x.magFilter===Wi||x.magFilter===bn||x.minFilter===Yt||x.minFilter===Os||x.minFilter===Wi||x.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,$[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,$[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,$[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,me[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,I[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==Wi&&x.minFilter!==bn||x.type===En&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",O));const te=x.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const ae=G(x);if(ae!==A.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),ie[ae].usedTimes++;const Te=ie[A.__cacheKey];Te!==void 0&&(ie[A.__cacheKey].usedTimes--,Te.usedTimes===0&&N(x)),A.__cacheKey=ae,A.__webglTexture=ie[ae].texture}return H}function ue(A,x,H){let te=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=s.TEXTURE_3D);const ie=re(A,x),ae=x.source;t.bindTexture(te,A.__webglTexture,s.TEXTURE0+H);const Te=n.get(ae);if(ae.version!==Te.__version||ie===!0){t.activeTexture(s.TEXTURE0+H);const de=Ke.getPrimaries(Ke.workingColorSpace),le=x.colorSpace===Sn?null:Ke.getPrimaries(x.colorSpace),Fe=x.colorSpace===Sn||de===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=_(x.image,!1,i.maxTextureSize);oe=Pe(x,oe);const Me=a.convert(x.format,x.colorSpace),Ve=a.convert(x.type);let De=w(x.internalFormat,Me,Ve,x.colorSpace,x.isVideoTexture);C(te,x);let pe;const ze=x.mipmaps,ke=x.isVideoTexture!==!0,st=Te.__version===void 0||ie===!0,v=ae.dataReady,q=T(x,oe);if(x.isDepthTexture)De=S(x.format===bi,x.type),st&&(ke?t.texStorage2D(s.TEXTURE_2D,1,De,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,De,oe.width,oe.height,0,Me,Ve,null));else if(x.isDataTexture)if(ze.length>0){ke&&st&&t.texStorage2D(s.TEXTURE_2D,q,De,ze[0].width,ze[0].height);for(let z=0,X=ze.length;z<X;z++)pe=ze[z],ke?v&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,Me,Ve,pe.data):t.texImage2D(s.TEXTURE_2D,z,De,pe.width,pe.height,0,Me,Ve,pe.data);x.generateMipmaps=!1}else ke?(st&&t.texStorage2D(s.TEXTURE_2D,q,De,oe.width,oe.height),v&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Ve,oe.data)):t.texImage2D(s.TEXTURE_2D,0,De,oe.width,oe.height,0,Me,Ve,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,q,De,ze[0].width,ze[0].height,oe.depth);for(let z=0,X=ze.length;z<X;z++)if(pe=ze[z],x.format!==Zt)if(Me!==null)if(ke){if(v)if(x.layerUpdates.size>0){for(const se of x.layerUpdates){const Ce=pe.width*pe.height;t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,se,pe.width,pe.height,1,Me,pe.data.slice(Ce*se,Ce*(se+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,oe.depth,Me,pe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,De,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?v&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,oe.depth,Me,Ve,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,De,pe.width,pe.height,oe.depth,0,Me,Ve,pe.data)}else{ke&&st&&t.texStorage2D(s.TEXTURE_2D,q,De,ze[0].width,ze[0].height);for(let z=0,X=ze.length;z<X;z++)pe=ze[z],x.format!==Zt?Me!==null?ke?v&&t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,z,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?v&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,pe.width,pe.height,Me,Ve,pe.data):t.texImage2D(s.TEXTURE_2D,z,De,pe.width,pe.height,0,Me,Ve,pe.data)}else if(x.isDataArrayTexture)if(ke){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,q,De,oe.width,oe.height,oe.depth),v)if(x.layerUpdates.size>0){let z;switch(Ve){case s.UNSIGNED_BYTE:switch(Me){case s.ALPHA:z=1;break;case s.LUMINANCE:z=1;break;case s.LUMINANCE_ALPHA:z=2;break;case s.RGB:z=3;break;case s.RGBA:z=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:z=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const X=oe.width*oe.height*z;for(const se of x.layerUpdates)t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,Me,Ve,oe.data.slice(X*se,X*(se+1)));x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ve,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,Me,Ve,oe.data);else if(x.isData3DTexture)ke?(st&&t.texStorage3D(s.TEXTURE_3D,q,De,oe.width,oe.height,oe.depth),v&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ve,oe.data)):t.texImage3D(s.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,Me,Ve,oe.data);else if(x.isFramebufferTexture){if(st)if(ke)t.texStorage2D(s.TEXTURE_2D,q,De,oe.width,oe.height);else{let z=oe.width,X=oe.height;for(let se=0;se<q;se++)t.texImage2D(s.TEXTURE_2D,se,De,z,X,0,Me,Ve,null),z>>=1,X>>=1}}else if(ze.length>0){if(ke&&st){const z=Xe(ze[0]);t.texStorage2D(s.TEXTURE_2D,q,De,z.width,z.height)}for(let z=0,X=ze.length;z<X;z++)pe=ze[z],ke?v&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,Me,Ve,pe):t.texImage2D(s.TEXTURE_2D,z,De,Me,Ve,pe);x.generateMipmaps=!1}else if(ke){if(st){const z=Xe(oe);t.texStorage2D(s.TEXTURE_2D,q,De,z.width,z.height)}v&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ve,oe)}else t.texImage2D(s.TEXTURE_2D,0,De,Me,Ve,oe);p(x)&&m(te),Te.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function B(A,x,H){if(x.image.length!==6)return;const te=re(A,x),ie=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+H);const ae=n.get(ie);if(ie.version!==ae.__version||te===!0){t.activeTexture(s.TEXTURE0+H);const Te=Ke.getPrimaries(Ke.workingColorSpace),de=x.colorSpace===Sn?null:Ke.getPrimaries(x.colorSpace),le=x.colorSpace===Sn||Te===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let X=0;X<6;X++)!Fe&&!oe?Me[X]=_(x.image[X],!0,i.maxCubemapSize):Me[X]=oe?x.image[X].image:x.image[X],Me[X]=Pe(x,Me[X]);const Ve=Me[0],De=a.convert(x.format,x.colorSpace),pe=a.convert(x.type),ze=w(x.internalFormat,De,pe,x.colorSpace),ke=x.isVideoTexture!==!0,st=ae.__version===void 0||te===!0,v=ie.dataReady;let q=T(x,Ve);C(s.TEXTURE_CUBE_MAP,x);let z;if(Fe){ke&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,q,ze,Ve.width,Ve.height);for(let X=0;X<6;X++){z=Me[X].mipmaps;for(let se=0;se<z.length;se++){const Ce=z[se];x.format!==Zt?De!==null?ke?v&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Ce.width,Ce.height,De,pe,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,ze,Ce.width,Ce.height,0,De,pe,Ce.data)}}}else{if(z=x.mipmaps,ke&&st){z.length>0&&q++;const X=Xe(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,q,ze,X.width,X.height)}for(let X=0;X<6;X++)if(oe){ke?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Me[X].width,Me[X].height,De,pe,Me[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,Me[X].width,Me[X].height,0,De,pe,Me[X].data);for(let se=0;se<z.length;se++){const Be=z[se].image[X].image;ke?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Be.width,Be.height,De,pe,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,ze,Be.width,Be.height,0,De,pe,Be.data)}}else{ke?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,De,pe,Me[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,De,pe,Me[X]);for(let se=0;se<z.length;se++){const Ce=z[se];ke?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,De,pe,Ce.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,ze,De,pe,Ce.image[X])}}}p(x)&&m(s.TEXTURE_CUBE_MAP),ae.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function j(A,x,H,te,ie,ae){const Te=a.convert(H.format,H.colorSpace),de=a.convert(H.type),le=w(H.internalFormat,Te,de,H.colorSpace);if(!n.get(x).__hasExternalTextures){const oe=Math.max(1,x.width>>ae),Me=Math.max(1,x.height>>ae);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ae,le,oe,Me,x.depth,0,Te,de,null):t.texImage2D(ie,ae,le,oe,Me,0,Te,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ie,n.get(H).__webglTexture,0,_e(x)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ie,n.get(H).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(A,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const te=x.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ae=S(x.stencilBuffer,ie),Te=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=_e(x);Ue(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,ae,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ae,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ae,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,A)}else{const te=x.textures;for(let ie=0;ie<te.length;ie++){const ae=te[ie],Te=a.convert(ae.format,ae.colorSpace),de=a.convert(ae.type),le=w(ae.internalFormat,Te,de,ae.colorSpace),Fe=_e(x);H&&Ue(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,le,x.width,x.height):Ue(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,le,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,le,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function K(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,ie=_e(x);if(x.depthTexture.format===gi)Ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(x.depthTexture.format===bi)Ue(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function he(A){const x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");K(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=s.createRenderbuffer(),ne(x.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),ne(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(A,x,H){const te=n.get(A);x!==void 0&&j(te.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&he(A)}function be(A){const x=A.texture,H=n.get(A),te=n.get(x);A.addEventListener("dispose",L);const ie=A.textures,ae=A.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=x.version,r.memory.textures++),ae){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let le=0;le<x.mipmaps.length;le++)H.__webglFramebuffer[de][le]=s.createFramebuffer()}else H.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)H.__webglFramebuffer[de]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Te)for(let de=0,le=ie.length;de<le;de++){const Fe=n.get(ie[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Ue(A)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const le=ie[de];H.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Fe=a.convert(le.format,le.colorSpace),oe=a.convert(le.type),Me=w(le.internalFormat,Fe,oe,le.colorSpace,A.isXRRenderTarget===!0),Ve=_e(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,H.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),C(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)j(H.__webglFramebuffer[de][le],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,le);else j(H.__webglFramebuffer[de],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,le=ie.length;de<le;de++){const Fe=ie[de],oe=n.get(Fe);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),C(s.TEXTURE_2D,Fe),j(H.__webglFramebuffer,A,Fe,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),p(Fe)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),C(de,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)j(H.__webglFramebuffer[le],A,x,s.COLOR_ATTACHMENT0,de,le);else j(H.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,de,0);p(x)&&m(de),t.unbindTexture()}A.depthBuffer&&he(A)}function P(A){const x=A.textures;for(let H=0,te=x.length;H<te;H++){const ie=x[H];if(p(ie)){const ae=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get(ie).__webglTexture;t.bindTexture(ae,Te),m(ae),t.unbindTexture()}}}const Ee=[],Ae=[];function Se(A){if(A.samples>0){if(Ue(A)===!1){const x=A.textures,H=A.width,te=A.height;let ie=s.COLOR_BUFFER_BIT;const ae=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(A),de=x.length>1;if(de)for(let le=0;le<x.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let le=0;le<x.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[le]);const Fe=n.get(x[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,H,te,0,0,H,te,ie,s.NEAREST),c===!0&&(Ee.length=0,Ae.length=0,Ee.push(s.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(ae),Ae.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let le=0;le<x.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,Te.__webglColorRenderbuffer[le]);const Fe=n.get(x[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function _e(A){return Math.min(i.maxSamples,A.samples)}function Ue(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(A){const x=r.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Pe(A,x){const H=A.colorSpace,te=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Pn&&H!==Sn&&(Ke.getTransfer(H)===tt?(te!==Zt||ie!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=ge,this.setupRenderTarget=be,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ue}function Rp(s,e){function t(n,i=Sn){let a;const r=Ke.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===Do)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return s.BYTE;if(n===$c)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===Io)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===Cs)return s.HALF_FLOAT;if(n===Zc)return s.ALPHA;if(n===Jc)return s.RGB;if(n===Zt)return s.RGBA;if(n===Qc)return s.LUMINANCE;if(n===el)return s.LUMINANCE_ALPHA;if(n===gi)return s.DEPTH_COMPONENT;if(n===bi)return s.DEPTH_STENCIL;if(n===tl)return s.RED;if(n===No)return s.RED_INTEGER;if(n===nl)return s.RG;if(n===Oo)return s.RG_INTEGER;if(n===Fo)return s.RGBA_INTEGER;if(n===Fs||n===Bs||n===zs||n===ks)if(r===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===Ya||n===ja||n===$a)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Za||n===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ka||n===Za)return r===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ja)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===er||n===tr||n===nr||n===ir||n===sr||n===ar||n===rr||n===or||n===cr||n===lr||n===ur||n===dr||n===hr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Qa)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===er)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ir)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ar)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===or)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ur)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hr)return r===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===fr||n===pr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Gs)return r===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===mr||n===gr||n===vr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Gs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===mr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Pp extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class et extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:Ip,fragmentShader:Dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Np extends Yn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new Up,p=t.getContextAttributes();let m=null,w=null;const S=[],T=[],O=new xe;let L=null;const R=new Lt;R.layers.enable(1),R.viewport=new nt;const N=new Lt;N.layers.enable(2),N.viewport=new nt;const E=[R,N],M=new Pp;M.layers.enable(1),M.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=S[B];return j===void 0&&(j=new ha,S[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=S[B];return j===void 0&&(j=new ha,S[B]=j),j.getGripSpace()},this.getHand=function(B){let j=S[B];return j===void 0&&(j=new ha,S[B]=j),j.getHandSpace()};function G(B){const j=T.indexOf(B.inputSource);if(j===-1)return;const ne=S[j];ne!==void 0&&(ne.update(B.inputSource,B.frame,l||r),ne.dispatchEvent({type:B.type,data:B.inputSource}))}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",J);for(let B=0;B<S.length;B++){const j=T[B];j!==null&&(T[B]=null,S[B].disconnect(j))}D=null,W=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,i=null,w=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Wn(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ne=null,K=null;p.depth&&(K=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=p.stencil?bi:gi,ne=p.stencil?Si:yi);const he={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:a};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(he),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Wn(h.textureWidth,h.textureHeight,{format:Zt,type:Cn,depthTexture:new Qo(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function J(B){for(let j=0;j<B.removed.length;j++){const ne=B.removed[j],K=T.indexOf(ne);K>=0&&(T[K]=null,S[K].disconnect(ne))}for(let j=0;j<B.added.length;j++){const ne=B.added[j];let K=T.indexOf(ne);if(K===-1){for(let ge=0;ge<S.length;ge++)if(ge>=T.length){T.push(ne),K=ge;break}else if(T[ge]===null){T[ge]=ne,K=ge;break}if(K===-1)break}const he=S[K];he&&he.connect(ne)}}const Y=new b,ee=new b;function $(B,j,ne){Y.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(ne.matrixWorld);const K=Y.distanceTo(ee),he=j.projectionMatrix.elements,ge=ne.projectionMatrix.elements,be=he[14]/(he[10]-1),P=he[14]/(he[10]+1),Ee=(he[9]+1)/he[5],Ae=(he[9]-1)/he[5],Se=(he[8]-1)/he[0],_e=(ge[8]+1)/ge[0],Ue=be*Se,Le=be*_e,Pe=K/(-Se+_e),Xe=Pe*-Se;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Xe),B.translateZ(Pe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const A=be+Pe,x=P+Pe,H=Ue-Xe,te=Le+(K-Xe),ie=Ee*P/x*A,ae=Ae*P/x*A;B.projectionMatrix.makePerspective(H,te,ie,ae,A,x),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function me(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),M.near=N.near=R.near=B.near,M.far=N.far=R.far=B.far,(D!==M.near||W!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far,R.near=D,R.far=W,N.near=D,N.far=W,R.updateProjectionMatrix(),N.updateProjectionMatrix(),B.updateProjectionMatrix());const j=B.parent,ne=M.cameras;me(M,j);for(let K=0;K<ne.length;K++)me(ne[K],j);ne.length===2?$(M,R,N):M.projectionMatrix.copy(R.projectionMatrix),I(B,M,j)};function I(B,j,ne){ne===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ne.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ei*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let C=null;function re(B,j){if(u=j.getViewerPose(l||r),g=j,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let K=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,K=!0);for(let ge=0;ge<ne.length;ge++){const be=ne[ge];let P=null;if(f!==null)P=f.getViewport(be);else{const Ae=d.getViewSubImage(h,be);P=Ae.viewport,ge===0&&(e.setRenderTargetTextures(w,Ae.colorTexture,h.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(w))}let Ee=E[ge];Ee===void 0&&(Ee=new Lt,Ee.layers.enable(ge),Ee.viewport=new nt,E[ge]=Ee),Ee.matrix.fromArray(be.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(be.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(P.x,P.y,P.width,P.height),ge===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),K===!0&&M.cameras.push(Ee)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")){const ge=d.getDepthInformation(ne[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,i.renderState)}}for(let ne=0;ne<S.length;ne++){const K=T[ne],he=S[ne];K!==null&&he!==void 0&&he.update(K,j,l||r)}C&&C(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ue=new Zo;ue.setAnimationLoop(re),this.setAnimationLoop=function(B){C=B},this.dispose=function(){}}}const zn=new Ct,Op=new it;function Fp(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,jo(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,w,S,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m)):m.isMeshStandardMaterial?(a(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),_(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,w,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=e.get(m),S=w.envMap,T=w.envMapRotation;S&&(p.envMap.value=S,zn.copy(T),zn.x*=-1,zn.y*=-1,zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(zn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bp(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const T=S.program;n.uniformBlockBinding(w,T)}function l(w,S){let T=i[w.id];T===void 0&&(g(w),T=u(w),i[w.id]=T,w.addEventListener("dispose",p));const O=S.program;n.updateUBOMapping(w,O);const L=e.render.frame;a[w.id]!==L&&(h(w),a[w.id]=L)}function u(w){const S=d();w.__bindingPointIndex=S;const T=s.createBuffer(),O=w.__size,L=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,O,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,T),T}function d(){for(let w=0;w<o;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const S=i[w.id],T=w.uniforms,O=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let L=0,R=T.length;L<R;L++){const N=Array.isArray(T[L])?T[L]:[T[L]];for(let E=0,M=N.length;E<M;E++){const D=N[E];if(f(D,L,E,O)===!0){const W=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let J=0;J<G.length;J++){const Y=G[J],ee=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,W+Z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,S,T,O){const L=w.value,R=S+"_"+T;if(O[R]===void 0)return typeof L=="number"||typeof L=="boolean"?O[R]=L:O[R]=L.clone(),!0;{const N=O[R];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return O[R]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(w){const S=w.uniforms;let T=0;const O=16;for(let R=0,N=S.length;R<N;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,D=E.length;M<D;M++){const W=E[M],G=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,J=G.length;Z<J;Z++){const Y=G[Z],ee=_(Y),$=T%O;$!==0&&O-$<ee.boundary&&(T+=O-$),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=ee.storage}}}const L=T%O;return L>0&&(T+=O-L),w.__size=T,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){const S=w.target;S.removeEventListener("dispose",p);const T=r.indexOf(S.__bindingPointIndex);r.splice(T,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function m(){for(const w in i)s.deleteBuffer(i[w]);r=[],i={},a={}}return{bind:c,update:l,dispose:m}}class zp{constructor(e={}){const{canvas:t=Pl(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Tn,this.toneMappingExposure=1;const S=this;let T=!1,O=0,L=0,R=null,N=-1,E=null;const M=new nt,D=new nt;let W=null;const G=new Ge(0);let Z=0,J=t.width,Y=t.height,ee=1,$=null,me=null;const I=new nt(0,0,J,Y),C=new nt(0,0,J,Y);let re=!1;const ue=new La;let B=!1,j=!1;const ne=new it,K=new b,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function be(){return R===null?ee:1}let P=n;function Ee(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",X,!1),P===null){const U="webgl2";if(P=Ee(U,y),P===null)throw Ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ae,Se,_e,Ue,Le,Pe,Xe,A,x,H,te,ie,ae,Te,de,le,Fe,oe,Me,Ve,De,pe,ze,ke;function st(){Ae=new Xh(P),Ae.init(),pe=new Rp(P,Ae),Se=new kh(P,Ae,e,pe),_e=new Ap(P),Ue=new $h(P),Le=new fp,Pe=new Cp(P,Ae,_e,Le,Se,pe,Ue),Xe=new Vh(S),A=new qh(S),x=new nu(P),ze=new Bh(P,x),H=new Yh(P,x,Ue,ze),te=new Zh(P,H,x,Ue),Me=new Kh(P,Se,Pe),le=new Gh(Le),ie=new hp(S,Xe,A,Ae,Se,ze,le),ae=new Fp(S,Le),Te=new mp,de=new yp(Ae),oe=new Fh(S,Xe,A,_e,te,h,c),Fe=new Tp(S,te,Se),ke=new Bp(P,Ue,Se,_e),Ve=new zh(P,Ae,Ue),De=new jh(P,Ae,Ue),Ue.programs=ie.programs,S.capabilities=Se,S.extensions=Ae,S.properties=Le,S.renderLists=Te,S.shadowMap=Fe,S.state=_e,S.info=Ue}st();const v=new Np(S,P);this.xr=v,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(J,Y,!1))},this.getSize=function(y){return y.set(J,Y)},this.setSize=function(y,U,k=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,Y=U,t.width=Math.floor(y*ee),t.height=Math.floor(U*ee),k===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(J*ee,Y*ee).floor()},this.setDrawingBufferSize=function(y,U,k){J=y,Y=U,ee=k,t.width=Math.floor(y*k),t.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(I)},this.setViewport=function(y,U,k,V){y.isVector4?I.set(y.x,y.y,y.z,y.w):I.set(y,U,k,V),_e.viewport(M.copy(I).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(C)},this.setScissor=function(y,U,k,V){y.isVector4?C.set(y.x,y.y,y.z,y.w):C.set(y,U,k,V),_e.scissor(D.copy(C).multiplyScalar(ee).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(y){_e.setScissorTest(re=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(y=!0,U=!0,k=!0){let V=0;if(y){let F=!1;if(R!==null){const ce=R.texture.format;F=ce===Fo||ce===Oo||ce===No}if(F){const ce=R.texture.type,ve=ce===Cn||ce===yi||ce===xs||ce===Si||ce===Do||ce===Uo,ye=oe.getClearColor(),we=oe.getClearAlpha(),Ne=ye.r,Oe=ye.g,Ie=ye.b;ve?(f[0]=Ne,f[1]=Oe,f[2]=Ie,f[3]=we,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ne,g[1]=Oe,g[2]=Ie,g[3]=we,P.clearBufferiv(P.COLOR,0,g))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),k&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",X,!1),Te.dispose(),de.dispose(),Le.dispose(),Xe.dispose(),A.dispose(),te.dispose(),ze.dispose(),ke.dispose(),ie.dispose(),v.dispose(),v.removeEventListener("sessionstart",lt),v.removeEventListener("sessionend",ut),Ut.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=Ue.autoReset,U=Fe.enabled,k=Fe.autoUpdate,V=Fe.needsUpdate,F=Fe.type;st(),Ue.autoReset=y,Fe.enabled=U,Fe.autoUpdate=k,Fe.needsUpdate=V,Fe.type=F}function X(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const U=y.target;U.removeEventListener("dispose",se),Ce(U)}function Ce(y){Be(y),Le.remove(y)}function Be(y){const U=Le.get(y).programs;U!==void 0&&(U.forEach(function(k){ie.releaseProgram(k)}),y.isShaderMaterial&&ie.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,V,F,ce){U===null&&(U=he);const ve=F.isMesh&&F.matrixWorld.determinant()<0,ye=cc(y,U,k,V,F);_e.setMaterial(V,ve);let we=k.index,Ne=1;if(V.wireframe===!0){if(we=H.getWireframeAttribute(k),we===void 0)return;Ne=2}const Oe=k.drawRange,Ie=k.attributes.position;let je=Oe.start*Ne,rt=(Oe.start+Oe.count)*Ne;ce!==null&&(je=Math.max(je,ce.start*Ne),rt=Math.min(rt,(ce.start+ce.count)*Ne)),we!==null?(je=Math.max(je,0),rt=Math.min(rt,we.count)):Ie!=null&&(je=Math.max(je,0),rt=Math.min(rt,Ie.count));const ot=rt-je;if(ot<0||ot===1/0)return;ze.setup(F,V,ye,k,we);let Ot,$e=Ve;if(we!==null&&(Ot=x.get(we),$e=De,$e.setIndex(Ot)),F.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*be()),$e.setMode(P.LINES)):$e.setMode(P.TRIANGLES);else if(F.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),_e.setLineWidth(Re*be()),F.isLineSegments?$e.setMode(P.LINES):F.isLineLoop?$e.setMode(P.LINE_LOOP):$e.setMode(P.LINE_STRIP)}else F.isPoints?$e.setMode(P.POINTS):F.isSprite&&$e.setMode(P.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?$e.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):$e.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)$e.renderInstances(je,ot,F.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Et=Math.min(k.instanceCount,Re);$e.renderInstances(je,ot,Et)}else $e.render(je,ot)};function at(y,U,k){y.transparent===!0&&y.side===Xt&&y.forceSinglePass===!1?(y.side=Dt,y.needsUpdate=!0,Vi(y,U,k),y.side=An,y.needsUpdate=!0,Vi(y,U,k),y.side=Xt):Vi(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),p=de.get(k),p.init(U),w.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==k&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return y.traverse(function(F){const ce=F.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const ye=ce[ve];at(ye,k,F),V.add(ye)}else at(ce,k,F),V.add(ce)}),w.pop(),p=null,V},this.compileAsync=function(y,U,k=null){const V=this.compile(y,U,k);return new Promise(F=>{function ce(){if(V.forEach(function(ve){Le.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){F(y);return}setTimeout(ce,10)}Ae.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ct=null;function Ye(y){ct&&ct(y)}function lt(){Ut.stop()}function ut(){Ut.start()}const Ut=new Zo;Ut.setAnimationLoop(Ye),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(y){ct=y,v.setAnimationLoop(y),y===null?Ut.stop():Ut.start()},v.addEventListener("sessionstart",lt),v.addEventListener("sessionend",ut),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(U),U=v.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,R),p=de.get(y,w.length),p.init(U),w.push(p),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ue.setFromProjectionMatrix(ne),j=this.localClippingEnabled,B=le.init(this.clippingPlanes,j),_=Te.get(y,m.length),_.init(),m.push(_),v.enabled===!0&&v.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&Nt(ce,U,-1/0,S.sortObjects)}Nt(y,U,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort($,me),ge=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,ge&&oe.addToRenderList(_,y),this.info.render.frame++,B===!0&&le.beginShadows();const k=p.state.shadowsArray;Fe.render(k,y,U),B===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(p.setupLights(),U.isArrayCamera){const ce=U.cameras;if(F.length>0)for(let ve=0,ye=ce.length;ve<ye;ve++){const we=ce[ve];Ln(V,F,y,we)}ge&&oe.render(y);for(let ve=0,ye=ce.length;ve<ye;ve++){const we=ce[ve];dn(_,y,we,we.viewport)}}else F.length>0&&Ln(V,F,y,U),ge&&oe.render(y),dn(_,y,U);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,U),ze.resetDefaultState(),N=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],B===!0&&le.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Nt(y,U,k,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ue.intersectsSprite(y)){V&&K.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const ve=te.update(y),ye=y.material;ye.visible&&_.push(y,ve,ye,k,K.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ue.intersectsObject(y))){const ve=te.update(y),ye=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),K.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),K.copy(ve.boundingSphere.center)),K.applyMatrix4(y.matrixWorld).applyMatrix4(ne)),Array.isArray(ye)){const we=ve.groups;for(let Ne=0,Oe=we.length;Ne<Oe;Ne++){const Ie=we[Ne],je=ye[Ie.materialIndex];je&&je.visible&&_.push(y,ve,je,k,K.z,Ie)}}else ye.visible&&_.push(y,ve,ye,k,K.z,null)}}const ce=y.children;for(let ve=0,ye=ce.length;ve<ye;ve++)Nt(ce[ve],U,k,V)}function dn(y,U,k,V){const F=y.opaque,ce=y.transmissive,ve=y.transparent;p.setupLightsView(k),B===!0&&le.setGlobalState(S.clippingPlanes,k),V&&_e.viewport(M.copy(V)),F.length>0&&In(F,U,k),ce.length>0&&In(ce,U,k),ve.length>0&&In(ve,U,k),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ln(y,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Wn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Cs:Cn,minFilter:bn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ce=p.state.transmissionRenderTarget[V.id],ve=V.viewport||M;ce.setSize(ve.z,ve.w);const ye=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(G),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),ge?oe.render(k):S.clear();const we=S.toneMapping;S.toneMapping=Tn;const Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),B===!0&&le.setGlobalState(S.clippingPlanes,V),In(y,k,V),Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ie=0,je=U.length;Ie<je;Ie++){const rt=U[Ie],ot=rt.object,Ot=rt.geometry,$e=rt.material,Re=rt.group;if($e.side===Xt&&ot.layers.test(V.layers)){const Et=$e.side;$e.side=Dt,$e.needsUpdate=!0,Ba(ot,k,V,Ot,$e,Re),$e.side=Et,$e.needsUpdate=!0,Oe=!0}}Oe===!0&&(Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce))}S.setRenderTarget(ye),S.setClearColor(G,Z),Ne!==void 0&&(V.viewport=Ne),S.toneMapping=we}function In(y,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ce=y.length;F<ce;F++){const ve=y[F],ye=ve.object,we=ve.geometry,Ne=V===null?ve.material:V,Oe=ve.group;ye.layers.test(k.layers)&&Ba(ye,U,k,we,Ne,Oe)}}function Ba(y,U,k,V,F,ce){y.onBeforeRender(S,U,k,V,F,ce),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(S,U,k,V,y,ce),F.transparent===!0&&F.side===Xt&&F.forceSinglePass===!1?(F.side=Dt,F.needsUpdate=!0,S.renderBufferDirect(k,U,V,F,y,ce),F.side=An,F.needsUpdate=!0,S.renderBufferDirect(k,U,V,F,y,ce),F.side=Xt):S.renderBufferDirect(k,U,V,F,y,ce),y.onAfterRender(S,U,k,V,F,ce)}function Vi(y,U,k){U.isScene!==!0&&(U=he);const V=Le.get(y),F=p.state.lights,ce=p.state.shadowsArray,ve=F.state.version,ye=ie.getParameters(y,F.state,ce,U,k),we=ie.getProgramCacheKey(ye);let Ne=V.programs;V.environment=y.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(y.isMeshStandardMaterial?A:Xe).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",se),Ne=new Map,V.programs=Ne);let Oe=Ne.get(we);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===ve)return ka(y,ye),Oe}else ye.uniforms=ie.getUniforms(y),y.onBuild(k,ye,S),y.onBeforeCompile(ye,S),Oe=ie.acquireProgram(ye,we),Ne.set(we,Oe),V.uniforms=ye.uniforms;const Ie=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=le.uniform),ka(y,ye),V.needsLights=uc(y),V.lightsStateVersion=ve,V.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function za(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=vs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ka(y,U){const k=Le.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function cc(y,U,k,V,F){U.isScene!==!0&&(U=he),Pe.resetTextureUnits();const ce=U.fog,ve=V.isMeshStandardMaterial?U.environment:null,ye=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pn,we=(V.isMeshStandardMaterial?A:Xe).get(V.envMap||ve),Ne=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color;let ot=Tn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ot=S.toneMapping);const Ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$e=Ot!==void 0?Ot.length:0,Re=Le.get(V),Et=p.state.lights;if(B===!0&&(j===!0||y!==E)){const zt=y===E&&V.id===N;le.setState(V,y,zt)}let Je=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Et.state.version||Re.outputColorSpace!==ye||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==we||V.fog===!0&&Re.fog!==ce||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Oe||Re.morphTargets!==Ie||Re.morphNormals!==je||Re.morphColors!==rt||Re.toneMapping!==ot||Re.morphTargetsCount!==$e)&&(Je=!0):(Je=!0,Re.__version=V.version);let en=Re.currentProgram;Je===!0&&(en=Vi(V,U,F));let Hi=!1,Dn=!1,Ds=!1;const vt=en.getUniforms(),hn=Re.uniforms;if(_e.useProgram(en.program)&&(Hi=!0,Dn=!0,Ds=!0),V.id!==N&&(N=V.id,Dn=!0),Hi||E!==y){vt.setValue(P,"projectionMatrix",y.projectionMatrix),vt.setValue(P,"viewMatrix",y.matrixWorldInverse);const zt=vt.map.cameraPosition;zt!==void 0&&zt.setValue(P,K.setFromMatrixPosition(y.matrixWorld)),Se.logarithmicDepthBuffer&&vt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Dn=!0,Ds=!0)}if(F.isSkinnedMesh){vt.setOptional(P,F,"bindMatrix"),vt.setOptional(P,F,"bindMatrixInverse");const zt=F.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),vt.setValue(P,"boneTexture",zt.boneTexture,Pe))}F.isBatchedMesh&&(vt.setOptional(P,F,"batchingTexture"),vt.setValue(P,"batchingTexture",F._matricesTexture,Pe),vt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(P,"batchingColorTexture",F._colorsTexture,Pe));const Us=k.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Me.update(F,k,en),(Dn||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,vt.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=we,hn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Dn&&(vt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&lc(hn,Ds),ce&&V.fog===!0&&ae.refreshFogUniforms(hn,ce),ae.refreshMaterialUniforms(hn,V,ee,Y,p.state.transmissionRenderTarget[y.id]),vs.upload(P,za(Re),hn,Pe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(P,za(Re),hn,Pe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(P,"center",F.center),vt.setValue(P,"modelViewMatrix",F.modelViewMatrix),vt.setValue(P,"normalMatrix",F.normalMatrix),vt.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zt=V.uniformsGroups;for(let Ns=0,dc=zt.length;Ns<dc;Ns++){const Ga=zt[Ns];ke.update(Ga,en),ke.bind(Ga,en)}}return en}function lc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function uc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,k){Le.get(y.texture).__webglTexture=U,Le.get(y.depthTexture).__webglTexture=k;const V=Le.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const k=Le.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){R=y,O=U,L=k;let V=!0,F=null,ce=!1,ve=!1;if(y){const we=Le.get(y);we.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(P.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?Pe.setupRenderTarget(y):we.__hasExternalTextures&&Pe.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Oe=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?F=Oe[U][k]:F=Oe[U],ce=!0):y.samples>0&&Pe.useMultisampledRTT(y)===!1?F=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[k]:F=Oe,M.copy(y.viewport),D.copy(y.scissor),W=y.scissorTest}else M.copy(I).multiplyScalar(ee).floor(),D.copy(C).multiplyScalar(ee).floor(),W=re;if(_e.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&_e.drawBuffers(y,F),_e.viewport(M),_e.scissor(D),_e.setScissorTest(W),ce){const we=Le.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,k)}else if(ve){const we=Le.get(y.texture),Ne=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,k||0,Ne)}N=-1},this.readRenderTargetPixels=function(y,U,k,V,F,ce,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){_e.bindFramebuffer(P.FRAMEBUFFER,ye);try{const we=y.texture,Ne=we.format,Oe=we.type;if(!Se.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&k>=0&&k<=y.height-F&&P.readPixels(U,k,V,F,pe.convert(Ne),pe.convert(Oe),ce)}finally{const we=R!==null?Le.get(R).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,V,F,ce,ve){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){_e.bindFramebuffer(P.FRAMEBUFFER,ye);try{const we=y.texture,Ne=we.format,Oe=we.type;if(!Se.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-V&&k>=0&&k<=y.height-F){const Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(U,k,V,F,pe.convert(Ne),pe.convert(Oe),0),P.flush();const je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Ll(P,je,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce)}finally{P.deleteBuffer(Ie),P.deleteSync(je)}return ce}}finally{const we=R!==null?Le.get(R).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-k),F=Math.floor(y.image.width*V),ce=Math.floor(y.image.height*V),ve=U!==null?U.x:0,ye=U!==null?U.y:0;Pe.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ve,ye,F,ce),_e.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,V=null,F=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let ce,ve,ye,we,Ne,Oe;k!==null?(ce=k.max.x-k.min.x,ve=k.max.y-k.min.y,ye=k.min.x,we=k.min.y):(ce=y.image.width,ve=y.image.height,ye=0,we=0),V!==null?(Ne=V.x,Oe=V.y):(Ne=0,Oe=0);const Ie=pe.convert(U.format),je=pe.convert(U.type);Pe.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ot=P.getParameter(P.UNPACK_SKIP_PIXELS),$e=P.getParameter(P.UNPACK_SKIP_ROWS),Re=P.getParameter(P.UNPACK_SKIP_IMAGES),Et=y.isCompressedTexture?y.mipmaps[F]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Ne,Oe,ce,ve,Ie,je,Et.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Ne,Oe,Et.width,Et.height,Ie,Et.data):P.texSubImage2D(P.TEXTURE_2D,F,Ne,Oe,Ie,je,Et),P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,$e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,V=null,F=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0);let ce,ve,ye,we,Ne,Oe,Ie,je,rt;const ot=y.isCompressedTexture?y.mipmaps[F]:y.image;k!==null?(ce=k.max.x-k.min.x,ve=k.max.y-k.min.y,ye=k.max.z-k.min.z,we=k.min.x,Ne=k.min.y,Oe=k.min.z):(ce=ot.width,ve=ot.height,ye=ot.depth,we=0,Ne=0,Oe=0),V!==null?(Ie=V.x,je=V.y,rt=V.z):(Ie=0,je=0,rt=0);const Ot=pe.convert(U.format),$e=pe.convert(U.type);let Re;if(U.isData3DTexture)Pe.setTexture3D(U,0),Re=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Pe.setTexture2DArray(U,0),Re=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Et=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),Hi=P.getParameter(P.UNPACK_SKIP_ROWS),Dn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Oe),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Re,F,Ie,je,rt,ce,ve,ye,Ot,$e,ot.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,F,Ie,je,rt,ce,ve,ye,Ot,ot.data):P.texSubImage3D(Re,F,Ie,je,rt,ce,ve,ye,Ot,$e,ot),P.pixelStorei(P.UNPACK_ROW_LENGTH,Et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Dn),F===0&&U.generateMipmaps&&P.generateMipmap(Re),_e.unbindTexture()},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&Pe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Pe.setTextureCube(y,0):y.isData3DTexture?Pe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Pe.setTexture2DArray(y,0):Pe.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){O=0,L=0,R=null,_e.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ca?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Rs?"display-p3":"srgb"}}class Da{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ct,this.environmentIntensity=1,this.environmentRotation=new Ct,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ac extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ws=new b,Ts=new b,lo=new it,Di=new Pa,hs=new Ps,fa=new b,uo=new b;class Gp extends pt{constructor(e=new Pt,t=new ac){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)ws.fromBufferAttribute(t,i-1),Ts.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ws.distanceTo(Ts);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(i),hs.radius+=a,e.ray.intersectsSphere(hs)===!1)return;lo.copy(i).invert(),Di.copy(e.ray).applyMatrix4(lo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),w=u.getX(_+1),S=fs(this,e,Di,c,m,w);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=fs(this,e,Di,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,p=g-1;_<p;_+=l){const m=fs(this,e,Di,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=fs(this,e,Di,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function fs(s,e,t,n,i,a){const r=s.geometry.attributes.position;if(ws.fromBufferAttribute(r,i),Ts.fromBufferAttribute(r,a),t.distanceSqToSegment(ws,Ts,fa,uo)>n)return;fa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fa);if(!(c<e.near||c>e.far))return{distance:c,point:uo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const ho=new b,fo=new b;class Vp extends Gp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)ho.fromBufferAttribute(t,i),fo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ho.distanceTo(fo);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends Rt{constructor(e,t,n,i,a,r,o,c,l){super(e,t,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(a-1);const u=n[i],h=n[i+1]-u,f=(r-u)/h;return(i+f)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),c=t||(r.isVector2?new xe:new b);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],a=[],r=[],o=new b,c=new it;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}a[0]=new b,r[0]=new b;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(i[f],a[f])}if(t===!0){let f=Math.acos(Mt(a[0].dot(a[e]),-1,1));f/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rc extends un{constructor(e=0,t=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const n=t,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wp extends rc{constructor(e,t,n,i,a,r){super(e,t,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ua(){let s=0,e=0,t=0,n=0;function i(a,r,o,c){s=a,e=o,t=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){i(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,d){let h=(r-a)/l-(o-a)/(l+u)+(o-r)/u,f=(o-r)/u-(c-r)/(u+d)+(c-o)/d;h*=u,f*=u,i(r,o,h,f)},calc:function(a){const r=a*a,o=r*a;return s+e*a+t*r+n*o}}}const ps=new b,pa=new Ua,ma=new Ua,ga=new Ua;class xt extends un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,a=i.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%a]:(ps.subVectors(i[0],i[1]).add(i[0]),l=ps);const d=i[o%a],h=i[(o+1)%a];if(this.closed||o+2<a?u=i[(o+2)%a]:(ps.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),pa.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,p),ma.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,p),ga.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ma.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ga.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function po(s,e,t,n,i){const a=(n-e)*.5,r=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+a+r)*c+(-3*t+3*n-2*a-r)*o+a*s+t}function qp(s,e){const t=1-s;return t*t*e}function Xp(s,e){return 2*(1-s)*s*e}function Yp(s,e){return s*s*e}function Bi(s,e,t,n){return qp(s,e)+Xp(s,t)+Yp(s,n)}function jp(s,e){const t=1-s;return t*t*t*e}function $p(s,e){const t=1-s;return 3*t*t*s*e}function Kp(s,e){return 3*(1-s)*s*s*e}function Zp(s,e){return s*s*s*e}function zi(s,e,t,n,i){return jp(s,e)+$p(s,t)+Kp(s,n)+Zp(s,i)}class Jp extends un{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(zi(e,i.x,a.x,r.x,o.x),zi(e,i.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qp extends un{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(zi(e,i.x,a.x,r.x,o.x),zi(e,i.y,a.y,r.y,o.y),zi(e,i.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class em extends un{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tm extends un{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nm extends un{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(Bi(e,i.x,a.x,r.x),Bi(e,i.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oc extends un{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(Bi(e,i.x,a.x,r.x),Bi(e,i.y,a.y,r.y),Bi(e,i.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class im extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,i=this.points,a=(i.length-1)*e,r=Math.floor(a),o=a-r,c=i[r===0?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(po(o,c.x,l.x,u.x,d.x),po(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new xe().fromArray(i))}return this}}var sm=Object.freeze({__proto__:null,ArcCurve:Wp,CatmullRomCurve3:xt,CubicBezierCurve:Jp,CubicBezierCurve3:Qp,EllipseCurve:rc,LineCurve:em,LineCurve3:tm,QuadraticBezierCurve:nm,QuadraticBezierCurve3:oc,SplineCurve:im});class _i extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new b,u=new xe;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends Pt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const u=[],d=[],h=[],f=[];let g=0;const _=[],p=n/2;let m=0;w(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function w(){const T=new b,O=new b;let L=0;const R=(t-e)/n;for(let N=0;N<=a;N++){const E=[],M=N/a,D=M*(t-e)+e;for(let W=0;W<=i;W++){const G=W/i,Z=G*c+o,J=Math.sin(Z),Y=Math.cos(Z);O.x=D*J,O.y=-M*n+p,O.z=D*Y,d.push(O.x,O.y,O.z),T.set(J,R,Y).normalize(),h.push(T.x,T.y,T.z),f.push(G,1-M),E.push(g++)}_.push(E)}for(let N=0;N<i;N++)for(let E=0;E<a;E++){const M=_[E][N],D=_[E+1][N],W=_[E+1][N+1],G=_[E][N+1];u.push(M,D,G),u.push(D,W,G),L+=6}l.addGroup(m,L,0),m+=L}function S(T){const O=g,L=new xe,R=new b;let N=0;const E=T===!0?e:t,M=T===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,p*M,0),h.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let W=0;W<=i;W++){const Z=W/i*c+o,J=Math.cos(Z),Y=Math.sin(Z);R.x=E*Y,R.y=p*M,R.z=E*J,d.push(R.x,R.y,R.z),h.push(0,M,0),L.x=J*.5+.5,L.y=Y*.5*M+.5,f.push(L.x,L.y),g++}for(let W=0;W<i;W++){const G=O+W,Z=D+W;T===!0?u.push(Z,Z+1,G):u.push(Z+1,Z,G),N+=3}l.addGroup(m,N,T===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends ft{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Na extends Pt{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/i,f=new b,g=new xe;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=a+p/n*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const w=m+p,S=w,T=w+n+1,O=w+n+2,L=w+1;o.push(S,T,L),o.push(T,O,L)}}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class It extends Pt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const u=[],d=new b,h=new b,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const w=[],S=m/n;let T=0;m===0&&r===0?T=.5/t:m===n&&c===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){const L=O/t;d.x=-e*Math.cos(i+L*a)*Math.sin(r+S*o),d.y=e*Math.cos(r+S*o),d.z=e*Math.sin(i+L*a)*Math.sin(r+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(L+T,1-S),w.push(l++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const S=u[m][w+1],T=u[m][w],O=u[m+1][w],L=u[m+1][w+1];(m!==0||r>0)&&f.push(S,T,L),(m!==n-1||c<Math.PI)&&f.push(T,O,L)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xn extends Pt{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],c=[],l=[],u=new b,d=new b,h=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*a,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,w=(i+1)*f+g;r.push(_,p,w),r.push(p,m,w)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yt extends Pt{constructor(e=new oc(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new b,c=new b,l=new xe;let u=new b;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function _(){for(let S=0;S<t;S++)p(S);p(a===!1?t:0),w(),m()}function p(S){u=e.getPointAt(S/t,u);const T=r.normals[S],O=r.binormals[S];for(let L=0;L<=i;L++){const R=L/i*Math.PI*2,N=Math.sin(R),E=-Math.cos(R);c.x=E*T.x+N*O.x,c.y=E*T.y+N*O.y,c.z=E*T.z+N*O.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let T=1;T<=i;T++){const O=(i+1)*(S-1)+(T-1),L=(i+1)*S+(T-1),R=(i+1)*S+T,N=(i+1)*(S-1)+T;g.push(O,L,N),g.push(L,R,N)}}function w(){for(let S=0;S<=t;S++)for(let T=0;T<=i;T++)l.x=S/t,l.y=T/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new yt(new sm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class qe extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Is extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const va=new it,mo=new b,go=new b;class Oa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(go),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class am extends Oa{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ei*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rm extends Is{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new am}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vo=new it,Ui=new b,_a=new b;class om extends Oa{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ui),_a.copy(n.position),_a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_a),n.updateMatrixWorld(),i.makeTranslation(-Ui.x,-Ui.y,-Ui.z),vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo)}}class cm extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lm extends Oa{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _o extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new lm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class um extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xo(){return(typeof performance>"u"?Date:performance).now()}class Mo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hm extends Vp{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ge(n),i=new Ge(i);const a=t/2,r=e/t,o=e/2,c=[],l=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=r){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=h===a?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Pt;u.setAttribute("position",new Ze(c,3)),u.setAttribute("color",new Ze(l,3));const d=new ac({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const yo={type:"change"},xa={type:"start"},So={type:"end"},ms=new Pa,bo=new yn,fm=Math.cos(70*Tt.DEG2RAD);class pm extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",le),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yo),n.update(),a=i.NONE},this.update=function(){const v=new b,q=new qn().setFromUnitVectors(e.up,new b(0,1,0)),z=q.clone().invert(),X=new b,se=new qn,Ce=new b,Be=2*Math.PI;return function(ct=null){const Ye=n.object.position;v.copy(Ye).sub(n.target),v.applyQuaternion(q),o.setFromVector3(v),n.autoRotate&&a===i.NONE&&W(M(ct)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let lt=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(lt)&&isFinite(ut)&&(lt<-Math.PI?lt+=Be:lt>Math.PI&&(lt-=Be),ut<-Math.PI?ut+=Be:ut>Math.PI&&(ut-=Be),lt<=ut?o.theta=Math.max(lt,Math.min(ut,o.theta)):o.theta=o.theta>(lt+ut)/2?Math.max(lt,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ut=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)o.radius=I(o.radius);else{const Nt=o.radius;o.radius=I(o.radius*l),Ut=Nt!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(z),Ye.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&L){let Nt=null;if(n.object.isPerspectiveCamera){const dn=v.length();Nt=I(dn*l);const Ln=dn-Nt;n.object.position.addScaledVector(T,Ln),n.object.updateMatrixWorld(),Ut=!!Ln}else if(n.object.isOrthographicCamera){const dn=new b(O.x,O.y,0);dn.unproject(n.object);const Ln=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ut=Ln!==n.object.zoom;const In=new b(O.x,O.y,0);In.unproject(n.object),n.object.position.sub(In).add(dn),n.object.updateMatrixWorld(),Nt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Nt).add(n.object.position):(ms.origin.copy(n.object.position),ms.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ms.direction))<fm?e.lookAt(n.target):(bo.setFromNormalAndCoplanarPoint(n.object.up,n.target),ms.intersectPlane(bo,n.target))))}else if(n.object.isOrthographicCamera){const Nt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Nt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ut=!0)}return l=1,L=!1,Ut||X.distanceToSquared(n.object.position)>r||8*(1-se.dot(n.object.quaternion))>r||Ce.distanceToSquared(n.target)>r?(n.dispatchEvent(yo),X.copy(n.object.position),se.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Me),n.domElement.removeEventListener("pointerdown",Xe),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const r=1e-6,o=new Mo,c=new Mo;let l=1;const u=new b,d=new xe,h=new xe,f=new xe,g=new xe,_=new xe,p=new xe,m=new xe,w=new xe,S=new xe,T=new b,O=new xe;let L=!1;const R=[],N={};let E=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function D(v){const q=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*q)}function W(v){c.theta-=v}function G(v){c.phi-=v}const Z=function(){const v=new b;return function(z,X){v.setFromMatrixColumn(X,0),v.multiplyScalar(-z),u.add(v)}}(),J=function(){const v=new b;return function(z,X){n.screenSpacePanning===!0?v.setFromMatrixColumn(X,1):(v.setFromMatrixColumn(X,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(z),u.add(v)}}(),Y=function(){const v=new b;return function(z,X){const se=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;v.copy(Ce).sub(n.target);let Be=v.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*z*Be/se.clientHeight,n.object.matrix),J(2*X*Be/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(z*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),J(X*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(v,q){if(!n.zoomToCursor)return;L=!0;const z=n.domElement.getBoundingClientRect(),X=v-z.left,se=q-z.top,Ce=z.width,Be=z.height;O.x=X/Ce*2-1,O.y=-(se/Be)*2+1,T.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function I(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function C(v){d.set(v.clientX,v.clientY)}function re(v){me(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function ue(v){g.set(v.clientX,v.clientY)}function B(v){h.set(v.clientX,v.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;W(2*Math.PI*f.x/q.clientHeight),G(2*Math.PI*f.y/q.clientHeight),d.copy(h),n.update()}function j(v){w.set(v.clientX,v.clientY),S.subVectors(w,m),S.y>0?ee(D(S.y)):S.y<0&&$(D(S.y)),m.copy(w),n.update()}function ne(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),Y(p.x,p.y),g.copy(_),n.update()}function K(v){me(v.clientX,v.clientY),v.deltaY<0?$(D(v.deltaY)):v.deltaY>0&&ee(D(v.deltaY)),n.update()}function he(v){let q=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),q=!0;break}q&&(v.preventDefault(),n.update())}function ge(v){if(R.length===1)d.set(v.pageX,v.pageY);else{const q=ke(v),z=.5*(v.pageX+q.x),X=.5*(v.pageY+q.y);d.set(z,X)}}function be(v){if(R.length===1)g.set(v.pageX,v.pageY);else{const q=ke(v),z=.5*(v.pageX+q.x),X=.5*(v.pageY+q.y);g.set(z,X)}}function P(v){const q=ke(v),z=v.pageX-q.x,X=v.pageY-q.y,se=Math.sqrt(z*z+X*X);m.set(0,se)}function Ee(v){n.enableZoom&&P(v),n.enablePan&&be(v)}function Ae(v){n.enableZoom&&P(v),n.enableRotate&&ge(v)}function Se(v){if(R.length==1)h.set(v.pageX,v.pageY);else{const z=ke(v),X=.5*(v.pageX+z.x),se=.5*(v.pageY+z.y);h.set(X,se)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;W(2*Math.PI*f.x/q.clientHeight),G(2*Math.PI*f.y/q.clientHeight),d.copy(h)}function _e(v){if(R.length===1)_.set(v.pageX,v.pageY);else{const q=ke(v),z=.5*(v.pageX+q.x),X=.5*(v.pageY+q.y);_.set(z,X)}p.subVectors(_,g).multiplyScalar(n.panSpeed),Y(p.x,p.y),g.copy(_)}function Ue(v){const q=ke(v),z=v.pageX-q.x,X=v.pageY-q.y,se=Math.sqrt(z*z+X*X);w.set(0,se),S.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),ee(S.y),m.copy(w);const Ce=(v.pageX+q.x)*.5,Be=(v.pageY+q.y)*.5;me(Ce,Be)}function Le(v){n.enableZoom&&Ue(v),n.enablePan&&_e(v)}function Pe(v){n.enableZoom&&Ue(v),n.enableRotate&&Se(v)}function Xe(v){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",x)),!pe(v)&&(Ve(v),v.pointerType==="touch"?Fe(v):H(v)))}function A(v){n.enabled!==!1&&(v.pointerType==="touch"?oe(v):te(v))}function x(v){switch(De(v),R.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(So),a=i.NONE;break;case 1:const q=R[0],z=N[q];Fe({pointerId:q,pageX:z.x,pageY:z.y});break}}function H(v){let q;switch(v.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case jn.DOLLY:if(n.enableZoom===!1)return;re(v),a=i.DOLLY;break;case jn.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;ue(v),a=i.PAN}else{if(n.enableRotate===!1)return;C(v),a=i.ROTATE}break;case jn.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;C(v),a=i.ROTATE}else{if(n.enablePan===!1)return;ue(v),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(xa)}function te(v){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;B(v);break;case i.DOLLY:if(n.enableZoom===!1)return;j(v);break;case i.PAN:if(n.enablePan===!1)return;ne(v);break}}function ie(v){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(v.preventDefault(),n.dispatchEvent(xa),K(ae(v)),n.dispatchEvent(So))}function ae(v){const q=v.deltaMode,z={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(q){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return v.ctrlKey&&!E&&(z.deltaY*=10),z}function Te(v){v.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(v){v.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function le(v){n.enabled===!1||n.enablePan===!1||he(v)}function Fe(v){switch(ze(v),R.length){case 1:switch(n.touches.ONE){case $n.ROTATE:if(n.enableRotate===!1)return;ge(v),a=i.TOUCH_ROTATE;break;case $n.PAN:if(n.enablePan===!1)return;be(v),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case $n.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(v),a=i.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(v),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(xa)}function oe(v){switch(ze(v),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(v),n.update();break;default:a=i.NONE}}function Me(v){n.enabled!==!1&&v.preventDefault()}function Ve(v){R.push(v.pointerId)}function De(v){delete N[v.pointerId];for(let q=0;q<R.length;q++)if(R[q]==v.pointerId){R.splice(q,1);return}}function pe(v){for(let q=0;q<R.length;q++)if(R[q]==v.pointerId)return!0;return!1}function ze(v){let q=N[v.pointerId];q===void 0&&(q=new xe,N[v.pointerId]=q),q.set(v.pageX,v.pageY)}function ke(v){const q=v.pointerId===R[0]?R[1]:R[0];return N[q]}n.domElement.addEventListener("contextmenu",Me),n.domElement.addEventListener("pointerdown",Xe),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",ie,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}class mm{constructor(e){this.group=new et,this.group.name="ClinicEnvironment",this.digitalBoardMesh=e,this.initMaterials(),this.buildRoom(),this.buildFurniture(),this.buildSkeleton(),this.buildHologramPedestal(),this.digitalBoardMesh&&(this.digitalBoardMesh.position.set(.6,2.3,-3.85),this.group.add(this.digitalBoardMesh))}initMaterials(){this.materials={floor:new qe({color:988970,roughness:.25,metalness:.35}),backWall:new qe({color:593949,roughness:.7,metalness:.1}),sideWall:new qe({color:791844,roughness:.7,metalness:.1}),deskTop:new qe({color:165063,roughness:.2,metalness:.4}),deskLegs:new qe({color:3359061,roughness:.3,metalness:.8}),woodAccent:new qe({color:3875862,roughness:.6,metalness:.05}),ledCyan:new ln({color:58879}),bone:new qe({color:15857145,roughness:.5,metalness:.05}),bookSpine:new qe({color:1981066,roughness:.4}),laptopMetal:new qe({color:9741240,roughness:.2,metalness:.9}),glowRing:new qe({color:58879,emissive:58879,emissiveIntensity:.9,roughness:.2})}}buildRoom(){const e=new Jt(14,14),t=new Q(e,this.materials.floor);t.rotation.x=-Math.PI*.5,t.receiveShadow=!0,this.group.add(t);const n=new hm(14,28,58879,1976635);n.position.y=.005,this.group.add(n);const i=new Jt(14,6),a=new Q(i,this.materials.backWall);a.position.set(0,3,-4),a.receiveShadow=!0,this.group.add(a);const r=new Jt(14,6),o=new Q(r,this.materials.sideWall);o.position.set(-6,3,0),o.rotation.y=Math.PI*.5,this.group.add(o);const c=new Q(r,this.materials.sideWall);c.position.set(6,3,0),c.rotation.y=-Math.PI*.5,this.group.add(c);const l=new Qe(14,.06,.04),u=new Q(l,this.materials.ledCyan);u.position.set(0,.03,-3.96),this.group.add(u);const d=new Qe(14,.04,.04),h=new Q(d,this.materials.ledCyan);h.position.set(0,4.8,-3.96),this.group.add(h);for(let f=0;f<6;f++){const g=new Qe(.12,5,.06),_=new Q(g,this.materials.woodAccent);_.position.set(-5.95,2.5,-2.5+f*.4),this.group.add(_)}}buildFurniture(){const e=new et;e.position.set(2.4,0,-1.8),e.rotation.y=-.35;const t=new Qe(2.2,.08,1),n=new Q(t,this.materials.deskTop);n.position.set(0,.88,0),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const i=new ft(.04,.04,.88,12);[[-.95,-.38],[.95,-.38],[-.95,.38],[.95,.38]].forEach(([l,u])=>{const d=new Q(i,this.materials.deskLegs);d.position.set(l,.44,u),e.add(d)});const a=new Q(new Qe(.42,.02,.28),this.materials.laptopMetal);a.position.set(-.35,.93,.05),e.add(a);const r=new Q(new Qe(.42,.28,.015),this.materials.laptopMetal);r.position.set(-.35,1.07,-.08),r.rotation.x=-.2,e.add(r);const o=new Q(new Jt(.38,.24),new ln({color:58879}));o.position.set(-.35,1.07,-.07),o.rotation.x=-.2,e.add(o),[10033947,1981066,292951].forEach((l,u)=>{const d=new Qe(.32,.045,.24),h=new qe({color:l,roughness:.5}),f=new Q(d,h);f.position.set(.55,.94+u*.048,0),f.rotation.y=u*.08,e.add(f)}),this.group.add(e)}buildSkeleton(){const e=new et;e.position.set(-3.5,0,-2.4),e.rotation.y=.5;const t=new ft(.28,.3,.06,16),n=new Q(t,this.materials.deskLegs);n.position.y=.03,e.add(n);const i=new ft(.02,.02,1.85,12),a=new Q(i,this.materials.deskLegs);a.position.set(0,.95,-.1),e.add(a);const r=new It(.12,16,14);r.scale(.85,1.1,.95);const o=new Q(r,this.materials.bone);o.position.set(0,1.68,0),e.add(o);const c=new ft(.03,.035,.65,8),l=new Q(c,this.materials.bone);l.position.set(0,1.25,0),e.add(l);for(let h=0;h<7;h++){const f=new Xn(.18-h*.008,.014,8,16,Math.PI*1.6);f.rotateX(Math.PI*.5),f.rotateZ(Math.PI*.2);const g=new Q(f,this.materials.bone);g.position.set(0,1.48-h*.05,0),e.add(g)}const u=new Qe(.32,.16,.2),d=new Q(u,this.materials.bone);d.position.set(0,.92,0),e.add(d),[-.1,.1].forEach(h=>{const f=new Q(new ft(.025,.02,.44,8),this.materials.bone);f.position.set(h,.68,0),e.add(f);const g=new Q(new ft(.02,.016,.44,8),this.materials.bone);g.position.set(h,.24,0),e.add(g)}),this.group.add(e)}buildHologramPedestal(){this.pedestalGroup=new et,this.pedestalGroup.position.set(-1.4,0,-.6);const e=new ft(.55,.65,.18,32),t=new Q(e,this.materials.deskLegs);t.position.y=.09,this.pedestalGroup.add(t);const n=new ft(.24,.26,.72,32),i=new Q(n,this.materials.deskLegs);i.position.y=.54,this.pedestalGroup.add(i);const a=new Xn(.48,.035,16,32);a.rotateX(Math.PI*.5);const r=new Q(a,this.materials.glowRing);r.position.y=.91,this.pedestalGroup.add(r);const o=new _i(.44,32);o.rotateX(-Math.PI*.5);const c=new ln({color:58879,transparent:!0,opacity:.35,side:Xt}),l=new Q(o,c);l.position.y=.915,this.pedestalGroup.add(l),this.group.add(this.pedestalGroup)}}class gm{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=1920,this.canvas.height=1080,this.ctx=this.canvas.getContext("2d"),this.texture=new Hp(this.canvas),this.texture.generateMipmaps=!0,this.texture.minFilter=bn,this.ecgOffset=0,this.ecgPoints=[],this.initEcgData(),this.currentData={heading:"MedTutor 3D - Sistema Cardiovascular",badge:"Cardiologia & Semiologia",points:["Bem-vindo à plataforma de Educação Médica 3D!","Explore a anatomia tridimensional do coração ao vivo.","Aprenda o ciclo cardíaco com áudio real de ausculta e traçado de ECG.","Converse com o Dr. Asclépio por texto ou voz em português."],diagram:"circulatory_circuit",clinicalNote:"Esta plataforma possui finalidade exclusivamente educacional."},this.mesh=null,this.createMesh(),this.redraw()}initEcgData(){const e=[];for(let t=0;t<100;t++)if(t<15)e.push(0);else if(t<30){const n=(t-15)/15;e.push(Math.sin(n*Math.PI)*18)}else if(t<42)e.push(0);else if(t<46)e.push(-14);else if(t<52)e.push(85);else if(t<56)e.push(-28);else if(t<68)e.push(0);else if(t<88){const n=(t-68)/20;e.push(Math.sin(n*Math.PI)*26)}else e.push(0);this.ecgBasePattern=e}createMesh(){const n=new Jt(4.2,2.36),i=new qe({map:this.texture,roughness:.35,metalness:.1,emissive:new Ge(661807),emissiveMap:this.texture,emissiveIntensity:.25});this.screenMesh=new Q(n,i);const a=new Qe(4.2+.1,2.36+.1,.06),r=new qe({color:725792,roughness:.4,metalness:.8}),o=new Q(a,r);o.position.z=-.035;const c=new Qe(4.2+.12,2.36+.12,.02),l=new ln({color:58879,wireframe:!0}),u=new Q(c,l);u.position.z=-.045,this.mesh=new et,this.mesh.add(o),this.mesh.add(u),this.mesh.add(this.screenMesh)}updateContent(e){this.currentData={...this.currentData,...e},this.redraw()}update(e){this.ecgOffset+=e*120,this.drawEcgStrip()}redraw(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height,i=e.createLinearGradient(0,0,t,n);i.addColorStop(0,"#06101e"),i.addColorStop(.5,"#0a1728"),i.addColorStop(1,"#050c18"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(0, 229, 255, 0.04)",e.lineWidth=1;for(let c=0;c<t;c+=40)e.beginPath(),e.moveTo(c,0),e.lineTo(c,n),e.stroke();for(let c=0;c<n;c+=40)e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke();e.fillStyle="rgba(0, 229, 255, 0.08)",e.fillRect(0,0,t,110),e.fillStyle="#00e5ff",e.fillRect(0,108,t,3),e.fillStyle="#00e5ff",e.font='bold 36px "Inter", "Segoe UI", sans-serif',e.fillText("MEDTUTOR 3D",70,70),e.fillStyle="rgba(0, 229, 255, 0.18)",e.beginPath(),e.roundRect(380,36,320,48,8),e.fill(),e.fillStyle="#38bdf8",e.font='600 22px "Inter", sans-serif',e.fillText(this.currentData.badge||"Educação Médica",398,68),e.fillStyle="#10b981",e.beginPath(),e.arc(t-240,60,8,0,Math.PI*2),e.fill(),e.fillStyle="#94a3b8",e.font='500 20px "Inter", sans-serif',e.fillText("SISTEMA ATIVO (72 BPM)",t-215,66),e.fillStyle="#ffffff",e.font='bold 52px "Inter", "Segoe UI", sans-serif',e.fillText(this.currentData.heading,70,200);const a=this.currentData.points||[];let r=280;const o=1100;if(a.forEach((c,l)=>{e.fillStyle="#00e5ff",e.beginPath(),e.arc(85,r-14,7,0,Math.PI*2),e.fill(),e.fillStyle="#e2e8f0",e.font='400 30px "Inter", "Segoe UI", sans-serif';const u=c.split(" ");let d="";for(let h=0;h<u.length;h++){const f=d+u[h]+" ";e.measureText(f).width>o&&h>0?(e.fillText(d,115,r),d=u[h]+" ",r+=44):d=f}e.fillText(d,115,r),r+=56}),this.currentData.clinicalNote){const c=Math.max(r+20,650);e.fillStyle="rgba(239, 68, 68, 0.1)",e.strokeStyle="rgba(239, 68, 68, 0.4)",e.lineWidth=2,e.beginPath(),e.roundRect(70,c,o+50,140,12),e.fill(),e.stroke(),e.fillStyle="#ef4444",e.font='bold 24px "Inter", sans-serif',e.fillText("⚠️ PÉROLA CLÍNICA & RELEVÂNCIA PRÁTICA",100,c+42),e.fillStyle="#fecaca",e.font='400 24px "Inter", sans-serif',this.wrapText(this.currentData.clinicalNote,100,c+80,o,32)}this.drawRightDashboard(e,t,n),this.texture.needsUpdate=!0}drawRightDashboard(e,t,n){e.fillStyle="rgba(11, 23, 40, 0.75)",e.strokeStyle="rgba(0, 229, 255, 0.3)",e.lineWidth=1.5,e.beginPath(),e.roundRect(1260,150,590,340,16),e.fill(),e.stroke(),e.fillStyle="#38bdf8",e.font='bold 22px "Inter", sans-serif',e.fillText("MONITOR CARDÍACO - DERIVAÇÃO DII",1290,195),e.fillStyle="#00e5ff",e.font='bold 36px "Inter", sans-serif',e.fillText("72",1720,200),e.font='500 18px "Inter", sans-serif',e.fillStyle="#94a3b8",e.fillText("BPM",1780,200);const r=220,o=240;e.fillStyle="#030811",e.fillRect(1280,r,550,o),e.strokeStyle="rgba(0, 229, 255, 0.12)",e.lineWidth=1;for(let _=1280;_<1830;_+=25)e.beginPath(),e.moveTo(_,r),e.lineTo(_,r+o),e.stroke();for(let _=r;_<r+o;_+=25)e.beginPath(),e.moveTo(1280,_),e.lineTo(1830,_),e.stroke();e.save(),e.beginPath(),e.rect(1280,r,550,o),e.clip(),e.strokeStyle="#00ff88",e.lineWidth=3.5,e.shadowColor="#00ff88",e.shadowBlur=12,e.beginPath();const c=r+o*.65,l=550,u=this.ecgBasePattern.length;for(let _=0;_<l;_+=3){const p=Math.floor((_+this.ecgOffset)%(u*3));let m=0;p<u&&(m=this.ecgBasePattern[p]);const w=c-m;_===0?e.moveTo(1280+_,w):e.lineTo(1280+_,w)}e.stroke(),e.restore();const d=520;[{label:"PRESSÃO ARTERIAL",val:"120/80",unit:"mmHg",color:"#38bdf8"},{label:"OXIMETRIA (SpO2)",val:"99%",unit:"Ar amb.",color:"#34d399"},{label:"DÉBITO CARDÍACO",val:"5.2",unit:"L/min",color:"#fbbf24"}].forEach((_,p)=>{const m=1260+p*195;e.fillStyle="rgba(15, 23, 42, 0.8)",e.strokeStyle="rgba(255, 255, 255, 0.08)",e.beginPath(),e.roundRect(m,d,185,120,12),e.fill(),e.stroke(),e.fillStyle="#94a3b8",e.font='600 13px "Inter", sans-serif',e.fillText(_.label,m+15,d+30),e.fillStyle=_.color,e.font='bold 32px "Inter", sans-serif',e.fillText(_.val,m+15,d+75),e.fillStyle="#64748b",e.font='500 15px "Inter", sans-serif',e.fillText(_.unit,m+15,d+102)});const f=670;e.fillStyle="rgba(15, 23, 42, 0.8)",e.strokeStyle="rgba(0, 229, 255, 0.2)",e.beginPath(),e.roundRect(1260,f,590,280,16),e.fill(),e.stroke(),e.fillStyle="#38bdf8",e.font='bold 22px "Inter", sans-serif',e.fillText("DIAGNÓSTICO & CORRELAÇÃO ANATÔMICA",1285,f+45);const g=["• Átrio Direito: Vena Cava Sup/Inf e Seio Coronário","• Ventrículo Esquerdo: Miocárdio espesso (pós-carga)","• Valvas AV: Mitral (bicúspide) & Tricúspide","• Valvas Semilunares: Aórtica & Pulmonar (ninho de pombo)","• Marca-passo Fisiológico: Nó Sinoatrial (60-100 bpm)"];e.fillStyle="#cbd5e1",e.font='400 20px "Inter", sans-serif',g.forEach((_,p)=>{e.fillText(_,1285,f+90+p*36)})}drawEcgStrip(){this.redraw()}wrapText(e,t,n,i,a){const r=this.ctx,o=e.split(" ");let c="",l=n;for(let u=0;u<o.length;u++){const d=c+o[u]+" ";r.measureText(d).width>i&&u>0?(r.fillText(c,t,l),c=o[u]+" ",l+=a):c=d}r.fillText(c,t,l)}}class vm{constructor(e="asclepio"){this.avatarId=e,this.group=new et,this.group.name="VirtualProfessor",this.bones={},this.eyelids=[],this.eyes=[],this.jaw=null,this.rightArm={},this.leftArm={},this.initMaterials(),this.buildAvatar()}initMaterials(){const e=this.avatarId==="sofia",t=this.avatarId==="lucas";let n=16109491;e&&(n=16308162),t&&(n=14724230),this.materials={skin:new qe({color:n,roughness:.65,metalness:.05}),hair:new qe({color:e?2891025:t?1776411:4869713,roughness:.8,metalness:.1}),eyes:new qe({color:16777215,roughness:.15,metalness:0}),iris:new qe({color:e?4025167:t?3875859:1981066,roughness:.2}),pupil:new ln({color:328965}),labCoat:new qe({color:16317180,roughness:.7,metalness:.05}),shirt:new qe({color:e?165063:t?1013358:1982639,roughness:.7}),tie:new qe({color:10033947,roughness:.5}),pants:new qe({color:988970,roughness:.7}),shoes:new qe({color:1579035,roughness:.3,metalness:.2}),stethoscope:new qe({color:165063,roughness:.3,metalness:.1}),metal:new qe({color:14870768,roughness:.2,metalness:.85}),eyebrows:new qe({color:e?2891025:3359061,roughness:.8})}}buildAvatar(){this.buildLegs(),this.buildTorso(),this.buildHead(),this.buildArms()}buildLegs(){const e=new ft(.12,.09,.95,16),t=new Qe(.15,.1,.3),n=new Q(e,this.materials.pants);n.position.set(-.16,.48,0),this.group.add(n);const i=new Q(t,this.materials.shoes);i.position.set(-.16,.05,.06),this.group.add(i);const a=new Q(e,this.materials.pants);a.position.set(.16,.48,0),this.group.add(a);const r=new Q(t,this.materials.shoes);r.position.set(.16,.05,.06),this.group.add(r)}buildTorso(){this.torsoGroup=new et,this.torsoGroup.position.set(0,.95,0),this.group.add(this.torsoGroup),this.bones.torso=this.torsoGroup;const e=new Qe(.44,.18,.26),t=new Q(e,this.materials.pants);t.position.set(0,.08,0),this.torsoGroup.add(t);const n=new Qe(.48,.58,.28),i=new Q(n,this.materials.labCoat);i.position.set(0,.42,0),this.torsoGroup.add(i);const a=new Jt(.16,.42),r=new Q(a,this.materials.shirt);if(r.position.set(0,.46,.145),this.torsoGroup.add(r),this.avatarId!=="lucas"){const h=new Qe(.06,.32,.015),f=new Q(h,this.materials.tie);f.position.set(0,.42,.155),this.torsoGroup.add(f)}const o=new Qe(.08,.4,.02),c=new Q(o,this.materials.labCoat);c.position.set(-.11,.45,.15),c.rotation.z=-.15,this.torsoGroup.add(c);const l=new Q(o,this.materials.labCoat);l.position.set(.11,.45,.15),l.rotation.z=.15,this.torsoGroup.add(l);const u=new Qe(.08,.1,.01),d=new Q(u,this.materials.metal);d.position.set(.15,.52,.15),this.torsoGroup.add(d),this.buildStethoscope()}buildStethoscope(){const e=new et,t=new xt([new b(-.16,.65,.02),new b(-.14,.72,-.06),new b(0,.73,-.09),new b(.14,.72,-.06),new b(.16,.65,.02),new b(.12,.45,.16),new b(0,.35,.17)]),n=new yt(t,32,.014,8,!1),i=new Q(n,this.materials.stethoscope);e.add(i);const a=new ft(.042,.042,.02,16);a.rotateX(Math.PI*.5);const r=new Q(a,this.materials.metal);r.position.set(0,.34,.18),e.add(r),this.torsoGroup.add(e)}buildHead(){this.headGroup=new et,this.headGroup.position.set(0,.76,0),this.torsoGroup.add(this.headGroup),this.bones.head=this.headGroup;const e=new ft(.095,.11,.14,16),t=new Q(e,this.materials.skin);t.position.set(0,-.02,0),this.headGroup.add(t);const n=new It(.19,24,20);n.scale(.9,1.15,.95);const i=new Q(n,this.materials.skin);i.position.set(0,.14,0),this.headGroup.add(i);const a=new It(.205,24,20,0,Math.PI*2,0,Math.PI*.65),r=new Q(a,this.materials.hair);r.position.set(0,.19,-.01),this.headGroup.add(r);const o=new Qe(.04,.14,.12),c=new Q(o,this.materials.hair);c.position.set(-.17,.18,.02),this.headGroup.add(c);const l=new Q(o,this.materials.hair);l.position.set(.17,.18,.02),this.headGroup.add(l);const u=new ki(.035,.08,12);u.rotateX(Math.PI*.6);const d=new Q(u,this.materials.skin);d.position.set(0,.12,.19),this.headGroup.add(d);const h=new Qe(.07,.015,.01),f=new Q(h,this.materials.eyebrows);f.position.set(-.065,.19,.175),f.rotation.z=-.05,this.headGroup.add(f);const g=new Q(h,this.materials.eyebrows);g.position.set(.065,.19,.175),g.rotation.z=.05,this.headGroup.add(g),this.buildEyes(),this.buildMouthAndJaw(),this.avatarId==="asclepio"&&this.buildGlasses()}buildEyes(){[-.062,.062].forEach(t=>{const n=new et;n.position.set(t,.145,.155);const i=new It(.028,16,16),a=new Q(i,this.materials.eyes);n.add(a);const r=new _i(.014,16),o=new Q(r,this.materials.iris);o.position.set(0,0,.027),n.add(o);const c=new _i(.007,12),l=new Q(c,this.materials.pupil);l.position.set(0,0,.0275),n.add(l);const u=new It(.03,16,12,0,Math.PI*2,0,Math.PI*.5);u.rotateX(Math.PI*.5);const d=new Q(u,this.materials.skin);d.position.set(0,0,0),d.scale.set(1.02,.01,1.02),n.add(d),this.eyelids.push(d),this.headGroup.add(n),this.eyes.push(n)})}buildMouthAndJaw(){const e=new Qe(.07,.015,.015),t=new Q(e,this.materials.skin);t.position.set(0,.045,.175),this.headGroup.add(t),this.jaw=new et,this.jaw.position.set(0,.05,.08);const n=new Qe(.065,.018,.015),i=new Q(n,this.materials.skin);i.position.set(0,-.025,.095),this.jaw.add(i);const a=new It(.06,12,10);a.scale(1,.7,1);const r=new Q(a,this.materials.skin);r.position.set(0,-.06,.08),this.jaw.add(r),this.headGroup.add(this.jaw),this.bones.jaw=this.jaw}buildGlasses(){const e=new et;e.position.set(0,.145,.185);const t=new qe({color:1976635,metalness:.9,roughness:.2}),n=new qe({color:16777215,transparent:!0,opacity:.25,roughness:.1});[-.062,.062].forEach(r=>{const o=new Xn(.032,.004,8,20),c=new Q(o,t);c.position.set(r,0,0),e.add(c);const l=new _i(.03,16),u=new Q(l,n);u.position.set(r,0,0),e.add(u)});const i=new ft(.003,.003,.04,6);i.rotateZ(Math.PI*.5);const a=new Q(i,t);a.position.set(0,.008,0),e.add(a),this.headGroup.add(e)}buildArms(){this.rightArm.shoulder=new et,this.rightArm.shoulder.position.set(.28,.65,0),this.torsoGroup.add(this.rightArm.shoulder);const e=new ft(.065,.055,.32,12),t=new Q(e,this.materials.labCoat);t.position.set(0,-.16,0),this.rightArm.shoulder.add(t),this.rightArm.elbow=new et,this.rightArm.elbow.position.set(0,-.32,0),this.rightArm.shoulder.add(this.rightArm.elbow);const n=new ft(.055,.045,.3,12),i=new Q(n,this.materials.labCoat);i.position.set(0,-.15,0),this.rightArm.elbow.add(i);const a=new Qe(.07,.1,.03),r=new Q(a,this.materials.skin);r.position.set(0,-.34,0),this.rightArm.elbow.add(r),this.leftArm.shoulder=new et,this.leftArm.shoulder.position.set(-.28,.65,0),this.torsoGroup.add(this.leftArm.shoulder);const o=new Q(e,this.materials.labCoat);o.position.set(0,-.16,0),this.leftArm.shoulder.add(o),this.leftArm.elbow=new et,this.leftArm.elbow.position.set(0,-.32,0),this.leftArm.shoulder.add(this.leftArm.elbow);const c=new Q(n,this.materials.labCoat);c.position.set(0,-.15,0),this.leftArm.elbow.add(c);const l=new Q(a,this.materials.skin);l.position.set(0,-.34,0),this.leftArm.elbow.add(l)}setMouthOpen(e){this.jaw&&(this.jaw.rotation.x=e*.28,this.jaw.position.y=.05-e*.02)}setBlink(e){const t=.01+e*.99;this.eyelids.forEach(n=>{n.scale.y=t})}}class _m{constructor(e){this.model=e,this.blinkTimer=0,this.nextBlinkInterval=3,this.isBlinking=!1,this.blinkPhase=0,this.cameraPosition=new b(0,1.6,3.5),this.targetHeadRot=new Ct(0,0,0),this.idleTime=0,this.currentGesture="idle",this.gestureProgress=1,this.gestureDuration=.8,this.armTargets={rShoulder:new Ct(0,0,-.15),rElbow:new Ct(0,0,.1),lShoulder:new Ct(0,0,.15),lElbow:new Ct(0,0,-.1)}}setCameraPosition(e){this.cameraPosition.copy(e)}setGesture(e){switch(this.currentGesture=e,this.gestureProgress=0,e){case"gesturePointBoard":this.armTargets.rShoulder.set(-.6,.4,.9),this.armTargets.rElbow.set(-.2,0,.4),this.armTargets.lShoulder.set(.1,0,.2),this.armTargets.lElbow.set(0,0,-.2);break;case"gesturePresentOrgan":this.armTargets.lShoulder.set(.4,.2,-.6),this.armTargets.lElbow.set(-.3,0,-.5),this.armTargets.rShoulder.set(.1,0,-.15),this.armTargets.rElbow.set(.2,0,.3);break;case"gestureExplain1":this.armTargets.rShoulder.set(.5,.2,.4),this.armTargets.rElbow.set(-.4,.2,.6),this.armTargets.lShoulder.set(.2,0,-.3),this.armTargets.lElbow.set(-.2,0,-.3);break;case"gestureExplain2":this.armTargets.rShoulder.set(.4,.3,.4),this.armTargets.rElbow.set(-.5,.1,.5),this.armTargets.lShoulder.set(.4,-.3,-.4),this.armTargets.lElbow.set(-.5,-.1,-.5);break;case"gestureListen":this.armTargets.rShoulder.set(.8,.1,.6),this.armTargets.rElbow.set(-1.1,.3,.8),this.armTargets.lShoulder.set(.1,0,.2),this.armTargets.lElbow.set(0,0,-.1);break;case"gestureApprove":this.armTargets.rShoulder.set(.25,.1,.3),this.armTargets.rElbow.set(-.3,0,.4),this.armTargets.lShoulder.set(.25,-.1,-.3),this.armTargets.lElbow.set(-.3,0,-.4);break;case"idle":default:this.armTargets.rShoulder.set(.05,0,-.12),this.armTargets.rElbow.set(.1,0,.1),this.armTargets.lShoulder.set(.05,0,.12),this.armTargets.lElbow.set(.1,0,-.1);break}}update(e){this.idleTime+=e,this.updateBlinking(e),this.updateGaze(e),this.updateBreathing(e),this.updateGestures(e)}updateBlinking(e){if(this.blinkTimer+=e,!this.isBlinking&&this.blinkTimer>=this.nextBlinkInterval&&(this.isBlinking=!0,this.blinkPhase=0,this.blinkTimer=0,this.nextBlinkInterval=2.5+Math.random()*2.5),this.isBlinking)if(this.blinkPhase+=e*12,this.blinkPhase<=Math.PI){const t=Math.sin(this.blinkPhase);this.model.setBlink(t)}else this.model.setBlink(0),this.isBlinking=!1}updateGaze(e){if(!this.model.bones.head)return;const t=new b;this.model.bones.head.getWorldPosition(t);const n=new b().subVectors(this.cameraPosition,t).normalize(),i=Math.max(-.45,Math.min(.45,Math.atan2(n.x,n.z))),a=Math.max(-.25,Math.min(.25,-n.y));this.model.bones.head.rotation.y=Tt.lerp(this.model.bones.head.rotation.y,i,e*3.5),this.model.bones.head.rotation.x=Tt.lerp(this.model.bones.head.rotation.x,a,e*3.5);const r=Math.sin(this.idleTime*4)>.95?(Math.random()-.5)*.04:0;this.model.eyes.forEach(o=>{o.rotation.y=r})}updateBreathing(e){if(!this.model.bones.torso)return;const t=Math.sin(this.idleTime*1.4);this.model.bones.torso.position.y=.95+t*.008,this.model.bones.torso.scale.x=1+t*.012,this.model.bones.torso.scale.z=1+t*.015,this.model.bones.torso.rotation.y=Math.sin(this.idleTime*.6)*.02}updateGestures(e){const t=e*4;if(this.model.rightArm.shoulder){const n=this.model.rightArm.shoulder.rotation,i=this.armTargets.rShoulder,a=this.currentGesture.startsWith("gestureExplain")?Math.sin(this.idleTime*3)*.04:0;n.x=Tt.lerp(n.x,i.x+a,t),n.y=Tt.lerp(n.y,i.y,t),n.z=Tt.lerp(n.z,i.z,t)}if(this.model.rightArm.elbow){const n=this.model.rightArm.elbow.rotation,i=this.armTargets.rElbow;n.x=Tt.lerp(n.x,i.x,t),n.y=Tt.lerp(n.y,i.y,t),n.z=Tt.lerp(n.z,i.z,t)}if(this.model.leftArm.shoulder){const n=this.model.leftArm.shoulder.rotation,i=this.armTargets.lShoulder;n.x=Tt.lerp(n.x,i.x,t),n.y=Tt.lerp(n.y,i.y,t),n.z=Tt.lerp(n.z,i.z,t)}if(this.model.leftArm.elbow){const n=this.model.leftArm.elbow.rotation,i=this.armTargets.lElbow;n.x=Tt.lerp(n.x,i.x,t),n.y=Tt.lerp(n.y,i.y,t),n.z=Tt.lerp(n.z,i.z,t)}}}class xm{constructor(){this.group=new et,this.group.name="HumanHeart",this.bpm=72,this.beatPhase=0,this.isBeating=!0,this.baseScale=1,this.isCutaway=!1,this.parts={},this.conductionElements=[],this.buildHeart()}buildHeart(){this.materials={myocardium:new qe({color:10166822,roughness:.5,metalness:.15,bumpScale:.05}),myocardiumCut:new qe({color:8133150,roughness:.6,metalness:.1}),aorta:new qe({color:14222377,roughness:.35,metalness:.2}),pulmonaryArtery:new qe({color:30646,roughness:.38,metalness:.2}),venaCava:new qe({color:147082,roughness:.4,metalness:.18}),pulmonaryVeins:new qe({color:12653087,roughness:.35,metalness:.2}),valves:new qe({color:16642261,roughness:.3,metalness:.05,transparent:!0,opacity:.88,side:Xt}),chordae:new qe({color:16777215,roughness:.4,metalness:0}),coronaries:new qe({color:15672124,roughness:.3,metalness:.3}),conduction:new qe({color:16765286,emissive:16758531,emissiveIntensity:.8,roughness:.2})},this.outerHeart=new et,this.cutawayHeart=new et,this.cutawayHeart.visible=!1,this.group.add(this.outerHeart),this.group.add(this.cutawayHeart),this.buildExterior(),this.buildInternalCutaway(),this.buildConductionSystem(),this.buildGreatVessels(),this.buildCoronaryVessels(),this.group.rotation.x=.15,this.group.rotation.y=-.3,this.group.rotation.z=-.22}buildExterior(){const e=new ki(.85,1.8,32);e.rotateX(Math.PI),e.scale(1,1,.85);const t=new Q(e,this.materials.myocardium);t.position.set(-.25,-.4,0),t.rotation.z=-.15,this.outerHeart.add(t),this.parts.leftVentricle=t;const n=new It(.75,32,24,0,Math.PI*1.2,0,Math.PI);n.scale(1,1.3,.7);const i=new Q(n,this.materials.myocardium);i.position.set(.35,-.3,.18),i.rotation.y=.2,this.outerHeart.add(i),this.parts.rightVentricle=i;const a=new It(.65,24,20);a.scale(1,.9,.85);const r=new Q(a,this.materials.myocardium);r.position.set(-.35,.65,-.25),this.outerHeart.add(r),this.parts.leftAtrium=r;const o=new It(.72,24,20);o.scale(.95,1.1,.9);const c=new Q(o,this.materials.myocardium);c.position.set(.55,.55,.05),this.outerHeart.add(c),this.parts.rightAtrium=c;const l=new ki(.28,.5,16);l.rotateZ(1.2);const u=new Q(l,this.materials.myocardium);u.position.set(.4,.7,.45),this.outerHeart.add(u);const d=new Q(l,this.materials.myocardium);d.position.set(-.5,.75,.25),d.rotation.z=-1.5,this.outerHeart.add(d)}buildInternalCutaway(){const e=new Qe(.28,1.6,1),t=new Q(e,this.materials.myocardiumCut);t.position.set(.05,-.35,0),this.cutawayHeart.add(t),this.parts.septum=t;const n=new Xn(.65,.26,16,32,Math.PI);n.rotateZ(Math.PI*.5);const i=new Q(n,this.materials.myocardiumCut);i.position.set(-.4,-.35,0),this.cutawayHeart.add(i);const a=new Xn(.7,.12,16,32,Math.PI);a.rotateZ(-Math.PI*.5);const r=new Q(a,this.materials.myocardiumCut);r.position.set(.5,-.35,0),this.cutawayHeart.add(r);const o=new et;o.position.set(-.35,.2,0);const c=new Na(.18,.38,24);c.rotateX(Math.PI*.5);const l=new Q(c,this.materials.valves);o.add(l);const u=new ft(.08,.12,.45,12),d=new Q(u,this.materials.myocardiumCut);d.position.set(-.15,-.6,.1);const h=new Q(u,this.materials.myocardiumCut);h.position.set(.1,-.6,-.1),o.add(d),o.add(h);for(let _=0;_<6;_++){const p=_/6*Math.PI*2,m=new ft(.012,.012,.4,6),w=new Q(m,this.materials.chordae),S=_<3?d:h;w.position.set(Math.cos(p)*.2+S.position.x*.5,-.2,Math.sin(p)*.2+S.position.z*.5),w.rotation.z=Math.cos(p)*.2,o.add(w)}this.cutawayHeart.add(o),this.parts.mitralValve=o;const f=new et;f.position.set(.38,.2,.05);const g=new Q(c,this.materials.valves);f.add(g),this.cutawayHeart.add(f),this.parts.tricuspidValve=f}buildGreatVessels(){const e=new xt([new b(-.15,.4,0),new b(-.1,.9,.05),new b(0,1.45,0),new b(-.25,1.7,-.2),new b(-.55,1.55,-.4),new b(-.6,.8,-.5)]),t=new yt(e,32,.28,16,!1),n=new Q(t,this.materials.aorta);this.group.add(n),this.parts.aorta=n,[new b(-.1,1.62,-.05),new b(-.28,1.74,-.18),new b(-.46,1.68,-.32)].forEach((m,w)=>{const S=new xt([m,new b(m.x+.05*(w-1),m.y+.45,m.z+.05)]),T=new yt(S,12,.09,10,!1),O=new Q(T,this.materials.aorta);this.group.add(O)});const a=new xt([new b(.15,.25,.35),new b(.05,.75,.3),new b(-.15,1.15,.1),new b(-.25,1.25,-.15)]),r=new yt(a,24,.26,16,!1),o=new Q(r,this.materials.pulmonaryArtery);this.group.add(o),this.parts.pulmonaryTrunk=o;const c=new xt([new b(-.25,1.25,-.15),new b(.5,1.2,-.35)]),l=new Q(new yt(c,12,.18,12,!1),this.materials.pulmonaryArtery);this.group.add(l);const u=new xt([new b(-.25,1.25,-.15),new b(-.85,1.2,-.35)]),d=new Q(new yt(u,12,.18,12,!1),this.materials.pulmonaryArtery);this.group.add(d);const h=new xt([new b(.65,.9,-.1),new b(.65,1.7,-.15)]),f=new Q(new yt(h,16,.22,14,!1),this.materials.venaCava);this.group.add(f),this.parts.svc=f;const g=new xt([new b(.6,-.1,-.35),new b(.65,-.85,-.4)]),_=new Q(new yt(g,16,.22,14,!1),this.materials.venaCava);this.group.add(_),this.parts.ivc=_,[new b(-.8,.7,-.45),new b(-.8,.45,-.5),new b(.15,.7,-.6),new b(.15,.45,-.65)].forEach((m,w)=>{const S=new xt([new b(-.35+(w>1?.25:-.2),.6,-.35),m]),T=new Q(new yt(S,8,.11,10,!1),this.materials.pulmonaryVeins);this.group.add(T)})}buildCoronaryVessels(){const e=new xt([new b(-.15,.6,.28),new b(-.05,.2,.45),new b(-.1,-.3,.5),new b(-.25,-.95,.35),new b(-.3,-1.2,.15)]),t=new Q(new yt(e,24,.045,8,!1),this.materials.coronaries);this.outerHeart.add(t),this.parts.lad=t;const n=new xt([new b(.2,.5,.25),new b(.6,.2,.3),new b(.7,-.2,.05),new b(.5,-.6,-.3)]),i=new Q(new yt(n,20,.045,8,!1),this.materials.coronaries);this.outerHeart.add(i),this.parts.rca=i}buildConductionSystem(){this.conductionGroup=new et;const e=new It(.12,16,16),t=new Q(e,this.materials.conduction);t.position.set(.65,.95,0),this.conductionGroup.add(t),this.conductionElements.push(t),this.parts.saNode=t;const n=new It(.1,16,16),i=new Q(n,this.materials.conduction);i.position.set(.08,.25,0),this.conductionGroup.add(i),this.conductionElements.push(i),this.parts.avNode=i;const a=new xt([t.position,new b(.45,.6,.1),i.position]),r=new Q(new yt(a,16,.025,8,!1),this.materials.conduction);this.conductionGroup.add(r);const o=new xt([i.position,new b(.05,0,.05),new b(.02,-.4,.08)]),c=new Q(new yt(o,12,.03,8,!1),this.materials.conduction);this.conductionGroup.add(c);const l=new xt([new b(.02,-.4,.08),new b(-.2,-.8,.12),new b(-.35,-1.1,.05)]),u=new Q(new yt(l,16,.022,8,!1),this.materials.conduction);this.conductionGroup.add(u);const d=new xt([new b(.02,-.4,.08),new b(.25,-.7,.18),new b(.4,-.9,.1)]),h=new Q(new yt(d,16,.022,8,!1),this.materials.conduction);this.conductionGroup.add(h),this.group.add(this.conductionGroup),this.parts.conductionGroup=this.conductionGroup}setCutawayView(e){this.isCutaway=e,this.outerHeart.visible=!e,this.cutawayHeart.visible=e}toggleCutaway(){return this.setCutawayView(!this.isCutaway),this.isCutaway}highlightPart(e){Object.values(this.materials).forEach(t=>{t.emissive&&(t.emissiveIntensity=0)}),e==="conduction"?this.materials.conduction.emissiveIntensity=1.2:e==="valves"&&this.parts.mitralValve?(this.materials.valves.emissive=new Ge(3718648),this.materials.valves.emissiveIntensity=.6):e==="vessels"?(this.materials.aorta.emissive=new Ge(16731501),this.materials.aorta.emissiveIntensity=.4,this.materials.pulmonaryArtery.emissive=new Ge(46296),this.materials.pulmonaryArtery.emissiveIntensity=.4):e==="coronaries"&&(this.materials.coronaries.emissive=new Ge(16711764),this.materials.coronaries.emissiveIntensity=.8)}update(e){if(!this.isBeating)return;const t=this.bpm/60;this.beatPhase=(this.beatPhase+e*t*Math.PI*2)%(Math.PI*2);const n=this.beatPhase;let i=0;n<Math.PI*.4?i=Math.sin(n/(Math.PI*.4)*Math.PI)*.085:n<Math.PI*.7?i=-Math.sin((n-Math.PI*.4)/(Math.PI*.3)*Math.PI)*.03:i=0;const a=this.baseScale*(1-i);this.group.scale.set(a,a*(1+i*.5),a);const r=Math.max(0,Math.sin(n*2));this.materials.conduction.emissiveIntensity=.4+r*.8}}class Mm{constructor(e){this.group=new et,this.group.name="BloodFlowParticles",this.heartGroup=e,this.particleCount=180,this.particles=[],this.active=!0,this.initCurves(),this.buildParticles(),this.heartGroup.add(this.group)}initCurves(){this.blueCurve=new xt([new b(.65,1.6,-.15),new b(.6,.9,-.1),new b(.55,.45,.05),new b(.35,.1,.08),new b(.3,-.4,.15),new b(.15,.25,.35),new b(.05,.75,.3),new b(-.15,1.15,.1),new b(-.25,1.25,-.15),new b(-.6,1.2,-.35)]),this.redCurve=new xt([new b(-.7,.6,-.4),new b(-.35,.6,-.2),new b(-.35,.15,0),new b(-.3,-.7,0),new b(-.15,.4,0),new b(-.1,.9,.05),new b(0,1.45,0),new b(-.25,1.7,-.2),new b(-.55,1.55,-.4)])}buildParticles(){const e=new It(.028,8,8),t=new ln({color:58879}),n=new ln({color:16724838});for(let i=0;i<this.particleCount;i++){const a=i>=this.particleCount/2,r=new Q(e,a?n:t),o=Math.random(),c=.18+Math.random()*.08;this.group.add(r),this.particles.push({mesh:r,isRed:a,progress:o,speed:c,curve:a?this.redCurve:this.blueCurve,lateralOffset:new b((Math.random()-.5)*.08,(Math.random()-.5)*.08,(Math.random()-.5)*.08)})}}setActive(e){this.active=e,this.group.visible=e}update(e){if(this.active)for(let t=0;t<this.particles.length;t++){const n=this.particles[t];n.progress+=e*n.speed,n.progress>=1&&(n.progress=0);const i=n.curve.getPointAt(n.progress);n.mesh.position.copy(i).add(n.lateralOffset);const a=Math.sin(n.progress*Math.PI)*.4+.8;n.mesh.scale.setScalar(a)}}}class ym{constructor(e){this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.digitalBoard=null,this.clinicRoom=null,this.avatarModel=null,this.avatarController=null,this.heartModel=null,this.bloodFlow=null,this.cameraTarget=new b(0,1.4,0),this.cameraDesiredPos=new b(0,1.6,3.8),this.cameraDesiredTarget=new b(0,1.35,0),this.isTransitioningCamera=!1,this.cameraTransitionSpeed=3.5,this.cameraPresets={tutor:{pos:new b(0,1.55,1.7),target:new b(0,1.42,0)},heart:{pos:new b(-1.4,1.55,.8),target:new b(-1.4,1.42,-.6)},board:{pos:new b(.6,2.2,.2),target:new b(.6,2.2,-3.85)},room:{pos:new b(0,2.3,4.4),target:new b(0,1.35,-.8)}},this.init()}init(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.scene=new kp,this.scene.background=new Ge(396826),this.scene.fog=new Da(396826,.045),this.camera=new Lt(45,e/t,.1,50),this.camera.position.copy(this.cameraPresets.room.pos),this.renderer=new zp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Co,this.renderer.toneMapping=Po,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.controls=new pm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=.8,this.controls.maxDistance=8.5,this.controls.target.copy(this.cameraPresets.room.target),this.setupLights(),this.setupWorld(),window.addEventListener("resize",this.onWindowResize.bind(this))}setupLights(){const e=new um(993092,1.2);this.scene.add(e);const t=new _o(16774635,2.2);t.position.set(2.5,4.5,3.5),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.bias=-.001,this.scene.add(t);const n=new _o(58879,2);n.position.set(-3.5,3.2,-2.5),this.scene.add(n);const i=new rm(3718648,3.5,5,Math.PI*.35,.4);i.position.set(-1.4,3.2,-.6),i.target.position.set(-1.4,1.45,-.6),this.scene.add(i),this.scene.add(i.target);const a=new cm(58879,1.5,4);a.position.set(.6,2.4,-3),this.scene.add(a)}setupWorld(){this.digitalBoard=new gm,this.clinicRoom=new mm(this.digitalBoard.mesh),this.scene.add(this.clinicRoom.group),this.loadAvatar("asclepio"),this.heartModel=new xm,this.heartModel.group.position.set(-1.4,1.45,-.6),this.heartModel.group.scale.setScalar(.48),this.scene.add(this.heartModel.group),this.bloodFlow=new Mm(this.heartModel.group)}loadAvatar(e){this.avatarModel&&this.scene.remove(this.avatarModel.group),this.avatarModel=new vm(e),this.avatarModel.group.position.set(0,0,0),this.scene.add(this.avatarModel.group),this.avatarController=new _m(this.avatarModel)}setCameraPreset(e){const t=this.cameraPresets[e];t&&(this.cameraDesiredPos.copy(t.pos),this.cameraDesiredTarget.copy(t.target),this.isTransitioningCamera=!0)}onWindowResize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}update(e){this.isTransitioningCamera&&(this.camera.position.lerp(this.cameraDesiredPos,e*this.cameraTransitionSpeed),this.controls.target.lerp(this.cameraDesiredTarget,e*this.cameraTransitionSpeed),this.camera.position.distanceTo(this.cameraDesiredPos)<.05&&(this.camera.position.copy(this.cameraDesiredPos),this.controls.target.copy(this.cameraDesiredTarget),this.isTransitioningCamera=!1)),this.controls.update(),this.avatarController&&(this.avatarController.setCameraPosition(this.camera.position),this.avatarController.update(e)),this.heartModel&&(this.heartModel.update(e),this.heartModel.group.rotation.y+=e*.15),this.bloodFlow&&this.bloodFlow.update(e),this.digitalBoard&&this.digitalBoard.update(e),this.renderer.render(this.scene,this.camera)}}const ht={heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',stethoscope:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',micOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',volume2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',volumeX:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>',camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',messageSquare:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',rotate3d:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-3.843 1.43-6 1.43-5.523 0-10-4.477-10-10S7.477 2 13 2c3.48 0 6.54 1.776 8.32 4.48"/></svg>',bookOpen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',helpCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',checkCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>',skipForward:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',fileText:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>'},Eo=[{id:"cardiology",name:"Cardiologia",category:"Ciclo Clínico & Especialidades",icon:"heart",description:"Estudo do coração e dos vasos sanguíneos, hemodinâmica, arritmias, insuficiência cardíaca e cardiopatias isquêmicas.",topics:["Anatomia e Câmaras Cardíacas","Fisiologia do Ciclo Cardíaco","Eletrocardiograma (ECG) Básico e Avançado","Síndromes Coronarianas Agudas (IAM)","Valvulopatias e Ausculta Cardíaca","Hipertensão Arterial Sistêmica e Insuficiência Cardíaca"],highlight:!0},{id:"anatomy",name:"Anatomia Humana",category:"Ciclo Básico",icon:"layers",description:"Estruturas macroscópicas do corpo humano, topografia, planos anatômicos, ossos, músculos e órgãos vitais.",topics:["Sistema Osteoarticular","Vascularização e Linfáticos","Neuroanatomia","Anatomia do Tórax e Abdome"]},{id:"physiology",name:"Fisiologia Médica",category:"Ciclo Básico",icon:"activity",description:"Mecanismos funcionais dos sistemas biológicos, homeostase, transporte de membrana e regulação neuro-humoral.",topics:["Potencial de Ação e Sinapses","Fisiologia Renal e Ácido-Básico","Mecânica Respiratória","Controle Endócrino"]},{id:"semiology",name:"Semiologia Médica",category:"Ciclo Clínico",icon:"stethoscope",description:"A arte e técnica da anamnese, exame físico sistemático, identificação de sinais e sintomas diagnósticos.",topics:["Anamnese Estruturada","Exame Físico Cardiovascular","Semiologia Pulmonar","Exame Neurológico"]},{id:"pathology",name:"Patologia Geral e Especial",category:"Ciclo Básico / Clínico",icon:"eye",description:"Bases celulares e moleculares das doenças, inflamação, neoplasias, necrose e alterações teciduais.",topics:["Lesão Celular e Apoptose","Inflamação e Reparo","Aterosclerose e Trombose","Neoplasias Malignas"]},{id:"pharmacology",name:"Farmacologia Clínica",category:"Ciclo Básico / Clínico",icon:"zap",description:"Farmacocinética, farmacodinâmica, mecanismos de ação dos fármacos, posologia e interações medicamentosas.",topics:["Anti-hipertensivos e Antiarrítmicos","Antibioticoterapia Racional","Analgésicos e Anti-inflamatórios","Drogas Vasoativas"]},{id:"internal_medicine",name:"Clínica Médica",category:"Ciclo Clínico / Internato",icon:"fileText",description:"Diagnóstico e manejo de doenças sistêmicas no adulto, raciocínio clínico integrado e condutas hospitalares.",topics:["Diabetes Mellitus e Complicações","Insuficiência Renal Aguda/Crônica","Pneumonias e DPOC","Sepse e Choque"]},{id:"surgery",name:"Cirurgia Geral",category:"Ciclo Clínico / Internato",icon:"rotate3d",description:"Princípios cirúrgicos, técnicas operatórias, abdome agudo, resposta metabólica ao trauma e cuidados perioperatórios.",topics:["Abdome Agudo Cirúrgico","Técnicas de Hemostasia e Sutura","Apendicite e Colecistite","Trauma (ATLS)"]},{id:"pediatrics",name:"Pediatria e Puericultura",category:"Ciclo Clínico / Internato",icon:"user",description:"Acompanhamento do crescimento e desenvolvimento infantil, vacinação, patologias neonatais e pediátricas.",topics:["Marcos do Desenvolvimento","Calendário Vacinal","Infecções Respiratórias na Infância","Desidratação e Terapia de Reidratação"]},{id:"gynecology_obstetrics",name:"Ginecologia e Obstetrícia",category:"Ciclo Clínico / Internato",icon:"sparkles",description:"Saúde da mulher, ciclo gravídico-puerperal, assistência ao parto, rastreamento de neoplasias ginecológicas.",topics:["Pré-natal de Baixo e Alto Risco","Mecanismo do Parto","Síndromes Hipertensivas da Gestação","Rastreamento de CA de Colo e Mama"]},{id:"neurology",name:"Neurologia",category:"Ciclo Clínico / Residência",icon:"zap",description:"Doenças do sistema nervoso central e periférico, cefaleias, epilepsia, AVC e síndromes neuromusculares.",topics:["Acidente Vascular Cerebral (AVC)","Cefaleias Primárias e Secundárias","Síndromes Epilépticas","Doenças Desmielinizantes"]},{id:"histology",name:"Histologia",category:"Ciclo Básico",icon:"layers",description:"Microestrutura de tecidos epiteliais, conjuntivos, musculares e nervosos ao microscópio.",topics:["Tecido Muscular Cardíaco e Estriado","Endotélio e Vasos","Tecido Conjuntivo e Matriz Extracelular"]},{id:"embryology",name:"Embriologia Humana",category:"Ciclo Básico",icon:"sparkles",description:"Desenvolvimento pré-natal, gametogênese, organogênese e malformações congênitas.",topics:["Desenvolvimento do Tubo Cardíaco","Septação Cardíaca Fetal","Circulação Fetal e Pós-Natal"]},{id:"biochemistry",name:"Bioquímica Médica",category:"Ciclo Básico",icon:"zap",description:"Metabolismo intermediário, ciclo de Krebs, cadeia respiratória, enzimas e vias energéticas miocárdicas.",topics:["Metabolismo Energético Cardíaco","Marcadores Bioquímicos de Necrose Miocárdica","Lipídios e Aterogênese"]},{id:"microbiology",name:"Microbiologia Médica",category:"Ciclo Básico / Clínico",icon:"layers",description:"Bactérias, vírus, fungos e parasitas patogênicos, mecanismos de virulência e resistência antimicrobiana.",topics:["Bacteremia e Endocardite Infecciosa","Mecanismos de Resistência Bacteriana","Infecções Hospitalares"]},{id:"immunology",name:"Imunologia Médica",category:"Ciclo Básico / Clínico",icon:"activity",description:"Sistema imune inato e adaptativo, hipersensibilidade, autoimunidade e inflamação vascular.",topics:["Resposta Imune Inata vs Adaptativa","Imunopatologia da Febre Reumática","Citocinas Inflamatórias"]}],wo={modules:[{id:"mod1_anatomy",number:1,title:"Morfologia Geral e Circulação Dupla",subtitle:"Mediastino, Camadas da Parede e Circuito Sistêmico vs Pulmonar",tutorSpeech:"Olá, futuro colega médico! Seja muito bem-vindo ao nosso laboratório virtual de Cardiologia. Hoje vamos desvendar o coração humano em 3D. O coração é uma bomba mecânica muscular localizada no mediastino médio, inclinada obliquamente com seu ápice voltado para a esquerda e para frente. Note como ele divide o fluxo sanguíneo em dois circuitos em série: a circulação pulmonar, de baixa pressão, e a circulação sistêmica, de alta pressão. Observe aqui ao meu lado a distribuição espacial dos grandes vasos da base.",board:{heading:"Morfologia Cardíaca e Circuitos",badge:"Anatomia & Fisiologia",points:["Localização: Mediastino médio, repousando sobre a cúpula diafragmática.","Camadas: Pericárdio (fibroso/seroso), Miocárdio (músculo contrátil) e Endocárdio (revestimento endotelial).","Pequena Circulação (Pulmonar): VD → Tronco Pulmonar → Pulmões (hematose) → Veias Pulmonares → AE. Regime de baixa pressão (~25/10 mmHg).","Grande Circulação (Sistêmica): VE → Valva Aórtica → Aorta e ramos sistêmicos → Capilares corporais → Veias Cavas → AD. Regime de alta pressão (~120/80 mmHg)."],diagram:"circulatory_circuit",clinicalNote:"Derrame pericárdico agudo com apenas 150-200ml pode causar Tamponamento Cardíaco (Tríade de Beck: hipotensão, abafamento de bulhas e turgência jugular)."},heartFocus:"vessels",bloodFlowMode:"all",feynmanAnalogy:"Imagine o sistema cardiovascular como um circuito hidráulico predial com duas bombas acopladas: a primeira bomba (coração direito) apenas empurra a água para a estação de filtragem e oxigenação no telhado (pulmões) sem esforço. A segunda bomba (coração esquerdo), muito mais potente, empurra a água limpa com alta pressão para todos os andares do edifício (o corpo inteiro).",checkQuestion:{question:"Qual é a principal razão pela qual o regime de pressão da circulação pulmonar é significativamente menor que o da circulação sistêmica?",options:["Porque a resistência vascular pulmonar é muito menor para evitar extravasamento de líquido nos alvéolos (edema pulmonar).","Porque o sangue venoso é mais espesso e flui mais lentamente.","Porque o ventrículo direito não possui valvas de fechamento.","Porque o tronco pulmonar tem diâmetro inferior ao da aorta."],correctIndex:0,explanation:"Exatamente! A vasculatura pulmonar possui alta complacência e baixa resistência (RVP ~1/10 da RVS). Pressões elevadas no leito pulmonar levariam à ruptura da barreira alvéolo-capilar e edema agudo de pulmão."}},{id:"mod2_chambers_valves",number:2,title:"Câmaras, Valvas e Arquitetura Ventricular",subtitle:"Átrios, Ventrículos, Valvas Atrioventriculares e Semilunares",tutorSpeech:"Agora vamos abrir o corte anatômico do coração. Repare que as quatro câmaras cardíacas operam com assimetrias estruturais marcantes. O ventrículo esquerdo possui uma parede miocárdica quase três vezes mais espessa que a do ventrículo direito, pois precisa vencer a pós-carga sistêmica. E observe as valvas cardíacas: temos duas atrioventriculares — a Mitral, bicúspide à esquerda, e a Tricúspide à direita, fixadas por cordoalhas tendíneas aos músculos papilares. E as semilunares: Aórtica e Pulmonar. Elas garantem o fluxo estritamente unidirecional.",board:{heading:"Câmaras e Aparelho Valvar",badge:"Anatomia Macroscópica",points:["Átrio Direito: Recebe veias cavas superior e inferior e seio coronário; presença dos músculos pectinados e fossa oval.","Ventrículo Esquerdo: Miocárdio espesso (8-11 mm no adulto), cavidade elipsoide de alta pressão.","Valvas Atrioventriculares: Tricúspide (3 cúspides) e Mitral (2 cúspides). Sustentadas por cordoalhas tendíneas e músculos papilares para impedir prolapso na sístole.","Valvas Semilunares: Aórtica e Pulmonar (formato de bolsa/ninho de pombo com 3 cúspides)."],diagram:"valvular_apparatus",clinicalNote:"A ruptura de cordoalha tendínea (por infarto com isquemia de músculo papilar ou endocardite) gera insuficiência mitral aguda grave e choque cardiogênico súbito."},heartFocus:"cross_section",bloodFlowMode:"chambers",feynmanAnalogy:"As valvas atrioventriculares com suas cordoalhas funcionam como um paraquedas: quando o ventrículo contrai com enorme força, o sangue tenta forçar a porta de volta para o átrio, mas as cordas do paraquedas (cordoalhas) puxam as bordas da valva para mantê-la fechada e impedir que ela vire do avesso.",checkQuestion:{question:"O que ocorre funcionalmente com os músculos papilares e cordoalhas tendíneas durante a sístole ventricular?",options:["Os músculos papilares contraem-se simultaneamente com a parede ventricular, tensionando as cordoalhas e impedindo o prolapso das cúspides para o átrio.","Eles relaxam passivamente para permitir a abertura ampla da valva mitral.","Eles empurram a valva aórtica para cima para facilitar a ejeção.","Eles abrem canais iônicos de cálcio diretamente na cavidade atrial."],correctIndex:0,explanation:"Perfeito! Os músculos papilares contraem-se durante a sístole para manter a tensão nas cordoalhas tendíneas, contrapondo-se à enorme pressão intraventricular que tentaria forçar as cúspides valvares para o interior do átrio."}},{id:"mod3_cycle_auscultation",number:3,title:"Ciclo Cardíaco e Ausculta",subtitle:"Sístole, Diástole, Mecânica de Pressão e Gênese de B1 e B2",tutorSpeech:'Ouça atentamente este som rítmico que acabo de ativar no nosso simulador de áudio. É o famoso "tum-tá" da ausculta cardíaca. O primeiro som, B1, é produzido pela súbita desaceleração do sangue e vibração estrutural no fechamento das valvas mitral e tricúspide, marcando o início da sístole mecânica. O segundo som, B2, é gerado pelo fechamento das valvas semilunares, aórtica e pulmonar, selando o fim da sístole e o início da diástole. Vamos entender os cinco focos clássicos de ausculta no tórax.',board:{heading:"Fases do Ciclo e Focos Precordiais",badge:"Fisiologia & Semiologia",points:["Fases da Sístole: Contração isovolumétrica → Ejeção rápida → Ejeção reduzida.","Fases da Diástole: Relaxamento isovolumétrico → Enchimento ventricular rápido (onde pode surgir B3) → Diástase → Sístole atrial (contração atrial, onde pode surgir B4).",'Primeira Bulha (B1 - "tum"): Fechamento Mitral (M1) e Tricúspide (T1). Coincide com o pulso carotídeo.','Segunda Bulha (B2 - "tá"): Fechamento Aórtico (A2) e Pulmonar (P2). Desdobramento fisiológico na inspiração.',"Focos de Ausculta: Aórtico (2º EIC D), Pulmonar (2º EIC E), Acessório (3º EIC E), Tricúspide (4º/5º EIC E) e Mitral (5º EIC E na LHC)."],diagram:"wiggers_diagram",clinicalNote:"Terceira bulha (B3) é som de enchimento rápido por desaceleração abrupta em ventrículo dilatado complacente (comum na Insuficiência Cardíaca descompensada)."},heartFocus:"valves",bloodFlowMode:"beat_synced",feynmanAnalogy:"Pense em portas automáticas de vaivém de um salão: quando uma multidão entra correndo e tenta voltar de repente, a porta bate com força contra o batente criando um estrondo: B1 é a porta do fundo (mitral/tricúspide) batendo quando a sala começa a apertar, e B2 é a porta da frente (aórtica) batendo quando todo o fluxo já foi expulso.",checkQuestion:{question:"Durante qual fase exata do ciclo cardíaco todas as quatro valvas cardíacas encontram-se fechadas e o volume intraventricular permanece inalterado com pressão em rápida elevação?",options:["Contração isovolumétrica.","Ejeção ventricular rápida.","Enchimento ventricular passivo.","Sístole atrial."],correctIndex:0,explanation:"Excelente! Na contração isovolumétrica, os ventrículos estão despolarizados e contraindo, as valvas AV já se fecharam (B1), mas a pressão intraventricular ainda não superou a pressão diastólica da aorta (80 mmHg) nem da artéria pulmonar (10 mmHg), portanto todas as quatro valvas estão fechadas."}},{id:"mod4_electrophysiology_ecg",number:4,title:"Eletrofisiologia e Correlação com o ECG",subtitle:"Nó Sinusal, Condução e Formação das Ondas P, QRS e T",tutorSpeech:"Agora vamos analisar o motor elétrico que comanda tudo isso. Observe estas linhas luminosas pulsando no modelo 3D. O estímulo nasce espontaneamente no Nó Sinoatrial, no teto do átrio direito, graças ao automatismo das células marca-passo pelas correntes ifunny. A onda viaja pelos átrios despolarizando-os, o que desenha a Onda P no eletrocardiograma. Ao atingir o Nó Atrioventricular, o estímulo sofre um retardo fisiológico crucial de cerca de zero vírgula dez segundos. Esse atraso permite que os átrios esvaziem todo o sangue nos ventrículos antes que estes comecem a contrair. Em seguida, o feixe de His e as fibras de Purkinje disparam em altíssima velocidade, gerando o complexo QRS.",board:{heading:"Sistema de Condução e Morfologia do ECG",badge:"Eletrofisiologia Cardíaca",points:["Nó Sinoatrial (SA): Marca-passo fisiológico dominante (60-100 bpm) no sulco terminal do átrio direito.","Nó Atrioventricular (AV): Retardo de condução proporcional (intervalo PR normal: 120-200 ms). Evita sístole atrial e ventricular simultâneas.","Feixe de His e Ramos (Direito e Esquerdo com fascículos anterior e posterior) → Fibras de Purkinje (condução rápida a 2-4 m/s).","Onda P: Despolarização atrial (vetor de cima para baixo, direita para esquerda).","Complexo QRS: Despolarização ventricular rápida (< 120 ms).","Segmento ST e Onda T: Repolarização ventricular lenta."],diagram:"ecg_conduction_strip",clinicalNote:"Bloqueio Atrioventricular Total (BAVT): Dissociação completa entre ondas P e complexos QRS; emergência médica que comumente exige implante de marca-passo definitivo."},heartFocus:"conduction",bloodFlowMode:"electrical",feynmanAnalogy:"O sistema de condução cardíaco funciona como uma linha de trem de alta velocidade com uma cancela inteligente no meio do caminho: o trem parte da estação central (Nó SA), viaja rapidamente pela cidadezinha dos átrios, para na cancela (Nó AV) durante alguns segundos para todos os passageiros (o sangue) embarcarem nos vagões principais, e depois acelera a 300 km/h pelos trilhos expressos (Feixe de His e Purkinje) para disparar a propulsão.",checkQuestion:{question:"O que representa o Intervalo PR em um traçado eletrocardiográfico e qual é a consequência clínica se ele estiver progressivamente se alargando até haver uma onda P bloqueada (Fenômeno de Wenckebach)?",options:["Representa o tempo de condução sinusal e atrioventricular até os ventrículos; caracteriza o Bloqueio Atrioventricular de 2º Grau Mobitz I.","Representa a duração da repolarização ventricular; caracteriza Síndrome do QT Longo.","Representa a sobrecarga ventricular esquerda isolada.","Representa apenas o tempo de contração dos músculos papilares."],correctIndex:0,explanation:"Corretíssimo! O intervalo PR mede desde o início da despolarização atrial até o início da despolarização ventricular. O alargamento progressivo do PR seguido de onda P sem QRS subsequente define o BAV de 2º grau tipo Mobitz I (Wenckebach), geralmente com nó AV como sítio do bloqueio e prognóstico benigno."}},{id:"mod5_clinical_correlation",number:5,title:"Caso Clínico e Raciocínio Patológico",subtitle:"Síndrome Coronariana Aguda: Fisiopatologia, ECG e Conduta",tutorSpeech:"Para coroar nossa aula, vamos aplicar tudo o que vimos na beira do leito. Imagine que você está no plantão do pronto-socorro e dá entrada um paciente de 58 anos com dor torácica retroesternal em aperto, irradiando para mandíbula e membro superior esquerdo, acompanhada de sudorese fria há duas horas. Este é o quadro clássico de Síndrome Coronariana Aguda. A placa de ateroma rica em lipídios na artéria coronária sofreu erosão ou ruptura, expondo colágeno subendotelial e provocando trombo oclusivo agudo. O miocárdio isquêmico para de contrair e começa a sofrer lesão transmural, evidenciada pelo supradesnivelamento do segmento ST no ECG. Lembre-se do mantra da cardiologia: tempo é miocárdio!",board:{heading:"Síndrome Coronariana Aguda (IAM)",badge:"Emergência & Semiologia",points:["Fisiopatologia: Ruptura/fissura de placa aterosclerótica vulnerável → ativação e agregação plaquetária → cascata de coagulação → trombo oclusivo intraluminal.","Abordagem Imediata no PS (Protocolo Dor Torácica): ECG de 12 derivações em até 10 MINUTOS.","Diferenciação: IAM com Supra de ST (oclusão total) vs IAM sem Supra / Angina Instável (oclusão subtotal).","Biomarcadores: Troponina I ou T ultrassensível (curva ascendente em 1-3 horas).","Manejo Inicial: Dupla antiagregação plaquetária (AAS + Clopidogrel/Ticagrelor), anticoagulação plena, estatina potente e reperfusão imediata (Angioplastia primária em < 90 min porta-balão)."],diagram:"infarct_st_elevation",clinicalNote:"Nem toda dor torácica é IAM: sempre faça o diagnóstico diferencial com Dissecção Aguda de Aorta (dor lancinante, assimetria de pulsos), TEP (dispneia súbita, taquicardia) e Pneumotórax Hipertensivo."},heartFocus:"coronaries",bloodFlowMode:"ischemia_highlight",feynmanAnalogy:"Imagine uma avenida principal com 4 pistas (a artéria coronária descendente anterior) que alimenta um bairro inteiro com energia elétrica (o ventrículo esquerdo). Se um caminhão tomba e bloqueia todas as 4 pistas subitamente (trombo oclusivo total), o bairro inteiro entra em apagão elétrico (supra de ST) e as máquinas do bairro param de girar. Se você não mandar a equipe de resgate desobstruir a via em menos de 90 a 120 minutos, as construções do bairro sofrerão colapso permanente.",checkQuestion:{question:"Em um paciente com dor torácica típica e ECG demonstrando supradesnivelamento do segmento ST de 2 mm em DII, DIII e aVF (parede inferior), qual artéria coronária é mais frequentemente a culpada e qual exame complementar imediato deve ser realizado antes de administrar vasodilatadores (como nitratos)?",options:["Artéria Coronária Direita (ACD); deve-se rodar derivações direitas (V3R e V4R) para afastar acometimento do Ventrículo Direito, onde nitratos podem causar choque hipotensivo grave.","Artéria Circunflexa; deve-se solicitar ecocardiograma transtorácico com contraste antes de qualquer medicamento.","Tronco da Coronária Esquerda; deve-se administrar morfina em altas doses sem avaliação adicional.","Artéria Descendente Anterior; deve-se prescrever betabloqueador venoso imediatamente."],correctIndex:0,explanation:"Brilhante raciocínio clínico! A parede inferior (DII, DIII, aVF) é irrigada pela Coronária Direita em cerca de 85-90% dos indivíduos (dominância direita). Em até um terço dos casos há infarto associado do Ventrículo Direito, que é estritamente dependente de pré-carga. O uso inadvertido de nitratos dilata o sistema venoso, reduz drasticamente o retorno venoso e pode precipitar choque hemodinâmico catastrófico."}}]},Sm=[{id:"case_iam_carlos",title:"Caso Clínico: Dor Torácica Aguda no Pronto-Socorro",patient:{name:"Carlos Alberto Silva",age:58,gender:"Masculino",occupation:"Gerente Comercial",history:"Hipertenso e tabagista (40 anos-maço), dislipidêmico em uso irregular de sinvastatina. Nega cirurgias prévias."},stages:[{stageNumber:1,title:"Admissão e Queixa Principal",tutorIntroduction:"Doutor(a), o paciente Carlos acaba de dar entrada no setor de emergência do nosso hospital. Ele está sentado na maca com a mão espalmada sobre o peito (Sinal de Levine positivo), pálido e com sudorese fria. Vamos realizar a anamnese focada.",patientDialogue:'"Doutor, começou há cerca de duas horas enquanto eu estava dirigindo... Uma dor terrível em aperto, parece uma tonelada em cima do meu peito. Irradia para o braço esquerdo e para a minha mandíbula. Tentei respirar fundo e não melhora. Estou sentindo um enjoo e uma sensação de que vou morrer..."',vitalSigns:{pa:"160/95 mmHg",fc:"102 bpm (taquicárdico)",fr:"22 irpm",spo2:"96% em ar ambiente",tax:"36.4 °C"},tutorPrompt:"Diante desta queixa típica e fatores de risco cardiovasculares, qual é a sua PRIMEIRA ação prioritária no protocolo de dor torácica?",options:["Solicitar Eletrocardiograma de 12 derivações em até 10 minutos e monitorização contínua com oxímetro e acesso venoso.","Administrar imediatamente morfina em bolus e aguardar 30 minutos para reavaliar.","Solicitar tomografia de tórax com contraste para descartar pneumonia.","Prescrever alta hospitalar com indicação de consulta ambulatorial com cardiologista."],correctIndex:0,feedback:"Correto! A diretriz da Sociedade Brasileira de Cardiologia e da AHA/ACC preconiza a realização e interpretação do ECG de 12 derivações em até 10 minutos (tempo porta-ECG) da admissão de todo paciente com dor torácica suspeita."},{stageNumber:2,title:"Interpretação do Eletrocardiograma (ECG)",tutorIntroduction:"O eletrocardiograma foi impresso e colocado no nosso visor digital. Dê uma olhada no quadro: temos ritmo sinusal, frequência de 100 bpm e supradesnivelamento do segmento ST de 3 mm em V1, V2, V3 e V4, com inversão de onda T associada e imagens especulares (infradesnivelamento de ST) em DII, DIII e aVF.",findings:["Supradesnivelamento de ST de 3 mm de V1 a V4 (Parede Anterior / Ântero-septal).","Imagens em espelho (infradesnível) nas derivações inferiores.","Ausência de bloqueio de ramo esquerdo novo."],tutorPrompt:"Qual é a topografia da parede afetada e a artéria coronária culpada mais provável?",options:["Parede Anterior Extensa / Ântero-septal; Artéria Descendente Anterior (DA).","Parede Inferior; Artéria Coronária Direita (ACD).","Parede Lateral; Artéria Marginal Esquerda.","Parede Posterior; Artéria Circunflexa."],correctIndex:0,feedback:"Excelente identificação! As derivações V1-V4 avaliam o septo interventricular e a parede anterior do ventrículo esquerdo, território dependente da Artéria Descendente Anterior (ramo do tronco da coronária esquerda), responsável por perfundir a maior massa miocárdica ventricular."},{stageNumber:3,title:"Conduta e Terapia de Reperfusão",tutorIntroduction:"Com o diagnóstico firmado de Infarto Agudo do Miocárdio com Supradesnivelamento de ST (IAMCSST) de parede anterior, tempo é músculo! Nosso serviço conta com laboratório de hemodinâmica disponível 24 horas.",treatmentPoints:["Monitorização, 2 acessos venosos calibrosos, oxigênio apenas se SpO2 < 90%.","AAS 200 a 300 mg mastigável.","Segundo antiplaquetário: Ticagrelor 180 mg (ou Clopidogrel 600 mg).","Anticoagulação plena (Enoxaparina ou Heparina Não Fracionada).","Estatina de alta intensidade (Atorvastatina 80 mg).","Encaminhamento imediato para Angioplastia Coronariana Primária (Meta: tempo porta-balão < 90 minutos)."],tutorPrompt:"Se o paciente estivesse em uma UPA do interior a 3 horas de distância do serviço de hemodinâmica mais próximo (tempo para angioplastia > 120 min), qual seria a conduta mandatória de reperfusão?",options:["Realizar trombólise química com agente trombolítico (ex: Tenecteplase ou Alteplase) em até 30 minutos (tempo porta-agulha), na ausência de contraindicações formais.","Transferir o paciente em ambulância simples sem nenhuma medicação trombolítica.","Aguardar o resultado da dosagem de Troponina ultrassensível para confirmar se houve infarto antes de tomar conduta.","Aplicar apenas bolsa térmica de água quente no tórax e repouso."],correctIndex:0,feedback:"Perfeito! Quando o tempo previsto entre o primeiro contato médico e a insuflação do balão no laboratório de hemodinâmica ultrapassa 120 minutos, a reperfusão farmacológica imediata com fibrinolítico deve ser realizada com meta porta-agulha menor que 30 minutos, seguida de transferência para cateterismo nas 2 a 24 horas seguintes (estratégia fármaco-invasiva)."}]}],To={patient:{name:"Dona Maria de Lourdes"},dialogueNodes:{start:{tutorTip:"Comece saudando a paciente com empatia e perguntando o motivo de sua vinda.",patientGreeting:'"Bom dia, doutor(a)... Muito obrigada por me atender. Eu ando muito preocupada ultimamente."',options:[{text:"Bom dia, Dona Maria! Sente-se confortavelmente. Por favor, me conte o que tem sentido e como posso ajudar a senhora hoje?",type:"open_empathic",score:10,response:'"Doutor, de umas três semanas para cá, comecei a sentir uma falta de ar esquisita. Antes eu subia a escada da minha casa carregando compras sem problema. Agora, para varrer a sala, sinto que o ar não entra no pulmão. E meus pés parecem dois pães de tão inchados no fim da tarde."',nextNode:"symptom_deepening"},{text:"A senhora tem infarto na família ou pressão alta? Responda rápido, por favor.",type:"closed_cold",score:-5,tutorCorrection:"Cuidado! Interromper precocemente com perguntas fechadas e tom ríspido quebra a relação médico-paciente e impede a paciente de relatar a história espontânea.",response:'"Bem... Meu pai era hipertenso... Mas o que está me incomodando mesmo é o cansaço no peito e as pernas inchadas..."',nextNode:"symptom_deepening"}]},symptom_deepening:{tutorTip:"Excelente início. Agora vamos investigar a gravidade da dispneia e os sinais de congestão pulmonar e sistêmica.",options:[{text:"Entendo perfeitamente sua aflição, Dona Maria. Me conte: como a senhora tem dormido à noite? Precisa elevar a cabeceira ou acorda com falta de ar?",type:"clinical_gold",score:10,response:'"Nossa, doutor, o senhor acertou na mosca! Há quatro dias eu não consigo dormir com um travesseiro só, parece que estou me afogando. Precisei colocar três travesseiros para conseguir pregar o olho. E anteontem acordei de madrugada sufocada, precisei abrir a janela para puxar o ar."',nextNode:"habits_meds"},{text:"A senhora tem dor de estômago ou diarreia?",type:"unrelated",score:2,response:'"Não, meu intestino está normal... O problema é só o fôlego mesmo e as pernas."',nextNode:"habits_meds"}]},habits_meds:{tutorTip:"Quadro clássico de ortopneia e Dispneia Paroxística Noturna (DPN)! Investigue agora medicamentos em uso e adesão.",options:[{text:"Dona Maria, a senhora faz uso de algum remédio contínuo para pressão ou coração? Tem tomado certinho todos os dias?",type:"medication_adherence",score:10,response:'"O médico do posto me passou Enalapril e um comprimidinho de furosemida. Mas confesso que há umas três semanas acabou a furosemida e eu acabei não renovando a receita porque achei que já estava boazinha... E no fim de semana exagerei um pouco no bacalhau salgado."',nextNode:"conclusion"}]},conclusion:{tutorTip:"Hipótese diagnóstica brilhantemente construída: Insuficiência Cardíaca Congestiva (ICC) descompensada (perfil B - congesto e quente) precipitada por má adesão medicamentosa e sobrecarga de sódio alimentar.",patientConclusion:'"Doutor, o que será que eu tenho? É grave?"',options:[{text:"Dona Maria, compreendo sua preocupação. O seu coração está com dificuldade de bombear os líquidos do corpo porque faltou o diurético e houve excesso de sal. Nós vamos auscultar seu pulmão e coração agora, ajustar os remédios e a senhora vai voltar a respirar com tranquilidade.",score:10,isFinish:!0}]}}},bm=[{id:"aortic",name:"Foco Aórtico",anatomicalLocation:"2º Espaço Intercostal Direito, linha paraesternal direita",description:"Melhor ponto de ausculta para a valva aórtica. Permite ouvir B2 (componente A2) com intensidade superior a B1.",pathologySound:"stenosis",clinicalSignificance:"Estenose Aórtica: Sopro mesossistólico áspero, em diamante (crescendo-decrescendo), com irradiação típica para as artérias carótidas.",normalNotes:"B2 nítida e hiperfonética em comparação a B1."},{id:"pulmonic",name:"Foco Pulmonar",anatomicalLocation:"2º Espaço Intercostal Esquerdo, linha paraesternal esquerda",description:"Projeção da valva pulmonar. Ideal para avaliar o desdobramento fisiológico de B2 (A2 e P2 se afastam durante a inspiração profunda).",pathologySound:"normal",clinicalSignificance:"Desdobramento fixo de B2: Sugere Comunicação Interatrial (CIA). Hipertensão Pulmonar: Hiperfonese acentuada de P2.",normalNotes:"Desdobramento fisiológico durante a inspiração devido ao aumento do retorno venoso às câmaras direitas."},{id:"erbs",name:"Foco Aórtico Acessório (Ponto de Erb)",anatomicalLocation:"3º Espaço Intercostal Esquerdo, linha paraesternal esquerda",description:"Excelente para escutar fenômenos originados na via de saída do ventrículo esquerdo e regurgitações da valva aórtica.",pathologySound:"stenosis",clinicalSignificance:"Insuficiência Aórtica: Sopro protodiastólico aspirativo de alta frequência, mais bem audível com o paciente sentado e inclinado para frente.",normalNotes:"Área intermediária de transição entre base e ponta do coração."},{id:"tricuspid",name:"Foco Tricúspide",anatomicalLocation:"4º a 5º Espaço Intercostal Esquerdo, junto à borda esternal inferior",description:"Melhor foco para ausculta da valva atrioventricular direita (Tricúspide).",pathologySound:"regurgitation",clinicalSignificance:"Manobra de Rivero-Carvallo: Sopros tricúspides aumentam de intensidade na inspiração profunda, diferentemente dos sopros mitrais.",normalNotes:"B1 bem audível, componente T1 discreto."},{id:"mitral",name:"Foco Mitral (Ápice / Ictus Cordis)",anatomicalLocation:"5º Espaço Intercostal Esquerdo, linha hemiclavicular esquerda",description:"Localização do ápice do ventrículo esquerdo (ictus cordis). Foco primordial para avaliação da valva mitral e bulhas acessórias (B3 e B4).",pathologySound:"regurgitation",clinicalSignificance:"Insuficiência Mitral: Sopro holossistólico regurgitativo de alta frequência com irradiação característica para a axila esquerda. Presença de B3 em ventrículos dilatados.",normalNotes:"B1 é mais intensa que B2 no ápice cardíaco."}],Em=[{id:"oral_1",question:"Explique para mim com suas próprias palavras: qual é a função fisiológica do retardo de condução elétrica que ocorre no Nó Atrioventricular?",hint:"Pense na sincronização mecânica entre átrios e ventrículos.",keywords:["retardo","tempo","encher","esvaziar","átrio","ventrículo","sístole","contração","sangue"],idealAnswer:"O retardo fisiológico no nó atrioventricular (cerca de 0,10s) garante que a contração atrial (sístole atrial) ocorra antes da contração ventricular, permitindo o enchimento ventricular completo antes que os ventrículos comecem a ejetar sangue sob alta pressão.",tutorPraise:"Excelente formulação! Você compreendeu com precisão a harmonia hemodinâmica: se não houvesse esse atraso, átrios e ventrículos contrairiam quase simultaneamente, gerando colisão de fluxos e refluxo para as veias cavas e pulmonares."},{id:"oral_2",question:"Se um paciente apresenta um sopro sistólico em diamante (crescendo-decrescendo) audível com máxima intensidade no 2º espaço intercostal direito e que irradia para as carótidas, qual é o diagnóstico mais provável?",hint:"Qual valva se localiza no 2º espaço intercostal direito e abre durante a sístole?",keywords:["estenose","aórtica","aorta","valva"],idealAnswer:"Estenose da valva aórtica (Estenose Aórtica).",tutorPraise:"Perfeito! É a semiologia clássica da Estenose Aórtica. O formato em diamante reflete o aumento progressivo do gradiente de pressão transvalvar durante a ejeção máxima ventricular esquerda, diminuindo ao final da sístole."},{id:"oral_3",question:"Por que o ventrículo esquerdo tem uma parede muscular significativamente mais espessa que o ventrículo direito, mesmo ejetando exatamente o mesmo volume sistólico de sangue em cada batimento?",hint:"Lembre-se da diferença entre resistência vascular sistêmica e pulmonar (pós-carga).",keywords:["pressão","resistência","pós-carga","sistêmica","pulmonar","alta","força"],idealAnswer:"Porque o ventrículo esquerdo ejeta contra a alta resistência vascular sistêmica (pós-carga elevada, ~120/80 mmHg), exigindo maior tensão parietal e hipertrofia miocárdica fisiológica (Lei de Laplace), enquanto o ventrículo direito ejeta contra a baixa resistência da vasculatura pulmonar (~25/10 mmHg).",tutorPraise:"Resposta brilhante e embasada na biofísica médica! A espessura miocárdica é uma adaptação direta à pós-carga imposta pela circulação sistêmica."}],wm=[{id:"sim_1",source:"Revalida / Residência Médica",discipline:"Cardiologia & Emergência",level:"Internato / Residência",stem:"Homem de 62 anos, com antecedentes de diabetes mellitus tipo 2 e hipertensão arterial, dá entrada na sala de emergência com queixa de dor torácica retroesternal opressiva há 90 minutos, com irradiação para mandíbula e sudorese profusa. O ECG realizado em 6 minutos evidencia supradesnivelamento do segmento ST de 3,5 mm nas derivações V1, V2, V3 e V4. PA: 130/80 mmHg, FC: 84 bpm. O hospital possui laboratório de hemodinâmica com equipe disponível no momento da admissão. Qual é a conduta imediata mais adequada?",options:["Encaminhar imediatamente para Angioplastia Coronariana Primária com meta porta-balão < 90 minutos, administrando AAS e segundo antiagregante plaquetário.","Administrar trombolítico venoso (tenecteplase) imediatamente e transferir para a UTI para aguardar curva enzimática de troponina.","Solicitar ecocardiograma de urgência e aguardar estabilização clínica por 24 horas antes de qualquer intervenção invasiva.","Iniciar apenas heparina em infusão contínua e indicar teste ergométrico após 48 horas."],correctIndex:0,rationale:"No IAM com supra de ST, em hospital com serviço de hemodinâmica disponível, a Angioplastia Primária é a estratégia de escolha padrão-ouro, devendo ser realizada com tempo porta-balão inferior a 90 minutos. A terapia antiplaquetária dupla (AAS + inibidor de P2Y12) e anticoagulação plena devem ser iniciadas de imediato."},{id:"sim_2",source:"Enade / Semiologia Médica",discipline:"Semiologia Cardiovascular",level:"Ciclo Clínico",stem:"Durante o exame físico de um estudante de medicina de 22 anos, assintomático, o médico preceptor ausculta no foco pulmonar uma segunda bulha cardíaca que se apresenta desdobrada em dois componentes (A2 e P2) durante a fase inspiratória profunda, tornando-se única durante a expiração forçada. Qual é a interpretação semiológica correta deste achado?",options:["Desdobramento fisiológico da segunda bulha cardíaca, decorrente do aumento do retorno venoso ao coração direito na inspiração.","Comunicação interatrial (CIA) com desdobramento fixo e patológico de B2.","Hipertensão arterial pulmonar grave com hiperfonese de P2.","Bloqueio completo de ramo esquerdo com desdobramento paradoxal de B2."],correctIndex:0,rationale:"Durante a inspiração, a pressão intratorácica negativa aumenta o retorno venoso para o átrio e ventrículo direito. Isso prolonga o tempo de ejeção do ventrículo direito, atrasando o fechamento da valva pulmonar (P2). Simultaneamente, o leito vascular pulmonar retém mais sangue, reduzindo temporariamente o retorno venoso ao coração esquerdo e encurtando o tempo de ejeção do VE, adiantando discretamente o fechamento aórtico (A2). Esse fenômeno é o desdobramento fisiológico normal de B2."},{id:"sim_3",source:"Residência Médica / Eletrofisiologia",discipline:"Fisiologia & Eletrocardiograma",level:"Ciclo Básico / Clínico",stem:"Em um traçado de eletrocardiograma padrão de 12 derivações registrado a 25 mm/s e 10 mm/mV, observa-se que a duração do Complexo QRS é de 160 milissegundos (4 quadradinhos). O que essa duração prolongada indica fundamentalmente do ponto de vista biofísico?",options:["Despolarização ventricular lenta e dessincronizada, indicando bloqueio no sistema especializado de condução intraventricular (ex: Bloqueio de Ramo).","Atraso na condução nodal atrioventricular (aumento do intervalo PR).","Isquemia subendocárdica difusa sem lesão mecânica.","Aumento do tempo de relaxamento mecânico diastólico (diástase prolongada)."],correctIndex:0,rationale:"A duração normal do QRS é de 70 a 100 ms (< 120 ms ou 3 quadradinhos). Um QRS largo (≥ 120 ms) significa que a onda de despolarização não está utilizando as vias de condução ultrarrápida do sistema His-Purkinje normalmente em ambos os ventrículos, propagando-se lentamente de miócito a miócito, como ocorre nos bloqueios de ramo (direito ou esquerdo) ou em ritmos ventriculares ectópicos."}];class Tm{constructor(){this.studentName="Colega",this.studentLevel="Ciclo Clínico",this.tutorPersona={name:"Dr. Asclépio",specialty:"Cardiologia & Clínica Médica",title:"Professor Titular de Medicina",tone:"Empático, Socrático e Rigoroso",avatarId:"asclepio"},this.studiedTopics=new Set(["Anatomia Cardíaca","Ciclo Cardíaco","Valvas Cardíacas"]),this.difficulties=[],this.lastTopic="Sistema Cardiovascular",this.lastExplanation="",this.conversationHistory=[]}setStudentInfo(e,t){e&&e.trim()&&(this.studentName=e.trim()),t&&(this.studentLevel=t)}setTutorPersona(e){this.tutorPersona={...this.tutorPersona,...e}}recordTopic(e){this.studiedTopics.add(e),this.lastTopic=e}recordDifficulty(e){this.difficulties.push({topic:e,date:new Date().toISOString()})}generateResponse(e,t={}){const n=e.toLowerCase().trim();let i="",a=null,r=null,o="gestureExplain1";return this.conversationHistory.push({sender:"user",text:e,time:new Date}),n.includes("não entendi")||n.includes("simplifi")||n.includes("feynman")||n.includes("mais simples")||n.includes("muito difícil")?(o="gestureExplain2",i=`Fique tranquilo(a), ${this.studentName}! Em Medicina, os conceitos mais belos costumam parecer complexos no início. Vamos usar a Técnica de Feynman e simplificar:
      
Pense no coração como o sistema de bombeamento de um edifício moderno:
1. Os **Átrios** são caixas d'água de recepção — eles apenas recebem o líquido que vem da rua (veias) sem fazer força.
2. Os **Ventrículos** são as bombas pressurizadoras com motores potentes que injetam o líquido nos canos principais.
3. As **Valvas** são registros unidirecionais que impedem que a água volte e transborde o cano.
4. E a **eletricidade** é como o circuito de fiação elétrica que dispara a faísca para o motor ligar exatamente na hora certa.

Ficou mais claro esse fluxo, ou prefere que a gente analise cada cano e registro individualmente no nosso modelo 3D?`,a="feynman_explanation",r="chambers",this.recordDifficulty(this.lastTopic)):n.includes("exemplo")||n.includes("caso real")||n.includes("prática")||n.includes("beira do leito")?(o="gesturePresentOrgan",i=`${this.studentName}, vamos ver como isso se traduz na beira do leito!
      
Imagine um paciente que chega ao pronto-socorro referindo cansaço progressivo aos esforços. Ao colocar o estetoscópio no ápice cardíaco (5º espaço intercostal na linha hemiclavicular esquerda), você ausculta um sopro holossistólico em jato que irradia para a axila.
Isso ocorre porque a valva mitral não está fechando hermeticamente durante a sístole — uma fração do sangue que deveria ir para a aorta volta para o átrio esquerdo, aumentando a pressão no leito pulmonar.
Gostaria que eu ativasse a ausculta desse sopro no nosso simulador de áudio agora?`,a="clinical_example",r="valves"):n.includes("3d")||n.includes("mostrar")||n.includes("ver")||n.includes("coração")||n.includes("modelo")?(o="gesturePresentOrgan",i=`Com prazer, ${this.studentName}! Estou destacando o modelo tridimensional do coração ao nosso lado. Note o corte anatômico com os ventrículos em corte coronal, permitindo observar a espessura da parede do VE e as cordoalhas tendíneas da valva mitral. Você pode usar o mouse ou o toque para girá-lo em 360 graus e aproximar qualquer estrutura.`,a="focus_3d",r="cross_section"):n.includes("ecg")||n.includes("eletro")||n.includes("onda p")||n.includes("qrs")||n.includes("st")?(o="gesturePointBoard",i=`Excelente pergunta sobre Eletrocardiografia, ${this.studentName}!
      
O ECG é a representação gráfica vetorial da atividade elétrica do miocárdio:
- **Onda P**: Despolarização dos átrios (origina-se no Nó Sinusal).
- **Intervalo PR**: Tempo de trânsito elétrico desde os átrios até os ventrículos, com retardo benéfico no Nó AV (normal: 120 a 200 ms).
- **Complexo QRS**: Despolarização simultânea dos ventrículos via Feixe de His e Fibras de Purkinje (normal: < 120 ms).
- **Segmento ST e Onda T**: Repolarização ventricular lenta.

Qual desses segmentos você gostaria de aprofundar para correlacionar com arritmias ou isquemia?`,a="show_ecg",r="conduction"):n.includes("ausculta")||n.includes("estetoscópio")||n.includes("bulha")||n.includes("b1")||n.includes("b2")||n.includes("sopro")?(o="gestureListen",i=`${this.studentName}, a ausculta cardíaca é um dos pilares mais nobres da Semiologia Médica!
      
Lembre-se sempre da regra de ouro:
- **B1 ("tum")**: Fechamento das valvas atrioventriculares (Mitral e Tricúspide). Coincide perfeitamente com o pulso carotídeo.
- **B2 ("tá")**: Fechamento das valvas semilunares (Aórtica e Pulmonar). Apresenta desdobramento fisiológico na inspiração no foco pulmonar.
- **Sopros**: Turbilhonamento do fluxo sanguíneo através de orifícios estenosados ou regurgitantes.

Você pode clicar na aba "Ausculta Cardíaca" no menu lateral para ouvir o som real de cada foco e identificar sopros sistólicos e diastólicos.`,a="show_auscultation",r="valves"):n.includes("infarto")||n.includes("iam")||n.includes("dor no peito")||n.includes("coronária")?(o="gestureExplain1",i=`Na emergência médica, ${this.studentName}, 'tempo é miocárdio'.
      
No Infarto Agudo do Miocárdio com Supra de ST (IAMCSST):
1. Uma placa aterosclerótica rica em núcleo lipídico sofre ruptura no endotélio coronariano.
2. Plaquetas aderem ao colágeno subendotelial e ativam a cascata de coagulação, formando um trombo oclusivo total.
3. Sem sangue oxigenado, os cardiomiócitos sofrem parada do metabolismo aeróbico em segundos e necrose celular transmural a partir de 20-30 minutos.
4. O ECG deve ser feito em menos de **10 minutos** e a meta de abertura do vaso por angioplastia primária é de **menos de 90 minutos** (tempo porta-balão).

Gostaria de resolver comigo o nosso Caso Clínico Simulado do paciente com dor torácica no modo Caso Clínico?`,a="recommend_case",r="coronaries"):n.includes("pergunta")||n.includes("quiz")||n.includes("teste")||n.includes("questão")?(o="gestureApprove",i=`Adoro seu entusiasmo para testar o conhecimento ativo, ${this.studentName}! Aqui vai uma provocação socrática:
      
*Por que um paciente em choque por infarto de Ventrículo Direito NUNCA deve receber nitroglicerina ou nitratos, enquanto um paciente com infarto anterior de VE frequentemente se beneficia de vasodilatadores?*
      
Pense no conceito de pré-carga e me responda falando ao microfone ou digitando!`,a="oral_quiz"):(o="gestureExplain1",i=`Muito bem colocado, ${this.studentName}. Sobre "${e}", no nível de ${this.studentLevel}, é fundamental integrarmos a base fisiológica com a prática médica clínica.
      
No sistema cardiovascular, cada detalhe anatômico tem uma razão direta de sobrevivência hemodinâmica. O coração mantém um débito cardíaco de cerca de 5 litros por minuto em repouso, modulado autonomamente pelo sistema simpático e parassimpático.
      
Para onde você prefere direcionar nosso estudo agora? Podemos:
1. Avançar para as fases mecânicas do Ciclo Cardíaco;
2. Simular uma ausculta com estetoscópio;
3. Resolver um caso clínico no pronto-socorro;
4. Realizar um Quiz Oral com avaliação de voz.`),this.lastExplanation=i,this.conversationHistory.push({sender:"tutor",text:i,time:new Date}),{text:i,gesture:o,action:a,focus3D:r}}}const xn=new Tm;class Am{constructor(){this.synth=window.speechSynthesis,this.voices=[],this.selectedVoice=null,this.isSpeaking=!1,this.isListening=!1,this.muted=!1,this.speechRate=1,this.speechPitch=1,this.recognition=null,this.mouthCallback=null,this.subtitleCallback=null,this.speechEndCallback=null,this.simulatedLipInterval=null,this.initVoices(),this.initRecognition()}initVoices(){if(!this.synth)return;const e=()=>{this.voices=this.synth.getVoices();const t=this.voices.filter(n=>n.lang.includes("pt-BR")||n.lang.includes("pt_BR")||n.lang.includes("pt"));t.length>0?this.selectedVoice=t[0]:this.voices.length>0&&(this.selectedVoice=this.voices[0])};e(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=e)}getAvailableVoices(){return this.voices.filter(e=>e.lang.includes("pt")||e.lang.includes("es")||e.lang.includes("en"))}setVoiceByGender(e="male"){const t=this.voices.filter(n=>n.lang.includes("pt"));if(e==="female"){const n=t.find(i=>/female|maria|luciana|francisca|vitória|helena|zira/i.test(i.name));n&&(this.selectedVoice=n)}else{const n=t.find(i=>/male|daniel|felipe|ricardo|antônio|david/i.test(i.name));n?this.selectedVoice=n:t.length>0&&(this.selectedVoice=t[0])}}initRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.warn("Speech Recognition not supported in this browser.");return}try{this.recognition=new e,this.recognition.lang="pt-BR",this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.maxAlternatives=1}catch(t){console.warn("Failed to initialize Speech Recognition:",t)}}onMouthUpdate(e){this.mouthCallback=e}onSubtitle(e){this.subtitleCallback=e}onSpeechEnd(e){this.speechEndCallback=e}speak(e,t=null){if(!e||this.muted||!this.synth){this.subtitleCallback&&this.subtitleCallback(e,!1),t&&t();return}this.stopSpeaking();const n=e.replace(/[*_#`~]/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/https?:\/\/\S+/g,""),i=new SpeechSynthesisUtterance(n);i.lang="pt-BR",this.selectedVoice&&(i.voice=this.selectedVoice),i.rate=this.speechRate,i.pitch=this.speechPitch,this.isSpeaking=!0,this.subtitleCallback&&this.subtitleCallback(e,!0),this.startSimulatedLipSync(),i.onboundary=a=>{if(a.name==="word"){const r=n.substring(a.charIndex,a.charIndex+(a.charLength||6));/[aeiouáéíóúãõâêô]/i.test(r)&&this.mouthCallback&&this.mouthCallback(.65+Math.random()*.35)}},i.onend=()=>{this.stopSpeaking(),this.subtitleCallback&&this.subtitleCallback(e,!1),this.speechEndCallback&&this.speechEndCallback(),t&&t()},i.onerror=a=>{console.warn("TTS error:",a),this.stopSpeaking(),this.subtitleCallback&&this.subtitleCallback(e,!1),t&&t()},this.synth.speak(i)}startSimulatedLipSync(){this.simulatedLipInterval&&clearInterval(this.simulatedLipInterval);let e=0;this.simulatedLipInterval=setInterval(()=>{if(!this.isSpeaking){clearInterval(this.simulatedLipInterval),this.mouthCallback&&this.mouthCallback(0);return}e++;const t=Math.sin(e*.7)*.5+.5,n=(Math.random()-.5)*.2,i=Math.max(0,Math.min(1,t*.7+n));this.mouthCallback&&this.mouthCallback(i)},70)}stopSpeaking(){this.isSpeaking=!1,this.synth&&this.synth.cancel(),this.simulatedLipInterval&&(clearInterval(this.simulatedLipInterval),this.simulatedLipInterval=null),this.mouthCallback&&this.mouthCallback(0)}startListening(e,t){if(!this.recognition&&(this.initRecognition(),!this.recognition)){t&&t("not_supported");return}try{this.isListening=!0,t&&t("listening"),this.recognition.onresult=n=>{let i="",a="";for(let r=n.resultIndex;r<n.results.length;++r)n.results[r].isFinal?a+=n.results[r][0].transcript:i+=n.results[r][0].transcript;e&&e({interim:i,final:a,confidence:n.results[0]?n.results[0][0].confidence:.9})},this.recognition.onerror=n=>{console.warn("SpeechRec error:",n.error),this.isListening=!1,t&&t("error",n.error)},this.recognition.onend=()=>{this.isListening=!1,t&&t("ended")},this.recognition.start()}catch(n){console.warn("Could not start recognition:",n),this.isListening=!1,t&&t("error",n)}}stopListening(){if(this.recognition&&this.isListening)try{this.recognition.stop()}catch{}this.isListening=!1}}const Mn=new Am;class Cm{constructor(){this.ctx=null,this.masterGain=null,this.heartVolume=.7,this.ecgVolume=.25,this.isMuted=!1,this.currentHeartRate=72,this.isPlayingHeartLoop=!1,this.heartLoopTimer=null,this.currentCondition="normal",this.onBeatListeners=[]}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(e){console.warn("Web Audio not supported:",e)}}ensureContext(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}addOnBeatListener(e){this.onBeatListeners.push(e)}playS1(e=null){if(this.ensureContext(),!this.ctx)return;const t=e||this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(110,t),n.type="sine",n.frequency.setValueAtTime(65,t),n.frequency.exponentialRampToValueAtTime(38,t+.12);const r=this.heartVolume*.9;i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(r,t+.02),i.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(a),a.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.15)}playS2(e=null){if(this.ensureContext(),!this.ctx)return;const t=e||this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(160,t),n.type="sine",n.frequency.setValueAtTime(105,t),n.frequency.exponentialRampToValueAtTime(55,t+.09);const r=this.heartVolume*.8;i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(r,t+.015),i.gain.exponentialRampToValueAtTime(.001,t+.11),n.connect(a),a.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.12)}playMurmur(e,t=.25,n="crescendo"){if(this.ensureContext(),!this.ctx)return;const i=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=a.getChannelData(0);for(let d=0;d<i;d++)r[d]=(Math.random()*2-1)*.4;const o=this.ctx.createBufferSource();o.buffer=a;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(320,e),c.Q.setValueAtTime(2.5,e);const l=this.ctx.createGain(),u=this.heartVolume*.55;n==="crescendo"?(l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(u,e+t*.5),l.gain.linearRampToValueAtTime(.001,e+t)):(l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(u,e+.03),l.gain.setValueAtTime(u,e+t-.03),l.gain.linearRampToValueAtTime(.001,e+t)),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(e),o.stop(e+t)}playEcgBeep(e=null){if(this.ensureContext(),!this.ctx||this.ecgVolume<=0)return;const t=e||this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(880,t),i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(this.ecgVolume*.4,t+.01),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.09)}triggerHeartBeat(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime;this.playEcgBeep(e),this.playS1(e+.02);const t=Math.max(.2,60/this.currentHeartRate*.35);this.currentCondition==="stenosis"?this.playMurmur(e+.07,t-.08,"crescendo"):this.currentCondition==="regurgitation"&&this.playMurmur(e+.04,t-.02,"plateau"),this.playS2(e+t),this.onBeatListeners.forEach(n=>{try{n({timestamp:e,hr:this.currentHeartRate,s2Delay:t})}catch{}})}startHeartLoop(e=72,t="normal"){this.currentHeartRate=e,this.currentCondition=t,this.isPlayingHeartLoop=!0,this.heartLoopTimer&&clearInterval(this.heartLoopTimer);const n=60/this.currentHeartRate*1e3;this.triggerHeartBeat(),this.heartLoopTimer=setInterval(()=>{this.isPlayingHeartLoop&&this.triggerHeartBeat()},n)}stopHeartLoop(){this.isPlayingHeartLoop=!1,this.heartLoopTimer&&(clearInterval(this.heartLoopTimer),this.heartLoopTimer=null)}setMuted(e){this.isMuted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(e?0:1,this.ctx.currentTime)}setHeartVolume(e){this.heartVolume=Math.max(0,Math.min(1,e))}setEcgVolume(e){this.ecgVolume=Math.max(0,Math.min(1,e))}}const qt=new Cm;var Fa={};(function s(e,t,n,i){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),C=I.getContext("2d");C.fillRect(0,0,1,1);var re=I.transferToImageBitmap();C.createPattern(re,"no-repeat")}catch{return!1}return!0}();function c(){}function l(I){var C=t.exports.Promise,re=C!==void 0?C:e.Promise;return typeof re=="function"?new re(I):(I(c,c),null)}var u=function(I,C){return{transform:function(re){if(I)return re;if(C.has(re))return C.get(re);var ue=new OffscreenCanvas(re.width,re.height),B=ue.getContext("2d");return B.drawImage(re,0,0),C.set(re,ue),ue},clear:function(){C.clear()}}}(o,new Map),d=function(){var I=Math.floor(16.666666666666668),C,re,ue={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(j){var ne=Math.random();return ue[ne]=requestAnimationFrame(function K(he){B===he||B+I-1<he?(B=he,delete ue[ne],j()):ue[ne]=requestAnimationFrame(K)}),ne},re=function(j){ue[j]&&cancelAnimationFrame(ue[j])}):(C=function(j){return setTimeout(j,I)},re=function(j){return clearTimeout(j)}),{frame:C,cancel:re}}(),h=function(){var I,C,re={};function ue(B){function j(ne,K){B.postMessage({options:ne||{},callback:K})}B.init=function(K){var he=K.transferControlToOffscreen();B.postMessage({canvas:he},[he])},B.fire=function(K,he,ge){if(C)return j(K,null),C;var be=Math.random().toString(36).slice(2);return C=l(function(P){function Ee(Ae){Ae.data.callback===be&&(delete re[be],B.removeEventListener("message",Ee),C=null,u.clear(),ge(),P())}B.addEventListener("message",Ee),j(K,be),re[be]=Ee.bind(null,{data:{callback:be}})}),C},B.reset=function(){B.postMessage({reset:!0});for(var K in re)re[K](),delete re[K]}}return function(){if(I)return I;if(!n&&a){var B=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([B])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}ue(I)}return I}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(I,C){return C?C(I):I}function _(I){return I!=null}function p(I,C,re){return g(I&&_(I[C])?I[C]:f[C],re)}function m(I){return I<0?0:Math.floor(I)}function w(I,C){return Math.floor(Math.random()*(C-I))+I}function S(I){return parseInt(I,16)}function T(I){return I.map(O)}function O(I){var C=String(I).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:S(C.substring(0,2)),g:S(C.substring(2,4)),b:S(C.substring(4,6))}}function L(I){var C=p(I,"origin",Object);return C.x=p(C,"x",Number),C.y=p(C,"y",Number),C}function R(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function N(I){var C=I.getBoundingClientRect();I.width=C.width,I.height=C.height}function E(I){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=I,C}function M(I,C,re,ue,B,j,ne,K,he){I.save(),I.translate(C,re),I.rotate(j),I.scale(ue,B),I.arc(0,0,1,ne,K,he),I.restore()}function D(I){var C=I.angle*(Math.PI/180),re=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-C+(.5*re-Math.random()*re),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function W(I,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var re=C.tick++/C.totalTicks,ue=C.x+C.random*C.tiltCos,B=C.y+C.random*C.tiltSin,j=C.wobbleX+C.random*C.tiltCos,ne=C.wobbleY+C.random*C.tiltSin;if(I.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-re)+")",I.beginPath(),r&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))I.fill(ee(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(j-ue)*.1,Math.abs(ne-B)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var K=Math.PI/10*C.wobble,he=Math.abs(j-ue)*.1,ge=Math.abs(ne-B)*.1,be=C.shape.bitmap.width*C.scalar,P=C.shape.bitmap.height*C.scalar,Ee=new DOMMatrix([Math.cos(K)*he,Math.sin(K)*he,-Math.sin(K)*ge,Math.cos(K)*ge,C.x,C.y]);Ee.multiplySelf(new DOMMatrix(C.shape.matrix));var Ae=I.createPattern(u.transform(C.shape.bitmap),"no-repeat");Ae.setTransform(Ee),I.globalAlpha=1-re,I.fillStyle=Ae,I.fillRect(C.x-be/2,C.y-P/2,be,P),I.globalAlpha=1}else if(C.shape==="circle")I.ellipse?I.ellipse(C.x,C.y,Math.abs(j-ue)*C.ovalScalar,Math.abs(ne-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):M(I,C.x,C.y,Math.abs(j-ue)*C.ovalScalar,Math.abs(ne-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var Se=Math.PI/2*3,_e=4*C.scalar,Ue=8*C.scalar,Le=C.x,Pe=C.y,Xe=5,A=Math.PI/Xe;Xe--;)Le=C.x+Math.cos(Se)*Ue,Pe=C.y+Math.sin(Se)*Ue,I.lineTo(Le,Pe),Se+=A,Le=C.x+Math.cos(Se)*_e,Pe=C.y+Math.sin(Se)*_e,I.lineTo(Le,Pe),Se+=A;else I.moveTo(Math.floor(C.x),Math.floor(C.y)),I.lineTo(Math.floor(C.wobbleX),Math.floor(B)),I.lineTo(Math.floor(j),Math.floor(ne)),I.lineTo(Math.floor(ue),Math.floor(C.wobbleY));return I.closePath(),I.fill(),C.tick<C.totalTicks}function G(I,C,re,ue,B){var j=C.slice(),ne=I.getContext("2d"),K,he,ge=l(function(be){function P(){K=he=null,ne.clearRect(0,0,ue.width,ue.height),u.clear(),B(),be()}function Ee(){n&&!(ue.width===i.width&&ue.height===i.height)&&(ue.width=I.width=i.width,ue.height=I.height=i.height),!ue.width&&!ue.height&&(re(I),ue.width=I.width,ue.height=I.height),ne.clearRect(0,0,ue.width,ue.height),j=j.filter(function(Ae){return W(ne,Ae)}),j.length?K=d.frame(Ee):P()}K=d.frame(Ee),he=P});return{addFettis:function(be){return j=j.concat(be),ge},canvas:I,promise:ge,reset:function(){K&&d.cancel(K),he&&he()}}}function Z(I,C){var re=!I,ue=!!p(C||{},"resize"),B=!1,j=p(C,"disableForReducedMotion",Boolean),ne=a&&!!p(C||{},"useWorker"),K=ne?h():null,he=re?R:N,ge=I&&K?!!I.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,P;function Ee(Se,_e,Ue){for(var Le=p(Se,"particleCount",m),Pe=p(Se,"angle",Number),Xe=p(Se,"spread",Number),A=p(Se,"startVelocity",Number),x=p(Se,"decay",Number),H=p(Se,"gravity",Number),te=p(Se,"drift",Number),ie=p(Se,"colors",T),ae=p(Se,"ticks",Number),Te=p(Se,"shapes"),de=p(Se,"scalar"),le=!!p(Se,"flat"),Fe=L(Se),oe=Le,Me=[],Ve=I.width*Fe.x,De=I.height*Fe.y;oe--;)Me.push(D({x:Ve,y:De,angle:Pe,spread:Xe,startVelocity:A,color:ie[oe%ie.length],shape:Te[w(0,Te.length)],ticks:ae,decay:x,gravity:H,drift:te,scalar:de,flat:le}));return P?P.addFettis(Me):(P=G(I,Me,he,_e,Ue),P.promise)}function Ae(Se){var _e=j||p(Se,"disableForReducedMotion",Boolean),Ue=p(Se,"zIndex",Number);if(_e&&be)return l(function(A){A()});re&&P?I=P.canvas:re&&!I&&(I=E(Ue),document.body.appendChild(I)),ue&&!ge&&he(I);var Le={width:I.width,height:I.height};K&&!ge&&K.init(I),ge=!0,K&&(I.__confetti_initialized=!0);function Pe(){if(K){var A={getBoundingClientRect:function(){if(!re)return I.getBoundingClientRect()}};he(A),K.postMessage({resize:{width:A.width,height:A.height}});return}Le.width=Le.height=null}function Xe(){P=null,ue&&(B=!1,e.removeEventListener("resize",Pe)),re&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,ge=!1)}return ue&&!B&&(B=!0,e.addEventListener("resize",Pe,!1)),K?K.fire(Se,Le,Xe):Ee(Se,Le,Xe)}return Ae.reset=function(){K&&K.reset(),P&&P.reset()},Ae}var J;function Y(){return J||(J=Z(null,{useWorker:!0,resize:!0})),J}function ee(I,C,re,ue,B,j,ne){var K=new Path2D(I),he=new Path2D;he.addPath(K,new DOMMatrix(C));var ge=new Path2D;return ge.addPath(he,new DOMMatrix([Math.cos(ne)*B,Math.sin(ne)*B,-Math.sin(ne)*j,Math.cos(ne)*j,re,ue])),ge}function $(I){if(!r)throw new Error("path confetti are not supported in this browser");var C,re;typeof I=="string"?C=I:(C=I.path,re=I.matrix);var ue=new Path2D(C),B=document.createElement("canvas"),j=B.getContext("2d");if(!re){for(var ne=1e3,K=ne,he=ne,ge=0,be=0,P,Ee,Ae=0;Ae<ne;Ae+=2)for(var Se=0;Se<ne;Se+=2)j.isPointInPath(ue,Ae,Se,"nonzero")&&(K=Math.min(K,Ae),he=Math.min(he,Se),ge=Math.max(ge,Ae),be=Math.max(be,Se));P=ge-K,Ee=be-he;var _e=10,Ue=Math.min(_e/P,_e/Ee);re=[Ue,0,0,Ue,-Math.round(P/2+K)*Ue,-Math.round(Ee/2+he)*Ue]}return{type:"path",path:C,matrix:re}}function me(I){var C,re=1,ue="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?C=I:(C=I.text,re="scalar"in I?I.scalar:re,B="fontFamily"in I?I.fontFamily:B,ue="color"in I?I.color:ue);var j=10*re,ne=""+j+"px "+B,K=new OffscreenCanvas(j,j),he=K.getContext("2d");he.font=ne;var ge=he.measureText(C),be=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),P=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),Ee=2,Ae=ge.actualBoundingBoxLeft+Ee,Se=ge.actualBoundingBoxAscent+Ee;be+=Ee+Ee,P+=Ee+Ee,K=new OffscreenCanvas(be,P),he=K.getContext("2d"),he.font=ne,he.fillStyle=ue,he.fillText(C,Ae,Se);var _e=1/re;return{type:"bitmap",bitmap:K.transferToImageBitmap(),matrix:[_e,0,0,_e,-be*_e/2,-P*_e/2]}}t.exports=function(){return Y().apply(this,arguments)},t.exports.reset=function(){Y().reset()},t.exports.create=Z,t.exports.shapeFromPath=$,t.exports.shapeFromText=me})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Fa,!1);const gs=Fa.exports;Fa.exports.create;class Rm{constructor(e){this.sceneManager=e,this.currentMode="guided",this.currentCurriculumIndex=0,this.currentCaseIndex=0,this.currentCaseStage=0,this.currentQuizIndex=0,this.currentSimuladoIndex=0,this.currentAnamnesisNode="start",this.isMuted=!1,this.isListening=!1,this.initIcons(),this.bindEvents(),this.initAudioSync(),this.loadCurriculumModule(0)}initIcons(){const e=document.getElementById("logo-icon");e&&(e.innerHTML=ht.heart);const t=document.getElementById("mic-icon-container");t&&(t.innerHTML=ht.mic);const n=document.getElementById("audio-icon-container");n&&(n.innerHTML=ht.volume2),document.querySelectorAll(".btn-icon[data-icon]").forEach(i=>{const a=i.getAttribute("data-icon");ht[a]&&(i.innerHTML=ht[a])})}bindEvents(){const e=document.querySelectorAll(".mode-btn");e.forEach(g=>{g.addEventListener("click",()=>{e.forEach(p=>p.classList.remove("active")),g.classList.add("active");const _=g.getAttribute("data-mode");this.switchMode(_)})});const t=document.querySelectorAll(".tool-btn[data-cam]");t.forEach(g=>{g.addEventListener("click",()=>{t.forEach(p=>p.classList.remove("active")),g.classList.add("active");const _=g.getAttribute("data-cam");this.sceneManager.setCameraPreset(_)})});const n=document.getElementById("toggle-cutaway-btn");n?.addEventListener("click",()=>{const g=this.sceneManager.heartModel.toggleCutaway();n.classList.toggle("active",g)});const i=document.getElementById("toggle-blood-btn");i?.addEventListener("click",()=>{const g=!this.sceneManager.bloodFlow.active;this.sceneManager.bloodFlow.setActive(g),i.classList.toggle("active",g)});const a=document.getElementById("toggle-conduction-btn");a?.addEventListener("click",()=>{const g=a.classList.toggle("active");this.sceneManager.heartModel.highlightPart(g?"conduction":null)});const r=document.getElementById("toggle-heartbeat-btn");r?.addEventListener("click",()=>{!qt.isPlayingHeartLoop?(qt.startHeartLoop(72,"normal"),r.classList.add("active")):(qt.stopHeartLoop(),r.classList.remove("active"))});const o=document.getElementById("audio-toggle-btn");o?.addEventListener("click",()=>{this.isMuted=!this.isMuted,Mn.muted=this.isMuted,qt.setMuted(this.isMuted),o.classList.toggle("active",!this.isMuted);const g=document.getElementById("audio-icon-container");g&&(g.innerHTML=this.isMuted?ht.volumeX:ht.volume2),this.isMuted&&Mn.stopSpeaking()});const c=document.getElementById("chat-input"),l=document.getElementById("send-btn"),u=()=>{const g=c.value.trim();g&&(c.value="",this.handleUserQuestion(g))};l?.addEventListener("click",u),c?.addEventListener("keydown",g=>{g.key==="Enter"&&u()}),document.getElementById("mic-btn")?.addEventListener("click",()=>{this.isListening?(Mn.stopListening(),this.setMicListening(!1)):(qt.ensureContext(),this.setMicListening(!0),Mn.startListening(g=>{g.final?(c.value=g.final,this.setMicListening(!1),this.handleUserQuestion(g.final)):g.interim&&(c.value=g.interim)},g=>{(g==="ended"||g==="error")&&this.setMicListening(!1)}))}),document.getElementById("chip-dont-understand")?.addEventListener("click",()=>{this.handleUserQuestion("Não entendi, você pode simplificar usando a Técnica de Feynman?")}),document.getElementById("chip-ask-question")?.addEventListener("click",()=>{this.handleUserQuestion("Pode me fazer uma pergunta socrática sobre o que acabamos de ver?")}),document.getElementById("chip-show-3d")?.addEventListener("click",()=>{this.sceneManager.setCameraPreset("heart"),this.sceneManager.heartModel.highlightPart("conduction"),this.handleUserQuestion("Mostre os detalhes anatômicos em 3D do coração e das valvas")}),document.getElementById("chip-clinical-example")?.addEventListener("click",()=>{this.handleUserQuestion("Qual é o exemplo clínico prático desse conceito na beira do leito?")}),document.getElementById("chip-next-step")?.addEventListener("click",()=>{this.nextCurriculumStep()}),document.getElementById("disciplines-btn")?.addEventListener("click",()=>{this.openDisciplinesDrawer()}),document.getElementById("drawer-close-btn")?.addEventListener("click",()=>{this.closeDrawer()});const h=document.getElementById("settings-dialog");document.getElementById("settings-btn")?.addEventListener("click",()=>{h&&(h.style.display="flex")}),document.getElementById("settings-close-btn")?.addEventListener("click",()=>{h&&(h.style.display="none")}),document.querySelectorAll(".avatar-pick-card").forEach(g=>{g.addEventListener("click",()=>{document.querySelectorAll(".avatar-pick-card").forEach(m=>m.classList.remove("active")),g.classList.add("active");const _=g.getAttribute("data-avatar");this.sceneManager.loadAvatar(_),Mn.setVoiceByGender(_==="sofia"?"female":"male");const p={asclepio:"Dr. Asclépio",sofia:"Dra. Sofia Mendes",lucas:"Dr. Lucas Rocha"};xn.setTutorPersona({name:p[_]||"Professor"}),this.updateSubtitle(p[_]||"Professor",`Olá! Sou seu professor ${p[_]}. Em que posso te guiar hoje?`,!0)})});const f=document.getElementById("academic-level-select");f?.addEventListener("change",g=>{const _=g.target.value;xn.setStudentInfo(xn.studentName,_),document.getElementById("student-level-label").textContent=_}),document.getElementById("level-btn")?.addEventListener("click",()=>{const g=["Ciclo Básico","Ciclo Clínico","Internato","Residência"],_=g.indexOf(xn.studentLevel),p=g[(_+1)%g.length];xn.setStudentInfo(xn.studentName,p),document.getElementById("student-level-label").textContent=p,f&&(f.value=p),this.speakTutor(`Excelente! Adaptei o nível da aula para o ${p}. Vamos focar nos objetivos específicos desta etapa.`)})}initAudioSync(){Mn.onMouthUpdate(e=>{this.sceneManager.avatarModel&&this.sceneManager.avatarModel.setMouthOpen(e)}),Mn.onSubtitle((e,t)=>{const n=document.getElementById("speaking-wave");n&&(n.style.display=t?"flex":"none"),e&&(document.getElementById("subtitle-text").textContent=e)}),qt.addOnBeatListener(({s2Delay:e})=>{})}setMicListening(e){this.isListening=e;const t=document.getElementById("mic-btn"),n=document.getElementById("mic-icon-container");t&&t.classList.toggle("listening",e),n&&(n.innerHTML=e?ht.micOff:ht.mic)}speakTutor(e,t="gestureExplain1",n=null){this.sceneManager.avatarController&&this.sceneManager.avatarController.setGesture(t),this.updateSubtitle(xn.tutorPersona.name,e,!0),Mn.speak(e,()=>{this.sceneManager.avatarController&&this.sceneManager.avatarController.setGesture("idle"),n&&n()})}updateSubtitle(e,t,n=!1){document.getElementById("subtitle-speaker").textContent=e,document.getElementById("subtitle-avatar").textContent=e.substring(0,2),document.getElementById("subtitle-text").textContent=t;const i=document.getElementById("speaking-wave");i&&(i.style.display=n?"flex":"none")}handleUserQuestion(e){qt.ensureContext();const t=xn.generateResponse(e);t.focus3D&&(this.sceneManager.heartModel.highlightPart(t.focus3D),t.focus3D==="cross_section"&&(this.sceneManager.heartModel.setCutawayView(!0),document.getElementById("toggle-cutaway-btn")?.classList.add("active"))),t.action==="focus_3d"?this.sceneManager.setCameraPreset("heart"):t.action==="show_ecg"&&this.sceneManager.setCameraPreset("board"),this.speakTutor(t.text,t.gesture||"gestureExplain1")}switchMode(e){switch(this.currentMode=e,this.closeDrawer(),e){case"guided":this.loadCurriculumModule(this.currentCurriculumIndex);break;case"private":this.openPrivateTutoring();break;case"case":this.openClinicalCase(0);break;case"anamnesis":this.openAnamnesisTraining();break;case"auscultation":this.openAuscultationExam();break;case"oral_quiz":this.openOralQuiz(0);break;case"simulado":this.openSimulado(0);break}}loadCurriculumModule(e){const t=wo.modules;if(e<0||e>=t.length)return;this.currentCurriculumIndex=e;const n=t[e];this.sceneManager.digitalBoard.updateContent(n.board),this.sceneManager.heartModel.highlightPart(n.heartFocus),n.heartFocus==="cross_section"?(this.sceneManager.heartModel.setCutawayView(!0),document.getElementById("toggle-cutaway-btn")?.classList.add("active")):(this.sceneManager.heartModel.setCutawayView(!1),document.getElementById("toggle-cutaway-btn")?.classList.remove("active")),this.sceneManager.setCameraPreset("room"),this.speakTutor(n.tutorSpeech,"gestureExplain1"),this.openDrawer("Aula Guiada: Cardiovascular",ht.bookOpen,()=>{let i=`<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Módulo ${n.number} de ${t.length} • <strong>${n.title}</strong>
      </div>`;return t.forEach((a,r)=>{const o=r===this.currentCurriculumIndex;i+=`
          <div class="curriculum-step-card ${o?"active":""}" data-step="${r}">
            <span class="step-badge">Etapa ${a.number}</span>
            <div class="step-title">${a.title}</div>
            <div class="step-subtitle">${a.subtitle}</div>
          </div>
        `}),i+=`
        <div style="margin-top: 16px; padding: 14px; border-radius: 12px; background: rgba(0, 229, 255, 0.08); border: 1px solid var(--border-glass);">
          <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.88rem; margin-bottom: 8px;">
            🤔 Pergunta Socrática de Fixação:
          </div>
          <div style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 12px;">
            ${n.checkQuestion.question}
          </div>
          <div id="check-options" style="display: flex; flex-direction: column; gap: 8px;">
            ${n.checkQuestion.options.map((a,r)=>`
              <button class="toggle-switch-btn" style="text-align: left; padding: 10px;" data-opt="${r}">
                <span>${a}</span>
              </button>
            `).join("")}
          </div>
          <div id="check-feedback" style="display: none; margin-top: 10px; font-size: 0.82rem; padding: 10px; border-radius: 8px;"></div>
        </div>
      `,i}),setTimeout(()=>{document.querySelectorAll(".curriculum-step-card").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.getAttribute("data-step"),10);this.loadCurriculumModule(a)})}),document.querySelectorAll("#check-options button").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.getAttribute("data-opt"),10),r=document.getElementById("check-feedback");r&&(r.style.display="block",a===n.checkQuestion.correctIndex?(gs({particleCount:50,spread:60,origin:{y:.7}}),r.style.background="rgba(16, 185, 129, 0.15)",r.style.border="1px solid #10b981",r.style.color="#34d399",r.innerHTML=`<strong>✅ Resposta Correta!</strong><br>${n.checkQuestion.explanation}`,this.speakTutor("Brilhante resposta! Você compreendeu exatamente a essência hemodinâmica.","gestureApprove")):(r.style.background="rgba(239, 68, 68, 0.15)",r.style.border="1px solid #ef4444",r.style.color="#fca5a5",r.innerHTML=`<strong>Atenção:</strong> Analise com cuidado o mecanismo de pressão. ${n.checkQuestion.explanation}`,this.speakTutor("Muito bom raciocínio, mas vamos rever este ponto juntos. Observe o gráfico de pressões no quadro.","gestureExplain2")))})})},50)}nextCurriculumStep(){const e=(this.currentCurriculumIndex+1)%wo.modules.length;this.loadCurriculumModule(e)}openPrivateTutoring(){this.sceneManager.setCameraPreset("tutor"),this.speakTutor("Estamos agora em nossa tutoria particular 1 para 1. Você pode falar diretamente comigo pelo microfone ou digitar qualquer tema médico. Como posso te auxiliar nos seus estudos hoje?","gestureApprove")}openClinicalCase(e=0){this.currentCaseStage=e;const t=Sm[0],n=t.stages[e];this.sceneManager.setCameraPreset("board"),this.sceneManager.digitalBoard.updateContent({heading:`Caso Clínico: ${t.patient.name}, ${t.patient.age}a`,badge:"Pronto-Socorro & Cardiologia",points:[`História: ${t.patient.history}`,`Sinais Vitais: PA ${n.vitalSigns?.pa||"120/80"}, FC ${n.vitalSigns?.fc||"80 bpm"}, SpO2 ${n.vitalSigns?.spo2||"98%"}`,"Queixa: Dor torácica opressiva retroesternal irradiada há 2h."],clinicalNote:"Protocolo de Dor Torácica: ECG de 12 derivações em até 10 minutos!"}),this.speakTutor(`${n.tutorIntroduction} ${n.patientDialogue||""}`,"gesturePointBoard"),this.openDrawer(t.title,ht.fileText,()=>`
        <div style="padding: 12px; border-radius: 10px; background: rgba(15, 23, 42, 0.7); margin-bottom: 14px; border: 1px solid var(--border-glass);">
          <div style="font-weight: 700; color: var(--cyan-primary);">${t.patient.name}, ${t.patient.age} anos (${t.patient.gender})</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${t.patient.history}</div>
        </div>

        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 8px; color: #fff;">
          Etapa ${n.stageNumber}: ${n.title}
        </div>
        <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.45; margin-bottom: 14px;">
          ${n.tutorPrompt}
        </div>

        <div id="case-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${n.options.map((i,a)=>`
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-case-opt="${a}">
              <span>${i}</span>
            </button>
          `).join("")}
        </div>
        <div id="case-feedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `),setTimeout(()=>{document.querySelectorAll("#case-options button").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.getAttribute("data-case-opt"),10),r=document.getElementById("case-feedback");r&&(r.style.display="block",a===n.correctIndex?(gs({particleCount:60,spread:70,origin:{y:.7}}),r.style.background="rgba(16, 185, 129, 0.15)",r.style.border="1px solid #10b981",r.style.color="#34d399",r.innerHTML=`<strong>✅ Conduta Correta!</strong><br>${n.feedback}`,this.speakTutor(`Perfeita conduta médica! ${n.feedback}`,"gestureApprove",()=>{e+1<t.stages.length&&setTimeout(()=>this.openClinicalCase(e+1),2e3)})):(r.style.background="rgba(239, 68, 68, 0.15)",r.style.border="1px solid #ef4444",r.style.color="#fca5a5",r.innerHTML=`<strong>⚠️ Atenção:</strong> Esta não é a conduta prioritária. Lembre-se da abordagem de emergência: ${n.feedback}`))})})},50)}openAnamnesisTraining(){const e=To;this.currentAnamnesisNode="start",this.sceneManager.setCameraPreset("tutor"),this.speakTutor(`Olá! No treino de anamnese você entrevistará a paciente ${e.patient.name}. Lembre-se: use perguntas abertas, estabeleça empatia e investigue a cronologia da dispneia.`,"gestureExplain1"),this.renderAnamnesisStep("start")}renderAnamnesisStep(e){const t=To,n=t.dialogueNodes[e];n&&(this.openDrawer(`Anamnese: ${t.patient.name}`,ht.user,()=>`
        <div style="padding: 10px; border-radius: 8px; background: rgba(0, 229, 255, 0.08); font-size: 0.82rem; color: var(--cyan-hover); margin-bottom: 12px;">
          💡 <strong>Dica do Tutor:</strong> ${n.tutorTip}
        </div>
        ${n.patientGreeting?`
          <div style="padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid #38bdf8; margin-bottom: 14px; font-size: 0.88rem; color: #f8fafc;">
            ${n.patientGreeting}
          </div>
        `:""}
        ${n.patientConclusion?`
          <div style="padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid #38bdf8; margin-bottom: 14px; font-size: 0.88rem; color: #f8fafc;">
            ${n.patientConclusion}
          </div>
        `:""}

        <div style="font-weight: 600; font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px; text-transform: uppercase;">
          Escolha como abordar a paciente:
        </div>

        <div id="anamnesis-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${n.options.map((i,a)=>`
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-node-opt="${a}">
              <span>${i.text}</span>
            </button>
          `).join("")}
        </div>
        <div id="anamnesis-response" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `),setTimeout(()=>{document.querySelectorAll("#anamnesis-options button").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.getAttribute("data-node-opt"),10),r=n.options[a],o=document.getElementById("anamnesis-response");o&&(o.style.display="block",r.isFinish?(gs({particleCount:80,spread:80,origin:{y:.7}}),o.style.background="rgba(16, 185, 129, 0.15)",o.style.border="1px solid #10b981",o.style.color="#34d399",o.innerHTML="<strong>🌟 Atendimento Finalizado com Sucesso!</strong><br>Você estabeleceu empatia, identificou o gatilho da descompensação da IC e acolheu a paciente com clareza.",this.speakTutor("Excelente consulta! Você demonstrou tanto rigor semiológico quanto humanização no acolhimento.","gestureApprove")):(o.style.background="rgba(2, 132, 199, 0.15)",o.style.border="1px solid #0284c7",o.style.color="#e0f2fe",o.innerHTML=`<strong>Dona Maria responde:</strong><br>${r.response}`,r.nextNode&&setTimeout(()=>this.renderAnamnesisStep(r.nextNode),2500)))})})},50))}openAuscultationExam(){this.sceneManager.setCameraPreset("heart"),qt.ensureContext(),qt.startHeartLoop(72,"normal"),document.getElementById("toggle-heartbeat-btn")?.classList.add("active"),this.speakTutor("Iniciamos agora o exame de ausculta cardíaca. O som que você ouve é o ritmo fisiológico com B1 e B2. Selecione no menu os focos precordiais para auscultar alterações e sopros específicos.","gestureListen"),this.openDrawer("Simulador de Ausculta Cardíaca",ht.stethoscope,()=>{let e=`<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Toque em um foco para posicionar o estetoscópio virtual e ouvir a acústica:
      </div>`;return bm.forEach(t=>{e+=`
          <div class="focus-card" data-focus="${t.id}" data-sound="${t.pathologySound}">
            <div class="focus-header">
              <span>${t.name}</span>
              <span class="btn-icon" data-icon="volume2">${ht.volume2}</span>
            </div>
            <div class="focus-loc">${t.anatomicalLocation}</div>
            <div class="focus-desc">${t.clinicalSignificance}</div>
          </div>
        `}),e}),setTimeout(()=>{document.querySelectorAll(".focus-card").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".focus-card").forEach(a=>a.classList.remove("active")),e.classList.add("active");const t=e.getAttribute("data-sound"),n=e.getAttribute("data-focus");qt.startHeartLoop(75,t),this.sceneManager.heartModel.highlightPart("valves");const i={aortic:"Foco Aórtico com Sopro Sistólico em Diamante de Estenose Aórtica",pulmonic:"Foco Pulmonar com Desdobramento de B2",mitral:"Foco Mitral com Sopro de Insuficiência Mitral e irradiação axilar",tricuspid:"Foco Tricúspide",erbs:"Ponto de Erb (Aórtico Acessório)"};this.speakTutor(`Auscultando agora o ${i[n]||n}. Observe a modulação sonora.`,"gestureListen")})})},50)}openOralQuiz(e=0){const t=Em;e>=t.length&&(e=0),this.currentQuizIndex=e;const n=t[e];this.sceneManager.setCameraPreset("tutor"),this.speakTutor(n.question,"gestureExplain2"),this.openDrawer(`Quiz Oral - Questão ${e+1}`,ht.zap,()=>`
        <div style="padding: 14px; border-radius: 10px; background: rgba(0, 229, 255, 0.08); border: 1px solid var(--border-glass); margin-bottom: 14px;">
          <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem; margin-bottom: 6px;">
            Pergunta do Professor:
          </div>
          <div style="font-size: 0.9rem; line-height: 1.45; color: #fff;">
            ${n.question}
          </div>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px;">
          💡 <strong>Dica reflexiva:</strong> ${n.hint}
        </div>

        <div style="display: flex; gap: 10px; margin-top: 14px;">
          <button class="chip-btn" id="quiz-mic-answer" style="flex: 1; justify-content: center; padding: 10px;">
            🎙️ Responder Falando
          </button>
          <button class="chip-btn" id="quiz-reveal-answer" style="flex: 1; justify-content: center; padding: 10px;">
            📖 Resposta Padrão-Ouro
          </button>
        </div>

        <div id="quiz-answer-box" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid var(--cyan-primary); font-size: 0.85rem; color: #e2e8f0;">
          <strong>Resposta Esperada:</strong><br>${n.idealAnswer}<br><br>
          <button class="chip-btn" id="quiz-next-btn" style="margin-top: 8px;">Próxima Questão ➡️</button>
        </div>
      `),setTimeout(()=>{document.getElementById("quiz-mic-answer")?.addEventListener("click",()=>{document.getElementById("mic-btn")?.click()}),document.getElementById("quiz-reveal-answer")?.addEventListener("click",()=>{const i=document.getElementById("quiz-answer-box");i&&(i.style.display="block"),this.speakTutor(n.idealAnswer,"gestureApprove")}),document.getElementById("quiz-next-btn")?.addEventListener("click",()=>{this.openOralQuiz(e+1)})},50)}openSimulado(e=0){const t=wm;e>=t.length&&(e=0),this.currentSimuladoIndex=e;const n=t[e];this.sceneManager.setCameraPreset("board"),this.sceneManager.digitalBoard.updateContent({heading:`Simulado: ${n.source}`,badge:n.discipline,points:[`Nível: ${n.level}`,`Caso: ${n.stem.substring(0,180)}...`],clinicalNote:"Leia atentamente as alternativas e selecione a conduta correta."}),this.speakTutor("Vamos testar seus conhecimentos em alto nível com uma questão de Residência Médica.","gesturePointBoard"),this.openDrawer(`Simulado - Questão ${e+1}/${t.length}`,ht.award,()=>`
        <div style="font-size: 0.75rem; color: var(--cyan-hover); font-weight: 700; margin-bottom: 6px;">
          ${n.source.toUpperCase()} • ${n.level}
        </div>
        <div style="font-size: 0.88rem; line-height: 1.5; color: #fff; margin-bottom: 16px;">
          ${n.stem}
        </div>
        <div id="simulado-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${n.options.map((i,a)=>`
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-sim-opt="${a}">
              <span>${String.fromCharCode(65+a)}) ${i}</span>
            </button>
          `).join("")}
        </div>
        <div id="simulado-feedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `),setTimeout(()=>{document.querySelectorAll("#simulado-options button").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.getAttribute("data-sim-opt"),10),r=document.getElementById("simulado-feedback");r&&(r.style.display="block",a===n.correctIndex?(gs({particleCount:70,spread:80,origin:{y:.7}}),r.style.background="rgba(16, 185, 129, 0.15)",r.style.border="1px solid #10b981",r.style.color="#34d399",r.innerHTML=`<strong>✅ Gabarito Correto!</strong><br>${n.rationale}<br><br><button class="chip-btn" id="sim-next-btn">Próxima Questão ➡️</button>`,this.speakTutor("Gabarito perfeito! Seu raciocínio diagnóstico e terapêutico está alinhado com as diretrizes.","gestureApprove")):(r.style.background="rgba(239, 68, 68, 0.15)",r.style.border="1px solid #ef4444",r.style.color="#fca5a5",r.innerHTML=`<strong>⚠️ Gabarito Incorreto.</strong><br>A resposta correta é a letra ${String.fromCharCode(65+n.correctIndex)}.<br>${n.rationale}<br><br><button class="chip-btn" id="sim-next-btn">Próxima Questão ➡️</button>`,this.speakTutor("Atenção a este detalhe de pegadinha clássica em provas de residência.","gestureExplain1")),document.getElementById("sim-next-btn")?.addEventListener("click",()=>{this.openSimulado(e+1)}))})})},50)}openDisciplinesDrawer(){this.openDrawer("Grade de Disciplinas Médicas",ht.layers,()=>{let e=`<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Explore as matérias da graduação médica com nosso tutor 3D:
      </div>`;return Eo.forEach(t=>{e+=`
          <div class="focus-card ${t.id==="cardiology"?"active":""}" data-disc="${t.id}">
            <div class="focus-header">
              <span>${t.name}</span>
              <span class="btn-icon" data-icon="${t.icon}">${ht[t.icon]||ht.layers}</span>
            </div>
            <div class="focus-loc">${t.category}</div>
            <div class="focus-desc">${t.description}</div>
          </div>
        `}),e}),setTimeout(()=>{document.querySelectorAll("[data-disc]").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-disc"),n=Eo.find(i=>i.id===t);n&&(this.speakTutor(`Excelente escolha! Na disciplina de ${n.name}, estudamos temas essenciais como ${n.topics.slice(0,3).join(", ")}.`,"gestureApprove"),t==="cardiology"&&this.switchMode("guided"))})})},50)}openDrawer(e,t,n){const i=document.getElementById("side-drawer"),a=document.getElementById("drawer-title-text"),r=document.getElementById("drawer-title-icon"),o=document.getElementById("drawer-body");!i||!o||(a&&(a.textContent=e),r&&t&&(r.innerHTML=t),o.innerHTML=n(),i.style.display="flex")}closeDrawer(){const e=document.getElementById("side-drawer");e&&(e.style.display="none")}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("canvas-container");if(!s){console.error("Canvas container not found");return}const e=new ym(s);new Rm(e);const t=new dm;function n(){requestAnimationFrame(n);const a=Math.min(t.getDelta(),.1);e.update(a)}n();const i=()=>{qt.ensureContext(),window.removeEventListener("click",i),window.removeEventListener("keydown",i)};window.addEventListener("click",i),window.addEventListener("keydown",i),console.log("🩺 MedTutor 3D Platform initialized successfully.")});
