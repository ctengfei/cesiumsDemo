define(["./ComponentDatatype-d430c7f7","./when-515d5295","./IndexDatatype-eefd5922","./RuntimeError-350acae3","./createTaskProcessorWorker","./Check-3aa71481","./WebGLConstants-77a84876","./Math-5e38123d"],(function(t,e,r,n,a,o,i,s){"use strict";var u;function c(t,e){for(var n=t.num_points(),a=t.num_faces(),o=new u.DracoInt32Array,i=3*a,s=r.IndexDatatype.createTypedArray(n,i),c=0,y=0;y<a;++y)e.GetFaceFromMesh(t,y,o),s[c+0]=o.GetValue(0),s[c+1]=o.GetValue(1),s[c+2]=o.GetValue(2),c+=3;return u.destroy(o),{typedArray:s,numberOfIndices:i}}function y(r,n,a){var o,i=r.num_points(),s=a.num_components(),c=new u.AttributeQuantizationTransform;if(c.InitFromAttribute(a)){for(var y=new Array(s),d=0;d<s;++d)y[d]=c.min_value(d);o={quantizationBits:c.quantization_bits(),minValues:y,range:c.range(),octEncoded:!1}}u.destroy(c),(c=new u.AttributeOctahedronTransform).InitFromAttribute(a)&&(o={quantizationBits:c.quantization_bits(),octEncoded:!0}),u.destroy(c);var f,A=i*s;f=e.t(o)?function(t,e,r,n,a){var o,i;n.quantizationBits<=8?(i=new u.DracoUInt8Array,o=new Uint8Array(a),e.GetAttributeUInt8ForAllPoints(t,r,i)):(i=new u.DracoUInt16Array,o=new Uint16Array(a),e.GetAttributeUInt16ForAllPoints(t,r,i));for(var s=0;s<a;++s)o[s]=i.GetValue(s);return u.destroy(i),o}(r,n,a,o,A):function(t,e,r,n){var a,o;switch(r.data_type()){case 1:case 11:o=new u.DracoInt8Array,a=new Int8Array(n),e.GetAttributeInt8ForAllPoints(t,r,o);break;case 2:o=new u.DracoUInt8Array,a=new Uint8Array(n),e.GetAttributeUInt8ForAllPoints(t,r,o);break;case 3:o=new u.DracoInt16Array,a=new Int16Array(n),e.GetAttributeInt16ForAllPoints(t,r,o);break;case 4:o=new u.DracoUInt16Array,a=new Uint16Array(n),e.GetAttributeUInt16ForAllPoints(t,r,o);break;case 5:case 7:o=new u.DracoInt32Array,a=new Int32Array(n),e.GetAttributeInt32ForAllPoints(t,r,o);break;case 6:case 8:o=new u.DracoUInt32Array,a=new Uint32Array(n),e.GetAttributeUInt32ForAllPoints(t,r,o);break;case 9:case 10:o=new u.DracoFloat32Array,a=new Float32Array(n),e.GetAttributeFloatForAllPoints(t,r,o)}for(var i=0;i<n;++i)a[i]=o.GetValue(i);return u.destroy(o),a}(r,n,a,A);var w=t.ComponentDatatype.fromTypedArray(f);return{array:f,data:{componentsPerAttribute:s,componentDatatype:w,byteOffset:a.byte_offset(),byteStride:t.ComponentDatatype.getSizeInBytes(w)*s,normalized:a.normalized(),quantization:o}}}function d(t){return e.t(t.primitive)?function(t){var e=new u.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(t.dequantizeInShader)for(var a=0;a<r.length;++a)e.SkipAttributeTransform(u[r[a]]);var o=t.bufferView,i=new u.DecoderBuffer;if(i.Init(t.array,o.byteLength),e.GetEncodedGeometryType(i)!==u.TRIANGULAR_MESH)throw new n.t("Unsupported draco mesh geometry type.");var s=new u.Mesh,d=e.DecodeBufferToMesh(i,s);if(!d.ok()||0===s.ptr)throw new n.t("Error decoding draco mesh geometry: "+d.error_msg());u.destroy(i);var f={},A=t.compressedAttributes;for(var w in A)if(A.hasOwnProperty(w)){var l=A[w],b=e.GetAttributeByUniqueId(s,l);f[w]=y(s,e,b)}var m={indexArray:c(s,e),attributeData:f};return u.destroy(s),u.destroy(e),m}(t):function(t){var e=new u.Decoder;t.dequantizeInShader&&(e.SkipAttributeTransform(u.POSITION),e.SkipAttributeTransform(u.NORMAL));var r=new u.DecoderBuffer;if(r.Init(t.buffer,t.buffer.length),e.GetEncodedGeometryType(r)!==u.POINT_CLOUD)throw new n.t("Draco geometry type must be POINT_CLOUD.");var a=new u.PointCloud,o=e.DecodeBufferToPointCloud(r,a);if(!o.ok()||0===a.ptr)throw new n.t("Error decoding draco point cloud: "+o.error_msg());u.destroy(r);var i={},s=t.properties;for(var c in s)if(s.hasOwnProperty(c)){var d=s[c],f=e.GetAttributeByUniqueId(a,d);i[c]=y(a,e,f)}return u.destroy(a),u.destroy(e),i}(t)}function f(t){u=t,self.onmessage=a(d),self.postMessage(!0)}return function(t){var r=t.data.webAssemblyConfig;if(e.t(r))return require([r.modulePath],(function(t){e.t(r.wasmBinaryFile)?(e.t(t)||(t=self.DracoDecoderModule),t(r).then((function(t){f(t)}))):f(t())}))}}));