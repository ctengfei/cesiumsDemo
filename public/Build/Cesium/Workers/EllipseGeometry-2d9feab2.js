define(["exports","./arrayFill-4d3cc415","./buildModuleUrl-dba4ec07","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./when-515d5295","./EllipseGeometryLibrary-497ff3d7","./Rectangle-e170be8b","./Intersect-53434a77","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryInstance-c11993d9","./GeometryOffsetAttribute-800f7650","./GeometryPipeline-137aa28e","./IndexDatatype-eefd5922","./Math-5e38123d","./PrimitiveType-b38a4004","./VertexFormat-e844760b"],(function(e,t,r,n,a,o,i,s,m,u,l,c,p,d,y,f,h,A,x,g){"use strict";var _=new a.a,v=new a.a,b=new a.a,w=new a.a,I=new n.r,T=new x.r,N=new x.r,M=new c.a,E=new a.a,P=new a.a,D=new a.a,F=new a.i,O=new a.a,S=new n.r,C=new n.r;function R(e,r,o){var u=r.vertexFormat,d=r.center,f=r.semiMajorAxis,h=r.semiMinorAxis,A=r.ellipsoid,g=r.stRotation,w=o?e.length/3*2:e.length/3,R=r.shadowVolume,L=u.st?new Float32Array(2*w):void 0,j=u.normal?new Float32Array(3*w):void 0,G=u.tangent?new Float32Array(3*w):void 0,V=u.bitangent?new Float32Array(3*w):void 0,z=R?new Float32Array(3*w):void 0,k=0,Y=E,B=P,H=D,U=new l.s(A),W=U.project(A.cartesianToCartographic(d,F),O),q=A.scaleToGeodeticSurface(d,_);A.geodeticSurfaceNormal(q,q);var Q=T,J=N;if(0!==g){var Z=c.a.fromAxisAngle(q,g,M);Q=x.r.fromQuaternion(Z,Q),Z=c.a.fromAxisAngle(q,-g,M),J=x.r.fromQuaternion(Z,J)}else Q=x.r.clone(x.r.IDENTITY,Q),J=x.r.clone(x.r.IDENTITY,J);for(var K=n.r.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,S),X=n.r.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,C),$=e.length,ee=o?$:0,te=ee/3*2,re=0;re<$;re+=3){var ne=re+1,ae=re+2,oe=a.a.fromArray(e,re,_);if(u.st){var ie=x.r.multiplyByVector(Q,oe,v),se=U.project(A.cartesianToCartographic(ie,F),b);a.a.subtract(se,W,se),I.x=(se.x+f)/(2*f),I.y=(se.y+h)/(2*h),K.x=Math.min(I.x,K.x),K.y=Math.min(I.y,K.y),X.x=Math.max(I.x,X.x),X.y=Math.max(I.y,X.y),o&&(L[k+te]=I.x,L[k+1+te]=I.y),L[k++]=I.x,L[k++]=I.y}(u.normal||u.tangent||u.bitangent||R)&&(Y=A.geodeticSurfaceNormal(oe,Y),R&&(z[re+ee]=-Y.x,z[ne+ee]=-Y.y,z[ae+ee]=-Y.z),(u.normal||u.tangent||u.bitangent)&&((u.tangent||u.bitangent)&&(B=a.a.normalize(a.a.cross(a.a.UNIT_Z,Y,B),B),x.r.multiplyByVector(J,B,B)),u.normal&&(j[re]=Y.x,j[ne]=Y.y,j[ae]=Y.z,o&&(j[re+ee]=-Y.x,j[ne+ee]=-Y.y,j[ae+ee]=-Y.z)),u.tangent&&(G[re]=B.x,G[ne]=B.y,G[ae]=B.z,o&&(G[re+ee]=-B.x,G[ne+ee]=-B.y,G[ae+ee]=-B.z)),u.bitangent&&(H=a.a.normalize(a.a.cross(Y,B,H),H),V[re]=H.x,V[ne]=H.y,V[ae]=H.z,o&&(V[re+ee]=H.x,V[ne+ee]=H.y,V[ae+ee]=H.z))))}if(u.st){$=L.length;for(var me=0;me<$;me+=2)L[me]=(L[me]-K.x)/(X.x-K.x),L[me+1]=(L[me+1]-K.y)/(X.y-K.y)}var ue=new p.t;if(u.position){var le=m.N.raisePositionsToHeight(e,r,o);ue.position=new c.r({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:le})}if(u.st&&(ue.st=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:L})),u.normal&&(ue.normal=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),u.tangent&&(ue.tangent=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),u.bitangent&&(ue.bitangent=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),R&&(ue.extrudeDirection=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:z})),o&&s.t(r.offsetAttribute)){var ce=new Uint8Array(w);if(r.offsetAttribute===y.I.TOP)ce=t.d(ce,1,0,w/2);else{var pe=r.offsetAttribute===y.I.NONE?0:1;ce=t.d(ce,pe)}ue.applyOffset=new c.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:ce})}return ue}function L(e){var t,r,n,a,o,i=new Array(e*(e+1)*12-6),s=0;for(t=0,n=1,a=0;a<3;a++)i[s++]=n++,i[s++]=t,i[s++]=n;for(a=2;a<e+1;++a){for(n=a*(a+1)-1,t=(a-1)*a-1,i[s++]=n++,i[s++]=t,i[s++]=n,r=2*a,o=0;o<r-1;++o)i[s++]=n,i[s++]=t++,i[s++]=t,i[s++]=n++,i[s++]=t,i[s++]=n;i[s++]=n++,i[s++]=t,i[s++]=n}for(r=2*e,++n,++t,a=0;a<r-1;++a)i[s++]=n,i[s++]=t++,i[s++]=t,i[s++]=n++,i[s++]=t,i[s++]=n;for(i[s++]=n,i[s++]=t++,i[s++]=t,i[s++]=n++,i[s++]=t++,i[s++]=t,++t,a=e-1;a>1;--a){for(i[s++]=t++,i[s++]=t,i[s++]=n,r=2*a,o=0;o<r-1;++o)i[s++]=n,i[s++]=t++,i[s++]=t,i[s++]=n++,i[s++]=t,i[s++]=n;i[s++]=t++,i[s++]=t++,i[s++]=n++}for(a=0;a<3;a++)i[s++]=t++,i[s++]=t,i[s++]=n;return i}var j=new a.a;var G=new r.c,V=new r.c;function z(e){var o=e.center,u=e.ellipsoid,A=e.semiMajorAxis,g=a.a.multiplyByScalar(u.geodeticSurfaceNormal(o,_),e.height,_);G.center=a.a.add(o,g,G.center),G.radius=A,g=a.a.multiplyByScalar(u.geodeticSurfaceNormal(o,g),e.extrudedHeight,g),V.center=a.a.add(o,g,V.center),V.radius=A;var N=m.N.computeEllipsePositions(e,!0,!0),j=N.positions,z=N.numPts,k=N.outerPositions,Y=r.c.union(G,V),B=R(j,e,!0),H=L(z),U=H.length;H.length=2*U;for(var W=j.length/3,q=0;q<U;q+=3)H[q+U]=H[q+2]+W,H[q+1+U]=H[q+1]+W,H[q+2+U]=H[q]+W;var Q=h.IndexDatatype.createTypedArray(2*W/3,H),J=new c.T({attributes:B,indices:Q,primitiveType:x._0x38df4a.TRIANGLES}),Z=function(e,r){var o=r.vertexFormat,m=r.center,u=r.semiMajorAxis,d=r.semiMinorAxis,f=r.ellipsoid,h=r.height,A=r.extrudedHeight,g=r.stRotation,N=e.length/3*2,R=new Float64Array(3*N),L=o.st?new Float32Array(2*N):void 0,j=o.normal?new Float32Array(3*N):void 0,G=o.tangent?new Float32Array(3*N):void 0,V=o.bitangent?new Float32Array(3*N):void 0,z=r.shadowVolume,k=z?new Float32Array(3*N):void 0,Y=0,B=E,H=P,U=D,W=new l.s(f),q=W.project(f.cartesianToCartographic(m,F),O),Q=f.scaleToGeodeticSurface(m,_);f.geodeticSurfaceNormal(Q,Q);for(var J=c.a.fromAxisAngle(Q,g,M),Z=x.r.fromQuaternion(J,T),K=n.r.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,S),X=n.r.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,C),$=e.length,ee=$/3*2,te=0;te<$;te+=3){var re,ne=te+1,ae=te+2,oe=a.a.fromArray(e,te,_);if(o.st){var ie=x.r.multiplyByVector(Z,oe,v),se=W.project(f.cartesianToCartographic(ie,F),b);a.a.subtract(se,q,se),I.x=(se.x+u)/(2*u),I.y=(se.y+d)/(2*d),K.x=Math.min(I.x,K.x),K.y=Math.min(I.y,K.y),X.x=Math.max(I.x,X.x),X.y=Math.max(I.y,X.y),L[Y+ee]=I.x,L[Y+1+ee]=I.y,L[Y++]=I.x,L[Y++]=I.y}oe=f.scaleToGeodeticSurface(oe,oe),re=a.a.clone(oe,v),B=f.geodeticSurfaceNormal(oe,B),z&&(k[te+$]=-B.x,k[ne+$]=-B.y,k[ae+$]=-B.z);var me=a.a.multiplyByScalar(B,h,w);if(oe=a.a.add(oe,me,oe),me=a.a.multiplyByScalar(B,A,me),re=a.a.add(re,me,re),o.position&&(R[te+$]=re.x,R[ne+$]=re.y,R[ae+$]=re.z,R[te]=oe.x,R[ne]=oe.y,R[ae]=oe.z),o.normal||o.tangent||o.bitangent){U=a.a.clone(B,U);var ue=a.a.fromArray(e,(te+3)%$,w);a.a.subtract(ue,oe,ue);var le=a.a.subtract(re,oe,b);B=a.a.normalize(a.a.cross(le,ue,B),B),o.normal&&(j[te]=B.x,j[ne]=B.y,j[ae]=B.z,j[te+$]=B.x,j[ne+$]=B.y,j[ae+$]=B.z),o.tangent&&(H=a.a.normalize(a.a.cross(U,B,H),H),G[te]=H.x,G[ne]=H.y,G[ae]=H.z,G[te+$]=H.x,G[te+1+$]=H.y,G[te+2+$]=H.z),o.bitangent&&(V[te]=U.x,V[ne]=U.y,V[ae]=U.z,V[te+$]=U.x,V[ne+$]=U.y,V[ae+$]=U.z)}}if(o.st){$=L.length;for(var ce=0;ce<$;ce+=2)L[ce]=(L[ce]-K.x)/(X.x-K.x),L[ce+1]=(L[ce+1]-K.y)/(X.y-K.y)}var pe=new p.t;if(o.position&&(pe.position=new c.r({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:R})),o.st&&(pe.st=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:L})),o.normal&&(pe.normal=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),o.tangent&&(pe.tangent=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),o.bitangent&&(pe.bitangent=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),z&&(pe.extrudeDirection=new c.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k})),s.t(r.offsetAttribute)){var de=new Uint8Array(N);if(r.offsetAttribute===y.I.TOP)de=t.d(de,1,0,N/2);else{var ye=r.offsetAttribute===y.I.NONE?0:1;de=t.d(de,ye)}pe.applyOffset=new c.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:de})}return pe}(k,e);H=function(e){for(var t=e.length/3,r=h.IndexDatatype.createTypedArray(t,6*t),n=0,a=0;a<t;a++){var o=a,i=a+t,s=(o+1)%t,m=s+t;r[n++]=o,r[n++]=i,r[n++]=s,r[n++]=s,r[n++]=i,r[n++]=m}return r}(k);var K=h.IndexDatatype.createTypedArray(2*k.length/3,H),X=new c.T({attributes:Z,indices:K,primitiveType:x._0x38df4a.TRIANGLES}),$=f.F.combineInstances([new d.m({geometry:J}),new d.m({geometry:X})]);return{boundingSphere:Y,attributes:$[0].attributes,indices:$[0].indices}}function k(e,t,r,n,o,i,s){for(var l=m.N.computeEllipsePositions({center:e,semiMajorAxis:t,semiMinorAxis:r,rotation:n,granularity:o},!1,!0).outerPositions,c=l.length/3,p=new Array(c),d=0;d<c;++d)p[d]=a.a.fromArray(l,3*d);var y=u.s.fromCartesianArray(p,i,s);return y.width>A.n.PI&&(y.north=y.north>0?A.n.PI_OVER_TWO-A.n.EPSILON7:y.north,y.south=y.south<0?A.n.EPSILON7-A.n.PI_OVER_TWO:y.south,y.east=A.n.PI,y.west=-A.n.PI),y}function Y(e){var t=(e=s.e(e,s.e.EMPTY_OBJECT)).center,r=s.e(e.ellipsoid,u.n.WGS84),n=e.semiMajorAxis,i=e.semiMinorAxis,m=s.e(e.granularity,A.n.RADIANS_PER_DEGREE),l=s.e(e.vertexFormat,g.n.DEFAULT);if(o.n.defined("options.center",t),o.n.typeOf.number("options.semiMajorAxis",n),o.n.typeOf.number("options.semiMinorAxis",i),n<i)throw new o.t("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(m<=0)throw new o.t("granularity must be greater than zero.");var c=s.e(e.height,0),p=s.e(e.extrudedHeight,c);this._center=a.a.clone(t),this._semiMajorAxis=n,this._semiMinorAxis=i,this._ellipsoid=u.n.clone(r),this._rotation=s.e(e.rotation,0),this._stRotation=s.e(e.stRotation,0),this._height=Math.max(p,c),this._granularity=m,this._vertexFormat=g.n.clone(l),this._extrudedHeight=Math.min(p,c),this._shadowVolume=s.e(e.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=e.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}Y.packedLength=a.a.packedLength+u.n.packedLength+g.n.packedLength+9,Y.pack=function(e,t,r){return o.n.defined("value",e),o.n.defined("array",t),r=s.e(r,0),a.a.pack(e._center,t,r),r+=a.a.packedLength,u.n.pack(e._ellipsoid,t,r),r+=u.n.packedLength,g.n.pack(e._vertexFormat,t,r),r+=g.n.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._stRotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._shadowVolume?1:0,t[r]=s.e(e._offsetAttribute,-1),t};var B=new a.a,H=new u.n,U=new g.n,W={center:B,ellipsoid:H,vertexFormat:U,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};Y.unpack=function(e,t,r){o.n.defined("array",e),t=s.e(t,0);var n=a.a.unpack(e,t,B);t+=a.a.packedLength;var i=u.n.unpack(e,t,H);t+=u.n.packedLength;var m=g.n.unpack(e,t,U);t+=g.n.packedLength;var l=e[t++],c=e[t++],p=e[t++],d=e[t++],y=e[t++],f=e[t++],h=e[t++],A=1===e[t++],x=e[t];return s.t(r)?(r._center=a.a.clone(n,r._center),r._ellipsoid=u.n.clone(i,r._ellipsoid),r._vertexFormat=g.n.clone(m,r._vertexFormat),r._semiMajorAxis=l,r._semiMinorAxis=c,r._rotation=p,r._stRotation=d,r._height=y,r._granularity=f,r._extrudedHeight=h,r._shadowVolume=A,r._offsetAttribute=-1===x?void 0:x,r):(W.height=y,W.extrudedHeight=h,W.granularity=f,W.stRotation=d,W.rotation=p,W.semiMajorAxis=l,W.semiMinorAxis=c,W.shadowVolume=A,W.offsetAttribute=-1===x?void 0:x,new Y(W))},Y.computeRectangle=function(e,t){var r=(e=s.e(e,s.e.EMPTY_OBJECT)).center,n=s.e(e.ellipsoid,u.n.WGS84),a=e.semiMajorAxis,i=e.semiMinorAxis,m=s.e(e.granularity,A.n.RADIANS_PER_DEGREE),l=s.e(e.rotation,0);if(o.n.defined("options.center",r),o.n.typeOf.number("options.semiMajorAxis",a),o.n.typeOf.number("options.semiMinorAxis",i),a<i)throw new o.t("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(m<=0)throw new o.t("granularity must be greater than zero.");return k(r,a,i,l,m,n,t)},Y.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var n=e._height,o=e._extrudedHeight,u=!A.n.equalsEpsilon(n,o,0,A.n.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var l,p={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:n,granularity:e._granularity,vertexFormat:e._vertexFormat,stRotation:e._stRotation};if(u)p.extrudedHeight=o,p.shadowVolume=e._shadowVolume,p.offsetAttribute=e._offsetAttribute,l=z(p);else if(l=function(e){var t=e.center;j=a.a.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,j),e.height,j),j=a.a.add(t,j,j);var n=new r.c(j,e.semiMajorAxis),o=m.N.computeEllipsePositions(e,!0,!1),i=o.positions,s=o.numPts,u=R(i,e,!1),l=L(s);return{boundingSphere:n,attributes:u,indices:l=h.IndexDatatype.createTypedArray(i.length/3,l)}}(p),s.t(e._offsetAttribute)){var d=l.attributes.position.values.length,f=new Uint8Array(d/3),g=e._offsetAttribute===y.I.NONE?0:1;t.d(f,g),l.attributes.applyOffset=new c.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})}return new c.T({attributes:l.attributes,indices:l.indices,primitiveType:x._0x38df4a.TRIANGLES,boundingSphere:l.boundingSphere,offsetAttribute:e._offsetAttribute})}},Y.createShadowVolume=function(e,t,r){var n=e._granularity,a=e._ellipsoid,o=t(n,a),i=r(n,a);return new Y({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:a,rotation:e._rotation,stRotation:e._stRotation,granularity:n,extrudedHeight:o,height:i,vertexFormat:g.n.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(Y.prototype,{rectangle:{get:function(){return s.t(this._rectangle)||(this._rectangle=k(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return s.t(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){var t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];for(var r=m.N.computeEllipsePositions({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,rotation:e._rotation,granularity:e._granularity},!1,!0).outerPositions,n=r.length/3,o=new Array(n),i=0;i<n;++i)o[i]=a.a.fromArray(r,3*i);var s=e._ellipsoid,u=e.rectangle;return c.T._textureCoordinateRotationPoints(o,t,s,u)}(this)),this._textureCoordinateRotationPoints}}}),e.H=Y}));