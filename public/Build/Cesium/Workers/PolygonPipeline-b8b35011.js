define(["exports","./WindingOrder-8479ef05","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./when-515d5295","./Rectangle-e170be8b","./EllipsoidRhumbLine-f50fdea6","./GeometryAttribute-9bc31a7f","./Math-5e38123d","./PrimitiveType-b38a4004"],(function(e,a,t,n,i,r,o,u,s,p,h,l){"use strict";var d=new n.a,c=new n.a,m={computeArea2D:function(e){i.n.defined("positions",e),i.n.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);for(var a=e.length,t=0,n=a-1,r=0;r<a;n=r++){var o=e[n],u=e[r];t+=o.x*u.y-u.x*o.y}return.5*t},computeWindingOrder2D:function(e){return m.computeArea2D(e)>0?a.F.COUNTER_CLOCKWISE:a.F.CLOCKWISE},triangulate:function(e,n){i.n.defined("positions",e);var r=t.r.packArray(e);return a.m(r,n,2)}},g=new n.a,y=new n.a,f=new n.a,v=new n.a,b=new n.a,x=new n.a,w=new n.a;m.computeSubdivision=function(e,a,t,u,s){s=o.e(s,!1),u=o.e(u,h.n.RADIANS_PER_DEGREE),i.n.typeOf.object("ellipsoid",e),i.n.defined("positions",a),i.n.defined("indices",t),i.n.typeOf.number.greaterThanOrEquals("indices.length",t.length,3),i.n.typeOf.number.equals("indices.length % 3","0",t.length%3,0),i.n.typeOf.number.greaterThan("granularity",u,0);var d,c=t.slice(0),m=a.length,E=new Array(3*m),A=0;for(d=0;d<m;d++){var S=a[d];E[A++]=S.x,E[A++]=S.y,E[A++]=S.z}for(var O=[],T={},M=e.maximumRadius,D=h.n.chordLength(u,M),R=D*D;c.length>0;){var C,z,L=c.pop(),B=c.pop(),q=c.pop(),G=n.a.fromArray(E,3*q,g),P=n.a.fromArray(E,3*B,y),_=n.a.fromArray(E,3*L,f),I=s?G:n.a.multiplyByScalar(n.a.normalize(G,v),M,v),N=s?P:n.a.multiplyByScalar(n.a.normalize(P,b),M,b),U=s?_:n.a.multiplyByScalar(n.a.normalize(_,x),M,x),F=n.a.magnitudeSquared(n.a.subtract(I,N,w)),W=n.a.magnitudeSquared(n.a.subtract(N,U,w)),j=n.a.magnitudeSquared(n.a.subtract(U,I,w)),k=Math.max(F,W,j);k>R?F===k?(d=T[C=Math.min(q,B)+" "+Math.max(q,B)],o.t(d)||(z=n.a.add(G,P,w),n.a.multiplyByScalar(z,.5,z),E.push(z.x,z.y,z.z),d=E.length/3-1,T[C]=d),c.push(q,d,L),c.push(d,B,L)):W===k?(d=T[C=Math.min(B,L)+" "+Math.max(B,L)],o.t(d)||(z=n.a.add(P,_,w),n.a.multiplyByScalar(z,.5,z),E.push(z.x,z.y,z.z),d=E.length/3-1,T[C]=d),c.push(B,d,q),c.push(d,L,q)):j===k&&(d=T[C=Math.min(L,q)+" "+Math.max(L,q)],o.t(d)||(z=n.a.add(_,G,w),n.a.multiplyByScalar(z,.5,z),E.push(z.x,z.y,z.z),d=E.length/3-1,T[C]=d),c.push(L,d,B),c.push(d,q,B)):(O.push(q),O.push(B),O.push(L))}return new p.T({attributes:{position:new p.r({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:E})},indices:O,primitiveType:l._0x38df4a.TRIANGLES})};var E=new n.i,A=new n.i,S=new n.i,O=new n.i;m.computeRhumbLineSubdivision=function(e,a,t,u){u=o.e(u,h.n.RADIANS_PER_DEGREE),i.n.typeOf.object("ellipsoid",e),i.n.defined("positions",a),i.n.defined("indices",t),i.n.typeOf.number.greaterThanOrEquals("indices.length",t.length,3),i.n.typeOf.number.equals("indices.length % 3","0",t.length%3,0),i.n.typeOf.number.greaterThan("granularity",u,0);var d,c=t.slice(0),m=a.length,v=new Array(3*m),b=0;for(d=0;d<m;d++){var x=a[d];v[b++]=x.x,v[b++]=x.y,v[b++]=x.z}for(var T=[],M={},D=e.maximumRadius,R=h.n.chordLength(u,D),C=new s.M(void 0,void 0,e),z=new s.M(void 0,void 0,e),L=new s.M(void 0,void 0,e);c.length>0;){var B=c.pop(),q=c.pop(),G=c.pop(),P=n.a.fromArray(v,3*G,g),_=n.a.fromArray(v,3*q,y),I=n.a.fromArray(v,3*B,f),N=e.cartesianToCartographic(P,E),U=e.cartesianToCartographic(_,A),F=e.cartesianToCartographic(I,S);C.setEndPoints(N,U);var W=C.surfaceDistance;z.setEndPoints(U,F);var j=z.surfaceDistance;L.setEndPoints(F,N);var k,K,H,J,Q=L.surfaceDistance,V=Math.max(W,j,Q);V>R?W===V?(d=M[k=Math.min(G,q)+" "+Math.max(G,q)],o.t(d)||(K=C.interpolateUsingFraction(.5,O),H=.5*(N.height+U.height),J=n.a.fromRadians(K.longitude,K.latitude,H,e,w),v.push(J.x,J.y,J.z),d=v.length/3-1,M[k]=d),c.push(G,d,B),c.push(d,q,B)):j===V?(d=M[k=Math.min(q,B)+" "+Math.max(q,B)],o.t(d)||(K=z.interpolateUsingFraction(.5,O),H=.5*(U.height+F.height),J=n.a.fromRadians(K.longitude,K.latitude,H,e,w),v.push(J.x,J.y,J.z),d=v.length/3-1,M[k]=d),c.push(q,d,G),c.push(d,B,G)):Q===V&&(d=M[k=Math.min(B,G)+" "+Math.max(B,G)],o.t(d)||(K=L.interpolateUsingFraction(.5,O),H=.5*(F.height+N.height),J=n.a.fromRadians(K.longitude,K.latitude,H,e,w),v.push(J.x,J.y,J.z),d=v.length/3-1,M[k]=d),c.push(B,d,q),c.push(d,G,q)):(T.push(G),T.push(q),T.push(B))}return new p.T({attributes:{position:new p.r({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v})},indices:T,primitiveType:l._0x38df4a.TRIANGLES})},m.scaleToGeodeticHeight=function(e,a,t,i){t=o.e(t,u.n.WGS84);var r=d,s=c;if(a=o.e(a,0),i=o.e(i,!0),o.t(e))for(var p=e.length,h=0;h<p;h+=3)n.a.fromArray(e,h,s),i&&(s=t.scaleToGeodeticSurface(s,s)),0!==a&&(r=t.geodeticSurfaceNormal(s,r),n.a.multiplyByScalar(r,a,r),n.a.add(s,r,s)),e[h]=s.x,e[h+1]=s.y,e[h+2]=s.z;return e},e.T=m}));