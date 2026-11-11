import{$ as e,$n as t,A as n,An as r,Ar as i,At as a,B as o,Bn as s,Br as c,Bt as l,Cn as u,Cr as d,Ct as f,D as p,Dr as m,Dt as h,E as g,Er as _,Et as v,F as y,Fn as b,Fr as x,G as S,Gn as C,Gr as w,H as T,Hr as E,I as D,In as O,Ir as ee,It as te,J as ne,Jn as re,K as ie,Kn as ae,L as oe,Ln as se,Lr as k,M as ce,Mn as le,Mr as A,Mt as ue,N as de,Nn as fe,Nr as pe,Nt as me,On as he,Or as ge,Ot as _e,P as ve,Pr as ye,Pt as be,Q as xe,Qn as Se,R as Ce,Rn as we,Rr as j,S as Te,Sn as Ee,Sr as M,St as De,T as Oe,Tr as ke,Tt as Ae,U as je,Un as Me,Ur as Ne,V as N,Vn as Pe,Vr as Fe,Vt as Ie,W as Le,Wr as Re,X as P,Xn as F,Y as ze,Yn as I,Z as L,Zn as Be,_ as Ve,_n as He,_r as Ue,_t as We,a as Ge,ar as Ke,at as qe,b as Je,br as R,bt as Ye,c as Xe,cr as Ze,ct as Qe,d as $e,dr as et,dt as tt,er as nt,f as rt,fr as z,ft as it,g as at,gr as ot,gt as B,h as st,hr as ct,ht as lt,ir as ut,it as dt,j as V,jn as ft,jr as pt,jt as mt,k as ht,kn as gt,kr as _t,kt as vt,l as yt,lr as bt,lt as xt,m as St,mr as Ct,mt as wt,nr as Tt,nt as Et,or as Dt,ot as Ot,p as kt,pr as At,pt as jt,q as Mt,qn as Nt,rr as Pt,rt as Ft,s as It,sr as Lt,tr as Rt,tt as zt,u as Bt,ur as Vt,ut as Ht,v as Ut,vn as Wt,vr as Gt,vt as Kt,w as qt,wr as Jt,wt as Yt,x as Xt,xn as Zt,xr as Qt,xt as $t,y as en,yn as tn,yr as nn,yt as rn,z as an,zn as on,zr as sn}from"./simulation-Bnem3D_K.js";var cn=Object.defineProperty,ln=(e,t)=>{let n={};for(var r in e)cn(n,r,{get:e[r],enumerable:!0});return t||cn(n,Symbol.toStringTag,{value:`Module`}),n},un=[`low`,`medium`,`high`,`ultra`],dn=[`auto`,...un],fn=null;function pn(){if(fn)return fn;let e={mobile:!1,weakGpu:!1,strongGpu:!1,cores:0,memory:0};try{let t=window.matchMedia?.(`(pointer: coarse)`).matches,n=(navigator.maxTouchPoints||0)>0;e.mobile=!!t||n}catch{}e.cores=navigator.hardwareConcurrency||0,e.memory=navigator.deviceMemory||0;try{let t=document.createElement(`canvas`),n=t.getContext(`webgl`)||t.getContext(`experimental-webgl`);if(n){let t=n.getExtension(`WEBGL_debug_renderer_info`),r=t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):``;r&&(c.integratedPattern.test(r)?e.weakGpu=!0:c.discretePattern.test(r)&&(e.strongGpu=!0)),n.getExtension(`WEBGL_lose_context`)?.loseContext()}}catch{}let t=0;e.strongGpu&&(t+=3),e.weakGpu&&(t-=3),e.cores>=8?t+=1:e.cores>0&&e.cores<4&&--t,e.memory>=8?t+=1:e.memory>0&&e.memory<=2&&--t,e.mobile&&--t;let n;return n=t>=3?`ultra`:t>=1?`high`:t<=-3?`low`:`medium`,fn=n,n}function mn(e){return e===`auto`?pn():un.includes(e)?e:`medium`}function hn(e){Jt(e)}function gn(e){let t=E[e];return t?t.label:e}function _n(e){let t=E[e];return t?t.desc:``}function vn(e,t){let n=E[e],r=E[t];if(!n||!r)return[];let i=[];return n.lights.shadow.enabled!==r.lights.shadow.enabled&&i.push(`Тени: ${n.lights.shadow.enabled?`включены`:`выключены`} → ${r.lights.shadow.enabled?`включены`:`выключены`}`),n.props.maxRenderDistance!==r.props.maxRenderDistance&&i.push(`Дальность отрисовки: ${n.props.maxRenderDistance} м → ${r.props.maxRenderDistance} м`),n.props.density!==r.props.density&&i.push(`Плотность растительности: ${n.props.density} → ${r.props.density}`),n.renderer.antialias!==r.renderer.antialias&&i.push(`Сглаживание: ${n.renderer.antialias?`вкл`:`выкл`} → ${r.renderer.antialias?`вкл`:`выкл`}`),n.overlay.enabled===r.overlay.enabled?n.overlay.enabled&&n.overlay.canvasSize!==r.overlay.canvasSize&&i.push(`Текстура леса (2D): ${n.overlay.canvasSize}px → ${r.overlay.canvasSize}px`):i.push(`2D-лес (overlay): ${n.overlay.enabled?`вкл`:`выкл`} → ${r.overlay.enabled?`вкл`:`выкл`}`),n.lod&&r.lod&&n.lod.changeAltitude!==r.lod.changeAltitude&&i.push(`Высота перехода в 2D: ${n.lod.changeAltitude} м → ${r.lod.changeAltitude} м`),n.fog&&r.fog&&n.fog.far3D!==r.fog.far3D&&i.push(`Дальность тумана (3D): ${n.fog.far3D} м → ${r.fog.far3D} м`),i}var yn=`rocket_game_settings_v1`,H={quality:`auto`,_resolvedPreset:`medium`,showFps:!1,soundVolume:void 0,soundEnabled:!0,tutorialOnStart:!0,tutorialDone:!1};function bn(e){return typeof e==`string`&&dn.includes(e)}function xn(){try{let e=localStorage.getItem(yn);if(!e)return;let t=JSON.parse(e);if(!t||typeof t!=`object`)return;let n=t;typeof n.lowSpecMode==`boolean`&&(H.quality=n.lowSpecMode?`low`:`auto`),bn(n.quality)&&(H.quality=n.quality),typeof n.showFps==`boolean`&&(H.showFps=n.showFps),typeof n.soundVolume==`number`&&isFinite(n.soundVolume)&&n.soundVolume>=0&&n.soundVolume<=1&&(H.soundVolume=n.soundVolume),typeof n.soundEnabled==`boolean`&&(H.soundEnabled=n.soundEnabled),H.tutorialOnStart=typeof n.tutorialOnStart==`boolean`&&n.tutorialOnStart,H.tutorialDone=typeof n.tutorialDone!=`boolean`||n.tutorialDone}catch(e){console.warn(`settings.load failed:`,e)}}function Sn(){try{let e={quality:H.quality,showFps:H.showFps,soundVolume:H.soundVolume,soundEnabled:H.soundEnabled,tutorialOnStart:H.tutorialOnStart,tutorialDone:H.tutorialDone};localStorage.setItem(yn,JSON.stringify(e))}catch(e){console.warn(`settings.save failed:`,e)}}function Cn(){let e=mn(H.quality);hn(e),H._resolvedPreset=e}xn(),Cn();function wn(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Tn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},W={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},En={basic:{uniforms:Ze([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:Ze([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:Ze([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:Ze([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:Ze([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new V(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:Ze([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:Ze([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:Ze([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:Ze([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:Ze([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:Ze([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:Ze([W.common,W.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:Ze([W.lights,W.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};En.physical={uniforms:Ze([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var Dn={r:0,b:0,g:0},On=new We,kn=new B;kn.set(-1,0,0,0,1,0,0,0,1);function An(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Kt(new Oe(1,1,1),new ft({name:`BackgroundCubeMaterial`,uniforms:Rt(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(On.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kn),l.material.toneMapped=ce.getTransfer(i.colorSpace)!==gt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Kt(new ue(2,2),new ft({name:`BackgroundMaterial`,uniforms:Rt(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ce.getTransfer(i.colorSpace)!==gt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Dn,Dt(e)),n.buffers.color.setClear(Dn.r,Dn.g,Dn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function jn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Mn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Nn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Vt(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Vt(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Pn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new mt,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Fn=4,In=6,Ln=20,Rn=256,zn=new vt,Bn=new V,Vn=null,Hn=0,Un=0,Wn=!1,Gn=new F,Kn=new F,qn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Gn}=i;Vn=this._renderer.getRenderTarget(),Hn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Wn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=er(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$n(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vn,Hn,Un),this._renderer.xr.enabled=Wn,e.scissorTest=!1,Xn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vn=this._renderer.getRenderTarget(),Hn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Wn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Et,format:l,colorSpace:jt,depthBuffer:!1},r=Yn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jn(r)),this._blurMaterial=Qn(r,e,t),this._ggxMaterial=Zn(r,e,t)}return r}_compileMaterial(e){let t=new Kt(new p,e);this._renderer.compile(t,zn)}_sceneToCubeUV(e,t,n,r,i){let o=new a(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Bn),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Oe,new rn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Bn),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(i.x,i.y,i.z),o.lookAt(i.x+c[t],i.y,i.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(i.x,i.y,i.z),o.lookAt(i.x,i.y+c[t],i.z)):(o.up.set(0,s[t],0),o.position.set(i.x,i.y,i.z),o.lookAt(i.x,i.y,i.z+c[t]));let a=this._cubeSize;Xn(r,n*a,t>2?a:0,a,a),l.setRenderTarget(r),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=er()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$n());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Xn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,zn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Fn?n-d+Fn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Xn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,zn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Xn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,zn)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Xn(t,3*l*(r>this._lodMax-Fn?r-this._lodMax+Fn:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,zn)}};function Jn(e){let t=[],n=[],r=e,i=e-Fn+1+In;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Kn.set(1,r,n):e===1?Kn.set(-n,1,-r):e===2?Kn.set(-n,r,1):e===3?Kn.set(-1,r,-n):e===4?Kn.set(-n,-1,r):Kn.set(n,r,-1),Kn.toArray(l,(e*6+t)*3)}}let u=new p;u.setAttribute(`position`,new g(c,3)),u.setAttribute(`outputDirection`,new g(l,3)),n.push(new Kt(u,null)),r>Fn&&r--}return{lodMeshes:n,sizeLods:t}}function Yn(e,n,r){let i=new t(e,n,r);return i.texture.mapping=306,i.texture.name=`PMREM.cubeUv`,i.scissorTest=!0,i}function Xn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Zn(e,t,n){return new ft({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qn(e,t,n){return new ft({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $n(){return new ft({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function er(){return new ft({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nr=class extends t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new D(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oe(5,5,5),i=new ft({name:`CubemapFromEquirect`,uniforms:Rt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Kt(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ht),new ve(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function rr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new nr(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new qn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new qn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ir(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ar(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?on:we)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function or(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ut(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function cr(e,t,n){let r=new WeakMap,i=new Be;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new an(h,p,m,u);g.type=L,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new I(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function lr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ur={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function dr(e,n,r,i,a,o){let s=new t(n,r,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=new p;u.setAttribute(`position`,new P([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new P([0,2,0,0,2,0],2));let d=new tn({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Kt(u,d),m=new vt(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let n=s.width,r=s.height;b.length>0&&c===null&&(c=new t(n,r,{type:Et,depthBuffer:!1,stencilBuffer:!1}),l=new t(n,r,{type:Et,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<b.length;e++){let t=b[e];t.setSize&&t.setSize(n,r)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(s),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=s,r=c;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,d.defines={},ce.getTransfer(h)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ur[g];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,m),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var fr=new se,pr=new je(1,1),mr=new an,hr=new Ce,gr=new D,_r=[],vr=[],yr=new Float32Array(16),br=new Float32Array(9),xr=new Float32Array(4);function Sr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_r[i];if(a===void 0&&(a=new Float32Array(i),_r[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Cr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function wr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Tr(e,t){let n=vr[t];n===void 0&&(n=new Int32Array(t),vr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Er(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cr(n,t))return;e.uniform2fv(this.addr,t),wr(n,t)}}function Or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Cr(n,t))return;e.uniform3fv(this.addr,t),wr(n,t)}}function kr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cr(n,t))return;e.uniform4fv(this.addr,t),wr(n,t)}}function Ar(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),wr(n,t)}else{if(Cr(n,r))return;xr.set(r),e.uniformMatrix2fv(this.addr,!1,xr),wr(n,r)}}function jr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),wr(n,t)}else{if(Cr(n,r))return;br.set(r),e.uniformMatrix3fv(this.addr,!1,br),wr(n,r)}}function Mr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),wr(n,t)}else{if(Cr(n,r))return;yr.set(r),e.uniformMatrix4fv(this.addr,!1,yr),wr(n,r)}}function Nr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Pr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cr(n,t))return;e.uniform2iv(this.addr,t),wr(n,t)}}function Fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cr(n,t))return;e.uniform3iv(this.addr,t),wr(n,t)}}function Ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cr(n,t))return;e.uniform4iv(this.addr,t),wr(n,t)}}function Lr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cr(n,t))return;e.uniform2uiv(this.addr,t),wr(n,t)}}function zr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cr(n,t))return;e.uniform3uiv(this.addr,t),wr(n,t)}}function Br(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cr(n,t))return;e.uniform4uiv(this.addr,t),wr(n,t)}}function Vr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(pr.compareFunction=n.isReversedDepthBuffer()?518:515,a=pr):a=fr,n.setTexture2D(t||a,i)}function Hr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||hr,i)}function Ur(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||gr,i)}function Wr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||mr,i)}function Gr(e){switch(e){case 5126:return Er;case 35664:return Dr;case 35665:return Or;case 35666:return kr;case 35674:return Ar;case 35675:return jr;case 35676:return Mr;case 5124:case 35670:return Nr;case 35667:case 35671:return Pr;case 35668:case 35672:return Fr;case 35669:case 35673:return Ir;case 5125:return Lr;case 36294:return Rr;case 36295:return zr;case 36296:return Br;case 35678:case 36198:case 36298:case 36306:case 35682:return Vr;case 35679:case 36299:case 36307:return Hr;case 35680:case 36300:case 36308:case 36293:return Ur;case 36289:case 36303:case 36311:case 36292:return Wr}}function Kr(e,t){e.uniform1fv(this.addr,t)}function qr(e,t){let n=Sr(t,this.size,2);e.uniform2fv(this.addr,n)}function Jr(e,t){let n=Sr(t,this.size,3);e.uniform3fv(this.addr,n)}function Yr(e,t){let n=Sr(t,this.size,4);e.uniform4fv(this.addr,n)}function Xr(e,t){let n=Sr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Zr(e,t){let n=Sr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qr(e,t){let n=Sr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $r(e,t){e.uniform1iv(this.addr,t)}function ei(e,t){e.uniform2iv(this.addr,t)}function ti(e,t){e.uniform3iv(this.addr,t)}function ni(e,t){e.uniform4iv(this.addr,t)}function ri(e,t){e.uniform1uiv(this.addr,t)}function ii(e,t){e.uniform2uiv(this.addr,t)}function ai(e,t){e.uniform3uiv(this.addr,t)}function oi(e,t){e.uniform4uiv(this.addr,t)}function si(e,t,n){let r=this.cache,i=t.length,a=Tr(n,i);Cr(r,a)||(e.uniform1iv(this.addr,a),wr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?pr:fr;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ci(e,t,n){let r=this.cache,i=t.length,a=Tr(n,i);Cr(r,a)||(e.uniform1iv(this.addr,a),wr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||hr,a[e])}function li(e,t,n){let r=this.cache,i=t.length,a=Tr(n,i);Cr(r,a)||(e.uniform1iv(this.addr,a),wr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||gr,a[e])}function ui(e,t,n){let r=this.cache,i=t.length,a=Tr(n,i);Cr(r,a)||(e.uniform1iv(this.addr,a),wr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||mr,a[e])}function di(e){switch(e){case 5126:return Kr;case 35664:return qr;case 35665:return Jr;case 35666:return Yr;case 35674:return Xr;case 35675:return Zr;case 35676:return Qr;case 5124:case 35670:return $r;case 35667:case 35671:return ei;case 35668:case 35672:return ti;case 35669:case 35673:return ni;case 5125:return ri;case 36294:return ii;case 36295:return ai;case 36296:return oi;case 35678:case 36198:case 36298:case 36306:case 35682:return si;case 35679:case 36299:case 36307:return ci;case 35680:case 36300:case 36308:case 36293:return li;case 36289:case 36303:case 36311:case 36292:return ui}}var fi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gr(t.type)}},pi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=di(t.type)}},mi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hi=/(\w+)(\])?(\[|\.)?/g;function gi(e,t){e.seq.push(t),e.map[t.id]=t}function _i(e,t,n){let r=e.name,i=r.length;for(hi.lastIndex=0;;){let a=hi.exec(r),o=hi.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gi(n,l===void 0?new fi(s,e,t):new pi(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new mi(s),gi(n,e)),n=e}}}var vi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_i(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bi=37297,xi=0;function Si(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ci=new B;function wi(e){ce._getMatrix(Ci,ce.workingColorSpace,e);let t=`mat3( ${Ci.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(e)){case wt:return[t,`LinearTransferOETF`];case gt:return[t,`sRGBTransferOETF`];default:return Vt(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ti(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Si(e.getShaderSource(t),r)}return i}function Ei(e,t){let n=wi(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Di={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Oi(e,t){let n=Di[t];return n===void 0?(Vt(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ki=new F;function Ai(){return ce.getLuminanceCoefficients(ki),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ki.x.toFixed(4)}, ${ki.y.toFixed(4)}, ${ki.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ji(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pi).join(`
`)}function Mi(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ni(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pi(e){return e!==``}function Fi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ii(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Li=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ri(e){return e.replace(Li,Bi)}var zi=new Map;function Bi(e,t){let n=U[t];if(n===void 0){let e=zi.get(t);if(e!==void 0)n=U[e],Vt(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ri(n)}var Vi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hi(e){return e.replace(Vi,Ui)}function Ui(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Wi(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Gi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ki(e){return Gi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var qi={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ji(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:qi[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Yi={302:`ENVMAP_MODE_REFRACTION`};function Xi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Qi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zi[e.combine]||`ENVMAP_BLENDING_NONE`}function $i(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ea(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ki(n),l=Ji(n),u=Xi(n),d=Qi(n),f=$i(n),p=ji(n),m=Mi(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pi).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pi).join(`
`),_.length>0&&(_+=`
`)):(g=[Wi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pi).join(`
`),_=[Wi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Oi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,Ei(`linearToOutputTexel`,n.outputColorSpace),Ai(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pi).join(`
`)),o=Ri(o),o=Fi(o,n),o=Ii(o,n),s=Ri(s),s=Fi(s,n),s=Ii(s,n),o=Hi(o),s=Hi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=yi(i,i.VERTEX_SHADER,y),S=yi(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ti(i,x,`vertex`),n=Ti(i,S,`fragment`);ut(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Vt(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new vi(i,h),T=Ni(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,bi)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ta=0,na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ra(e),t.set(e,n)),n}},ra=class{constructor(e){this.id=ta++,this.code=e,this.usedTimes=0}};function ia(e){return e===1030||e===37490||e===36285}function aa(e,t,n,r,i,a){let o=new Qe,c=new na,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(i,o,s,u,d,g){let _=u.fog,v=d.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&Vt(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,te;if(C){let e=En[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),ee=e.id,te=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),ie=d.isInstancedMesh===!0,ae=d.isBatchedMesh===!0,oe=!!i.map,se=!!i.matcap,k=!!x,le=!!i.aoMap,A=!!i.lightMap,ue=!!i.bumpMap&&i.wireframe===!1,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.dispersion>0,ye=i.retroreflectivity>0,be=i.iridescence>0,xe=i.sheen>0,Se=i.transmission>0,Ce=ge&&!!i.anisotropyMap,we=_e&&!!i.clearcoatMap,j=_e&&!!i.clearcoatNormalMap,Te=_e&&!!i.clearcoatRoughnessMap,Ee=be&&!!i.iridescenceMap,M=be&&!!i.iridescenceThicknessMap,De=xe&&!!i.sheenColorMap,Oe=xe&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=Se&&!!i.transmissionMap,Ne=Se&&!!i.thicknessMap,N=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=e.toneMapping);let P={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:ae,batchingColor:ae&&d._colorsTexture!==null,instancing:ie,instancingColor:ie&&d.instanceColor!==null,instancingMorph:ie&&d.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:oe,matcap:se,envMap:k,envMapMode:k&&x.mapping,envMapCubeUVHeight:S,aoMap:le,lightMap:A,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&ia(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Ce,clearcoat:_e,clearcoatMap:we,clearcoatNormalMap:j,clearcoatRoughnessMap:Te,dispersion:ve,retroreflection:ye,iridescence:be,iridescenceMap:Ee,iridescenceThicknessMap:M,sheen:xe,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:Se,transmissionMap:Me,thicknessMap:Ne,gradientMap:N,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:oe&&h(i.map.channel),aoMapUv:le&&h(i.aoMap.channel),lightMapUv:A&&h(i.lightMap.channel),bumpMapUv:ue&&h(i.bumpMap.channel),normalMapUv:de&&h(i.normalMap.channel),displacementMapUv:fe&&h(i.displacementMap.channel),emissiveMapUv:pe&&h(i.emissiveMap.channel),metalnessMapUv:me&&h(i.metalnessMap.channel),roughnessMapUv:he&&h(i.roughnessMap.channel),anisotropyMapUv:Ce&&h(i.anisotropyMap.channel),clearcoatMapUv:we&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:j&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:M&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&h(i.sheenRoughnessMap.channel),specularMapUv:ke&&h(i.specularMap.channel),specularColorMapUv:Ae&&h(i.specularColorMap.channel),specularIntensityMapUv:je&&h(i.specularIntensityMap.channel),transmissionMapUv:Me&&h(i.transmissionMap.channel),thicknessMapUv:Ne&&h(i.thicknessMap.channel),alphaMapUv:Pe&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||ge),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(oe||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:oe&&i.map.isVideoTexture===!0&&ce.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&ce.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||ae)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return P.vertexUv1s=l.has(1),P.vertexUv2s=l.has(2),P.vertexUv3s=l.has(3),l.clear(),P}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function b(e){let t=m[e.type],n;if(t){let e=En[t];n=s.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new ea(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function oa(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function sa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ca(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function la(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||sa),r.length>1&&r.sort(t||ca),i.length>1&&i.sort(t||ca)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ua(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new la,e.set(t,[i])):n>=r.length?(i=new la,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function da(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new F,color:new V};break;case`SpotLight`:n={position:new F,direction:new F,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new F,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new F,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new F,halfWidth:new F,halfHeight:new F}}return e[t.id]=n,n}}}function fa(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pa=0;function ma(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ha(e){let t=new da,n=fa(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new F);let i=new F,a=new We,o=new We;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ma);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pa++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ga(e){let t=new ha(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _a(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ga(e),t.set(n,[a])):r>=i.length?(a=new ga(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var va=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ya=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ba=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],xa=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Sa=new We,Ca=new F,wa=new F;function Ta(n,r,i){let a=new e,o=new I,s=new I,c=new Be,l=new Ye,u=new $t,d={},f=i.maxTextureSize,m={0:1,1:0,2:2},h=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:va,fragmentShader:ya}),_=h.clone();_.defines.HORIZONTAL_PASS=1;let v=new p;v.setAttribute(`position`,new g(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Kt(v,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(e,r,i){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||e.length===0)return;this.type===2&&(Vt(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=n.getRenderTarget(),u=n.getActiveCubeFace(),d=n.getActiveMipmapLevel(),p=n.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=S!==this.type;m&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=e.length;l<u;l++){let u=e[l],d=u.shadow;if(d===void 0){Vt(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;o.copy(d.mapSize);let h=d.getFrameExtents();o.multiply(h),s.copy(d.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(s.x=Math.floor(f/h.x),o.x=s.x*h.x,d.mapSize.x=s.x),o.y>f&&(s.y=Math.floor(f/h.y),o.y=s.y*h.y,d.mapSize.y=s.y));let g=n.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){Vt(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new t(o.x,o.y,{format:He,type:Et,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new je(o.x,o.y,L),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=N,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Yt,d.map.depthTexture.magFilter=Yt}else u.isPointLight?(d.map=new nr(o.x),d.map.depthTexture=new y(o.x,C)):(d.map=new t(o.x,o.y),d.map.depthTexture=new je(o.x,o.y,C)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=N,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=Ht,d.map.depthTexture.magFilter=Ht):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Yt,d.map.depthTexture.magFilter=Yt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==o.x||d.map.height!==o.y)&&d.map.setSize(o.x,o.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,i);for(let e=0;e<_;e++){let t=d.getCamera(e);if(u.isPointLight){let t=d.camera,n=d.matrix,r=u.distance||t.far;r!==t.far&&(t.far=r,t.updateProjectionMatrix()),Ca.setFromMatrixPosition(u.matrixWorld),t.position.copy(Ca),wa.copy(t.position),wa.add(ba[e]),t.up.copy(xa[e]),t.lookAt(wa),t.updateMatrixWorld(),n.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Sa,t.coordinateSystem,t.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)n.setRenderTarget(d.map,e),n.clear();else{e===0&&(n.setRenderTarget(d.map),n.clear());let t=d.getViewport(e);c.set(s.x*t.x,s.y*t.y,s.x*t.z,s.y*t.w),p.viewport(c)}a=d.getFrustum(e),E(r,i,t,u,this.type)}d.isPointLightShadow!==!0&&this.type===3&&w(d,i),d.needsUpdate=!1}S=this.type,x.needsUpdate=!1,n.setRenderTarget(l,u,d)};function w(e,i){let a=r.update(b);h.defines.VSM_SAMPLES!==e.blurSamples&&(h.defines.VSM_SAMPLES=e.blurSamples,_.defines.VSM_SAMPLES=e.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),e.mapPass===null?e.mapPass=new t(o.x,o.y,{format:He,type:Et}):(e.mapPass.width!==e.map.width||e.mapPass.height!==e.map.height)&&e.mapPass.setSize(e.map.width,e.map.height),h.uniforms.shadow_pass.value=e.map.depthTexture,h.uniforms.resolution.value.set(e.map.width,e.map.height),h.uniforms.radius.value=e.radius,n.setRenderTarget(e.mapPass),n.clear(),n.renderBufferDirect(i,null,a,h,b,null),_.uniforms.shadow_pass.value=e.mapPass.texture,_.uniforms.resolution.value.set(e.map.width,e.map.height),_.uniforms.radius.value=e.radius,n.setRenderTarget(e.map),n.clear(),n.renderBufferDirect(i,null,a,_,b,null)}function T(e,t,r,i){let a=null,o=r.isPointLight===!0?e.customDistanceMaterial:e.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,n.localClippingEnabled&&t.clipShadows===!0&&Array.isArray(t.clippingPlanes)&&t.clippingPlanes.length!==0||t.displacementMap&&t.displacementScale!==0||t.alphaMap&&t.alphaTest>0||t.map&&t.alphaTest>0||t.alphaToCoverage===!0){let e=a.uuid,n=t.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[n];i===void 0&&(i=a.clone(),r[n]=i,t.addEventListener(`dispose`,D)),a=i}if(a.visible=t.visible,a.wireframe=t.wireframe,i===3?a.side=t.shadowSide===null?t.side:t.shadowSide:a.side=t.shadowSide===null?m[t.side]:t.shadowSide,a.alphaMap=t.alphaMap,a.alphaTest=t.alphaToCoverage===!0?.5:t.alphaTest,a.map=t.map,a.clipShadows=t.clipShadows,a.clippingPlanes=t.clippingPlanes,a.clipIntersection=t.clipIntersection,a.displacementMap=t.displacementMap,a.displacementScale=t.displacementScale,a.displacementBias=t.displacementBias,a.wireframeLinewidth=t.wireframeLinewidth,a.linewidth=t.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let e=n.properties.get(a);e.light=r}return a}function E(e,t,i,o,s){if(e.visible===!1)return;if(e.layers.test(t.layers)&&(e.isMesh||e.isLine||e.isPoints)&&(e.castShadow||e.receiveShadow&&s===3)&&(!e.frustumCulled||e.intersectsFrustum(a))){e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld);let a=r.update(e),c=e.material;if(Array.isArray(c)){let r=a.groups;for(let l=0,u=r.length;l<u;l++){let u=r[l],d=c[u.materialIndex];if(d&&d.visible){let r=T(e,d,o,s);e.onBeforeShadow(n,e,t,i,a,r,u),n.renderBufferDirect(i,null,a,r,e,u),e.onAfterShadow(n,e,t,i,a,r,u)}}}else if(c.visible){let r=T(e,c,o,s);e.onBeforeShadow(n,e,t,i,a,r,null),n.renderBufferDirect(i,null,a,r,e,null),e.onAfterShadow(n,e,t,i,a,r,null)}}let c=e.children;for(let e=0,n=c.length;e<n;e++)E(c[e],t,i,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ea(e,t){function n(){let t=!1,n=new Be,r=null,i=new Be(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=u[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new V(0,0,0),E=0,D=!1,O=null,ee=null,te=null,ne=null,re=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,oe=0,se=e.getParameter(e.VERSION);se.indexOf(`WebGL`)===-1?se.indexOf(`OpenGL ES`)!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ae=oe>=2):(oe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ae=oe>=1);let k=null,ce={},le=e.getParameter(e.SCISSOR_BOX),A=e.getParameter(e.VIEWPORT),ue=new Be().fromArray(le),de=new Be().fromArray(A);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Ce(!1),we(1),me(e.CULL_FACE),xe(0);function me(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function he(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ge(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return g!==t&&(e.useProgram(t),g=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(he(e.BLEND),_=!1);else if(_===!1&&(me(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ut(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ut(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ut(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ut(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(ye[n],ye[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Ce(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function we(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function j(t){t!==te&&(ae&&e.lineWidth(t),te=t)}function Te(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(ne!==n||re!==r)&&(ne=n,re=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function Ee(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function M(t){t===void 0&&(t=e.TEXTURE0+ie-1),k!==t&&(e.activeTexture(t),k=t)}function De(t,n,r){r===void 0&&(r=k===null?e.TEXTURE0+ie-1:k);let i=ce[r];i===void 0&&(i={type:void 0,texture:void 0},ce[r]=i),(i.type!==t||i.texture!==n)&&(k!==r&&(e.activeTexture(r),k=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function Oe(){let t=ce[k];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function N(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Re(t){return f[t]===void 0?e.getParameter(t):f[t]}function P(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function F(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function ze(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},k=null,ce={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new V(0,0,0),E=0,D=!1,O=null,ee=null,te=null,ne=null,re=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:Ce,setCullFace:we,setLineWidth:j,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:M,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Ie,texImage3D:Le,pixelStorei:P,getParameter:Re,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:N,scissor:F,viewport:ze,reset:Ve}}function Da(e,t,r,i,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new I,d=new WeakMap,p=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Pt(`canvas`)}function y(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=_(n,a));let o=t?_(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Vt(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Vt(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Vt(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Vt(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?wt:ce.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Vt(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function E(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ee(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&p.delete(t)}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),ne(t)}function ee(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=h.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&te(e),Object.keys(r).length===0&&h.delete(n)}i.remove(e)}function te(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=h.get(r);delete a[n.__cacheKey],s.memory.textures--}function ne(t){let n=i.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),i.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=i.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(r[t])}i.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=a.maxTextures&&Vt(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),re+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,n){let a=i.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Vt(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Vt(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,n);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+n)}function A(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,n):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),r.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+n))}function ue(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,n):r.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+n)}function de(t,n){let a=i.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?be(a,t,n):r.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+n)}let fe={[Ee]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},pe={[Yt]:e.NEAREST,[v]:e.NEAREST_MIPMAP_NEAREST,[Ae]:e.NEAREST_MIPMAP_LINEAR,[Ht]:e.LINEAR,[it]:e.LINEAR_MIPMAP_NEAREST,[tt]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&Vt(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let o=k(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,n,i,a){let o=t.updateRanges;if(o.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=_e(r.start,n.width,4),c=_e(t.start,n.width,4);r.start<=i+1&&a===c&&_e(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(e.UNPACK_ROW_LENGTH),l=r.getParameter(e.UNPACK_SKIP_PIXELS),u=r.getParameter(e.UNPACK_SKIP_ROWS);r.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(e.UNPACK_SKIP_PIXELS,u),r.pixelStorei(e.UNPACK_SKIP_ROWS,d),r.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}t.clearUpdateRanges(),r.pixelStorei(e.UNPACK_ROW_LENGTH,c),r.pixelStorei(e.UNPACK_SKIP_PIXELS,l),r.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,n,s){let c=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,n),u=n.source;r.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(r.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=ce.getPrimaries(ce.workingColorSpace),i=n.colorSpace===``?null:ce.getPrimaries(n.colorSpace),a=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=y(n.image,!1,a.maxTextureSize);t=N(n,t);let i=o.convert(n.format,n.colorSpace),f=o.convert(n.type),m=C(n.internalFormat,i,f,n.normalized,n.colorSpace,n.isVideoTexture);he(c,n);let h,g=n.mipmaps,_=n.isVideoTexture!==!0,v=d.__version===void 0||l===!0,S=u.dataReady,D=E(n,t);if(n.isDepthTexture)m=w(n.format===T,n.type),v&&(_?r.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):r.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,f,null));else if(n.isDataTexture){if(g.length>0){_&&v&&r.texStorage2D(e.TEXTURE_2D,D,m,g[0].width,g[0].height);for(let t=0,n=g.length;t<n;t++)h=g[t],_?S&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,f,h.data):r.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,f,h.data);n.generateMipmaps=!1}else _?(v&&r.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),S&&ve(n,t,i,f)):r.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,f,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){_&&v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,g[0].width,g[0].height,t.depth);for(let a=0,o=g.length;a<o;a++)if(h=g[a],n.format!==1023){if(i!==null){if(_){if(S){if(n.layerUpdates.size>0){let t=Ke(h.width,h.height,n.format,n.type);for(let o of n.layerUpdates){let n=h.data.subarray(o*t/h.data.BYTES_PER_ELEMENT,(o+1)*t/h.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,h.width,h.height,1,i,n)}}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,h.data)}}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,h.data,0,0)}else Vt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?S&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,f,h.data):r.texImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,i,f,h.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{_&&v&&r.texStorage2D(e.TEXTURE_2D,D,m,g[0].width,g[0].height);for(let t=0,a=g.length;t<a;t++)h=g[t],n.format===1023?_?S&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,f,h.data):r.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,f,h.data):i===null?Vt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?S&&r.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,h.data):r.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(n.isDataArrayTexture){if(_){if(v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),S){if(n.layerUpdates.size>0){let a=Ke(t.width,t.height,n.format,n.type);for(let o of n.layerUpdates){let n=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,i,f,n)}n.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)}}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,i,f,t.data)}else if(n.isData3DTexture)_?(v&&r.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),S&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)):r.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,i,f,t.data);else if(n.isFramebufferTexture){if(v){if(_)r.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let n=t.width,a=t.height;for(let t=0;t<D;t++)r.texImage2D(e.TEXTURE_2D,t,m,n,a,0,i,f,null),n>>=1,a>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),p.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of p)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Pe(g[0]);r.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,n=g.length;t<n;t++)h=g[t],_?S&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,i,f,h):r.texImage2D(e.TEXTURE_2D,t,m,i,f,h);n.generateMipmaps=!1}else if(_){if(v){let n=Pe(t);r.texStorage2D(e.TEXTURE_2D,D,m,n.width,n.height)}S&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,i,f,t)}else r.texImage2D(e.TEXTURE_2D,0,m,i,f,t);b(n)&&x(c),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function be(t,n,s){if(n.image.length!==6)return;let c=ge(t,n),l=n.source;r.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){r.activeTexture(e.TEXTURE0+s);let t=ce.getPrimaries(ce.workingColorSpace),i=n.colorSpace===``?null:ce.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(n.image[e],!0,a.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=N(n,m[e]);let h=m[0],g=o.convert(n.format,n.colorSpace),_=o.convert(n.type),v=C(n.internalFormat,g,_,n.normalized,n.colorSpace),S=n.isVideoTexture!==!0,w=u.__version===void 0||c===!0,T=l.dataReady,D=E(n,h);he(e.TEXTURE_CUBE_MAP,n);let O;if(f){S&&w&&r.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let i=0;i<O.length;i++){let a=O[i];n.format===1023?S?T&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?Vt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?T&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(O=n.mipmaps,S&&w){O.length>0&&D++;let t=Pe(m[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?T&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<O.length;n++){let i=O[n].image[t].image;S?T&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,i.width,i.height,g,_,i.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,i.width,i.height,0,g,_,i.data)}}else{S?T&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let n=0;n<O.length;n++){let i=O[n];S?T&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,i.image[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,i.image[t])}}}b(n)&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function xe(t,n,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=C(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(n),h=i.get(a);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),i=Math.max(1,n.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?r.texImage3D(l,u,p,t,i,n.depth,0,d,f,null):r.texImage2D(l,u,p,t,i,0,d,f,null)}r.bindFramebuffer(e.FRAMEBUFFER,t),Me(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,je(n)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=C(a.internalFormat,s,l,a.normalized,a.colorSpace);Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,n,a){let s=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=i.get(n.depthTexture);if(l.__renderTarget=n,l.__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,D)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),r.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=o.convert(n.depthTexture.format),i=o.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let r=0;r<6;r++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,a,n.width,n.height,0,t,i,null)}}else le(n.depthTexture,0);let u=l.__webglTexture,d=je(n),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Me(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)Me(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let n=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ce(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(n.__webglFramebuffer[0],t,0):Ce(n.__webglFramebuffer,t,0)}}else if(a){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=e.createRenderbuffer(),Se(n.__webglDepthbuffer[i],t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Se(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}r.bindFramebuffer(e.FRAMEBUFFER,null)}function j(t,n,r){let a=i.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&we(t)}function Te(t){let n=t.texture,a=i.get(t),c=i.get(n);t.addEventListener(`dispose`,O);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=n.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let r=0;r<n.mipmaps.length;r++)a.__webglFramebuffer[t][r]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Me(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=C(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(a.__webglDepthRenderbuffer,t,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){r.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)xe(a.__webglFramebuffer[r][i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);b(n)&&x(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(c,s.__webglTexture),he(c,o),xe(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),b(o)&&x(c)}r.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(i,c.__webglTexture),he(i,n),n.mipmaps&&n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)xe(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,i,r);else xe(a.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,i,0);b(n)&&x(i),r.unbindTexture()}t.depthBuffer&&we(t)}function M(e){let t=e.textures;for(let n=0,a=t.length;n<a;n++){let a=t[n];if(b(a)){let t=S(e),n=i.get(a).__webglTexture;r.bindTexture(t,n),x(t),r.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(Me(t)===!1){let n=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=i.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)r.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let r=0;r<n.length;r++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[r]);let t=i.get(n[r]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+r),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(c),Oe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){r.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=i.get(n[t]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(a.maxSamples,e.samples)}function Me(e){let n=i.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function N(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ce.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Vt(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ut(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=A,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=j,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return r.buffers.depth.getReversed()}}function Oa(e,t){function n(n,r=``){let i,a=ce.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ka=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aa=`
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

}`,ja=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mt(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:ka,fragmentShader:Aa,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ma=class extends ie{constructor(e,n){super();let r=this,i=null,o=1,s=null,c=`local-floor`,u=1,d=null,f=null,p=null,m=null,h=null,g=null,_=typeof XRWebGLBinding<`u`,v=new ja,y={},b=n.getContextAttributes(),x=null,S=null,w=[],E=[],D=new I,O=null,ee=null,ne=new a;ne.viewport=new Be;let re=new a;re.viewport=new Be;let ie=[ne,re],ae=new qt,oe=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new nt,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new nt,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new nt,w[e]=t),t.getHandSpace()};function k(e){let t=E.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,d||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ce(){i.removeEventListener(`select`,k),i.removeEventListener(`selectstart`,k),i.removeEventListener(`selectend`,k),i.removeEventListener(`squeeze`,k),i.removeEventListener(`squeezestart`,k),i.removeEventListener(`squeezeend`,k),i.removeEventListener(`end`,ce),i.removeEventListener(`inputsourceschange`,le);for(let e=0;e<w.length;e++){let t=E[e];t!==null&&(E[e]=null,w[e].disconnect(t))}oe=null,se=null,v.reset();for(let e in y)delete y[e];if(e.setRenderTarget(x),h=null,m=null,p=null,i=null,S=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),ee!==null){let e=ee.camera;e.fov=ee.fov,e.zoom=ee.zoom,e.updateProjectionMatrix(),ee=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,r.isPresenting===!0&&Vt(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,r.isPresenting===!0&&Vt(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(e){d=e},this.getBaseLayer=function(){return m===null?h:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,n)),p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(a){if(i=a,i!==null){if(x=e.getRenderTarget(),i.addEventListener(`select`,k),i.addEventListener(`selectstart`,k),i.addEventListener(`selectend`,k),i.addEventListener(`squeeze`,k),i.addEventListener(`squeezestart`,k),i.addEventListener(`squeezeend`,k),i.addEventListener(`end`,ce),i.addEventListener(`inputsourceschange`,le),b.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let r=null,a=null,s=null;b.depth&&(s=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,r=b.stencil?T:N,a=b.stencil?Me:C);let c={colorFormat:n.RGBA8,depthFormat:s,scaleFactor:o};p=this.getBinding(),m=p.createProjectionLayer(c),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),S=new t(m.textureWidth,m.textureHeight,{format:l,type:Pe,depthTexture:new je(m.textureWidth,m.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let r={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(i,n,r),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new t(h.framebufferWidth,h.framebufferHeight,{format:l,type:Pe,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),d=null,s=await i.requestReferenceSpace(c),ge.setContext(i),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=E.indexOf(n);r>=0&&(E[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=E.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=E.length){E.push(n),r=e;break}else if(E[e]===null){E[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}let A=new F,ue=new F;function de(e,t,n){A.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=A.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function fe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),ae.near=re.near=ne.near=t,ae.far=re.far=ne.far=n,(oe!==ae.near||se!==ae.far)&&(i.updateRenderState({depthNear:ae.near,depthFar:ae.far}),oe=ae.near,se=ae.far),ae.layers.mask=e.layers.mask|6,ne.layers.mask=ae.layers.mask&-5,re.layers.mask=ae.layers.mask&-3;let r=e.parent,a=ae.cameras;fe(ae,r);for(let e=0;e<a.length;e++)fe(a[e],r);a.length===2?de(ae,ne,re):ae.projectionMatrix.copy(ne.projectionMatrix),ee===null&&e.isPerspectiveCamera&&(ee={camera:e,fov:e.fov,zoom:e.zoom}),pe(e,ae,r)};function pe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=te*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(m!==null||h!==null)return u},this.setFoveation=function(e){u=e,m!==null&&(m.fixedFoveation=e),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(ae)},this.getCameraTexture=function(e){return y[e]};let me=null;function he(t,n){if(f=n.getViewerPose(d||s),g=n,f!==null){let t=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let n=!1;t.length!==ae.cameras.length&&(ae.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],o=null;if(h!==null)o=h.getViewport(i);else{let t=p.getViewSubImage(m,i);o=t.viewport,r===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let s=ie[r];s===void 0&&(s=new a,s.layers.enable(r),s.viewport=new Be,ie[r]=s),s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(i.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),r===0&&(ae.matrix.copy(s.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),n===!0&&ae.cameras.push(s)}let o=i.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){p=r.getBinding();let e=p.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,i.renderState)}if(o&&o.includes(`camera-access`)&&_){e.state.unbindTexture(),p=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new Mt,y[n]=e);let t=p.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=E[e],r=w[e];t!==null&&r!==void 0&&r.update(t,n,d||s)}me&&me(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),g=null}let ge=new wn;ge.setAnimationLoop(he),this.setAnimationLoop=function(e){me=e},this.dispose=function(){}}},Na=new We,Pa=new B;Pa.set(-1,0,0,0,1,0,0,0,1);function Fa(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Dt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Na.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pa),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ia(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return ut(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Vt(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Vt(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var La=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ra=null;function za(){return Ra===null&&(Ra=new o(La,16,16,He,Et),Ra.name=`DFG_LUT`,Ra.minFilter=Ht,Ra.magFilter=Ht,Ra.wrapS=n,Ra.wrapT=n,Ra.generateMipmaps=!1,Ra.needsUpdate=!0),Ra}var Ba=class{constructor(n={}){let{canvas:r=Tt(),context:i=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Pe}=n;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=i.getContextAttributes().alpha}else h=s;let g=m,_=new Set([Ie,Wt,Zt]),v=new Set([Pe,C,re,Me,ae,Nt]),y=new Uint32Array(4),b=new Int32Array(4),x=new F,S=null,w=null,T=[],E=[],D=null;this.domElement=r,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,ee=!1,te=null,ne=null,ie=null,oe=null;this._outputColorSpace=he;let se=0,k=0,le=null,A=-1,ue=null,de=new Be,fe=new Be,pe=null,me=new V(0),ge=0,_e=r.width,ve=r.height,ye=1,be=null,xe=null,Ce=new Be(0,0,_e,ve),we=new Be(0,0,_e,ve),j=!1,Te=new e,Ee=!1,M=!1,De=new We,Oe=new F,ke=new Be,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Ne(){return le===null?ye:1}let N=i;function Fe(e,t){return r.getContext(e,t)}let Le,Re,P,ze,I,L,Ve,He,Ue,Ge,Ke,qe,Je,R,Ye,Xe,Ze,Qe,$e,et,nt,rt,z;try{let e={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in r&&r.setAttribute(`data-engine`,`three.js r186`),r.addEventListener(`webglcontextlost`,ot,!1),r.addEventListener(`webglcontextrestored`,B,!1),r.addEventListener(`webglcontextcreationerror`,st,!1),N===null){let t=`webgl2`;if(N=Fe(t,e),N===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw r.removeEventListener(`webglcontextlost`,ot,!1),r.removeEventListener(`webglcontextrestored`,B,!1),r.removeEventListener(`webglcontextcreationerror`,st,!1),ut(`WebGLRenderer: `+e.message),e}function it(){Le=new ir(N),Le.init(),nt=new Oa(N,Le),Re=new Nn(N,Le,n,nt),P=new Ea(N,Le),Re.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),ne=N.createFramebuffer(),ie=N.createFramebuffer(),oe=N.createFramebuffer(),ze=new sr(N),I=new oa,L=new Da(N,Le,P,I,Re,nt,ze),Ve=new rr(O),He=new Tn(N),rt=new jn(N,He),Ue=new ar(N,He,ze,rt),Ge=new lr(N,Ue,He,rt,ze),Qe=new cr(N,Re,L),Ye=new Pn(I),Ke=new aa(O,Ve,Le,Re,rt,Ye),qe=new Fa(O,I),Je=new ua,R=new _a(Le),Ze=new An(O,Ve,P,Ge,h,l),Xe=new Ta(O,Ge,Re),z=new Ia(N,ze,Re,P),$e=new Mn(N,Le,ze),et=new or(N,Le,ze),ze.programs=Ke.programs,O.capabilities=Re,O.extensions=Le,O.properties=I,O.renderLists=Je,O.shadowMap=Xe,O.state=P,O.info=ze}g!==1009&&(D=new dr(g,r.width,r.height,c,a,o));let at=new Ma(O,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,t,n=!0){at.isPresenting?Vt(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=t,r.width=Math.floor(e*ye),r.height=Math.floor(t*ye),n===!0&&(r.style.width=e+`px`,r.style.height=t+`px`),D!==null&&D.setSize(r.width,r.height),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,t,n){_e=e,ve=t,ye=n,r.width=Math.floor(e*n),r.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(g===1009)ut(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Vt(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),P.viewport(de.copy(Ce).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.scissor(fe.copy(we).multiplyScalar(ye).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(e){P.setScissorTest(j=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(le!==null){let t=le.texture.format;e=_.has(t)}if(e){let e=le.texture.type,t=v.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,N.clearBufferuiv(N.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,N.clearBufferiv(N.COLOR,0,b))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){r.removeEventListener(`webglcontextlost`,ot,!1),r.removeEventListener(`webglcontextrestored`,B,!1),r.removeEventListener(`webglcontextcreationerror`,st,!1),Ze.dispose(),Je.dispose(),R.dispose(),I.dispose(),Ve.dispose(),Ge.dispose(),rt.dispose(),z.dispose(),Ke.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,ht),at.removeEventListener(`sessionend`,gt),_t.stop()};function ot(e){e.preventDefault(),Lt(`WebGLRenderer: Context Lost.`),ee=!0}function B(){Lt(`WebGLRenderer: Context Restored.`),ee=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function st(e){ut(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){dt(e),I.remove(e)}function dt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){te!==null&&e.isNodeMaterial&&te.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),te!==null&&te.renderStart(e,t,n),w=R.get(n),w.init(t),E.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),te!==null&&te.updateLights(w.state.lightsArray),M=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,M),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),te!==null&&Xe.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),w=E.pop(),te!==null&&te.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new wn;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){pt=e,at.setAnimationLoop(e),e===null?_t.stop():_t.start()},at.addEventListener(`sessionstart`,ht),at.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ut(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=D!==null&&(le===null||n)&&D.begin(O,le);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,le),w=R.get(e,E.length),w.init(t),w.state.textureUnits=L.getTextureUnits(),E.push(w),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(De,Se,t.reversedDepth),M=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,M),S=Je.get(e,T.length),S.init(),T.push(S),at.enabled===!0&&at.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,O.sortObjects)}vt(e,t,0,O.sortObjects),S.finish(),te!==null&&te.updateLights(w.state.lightsArray),O.sortObjects===!0&&S.sort(be,xe),je=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,je&&Ze.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=w.state.shadowsArray;if(Xe.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&D.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}je&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(S,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),je&&Ze.render(e),yt(S,e,t)}le!==null&&k===0&&(L.updateMultisampleRenderTarget(le),L.updateRenderTargetMipmap(le)),r&&D.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),rt.resetDefaultState(),A=-1,ue=null,E.pop(),E.length>0?(w=E[E.length-1],L.setTextureUnits(w.state.textureUnits),Ee===!0&&Ye.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,T.pop(),S=T.length>0?T[T.length-1]:null,te!==null&&te.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ge.update(e),a=e.material;a.visible&&S.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,ke.z,s,t)}}else a.visible&&S.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),Ee===!0&&Ye.setGlobalState(O.clippingPlanes,n),r&&P.viewport(de.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function xt(e,n,r,i){if((r.isScene===!0?r.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[i.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[i.id]=new t(1,1,{generateMipmaps:!0,type:e?Et:Pe,minFilter:tt,samples:Math.max(4,Re.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let a=w.state.transmissionRenderTarget[i.id],s=i.viewport||de;a.setSize(s.z*O.transmissionResolutionScale,s.w*O.transmissionResolutionScale);let c=O.getRenderTarget(),l=O.getActiveCubeFace(),u=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(me),ge=O.getClearAlpha(),ge<1&&O.setClearColor(16777215,.5),O.clear(),je&&Ze.render(r);let d=O.toneMapping;O.toneMapping=0;let f=i.viewport;if(i.viewport!==void 0&&(i.viewport=void 0),w.setupLightsView(i),Ee===!0&&Ye.setGlobalState(O.clippingPlanes,i),St(e,r,i),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let t=0,a=n.length;t<a;t++){let{object:a,geometry:o,material:s,group:c}=n[t];if(s.side===2&&a.layers.test(i.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,r,i,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}O.setRenderTarget(c,l,u),O.setClearColor(me,ge),f!==void 0&&(i.viewport=f),O.toneMapping=d}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){te!==null&&i.isNodeMaterial&&te.setObject(e,i),e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=Ae);let r=I.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ke.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,O),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vi.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ae),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=le===null?O.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ce.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=w.state.lights;if(Ee===!0&&(M===!0||e!==ue)){let t=e===ue&&r.id===A;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==A&&(A=r.id,C=!0),v.needsLights){let e=kt(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(N,`projectionMatrix`,e.projectionMatrix),E.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(N,Oe.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(N,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&E.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&E.setValue(N,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&E.setValue(N,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){E.setOptional(N,i,`bindMatrix`),E.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(N,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(E.setOptional(N,i,`batchingTexture`),E.setValue(N,`batchingTexture`,i._matricesTexture,L),E.setOptional(N,i,`batchingIdTexture`),E.setValue(N,`batchingIdTexture`,i._indirectTexture,L),E.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(N,`batchingColorTexture`,i._colorsTexture,L));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=za()),C){if(E.setValue(N,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&jt(D,T),a&&r.fog===!0&&qe.refreshFogUniforms(D,a),qe.refreshMaterialUniforms(D,r,ye,ve,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}vi.upload(N,Dt(v),D,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vi.upload(N,Dt(v),D,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(N,`center`,i.center),E.setValue(N,`modelViewMatrix`,i.modelViewMatrix),E.setValue(N,`normalMatrix`,i.normalMatrix),E.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];z.update(n,x),z.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){le=e,se=t,k=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,P.viewport(de),P.scissor(fe),P.setScissorTest(pe),A=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(Ce).multiplyScalar(ye).floor(),fe.copy(we).multiplyScalar(ye).floor(),pe=j;if(n!==0&&(r=ne),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(de),P.scissor(fe),P.setScissorTest(pe),i){let r=I.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}A=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=le===null?null:I.get(le).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=le===null?null:I.get(le).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ie),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){se=0,k=0,le=null,P.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Se}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(e),t.unpackColorSpace=ce._getUnpackColorSpace()}},G={phase:`ready`,timer:0,coins:ot.initialCoins,best:ot.initialBest,lastDist:0,fuel:0,cosmoPoints:0,oxidizerLeft:0,oxidizerActive:!1,upgrades:{power:ot.initialUpgrades.power,aero:ot.initialUpgrades.aero,fuel:ot.initialUpgrades.fuel,thrust:ot.initialUpgrades.thrust,launchAngle:0,frictionHeight:0,engineHeight:0,oxidizer:0},cards:{},openedChests:new Set,gems:0,collectedGems:new Set,abilities:{forsage:{level:0,active:!1,activeEnd:0,cooldownEnd:0,usesLeft:0}},hasBoughtCard:!1,uiBadges:{cards:!1,news:!1}},K={pos:new F(0,ot.restY,0),prevPos:new F(0,ot.restY,0),rotZ:0,prevRotZ:0,vel:new F,prevVel:new F,angVel:0,maxAlt:0},q={fade:0,in2D:!1,showing3D:!0,altSmooth:0,altInit:!1,fogAlt:0,fogDelay:0},J={blend:0,shake:0,look:new F(0,3,0),target:new F,pos:new F,prevPos:new F,prevLook:new F(0,3,0),inited:!1,dive:0},Va={boost:!1,keys:{W:!1,S:!1,E:!1},touch:{W:!1,S:!1,E:!1}},Ha={gameTime:0,totalPlaytime:0},Ua={samples:[],recording:!1,startTime:0,nextSampleTime:0},Wa={samples:null,best:0},Ga={boosting:!1},Ka,Y,qa,Ja,Ya,Xa,Za,Qa=new V(k.zenith),$a=new V(k.horizon),eo=new V(k.sun),to=new F(...k.hazeColor),no=new F(...k.sunDir).normalize(),X=new r;X.fog=new xe(k.horizon,ct.initialNear,ct.initialFar);var ro={center:{value:new I(0,0)},dir:{value:new I(1,0)},shapeSide:{value:ct.ellipseSide},shapeBack:{value:ct.ellipseBack}};function io(e,t){e.onBeforeCompile=e=>{t&&t(e),e.uniforms.skyTop={value:Qa},e.uniforms.skyBottom={value:$a},e.uniforms.skyExponent={value:k.exponent},e.uniforms.sunColorF={value:eo},e.uniforms.sunDirF={value:no},e.uniforms.hazeColorF={value:to},e.uniforms.hazePowF={value:k.hazePow},e.uniforms.glowPowF={value:k.glowPow},e.uniforms.glowAmtF={value:k.glowAmt},e.uniforms.corePowF={value:k.corePow},e.uniforms.coreAmtF={value:k.coreAmt},e.uniforms.fogCenter=ro.center,e.uniforms.fogDirU=ro.dir,e.uniforms.fogShapeSide=ro.shapeSide,e.uniforms.fogShapeBack=ro.shapeBack,e.vertexShader=e.vertexShader.replace(`#include <fog_pars_vertex>`,`#include <fog_pars_vertex>
       varying vec3 vSkyWorldPos;`),e.vertexShader=e.vertexShader.replace(`#include <fog_vertex>`,`#include <fog_vertex>
   vec4 _skyWp = vec4(transformed, 1.0);
   #ifdef USE_INSTANCING
     _skyWp = instanceMatrix * _skyWp;
   #endif
   _skyWp = modelMatrix * _skyWp;
   vSkyWorldPos = _skyWp.xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <fog_pars_fragment>`,`#include <fog_pars_fragment>
       uniform vec3  skyTop;
       uniform vec3  skyBottom;
       uniform float skyExponent;
       uniform vec3  sunColorF;
       uniform vec3  sunDirF;
       uniform vec3  hazeColorF;
       uniform float hazePowF;
       uniform float glowPowF;
       uniform float glowAmtF;
       uniform float corePowF;
       uniform float coreAmtF;

       uniform vec2  fogCenter;
       uniform vec2  fogDirU;
       uniform float fogShapeSide;
       uniform float fogShapeBack;

       varying vec3  vSkyWorldPos;

       vec3 skyColorAtDir(vec3 dir) {
         float h = max(dir.y, 0.0);
         float t = pow(h, skyExponent);
         vec3 col = mix(skyBottom, skyTop, t);
         float haze = exp(-h * hazePowF);
         col = mix(col, col + hazeColorF, haze);
         float d    = max(dot(dir, normalize(sunDirF)), 0.0);
         float glow = pow(d, glowPowF) * glowAmtF;
         float core = pow(d, corePowF) * coreAmtF;
         col += sunColorF * (glow + core);
         return col;
       }`),e.fragmentShader=e.fragmentShader.replace(`#include <fog_fragment>`,`#ifdef USE_FOG
         vec2  toFrag = vSkyWorldPos.xz - fogCenter;
         float along  = dot(toFrag, fogDirU);
         float across = abs(dot(toFrag, vec2(-fogDirU.y, fogDirU.x)));
         float rAlong = along >= 0.0 ? 1.0 : fogShapeBack;
         vec2  p      = vec2(along / rAlong, across / fogShapeSide);
         float eDist  = length(p);

         vec3  skyLook = normalize(vSkyWorldPos - cameraPosition);
         vec3  fogCol  = skyColorAtDir(skyLook);

         float fogFactor = smoothstep(fogNear, fogFar, eDist);
         gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
       #endif`)},e.needsUpdate=!0}function ao(){Ka=new Ba({antialias:Qt.antialias}),Ka.setPixelRatio(Math.min(devicePixelRatio,Qt.pixelRatioCap)),Ka.setSize(innerWidth,innerHeight),Ka.toneMapping=4,Ka.toneMappingExposure=Qt.toneMappingExposure,Ka.shadowMap.enabled=Ue.shadow.enabled,Ka.shadowMap.type=2,document.body.appendChild(Ka.domElement),Y=new a(j.fov,innerWidth/innerHeight,j.near,j.far),Y.position.set(...j.initial),addEventListener(`resize`,()=>{Y.aspect=innerWidth/innerHeight,Y.updateProjectionMatrix(),Ka.setSize(innerWidth,innerHeight)});let e=new ft({side:1,depthWrite:!1,fog:!1,uniforms:{topColor:{value:Qa},bottomColor:{value:$a},sunColor:{value:eo},sunDir:{value:no},exponent:{value:k.exponent},hazeColor:{value:to},hazePow:{value:k.hazePow},glowPow:{value:k.glowPow},glowAmt:{value:k.glowAmt},corePow:{value:k.corePow},coreAmt:{value:k.coreAmt}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3  topColor;
      uniform vec3  bottomColor;
      uniform vec3  sunColor;
      uniform vec3  sunDir;
      uniform float exponent;
      uniform vec3  hazeColor;
      uniform float hazePow;
      uniform float glowPow;
      uniform float glowAmt;
      uniform float corePow;
      uniform float coreAmt;
      varying vec3 vWorldPos;

      void main() {
        vec3 dir = normalize(vWorldPos - cameraPosition);
        float h = max(dir.y, 0.0);
        float t = pow(h, exponent);
        vec3 col = mix(bottomColor, topColor, t);

        float haze = exp(-h * hazePow);
        col = mix(col, col + hazeColor, haze);

        float d    = max(dot(dir, normalize(sunDir)), 0.0);
        float glow = pow(d, glowPow) * glowAmt;
        float core = pow(d, corePow) * coreAmt;
        col += sunColor * (glow + core);

        gl_FragColor = vec4(col, 1.0);
      }
    `});Ja=new Kt(new b(k.domeRadius,k.domeSegW,k.domeSegH),e),Ja.frustumCulled=!1,Ja.renderOrder=-1,X.add(Ja),Za=new Ft(Ue.hemiSky,Ue.hemiGround,Ue.hemiIntensity),X.add(Za),qa=new Le(Ue.sunColor,Ue.sunIntensity),qa.position.set(...Ue.sunOffset),qa.castShadow=Ue.shadow.enabled,qa.shadow.mapSize.set(Ue.shadow.mapSize,Ue.shadow.mapSize);let t=qa.shadow.camera;t.left=-Ue.shadow.cameraSize,t.right=Ue.shadow.cameraSize,t.top=Ue.shadow.cameraSize,t.bottom=-Ue.shadow.cameraSize,t.near=Ue.shadow.near,t.far=Ue.shadow.far,qa.shadow.bias=Ue.shadow.bias,qa.shadow.normalBias=Ue.shadow.normalBias,X.add(qa),X.add(qa.target),Ya=en(Ka.capabilities.getMaxAnisotropy()),Xa=new De({map:Ya,vertexColors:!0,roughness:1,metalness:0}),io(Xa)}function oo(){let e=K.pos.x,t=K.pos.y,n=K.pos.z,r=Math.max(no.y,.2);qa.position.set(e+no.x*60,t+r*60,n+no.z*60),qa.target.position.set(e,t,n),qa.target.updateMatrixWorld(),Ja.position.copy(Y.position)}function so(){Ka.render(X,Y)}var Z=At.size,co=At.segments,lo=At.loadForward,uo=At.loadBack,fo=At.loadSide,po=At.unloadMargin;R.density;var mo=Object.keys(R.thresholds),ho=R.kinds;function go(e){let t=mo[0];for(let n=0;n<mo.length;n++){let r=mo[n];if(e<R.thresholds[r])return r;t=r}return t}function _o(e,t,n){let r=n??R.density,i=At.size,a=Ve(e+40503,t+31161)^St,o=Je(a),s=e*i,c=t*i,l=[],u=R.scales,d=R.vegMaxHeight,f=R.vegMinHeight,p=R.rockLowlandFrequency,m=R.rockScaleBias,h=R.safeRadius,g=h*h,_=R.safeRadiusTrees,v=h,y=h,b=st(e,t);for(let e=0;e<r;e++){let e=s+o()*i,t=c+o()*i,n=e+2.6,r=t;if(n*n+r*r<g)continue;let a=go(o()),h=ho[a]?.category||`rock`;if(h===`tree`||h===`shrub`){let e=n/(n>=0?_:v),t=r/y;if(e*e+t*t<1)continue}let x=Te(e,t);if(h===`rock`){if(x<=d&&o()>p)continue}else{let n=at(e,t,b);if(n<=0||o()>n||x>d||x<f)continue}let S=h===`rock`?u.rock[0]+(u.rock[1]-u.rock[0])*o()**+m:u.tree[0]+o()*(u.tree[1]-u.tree[0]),C=o()*6.28;l.push({x:e,z:t,kind:a,scale:S,rotY:C})}return l}var vo=new De({vertexColors:!0,roughness:R.material.roughness,metalness:R.material.metalness,flatShading:!1}),yo=new Map;function bo(e,t){let n=e+`,`+t,r=yo.get(n);return r||(r=_o(e,t),yo.set(n,r)),r}function xo(e,t){return[...bo(e-1,t-1),...bo(e-1,t),...bo(e-1,t+1),...bo(e,t-1),...bo(e,t),...bo(e,t+1),...bo(e+1,t-1),...bo(e+1,t),...bo(e+1,t+1)]}function So(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new p,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Co(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Co(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Co(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new g(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function wo(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function To(e,t){let n=new V(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new g(i,3)),e}function Eo(e){if(!e||e.length===0)return null;if(e.length===1){let t=e[0];if(t.index!==null)return t;let n=wo(t);return t.dispose(),n}return So(e.map(e=>{if(e.index!==null)return e;let t=wo(e);return e.dispose(),t}))}function Do(){let e=R.colors,t=[],n=3.6,r=new oe(.18,.28,n,6);r.translate(0,n/2,0),t.push(To(r,e.trunk));for(let r=0;r<3;r++){let i=1.55-r*.32,a=1.8-r*.15,o=new de(i,a,7);o.translate(0,n+a*.5*r+a*.3,0),t.push(To(o,e.pine))}return Eo(t)}function Oo(){let e=R.colors,t=[],n=2.2,r=new oe(.22,.34,n,6);r.translate(0,n/2,0),t.push(To(r,e.trunk));for(let[n,r,i,a]of[[0,3.1,0,1.15],[.6,3.5,-.4,.95],[-.5,3.6,.5,.9],[.2,4.1,-.1,.85]]){let o=new b(a,8,6);o.translate(n,r,i),t.push(To(o,e.oak))}return Eo(t)}function ko(){let e=R.colors,t=[],n=3.2,r=new oe(.14,.22,n,6);r.translate(0,n/2,0),t.push(To(r,e.birchTrunk));for(let[n,r,i,a]of[[0,3.9000000000000004,0,.85],[.5,4.300000000000001,-.3,.65],[-.4,4.2,.4,.7]]){let o=new b(a,7,5);o.translate(n,r,i),t.push(To(o,e.birchLeaves))}return Eo(t)}function Ao(){let e=R.colors,t=[],n=3.5,r=new oe(.15,.3,n,5);r.translate(0,n/2,0),t.push(To(r,e.deadTrunk));let i=[{y:n*.55,angle:.7,len:1.2},{y:n*.72,angle:-.9,len:.9},{y:n*.86,angle:.3,len:.8}];for(let n of i){let r=new oe(.06,.11,n.len,4);r.translate(0,n.len/2,0),r.rotateZ(n.angle),r.translate(0,n.y,0),t.push(To(r,e.deadBranch))}return Eo(t)}function jo(){let e=R.colors,t=[],n=4.5,r=new oe(.16,.24,n,6);r.translate(0,n/2,0),t.push(To(r,e.trunk));let i=new de(1.1,n*.9,8);return i.translate(0,n*.7,0),t.push(To(i,e.spruce)),Eo(t)}function Mo(){let e=R.colors,t=[];for(let[n,r,i,a]of[[0,.55,0,.65],[.4,.45,-.3,.55],[-.35,.5,.35,.55]]){let o=new b(a,7,5);o.translate(n,r,i),t.push(To(o,e.bush))}return Eo(t)}function No(){let e=new dt(1,0);return e.scale(1,.75,1),To(e,R.colors.rock)}function Po(){let e=R.colors,t=new dt(1,0);t.scale(1,.9,1),To(t,e.boulder);let n=new b(.75,5,3);return n.scale(1,.35,1),n.translate(0,.7,0),To(n,e.oak),Eo([t,n])}function Fo(){let e=new dt(1,0);return e.scale(1.4,.25,1),To(e,R.colors.flatRock)}var Io={pine:Do,oak:Oo,birch:ko,deadTree:Ao,spruce:jo,bush:Mo,rock:No,sharpRock:Po,flatRock:Fo},Lo={};for(let e of Object.keys(R.kinds)){let t=Io[e];if(!t)console.warn(`[props] Нет builder для kind="${e}" — пропускаю`);else try{let n=t();if(!n){console.error(`[props] "${e}": builder вернул null — пропускаю`);continue}Lo[e]=n}catch(t){console.error(`[props] "${e}": исключение при сборке — пропускаю`,t)}}var Ro=R.kinds,zo=Object.keys(Lo);zo.filter(e=>Ro[e].category===`rock`),zo.filter(e=>Ro[e].category===`tree`),zo.filter(e=>Ro[e].category===`shrub`);function Bo(e){return Ro[e]?.shadowR??0}var Vo=x.tile,Ho=new h,Uo=3;function Wo(e,t,n){let r=new ue(Z,Z,co,co);r.rotateX(-Math.PI/2);let i=e*Z+Z/2,a=t*Z+Z/2,o=e*Z,s=t*Z,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.normal,d=new Float32Array(c.count*3),f=new V,p=new Float32Array(c.count).fill(1),m=Z/co,h=co+1,_=new Float32Array(h*h);for(let e=0;e<c.count;e++){let t=i+c.getX(e),n=a+c.getZ(e),r=Te(t,n);c.setY(e,r);let o=Math.round((c.getX(e)+Z/2)/m),s=Math.round((c.getZ(e)+Z/2)/m);_[s*h+o]=r,l.setXY(e,t/Vo,n/Vo),Ut(r,f);let u=Xt(t,n);d[e*3]=f.r*u,d[e*3+1]=f.g*u,d[e*3+2]=f.b*u}for(let e=0;e<c.count;e++){let t=Math.round((c.getX(e)+Z/2)/m),n=Math.round((c.getZ(e)+Z/2)/m),r=_[n*h+t],o=t<co?_[n*h+t+1]:Te(i+c.getX(e)+m,a+c.getZ(e)),s=n<co?_[(n+1)*h+t]:Te(i+c.getX(e),a+c.getZ(e)+m),l=-(o-r)/m,d=-(s-r)/m,f=Math.hypot(l,1,d);u.setXYZ(e,l/f,1/f,d/f)}let v=Math.hypot(no.x,no.z)||1,y=-no.x/v,b=-no.z/v,x=R.shadow.strength,S=R.shadow.scale,C=R.shadow.softness,w=R.shadow.offset;for(let e=0;e<n.length;e++){let t=n[e],r=Bo(t.kind);if(r<=0)continue;let i=r*t.scale*S;if(i<=0)continue;let a=w*(.6+.4*t.scale),c=t.x+y*a,l=t.z+b*a,u=c-o,d=l-s,f=Math.max(0,Math.floor((u-i)/m)),g=Math.min(co,Math.ceil((u+i)/m)),_=Math.max(0,Math.floor((d-i)/m)),v=Math.min(co,Math.ceil((d+i)/m)),T=i*i;for(let e=_;e<=v;e++){let t=e*m-d,n=t*t,r=e*h;for(let e=f;e<=g;e++){let t=e*m-u,a=t*t+n;if(a>T)continue;let o=1-(1-(Math.sqrt(a)/i)**+C)*x,s=r+e;o<p[s]&&(p[s]=o)}}}for(let e=0;e<c.count;e++){let t=p[e];t<1&&(d[e*3]*=t,d[e*3+1]*=t,d[e*3+2]*=t)}c.needsUpdate=!0,l.needsUpdate=!0,u.needsUpdate=!0,r.setAttribute(`color`,new g(d,3));let T=new Kt(r,Xa);T.position.set(i,0,a),T.receiveShadow=!0;let E=1/m;return T.userData.terrainSampler=(e,t)=>{let n=(e-o)*E,r=(t-s)*E,i=Math.floor(n),a=Math.floor(r),c=n-i,l=r-a;i<0?(i=0,c=0):i>h-2&&(i=h-2,c=1),a<0?(a=0,l=0):a>h-2&&(a=h-2,l=1);let u=a*h+i,d=u+1,f=u+h,p=f+1;return _[u]*(1-c)*(1-l)+_[d]*c*(1-l)+_[f]*(1-c)*l+_[p]*c*l},T}function Go(e,t,n,r){let i={};for(let e of zo)i[e]=[];for(let e of n){let t=i[e.kind];t&&t.push({x:e.x,y:r(e.x,e.z),z:e.z,scale:e.scale,rotY:e.rotY})}let a=[];for(let e of zo){let t=i[e];if(!t||t.length<Uo)continue;let n=Lo[e];if(!n)continue;let r=new Ot(n,vo,t.length);r.instanceMatrix.setUsage(O),r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0;for(let e=0;e<t.length;e++){let n=t[e];Ho.position.set(n.x,n.y,n.z),Ho.rotation.set(0,n.rotY,0),Ho.scale.setScalar(n.scale),Ho.updateMatrix(),r.setMatrixAt(e,Ho.matrix)}r.instanceMatrix.needsUpdate=!0,X.add(r),a.push(r)}return a}function Ko(e){let t=[];for(let n of zo){let r=e[n];if(!r||r.length===0)continue;let i=r.length/16;if(i<Uo)continue;let a=Lo[n];if(!a)continue;let o=new Ot(a,vo,i);o.instanceMatrix.setUsage(O),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!0,o.instanceMatrix.array.set(r),o.instanceMatrix.needsUpdate=!0,X.add(o),t.push(o)}return t}function qo(e,t,n){let r=new ue(Z,Z,co,co);r.rotateX(-Math.PI/2);let i=r.attributes.position;for(let e=0;e<i.count;e++)i.setY(e,n.heights[e]);i.needsUpdate=!0,r.setAttribute(`normal`,new g(n.normals,3)),r.setAttribute(`color`,new g(n.colors,3)),r.setAttribute(`uv`,new g(n.uvs,2));let a=e*Z+Z/2,o=t*Z+Z/2,s=new Kt(r,Xa);return s.position.set(a,0,o),s.receiveShadow=!0,s}var Jo=new Map,Yo=new Set;{let e=At.persistentStart;for(let t=e.xMin;t<=e.xMax;t++)for(let n=e.zMin;n<=e.zMax;n++)Yo.add(t+`,`+n)}function Xo(e,t){let n=e+`,`+t;if(Jo.has(n))return;let r=bo(e,t),i=Wo(e,t,Yo.has(n)?xo(e,t):r),a=Go(e,t,r,i.userData.terrainSampler);X.add(i),i.visible=q.fade<.95;for(let e of a)e.visible=q.showing3D;Jo.set(n,{mesh:i,props:a,cx:e,cz:t})}function Zo(e){if(Yo.has(e))return;let t=Jo.get(e);if(t){X.remove(t.mesh),t.mesh.geometry.dispose();for(let e of t.props)X.remove(e);Jo.delete(e),yo.delete(e)}}function Qo(e){return new Worker(new URL(`chunkWorker-DoHkS0Um.js`,import.meta.url).href,{name:e?.name})}var $o=Math.max(1,Math.min(3,(navigator.hardwareConcurrency||4)-1)),es=[],ts=new Map,ns=[],rs=new Set,is=!1;function as(){if(!is){is=!0;try{for(let e=0;e<$o;e++){let t=new Qo,n=e;t.onmessage=e=>os(n,e),t.onerror=e=>console.error(`[chunks] worker error:`,e),t.postMessage({type:`init`,density:R.density,segments:At.segments}),es.push({worker:t,busy:!1})}console.log(`[chunks] worker pool: ${es.length}`)}catch(e){console.warn(`[chunks] Web Workers недоступны, fallback на sync:`,e)}}}function os(e,t){let n=t.data,{cx:r,cz:i}=n,a=r+`,`+i,o=es[e];o&&(o.busy=!1),!(!ts.delete(a)||Jo.has(a)||rs.has(a))&&(ns.push({key:a,cx:r,cz:i,data:n}),rs.add(a))}function ss(e,t){let n=null;for(let e of es)if(!e.busy){n=e;break}if(!n)return!1;let r=e+`,`+t;return n.busy=!0,n.worker.postMessage({cx:e,cz:t}),ts.set(r,!0),!0}var cs={active:!1},ls=[],us=0;function ds(e,t){let n=Math.floor(e/Z),r=Math.floor(t/Z),i,a,o;cs.active?(i=At.loadForwardFar,a=At.loadBackFar,o=At.loadSideFar):(i=lo,a=uo,o=fo);let s=i+1,c=a+1,l=o+1;for(let e of yo.keys()){if(Yo.has(e))continue;let[t,i]=e.split(`,`),a=+t-n,o=+i-r;(a<-c||a>s||Math.abs(o)>l)&&yo.delete(e)}let u=[];for(let e=-a;e<=i;e++)for(let t=-o;t<=o;t++){let i=n+e,a=r+t,o=i+`,`+a;if(Jo.has(o)||ts.has(o)||rs.has(o))continue;let s=e===0&&t===0?-1e3:-e*2+Math.abs(t);u.push({cx:i,cz:a,score:s})}u.sort((e,t)=>e.score-t.score),ls.length=0,us=0;for(let e of u)ls.push([e.cx,e.cz])}function fs(){if(!(q.fade>.5&&!cs.active)){if(us>=ls.length)ls.length=0,us=0;else if(es.length===0){let e=cs.active?6:4,t=performance.now();for(;us<ls.length&&performance.now()-t<e;){let[e,t]=ls[us++];Jo.has(e+`,`+t)||Xo(e,t)}}else{for(;us<ls.length;){let[e,t]=ls[us],n=e+`,`+t;if(Jo.has(n)||ts.has(n)||rs.has(n))us++;else{if(!ss(e,t))break;us++}}us>=ls.length&&(ls.length=0,us=0)}}}function ps(){if(ns.length===0)return;let e=Y.position.x,t=Y.position.z,n=Math.floor(e/Z),r=Math.floor(t/Z),i,a,o;cs.active?(i=At.loadForwardFar,a=At.loadBackFar,o=At.loadSideFar):(i=lo,a=uo,o=fo);let s=Qt.maxChunksPerFrame??1,c=0;for(;ns.length>0&&c<s;){let s=0,l=1/0;for(let n=0;n<ns.length;n++){let r=ns[n],i=r.cx*Z+Z/2,a=r.cz*Z+Z/2,o=i-e,c=a-t,u=o*o+c*c;u<l&&(l=u,s=n)}let{key:u,cx:d,cz:f,data:p}=ns[s];if(ns.splice(s,1),rs.delete(u),Jo.has(u)){console.debug(`[dup chunk]`,u);continue}let m=d-n,h=f-r;if(m<-(a+po)||m>i+po||Math.abs(h)>o+po)continue;let g=qo(d,f,p),_=Ko(p.propMatrices);X.add(g);let v=d*Z+Z/2,y=f*Z+Z/2,b=v-Y.position.x,x=y-Y.position.z,S=Math.sqrt(b*b+x*x),C=X.fog.far*1.2,w=R.maxRenderDistance??500,T=S<C&&q.fade<.95;g.visible=T;let E=T&&q.showing3D&&S<w;for(let e of _)e.visible=E;Jo.set(u,{mesh:g,props:_,cx:d,cz:f}),c++}}function ms(e,t){if(Yo.size===0)return;let n=At.persistentVisibleRadius,r=Math.floor(e/Z),i=Math.floor(t/Z),a=q.fade<.95,o=q.showing3D;for(let e of Yo){let t=Jo.get(e);if(!t)continue;let[s,c]=e.split(`,`),l=Math.abs(+s-r)<=n&&Math.abs(+c-i)<=n;t.mesh.visible=l&&a;let u=l&&o;for(let e of t.props)e.visible=u}}function hs(e,t,n){let r=Math.floor(e/Z),i=X.fog.far*1.2,a=R.maxRenderDistance??500;for(let[t,o]of Jo){if(Yo.has(t))continue;let s=o.cx<r-1,c=o.cx*Z+Z/2,l=o.cz*Z+Z/2,u=c-e,d=l-n,f=Math.sqrt(u*u+d*d),p=!s&&f<i&&q.fade<.95;o.mesh.visible=p;let m=p&&q.showing3D&&f<a;for(let e of o.props)e.visible=m}}function gs(){io(vo),as()}var _s={x:NaN,z:NaN},vs={cxi:NaN,czi:NaN,showFine:null,showProps:null};function ys(){let e=Y.position.x,t=Y.position.y,n=Y.position.z,r=Math.floor(e/Z),i=Math.floor(n/Z);if(Math.hypot(e-K.pos.x,n-K.pos.z)>500){_s.x=NaN,_s.z=NaN,ps();return}let a=q.fade<.95,o=q.showing3D;if((r!==vs.cxi||i!==vs.czi||a!==vs.showFine||o!==vs.showProps)&&(ms(e,n),vs={cxi:r,czi:i,showFine:a,showProps:o}),q.fade>.5&&!cs.active&&q.altSmooth>At.preloadAltitude)return;let s=q.fade>.5&&q.altSmooth<At.preloadAltitude;s===cs.active?(r!==_s.x||i!==_s.z)&&((q.fade<.5||cs.active)&&ds(e,n),_s.x=r,_s.z=i):(cs.active=s,ds(e,n),_s.x=r,_s.z=i),ps(),fs(),(r!==vs.cxi||i!==vs.czi||a!==vs.showFine||o!==vs.showProps)&&(ms(e,n),vs={cxi:r,czi:i,showFine:a,showProps:o}),hs(e,t,n)}async function bs(e){let t=Y.position.x,n=Y.position.z,r=Math.floor(t/Z),i=Math.floor(n/Z),a=[],o=new Set;for(let e=-uo;e<=lo;e++)for(let t=-fo;t<=fo;t++){let n=r+e+`,`+(i+t);o.has(n)||(o.add(n),a.push([r+e,i+t]))}for(let e of Yo){if(o.has(e))continue;let[t,n]=e.split(`,`);a.push([+t,+n])}let s=0;e(s);for(let t=0;t<a.length;){let n=performance.now();for(;t<a.length&&performance.now()-n<12;){let[e,n]=a[t];Xo(e,n),t++,s++}e(s),await new Promise(e=>requestAnimationFrame(e))}return s}function xs(){let e=Y.position.x,t=Y.position.z,n=Math.floor(e/Z),r=Math.floor(t/Z),i=new Set,a=0;for(let e=-uo;e<=lo;e++)for(let t=-fo;t<=fo;t++){let o=n+e+`,`+(r+t);i.has(o)||(i.add(o),a++)}for(let e of Yo)i.has(e)||(i.add(e),a++);return a}var Ss=Ct.size,Cs=nn.size,ws=nn.segments,Ts=nn.canvasSize,Es=nn.loadRadius,Ds=nn.unloadRadius,Q={lodWorker:null,farGroundMat:null,farTileSeg:Ct.segments,farHighMode:!1,farTiles:new Map,pendingFarTiles:new Set,overlayChunks:new Map,pendingOverlays:new Set,lastOverlayOpacity:-1,lastFarOpacity:-1,lastShowFineChunks:null};function Os(){return Q.farHighMode?{fwd:Ct.loadFwdHigh,back:Ct.loadBackHigh,side:Ct.loadSideHigh}:{fwd:Ct.loadFwd,back:Ct.loadBack,side:Ct.loadSide}}function ks(){let e=Ct.unloadMargin,t=Os();return{fwd:t.fwd+e,back:t.back+e,side:t.side+e}}function As(e){let t=Ct,n=Q.farHighMode;return!Q.farHighMode&&e>t.altitudeHigh?n=!0:Q.farHighMode&&e<t.altitudeLow&&(n=!1),n!==Q.farHighMode&&(Q.farHighMode=n,Q.farTileSeg=Q.farHighMode?t.segmentsHigh:t.segments,!0)}function js(e,t,n,r,i){let a=Q.farTiles.get(e);a&&(X.remove(a.mesh),a.geo.dispose());let o=new Kt(r,Q.farGroundMat);o.position.set(t*Ss+Ss/2,0,n*Ss+Ss/2),o.receiveShadow=!1,o.visible=q.fade>.005,X.add(o),Q.farTiles.set(e,{mesh:o,geo:r,seg:i})}function Ms(e){Q.pendingFarTiles.delete(e);let t=Q.farTiles.get(e);t&&(X.remove(t.mesh),t.geo.dispose(),Q.farTiles.delete(e))}function Ns(e,t){let n=Math.floor(e/Ss),r=Math.floor(t/Ss),i=Os(),a=ks(),o=[];for(let e of Q.farTiles.keys()){let[t,i]=e.split(`,`),s=+t,c=+i;(s-n>a.fwd||n-s>a.back||Math.abs(c-r)>a.side)&&o.push(e)}for(let e of o)Ms(e);for(let e of Q.pendingFarTiles){let[t,i]=e.split(`,`),o=+t,s=+i;(o-n>a.fwd||n-o>a.back||Math.abs(s-r)>a.side)&&Q.pendingFarTiles.delete(e)}let s=[];for(let e=-i.back;e<=i.fwd;e++)for(let t=-i.side;t<=i.side;t++){let i=n+e,a=r+t,o=i+`,`+a,c=Q.farTiles.get(o),l=Q.pendingFarTiles.has(o);c&&c.seg<Q.farTileSeg?l||s.push({fx:i,fz:a}):!c&&!l&&s.push({fx:i,fz:a})}let c=Ct.perFrame,l=Math.min(s.length,c);for(let e=0;e<l;e++){let{fx:t,fz:n}=s[e],r=t+`,`+n;Q.pendingFarTiles.add(r),Q.lodWorker.postMessage({type:`far`,fx:t,fz:n,seg:Q.farTileSeg})}}function Ps(e){let{fx:t,fz:n,seg:r,posArr:i,uvArr:a,nrmArr:o,colArr:s}=e,c=t+`,`+n;if(!Q.pendingFarTiles.has(c))return;if(Q.pendingFarTiles.delete(c),r<Q.farTileSeg){Q.pendingFarTiles.add(c),Q.lodWorker.postMessage({type:`far`,fx:t,fz:n,seg:Q.farTileSeg});return}let l=new ue(Ss,Ss,r,r);l.rotateX(-Math.PI/2),l.setAttribute(`position`,new g(i,3)),l.setAttribute(`uv`,new g(a,2)),l.setAttribute(`normal`,new g(o,3)),l.setAttribute(`color`,new g(s,3)),js(c,t,n,l,r)}function Fs(){let e=1-kt(d.groundFadeStart,d.groundFadeEnd,K.pos.y);return Q.farHighMode?0:q.fade*e}function Is(e,t,n,r,i){let a=Q.overlayChunks.get(e);a&&(X.remove(a.mesh),a.geo.dispose(),a.tex.dispose(),a.mat.dispose());let o=new ht(i);o.colorSpace=he,o.minFilter=Ht,o.magFilter=Ht,o.generateMipmaps=!1,o.anisotropy=8;let s=new rn({map:o,transparent:!0,depthWrite:!1,toneMapped:nn.toneMapped,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});io(s);let c=new Kt(r,s);c.position.set(t*Cs+Cs/2,0,n*Cs+Cs/2),c.renderOrder=2;let l=Fs();c.material.opacity=l,c.visible=l>.005,Q.lastOverlayOpacity=NaN,X.add(c),Q.overlayChunks.set(e,{mesh:c,mat:s,tex:o,geo:r})}function Ls(e){let t=Q.overlayChunks.get(e);t&&(X.remove(t.mesh),t.geo.dispose(),t.tex.dispose(),t.mat.dispose(),Q.overlayChunks.delete(e))}function Rs(e,t){if(!nn.enabled||Q.farHighMode){for(let e of[...Q.overlayChunks.keys()])Ls(e);Q.pendingOverlays.clear();return}let n=Math.floor(e/Cs),r=Math.floor(t/Cs);for(let e=-Es;e<=Es;e++)for(let t=-Es;t<=Es;t++){let i=n+e,a=r+t,o=i+`,`+a;!Q.overlayChunks.has(o)&&!Q.pendingOverlays.has(o)&&(Q.pendingOverlays.add(o),Q.lodWorker.postMessage({type:`overlay`,ox:i,oz:a,canvasSize:Ts}))}for(let e of Q.pendingOverlays){let[t,i]=e.split(`,`);(Math.abs(+t-n)>Ds||Math.abs(+i-r)>Ds)&&Q.pendingOverlays.delete(e)}let i=[];for(let e of Q.overlayChunks.keys()){let[t,a]=e.split(`,`);(Math.abs(+t-n)>Ds||Math.abs(+a-r)>Ds)&&i.push(e)}for(let e of i)Ls(e)}function zs(e){let{ox:t,oz:n,posArr:r,nrmArr:i,pix:a}=e,o=t+`,`+n;if(!Q.pendingOverlays.has(o)||(Q.pendingOverlays.delete(o),Q.farHighMode||!nn.enabled))return;let s=new ue(Cs,Cs,ws,ws);s.rotateX(-Math.PI/2),s.setAttribute(`position`,new g(r,3)),s.setAttribute(`normal`,new g(i,3));let c=document.createElement(`canvas`);c.width=c.height=Ts;let l=c.getContext(`2d`);if(!l)throw Error(`overlay: 2d context unavailable`);let u=new ImageData(new Uint8ClampedArray(a),Ts,Ts);l.putImageData(u,0,0),Is(o,t,n,s,c)}var Bs=new zt;Bs.position.set(...m.position);var Vs=new De({color:m.colors.skin,roughness:.55}),Hs=new De({color:m.colors.dark,roughness:.8}),Us=new De({color:m.colors.accent,roughness:.4,metalness:.3});function Ws(e,t,n,r){let i=new Kt(new Oe(e,t,n),r);return i.castShadow=!0,i.receiveShadow=!0,i}var Gs=Ws(2,2.4,1.4,Vs);Gs.position.y=3.8,Bs.add(Gs);var Ks=Ws(1.1,.9,.15,Us);Ks.position.set(0,4,.75),Bs.add(Ks);var qs=Ws(1.25,1.2,1.2,Vs);qs.position.y=5.7,Bs.add(qs);for(let e of[.62,-.62]){let t=Ws(.3,.22,.1,Hs);t.position.set(.3,5.85,e),Bs.add(t)}var Js=Ws(.36,.1,.12,Hs);Js.position.set(.32,6.05,.62),Js.rotation.z=-.35,Bs.add(Js);var Ys=Js.clone();Ys.position.z=-.62,Ys.rotation.z=.35,Bs.add(Ys);var Xs=Ws(.55,2.1,.55,Vs);Xs.geometry.translate(0,-1.05,0),Xs.position.set(0,4.7,1.05),Bs.add(Xs);var Zs=Ws(.55,2.1,.55,Vs);Zs.geometry.translate(0,-1.05,0),Zs.position.set(0,4.7,-1.05),Bs.add(Zs);function Qs(){let e=new zt,t=Ws(.72,1.4,.72,Hs);t.position.y=-.7,e.add(t);let n=Ws(.62,1.3,.62,Hs);n.position.y=-2,e.add(n);let r=Ws(.85,.4,.95,Us);return r.position.set(.18,-2.75,0),e.add(r),e}var $s=Qs();$s.position.set(0,2.6,-.5),Bs.add($s);var ec=Qs();ec.position.set(0,2.6,.5),Bs.add(ec),X.add(Bs);var tc=new zt,nc=new De({color:A.colors.body,metalness:.55,roughness:.3}),rc=new De({color:A.colors.red,metalness:.3,roughness:.45}),ic=new De({color:A.colors.glass,metalness:.9,roughness:.15}),ac=new De({color:m.colors.dark,roughness:.8}),oc=new Kt(new oe(.36,.36,2.2,16),nc);oc.rotation.z=Math.PI/2,oc.castShadow=!0,tc.add(oc);var sc=new Kt(new de(.36,1,16),rc);sc.rotation.z=-Math.PI/2,sc.position.x=1.6,sc.castShadow=!0,tc.add(sc);var cc=new Kt(new oe(.17,.17,.06,12),ic);cc.rotation.x=Math.PI/2,cc.position.set(.5,.3,.33),tc.add(cc);var lc=new le;lc.moveTo(0,0),lc.lineTo(-1,0),lc.lineTo(-1,.55),lc.closePath();var uc=new ne(lc,{depth:.07,bevelEnabled:!1});uc.translate(0,0,-.035);for(let e of[1,-1]){let t=new Kt(uc,rc);t.position.set(-.35,.34*e,0),t.scale.y=e,t.castShadow=!0,tc.add(t)}var dc=new Kt(new oe(.36,.5,.5,14),ac);dc.rotation.z=Math.PI/2,dc.position.x=-1.25,tc.add(dc);var fc=new rn({color:A.flame.outer,transparent:!0,opacity:.95}),pc=new Kt(new de(.36,1.4,12),fc);pc.name=`rocketFlame`,pc.rotation.z=Math.PI/2,pc.position.x=-2.1,pc.castShadow=!1,tc.add(pc);var mc=new Kt(new de(.2,.9,10),new rn({color:A.flame.inner}));mc.name=`rocketFlameInner`,mc.rotation.z=Math.PI/2,mc.position.x=-1.85,mc.castShadow=!1,tc.add(mc);var hc=new me(A.exhaustLight,0,A.exhaustLightRange,A.exhaustLightDecay);hc.position.set(-2,0,0),tc.add(hc),X.add(tc);function gc(e,t){return e.getAttribute(t)}function _c(e,t,n,r){let i=t.y!==void 0,a=[];for(let r of e){let e=n(r);if(!e)continue;let o=e.x-t.x,s=e.z-t.z,c=i&&e.y!==void 0?e.y-t.y:0;a.push({obj:r,d2:o*o+c*c+s*s})}return a.sort((e,t)=>e.d2-t.d2),a.length>r&&(a.length=r),a}var vc=new zt;X.add(vc);var yc=[],bc=new De({color:7027220,roughness:.7,metalness:.1}),xc=new De({color:16766814,roughness:.35,metalness:.8,emissive:16757504,emissiveIntensity:.6}),Sc=[];if(z.enabled){let e=z.lights;for(let t=0;t<e.count;t++){let t=new me(z.glowColor,0,e.range,e.decay);X.add(t),Sc.push(t)}}var Cc=new Oe(2.4,1.4,1.6),wc=new Oe(2.5,1.5,.12),Tc=new Oe(2.5,.5,1.7),Ec=new Oe(.4,.5,.15),Dc=z.types;function Oc(e){return Dc[e]??{}}var kc=null,Ac=null;function jc(){let e=yc.length;if(e===0)return;let t=new p,n=new Float32Array(e*3),r=new Float32Array(e*3),i=new Float32Array(e),a=new Float32Array(e);for(let t=0;t<e;t++)i[t]=t*1.37%6.28;t.setAttribute(`position`,new g(n,3)),t.setAttribute(`aColor`,new g(r,3)),t.setAttribute(`aPhase`,new g(i,1)),t.setAttribute(`aOpened`,new g(a,1));let o=z.glow;Ac=new ft({uniforms:{uSize:{value:o.size},uOpacity:{value:o.opacity},uFalloff:{value:o.falloff},uPixelRatio:{value:Math.min(devicePixelRatio,Qt.pixelRatioCap)},uTime:{value:0},uPulseSpeed:{value:o.pulseSpeed},uPulseAmount:{value:o.pulseAmount},fogNear:{value:0},fogFar:{value:1}},vertexShader:`
      attribute vec3  aColor;
      attribute float aPhase;
      attribute float aOpened;
      uniform float uSize;
      uniform float uPixelRatio;
      uniform float uTime;
      uniform float uPulseSpeed;
      uniform float uPulseAmount;
      varying vec3  vColor;
      varying float vAlpha;
      varying float vFogDepth;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aOpened > 0.5 ? 0.0
          : uSize * uPixelRatio * (300.0 / max(1.0, -mv.z));
        vFogDepth = -mv.z;
        vAlpha = (aOpened > 0.5) ? 0.0 : 1.0;
        vAlpha *= 1.0 + uPulseAmount * sin(uTime * uPulseSpeed + aPhase);
        vColor = aColor;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      uniform float uFalloff;
      uniform float fogNear;
      uniform float fogFar;
      varying vec3  vColor;
      varying float vAlpha;
      varying float vFogDepth;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float falloff = 1.0 - smoothstep(0.0, 0.5, d);
        falloff = pow(falloff, uFalloff);
        float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
        float a = uOpacity * falloff * vAlpha * (1.0 - fogFactor);
        if (a < 0.005) discard;
        gl_FragColor = vec4(vColor, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,toneMapped:!1}),kc=new be(t,Ac),kc.frustumCulled=!1,kc.renderOrder=3,X.add(kc)}function Mc(){if(!kc)return;let e=gc(kc.geometry,`position`),t=gc(kc.geometry,`aColor`),n=gc(kc.geometry,`aOpened`),r=z.glow.yOffset??3,i=new V;for(let a=0;a<yc.length;a++){let o=yc[a];e.array[a*3+0]=o.x,e.array[a*3+1]=Te(o.x,o.z)+r,e.array[a*3+2]=o.z;let s=Oc(o.type);i.setHex(s.glowColor??z.glowColor),t.array[a*3+0]=i.r,t.array[a*3+1]=i.g,t.array[a*3+2]=i.b,n.array[a]=+!!o.opened}e.needsUpdate=!0,t.needsUpdate=!0,n.needsUpdate=!0}function Nc(){if(!Ac)return;let e=X.fog;Ac.uniforms.uTime.value=Lc,Ac.uniforms.fogNear.value=e.near,Ac.uniforms.fogFar.value=e.far}function Pc(e){if(!kc)return;let t=yc.indexOf(e);if(t<0)return;let n=gc(kc.geometry,`aOpened`);n.array[t]=1,n.needsUpdate=!0}function Fc(e){let t=new rn({color:16777215,transparent:!0,opacity:1,blending:2,depthWrite:!1,side:2,fog:!0,toneMapped:!1}),n={uTime:{value:0},uTwist:{value:e.twist},uArms:{value:e.arms},uSharpness:{value:e.sharpness},uNoiseAmount:{value:e.noiseAmount},uNoiseScale:{value:e.noiseScale},uColorInner:{value:new V(e.colorInner)},uColorOuter:{value:new V(e.colorOuter)},uOpacity:{value:1},uPulseSpeed:{value:e.pulseSpeed},uPulseAmount:{value:e.pulseAmount}};return t.userData.spiralUniforms=n,io(t,e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`void main() {`,`varying vec2 vSpiralUv;
void main() {
  vSpiralUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform float uTwist;
uniform float uArms;
uniform float uSharpness;
uniform float uNoiseAmount;
uniform float uNoiseScale;
uniform vec3  uColorInner;
uniform vec3  uColorOuter;
uniform float uOpacity;
uniform float uPulseSpeed;
uniform float uPulseAmount;
varying vec2 vSpiralUv;`),e.fragmentShader=e.fragmentShader.replace(`#include <fog_fragment>`,`
      float su = vSpiralUv.x;
      float sv = vSpiralUv.y;
      float sAngle = su * 6.28318 * uArms;
      float sTwist = sv * uTwist + uTime;
      float sSin = sin(sAngle + sTwist);
      float spiral = pow(max(0.0, 0.5 + 0.5 * sSin), uSharpness);

      if (uNoiseAmount > 0.001) {
        vec2 np = vSpiralUv * uNoiseScale;
        float n1 = sin(np.x * 3.1 + uTime * 1.5);
        float n2 = cos(np.y * 2.7 + uTime * 0.9);
        float noise = n1 * n2 * 0.5 + 0.5;
        spiral *= mix(1.0 - uNoiseAmount, 1.0, noise);
      }

      float vfade = smoothstep(0.0, 0.08, sv) * (1.0 - smoothstep(0.6, 1.0, sv));
      float pulse = 1.0 + uPulseAmount * sin(uTime * uPulseSpeed);

      float alpha = spiral * vfade * uOpacity * pulse;
      vec3 col = mix(uColorOuter, uColorInner, spiral);

      gl_FragColor = vec4(col, alpha);
      #include <fog_fragment>
      `)}),t}var Ic=[],Lc=0;function Rc(){let e=z.beam,t=z.beamHeight,n,r,i=!1,a=null,o=!1,s=1;if(e.style===`cylinder`){let i=e.cylinder;n=new oe(z.beamRadius,z.beamRadius*i.radiusTopRatio,t,i.radialSegments,1,!0),n.translate(0,t/2,0),r=new rn({color:z.beamColor,transparent:!0,opacity:z.beamOpacity,blending:2,depthWrite:!1,fog:!0,side:2,toneMapped:!1}),io(r)}else{let c=e.spiral,l=e.quality===`simple`?{...c,...c.simple}:c;n=new oe(l.radiusTop,l.radiusBottom,t,l.radialSegments,l.heightSegments,!0),n.translate(0,t/2,0),r=Fc(l),i=!0,a=r.userData.spiralUniforms,o=!!l.animate,s=l.rotationSpeed}let c=new Kt(n,r);return c.renderOrder=5,c.visible=!1,c.frustumCulled=!1,X.add(c),{mesh:c,mat:r,isSpiral:i,uniforms:a,animate:o,rotationSpeed:s}}function zc(){for(let e=0;e<z.beam.poolSize;e++)Ic.push(Rc())}function Bc(e,t){let n=new zt,r=new Kt(Cc,bc);r.position.y=.7,r.castShadow=!0,n.add(r);for(let e of[-.55,.55]){let t=new Kt(wc,xc);t.position.set(0,.7,e),n.add(t)}let i=new Kt(Tc,bc);i.position.set(0,1.6,0),i.castShadow=!0,n.add(i);let a=new Kt(Ec,xc);return a.position.set(0,.85,.85),n.add(a),n.position.set(e,Te(e,t),t),{group:n}}function Vc(e){let t=ot.flightYaw||0,n=(Ve(e|0,32538)&65535)/65535;return e*Math.tan(t)+n*2*z.zOffset-z.zOffset}var Hc=z.specialChests;function Uc(){zc();for(let e of z.allPositions){let t=Vc(e),n=Hc[e]===`forsage`?`forsage`:`random`,r=G.openedChests.has(e),{group:i}=Bc(e,t);i.visible=!r,vc.add(i),yc.push({x:e,z:t,group:i,opened:r,type:n})}jc(),Mc()}function Wc(){for(let e of yc)e.opened=G.openedChests.has(e.x),e.group.visible=!e.opened;if(kc){let e=gc(kc.geometry,`aOpened`);for(let t=0;t<yc.length;t++)e.array[t]=+!!yc[t].opened;e.needsUpdate=!0}}function Gc(e,t,n){Lc+=e,Kc(t,n),qc(e,t,n),Nc()}function Kc(e,t){let n=z.beam,r=_c(yc,{x:e,z:t},e=>e.opened?null:e,Ic.length);for(let e=0;e<Ic.length;e++){let t=Ic[e],i=r[e];if(!i){t.mesh.visible=!1;continue}let a=i.obj,o=Math.sqrt(i.d2);if(o>n.maxDistance){t.mesh.visible=!1;continue}let s=Te(a.x,a.z);t.mesh.position.set(a.x,s,a.z),t.mesh.visible=!0;let c=1;if(o>n.fadeStart){let e=Math.max(1,n.fadeEnd-n.fadeStart);c=Math.max(0,1-(o-n.fadeStart)/e)}let l=Oc(a.type),u=(l.beamOpacity??z.beamOpacity)*c;if(t.isSpiral&&t.uniforms){let e=n.spiral,r=a.type===`forsage`&&e.forsage,i=r?e.forsage.colorInner:e.colorInner,o=r?e.forsage.colorOuter:e.colorOuter;t.uniforms.uColorInner.value.setHex(i),t.uniforms.uColorOuter.value.setHex(o),t.uniforms.uOpacity.value=u,t.animate?t.uniforms.uTime.value=Lc*t.rotationSpeed:t.uniforms.uTime.value=0}else{let e=l.beamColor??z.beamColor;t.mat.color.setHex(e);let n=.75+Math.sin(Lc*2)*.25;t.mat.opacity=u*n}}}function qc(e,t,n){if(!z.enabled)return;let r=z.lights,i=_c(yc,{x:t,z:n},e=>e.opened?null:e,Sc.length),a=1-Math.exp(-r.fadeSpeed*e);for(let e=0;e<Sc.length;e++){let t=Sc[e],n=i[e];if(!n){t.intensity+=(0-t.intensity)*a;continue}let o=n.obj,s=Oc(o.type),c=s.glowColor??z.glowColor,l=s.lightIntensity??r.intensity,u=s.lightRange??r.range,d=s.lightHeight??r.height;t.color.getHex()!==c&&t.color.setHex(c),t.distance=u;let f=Te(o.x,o.z);t.position.set(o.x,f+d,o.z),t.intensity+=(l-t.intensity)*a}}var Jc=new zt;X.add(Jc);var Yc=[],Xc=new _e(i.size,0),Zc=new De({color:i.colors.core,emissive:i.colors.emissive,emissiveIntensity:1.5,roughness:.2,metalness:.6,flatShading:!0}),Qc=null,$c=null;function el(){let e=i.xPositions.length,t=new p,n=new Float32Array(e*3),r=new Float32Array(e),a=new Float32Array(e);for(let t=0;t<e;t++)r[t]=t*1.37%6.28;t.setAttribute(`position`,new g(n,3)),t.setAttribute(`aPhase`,new g(r,1)),t.setAttribute(`aCollected`,new g(a,1)),$c=new ft({uniforms:{uColor:{value:new V(i.glow.color)},uSize:{value:i.glow.size},uOpacity:{value:i.glow.opacity},uFalloff:{value:i.glow.falloff},uPixelRatio:{value:Math.min(devicePixelRatio,Qt.pixelRatioCap)},uTime:{value:0},uBobHeight:{value:i.bobHeight},uBobSpeed:{value:i.bobSpeed},uPulseSpeed:{value:i.pulseSpeed},fogColor:{value:new V},fogNear:{value:0},fogFar:{value:1}},vertexShader:`
      attribute float aPhase;
      attribute float aCollected;
      uniform float uSize;
      uniform float uPixelRatio;
      uniform float uTime;
      uniform float uBobHeight;
      uniform float uBobSpeed;
      uniform float uPulseSpeed;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vPulse;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * uBobSpeed + aPhase) * uBobHeight;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aCollected > 0.5 ? 0.0
          : uSize * uPixelRatio * (300.0 / max(1.0, -mv.z));
        vFogDepth = -mv.z;
        vAlpha = aCollected > 0.5 ? 0.0 : 1.0;
        vPulse = 0.85 + sin(uTime * uPulseSpeed + aPhase) * 0.15;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uFalloff;
      uniform float fogNear;
      uniform float fogFar;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vPulse;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float falloff = 1.0 - smoothstep(0.0, 0.5, d);
        falloff = pow(falloff, uFalloff);
        float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
        float a = uOpacity * falloff * vPulse * vAlpha * (1.0 - fogFactor);
        if (a < 0.005) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,toneMapped:!1}),Qc=new be(t,$c),Qc.frustumCulled=!1,Qc.renderOrder=3,X.add(Qc)}var tl=[];function nl(){let e=i.lights;for(let t=0;t<e.count;t++){let t=new me(e.color,0,e.range,1);X.add(t),tl.push(t)}}function rl(e){return e+((Ve(e,39967)&65535)/65535*2-1)*i.xPosDif}function il(e){let t=ot.flightYaw||0,n=(Ve(e,20013)&65535)/65535;return e*Math.tan(t)+n*2*i.zOffset-i.zOffset}function al(e){return((Ve(e,11150)&65535)/65535*2-1)*i.yPosDif}function ol(e,t,n){let r=new zt,i=new Kt(Xc,Zc);return r.add(i),r.position.set(e,t,n),{group:r,mesh:i}}function sl(){el(),nl();let e=gc(Qc.geometry,`position`),t=gc(Qc.geometry,`aCollected`),n=e.array,r=t.array,a=0;for(let e of i.xPositions){let t=rl(e),o=il(e),s=Te(t,o)+i.yOffset+al(e),c=G.collectedGems.has(e),{group:l,mesh:u}=ol(t,s,o);l.visible=!c,Jc.add(l),Yc.push({id:e,index:a,x:t,z:o,baseY:s,group:l,mesh:u,collected:c}),n[a*3]=t,n[a*3+1]=s,n[a*3+2]=o,r[a]=+!!c,a++}e.needsUpdate=!0,t.needsUpdate=!0}function cl(){if(!Qc)return;let e=gc(Qc.geometry,`aCollected`),t=e.array;for(let e of Yc)e.collected=G.collectedGems.has(e.id),e.group.visible=!e.collected,t[e.index]=+!!e.collected;e.needsUpdate=!0}function ll(e){if(!Qc)return;let t=gc(Qc.geometry,`aCollected`);t.array[e.index]=1,t.needsUpdate=!0}function ul(e){let t=performance.now()*.001,n=i;for(let e of Yc){if(e.collected)continue;e.mesh.rotation.y=t*n.rotateSpeed,e.mesh.rotation.x=t*n.rotateSpeed*.3;let r=Math.sin(t*n.bobSpeed+e.id*.7)*n.bobHeight;e.group.position.y=e.baseY+r}if($c){let e=X.fog;$c.uniforms.uTime.value=t,$c.uniforms.fogColor.value.copy(e.color),$c.uniforms.fogNear.value=e.near,$c.uniforms.fogFar.value=e.far}tl.length>0&&dl(e)}function dl(e){let t=i.lights,n=K.pos.x,r=K.pos.y,a=K.pos.z,o=_c(Yc,{x:n,y:r,z:a},e=>e.collected?null:{x:e.x,y:e.baseY,z:e.z},tl.length),s=1-Math.exp(-t.fadeSpeed*e);for(let e=0;e<tl.length;e++){let n=tl[e],r=o[e];if(!r){n.intensity+=(0-n.intensity)*s;continue}let i=r.obj;n.position.set(i.x,i.baseY,i.z),n.intensity+=(t.intensity-n.intensity)*s}}var fl=null,pl=null;function ml(){let e=A.ghost,t=tc.clone(!0);for(let e=t.children.length-1;e>=0;e--)t.children[e]instanceof xt&&t.remove(t.children[e]);let n=new rn({color:e.color,transparent:!0,opacity:e.opacity,depthWrite:!1,fog:!1,toneMapped:!1}),r=new rn({color:e.flameColor,transparent:!0,opacity:e.flameOpacity,depthWrite:!1,fog:!1,toneMapped:!1,blending:2}),i=new rn({color:e.flameInnerColor,transparent:!0,opacity:e.flameInnerOpacity,depthWrite:!1,fog:!1,toneMapped:!1,blending:2}),a=t.getObjectByName(`rocketFlame`),o=t.getObjectByName(`rocketFlameInner`);return fl=a instanceof Kt?a:null,pl=o instanceof Kt?o:null,t.traverse(e=>{e instanceof Kt&&(e.castShadow=!1,e.receiveShadow=!1,e.material=e===fl?r:e===pl?i:n)}),t.renderOrder=3,t.visible=!1,t.rotation.y=-ot.flightYaw,t}var hl=ml();X.add(hl);var gl=6;function _l(e,t){if(!e||e.length<12){hl.visible=!1;return}let n=e.length/gl;if(t<e[0]){hl.visible=!1;return}let r=0,i=n-1;for(;r<i;){let n=r+i+1>>1;e[n*gl]<=t?r=n:i=n-1}if(r>=n-1){hl.visible=!1;return}let a=r*gl,o=(r+1)*gl,s=e[a],c=e[o],l=c>s?(t-s)/(c-s):0;hl.visible=!0,hl.position.set(rt(e[a+1],e[o+1],l),rt(e[a+2],e[o+2],l),rt(e[a+3],e[o+3],l)),hl.rotation.z=rt(e[a+4],e[o+4],l);let u=e[a+5],d=u+(e[o+5]-u)*l>.5;fl&&(fl.visible=d),pl&&(pl.visible=d)}function vl(){z.enabled&&Uc(),i.enabled&&sl()}function yl(e,t,n){let r=0;for(let i of e.values())if(i.mesh.visible!==t&&(i.mesh.visible=t,++r>=n))break}function bl(e,t){for(let n of e.values())if(n.mesh.visible!==t)return!1;return!0}function xl(){return q.fade>.5?{fwd:At.loadForwardFar,back:At.loadBackFar,side:At.loadSideFar}:{fwd:At.loadForward,back:At.loadBack,side:At.loadSide}}function Sl(e){let t=Y.position.x,n=Y.position.z,r=At.size,i=Math.floor(t/r),a=Math.floor(n/r),o=xl(),s=At.unloadMargin,c=0,l=!1;for(let[t,n]of Jo){if(Yo.has(t))continue;let r=n.cx-i,u=n.cz-a;if(r<-(o.back+s)||r>o.fwd+s||Math.abs(u)>o.side+s){if(c<e)Zo(t),c++;else{l=!0;break}}}return l}var Cl=()=>`ready`;function wl(e){Cl=e}var Tl=()=>Cl();function El(){ro.center.value.set(K.pos.x,K.pos.z)}function Dl(e){let t=Gt.changeAltitude,n=Gt.changeBack,r=Gt.sampleRadius,i=Gt.sampleCount,a=K.pos,o=Tl()===`fly`,s=a.y-Te(a.x,a.z);for(let e=0;e<i;e++){let t=e/i*Math.PI*2,n=a.x+Math.cos(t)*r,o=a.z+Math.sin(t)*r,c=a.y-Te(n,o);c<s&&(s=c)}if(s<0&&(s=0),!q.altInit)q.altSmooth=s,q.fogAlt=s,q.fogDelay=0,q.altInit=!0;else{let t=1-Math.exp(-4*e);q.altSmooth+=(s-q.altSmooth)*t;let n=s-q.fogAlt;if(n>=0){q.fogDelay=ct.altDescendDelay;let t=1-Math.exp(-ct.altRiseSpeed*e);q.fogAlt+=n*t}else if(q.fogDelay>0)q.fogDelay-=e;else{let t=1-Math.exp(-ct.altFallSpeed*e);q.fogAlt+=n*t}}q.in2D?(!o||q.altSmooth<n)&&(q.in2D=!1):o&&q.altSmooth>t&&(q.in2D=!0);let c=+!!q.in2D,l=q.in2D?Gt.fadeIn:Gt.fadeOut;q.fade+=(c-q.fade)*Math.min(1,e*l),q.fade<.005&&(q.fade=0),q.fade>.995&&(q.fade=1);let u=1-kt(d.groundFadeStart,d.groundFadeEnd,K.pos.y),f=q.fade*u,p=Fs(),h=Gt.reveal;Q.farGroundMat&&(Q.farGroundMat.opacity=f);let g=f>.005;yl(Q.farTiles,g,h.farBatch);let _=bl(Q.farTiles,g),v=!0;(!q.in2D||_)&&(v=!Sl(h.unloadBatch));for(let e of Q.overlayChunks.values())e.mat.opacity=p;let y=p>.005;(!y||_&&v)&&yl(Q.overlayChunks,y,h.overlayBatch),Q.lastFarOpacity=f,Q.lastOverlayOpacity=p;let b=q.fade<.95;if(b!==Q.lastShowFineChunks){for(let[e,t]of Jo)Yo.has(e)||(t.mesh.visible=b);Q.lastShowFineChunks=b}let x=q.fade<.15,S=K.pos.x>m.hideDistance,C=x&&!S;if(x!==q.showing3D||Bs.visible!==C){for(let[e,t]of Jo)if(!Yo.has(e))for(let e of t.props)e.visible=x;Bs.visible=C,q.showing3D=x}let w=ct.near3D,T=ct.far3D,E=ct.near2D,D=ct.far2D,O=w,ee=T;if(ct.dynamicByAltitude){let e=ct,t=Math.min(1,Math.max(0,q.fogAlt/e.altRef3D));O=e.nearGround+(w-e.nearGround)*t,ee=e.farGround+(T-e.farGround)*t}let te=E,ne=D;if(ct.dynamicByAltitude){let e=ct,t=Math.max(1,e.altRef2D-Gt.changeAltitude),n=Math.min(1,Math.max(0,(q.altSmooth-Gt.changeAltitude)/t));te=e.nearGround2D+(E-e.nearGround2D)*n,ne=e.farGround2D+(D-e.farGround2D)*n}let re=X.fog;re.near=O+(te-O)*q.fade,re.far=ee+(ne-ee)*q.fade}function Ol(e){return new Worker(new URL(`lodWorker-DcDLGyCQ.js`,import.meta.url).href,{name:e?.name})}function kl(){let e=new De({map:Ya,vertexColors:!0,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});Q.farGroundMat=e,io(e);let t=new Ol;Q.lodWorker=t,t.onmessage=e=>{let t=e.data;t.type===`far`?Ps(t):t.type===`overlay`&&zs(t)},t.onerror=e=>console.error(`[lodWorker] error:`,e),t.postMessage({type:`init`,density:R.density})}var Al={x:NaN,z:NaN},jl={x:NaN,z:NaN},Ml=0,Nl=.4;function Pl(e){let t=Y.position.x,n=Y.position.z;if(El(),Dl(e),K.pos.y>=d.groundFadeEnd||Math.hypot(t-K.pos.x,n-K.pos.z)>500){Al.x=NaN,Al.z=NaN,jl.x=NaN,jl.z=NaN;return}let r=As(q.altSmooth),i=Math.floor(t/Ss),a=Math.floor(n/Ss);Ml+=e;let o=Ml>=Nl;o&&(Ml=0),(r||i!==Al.x||a!==Al.z||o)&&(Ns(t,n),Al.x=i,Al.z=a);let s=Math.floor(t/Cs),c=Math.floor(n/Cs);(s!==jl.x||c!==jl.z)&&(Rs(t,n),jl.x=s,jl.z=c)}async function Fl(e){Ns(Y.position.x,Y.position.z);let t=0;for(e(0);Q.pendingFarTiles.size>0||Q.farTiles.size===0;)await new Promise(e=>setTimeout(e,50)),t=Q.farTiles.size,e(t);return t}function Il(){return Ns(Y.position.x,Y.position.z),Q.pendingFarTiles.size+Q.farTiles.size}var Ll=_,$={unlocked:new Set,stepUnlocked:new Set,progress:{},startTimes:{}};function Rl(e){return _.find(t=>t.key===e)}var zl=[];function Bl(e){zl.push(e)}function Vl(e,t=null,n=-1){for(let r of zl)try{r(e,t,n)}catch(e){console.warn(`ach listener failed:`,e)}}function Hl(e){let t=Rl(e);t&&t.timeLimit&&(Object.hasOwn($.startTimes,e)||($.startTimes[e]=Ha.gameTime))}function Ul(e){let t=Rl(e);return!t||!t.timeLimit||$.unlocked.has(e)||!Object.hasOwn($.startTimes,e)?!1:Ha.gameTime-($.startTimes[e]??0)>=t.timeLimit/1e3}function Wl(e){let t=Rl(e);if(!t||!t.timeLimit)return 0;if(!Object.hasOwn($.startTimes,e))return t.timeLimit/1e3;let n=Ha.gameTime-($.startTimes[e]??0);return Math.max(0,t.timeLimit/1e3-n)}function Gl(e){if($.unlocked.has(e))return!1;if(e===`communist`)return G.hasBoughtCard;if(e===`hundred`){for(let e of Ll)if(e.key!==`hundred`&&Gl(e.key))return!0;return!1}return!!Rl(e)?.timeLimit&&Ul(e)}function Kl(e){if(!Gl(e))return null;if(e===`communist`)return`Куплена карточка`;if(e===`sprinter`)return`Время истекло`;if(e===`hundred`){for(let e of Ll)if(e.key!==`hundred`&&Gl(e.key))return`Провалено: ${e.name}`;return`Провалено`}return`Провалено`}function ql(e){if($.unlocked.has(e))return;$.unlocked.add(e);let t=Rl(e);t&&Vl(t,null,-1),e!==`hundred`&&Yl()}function Jl(e,t){let n=`${e.key}:${t}`;$.stepUnlocked.has(n)||($.stepUnlocked.add(n),Vl(e,e.steps[t],t),e.steps.every((t,n)=>$.stepUnlocked.has(`${e.key}:${n}`))&&!$.unlocked.has(e.key)&&($.unlocked.add(e.key),e.key!==`hundred`&&Yl()))}function Yl(){Ll.filter(e=>e.key!==`hundred`).every(e=>$.unlocked.has(e.key))&&ql(`hundred`)}function Xl(e,t){t>($.progress[e]||0)&&($.progress[e]=t)}function Zl(e,t){let n=Rl(e);if(!n||!n.steps)return;let r=n;for(let e=0;e<r.steps.length;e++)t>=r.steps[e].target&&Jl(r,e)}function Ql(){Hl(`sprinter`),ql(`first_launch`)}function $l({dist:e,altitude:t,speed:n,nearestChestDist:r}){let i=($.progress.first_steps||0)+Math.max(0,e);if(Xl(`first_steps`,i),Zl(`first_steps`,i),e>100){let e=($.progress.traveler||0)+1;if(Xl(`traveler`,e),Zl(`traveler`,e),!$.unlocked.has(`citizen`)){let e=Rl(`citizen`).target,t=Math.min(e,($.progress.citizen||0)+1);Xl(`citizen`,t),t>=e&&ql(`citizen`)}}t>Rl(`climber`).const_target&&ql(`climber`),e>=Rl(`orbit`).const_target&&ql(`orbit`),e>=Rl(`intercontinental`).const_target&&ql(`intercontinental`),n>0&&n<Rl(`soft_landing`).const_target&&ql(`soft_landing`),r!==null&&r<=Rl(`sniper`).const_target&&ql(`sniper`)}function eu(){$.unlocked.has(`citizen`)||($.progress.citizen=0),pe.every(e=>G.upgrades[e.key]>=(e.maxLevel??1/0))&&ql(`maximalist`)}function tu(e){let t=Rl(`collector`).target,n=Math.min(t,e);Xl(`collector`,n),n>=t&&ql(`collector`),!$.unlocked.has(`sprinter`)&&!Ul(`sprinter`)&&(Xl(`sprinter`,n),n>=Rl(`sprinter`).target&&ql(`sprinter`)),!$.unlocked.has(`communist`)&&!G.hasBoughtCard&&e>=Rl(`communist`).const_target&&ql(`communist`)}function nu(){let e={};for(let[t,n]of Object.entries($.startTimes))typeof n==`number`&&(e[t]=Ha.gameTime-n);let t={};for(let[e,n]of Object.entries($.progress))typeof n==`number`&&(t[e]=n);return{unlocked:[...$.unlocked],stepUnlocked:[...$.stepUnlocked],progress:t,startElapsed:e}}function ru(e){if(!e||typeof e!=`object`)return;let t=e,n=Array.isArray(t.stepUnlocked);if(Array.isArray(t.unlocked))for(let e of t.unlocked){if(typeof e!=`string`)continue;let t=Rl(e);if(t&&($.unlocked.add(t.key),t.steps&&!n))for(let e=0;e<t.steps.length;e++)$.stepUnlocked.add(`${t.key}:${e}`)}if(n)for(let e of t.stepUnlocked){if(typeof e!=`string`)continue;let t=e.split(`:`),n=t[0],r=+t[1],i=Rl(n);i&&i.steps&&i.steps[r]&&$.stepUnlocked.add(e)}if(t.progress&&typeof t.progress==`object`)for(let[e,n]of Object.entries(t.progress)){if(typeof n!=`number`||!isFinite(n)||n<0)continue;let t=Rl(e);t&&($.progress[t.key]=n)}if(typeof t.sprintStart==`number`&&isFinite(t.sprintStart)&&t.sprintStart>0){let e=Rl(`sprinter`);if(e&&e.timeLimit){let n=Math.min(e.timeLimit/1e3,Math.max(0,(Date.now()-t.sprintStart)/1e3));$.startTimes.sprinter=Ha.gameTime-n}}if(t.startTimes&&typeof t.startTimes==`object`)for(let[e,n]of Object.entries(t.startTimes)){if(typeof n!=`number`||!isFinite(n)||n<=0)continue;let t=Rl(e);if(!t||!t.timeLimit)continue;let r=Math.min(t.timeLimit/1e3,Math.max(0,(Date.now()-n)/1e3));$.startTimes[t.key]=Ha.gameTime-r}if(t.startElapsed&&typeof t.startElapsed==`object`)for(let[e,n]of Object.entries(t.startElapsed)){if(typeof n!=`number`||!isFinite(n)||n<0)continue;let t=Rl(e);t&&t.timeLimit&&($.startTimes[t.key]=Ha.gameTime-n)}}var iu=Re,au=new Map,ou=null,su=null,cu=!1;function lu(){if(iu.enabled&&!cu){cu=!0;try{let e=window.AudioContext??window.webkitAudioContext;if(!e)throw Error(`AudioContext не поддерживается`);ou=new e,su=ou.createGain(),su.gain.value=mu(),su.connect(ou.destination)}catch(e){console.warn(`sounds: init failed:`,e),ou=null;return}uu(),du()}}async function uu(){if(!ou)return;let e=ou;await Promise.all(Object.keys(iu.list).map(async t=>{let n=iu.list[t];if(n&&n.src)try{let r=await fetch(n.src);if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.arrayBuffer(),a=await e.decodeAudioData(i);au.set(t,a)}catch(e){console.warn(`sounds: не удалось загрузить "${t}" (${n.src}):`,e)}}))}function du(){let e=()=>{ou&&ou.state===`suspended`&&ou.resume().then(()=>{su&&(su.gain.value=mu())}).catch(()=>{}),document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,e),document.removeEventListener(`touchstart`,e)};document.addEventListener(`pointerdown`,e,{passive:!0}),document.addEventListener(`keydown`,e,{passive:!0}),document.addEventListener(`touchstart`,e,{passive:!0})}function fu(e){if(!ou||!su||!H.soundEnabled)return;let t=iu.list[e],n=au.get(e);if(!t||!n)return;let r=()=>{if(!ou||!su)return;ou.state===`suspended`&&ou.resume().catch(()=>{});let e=ou.createBufferSource();e.buffer=n;let r=ou.createGain();r.gain.value=typeof t.volume==`number`?t.volume:1,e.connect(r).connect(su),e.start()},i=typeof t.delayMs==`number`?t.delayMs:0;i>0?setTimeout(r,i):r()}function pu(e){if(!su)return;let t=$e(Number(e)||0);su.gain.value=t}function mu(){let e=H.soundVolume;return typeof e==`number`&&e>=0&&e<=1?e:iu.masterVolume}var hu=null,gu=null,_u=null;function vu(){return gu||(gu=yu(),gu)}async function yu(){if(!await bu())console.log(`[ads] Yandex SDK not found — ads disabled`);else try{let e=new Promise((e,t)=>setTimeout(()=>t(Error(`init timeout`)),5e3)),t=await Promise.race([YaGames.init(),e]);if(!t?.adv){console.warn(`[ads] SDK initialized but adv missing`);return}hu=t,console.log(`[ads] Yandex SDK ready`)}catch(e){console.warn(`[ads] init failed:`,e)}}async function bu(e=3e3){let t=performance.now();for(;performance.now()-t<e;){if(typeof YaGames<`u`)return!0;await new Promise(e=>setTimeout(e,100))}return!1}function xu(){return hu!==null}function Su(){return hu?new Promise(e=>{wu();try{hu.adv.showFullscreenAdv({callbacks:{onClose:t=>{Tu(),e(t===!0)},onError:t=>{console.warn(`[ads] fullscreen error:`,t),Tu(),e(!1)}}})}catch(t){console.warn(`[ads] fullscreen throw:`,t),Tu(),e(!1)}}):Promise.resolve(!1)}function Cu(){return hu?new Promise(e=>{let t=!1;wu();try{hu.adv.showRewardedVideo({callbacks:{onRewarded:()=>{t=!0},onClose:()=>{Tu(),e(t)},onError:t=>{console.warn(`[ads] rewarded error:`,t),Tu(),e(!1)}}})}catch(t){console.warn(`[ads] rewarded throw:`,t),Tu(),e(!1)}}):Promise.resolve(!1)}function wu(){_u===null&&(_u=mu(),pu(0))}function Tu(){_u!==null&&(pu(_u),_u=null)}var Eu=`rocket_last_fullscreen_traveler_v1`;function Du(){try{return parseInt(localStorage.getItem(Eu)||`0`,10)||0}catch{return 0}}function Ou(e){try{localStorage.setItem(Eu,String(e))}catch{}}function ku(){try{localStorage.removeItem(Eu)}catch{}}var Au=ke;function ju(e){return Au[e].levels.length}function Mu(e){let t=G.abilities[e];if(t.level<=0)return null;let n=Au[e].levels;return n[Math.min(t.level,n.length)-1]}function Nu(){for(let e of Object.keys(Au)){let t=G.abilities[e],n=G.cards[e]||0;t.level=Math.min(n,ju(e)),t.usesLeft=Mu(e)?.count??0}}function Pu(e){Nu();let t=G.abilities[e];t.active=!1,t.activeEnd=0,t.cooldownEnd=0}function Fu(e){let t=G.abilities[e];return t.level<=0||t.active?!1:Ha.gameTime>=t.cooldownEnd}function Iu(e){return G.abilities[e].active}function Lu(e){if(!Iu(e))return 1;let t=Mu(e);return t?t.multiplier:1}function Ru(e){if(G.phase!==`fly`||!Fu(e)||e===`forsage`&&G.oxidizerActive)return!1;let t=G.abilities[e],n=Mu(e);return!n||t.usesLeft<=0?!1:(t.active=!0,t.activeEnd=Ha.gameTime+n.duration,t.usesLeft--,!0)}function zu(){return G.phase!==`fly`||!G.upgrades.oxidizer||G.upgrades.oxidizer<=0?{ok:!1,reason:null}:G.oxidizerActive?(G.oxidizerActive=!1,{ok:!0,reason:null}):G.fuel<=0?{ok:!1,reason:`Топливо закончилось — окислитель недоступен`}:G.oxidizerLeft<=0?{ok:!1,reason:`Окислитель пуст`}:Iu(`forsage`)?{ok:!1,reason:`Форсаж активен - окислитель недоступен`}:(G.oxidizerActive=!0,{ok:!0,reason:null})}function Bu(e){let t=G.abilities[e];if(!t.active)return 0;let n=Mu(e);if(!n||n.duration<=0)return 1;let r=t.activeEnd-Ha.gameTime;return $e(1-r/n.duration)}function Vu(e){let t=G.abilities[e];if(t.level<=0||t.active)return 0;let n=Mu(e);if(!n)return 0;let r=t.cooldownEnd-Ha.gameTime;return r<=0?1:$e(1-r/n.cooldown)}function Hu(e){for(let e of Object.keys(Au)){let t=G.abilities[e];if(t.active&&Ha.gameTime>=t.activeEnd){t.active=!1;let n=Mu(e);n&&(t.cooldownEnd=Ha.gameTime+n.cooldown)}}}function Uu(){for(let e of Object.keys(Au)){let t=G.abilities[e];t.active=!1,t.activeEnd=0,t.cooldownEnd=0,t.usesLeft=Mu(e)?.count??0}}function Wu(e){let t=G.abilities[e],n=Au[e],r=Mu(e);return{key:e,icon:n.icon,name:n.name,level:t.level,unlocked:t.level>0,active:t.active,ready:Fu(e),activeProgress:Bu(e),cooldownProgress:Vu(e),usesLeft:t.usesLeft,maxUses:r?.count??0}}var Gu=document.getElementById(`dist`),Ku=document.getElementById(`chestProgress`),qu=document.getElementById(`chestFill`),Ju=document.getElementById(`chestDist`),Yu=document.getElementById(`coins`),Xu=document.getElementById(`best`),Zu=document.getElementById(`alignText`),Qu=document.getElementById(`forsageBtn`),$u=Qu.querySelector(`.forsage-count`),ed=-1,td=-1,nd=-1,rd=-1,id=-1,ad=null,od=null,sd=``,cd=``;function ld(){G.coins!==td&&(td=G.coins,Yu.textContent=String(G.coins));let e=Math.floor(G.best);e!==nd&&(nd=e,Xu.textContent=String(e))}function ud(e){let t=Math.max(0,Math.floor(e));t!==ed&&(ed=t,Gu.textContent=String(t))}function dd(e,t){let n=t.aligned?`🎯 0°`:Math.round(e)+`°`;n!==sd&&(Zu.textContent=n,sd=n),t.textColor!==cd&&(Zu.style.color=t.textColor,cd=t.textColor)}function fd(e,t,n,r=!1){if(e===null){Ku.classList.remove(`on`,`near`,`missed`);return}Ku.classList.add(`on`),qu.style.width=($e(t)*100).toFixed(1)+`%`;let i=Math.abs(e),a;a=i<1e3?(e<0?`-`:``)+Math.round(i)+` м`:i<1e4?(e<0?`-`:``)+(i/1e3).toFixed(1)+` км`:(e<0?`-`:``)+Math.round(i/1e3)+` км`,Ju.textContent=a,Ku.classList.toggle(`near`,!!n&&!r),Ku.classList.toggle(`missed`,!!r)}function pd(e,t){let n=document.getElementById(`fuelFill`),r=document.getElementById(`fuelText`);if(n&&r){if(G.oxidizerActive){let e=M.maxOxidizer(G.upgrades)||1;(G.oxidizerLeft!==id||ad!==!0)&&(id=G.oxidizerLeft,ad=!0,n.style.width=G.oxidizerLeft/e*100+`%`,n.style.background=w.fuelBar.oxidizer,r.textContent=G.oxidizerLeft.toFixed(1))}else(e!==rd||ad!==!1)&&(rd=e,ad=!1,n.style.width=e/t*100+`%`,n.style.background=w.fuelBar.normal,r.textContent=e.toFixed(1))}}function md(){if(!Qu)return;let e=Wu(`forsage`),t,n;e.unlocked?e.usesLeft<=0?(t=`empty`,n=0):e.active?(t=`active`,n=e.activeProgress*100):e.ready?(t=`ready`,n=100):(t=`cooldown`,n=e.cooldownProgress*100):(t=`blocked`,n=0);let r=t+`:`+Math.round(n)+`:`+e.usesLeft;r!==od&&(od=r,Qu.className=`forsage-btn `+t,Qu.style.setProperty(`--fill`,n.toFixed(1)+`%`),$u&&(e.unlocked?($u.textContent=String(e.usesLeft),$u.hidden=!1):$u.hidden=!0))}var hd=null;function gd(e){if(e===hd)return;hd=e,G.uiBadges.cards=e;let t=document.getElementById(`cardsBadge`);t&&(t.hidden=!e)}var _d=null;function vd(e){if(e===_d)return;_d=e,G.uiBadges&&(G.uiBadges.news=e);let t=document.getElementById(`newsBadge`);t&&(t.hidden=!e)}var yd=null;function bd(e){if(e===yd)return;yd=e;let t=document.getElementById(`tutorialBadge`);t&&(t.hidden=!e)}var xd=document.getElementById(`oxidizerBtn`);if(xd){let e=xd.querySelector(`.oxidizer-icon`);e&&(e.textContent=pt.icon),xd.title=pt.name,xd.setAttribute(`aria-label`,pt.name)}var Sd=null;function Cd(){if(!xd)return;let e,t;if(!G.upgrades.oxidizer||G.upgrades.oxidizer<=0)e=`blocked`,t=0;else if(G.oxidizerLeft<=0)e=`empty`,t=0;else if(G.oxidizerActive){e=`active`;let n=M.maxOxidizer(G.upgrades)||1;t=G.oxidizerLeft/n*100}else{e=`ready`;let n=M.maxOxidizer(G.upgrades)||1;t=G.oxidizerLeft/n*100}let n=e+`:`+Math.round(t);n!==Sd&&(Sd=n,xd.className=`oxidizer-btn `+e,xd.style.setProperty(`--fill`,t.toFixed(1)+`%`))}var wd=e=>`#`+e.toString(16).padStart(6,`0`),Td={},Ed=!1,Dd=`summary`,Od=!1,kd={maxFuel:{icon:`⛽`,name:`Топливо`},thrustAcc:{icon:`🔥`,name:`Тяга`},drag:{icon:`💨`,name:`Сопротивление`},launchSpeed:{icon:`🦵`,name:`Сила пинка`},forsageThrust:{icon:`🚀`,name:`Тяга в форсаже`},gravity:{icon:`🌍`,name:`Гравитация`},fullTankPower:{icon:`🔥`,name:`Мощность (полный бак)`}};function Ad(e={}){if(Ed)return;Ed=!0,Td=e;let t=document.getElementById(`cardsPanel`),n=document.getElementById(`cardsClose`),r=document.getElementById(`cardsBtn`),i=document.querySelectorAll(`.cards-tab`);r&&r.addEventListener(`click`,e=>{e.stopPropagation(),jd()}),n&&n.addEventListener(`click`,e=>{e.stopPropagation(),Md()}),t&&t.addEventListener(`click`,e=>{e.target===t&&Md()}),i.forEach(e=>{e.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.tab;(t===`summary`||t===`current`||t===`available`)&&(Dd=t),zd()})}),Pd()}function jd(){let e=document.getElementById(`cardsPanel`);e&&(e.classList.add(`on`),Od=!0,gd(!1),Fd(),zd())}function Md(){let e=document.getElementById(`cardsPanel`);e&&e.classList.remove(`on`),Od=!1}function Nd(){Od&&zd()}function Pd(){let e=document.getElementById(`cardsBtn`);e&&(e.hidden=G.openedChests.size===0)}function Fd(){document.querySelectorAll(`.cards-tab`).forEach(e=>{e.classList.toggle(`active`,e.dataset.tab===Dd)})}function Id(e){return String(e).replace(/"/g,`&quot;`)}function Ld(e){return ge.filter(t=>t.family===e).reduce((e,t)=>e+(G.cards[t.id]||0),0)}function Rd(e){return!(e.special||e.buyFlag===!1||!e.buyPrice||e.buyPrice<=0||e.once&&(G.cards[e.id]||0)>=1||e.condition===`forsage`&&(G.cards.forsage||0)<1||Ld(e.family)>=z.cardTypeLimit)}function zd(){Bd(),Dd===`summary`?Vd():Dd===`current`?Hd():Dd===`available`&&Ud()}function Bd(){let e=document.getElementById(`cardsGemsCount`);e&&(e.textContent=String(G.gems));let t=document.getElementById(`cardsCosmoCounter`);if(!t)return;let n=pe.some(e=>(G.upgrades[e.key]||0)>=(e.maxLevel??1/0));if(t.hidden=!n,n){let e=document.getElementById(`cardsCosmoCount`);e&&(e.textContent=String(Math.floor(G.cosmoPoints)))}}function Vd(){let e=document.getElementById(`cardsList`);if(e){e.innerHTML=``;for(let t of It(G.upgrades,G.cards)){let n=document.createElement(`div`);n.className=`cards-stat-section`;let r=`<div class="cards-stat-section-title">${t.title}</div>`;for(let e of t.rows)r+=yt(e,`cards-stat`);n.innerHTML=r,e.appendChild(n)}}}function Hd(){let e=document.getElementById(`cardsList`);if(!e)return;let t=e.scrollTop,n=ge.filter(e=>(G.cards[e.id]||0)>0);if(n.length===0)e.innerHTML=`<div class="cards-empty">Пока ни одной карточки не собрано</div>`;else{e.innerHTML=``;for(let t of n)e.appendChild(Wd(t,`current`));e.scrollTop=t}}function Ud(){let e=document.getElementById(`cardsList`);if(!e)return;let t=e.scrollTop,n=ge.filter(Rd);if(n.length===0)e.innerHTML=`<div class="cards-empty">Нет доступных карточек</div>`;else{e.innerHTML=``;for(let t of n)e.appendChild(Wd(t,`available`));e.scrollTop=t}}function Wd(e,t){let n=G.cards[e.id]||0,r=document.createElement(`div`);r.className=t===`available`?`card-row`:`card-row `+(n>0?`received`:`not-received`),e.color!=null&&(r.style.borderColor=wd(e.color)+`55`);let i=t!==`available`&&n>0?`<span class="card-row-count">(×${n})</span>`:``,a=``;if(e.special){if(a=`<div class="card-row-desc">${n>=2&&e.desc_upgrade||e.desc_buff}</div>`,n>0){let e=ke.forsage.levels.length;a+=`<div class="card-row-effect buff">▲ Уровень ${n}/${e}</div>`}}else if(e.effects)for(let r of e.effects){let e=kd[r.stat]??{icon:`❓`,name:r.stat},i=r.isBuff?`buff`:`debuff`,o=r.isBuff?`▲`:`▼`,s=Xe(r.mult),c=``;if(t!==`available`&&n>1){let e=r.mult**+n;c=` → ${Xe(e)}`}a+=`<div class="card-row-effect ${i}">${o} ${e.icon} ${e.name} ${s}${c}</div>`}let o=Gd(e,n,t);return r.innerHTML=`
    <div class="card-row-icon">${e.icon}</div>
    <div class="card-row-main">
      <div class="card-row-name">
        ${i}
        <span>${e.name}${e.variant?` · `+e.variant:``}</span>
      </div>
      ${a}
    </div>
    ${o?`<div class="card-row-actions">${o}</div>`:``}
  `,Kd(r,e,t),r}function Gd(e,t,n){if(n===`current`){if(e.sellFlag===!1||!e.sellPrice||e.sellPrice<=0)return``;let t=Td.canSell?.(e.id);return`<button class="card-trade-btn sell" data-action="sell" ${t?`disabled`:``} ${t?`title="${Id(t)}"`:``}>Продать ${e.sellPrice} 💎</button>`}if(n===`available`){let t=Td.canBuy?.(e.id);return`<button class="card-trade-btn buy" data-action="buy" ${t?`disabled`:``} ${t?`title="${Id(t)}"`:``}>Купить ${e.buyPrice} 💎</button>`}return``}function Kd(e,t,n){if(n===`current`){let n=e.querySelector(`.card-trade-btn.sell`);n&&!n.disabled&&n.addEventListener(`click`,e=>{e.stopPropagation(),Xd(t)})}else if(n===`available`){let n=e.querySelector(`.card-trade-btn.buy`);n&&!n.disabled&&n.addEventListener(`click`,e=>{e.stopPropagation(),Yd(t)})}}function qd(e,t){return Td.getTradePreview?Td.getTradePreview(e.id,t):null}function Jd(e,t){let n=(t>0?e.buyPrice:e.sellPrice)??0,r=qd(e,t)||{curCount:0,newCount:0,effects:[]},i=e.variant?`${e.name} · ${e.variant}`:e.name,a=[t>0?`Купить «${i}» за ${n} 💎?`:`Продать «${i}» за ${n} 💎?`,``];if(r.effects.length>0){a.push(`Количество: ×${r.curCount} → ×${r.newCount}`);for(let e of r.effects){let t=kd[e.stat]??{icon:`❓`,name:e.stat};a.push(`${t.icon} ${t.name}: ${Xe(e.before)} → ${Xe(e.after)}`)}a.push(``)}return a.push(`Гемов: ${G.gems} → ${t>0?G.gems-n:G.gems+n}`),a.join(`
`)}function Yd(e){let t=Td.canBuy?.(e.id);if(t){alert(t);return}if(!confirm(Jd(e,1)))return;let n=Td.onBuy?.(e.id);n?.ok||alert(n?.reason||`Не удалось купить`)}function Xd(e){let t=Td.canSell?.(e.id);if(t){alert(t);return}if(!confirm(Jd(e,-1)))return;let n=Td.onSell?.(e.id);n?.ok||alert(n?.reason||`Не удалось продать`)}var Zd=null,Qd=[],$d=()=>0,ef={};for(let e of _t)e.replaces&&(ef[e.replaces]=e);var tf=new Set,nf=!1,rf=0;function af(e){if(e.length===0)return;rf++;let t=rf;nf=!0;for(let t of e)tf.add(t);ff(),setTimeout(()=>{if(t===rf){for(let t of e)tf.delete(t);of(e),setTimeout(()=>{t===rf&&(nf=!1)},600)}},2600)}function of(e){for(let t of e){let e=ef[t];if(!e)continue;let n=document.querySelector(`#shopDrawer .shop-card[data-track="${t}"]`);if(!n)continue;let r=n.querySelector(`.shop-card-max-overlay`);r&&r.remove(),n.classList.remove(`max-reveal`);let i=n.getBoundingClientRect();n.style.animation=`shopCardFlipOut 0.22s ease-in forwards`,n.addEventListener(`animationend`,t=>{if(t.animationName!==`shopCardFlipOut`)return;let r=wf(e),a=document.createElement(`div`);a.innerHTML=r;let o=a.firstElementChild;o.style.minHeight=`${i.height}px`,o.style.animation=`shopCardFlipIn 0.28s cubic-bezier(0.2, 0, 0, 1)`,n.replaceWith(o),o.addEventListener(`animationend`,e=>{e.animationName===`shopCardFlipIn`&&(o.style.animation=``,o.style.minHeight=``)},{once:!0})},{once:!0})}}function sf({onBuy:e,upgrades:t,costOf:n}){Zd=e,Qd=t,$d=n;let r=document.getElementById(`shopToggle`);r&&(r.addEventListener(`click`,e=>{e.stopPropagation(),cf()}),r.addEventListener(`animationend`,e=>{e.animationName===`shopTogglePulse`&&r.classList.remove(`pulse`)}));let i=document.getElementById(`shopDrawer`);i&&(Df(i),i.addEventListener(`animationend`,e=>{if(e.animationName!==`maxOverlayBlink`)return;let t=e.target;if(!t)return;t.remove();let n=t.closest(`.shop-card`);n&&n.classList.remove(`max-reveal`)}))}function cf(){let e=document.getElementById(`shopDrawer`);e&&(e.classList.contains(`open`)?uf():df())}function lf(){return document.getElementById(`shopDrawer`)?.classList.contains(`open`)??!1}function uf(){let e=document.getElementById(`shopDrawer`);e&&e.classList.remove(`open`);let t=document.getElementById(`panel`);t&&t.classList.remove(`panel--shop-open`),document.body.classList.remove(`shop-open`),mf(),rf++,tf.clear(),nf=!1}function df(){let e=document.getElementById(`shopDrawer`);if(!e)return;tf.clear(),nf=!1;let t=[];for(let e of Qd){if(G.upgrades[e.key]<(e.maxLevel??1/0))continue;let n=ef[e.key];n&&(G.upgrades[n.key]||0)===0&&t.push(e.key)}e.classList.add(`open`);let n=document.getElementById(`panel`);n&&n.classList.add(`panel--shop-open`),document.body.classList.add(`shop-open`),t.length>0?af(t):xf()}function ff(){_f(),bf(),xf()}function pf(){ff(),vf()>0?hf():mf()}function mf(){let e=document.getElementById(`shopToggle`);e&&e.classList.remove(`pulse`)}function hf(){let e=document.getElementById(`shopToggle`);e&&!e.hidden&&(e.classList.remove(`pulse`),e.offsetWidth,e.classList.add(`pulse`))}function gf(e){af([e])}function _f(){let e=document.getElementById(`shopStatus`);if(!e)return;let t=``;for(let e of Qd){let n=G.upgrades[e.key],r=n>=(e.maxLevel??1/0);t+=`<div class="shop-status-item${r?` maxed`:``}">
      <span class="shop-status-icon">${e.icon}</span>
      <span class="shop-status-lvl">${n}</span>
    </div>`}e.innerHTML=t}function vf(){let e=0;for(let t of Qd){if(G.upgrades[t.key]>=(t.maxLevel??1/0)){let n=ef[t.key];if(n){let t=G.upgrades[n.key]||0;if(t<(n.maxLevel??1/0)){let r=M.cosmoUpgradeCost(n,t+1);G.cosmoPoints>=r&&e++}}continue}let n=$d(t);G.coins>=n&&e++}return e}function yf(){return Qd.every(e=>(G.upgrades[e.key]||0)<=1)}function bf(){let e=document.getElementById(`shopToggle`);if(!e)return;let t=vf(),n=t===0&&yf();e.hidden!==n&&(e.hidden=n,n&&e.classList.remove(`pulse`));let r=document.getElementById(`shopToggleBadge`);r&&(t>0?(r.textContent=String(t),r.hidden=!1):r.hidden=!0)}function xf(){let e=document.getElementById(`shopDrawer`);if(!e)return;let t=e.scrollTop,n=_t.length>0,r=Qd.some(e=>G.upgrades[e.key]>=(e.maxLevel??1/0)),i=n&&r,a=`
    <div class="shop-drawer-header">
      <div class="shop-drawer-title">⚡ Прокачать</div>
      <div class="shop-drawer-balance">
        <span class="coins">💲 ${Math.floor(G.coins)}</span>
        <span class="cosmo"${i?``:` hidden`}>🌌 ${Math.floor(G.cosmoPoints)}</span>
      </div>
    </div>
    <div class="shop-drawer-grid">
  `;for(let e of Qd)a+=Sf(e);a+=`</div>`,e.innerHTML=a,e.scrollTop=t}function Sf(e){let t=G.upgrades[e.key]>=(e.maxLevel??1/0),n=ef[e.key];return t&&tf.has(e.key)?Cf(e,{maxOverlay:!0}):t&&n?wf(n):Cf(e)}function Cf(e,t={}){let n=G.upgrades[e.key],r=e.maxLevel??1/0,i=n>=r,a=i?0:$d(e),o=i||G.coins>=a,s=Of(e,n),c=r===1/0?0:Math.min(100,n/r*100),l=``,u=``;if(s){let e=s.next-s.cur,t=s.cur===0?0:e/s.cur*100,n=s.higherIsBetter?e>0:e<0,r=e>0?`+`:``;l=`
      <span class="shop-card-value-cur">${s.format(s.cur)} ${s.unit}</span>
      <span class="shop-card-value-arrow">→</span>
      <span class="shop-card-value-next">${s.format(s.next)} ${s.unit}</span>
    `,u=`<span class="shop-card-value-delta${n?``:` down`}">${r}${t.toFixed(1)}%</span>`}let d=e.desc_long,f=!i&&o,p=(i?``:` data-key="${e.key}"`)+(f?` data-clickable="1"`:``),m=t.maxOverlay?` max-reveal`:``;return`
    <div class="shop-card${i?` maxed`:``}${m}" data-track="${e.key}" style="--track-color: ${wd(e.color)}"${p}>
      <div class="shop-card-head">
        <span class="shop-card-icon">${e.icon}</span>
        <div class="shop-card-title-wrap">
          <div class="shop-card-name">${e.name}</div>
          <div class="shop-card-lvl">Ур. ${n} / ${r}</div>
        </div>
        <div class="shop-card-cost${i?` max`:``}">${i?`MAX`:a+` 💰`}</div>
      </div>
      <div class="shop-card-progress">
        <div class="shop-card-progress-fill" style="width:${c.toFixed(1)}%"></div>
      </div>
      ${s?`<div class="shop-card-value">${l}${u}</div>`:``}
      <div class="shop-card-desc">${d}</div>
      ${t.maxOverlay?`<div class="shop-card-max-overlay">MAX</div>`:``}
    </div>
  `}function wf(e){let t=G.upgrades[e.key]||0,n=e.maxLevel??1/0,r=t>=n,i=r?0:M.cosmoUpgradeCost(e,t+1),a=r||G.cosmoPoints>=i,o=Of(e,t),s=n===1/0?0:Math.min(100,t/n*100),c=``,l=``;if(o){if(r)c=`<span class="shop-card-value-next">${o.format(o.cur)} ${o.unit}</span>`;else{let e=o.next-o.cur,t=o.cur===0?0:e/o.cur*100,n=o.higherIsBetter?e>0:e<0,r=e>0?`+`:``;c=`
        <span class="shop-card-value-cur">${o.format(o.cur)} ${o.unit}</span>
        <span class="shop-card-value-arrow">→</span>
        <span class="shop-card-value-next">${o.format(o.next)} ${o.unit}</span>
      `,l=`<span class="shop-card-value-delta${n?``:` down`}">${r}${t.toFixed(1)}%</span>`}}let u=e.desc_long,d=!r&&a,f=(r?``:` data-key="${e.key}" data-cosmo="1"`)+(d?` data-clickable="1"`:``);return`
    <div class="shop-card${r?` maxed`:``}" data-track="cosmo" style="--track-color: ${wd(e.color)}"${f}>
      <div class="shop-card-head">
        <span class="shop-card-icon">${e.icon}</span>
        <div class="shop-card-title-wrap">
          <div class="shop-card-name">${e.name}</div>
          <div class="shop-card-lvl">Ур. ${t} / ${n}</div>
        </div>
        <div class="shop-card-cost${r?` max`:` cosmo`}">${r?`MAX`:i+` 🌌`}</div>
      </div>
      <div class="shop-card-progress">
        <div class="shop-card-progress-fill" style="width:${s.toFixed(1)}%"></div>
      </div>
      ${o?`<div class="shop-card-value">${c}${l}</div>`:``}
      <div class="shop-card-desc">${u}</div>
    </div>
  `}var Tf=10,Ef=800;function Df(e){let t=null;e.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`&&e.button!==0)return;let n=e.target?.closest(`.shop-card`);t=!n||!n.dataset.key?null:{card:n,x:e.clientX,y:e.clientY,time:Date.now()}}),e.addEventListener(`pointermove`,e=>{if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;Math.hypot(n,r)>Tf&&(t=null)}),e.addEventListener(`pointercancel`,()=>{t=null}),e.addEventListener(`pointerup`,e=>{if(!t)return;let n=t;if(t=null,e.pointerType===`mouse`&&e.button!==0)return;let r=e.clientX-n.x,i=e.clientY-n.y;if(Math.hypot(r,i)>Tf||Date.now()-n.time>Ef||e.target?.closest(`.shop-card`)!==n.card)return;if(n.card.dataset.clickable!==`1`){n.card.classList.add(`shake`),setTimeout(()=>n.card.classList.remove(`shake`),400);return}let a=n.card.dataset.key;if(!a)return;let o=n.card.dataset.cosmo===`1`,s=o?_t.find(e=>e.key===a):Qd.find(e=>e.key===a);if(!s)return;let c=G.upgrades[s.key]||0,l=o?`${M.cosmoUpgradeCost(s,c+1)} 🌌`:`${$d(s)} 💰`;kf(n.card,l),Zd?.(s),Af()})}function Of(e,t){let n={...G.upgrades},r={...n,[e.key]:t+1};if(`replaces`in e){switch(e.key){case`launchAngle`:return{cur:M.launchAngle(n)*180/Math.PI,next:M.launchAngle(r)*180/Math.PI,unit:`°`,higherIsBetter:!0,format:e=>e.toFixed(0)};case`frictionHeight`:return{cur:M.airHeight(n),next:M.airHeight(r),unit:`м`,higherIsBetter:!1,format:e=>Math.round(e).toString()};case`oxidizer`:return{cur:M.maxOxidizer(n),next:M.maxOxidizer(r),unit:`с`,higherIsBetter:!0,format:e=>e.toFixed(1)};case`engineHeight`:return{cur:M.airEngineHeight(n),next:M.airEngineHeight(r),unit:`м`,higherIsBetter:!0,format:e=>Math.round(e).toString()}}return null}switch(e.key){case`power`:return{cur:M.launchSpeed(n),next:M.launchSpeed(r),unit:`м/с`,higherIsBetter:!0,format:e=>e.toFixed(1)};case`aero`:{let e=M.dragCoefAtAngle({aero:1},0);return{cur:M.dragCoefAtAngle(n,0)/e*100,next:M.dragCoefAtAngle(r,0)/e*100,unit:`%`,higherIsBetter:!1,format:e=>e.toFixed(1)}}case`fuel`:return{cur:M.maxFuel(n),next:M.maxFuel(r),unit:`с`,higherIsBetter:!0,format:e=>e.toFixed(1)};case`thrust`:return{cur:M.thrustAcc(n),next:M.thrustAcc(r),unit:`м/с²`,higherIsBetter:!0,format:e=>e.toFixed(1)}}return null}function kf(e,t){let n=e.getBoundingClientRect(),r=document.createElement(`div`);r.className=`shop-float-cost`,r.textContent=`−${t}`,r.style.left=`${n.left+n.width/2}px`,r.style.top=`${n.top+n.height*.4}px`,document.body.appendChild(r),setTimeout(()=>r.remove(),1e3)}function Af(){let e=Date.now(),t=()=>{Date.now()-e>3500||(nf||tf.size>0?setTimeout(t,200):vf()>0||uf())};setTimeout(t,400)}var jf=null,Mf=!1,Nf={index:0,isOpen:!1,device:`desktop`};function Pf(e){jf=e}function Ff(){Mf||(Mf=!0,Nf.device=typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(pointer: coarse)`).matches?`mobile`:`desktop`,Nf.index=0,Nf.isOpen=!1)}function If(e){Mf||Ff(),!Nf.isOpen&&(Nf.isOpen=!0,Nf.index=0,jf?.onOpen(e))}function Lf(e){Nf.isOpen&&(Nf.isOpen=!1,H.tutorialOnStart=!1,e===`complete`&&(H.tutorialDone=!0),Sn(),jf?.onClose(e))}function Rf(){Bf(Nf.index+1)}function zf(){Bf(Nf.index-1)}function Bf(e){let t=Math.max(0,Math.min(3,e|0));t!==Nf.index&&(Nf.index=t,Nf.index===3&&H.tutorialOnStart&&(H.tutorialOnStart=!1,Sn()),jf?.onGoTo(Nf.index))}function Vf(){return Nf}function Hf(){return Nf.isOpen}function Uf(){return Nf.isOpen?Nf.index<3:H.tutorialOnStart}var Wf=document.getElementById(`toast`),Gf;function Kf(e,t=w.toastColors.default){Wf.textContent=e,Wf.style.color=t,Wf.classList.add(`on`),clearTimeout(Gf),Gf=setTimeout(()=>Wf.classList.remove(`on`),w.toastDuration)}function qf(e,t){if(Wf.innerHTML=``,t){let e=document.createElement(`div`);e.className=`toast-icon`,e.textContent=`🏆`,Wf.appendChild(e)}let n=document.createElement(`div`);n.textContent=`${Math.floor(e)} м`,Wf.appendChild(n),Wf.style.color=t?w.toastColors.upgrade:w.toastColors.land,Wf.classList.add(`on`),clearTimeout(Gf),Gf=setTimeout(()=>Wf.classList.remove(`on`),w.toastDuration)}var Jf;function Yf(e,t=3500,n=null){let r=document.getElementById(`notice`);r&&(r.textContent=e,n?r.style.color=n:r.style.removeProperty(`color`),r.classList.add(`on`),clearTimeout(Jf),Jf=setTimeout(()=>r.classList.remove(`on`),t))}var Xf=null,Zf=null,Qf=null,$f=null;function ep(e,t){e.addEventListener(`pointerdown`,e=>{e.preventDefault(),t(!0)}),e.addEventListener(`pointerup`,()=>t(!1)),e.addEventListener(`pointerleave`,()=>t(!1)),e.addEventListener(`pointercancel`,()=>t(!1))}function tp(){if($f?.(`forsage`)||G.phase!==`fly`)return;if(G.oxidizerActive){Yf(`💧 Окислитель включён — форсаж недоступен`,2e3,`#ff9f1a`);return}let e=Wu(`forsage`);e.unlocked&&e.usesLeft<=0&&Yf(`🚀 Форсаж исчерпан в этом полёте`,2e3,`#ff9f1a`)}function np(){let e=zu();!e.ok&&e.reason&&Yf(`💧 ${e.reason}`,2e3,`#ff9f1a`)}function rp(e){Xf=e.onLaunch,Zf=e.onReset,Qf=e.onAchievements,$f=e.onActivateAbility;let t=document.getElementById(`pushBtn`),n=document.getElementById(`rotUp`),r=document.getElementById(`rotDown`),i=document.getElementById(`forsageBtn`),a=document.getElementById(`launch`);addEventListener(`keydown`,e=>{if(e.code===`Space`&&(e.preventDefault(),lf()&&uf(),Va.boost=!0,!e.repeat&&(G.phase===`ready`||G.phase===`landed`))){if(Uf())return;Xf?.()}e.code===`KeyE`&&(e.preventDefault(),e.repeat||np()),e.code===`KeyF`&&(e.preventDefault(),e.repeat||tp()),e.code===`KeyW`&&(Va.keys.W=!0,e.preventDefault()),e.code===`KeyS`&&(Va.keys.S=!0,e.preventDefault())}),addEventListener(`keyup`,e=>{e.code===`Space`&&(Va.boost=!1),e.code===`KeyW`&&(Va.keys.W=!1),e.code===`KeyS`&&(Va.keys.S=!1)}),ep(n,e=>Va.touch.W=e),ep(r,e=>Va.touch.S=e),ep(t,e=>Va.boost=e),i&&i.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),tp()});let o=document.getElementById(`oxidizerBtn`);o&&o.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),np()}),Ka.domElement.addEventListener(`pointerdown`,e=>{if(G.phase===`ready`||G.phase===`landed`){if(lf()&&uf(),Uf())return;Xf?.()}else G.phase===`fly`&&e.pointerType===`mouse`&&(Va.boost=!0)}),addEventListener(`pointerup`,e=>{e.pointerType===`mouse`&&(Va.boost=!1)}),addEventListener(`pointercancel`,e=>{e.pointerType===`mouse`&&(Va.boost=!1)}),a.addEventListener(`click`,e=>{e.stopPropagation(),lf()&&uf(),H.tutorialOnStart?If(`learn`):Uf()||(G.phase===`ready`||G.phase===`landed`)&&Xf?.()}),document.getElementById(`resetBtn`).addEventListener(`click`,e=>{e.stopPropagation(),Zf?.()});let s=document.getElementById(`achBtn`);s&&s.addEventListener(`click`,e=>{e.stopPropagation(),Qf?.()});let c=document.getElementById(`tutorialBtn`);c&&c.addEventListener(`click`,e=>{e.stopPropagation(),!Hf()&&If(`button`)})}var ip=null;function ap(e={}){let{title:t=`Подтверждение`,body:n=``,confirmText:r=`OK`,cancelText:i=`Отмена`,danger:a=!1}=e;return new Promise(e=>{if(ip){e(!1);return}let o=document.getElementById(`confirmModal`);if(!o){e(!1);return}let s=o.querySelector(`.confirm-title`),c=o.querySelector(`.confirm-body`),l=o.querySelector(`.confirm-ok`),u=o.querySelector(`.confirm-cancel`);s&&(s.textContent=t),c&&(typeof n==`string`?c.innerHTML=n:n instanceof Node?(c.innerHTML=``,c.appendChild(n)):c.innerHTML=``),l&&(l.textContent=r,l.classList.toggle(`danger`,!!a)),u&&(u.textContent=i);let d=t=>{ip=null,o.classList.remove(`on`),l&&(l.onclick=null),u&&(u.onclick=null),o.onclick=null,e(t)};ip=d,l&&(l.onclick=e=>{e.stopPropagation(),d(!0)}),u&&(u.onclick=e=>{e.stopPropagation(),d(!1)}),o.onclick=e=>{e.target===o&&d(!1)},o.classList.add(`on`)})}function op(e){return typeof e==`string`&&dn.includes(e)}function sp(){let e=document.getElementById(`settingsBtn`),t=document.getElementById(`settingsPanel`),n=document.getElementById(`settingsClose`),r=document.getElementById(`qualityBtnGroup`),i=document.getElementById(`qualityAutoHint`),a=document.getElementById(`qualityAutoResolved`),o=document.getElementById(`qualityDesc`);function s(){if(!r)return;let e=H.quality,t=H._resolvedPreset;r.querySelectorAll(`.settings-qbtn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.value===e)}),i&&a&&(e===`auto`?(i.hidden=!1,a.textContent=gn(t)):i.hidden=!0),o&&(o.textContent=_n(t))}r&&(s(),r.addEventListener(`click`,async e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(`.settings-qbtn`);if(!n)return;let r=n.dataset.value;if(!op(r))return;let i=r,a=H.quality;if(i===a)return;let o=mn(a),c=mn(i);if(o===c){H.quality=i,Sn(),s(),Kf(`Качество: ${i===`auto`?`Авто`:gn(c)}`,w.toastColors.upgrade);return}let l=vn(o,c),u=`<p>Применить пресет «<b>${gn(c)}</b>»?</p>`;l.length>0?u+=`<ul>`+l.map(e=>`<li>${e}</li>`).join(``)+`</ul>`:u+=`<p><i>Визуальных изменений не будет.</i></p>`,G.phase!==`ready`&&G.phase!==`landed`&&(u+=`<p style="color:#ff9f1a"><b>⚠️ Текущий полёт будет прерван.</b></p>`),u+=`<p style="opacity:0.65">Игра перезагрузится.</p>`,await ap({title:`Смена качества графики`,body:u,confirmText:`Применить и перезагрузить`,cancelText:`Отмена`})?(H.quality=i,Sn(),Kf(`Применяем… 🔄`,w.toastColors.upgrade),setTimeout(()=>location.reload(),350)):s()}));let l=document.getElementById(`showFpsToggle`),u=document.getElementById(`fpsCounter`);function d(){u&&u.classList.toggle(`hidden`,!H.showFps)}l&&(l.checked=H.showFps,l.addEventListener(`change`,()=>{H.showFps=l.checked,Sn(),d()})),d();let f=document.getElementById(`soundVolume`);if(f){let e=H.soundVolume,t=typeof e==`number`?e:Re.masterVolume;f.value=String(Math.round(t*100));let n=!1;f.addEventListener(`input`,()=>{let e=f.value/100;H.soundVolume=e,pu(e),n||(n=!0,setTimeout(()=>{Sn(),n=!1},250))}),f.addEventListener(`change`,()=>{fu(`achStage`)})}let p=document.getElementById(`soundEnabledToggle`);p&&(p.checked=H.soundEnabled,p.addEventListener(`change`,()=>{H.soundEnabled=p.checked,Sn(),p.checked&&fu(`achStage`)}));let m=document.getElementById(`gpuHint`),h=document.getElementById(`gpuHintStatus`),g=document.getElementById(`gpuHintToggle`),_=document.getElementById(`gpuHintBody`),v=document.getElementById(`gpuHintArrow`);if(m&&c.enabled)try{let e=Ka.getContext(),t=e.getExtension(`WEBGL_debug_renderer_info`),n=String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):``);if(n&&c.integratedPattern.test(n)){let e=n.match(/ANGLE \([^,]+,\s*(.+?)\s*(?:\(|Direct|,|$)/),t=e?e[1]:`встроенная графика`;h&&(h.textContent=`⚠️ Сейчас: ${t} (встроенная — вероятная причина лагов)`),m.hidden=!1}}catch(e){console.warn(`gpu hint: не удалось определить renderer:`,e)}g&&_&&v&&g.addEventListener(`click`,()=>{let e=_.hidden;_.hidden=!e,v.textContent=e?`▾`:`▸`}),e&&t&&(e.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.add(`on`)}),t.addEventListener(`click`,e=>{e.target===t&&t.classList.remove(`on`)})),n&&t&&n.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.remove(`on`)})}var cp=null;function lp(e,t,n={}){Md();let r=document.getElementById(`cardPopup`),i=document.getElementById(`cardChoices`);if(!r||!i)return;cp&&=(r.removeEventListener(`click`,cp),null),i.innerHTML=``;let a=e.length===1;for(let r of e){let e=dp(r,a,n);e.addEventListener(`click`,e=>{e.stopPropagation(),up(),t(r)}),i.appendChild(e)}r.classList.add(`on`),a&&(cp=()=>{up(),t(e[0])},r.addEventListener(`click`,cp))}function up(){let e=document.getElementById(`cardPopup`);e&&e.classList.remove(`on`),cp&&e&&(e.removeEventListener(`click`,cp),cp=null)}function dp(e,t,n={}){let r=n.isUpgradeOverride===void 0?(G.cards[e.id]||0)>=1:n.isUpgradeOverride,i=document.createElement(`div`);i.className=`card`,e.color!=null&&(i.style.borderColor=wd(e.color));let a;a=t?r?`УЛУЧШЕНИЕ`:`РЕДКАЯ НАХОДКА`:`ВЫБЕРИ КАРТУ`;let o=``;if(e.special){let t=r&&e.desc_upgrade?e.desc_upgrade:e.desc_buff;t&&(o=`<div class="card-buff">${t}</div>`)}else e.desc_buff&&(o+=`<div class="card-buff">▲ ${e.desc_buff}</div>`),e.desc_debuff&&(o+=`<div class="card-debuff">▼ ${e.desc_debuff}</div>`);let s=t?`тап — закрыть`:`тап — выбрать`;return i.innerHTML=`
    <div class="card-glow"></div>
    <div class="card-label">${a}</div>
    <div class="card-icon">${e.icon}</div>
    <div class="card-name">${e.name}</div>
    ${e.variant?`<div class="card-variant">${e.variant}</div>`:``}
    <div class="card-effects">${o}</div>
    <div class="card-hint">${s}</div>
  `,i}var fp=[],pp=!1;function mp(e,t=null){fp.push({ach:e,milestone:t}),pp||hp()}function hp(){if(fp.length===0){pp=!1;return}let e=document.getElementById(`achToast`);if(!e){pp=!1;return}pp=!0;let{ach:t,milestone:n}=fp.shift(),r=document.createElement(`div`);r.className=`ach-toast tier-`+t.tier;let i=t.desc?`<div class="ach-toast-desc">
         <span class="ach-toast-desc-text">${t.desc}</span>
         ${n?`<span class="ach-toast-desc-sep">—</span><span class="ach-toast-milestone">${n.label}</span>`:``}
       </div>`:``;r.innerHTML=`
    <div class="ach-toast-icon">${t.icon}</div>
    <div class="ach-toast-text">
      <div class="ach-toast-label">Достижение</div>
      <div class="ach-toast-name">${t.name}</div>
      ${i}
    </div>`,e.appendChild(r),fu(n?`achStage`:`ach`),setTimeout(()=>{r.classList.add(`out`),setTimeout(()=>{r.remove(),hp()},380)},2500)}var gp=-1;function _p(e){let t=document.getElementById(`fpsValue`),n=document.getElementById(`fpsCounter`);if(!t||!n)return;let r=Math.round(e);r!==gp&&(gp=r,t.textContent=String(r));let i=sn;n.classList.toggle(`warn`,r<i.warnThreshold&&r>=i.criticalThreshold),n.classList.toggle(`critical`,r<i.criticalThreshold)}var vp=-1;function yp(e){let t=document.getElementById(`qualityFpsBadge`);if(!t)return;let n=Math.round(e);(n!==vp||t.hidden)&&(vp=n,t.hidden=!1,t.innerHTML=`⚠️ Низкий FPS: <b>~${n}</b>. Рекомендуем снизить качество.`)}var bp=null,xp=null,Sp=null;function Cp(e){xp=e,sf({onBuy:e.onBuy,upgrades:e.upgrades,costOf:e.costOf}),rp({onLaunch:e.onLaunch,onReset:e.onReset,onAchievements:e.onAchievements,onActivateAbility:e.onActivateAbility}),sp();let t=document.getElementById(`doubleRewardBtn`);t&&t.addEventListener(`click`,t=>{t.stopPropagation(),e.onDoubleReward().catch(e=>{console.warn(`[ui] double reward failed:`,e)})})}function wp(){let e=document.getElementById(`doubleRewardBtn`);if(!e||!xp)return;let t=xp.isDoubleRewardAvailable();t!==Sp&&(Sp=t,e.hidden=!t)}var Tp=null;function Ep(){let e=document.getElementById(`launch`);if(!e)return;let t=H.tutorialOnStart;t!==Tp&&(Tp=t,t?(e.textContent=`УЧИТЬСЯ`,e.classList.add(`learn-mode`)):(e.textContent=`Пнуть! 🦵`,e.classList.remove(`learn-mode`)))}function Dp(){if(md(),Cd(),Ep(),wp(),document.body.classList.contains(`tutorial-open`))return;let e=G.phase===`fly`;if(e===bp)return;bp=e;let t=G.phase===`ready`||G.phase===`landed`,n=document.getElementById(`boostUI`),r=document.getElementById(`helpText`),i=document.getElementById(`touchControls`),a=document.getElementById(`launch`),o=document.getElementById(`panel`);e?(uf(),n?.classList.add(`on`),r?.classList.add(`on`),i?.classList.remove(`hidden`)):(n?.classList.remove(`on`),r?.classList.remove(`on`),i?.classList.add(`hidden`)),a?.classList.toggle(`hidden`,!t),o&&(o.style.display=t?``:`none`),t&&pf()}var Op=pe,kp=e=>M.upgradeCost(e,G.upgrades[e.key]),Ap=e=>{let t=1;for(let[n,r]of Object.entries(G.cards)){if(!r)continue;let i=ge.find(e=>e.id===n);if(i&&`effects`in i)for(let n of i.effects)n.stat===e&&(t*=n.mult**+r)}return t},jp=e=>{for(let[t,n]of Object.entries(G.cards)){if(!n)continue;let r=ge.find(e=>e.id===t);if(r&&`flags`in r&&r.flags.includes(e))return!0}return!1},Mp=()=>M.launchSpeed(G.upgrades)*Ap(`launchSpeed`),Np=()=>M.maxFuel(G.upgrades)*Ap(`maxFuel`),Pp=()=>ot.fullTankPower*Ap(`fullTankPower`),Fp=()=>ot.emptyTankPower,Ip=(e,t)=>{let n=t>0?$e(e/t):0,r=Pp(),i=Fp();return i+(r-i)*n},Lp=()=>M.thrustAcc(G.upgrades)*Ap(`thrustAcc`),Rp=e=>M.dragCoefAtAngle(G.upgrades,e)*Ap(`drag`),zp=e=>M.airDensity(G.upgrades,e),Bp=()=>Ap(`gravity`),Vp=ot.gravity,Hp=ot.restY,Up=ot.angAcc,Wp=ot.angDamp,Gp=ot.angMax,Kp=A.anglesCourse,qp=[Kp.forward,Kp.almostForward,Kp.adjustment,Kp.change,Kp.deviation,Kp.side,Kp.back].sort((e,t)=>e.angle-t.angle).map(e=>({angle:e.angle,flameColor:e.flameColor,flameIntensity:e.flameIntensity,textColor:e.textColor,_flame:new V(e.flameColor),_text:new V(e.textColor)})),Jp=new V(qp[0].flameColor),Yp=new V(qp[0].textColor);function Xp(e){let t=qp.length;if(e<=qp[0].angle)return[qp[0],qp[0],0];if(e>=qp[t-1].angle)return[qp[t-1],qp[t-1],0];for(let n=0;n<t-1;n++){let t=qp[n],r=qp[n+1];if(e>=t.angle&&e<=r.angle){let n=r.angle-t.angle;return[t,r,n>0?(e-t.angle)/n:0]}}return[qp[t-1],qp[t-1],0]}function Zp(e){let[t,n,r]=Xp(e);return Jp.copy(t._flame).lerp(n._flame,r),Yp.copy(t._text).lerp(n._text,r),{flameColor:Jp,flameIntensity:t.flameIntensity+(n.flameIntensity-t.flameIntensity)*r,textColor:`rgb(${Yp.r*255|0},${Yp.g*255|0},${Yp.b*255|0})`,aligned:e<=qp[0].angle}}var Qp=ye,$p=0,em=!1;function tm(){return-(Qp.initialTime??0)}function nm(){try{let e=localStorage.getItem(Qp.saveKey);if(!e)return tm();let t=JSON.parse(e);if(!t||typeof t!=`object`)return tm();if(typeof t.t==`number`&&isFinite(t.t))return Ha.gameTime-t.t;if(typeof t.cycleStartMs==`number`&&isFinite(t.cycleStartMs)){let e=cm(),n=((Date.now()-t.cycleStartMs)/1e3%e+e)%e;return Ha.gameTime-n}}catch(e){console.warn(`daynight.load failed:`,e)}return tm()}function rm(){if(!em)try{localStorage.setItem(Qp.saveKey,JSON.stringify({t:um()}))}catch(e){console.warn(`daynight.save failed:`,e)}}function im(){Qp.enabled&&($p=nm(),Date.now()-um()*1e3,gm(um()),window.addEventListener(`pagehide`,rm))}function am(){em=!0;try{localStorage.removeItem(Qp.saveKey)}catch{}$p=tm(),Date.now()-um()*1e3}var om=-1;function sm(e){if(!Qp.enabled)return;let t=um();if(gm(t),Qp.debugLog){let e=Math.floor(t);if(e!==om){om=e;let n=cm(),r=lm(t),i=Math.sin(r),a=Qp.sunArc,o=i>=0?i*a.maxElevation:i*Math.abs(a.minElevation),s=(t/n*100).toFixed(0);console.log(`[DayNight] t=${e}s / ${n}s (${s}%) el=${o.toFixed(0)}°`)}}}function cm(){let e=Qp.keyframes;return e[e.length-1].at}function lm(e){let t=cm(),n=Qp.sunArc.dayDuration,r=Math.max(1,t-n);return e<n?e/n*Math.PI:Math.PI+Math.PI*((e-n)/r)}function um(){let e=Ha.gameTime-$p,t=cm();return(e%t+t)%t}var dm=new V,fm=new V,pm=new V,mm=new V,hm=new V;function gm(e){let t=lm(e),n=Math.sin(t),r=Math.cos(t),i=Qp.sunArc,a=n>=0?n*i.maxElevation:n*Math.abs(i.minElevation),o=i.azimuthBase+i.azimuthSwing*r,s=Qp.keyframes,c=s[0],l=s[s.length-1];for(let t=0;t<s.length-1;t++)if(e>=s[t].at&&e<s[t+1].at){c=s[t],l=s[t+1];break}let u=(`blendFrom`in l?l.blendFrom:void 0)??c.at,d=(`blendTo`in l?l.blendTo:void 0)??l.at,f=d-u,p=0;e>=d?p=1:e>=u&&(p=f>0?(e-u)/f:1);let m=Qp.presets[c.preset],h=Qp.presets[l.preset];dm.setHex(vm(m.zenith,h.zenith,p)),fm.setHex(vm(m.horizon,h.horizon,p)),pm.setHex(vm(m.sunColor,h.sunColor,p)),mm.setHex(vm(m.hemiSky,h.hemiSky,p)),hm.setHex(vm(m.hemiGround,h.hemiGround,p));let g=rt(m.sunIntensity,h.sunIntensity,p),_=rt(m.hemiIntensity,h.hemiIntensity,p),v=_m(a),y=ym(v,Qp.brightnessNightSky),b=ym(v,Qp.brightnessNightTerrain),x=ym(v,Qp.brightnessNightProps);dm.multiplyScalar(y),fm.multiplyScalar(y),Qa.copy(dm),$a.copy(fm);let S=Qp.sunArc.sunFadeDegrees??10,C=a>=0?1:Math.max(0,1+a/Math.max(.1,S));eo.copy(pm).multiplyScalar(C),qa.color.copy(pm),qa.intensity=g,Za&&(Za.color.copy(mm),Za.groundColor.copy(hm),Za.intensity=_),X.fog.color.copy(fm),Xa&&Xa.color.setRGB(b,b,b),vo&&vo.color.setRGB(x,x,x);let w=a*Math.PI/180,T=o*Math.PI/180,E=Math.cos(w);no.set(E*Math.cos(T),Math.sin(w),E*Math.sin(T))}function _m(e){let t=Qp.darknessAboveHorizon??.15,n=Qp.darknessRampDegrees??20;if(e>=0)return t*(1-Math.min(1,e/60));let r=Math.min(1,-e/n);return t+(1-t)*r}function vm(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=Math.round(r+(o-r)*n),u=Math.round(i+(s-i)*n),d=Math.round(a+(c-a)*n);return l<<16|u<<8|d}function ym(e,t){return 1-e+e*t}function bm(e){return typeof e==`number`&&isFinite(e)}function xm(e){return typeof e==`number`&&isFinite(e)&&e>=0}function Sm(){if(Ne.autoSave)try{let e={v:Ne.version,coins:G.coins,cosmoPoints:G.cosmoPoints,best:G.best,upgrades:{...G.upgrades},cards:{...G.cards},openedChests:[...G.openedChests],gems:G.gems,collectedGems:[...G.collectedGems],achievements:nu(),totalPlaytime:Ha.totalPlaytime+Ha.gameTime,hasBoughtCard:G.hasBoughtCard};localStorage.setItem(Ne.key,JSON.stringify(e))}catch(e){console.warn(`saveProgress failed:`,e)}}function Cm(){try{let e=localStorage.getItem(Ne.key);if(!e)return;let t=JSON.parse(e);if(!t||typeof t!=`object`)return;let n=t;if(xm(n.coins)&&(G.coins=Math.floor(n.coins)),xm(n.best)&&(G.best=n.best),xm(n.totalPlaytime)&&(Ha.totalPlaytime=n.totalPlaytime),n.cosmoPoints!==void 0&&(G.cosmoPoints=Math.max(0,Number(n.cosmoPoints)||0)),n.upgrades&&typeof n.upgrades==`object`){let e=n.upgrades;for(let t of Object.keys(G.upgrades)){let n=e[t];xm(n)&&(G.upgrades[t]=Math.floor(n))}}if(n.cards&&typeof n.cards==`object`){let e=n.cards;for(let[t,n]of Object.entries(e))xm(n)&&ge.some(e=>e.id===t)&&(G.cards[t]=Math.floor(n))}if(Array.isArray(n.openedChests))for(let e of n.openedChests)bm(e)&&G.openedChests.add(e);if(xm(n.gems)&&(G.gems=Math.floor(n.gems)),Array.isArray(n.collectedGems))for(let e of n.collectedGems)bm(e)&&G.collectedGems.add(e);G.hasBoughtCard=`hasBoughtCard`in n?n.hasBoughtCard===!0:!0,ru(n.achievements)}catch(e){console.warn(`loadProgress failed:`,e)}}function wm(){if(confirm(`Сбросить весь прогресс? Монеты, рекорд и апгрейды будут потеряны.
Игра перезапустится.`)){try{localStorage.removeItem(Ne.key),localStorage.removeItem(A.ghost.storageKey)}catch(e){console.warn(`resetProgress: не удалось очистить localStorage:`,e)}ku(),am(),H.tutorialOnStart=!0,H.tutorialDone=!1,Sn(),Kf(`Прогресс сброшен 🗑️`,`#ff7a7a`),setTimeout(()=>location.reload(),500)}}function Tm(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n){let i=e.subarray(r,r+n);t+=String.fromCharCode(...i)}return btoa(t)}function Em(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function Dm(){if(!(Ua.samples.length<A.minSamplesLimit))try{let e=new Float32Array(Ua.samples);Wa.samples=e,Wa.best=G.best;let t=Tm(new Uint8Array(e.buffer)),n={v:1,best:G.best,samples:t};localStorage.setItem(A.ghost.storageKey,JSON.stringify(n))}catch(e){console.warn(`saveGhostFlight failed:`,e)}}function Om(){try{let e=localStorage.getItem(A.ghost.storageKey);if(!e)return;let t=JSON.parse(e);if(!t||typeof t!=`object`)return;let n=t;if(typeof n.samples!=`string`)return;let r=Em(n.samples);if(r.length%4!=0)return;let i=new Float32Array(r.buffer);if(i.length<12)return;Wa.samples=i,Wa.best=bm(n.best)?n.best:0}catch(e){console.warn(`loadGhostFlight failed:`,e)}}function km(){Ua.samples.length=0,Ua.recording=!0,Ua.startTime=Ha.gameTime,Ua.nextSampleTime=0}function Am(){let e=Ua;if(!e.recording)return;let t=Ha.gameTime-e.startTime;t>=A.recordingTimeLimit?e.recording=!1:t<e.nextSampleTime||(e.nextSampleTime+=1/A.recordingFPS,e.samples.push(t,K.pos.x,K.pos.y,K.pos.z,K.rotZ,Ga.boosting||Iu(`forsage`)?1:0))}var jm=new V(A.flame.outer),Mm=new V(A.flame.forsage),Nm=new V(A.flame.aligned),Pm=new V(A.exhaustLight),Fm=new V(A.exhaustLightForsage),Im=new V(A.flame.backMove),Lm=new V,Rm=A.anglesCourse.forward.flameIntensity??1.25,zm=null;function Bm(e){zm=e}function Vm(e){let t=K;t.prevPos.copy(t.pos),t.prevVel.copy(t.vel),t.prevRotZ=t.rotZ;let n=Iu(`forsage`);if(G.phase===`fly`){let r=t.rotZ,i=ot.flightYaw||0;Ga.boosting=(jp(`engineAlwaysOn`)||Va.boost)&&G.fuel>0&&!n;let a=M.airEngineHeight(G.upgrades),o=Math.max(0,1-Math.max(0,t.pos.y)/a);G.oxidizerActive&&G.oxidizerLeft>0&&(Ga.boosting||n)&&(o=1,G.oxidizerLeft=Math.max(0,G.oxidizerLeft-e*pt.drainRate),G.oxidizerLeft<=0&&(G.oxidizerActive=!1,Kf(`💧 Окислитель закончился!`,`#7ed4ff`)));let s=Ip(G.fuel,Np()),c=0;if(Ga.boosting){let t=G.fuel;c+=Lp()*o*s,G.fuel=Math.max(0,G.fuel-e),t>0&&G.fuel<=0&&G.oxidizerActive&&(G.oxidizerActive=!1,Yf(`⛽ Топливо закончилось — окислитель выключен`,2500,`#ff9f1a`))}if(n&&(c+=Lp()*Lu(`forsage`)*Ap(`forsageThrust`)*o*s),c>0){let n=Math.cos(r);t.vel.x+=n*Math.cos(i)*c*e,t.vel.y+=Math.sin(r)*c*e,t.vel.z+=n*Math.sin(i)*c*e}t.vel.y-=Vp*Bp()*e;let l=t.vel.length();if(l>.01){let n=Math.cos(r)*Math.cos(i),a=Math.sin(r),o=Math.cos(r)*Math.sin(i),s=(n*t.vel.x+a*t.vel.y+o*t.vel.z)/l,c=Rp(Math.acos(Math.max(-1,Math.min(1,s))))*zp(t.pos.y)*l;t.vel.x-=t.vel.x*c*e,t.vel.y-=t.vel.y*c*e,t.vel.z-=t.vel.z*c*e}if(t.pos.addScaledVector(t.vel,e),t.vel.y<0){let e=ot.collision,n=!1;if(e.swept){let r=t.prevPos,i=t.pos,a=Math.max(2,e.sweptSamples|0);for(let e=1;e<=a;e++){let o=e/a,s=r.x+(i.x-r.x)*o,c=r.y+(i.y-r.y)*o,l=r.z+(i.z-r.z)*o,u=Te(s,l)+Hp;if(c<=u){t.pos.set(s,u,l),zm&&zm(),n=!0;break}}}if(!n){let e=Te(t.pos.x,t.pos.z)+Hp;t.pos.y<=e&&(t.pos.y=e,zm&&zm())}}Am();let u=(Va.keys.W||Va.touch.W?1:0)-(Va.keys.S||Va.touch.S?1:0);t.angVel+=u*Up*e,t.angVel-=t.angVel*Wp*e,t.angVel=Math.max(-Gp,Math.min(Gp,t.angVel)),t.rotZ+=t.angVel*e;let d=ot.aeroAlign,f=ot.aeroAlignMinSpeed,p=t.vel.length();if(d>0&&p>f){let n=Math.atan2(t.vel.y,Math.hypot(t.vel.x,t.vel.z))-t.rotZ;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;let r=d*e,i=Math.sign(n)*Math.min(Math.abs(n),r);t.rotZ+=i}}}function Hm(e,t,n,r){let i=K;tc.position.copy(n),tc.rotation.z=t,G.phase===`landed`&&(i.rotZ+=(0-i.rotZ)*Math.min(1,e*6),tc.rotation.z=i.rotZ);let a=Iu(`forsage`),o=G.oxidizerActive,s=1,c=jm,l=1;if(G.phase===`fly`){let e=tc.rotation.z-Math.atan2(r.y,r.x);for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;let t=Math.abs(e)*180/Math.PI,n=Zp(t);dd(t,n),s=n.flameIntensity,l=Math.max(0,1-Math.max(0,i.pos.y)/M.airEngineHeight(G.upgrades)),o?(s=Rm,l=1,c=Nm):c=a?Mm:Ga.boosting?n.flameColor:jm,i.pos.y>i.maxAlt&&(i.maxAlt=i.pos.y)}let u=(Ga.boosting||a?1:G.phase===`fly`?.35:0)*s*l,d=.85+Math.random()*.3,f=a?A.forsageScale:1;pc.scale.setScalar(u*d*f),mc.scale.set(u*d*1.1*f,u*d*f,u*d*f),pc.visible=u>.05,mc.visible=pc.visible,Lm.copy(c).lerp(Im,1-l),fc.color.copy(Lm),fc.opacity=Ga.boosting||a?.95:.5,a?(hc.color.copy(Fm),hc.intensity=u*A.exhaustLightIntensityForsage,hc.distance=A.exhaustLightRangeForsage):(hc.color.copy(Pm),hc.intensity=u*(Ga.boosting?A.exhaustLightIntensityBoost:A.exhaustLightIntensityIdle),hc.distance=A.exhaustLightRange)}function Um(e,t){let n=_c(yc,{x:e,z:t},e=>e.opened?null:e,1)[0]?.obj??null;if(!n){fd(null,0,!1,!1);return}if(n.x>=e){let t=n.x-e;fd(t,Math.max(0,Math.min(1,e/Math.max(1,n.x))),t<z.nearRadius,!1);return}let r=n.x-e;if(Math.abs(r)<=z.overRadius){fd(r,1,!1,!0);return}let i=null;for(let t of yc)if(!t.opened&&t.x>=e){i=t.x;break}if(i===null)fd(null,0,!1,!1);else{let t=i-e;fd(t,Math.max(0,Math.min(1,e/Math.max(1,i))),t<z.nearRadius,!1)}}function Wm(){let e=K.pos,t=i.takeRange*i.takeRange,n=[];for(let r of Yc){if(r.collected)continue;let i=e.x-r.x,a=e.y-r.baseY,o=e.z-r.z;i*i+a*a+o*o<=t&&n.push(r)}n.length>0&&Gm(n)}function Gm(e){for(let t of e)t.collected=!0,G.collectedGems.add(t.id),t.group.visible=!1,ll(t),G.gems+=1;let t=e.length;gd(!0),Kf(t===1?`+1 💎`:`+${t} 💎`,`#7ed4ff`),Sm(),Nd()}var Km=new F;function qm(e){J.inited||=(J.pos.copy(Y.position),J.prevPos.copy(Y.position),!0);let t=K.pos,n=K.vel,r=Te(t.x,0),i=n.length(),a=+(G.phase===`fly`),o=a>J.blend?j.blendIn:j.blendOut;J.blend+=(a-J.blend)*Math.min(1,e*o),J.blend<.001&&(J.blend=0),J.blend>.999&&(J.blend=1);let s=Math.max(0,t.y-r),c=Math.min(1,s/j.maxViewHeight),l=j.maxAngle-j.baseAngle,u=(j.baseAngle+l*c)*Math.PI/180,d=0;if(G.phase===`fly`&&n.y<0){let e=n.x/Math.max(.001,-n.y),t=j.dive;d=e<=t.enterRatio?1:e>=t.exitRatio?0:1-(e-t.enterRatio)/(t.exitRatio-t.enterRatio)}let f=1-Math.exp(-j.dive.blendSpeed*e);J.dive+=(d-J.dive)*f,J.dive<.001&&(J.dive=0),J.dive>.999&&(J.dive=1);let p=u+(j.dive.elevation*Math.PI/180-u)*J.dive,m=j.baseRadius+Math.min(j.maxSpeedRadius,i*j.speedRadiusK),h=m*Math.cos(p),g=m*Math.sin(p),_=j.leadTime,v=t.x+n.x*_,y=t.y+n.y*_,b=t.z+n.z*_,x=j.dive.elevation*Math.PI/180,S=j.dive.backShiftX*J.dive,C=j.dive.backShiftX*Math.tan(x)*J.dive,w=v-h*J.blend-S,T=y+g+C,E=b+h*(1-J.blend);J.target.set(w,T,E);let D=j.followBase+Math.min(j.followMaxSpeed,i*j.followSpeedK),O=1-Math.exp(-D*e);J.prevPos.copy(J.pos),J.pos.x+=(w-J.pos.x)*O,J.pos.y+=(T-J.pos.y)*O,J.pos.z+=(E-J.pos.z)*O;let ee=v+(j.lookAheadBase+j.lookAheadBehind*J.blend)*(1-c*j.lookAheadAltK),te=y;J.prevLook.copy(J.look),J.look.x+=(ee-J.look.x)*O,J.look.y+=(te-J.look.y)*O,J.look.z+=(b-J.look.z)*O,J.shake>0&&(J.shake=Math.max(0,J.shake-e*j.shakeDecayK))}function Jm(e){if(Y.position.lerpVectors(J.prevPos,J.pos,e),Km.lerpVectors(J.prevLook,J.look,e),J.shake>0){let e=J.shake*J.shake*j.shakeAmpK;Y.position.x+=(Math.random()-.5)*e,Y.position.y+=(Math.random()-.5)*e}Y.lookAt(Km)}function Ym(e){let t=performance.now()*.0022;if(G.phase===`ready`||G.phase===`landed`)ec.rotation.z+=(0-ec.rotation.z)*Math.min(1,e*12),Bs.position.y=Math.sin(t)*.08,Gs.rotation.z=Math.sin(t*.7)*.03,qs.rotation.z=Math.sin(t*.7)*.05,$s.rotation.z=Math.sin(t)*.03;else if(G.phase===`windup`){let e=1-(1-Math.min(1,G.timer/.3))**3;ec.rotation.z=-.85*e,Gs.rotation.z=.12*e,Bs.position.y=-.12*e}else if(G.phase===`strike`){let e=Math.min(1,G.timer/.11),t=e*e*(3-2*e);ec.rotation.z=-.85+2.9*t,Gs.rotation.z=.12-.28*t,Bs.position.y=-.12+.2*t}else G.phase===`fly`&&(ec.rotation.z+=(0-ec.rotation.z)*Math.min(1,e*6),Gs.rotation.z+=(0-Gs.rotation.z)*Math.min(1,e*6),Bs.position.y+=(0-Bs.position.y)*Math.min(1,e*6))}var Xm=ot.restY,Zm=100,Qm=!1,$m=ge,eh=new F,th=new F,nh=0;function rh(e){if(`replaces`in e){let t=G.upgrades[e.key]||0;if(t>=(e.maxLevel??1/0))return;let n=M.cosmoUpgradeCost(e,t+1);if(G.cosmoPoints<n)return;G.cosmoPoints-=n,G.upgrades[e.key]++,ld(),ff(),Sm();return}let t=G.upgrades[e.key],n=e.maxLevel??1/0;if(t>=n)return;let r=kp(e);G.coins<r||(G.coins-=r,G.upgrades[e.key]++,ld(),Sm(),eu(),G.upgrades[e.key]>=n?gf(e.key):ff())}var ih=!1;async function ah(){if(!ih&&(G.phase===`ready`||G.phase===`landed`)){ih=!0;try{if(sh()){ch($.progress.traveler||0);let e=G.phase;try{await Promise.race([Su(),new Promise(e=>setTimeout(e,9e4))])}catch(e){console.warn(`[game] fullscreen failed:`,e)}if(G.phase!==e)return}oh()}finally{ih=!1}}}function oh(){lh(),G.phase=`prekick`,G.timer=0,J.blend=0}function sh(){if(!xu())return!1;let e=$.progress.traveler||0;return!(e<=5||e%3!=0||Du()===e)}var ch=Ou;function lh(){let e=Te(0,0);K.pos.set(0,e+Xm,0),K.prevPos.copy(K.pos),K.rotZ=0,K.prevRotZ=0,K.vel.set(0,0,0),K.prevVel.set(0,0,0),K.angVel=0,K.maxAlt=0,tc.position.copy(K.pos),tc.rotation.z=0,tc.rotation.y=0,G.fuel=Np(),G.oxidizerLeft=M.maxOxidizer(G.upgrades),G.oxidizerActive=!1,Va.boost=!1,Uu(),ud(0)}function uh(){let e=Mp(),t=M.launchAngle(G.upgrades),n=ot.flightYaw||0,r=Math.cos(t)*e;K.vel.set(Math.cos(n)*r,Math.sin(t)*e,Math.sin(n)*r),K.prevVel.set(K.vel.x,K.vel.y,K.vel.z),K.rotZ=t,K.prevRotZ=t,K.prevPos.copy(K.pos),tc.rotation.z=t,tc.rotation.y=-n,K.angVel=0,G.phase=`fly`,G.timer=0,km(),Kf(`FLY! 🚀`,w.toastColors.upgrade),Ql(),Sm()}function dh(){G.phase=`landed`,Qm=!1;let e=K.vel.length(),t=K.pos.x,n=K.pos.z,r=Te(t,n),i=1/0;for(let e of yc){if(e.opened)continue;let r=t-e.x,a=n-e.z,o=r*r+a*a,s=Math.sqrt(o);s<i&&(i=s),!e.opened&&o<=z.pickupRadius*z.pickupRadius&&_h(e)}let a=isFinite(i)?i:null;G.timer=0,K.angVel=0,K.pos.y=r+Xm,K.vel.set(0,0,0);let o=Math.max(0,K.pos.x),s=Math.floor(o);s>0&&(G.coins+=s);let c=Math.floor(K.maxAlt);c>0&&(G.cosmoPoints+=c),G.lastDist=o;let l=o>G.best;l&&(G.best=o),l&&Ua.samples.length>=A.minSamplesLimit&&Dm(),Ua.recording=!1,ud(o),ld(),ff(),Sm(),qf(o,l),J.shake=j.shakeOnLand,$l({dist:o,altitude:r,speed:e,nearestChestDist:a}),Uu()}function fh(e){G.phase===`prekick`?Y.position.distanceTo(J.target)<=ot.prekickCamTolerance?(G.timer+=e,G.timer>=ot.prekickDelay&&(G.phase=`windup`,G.timer=0)):G.timer=0:G.phase===`windup`?(G.timer+=e,G.timer>=.3&&(G.phase=`strike`,G.timer=0)):G.phase===`strike`&&(G.timer+=e,G.timer>=.11&&G.phase===`strike`&&uh())}function ph(e){return e!==`forsage`||(G.cards.forsage||0)>=1}function mh(e){let t=0;for(let n of $m)n.family===e&&(t+=G.cards[n.id]||0);return t}function hh(e){return!(e.special||e.once&&(G.cards[e.id]||0)>=1||e.condition&&!ph(e.condition)||mh(e.family)>=z.cardTypeLimit)}function gh(){let e=$m.filter(hh);if(e.length===0)return[];let t=e[Math.floor(Math.random()*e.length)],n=e.filter(e=>e.id!==t.id);return n.length===0?[t]:[t,n[Math.floor(Math.random()*n.length)]]}function _h(e){if(e.opened=!0,G.openedChests.add(e.x),e.group.visible=!1,Pc(e),tu(G.openedChests.size),Pd(),e.type===`forsage`){let e=ke.forsage.levels.length,t=G.cards.forsage||0;if(t<e){let e=$m.find(e=>e.family===`forsage`);if(e){let n=t>=1;G.cards.forsage=t+1,gd(!0),lp([e],()=>{},{isUpgradeOverride:n}),Pu(`forsage`),Sm(),Nd();return}}}let t=gh();t.length===0?(Kf(`Все карточки собраны! 🎉`,w.toastColors.upgrade),Sm()):(lp(t,e=>{G.cards[e.id]=(G.cards[e.id]||0)+1,gd(!0),Sm(),Nd()}),Sm())}function vh(e){let t=$m.find(t=>t.id===e);return t?t.buyFlag===!1?`Покупка недоступна`:!t.buyPrice||t.buyPrice<=0?`Цена не указана`:Ch(e)||(G.gems<t.buyPrice?`Нужно ${t.buyPrice} 💎 (у вас ${G.gems})`:null):`Карточка не найдена`}function yh(e){let t=$m.find(t=>t.id===e);return t?t.sellFlag===!1?`Продажа недоступна`:!t.sellPrice||t.sellPrice<=0?`Цена не указана`:(G.cards[t.id]||0)<=0?`Нет карточек для продажи`:null:`Карточка не найдена`}function bh(e){let t=vh(e);if(t)return{ok:!1,reason:t};let n=$m.find(t=>t.id===e);return!n||!n.buyPrice?{ok:!1,reason:`Карточка не найдена`}:(G.gems-=n.buyPrice,G.cards[n.id]=(G.cards[n.id]||0)+1,G.hasBoughtCard=!0,n.family===`forsage`&&Pu(`forsage`),Sm(),Nd(),{ok:!0})}function xh(e){let t=yh(e);if(t)return{ok:!1,reason:t};let n=$m.find(t=>t.id===e);if(!n||!n.sellPrice)return{ok:!1,reason:`Карточка не найдена`};G.gems+=n.sellPrice;let r=G.cards[n.id]||0;if(G.cards[n.id]=r-1,G.cards[n.id]===0&&delete G.cards[n.id],n.family===`forsage`){Nu();let e=G.abilities.forsage;e&&(e.active=!1,e.activeEnd=0,e.cooldownEnd=0)}return Sm(),Nd(),{ok:!0}}function Sh(e,t){let n=$m.find(t=>t.id===e);if(!n)return null;let r=G.cards[n.id]||0,i=Math.max(0,r+t),a=[];if(n.effects)for(let e of n.effects){let t=e.mult**+r,n=e.mult**+i;Math.abs(t-n)<.001||a.push({stat:e.stat,before:t,after:n})}return{curCount:r,newCount:i,effects:a}}function Ch(e){let t=$m.find(t=>t.id===e);return t?t.special?`"${e}" — special, выдаётся только через фиолетовый сундук`:t.once&&(G.cards[t.id]||0)>=1?`"${e}" — once, уже получена`:t.condition&&!ph(t.condition)?`"${e}" — не выполнено условие "${t.condition}"`:mh(t.family)>=z.cardTypeLimit?`Семейство "${t.family}" уже на лимите ${z.cardTypeLimit}`:null:`Карточка "${e}" не найдена`}function wh(e){Hu(e),fh(e),Vm(e),qm(e),Wm()}function Th(e,t,n=Ha.gameTime){if(eh.lerpVectors(K.prevPos,K.pos,t),th.lerpVectors(K.prevVel,K.vel,t),nh=K.prevRotZ+(K.rotZ-K.prevRotZ)*t,Ym(e),Hm(e,nh,eh,th),Jm(t),Gc(e,eh.x,eh.z),ul(e),G.phase===`fly`&&Wa.samples){let e=Math.max(0,n-Ua.startTime);_l(Wa.samples,e)}else _l(null,0);Um(eh.x,eh.z),G.phase===`fly`&&(ld(),ud(eh.x),pd(G.fuel,Np()))}function Eh(){Bm(dh),Cm(),Om(),lh(),tc.position.copy(K.pos),G.fuel=Np(),ld(),ff(),Pd()}function Dh(){return!(!xu()||G.phase!==`landed`||G.lastDist<Zm||Qm)}async function Oh(){if(!Dh())return!1;if(Qm=!0,!await Cu())return Qm=!1,!1;let e=Math.floor(G.lastDist);return G.coins+=e,ld(),Kf(`+${e} 💲 (×2)`,w.toastColors.upgrade),Sm(),!0}var kh=!1,Ah=`all`,jh=!1,Mh=null;function Nh(){if(kh)return;kh=!0;let e=document.getElementById(`achievementsPanel`),t=document.getElementById(`achievementsClose`),n=document.querySelectorAll(`.ach-tab`);t&&t.addEventListener(`click`,e=>{e.stopPropagation(),Fh()}),e&&e.addEventListener(`click`,t=>{t.target===e&&Fh()}),n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.tab;(t===`all`||t===`progress`||t===`done`)&&(Ah=t),zh()})})}function Ph(){let e=document.getElementById(`achievementsPanel`);e&&e.classList.add(`on`),jh=!0,zh(),Ih()}function Fh(){let e=document.getElementById(`achievementsPanel`);e&&e.classList.remove(`on`),jh=!1,Lh()}function Ih(){Mh||=setInterval(()=>{jh&&zh()},1e3)}function Lh(){Mh&&=(clearInterval(Mh),null)}function Rh(){return Ll.map(e=>{let t=$.unlocked.has(e.key),n=Gl(e.key);if(e.steps){let r=e.steps,i=r.filter((t,n)=>$.stepUnlocked.has(e.key+`:`+n)).length;return{def:e,unlocked:t,failed:n,steps:r,doneCount:i,total:r.length,ratio:i/r.length}}let r=e.target||0,i=$.progress[e.key]||0,a=r>0?Math.min(i,r):i;return{def:e,unlocked:t,failed:n,cur:a,target:r,ratio:r>0?a/r:+!!t}})}function zh(){let e=document.getElementById(`achList`);if(!e)return;let t=document.getElementById(`achSessionTimer`);t&&(t.textContent=`Времени от начала забега: ${Jh(Ha.totalPlaytime+Ha.gameTime)}`);let n=e.scrollTop,r=Rh(),i;i=Ah===`done`?r.filter(e=>e.unlocked):Ah===`progress`?r.filter(e=>!e.unlocked&&!e.failed):r;let a=e=>e.unlocked?2:e.failed?3:e.ratio>0?0:1;i.sort((e,t)=>{let n=a(e),r=a(t);return n===r?t.ratio-e.ratio:n-r}),e.innerHTML=``;for(let t of i)e.appendChild(Bh(t));e.scrollTop=n}function Bh(e){let{def:t,unlocked:n,failed:r}=e,i=document.createElement(`div`),a=[`ach-row`,`tier-`+t.tier];if(n&&a.push(`unlocked`),r&&a.push(`failed`),i.className=a.join(` `),`steps`in e)return i.innerHTML=`
      <div class="ach-icon">${t.icon}</div>
      <div class="ach-main">
        <div class="ach-name">
          ${t.name}
          <span class="ach-count">${e.doneCount}/${e.total}</span>
        </div>
        <div class="ach-desc">${t.desc}</div>
        ${n?Hh(e.steps):Vh(e)}
      </div>`,i;let o=e.target>0,s=o?Math.min(100,e.cur/e.target*100):n?100:0,c=``;n&&o?c=`${Math.floor(e.cur)} / ${Math.floor(e.target)} - ✓ Выполнено`:o?c=Gh(t,e.cur,e.target):n&&(c=`✓ Выполнено`);let l=``;return r?l=Kl(t.key)??`Провалено`:t.timeLimit!=null&&!n&&$.startTimes[t.key]&&(l=qh(Wl(t.key))),i.innerHTML=`
    <div class="ach-icon">${t.icon}</div>
    <div class="ach-main">
      <div class="ach-name">${t.name}</div>
      <div class="ach-desc">${t.desc}</div>
      ${o&&!n?`<div class="ach-track"><div class="ach-fill" style="width:${s.toFixed(1)}%"></div></div>`:``}
      ${c||l?`<div class="ach-progress${n?` done`:``}">${c}${c&&l?` · `:``}${l}</div>`:``}
    </div>`,i}function Vh(e){let t=e.def,n=$.progress[t.key]||0,r=e.steps.findIndex((e,n)=>!$.stepUnlocked.has(t.key+`:`+n));r===-1&&(r=e.steps.length-1);let i=e.steps[r],a=$.stepUnlocked.has(t.key+`:`+r),o=r>0?e.steps[r-1].target:0,s=Math.max(1,i.target-o),c=(a?1:Math.max(0,Math.min(1,(n-o)/s)))*100,l=Uh(t,Math.min(n,i.target),i.target);return`
    <div class="ach-steps">
      <div class="ach-step${a?` done`:``}">
        <div class="ach-step-head">
          <span class="ach-step-label">${i.label}</span>
          <span class="ach-step-value">${a?`✓ `:``}${l}</span>
        </div>
        <div class="ach-step-track">
          <div class="ach-step-fill" style="width:${c.toFixed(1)}%"></div>
        </div>
      </div>
    </div>`}function Hh(e){let t=``;for(let n=0;n<e.length;n++)t+=`
      <div class="ach-step-done">
        <span class="ach-step-done-label">${e[n].label}</span>
        <span class="ach-step-done-mark">✓ Выполнено</span>
      </div>`;return`<div class="ach-steps-done">${t}</div>`}function Uh(e,t,n){return e.unit===`m`?`${Wh(t)} / ${Wh(n)}`:`${Math.floor(t)} / ${Math.floor(n)} раз`}function Wh(e){if(e<1e3)return Math.round(e)+` м`;let t=e/1e3;return(t%1==0?t.toFixed(0):t.toFixed(1))+` км`}function Gh(e,t,n){return e.unit===`m`?`${Kh(t)} / ${Kh(n)}`:`${Math.floor(t)} / ${Math.floor(n)}`}function Kh(e){return e<1e3?Math.round(e)+` м`:(e/1e3).toFixed(0)+` км`}function qh(e){let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,`0`)}`}function Jh(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}:${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`:`${n}:${String(r).padStart(2,`0`)}`}var Yh=`rocket_news_read_count_v1`,Xh=!1,Zh=null;function Qh(){if(Xh)return;Xh=!0;let e=document.getElementById(`newsPanel`),t=document.getElementById(`newsClose`),n=document.getElementById(`newsBtn`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),$h()}),t&&t.addEventListener(`click`,e=>{e.stopPropagation(),eg()}),e&&e.addEventListener(`click`,t=>{t.target===e&&eg()}),tg()}async function $h(){let e=document.getElementById(`newsPanel`),t=document.getElementById(`newsList`);if(e&&t){if(e.classList.add(`on`),vd(!1),!Zh){t.innerHTML=`<div class="news-loading">Загрузка новостей...</div>`;try{await ng()}catch{t.innerHTML=`<div class="news-error">Не удалось загрузить новости 😢</div>`;return}}t.innerHTML=Zh||`<div class="news-empty">Пока нет новостей</div>`}}function eg(){let e=document.getElementById(`newsPanel`);e&&e.classList.remove(`on`)}async function tg(){try{let e=await fetch(`./data/News.md`);if(!e.ok)return;((await e.text()).match(/- \[/g)||[]).length>parseInt(localStorage.getItem(Yh)||`0`,10)&&vd(!0)}catch(e){console.warn(`[News] не удалось проверить новые записи:`,e)}}async function ng(){let e=await fetch(`./data/News.md`);if(!e.ok)throw Error(`File not found`);let t=await e.text(),n=(t.match(/- \[/g)||[]).length;localStorage.setItem(Yh,String(n)),Zh=rg(t)}function rg(e){e=e.replace(/\r\n?/g,`
`);let t=/- \[(.*?)\] (.*?)\n([\s\S]*?)(?=\n- \[|$)/g,n=[],r=[],i;for(;(i=t.exec(e))!==null;){let e=i[1].trim(),t={date:e,title:i[2].trim(),bodyRaw:i[3].trim()};e.toUpperCase()===`DEV`?n.push(t):r.push(t)}r.reverse();let a=``;for(let e of n)a+=ag(e.title,ig(e.bodyRaw));for(let e of r)a+=og(e.date,e.title,ig(e.bodyRaw));return a||`<div class="news-empty">Пока нет новостей</div>`}function ig(e){if(!e)return``;let t=e.split(`
`).map(e=>e.trim()).filter(Boolean),n=[],r=[];for(let e of t){let t=e.match(/^\d+\.\s+(.*)/);t?r.push(t[1]):n.push(e)}let i=``;return n.length>0&&(i+=`<p class="news-desc">${n.join(` `)}</p>`),r.length>0&&(i+=`<ol class="news-list-items">${r.map(e=>`<li>${e}</li>`).join(``)}</ol>`),i}function ag(e,t){return`
    <div class="news-dev">
      <div class="news-dev-badge">🚧 В РАЗРАБОТКЕ</div>
      <div class="news-dev-title">${e}</div>
      ${t?`<div class="news-dev-body">${t}</div>`:``}
    </div>
  `}function og(e,t,n){return`
    <div class="news-item">
      <div class="news-item-date">${e}</div>
      <div class="news-item-title">${t}</div>
      ${n?`<div class="news-item-body">${n}</div>`:``}
    </div>
  `}var sg=d,cg=!1,lg=new V(sg.zenith),ug=new V(sg.horizon),dg=new F(...k.hazeColor),fg=null,pg=null;function mg(){let e=sg.stars.count,t=sg.stars.radius,n=new Float32Array(e*3),r=new Float32Array(e),i=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e),s=Je((St^1464312769)>>>0);for(let c=0;c<e;c++){let e=s()*2-1,l=s()*Math.PI*2,u=Math.sqrt(1-e*e);n[c*3+0]=u*Math.cos(l)*t,n[c*3+1]=e*t,n[c*3+2]=u*Math.sin(l)*t,r[c]=s()*Math.PI*2,i[c]=sg.stars.twinkleSpeed*(.5+s()),a[c]=.4+s()*.6,o[c]=.6+s()*1.2}let c=new p;return c.setAttribute(`position`,new g(n,3)),c.setAttribute(`aPhase`,new g(r,1)),c.setAttribute(`aSpeed`,new g(i,1)),c.setAttribute(`aBright`,new g(a,1)),c.setAttribute(`aSize`,new g(o,1)),c}function hg(){return new ft({uniforms:{uTime:{value:0},uSize:{value:sg.stars.size},uPixelRatio:{value:Math.min(devicePixelRatio,Qt.pixelRatioCap)},uOpacity:{value:0},uColor:{value:new V(sg.stars.color)},uTwinkleAmp:{value:sg.stars.twinkleAmp}},vertexShader:`
      attribute float aPhase;
      attribute float aSpeed;
      attribute float aBright;
      attribute float aSize;
      uniform float uTime;
      uniform float uSize;
      uniform float uPixelRatio;
      uniform float uTwinkleAmp;
      varying float vBright;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.5 + 0.5 * sin(uTime * aSpeed + aPhase);
        float intensity = 1.0 - uTwinkleAmp * (1.0 - tw);
        vBright = aBright * intensity;
        gl_PointSize = uSize * aSize * uPixelRatio;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vBright;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.1, d) * vBright * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,toneMapped:!1,fog:!1})}var gg=null,_g=null,vg=new Map,yg=new Set,bg=new h,xg=new V;function Sg(e,t,n){let r=e+`,`+t+`,`+n,i=vg.get(r);if(i)return i;let a=(Ve(e+20907,t+35901)^Ve(n+16017,20285)^St)>>>0,o=Je(a),s=sg.spheres.cellSize,c=sg.spheres.perCell,l=sg.spheres.radius[0],u=sg.spheres.radius[1],d=sg.spheres.colors.length,f=[];for(let r=0;r<c;r++)f.push({x:(e+o())*s,y:(t+o())*s,z:(n+o())*s,r:l+o()*(u-l),colorIdx:Math.floor(o()*d),phase:o()*Math.PI*2});return vg.set(r,f),f}function Cg(){let e=new dt(1,sg.spheres.geoDetail),t=sg.spheres.maxCount,n=new Float32Array(t*3),r=new Float32Array(t);return e.setAttribute(`aColor`,new qe(n,3)),e.setAttribute(`aPhase`,new qe(r,1)),e}function wg(){return new ft({uniforms:{uTime:{value:0},uOpacity:{value:0},uPulseAmp:{value:sg.spheres.pulseAmp},uPulseSpeed:{value:sg.spheres.pulseSpeed},uNearFadeDist:{value:sg.spheres.nearFadeDist},uEdgeFalloff:{value:sg.spheres.edgeFalloff}},vertexShader:`
      attribute vec3 aColor;
      attribute float aPhase;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uPulseAmp;
      uniform float uPulseSpeed;
      uniform float uNearFadeDist;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFacing;
      void main() {
        vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vec3 wpos = worldPos.xyz;

        // Нормаль в мире. instanceMatrix уже содержит равномерный масштаб
        // (мы делаем _dummy.scale.setScalar(s.r)), поэтому normalize
        // восстанавливает корректное направление.
        vec3 worldNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
        vec3 toCam = normalize(cameraPosition - wpos);
        vFacing = max(dot(worldNormal, toCam), 0.0);

        float distToCam = distance(wpos, cameraPosition);
        float nearFade = clamp(distToCam / uNearFadeDist, 0.0, 1.0);
        float pulse = 1.0 - uPulseAmp * 0.5 * (1.0 - sin(uTime * uPulseSpeed + aPhase));
        vAlpha = uOpacity * nearFade * pulse;
        vColor = aColor;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }`,fragmentShader:`
      uniform float uEdgeFalloff;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFacing;
      void main() {
        // Яркий центр → прозрачный край.
        float edge = pow(vFacing, uEdgeFalloff);
        float a = vAlpha * edge;
        if (a < 0.005) discard;
        gl_FragColor = vec4(vColor, a);
      }`,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,toneMapped:!1,fog:!1})}function Tg(){if(!gg)return;let e=sg.spheres.maxCount,t=sg.spheres.cellSize,n=sg.spheres.colors,r=sg.spheres.colorJitter,i=Y.position,a=yg.size*sg.spheres.perCell,o;if(a>e){let e=[];for(let n of yg){let r=n.split(`,`),a=(+r[0]+.5)*t-i.x,o=(+r[1]+.5)*t-i.y,s=(+r[2]+.5)*t-i.z;e.push({key:n,d2:a*a+o*o+s*s})}e.sort((e,t)=>e.d2-t.d2),o=e.map(e=>e.key)}else o=yg;let s=gg.geometry.getAttribute(`aColor`),c=gg.geometry.getAttribute(`aPhase`),l=s.array,u=c.array,d=0;outer:for(let t of o){let i=vg.get(t);if(i)for(let t=0;t<i.length;t++){if(d>=e)break outer;let a=i[t];bg.position.set(a.x,a.y,a.z),bg.scale.setScalar(a.r),bg.updateMatrix(),gg.setMatrixAt(d,bg.matrix),xg.setHex(n[a.colorIdx]);let o=1+Math.sin(a.phase*7.13)*.5*r;l[d*3+0]=xg.r*o,l[d*3+1]=xg.g*o,l[d*3+2]=xg.b*o,u[d]=a.phase,d++}}gg.count=d,gg.instanceMatrix.needsUpdate=!0,s.needsUpdate=!0,c.needsUpdate=!0}function Eg(e,t,n){let r=sg.spheres.cellSize,i=sg.spheres.loadRadius,a=Math.floor(e/r),o=Math.floor(t/r),s=Math.floor(n/r);for(let e=-i;e<=i;e++)for(let t=-i;t<=i;t++)for(let n=-i;n<=i;n++){let r=a+e+`,`+(o+t)+`,`+(s+n);yg.has(r)||(Sg(a+e,o+t,s+n),yg.add(r))}for(let e of yg){let t=e.split(`,`);(Math.abs(+t[0]-a)>i||Math.abs(+t[1]-o)>i||Math.abs(+t[2]-s)>i)&&(yg.delete(e),vg.delete(e))}}function Dg(){cg||(cg=!0,pg=hg(),fg=new be(mg(),pg),fg.frustumCulled=!1,fg.renderOrder=1,fg.visible=!1,X.add(fg),_g=wg(),gg=new Ot(Cg(),_g,sg.spheres.maxCount),gg.frustumCulled=!1,gg.renderOrder=2,gg.instanceMatrix.setUsage(S),gg.count=0,gg.visible=!1,X.add(gg))}var Og={x:NaN,y:NaN,z:NaN};function kg(){if(!cg||!fg||!pg||!gg||!_g)return;let e=K.pos.y,t=sg.startAltitude,n=sg.blendToAltitude,r=kt(t,n,e);if(Qa.lerp(lg,r),$a.lerp(ug,r),X.fog.color.copy($a),to.copy(dg).multiplyScalar(1-r),qa.intensity=qa.intensity*(1-r)+sg.sunIntensity*r,Za.intensity=Za.intensity*(1-r)+sg.hemiIntensity*r,fg.visible=r>.001,fg.visible&&(fg.position.copy(Y.position),pg.uniforms.uTime.value=Ha.gameTime,pg.uniforms.uOpacity.value=r*sg.stars.opacity),gg.visible=r>.001,gg.visible){_g.uniforms.uTime.value=Ha.gameTime,_g.uniforms.uOpacity.value=r*sg.spheres.opacity;let e=sg.spheres.cellSize,t=Math.floor(Y.position.x/e),n=Math.floor(Y.position.y/e),i=Math.floor(Y.position.z/e);(t!==Og.x||n!==Og.y||i!==Og.z)&&(Eg(Y.position.x,Y.position.y,Y.position.z),Tg(),Og.x=t,Og.y=n,Og.z=i)}}var Ag=class extends lt{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new ze(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(e){let n=i.parse(JSON.parse(e));t&&t(n)},n,r)}parse(e){return new jg(e)}},jg=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=Mg(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function Mg(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=Ng(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function Ng(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new fe,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}var Pg=class e extends ne{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}toJSON(){return super.toJSON()}static fromJSON(t){let n=t.options;return n.font=new jg(n.font.data),new e(n.text,n)}},Fg=ee,Ig=null,Lg=!1;async function Rg(){if(!Fg.enabled||Lg)return;Lg=!0;let e;try{e=await zg(Fg.fontUrl)}catch(e){console.warn(`[sign] не удалось загрузить шрифт:`,e);return}try{Bg(e),console.log(`[sign] надпись построена`)}catch(e){console.error(`[sign] ошибка построения:`,e)}}function zg(e){return new Promise((t,n)=>{new Ag().load(e,t,void 0,n)})}function Bg(e){let t=Fg.position.topY-Fg.position.bottomY,n={font:e,size:100,height:100*Fg.depthRatio,curveSegments:Fg.curveSegments,bevelEnabled:Fg.bevel.enabled,bevelThickness:100*Fg.bevel.thicknessRatio,bevelSize:100*Fg.bevel.sizeRatio,bevelSegments:Fg.bevel.segments},r=new Pg(Fg.text.line1,n),i=new Pg(Fg.text.line2,n);r.computeBoundingBox(),i.computeBoundingBox();let a=r.boundingBox,o=i.boundingBox,s=a.max.y-a.min.y,c=o.max.y-o.min.y,l=Math.max(s,c)*Fg.lineGapRatio,u=t/(c+l+s);i.translate(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2),r.translate(-(a.max.x+a.min.x)/2,c+l-a.min.y,-(a.max.z+a.min.z)/2),r.scale(u,u,u),i.scale(u,u,u),Vg(r),Vg(i);let d=new rn({vertexColors:!0,toneMapped:!1,fog:Fg.fog,side:0});Ig=new zt,Ig.add(new Kt(r,d)),Ig.add(new Kt(i,d)),Ig.position.set(Fg.position.x,Fg.position.bottomY,Fg.position.z??0),Ig.rotation.y=-Math.PI/2,X.add(Ig)}function Vg(e){e.attributes.normal||e.computeVertexNormals();let t=e.attributes.position,n=e.attributes.normal,r=t.count,i=new Float32Array(r*3),a=new F(...Fg.bakedLightDir).normalize(),o=new V(Fg.colors.shadow),s=new V(Fg.colors.base),c=new V(Fg.colors.highlight),l=Fg.bakedAmbient,u=Fg.bakedContrast;for(let e=0;e<r;e++){let t=n.getX(e),r=n.getY(e),d=n.getZ(e),f=t*a.x+r*a.y+d*a.z,p=Math.max(0,f);p=l+p*(1-l),p**=+u;let m,h,g;if(p<.5){let e=p/.5;m=o.r+(s.r-o.r)*e,h=o.g+(s.g-o.g)*e,g=o.b+(s.b-o.b)*e}else{let e=(p-.5)/.5;m=s.r+(c.r-s.r)*e,h=s.g+(c.g-s.g)*e,g=s.b+(c.b-s.b)*e}i[e*3]=m,i[e*3+1]=h,i[e*3+2]=g}e.setAttribute(`color`,new g(i,3))}var Hg=sn,Ug=[],Wg=0,Gg=0,Kg=!1,qg=null,Jg=null,Yg=null,Xg=!1;function Zg({onAverage:e,onLow:t}={}){Jg=e??null,Yg=t??null,Ug=[],Wg=performance.now(),Gg=Wg,qg=null,Kg=!0,Xg||(Xg=!0,document.addEventListener(`visibilitychange`,e_))}function Qg(e){if(!Kg)return;if(document.hidden){Ug.length=0;return}if(e<=0||e>1e3)return;let t=performance.now();Ug.push({t,dtMs:e});let n=t-Hg.windowMs;for(;Ug.length>0&&Ug[0].t<n;)Ug.shift();t-Gg>=Hg.checkIntervalMs&&(Gg=t,$g())}function $g(){if(performance.now()-Wg<Hg.warmupMs||Ug.length<Hg.minSamples)return;let e=Bt(Ug,e=>e.dtMs);if(e<=0)return;let t=1e3/e;Jg?.(t);let n=null;t<Hg.criticalThreshold?n=`critical`:t<Hg.warnThreshold&&(n=`warn`),n&&n!==qg?(qg=n,Yg?.(t,n)):!n&&qg&&(qg=null)}function e_(){document.hidden?Ug.length=0:Gg=performance.now()+1e3}var t_=`http://www.w3.org/2000/svg`;function n_(){let e=document.createElementNS(t_,`g`);e.setAttribute(`class`,`tut-rocket`);let t=document.createElementNS(t_,`g`);t.setAttribute(`class`,`tut-flame`);let n=document.createElementNS(t_,`polygon`);n.setAttribute(`points`,`-22,-4.5 -38,0 -22,4.5`),n.setAttribute(`fill`,`#ffb703`),n.setAttribute(`opacity`,`0.9`),t.appendChild(n);let r=document.createElementNS(t_,`polygon`);r.setAttribute(`points`,`-22,-2.2 -32,0 -22,2.2`),r.setAttribute(`fill`,`#fff6d0`),r.setAttribute(`opacity`,`0.95`),t.appendChild(r),e.appendChild(t);let i=document.createElementNS(t_,`polygon`);i.setAttribute(`points`,`-22,-3 -22,3 -18,2.4 -18,-2.4`),i.setAttribute(`fill`,`#2b2233`),e.appendChild(i);let a=document.createElementNS(t_,`polygon`);a.setAttribute(`points`,`-17,-5 -22,-11 -13,-5`),a.setAttribute(`fill`,`#e63946`),e.appendChild(a);let o=document.createElementNS(t_,`polygon`);o.setAttribute(`points`,`-17,5 -22,11 -13,5`),o.setAttribute(`fill`,`#e63946`),e.appendChild(o);let s=document.createElementNS(t_,`rect`);s.setAttribute(`x`,`-18`),s.setAttribute(`y`,`-5`),s.setAttribute(`width`,`30`),s.setAttribute(`height`,`10`),s.setAttribute(`rx`,`1.5`),s.setAttribute(`fill`,`#f2f4f8`),s.setAttribute(`stroke`,`rgba(0,0,0,0.18)`),s.setAttribute(`stroke-width`,`0.5`),e.appendChild(s);let c=document.createElementNS(t_,`polygon`);c.setAttribute(`points`,`12,-5 12,5 24,0`),c.setAttribute(`fill`,`#e63946`),e.appendChild(c);let l=document.createElementNS(t_,`circle`);return l.setAttribute(`cx`,`2`),l.setAttribute(`cy`,`0`),l.setAttribute(`r`,`2.4`),l.setAttribute(`fill`,`#2b3a55`),l.setAttribute(`stroke`,`#8a96b0`),l.setAttribute(`stroke-width`,`0.6`),e.appendChild(l),{group:e,flame:t}}var r_={power:1,aero:2,fuel:4,thrust:7},i_={noseLiftEnabled:!0,noseLiftAngle:50,boostThrottle:`always`,forsageLevel:0},a_=`http://www.w3.org/2000/svg`,o_=300,s_=220,c_=20,l_=null,u_=null,d_=null,f_=null,p_=null,m_=null,h_=null,g_=!1,__=0,v_=0,y_=1,b_=1,x_=!1,S_=0,C_=0;function w_(e){if(d_){d_.parentNode||e.appendChild(d_);return}let t=document.createElementNS(a_,`svg`);t.setAttribute(`viewBox`,`0 0 ${o_} ${s_}`),t.setAttribute(`class`,`tut-trajectory-svg`),d_=t,e.appendChild(t)}function T_(){if(l_)return!0;if(u_)return!1;try{return l_=Ge(r_,{},i_),E_(),D_(),!0}catch(e){return u_=String(e?.message??e),console.warn(`[trajectoryDemo] simulate() failed:`,e),!1}}function E_(){if(!l_)return;let e=1/0,t=-1/0,n=1/0,r=-1/0;for(let[i,a]of l_.trajectory)i<e&&(e=i),i>t&&(t=i),a<n&&(n=a),a>r&&(r=a);__=e,v_=n,y_=260/Math.max(1,t-e),b_=180/Math.max(1,r-n)}function D_(){if(!d_||!l_||g_)return;g_=!0;let e=document.createElementNS(a_,`path`);e.setAttribute(`class`,`tut-path-future`),e.setAttribute(`fill`,`none`),d_.appendChild(e);let t=document.createElementNS(a_,`path`);t.setAttribute(`class`,`tut-path-passed`),t.setAttribute(`fill`,`none`),d_.appendChild(t);let n=M_(l_.trajectory[0][0],l_.trajectory[0][1]),r=l_.trajectory[l_.trajectory.length-1],i=M_(r[0],r[1]),a=document.createElementNS(a_,`circle`);a.setAttribute(`cx`,n.x.toFixed(1)),a.setAttribute(`cy`,n.y.toFixed(1)),a.setAttribute(`r`,`4`),a.setAttribute(`fill`,`#7dffa0`),d_.appendChild(a);let o=document.createElementNS(a_,`circle`);o.setAttribute(`cx`,i.x.toFixed(1)),o.setAttribute(`cy`,i.y.toFixed(1)),o.setAttribute(`r`,`4`),o.setAttribute(`fill`,`#ff7a7a`),d_.appendChild(o);let{group:s,flame:c}=n_();d_.appendChild(s),f_=t,p_=e,m_=s,h_=c,f_=t,p_=e,m_=s,h_=c}function O_(){d_&&T_()&&(cancelAnimationFrame(S_),C_=0,x_=!0,S_=requestAnimationFrame(j_))}function k_(){x_&&(x_=!1,cancelAnimationFrame(S_),S_=0)}function A_(){d_&&T_()&&(k_(),P_(0))}function j_(e){if(!x_||!l_)return;C_===0&&(C_=e);let t=(e-C_)/1e3,n=Math.max(.01,l_.time),r=Math.min(1,t/n),i=l_.trajectory.length,a=r*(i-1),o=Math.floor(a);P_(o,Math.min(o+1,i-1),a-o),r>=1?(x_=!1,S_=0):S_=requestAnimationFrame(j_)}function M_(e,t){return{x:c_+(e-__)*y_,y:200-(t-v_)*b_}}function N_(e,t){if(!l_||e>=t)return``;let n=l_.trajectory,r=[];for(let i=e;i<=t;i++){let{x:t,y:a}=M_(n[i][0],n[i][1]);r.push(i===e?`M ${t.toFixed(1)} ${a.toFixed(1)}`:`L ${t.toFixed(1)} ${a.toFixed(1)}`)}return r.join(` `)}function P_(e,t,n){if(!l_||!f_||!p_||!m_||!h_)return;let r=l_.trajectory,i=r.length-1;f_.setAttribute(`d`,N_(0,e)),f_.setAttribute(`stroke`,`#ffd75e`),f_.setAttribute(`stroke-width`,`2.5`),f_.setAttribute(`stroke-linecap`,`round`),f_.setAttribute(`stroke-linejoin`,`round`),p_.setAttribute(`d`,N_(e,i)),p_.setAttribute(`stroke`,`#ffd75e`),p_.setAttribute(`stroke-width`,`1.5`),p_.setAttribute(`stroke-dasharray`,`4 6`),p_.setAttribute(`opacity`,`0.4`),p_.setAttribute(`stroke-linecap`,`round`),p_.setAttribute(`stroke-linejoin`,`round`);let a,o,s,c;if(t!==void 0&&n!==void 0&&t>e){let i=r[e][0],l=r[e][1],u=r[t][0],d=r[t][1];a=i+(u-i)*n,o=l+(d-l)*n,s=l_.angles[e]+(l_.angles[t]-l_.angles[e])*n,c=l_.thrustMask[e]}else a=r[e][0],o=r[e][1],s=l_.angles[e],c=l_.thrustMask[e];let l=M_(a,o),u=-s*180/Math.PI;m_.setAttribute(`transform`,`translate(${l.x.toFixed(1)} ${l.y.toFixed(1)}) rotate(${u.toFixed(1)}) scale(0.55)`),h_.style.display=c?``:`none`}var F_=`http://www.w3.org/2000/svg`,I_=340,L_=280,R_=130,z_=160,B_=120,V_=54,H_=20*Math.PI/180,U_=.05,W_=`#7dffa0`,G_=`#ffd75e`,K_=`#ff7a7a`,q_=null,J_=null,Y_=null,X_=null,Z_=null,Q_=!1,$_=0,ev=0,tv=H_,nv=0;function rv(e){return e>=30&&e<=40?W_:e>=10&&e<=60?G_:K_}function iv(e){if(q_){q_.parentNode||e.appendChild(q_);return}let t=document.createElementNS(F_,`svg`);t.setAttribute(`viewBox`,`0 0 ${I_} ${L_}`),t.setAttribute(`class`,`tut-sprite-svg`);let n=document.createElementNS(F_,`line`);n.setAttribute(`x1`,`30`),n.setAttribute(`y1`,String(z_)),n.setAttribute(`x2`,`310`),n.setAttribute(`y2`,String(z_)),n.setAttribute(`stroke`,`rgba(143, 168, 232, 0.4)`),n.setAttribute(`stroke-width`,`1.5`),n.setAttribute(`stroke-dasharray`,`6 5`),t.appendChild(n);let r=document.createElementNS(F_,`line`);r.setAttribute(`x1`,String(R_)),r.setAttribute(`y1`,String(z_)),r.setAttribute(`x2`,`250`),r.setAttribute(`y2`,String(z_)),r.setAttribute(`stroke`,G_),r.setAttribute(`stroke-width`,`2.5`),r.setAttribute(`stroke-linecap`,`round`),t.appendChild(r);let i=document.createElementNS(F_,`path`);i.setAttribute(`fill`,`none`),i.setAttribute(`stroke`,G_),i.setAttribute(`stroke-width`,`1.5`),i.setAttribute(`opacity`,`0.75`),t.appendChild(i);let a=document.createElementNS(F_,`text`);a.setAttribute(`fill`,G_),a.setAttribute(`font-size`,`20`),a.setAttribute(`font-weight`,`900`),a.setAttribute(`font-family`,`inherit`),a.setAttribute(`text-anchor`,`middle`),a.setAttribute(`dominant-baseline`,`middle`),t.appendChild(a);let{group:o}=n_();t.appendChild(o),e.appendChild(t),q_=t,J_=o,Y_=r,X_=i,Z_=a,lv()}function av(){Q_||(Q_=!0,ev=0,$_=requestAnimationFrame(cv))}function ov(){Q_&&(Q_=!1,$_&&cancelAnimationFrame($_),$_=0)}function sv(){ov(),tv=H_,nv=0,lv()}function cv(e){if(!Q_)return;ev===0&&(ev=e);let t=Math.min(U_,(e-ev)/1e3);ev=e;let n=Va.keys.W||Va.touch.W,r=Va.keys.S||Va.touch.S,i=!!n-+!!r,a=ot.angAcc,o=ot.angDamp,s=ot.angMax;nv+=i*a*t,nv-=nv*o*t,nv>s&&(nv=s),nv<-s&&(nv=-s),tv+=nv*t,lv(),$_=requestAnimationFrame(cv)}function lv(){if(!J_||!Y_||!X_||!Z_)return;let e=tv*180/Math.PI%360;e>180&&(e-=360),e<=-180&&(e+=360);let t=rv(e);J_.setAttribute(`transform`,`translate(${R_} ${z_}) rotate(${(-e).toFixed(2)})`);let n=e*Math.PI/180,r=R_+Math.cos(n)*B_,i=z_-Math.sin(n)*B_;Y_.setAttribute(`x2`,r.toFixed(1)),Y_.setAttribute(`y2`,i.toFixed(1)),Y_.setAttribute(`stroke`,t);let a=R_+Math.cos(n)*V_,o=z_-Math.sin(n)*V_,s=+(Math.abs(n)>Math.PI),c=n>=0?0:1;X_.setAttribute(`d`,`M 184 ${z_} A ${V_} ${V_} 0 ${s} ${c} ${a.toFixed(1)} ${o.toFixed(1)}`),X_.setAttribute(`stroke`,t);let l=n/2,u=R_+Math.cos(l)*76,d=z_-Math.sin(l)*76;Z_.setAttribute(`x`,u.toFixed(1)),Z_.setAttribute(`y`,d.toFixed(1)),Z_.textContent=`${Math.round(e)}°`,Z_.setAttribute(`fill`,t)}var uv=`<div class="tut-slide">\r
  <h2 style="font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 1px">\r
    Как управлять ракетой 🚀\r
  </h2>\r
  <p\r
    data-device="desktop"\r
    style="font-size: 16px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    3 шага до первого полёта! Нажми «Далее», чтобы начать.\r
  </p>\r
  <p\r
    data-device="mobile"\r
    style="font-size: 15px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    3 шага до первого полёта! Свайпай влево, чтобы начать.\r
  </p>\r
  <hr />\r
  <div\r
    data-device="desktop"\r
    style="display: flex; justify-content: center; align-items: center; flex: 1; margin-top: 10px"\r
  >\r
    <button type="button" class="tut-start-btn" aria-label="Далее">\r
      <span class="tut-start-btn-text">Далее</span>\r
    </button>\r
  </div>\r
</div>\r
`,dv=`<div class="tut-slide">\r
  <h2 style="font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 1px">\r
    Управление носом\r
  </h2>\r
  <p\r
    data-device="desktop"\r
    style="font-size: 15px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    Держи клавишу — нос поворачивается. Отпусти — плавно остановится.\r
  </p>\r
  <p\r
    data-device="mobile"\r
    style="font-size: 14px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    Кнопки ▲ и ▼ внизу слева. Держи — нос поворачивается. Отпусти — плавно остановится.\r
  </p>\r
\r
  <p style="font-size: 16px; line-height: 1.6; color: #a2b19f; margin: 0">\r
    Твоя задача выравнивать и держать ракету на <b style="color: #41c462">30-40°</b> относительно\r
    горизонта. <span style="color: #fff; font-weight: 700">ПРОБУЙ</span>\r
  </p>\r
  <hr />\r
\r
  <div\r
    data-device="desktop"\r
    style="display: flex; gap: 32px; justify-content: center; margin-top: 16px; flex-wrap: wrap"\r
  >\r
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px">\r
      <div class="tut-keycap" data-key="W">W</div>\r
      <div style="font-size: 13px; font-weight: 700">Нос вверх</div>\r
    </div>\r
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px">\r
      <div class="tut-keycap" data-key="S">S</div>\r
      <div style="font-size: 13px; font-weight: 700">Нос вниз</div>\r
    </div>\r
  </div>\r
  <div\r
    id="tutSpriteHolder"\r
    style="\r
      flex: 1;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      min-height: 100px;\r
      max-height: 240px;\r
    "\r
  ></div>\r
</div>\r
`,fv=`<div class="tut-slide">\r
  <h2 style="font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 1px">\r
    Как меняется траектория\r
  </h2>\r
  <style>\r
    @keyframes gradient-animation {\r
      0% {\r
        background-position: 0% 50%;\r
      }\r
      50% {\r
        background-position: 100% 50%;\r
      }\r
      100% {\r
        background-position: 0% 50%;\r
      }\r
    }\r
  </style>\r
\r
  <p style="font-size: 15px; line-height: 1.6; color: var(--tut-muted); margin: 0">\r
    Твоя задача после пуска аккуратно преподнять нос ракеты. <br />А затем держать его вдоль\r
    траетории. --\r
    <b\r
      style="\r
        background: linear-gradient(90deg, #4cdf4a, #fff279, #4cdf4a);\r
        background-size: 200% auto;\r
        -webkit-background-clip: text;\r
        -webkit-text-fill-color: transparent;\r
        background-clip: text;\r
        color: transparent;\r
        animation: gradient-animation 5s linear infinite;\r
      "\r
    >\r
      Это идиальный полет </b\r
    >.\r
  </p>\r
  <hr />\r
  <div\r
    id="tutTrajectoryHolder"\r
    style="flex: 1; display: flex; align-items: center; justify-content: center; min-height: 180px"\r
  ></div>\r
</div>\r
`,pv=`<div class="tut-slide">\r
  <h2 style="font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 1px">ГОТОВ НАЧАТЬ?</h2>\r
\r
  <p style="font-size: 16px; line-height: 1.6; color: #a2b19f; margin: 0">\r
    Тогда вперёд к приключениям! Твоя задача\r
    <b style="color: #dcd249">пролететь как можно дальше!</b>\r
  </p>\r
  <!-- 1. Этот блок добавляем один раз на страницу (в head или перед текстом) -->\r
  <style>\r
    @keyframes gradient-animation {\r
      0% {\r
        background-position: 0% 50%;\r
      }\r
      50% {\r
        background-position: 100% 50%;\r
      }\r
      100% {\r
        background-position: 0% 50%;\r
      }\r
    }\r
  </style>\r
\r
  <!-- 2. Ваш текст с анимацией внутри атрибута style -->\r
  <p style="font-size: 16px; line-height: 1.6; color: var(--tut-muted); margin: 0">\r
    А также\r
    <b\r
      style="\r
        background: linear-gradient(45deg, #49dcd2, #fff279, #ff79c6, #49dcd2);\r
        background-size: 200% auto;\r
        -webkit-background-clip: text;\r
        -webkit-text-fill-color: transparent;\r
        background-clip: text;\r
        color: transparent;\r
        animation: gradient-animation 6s linear infinite;\r
      "\r
      >исследовать мир и находить редкие секреты!</b\r
    >\r
  </p>\r
\r
  <p\r
    data-device="desktop"\r
    style="font-size: 15px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    ЖМИ И ДЕРЖИ ПРОБЕЛ, пока не закончится топливо.\r
  </p>\r
  <p\r
    data-device="mobile"\r
    style="font-size: 14px; line-height: 1.6; color: var(--tut-muted); margin: 0"\r
  >\r
    Нажми и держи 🔥 PUSH, пока не закончится топливо.\r
  </p>\r
  <div\r
    data-device="desktop"\r
    style="display: flex; justify-content: center; align-items: center; flex: 1; padding: 20px 0"\r
  >\r
    <button type="button" class="tut-keycap space" data-key="Space" aria-label="Запустить ракету">\r
      ПРОБЕЛ\r
    </button>\r
  </div>\r
  <p\r
    data-device="desktop"\r
    style="font-size: 12px; text-align: center; color: var(--tut-muted); margin: 0"\r
  >\r
    Нажми ПРОБЕЛ — туториал закроется, и ракета полетит.\r
  </p>\r
  <p\r
    data-device="mobile"\r
    style="font-size: 12px; text-align: center; color: var(--tut-muted); margin: 0"\r
  >\r
    Кнопка PUSH внизу справа. Тап — туториал закроется, и ракета полетит.\r
  </p>\r
</div>\r
`,mv=ln({mount:()=>Tv,onClose:()=>Ov,onOpen:()=>Dv,onSlideChange:()=>Ev}),hv=[uv,dv,fv,pv],gv=`http://www.w3.org/2000/svg`,_v=null,vv=null,yv=[],bv=!1,xv=0,Sv=0,Cv=0,wv=null;function Tv(e){_v=e;let t=Vf().device,n=document.createElement(`div`);n.className=`tut-shell`;let r=document.createElement(`div`);r.className=`tut-card`,vv=document.createElement(`div`),vv.className=`tut-track`;for(let e of hv){let t=document.createElement(`div`);t.innerHTML=e;let n=t.firstElementChild;n&&vv.appendChild(n)}r.appendChild(vv);let i=document.createElement(`div`);i.className=`tut-dots`;for(let e=0;e<hv.length;e++){let t=document.createElement(`div`);t.className=`tut-dot`+(e===0?` active`:``),i.appendChild(t),yv.push(t)}r.appendChild(i);let a=document.createElement(`div`);a.className=`tut-swipe-hint`,a.textContent=t===`mobile`?`👆 СВАЙП → ДАЛЕЕ`:`🖱 КЛИК → ДАЛЕЕ`,r.appendChild(a);let o=document.createElement(`button`);o.type=`button`,o.className=`tut-skip`,o.textContent=`×`,o.setAttribute(`aria-label`,`Закрыть`),o.addEventListener(`click`,()=>Lf(`skip`)),r.appendChild(o);let s=document.createElement(`button`);s.type=`button`,s.className=`tut-arrow left`,s.setAttribute(`aria-label`,`Назад`),s.appendChild(Uv(`left`)),s.addEventListener(`click`,()=>zf());let c=document.createElement(`button`);c.type=`button`,c.className=`tut-arrow right`,c.setAttribute(`aria-label`,`Далее`),c.appendChild(Uv(`right`)),c.addEventListener(`click`,()=>Rf()),n.appendChild(s),n.appendChild(r),n.appendChild(c),e.appendChild(n);let l=r.querySelector(`#tutTrajectoryHolder`);l&&w_(l);let u=r.querySelector(`#tutSpriteHolder`);u&&iv(u);let d=r.querySelector(`.tut-start-btn`);d&&d.addEventListener(`click`,()=>Rf());let f=r.querySelector(`[data-key="Space"]`);f&&f.addEventListener(`pointerdown`,e=>{let t=Vf();t.isOpen&&t.index===3&&(e.preventDefault(),Lf(`complete`))},{capture:!0}),t===`desktop`&&(window.addEventListener(`keydown`,e=>{Hf()&&Vf().index===1&&(e.code===`KeyW`&&Av(`W`,!0),e.code===`KeyS`&&Av(`S`,!0))}),window.addEventListener(`keyup`,e=>{Hf()&&Vf().index===1&&(e.code===`KeyW`&&Av(`W`,!1),e.code===`KeyS`&&Av(`S`,!1))}),window.addEventListener(`keydown`,e=>{if(e.code!==`Space`)return;let t=Vf();t.isOpen&&t.index===3&&(e.preventDefault(),e.stopPropagation(),Lf(`complete`))},{capture:!0})),t===`mobile`&&(Bv(e),Hv())}function Ev(e){_v&&(yv.forEach((t,n)=>t.classList.toggle(`active`,n===e)),_v.querySelector(`.tut-swipe-hint`)?.classList.toggle(`visible`,e===0),e===2?(A_(),O_()):k_(),e===1?(sv(),av()):ov(),Vf().device===`desktop`?kv(e):zv(e))}function Dv(){Rv()}function Ov(){Rv(),ov(),k_(),Av(`W`,!1),Av(`S`,!1)}function kv(e){if(_v){if(e===1){for(let e of[`W`,`S`]){let t=_v.querySelector(`[data-key="${e}"]`);t&&(t.classList.remove(`tut-highlight`),t.offsetWidth,t.classList.add(`tut-highlight`),window.setTimeout(()=>t.classList.remove(`tut-highlight`),2500))}Av(`W`,!!Va.keys.W),Av(`S`,!!Va.keys.S)}else Av(`W`,!1),Av(`S`,!1);if(e===3){let e=_v.querySelector(`[data-key="Space"]`);if(!e)return;let t=0,n=()=>{t>=6||(e.classList.add(`tut-highlight-gold`),window.setTimeout(()=>{e.classList.remove(`tut-highlight-gold`),t++,t<6&&window.setTimeout(n,400)},400))};n()}}}function Av(e,t){if(!_v)return;let n=_v.querySelector(`[data-key="${e}"]`);n&&n.classList.toggle(`tut-keycap-held`,t)}function jv(){return document.getElementById(`touchControls`)}function Mv(){return document.getElementById(`rotBtns`)}function Nv(){return document.getElementById(`actionBtns`)}function Pv(){return document.getElementById(`oxidizerBtn`)}function Fv(){return document.getElementById(`forsageBtn`)}function Iv(){return document.getElementById(`pushBtn`)}function Lv(){document.getElementById(`rotUp`)?.classList.remove(`tut-highlight-touch`),document.getElementById(`rotDown`)?.classList.remove(`tut-highlight-touch`),Iv()?.classList.remove(`tut-highlight-touch`)}function Rv(){let e=jv(),t=Mv(),n=Nv(),r=Pv(),i=Fv();e&&(e.classList.add(`hidden`),e.style.justifyContent=``),t&&(t.style.display=``),n&&(n.style.display=``),r&&(r.style.display=``),i&&(i.style.display=``),Lv()}function zv(e){let t=jv(),n=Mv(),r=Nv(),i=Pv(),a=Fv();if(t&&n&&r&&i&&a){if(Lv(),e===1){t.classList.remove(`hidden`),t.style.justifyContent=`flex-start`,n.style.display=``,r.style.display=`none`;for(let e of[`rotUp`,`rotDown`]){let t=document.getElementById(e);t&&(t.classList.remove(`tut-highlight-touch`),t.offsetWidth,t.classList.add(`tut-highlight-touch`))}}else e===3?(t.classList.remove(`hidden`),t.style.justifyContent=`flex-end`,n.style.display=`none`,r.style.display=``,i.style.display=`none`,a.style.display=`none`,Iv()?.classList.add(`tut-highlight-touch`),Hv()):Rv()}}function Bv(e){e.addEventListener(`pointerdown`,t=>{if(bv)return;let n=t.target;if(!n||n.closest(`.tut-skip, .tbtn, .push-btn, .oxidizer-btn, .forsage-btn`))return;bv=!0,xv=t.clientX,Sv=t.clientY,Cv=performance.now(),wv=t.pointerId;let r=e.querySelector(`.tut-bg-strip`);r&&(r.style.transition=`none`),vv&&(vv.style.transition=`none`)}),e.addEventListener(`pointermove`,t=>{if(!bv||t.pointerId!==wv||!vv)return;let n=t.clientX-xv,r=Vf().index;vv.style.transform=`translateX(calc(-${r*100}% + ${n}px))`;let i=-(350/3*r)+n/3;i=Math.max(-350,Math.min(0,i)),e.style.setProperty(`--bg-x`,`${i}px`)}),e.addEventListener(`pointerup`,t=>{if(!bv||t.pointerId!==wv)return;bv=!1,wv=null;let n=t.clientX-xv,r=t.clientY-Sv,i=performance.now()-Cv,a=Vf().index,o=Math.abs(n)>50&&Math.abs(n)>Math.abs(r)*1.5&&i<500,s=n<0&&a<3||n>0&&a>0,c=e.querySelector(`.tut-bg-strip`);if(c&&(c.style.transition=``),vv&&(vv.style.transition=``),o&&s)n<0?Rf():zf();else{let t=-(200/3*a);e.style.setProperty(`--bg-x`,`${t}px`),vv&&(vv.style.transform=`translateX(-${a*100}%)`)}}),e.addEventListener(`pointercancel`,t=>{if(!bv||t.pointerId!==wv)return;bv=!1,wv=null;let n=Vf().index,r=-(200/3*n),i=e.querySelector(`.tut-bg-strip`);i&&(i.style.transition=``),e.style.setProperty(`--bg-x`,`${r}px`),vv&&(vv.style.transition=``,vv.style.transform=`translateX(-${n*100}%)`)})}var Vv=!1;function Hv(){if(Vv)return;let e=Iv();e&&(Vv=!0,e.addEventListener(`pointerdown`,e=>{let t=Vf();t.isOpen&&t.index===3&&(e.preventDefault(),Lf(`complete`))},{capture:!0}))}function Uv(e){let t=document.createElementNS(gv,`svg`);t.setAttribute(`viewBox`,`0 0 24 24`);let n=document.createElementNS(gv,`path`);return n.setAttribute(`d`,e===`left`?`M15 19l-7-7 7-7`:`M9 5l7 7-7 7`),t.appendChild(n),t}var Wv=null,Gv=null,Kv=null,qv=!1;function Jv(){if(qv)return;if(qv=!0,Ff(),Wv=document.getElementById(`tutorialPanel`),!Wv){console.warn(`[tutorial-ui] #tutorialPanel not found — туториал отключён`);return}let e=document.createElement(`div`);e.className=`tut-bg`;let t=document.createElement(`div`);t.className=`tut-bg-strip`,t.style.backgroundImage=`url('./${encodeURI(Fe.tutorialBg)}')`,e.appendChild(t),Wv.appendChild(e);let n=Vf().device;Wv.setAttribute(`data-layout`,n),Kv=mv,Pf({onOpen:Yv,onClose:Zv,onGoTo:Qv}),Kv.mount(Wv),Gv=Wv.querySelector(`.tut-track`)}function Yv(e){Wv&&Kv&&(Wv.classList.add(`on`),document.body.classList.add(`tutorial-open`),bd(!1),Kv.onOpen(),Xv(0))}function Xv(e){if(!Wv||!Gv||!Kv)return;if(Gv.style.transform=`translateX(-${e*100}%)`,Vf().device===`mobile`){let t=-(350/3*e);Wv.style.setProperty(`--bg-x`,`${t}px`)}else Wv.style.setProperty(`--bg-x`,`0px`);let t=Gv.querySelectorAll(`.tut-slide`);t.forEach((t,n)=>{t.classList.toggle(`active`,n===e)});let n=Wv.querySelector(`.tut-arrow.left`),r=Wv.querySelector(`.tut-arrow.right`);n&&n.classList.toggle(`is-hidden`,e===0),r&&r.classList.toggle(`is-hidden`,e===t.length-1),Kv.onSlideChange(e)}function Zv(e){Wv&&Kv&&(Wv.classList.remove(`on`),document.body.classList.remove(`tutorial-open`),Kv.onClose(),e===`complete`?(ah(),Va.boost=!0):bd(!H.tutorialDone),Ep())}function Qv(e){Xv(e)}var $v={init:()=>{},mark:()=>{},frame:()=>{},enabled:()=>!1};ao(),im(),Rg(),vl(),lu(),Nh(),Ad({onBuy:e=>bh(e),onSell:e=>xh(e),canBuy:e=>vh(e),canSell:e=>yh(e),getTradePreview:(e,t)=>Sh(e,t)}),Qh(),Cp({onLaunch:ah,onBuy:rh,onReset:wm,onAchievements:Ph,onActivateAbility:Ru,upgrades:Op,costOf:kp,isDoubleRewardAvailable:Dh,onDoubleReward:Oh}),Bl((e,t)=>{mp(e,t),Sm()}),Eh(),Jv(),bd(!H.tutorialDone),Nu(),Wc(),cl(),wl(()=>G.phase),gs(),kl(),Dg();async function ey(){vu();let e=document.getElementById(`loading`),t=document.getElementById(`loadingBar`),n=document.getElementById(`loadingText`);e&&(e.style.display=`flex`);let r=xs(),i=r+Il(),a=`Загрузка мира`,o=0,s=()=>{let e=i>0?o/i*100:0;t&&(t.style.width=e.toFixed(1)+`%`),n&&(n.textContent=`${a}… ${o} / ${i}`)};s(),a=`Загрузка мира`,await bs(e=>{o=e,s()}),a=`Дальний рельеф`,await Fl(e=>{o=r+e,s()}),e&&(e.style.display=`none`);let c=!1;Zg({onAverage:e=>_p(e),onLow:(e,t)=>{if(!c){c=!0;let e=sn.notification;Yf(t===`critical`?e.criticalText:e.warnText,e.durationMs,e.color)}yp(e)}}),requestAnimationFrame(sy),H.tutorialOnStart||setTimeout(()=>Kf(`ПНИ РАКЕТУ! 🦵`,w.toastColors.upgrade),800)}var ty=1/ot.physicsHz,ny=ot.maxFrameDt,ry=ot.maxPhysicsSteps>0?ot.maxPhysicsSteps:Math.ceil(ny/ty)+2,iy=performance.now(),ay=0,oy=!0;function sy(e){oy&&=(iy=e,!1);let t=Math.min(ny,(e-iy)/1e3);iy=e;let n=performance.now(),r=performance.now();ay+=t;let i=0;for(;ay>=ty&&i<ry;)Ha.gameTime+=ty,wh(ty),ay-=ty,i++;i>=ry&&(ay=0),$v.mark(`physics`,performance.now()-r);let a=performance.now(),o=ay/ty;Th(t,o,Ha.gameTime-ty+ty*o),$v.mark(`visuals`,performance.now()-a);let s=performance.now();ys(),$v.mark(`chunks`,performance.now()-s),s=performance.now(),Pl(t),$v.mark(`lod`,performance.now()-s),s=performance.now(),sm(t),$v.mark(`daynight`,performance.now()-s),s=performance.now(),kg(),$v.mark(`space`,performance.now()-s),s=performance.now(),Dp(),$v.mark(`ui`,performance.now()-s),s=performance.now(),oo(),$v.mark(`scenery`,performance.now()-s),s=performance.now(),so(),$v.mark(`render`,performance.now()-s);let c=performance.now()-n;$v.mark(`total`,c),$v.frame(t*1e3),Qg(t*1e3),requestAnimationFrame(sy)}ey();