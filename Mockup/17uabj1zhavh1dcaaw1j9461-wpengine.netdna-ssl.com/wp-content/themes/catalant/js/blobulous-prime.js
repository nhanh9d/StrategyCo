            document.addEventListener("DOMContentLoaded", function(){

!function(l) {
    function n(n) {
        for (var e, t, i = n[0], o = n[1], r = n[2], a = 0, s = []; a < i.length; a++)
            t = i[a],
            m[t] && s.push(m[t][0]),
            m[t] = 0;
        for (e in o)
            Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
        for (u && u(n); s.length; )
            s.shift()();
        return f.push.apply(f, r || []),
        c()
    }
    function c() {
        for (var n, e = 0; e < f.length; e++) {
            for (var t = f[e], i = !0, o = 1; o < t.length; o++) {
                var r = t[o];
                0 !== m[r] && (i = !1)
            }
            i && (f.splice(e--, 1),
            n = a(a.s = t[0]))
        }
        return n
    }
    var t = {}
      , m = {
        0: 0
    }
      , f = [];
    function a(n) {
        if (t[n])
            return t[n].exports;
        var e = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return l[n].call(e.exports, e, e.exports, a),
        e.l = !0,
        e.exports
    }
    a.m = l,
    a.c = t,
    a.d = function(n, e, t) {
        a.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: t
        })
    }
    ,
    a.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, n) {
        if (1 & n && (e = a(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (a.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var i in e)
                a.d(t, i, function(n) {
                    return e[n]
                }
                .bind(null, i));
        return t
    }
    ,
    a.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        }
        : function() {
            return n
        }
        ;
        return a.d(e, "a", e),
        e
    }
    ,
    a.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }
    ,
    a.p = "";
    var e = window.webpackJsonp = window.webpackJsonp || []
      , i = e.push.bind(e);
    e.push = n,
    e = e.slice();
    for (var o = 0; o < e.length; o++)
        n(e[o]);
    var u = i;
    f.push([32, 1]),
    c()
}([, , , , , , , , , , , function(n, e) {
    n.exports = function(n) {
        return '<canvas></canvas>\x3c!----<div class="info"></div>--\x3e'
    }
}
, , function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
}
, function(n, e) {
    n.exports = "\nprecision highp float;\nprecision highp int;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\nuniform sampler2D bgTexture;\n\nvoid main()\n{\n    gl_FragColor = texture2D(bgTexture, vUv);\n}\n"
}
, function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nuniform float time;\n\nconst float offset = 0.01;\nconst vec3 minVal = vec3(0.001);\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec4 vPos;\nvarying vec3 wPos;\n\nvec3 getNeightbour(vec3 point, float offsetT, float offsetP)\n{\n    float r = sqrt(point.x * point.x + point.y * point.y + point.z * point.z);\n    float theta = acos(point.z / r);\n    float phi = atan(point.y, point.x);\n    theta += offsetT;\n    phi += offsetP;\n    float x = r * sin(theta) * cos(phi);\n    float y = r * sin(theta) * sin(phi);\n    float z = r * cos(theta);\n    return vec3(x, y, z);\n}\n\nvec3 transform(vec3 pos) {\n\n    vec3 dir = normalize(pos);\n    float z = 0.0;\n    z += sin(pos.x * 1.3 + time * 10.5);\n    z += sin(pos.y * 2.4 + time * 8.5);\n    z += sin(pos.z * 0.4 + time * 2.5);\n    z *= 0.35;\n    return pos + dir * z;\n}\n\nvoid main()\n{\n    vUv = uv;\n    vec3 pos = transform(position + minVal);\n    vPos = modelViewMatrix * vec4(pos, 1.0);\n    wPos = (modelMatrix * vec4(pos, 1.0)).xyz;\n    gl_Position = projectionMatrix * vPos;\n    vec3 n1 = transform(getNeightbour(position + minVal, offset, 0.0));\n    vec3 n2 = transform(getNeightbour(position + minVal, 0.0, offset));\n\tvec3 tangent = n1 - pos;\n\tvec3 bitangent = n2 - pos;\n    vNormal = normalize(normalMatrix * cross(tangent, bitangent));\n}\n"
}
, function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nuniform float rimLimit;\nuniform float rimPower;\nuniform float rimIntensity;\nuniform vec3 color;\nuniform float colorVariance;\nuniform float time;\nuniform float fogStart;\nuniform float fogEnd;\nuniform sampler2D bgTexture;\nuniform vec2 resolution;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec4 vPos;\nvarying vec3 wPos;\n\nfloat rim(vec3 viewDirection, vec3 surfaceNormal, float power, float intensity)\n{\n    float F = dot(normalize(viewDirection), normalize(surfaceNormal));\n    return pow(F, power) * intensity;\n}\n\nfloat range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n    float oldRange = oldMax - oldMin;\n    float newRange = newMax - newMin;\n    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;\n}\n\nfloat crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));\n}\n\nvec3 rgb2hsv(vec3 c) {\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nfloat fog() {\n\treturn smoothstep(fogStart, fogEnd, length(vPos.xyz));\n}\n\nvoid main()\n{\n    float rim = abs(rim(-vPos.xyz, vNormal, rimPower, rimIntensity));\n\n    if(rim > rimLimit)\n        discard;\n\n    rim = crange(rim, -rimLimit, rimLimit, 0.0, 1.0);\n    vec3 c = color;\n    c = rgb2hsv(c);\n    c.r = mod(c.r + (wPos.y * colorVariance + time) , 1.0);\n    c = hsv2rgb(c);\n    vec3 bgColor = texture2D(bgTexture, gl_FragCoord.xy / resolution).rgb;\n    c = mix(c, bgColor, fog());\n    gl_FragColor.rgb = c * rim;\n    gl_FragColor.a = 1.0;\n}\n"
}
, , function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
}
, function(n, e) {
    n.exports = "\nprecision highp float;\nprecision highp int;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nuniform sampler2D heatmap;\nuniform sampler2D tDiffuse;\nuniform float displacement;\nuniform float time;\n\nvarying vec2 vUv;\n\nfloat range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n    float oldRange = oldMax - oldMin;\n    float newRange = newMax - newMin;\n    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;\n}\n\nfloat crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));\n}\n\nvoid main()\n{\n    float mouse = crange(texture2D(heatmap, vUv).r, 0.15, 1.0, 0.0, 1.0);\n    vec2 dR = vec2(mouse * (0.008 + displacement * sin(time * 1.22)), mouse * (-0.03 + displacement * 0.5 * sin(time * 0.8135)));\n    vec2 dG = vec2(mouse * (0.008 + displacement * sin(-time * 0.82)), mouse * displacement * sin(-time * 0.35135));\n    vec2 dB = vec2(mouse * (-0.008 - displacement * sin(time * 0.5)), mouse * displacement * sin(time * 2.0135));\n\n    vec3 color;\n    color.r = texture2D(tDiffuse, vUv + dR).r;\n    color.g = texture2D(tDiffuse, vUv + dG).g;\n    color.b = texture2D(tDiffuse, vUv + dB).b;\n    gl_FragColor.rgb = color;\n    gl_FragColor.a = 1.0;\n}\n"
}
, , , , , function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
}
, function(n, e) {
    n.exports = "\nprecision highp float;\nprecision highp int;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nuniform vec3 colorBg1;\nuniform vec3 colorBg2;\n\n#ifndef PI\n    #define PI 3.141592653589793\n#endif\n\n#ifndef HALF_PI\n    #define HALF_PI 1.5707963267948966\n#endif\n\nfloat backInOut(float t) {\n    float f = t < 0.5\n    ? 2.0 * t\n    : 1.0 - (2.0 * t - 1.0);\n    float g = pow(f, 3.0) - f * sin(f * PI);\n    return t < 0.5\n    ? 0.5 * g\n    : 0.5 * (1.0 - g) + 0.5;\n}\nfloat backIn(float t) {\n    return pow(t, 3.0) - t * sin(t * PI);\n}\nfloat backOut(float t) {\n    float f = 1.0 - t;\n    return 1.0 - (pow(f, 3.0) - f * sin(f * PI));\n}\nfloat bounceOut(float t) {\n    const float a = 4.0 / 11.0;\n    const float b = 8.0 / 11.0;\n    const float c = 9.0 / 10.0;\n    const float ca = 4356.0 / 361.0;\n    const float cb = 35442.0 / 1805.0;\n    const float cc = 16061.0 / 1805.0;\n    float t2 = t * t;\n    return t < a\n    ? 7.5625 * t2\n    : t < b\n    ? 9.075 * t2 - 9.9 * t + 3.4\n    : t < c\n    ? ca * t2 - cb * t + cc\n    : 10.8 * t * t - 20.52 * t + 10.72;\n}\nfloat bounceIn(float t) {\n    return 1.0 - bounceOut(1.0 - t);\n}\nfloat bounceInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;\n}\nfloat circularInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))\n    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);\n}\nfloat circularIn(float t) {\n    return 1.0 - sqrt(1.0 - t * t);\n}\nfloat circularOut(float t) {\n    return sqrt((2.0 - t) * t);\n}\nfloat cubicInOut(float t) {\n    return t < 0.5\n    ? 4.0 * t * t * t\n    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;\n}\nfloat cubicIn(float t) {\n    return t * t * t;\n}\nfloat cubicOut(float t) {\n    float f = t - 1.0;\n    return f * f * f + 1.0;\n}\nfloat elasticInOut(float t) {\n    return t < 0.5\n    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))\n    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;\n}\nfloat elasticIn(float t) {\n    return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));\n}\nfloat elasticOut(float t) {\n    return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;\n}\nfloat expoInOut(float t) {\n    return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n    ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n    : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\nfloat expoIn(float t) {\n    return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));\n}\nfloat expoOut(float t) {\n    return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\nfloat linear(float t) {\n    return t;\n}\nfloat quadraticInOut(float t) {\n    float p = 2.0 * t * t;\n    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\n}\nfloat quadraticIn(float t) {\n    return t * t;\n}\nfloat quadraticOut(float t) {\n    return -t * (t - 2.0);\n}\nfloat quarticInOut(float t) {\n    return t < 0.5\n    ? +8.0 * pow(t, 4.0)\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\n}\nfloat quarticIn(float t) {\n    return pow(t, 4.0);\n}\nfloat quarticOut(float t) {\n    return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;\n}\nfloat qinticInOut(float t) {\n    return t < 0.5\n    ? +16.0 * pow(t, 5.0)\n    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;\n}\nfloat qinticIn(float t) {\n    return pow(t, 5.0);\n}\nfloat qinticOut(float t) {\n    return 1.0 - (pow(t - 1.0, 5.0));\n}\nfloat sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n}\nfloat sineIn(float t) {\n    return sin((t - 1.0) * HALF_PI) + 1.0;\n}\nfloat sineOut(float t) {\n    return sin(t * HALF_PI);\n}\n\nvoid main()\n{\n    gl_FragColor.rgb = mix(colorBg2, colorBg1, quadraticOut(vUv.y));\n    gl_FragColor.a = 1.0;\n}\n"
}
, function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 resolution;\n\nvoid main() {\n  vUv = uv;\n  vec2 fragCoord = uv * resolution;\n  vec2 inverseVP = 1.0 / resolution.xy;\n  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n  v_rgbM = vec2(fragCoord * inverseVP);\n\n  gl_Position = vec4(position,1.0);\n}\n"
}
, function(n, e) {
    n.exports = "precision highp float;\nprecision highp int;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\nfloat when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\nfloat when_lt(float x, float y) {\n    return max(sign(y - x), 0.0);\n}\n\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n\n\n    color = vec4(rgbB, texColor.a);\n    color = mix(color, vec4(rgbA, texColor.a), when_lt(lumaB, lumaMin));\n    color = mix(color, vec4(rgbA, texColor.a), when_gt(lumaB, lumaMax));\n\n    return color;\n}\n\nvoid main() {\n  vec2 fragCoord = vUv * resolution;\n  gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n"
}
, , , function(n, e, t) {}
, function(n, e, t) {}
, function(n, e, t) {
    "use strict";
    t.r(e);
    t(30);
    var s = t(0)
      , l = t(9)
      , r = t(28)
      , a = t(29)
      , c = {
        main: null,
        rootUrl: null,
        appData: null,
        client: {
            browser: "",
            device: "",
            lang: "",
            os: "",
            sizes: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            mousePosition: {
                x: 0,
                y: 0
            }
        }
    }
      , i = t(11)
      , m = t.n(i)
      , f = (t(31),
    t(8))
      , u = t(12)
      , v = t(6)
      , o = t(13)
      , h = t.n(o)
      , p = t(14)
      , d = t.n(p)
      , g = t(15)
      , x = t.n(g)
      , w = t(16)
      , b = t.n(w);
    function M(n, e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
        }
    }
    var y = function() {
        function o(n, e, t) {
            var i = this;
            !function(n, e) {
                if (!(n instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.camera = n,
            this.renderer = e,
            this.mainUniforms = t,
            this.timeIncrement = this.mainUniforms.speed,
            this.scene = new s.m,
            this.createBg(),
            this.createSphere(),
            this.pass = new u.a(this.scene,this.camera),
            this.pass.setSize = function(n, e) {
                i.sphereMaterial.uniforms.resolution.value.x = n,
                i.sphereMaterial.uniforms.resolution.value.y = e
            }
            ,
            this.pass.renderToScreen = !1
        }
        var n, e, t;
        return n = o,
        (e = [{
            key: "createBg",
            value: function() {
                var n = Object(v.a)();
                this.bgMaterial = new s.l({
                    uniforms: {
                        bgTexture: {
                            value: null
                        }
                    },
                    vertexShader: h.a,
                    fragmentShader: d.a
                }),
                this.bgMaterial.depthTest = !1,
                this.bgMaterial.depthWrite = !1;
                var e = new s.h(n,this.bgMaterial);
                e.frustumCulled = !1,
                e.renderOrder = -10,
                this.scene.add(e)
            }
        }, {
            key: "createSphere",
            value: function() {
                var n = new s.n(3,95,95);
                this.sphereMaterial = new s.l({
                    uniforms: {
                        rimLimit: {
                            value: this.mainUniforms.rimLimit
                        },
                        rimPower: {
                            value: this.mainUniforms.rimPower
                        },
                        rimIntensity: {
                            value: this.mainUniforms.rimIntensity
                        },
                        color: {
                            value: new s.e(this.mainUniforms.color)
                        },
                        colorVariance: {
                            value: this.mainUniforms.colorVariance
                        },
                        time: {
                            value: 0
                        },
                        bgTexture: {
                            value: null
                        },
                        fogStart: {
                            value: this.mainUniforms.fogStart
                        },
                        fogEnd: {
                            value: this.mainUniforms.fogEnd
                        },
                        resolution: {
                            value: new s.p
                        }
                    },
                    side: s.f,
                    vertexShader: x.a,
                    fragmentShader: b.a
                }),
                this.sphereMesh = new s.h(n,this.sphereMaterial),
                this.sphereMesh.frustumCulled = !1,
                this.sphereMesh.renderOrder = -5,
                this.scene.add(this.sphereMesh)
            }
        }, {
            key: "addTime",
            value: function() {
                this.sphereMaterial.uniforms.time.value += this.timeIncrement
            }
        }]) && M(n.prototype, e),
        t && M(n, t),
        o
    }()
      , S = t(17)
      , P = t(2)
      , _ = t(18)
      , C = t.n(_)
      , U = t(19)
      , z = t.n(U);
    function E(n, e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
        }
    }
    var O = function() {
        function e(n) {
            var t = this;
            !function(n, e) {
                if (!(n instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.mainUniforms = n,
            this.timeIncrement = this.mainUniforms.speed,
            this.heatmap = new S.a({
                heatDecay: .03,
                scale: this.mainUniforms.heatScale
            }),
            this.material = new s.l({
                uniforms: {
                    tDiffuse: {
                        value: null
                    },
                    heatmap: {
                        value: this.heatmap.texture
                    },
                    time: {
                        value: 0
                    },
                    displacement: {
                        value: this.mainUniforms.displacement
                    }
                },
                vertexShader: C.a,
                fragmentShader: z.a
            }),
            this.material.depthWrite = !1,
            this.material.depthTest = !1,
            this.pass = new P.a(this.material),
            this.pass.setSize = function(n, e) {
                t.heatmap.resize(n, e)
            }
            ,
            this.pass.renderToScreen = !1
        }
        var n, t, i;
        return n = e,
        (t = [{
            key: "addTime",
            value: function() {
                this.material.uniforms.time.value += this.timeIncrement
            }
        }]) && E(n.prototype, t),
        i && E(n, i),
        e
    }()
      , I = t(20);
    var A = function n(e, t, i) {
        !function(n, e) {
            if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, n),
        this.pass = new I.a(new s.p(window.innerWidth,window.innerHeight),t,e,i),
        this.pass.renderToScreen = !0
    }
      , N = t(24)
      , B = t.n(N)
      , D = t(25)
      , V = t.n(D);
    var F = function n(e) {
        !function(n, e) {
            if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, n),
        this.mainUniforms = e,
        this.material = new s.l({
            uniforms: {
                colorBg1: {
                    value: new s.e(this.mainUniforms.colorBg1)
                },
                colorBg2: {
                    value: new s.e(this.mainUniforms.colorBg2)
                }
            },
            vertexShader: B.a,
            fragmentShader: V.a
        }),
        this.material.depthWrite = !1,
        this.material.depthTest = !1,
        this.pass = new P.a(this.material),
        this.pass.setSize = function(n, e) {}
        ,
        this.pass.renderToScreen = !1
    }
      , T = t(26)
      , W = t.n(T)
      , j = t(27)
      , q = t.n(j);
    var L = function n() {
        var t = this;
        !function(n, e) {
            if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, n),
        this.material = new s.l({
            uniforms: {
                tDiffuse: {
                    value: null
                },
                resolution: {
                    value: new s.p
                }
            },
            vertexShader: W.a,
            fragmentShader: q.a
        }),
        this.material.depthWrite = !1,
        this.material.depthTest = !1,
        this.pass = new P.a(this.material),
        this.pass.setSize = function(n, e) {
            t.material.uniforms.resolution.value.x = n,
            t.material.uniforms.resolution.value.y = e
        }
        ,
        this.pass.renderToScreen = !1
    };
    function R(n) {
        return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        }
        : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        )(n)
    }
    function k(n, e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
        }
    }
    function H(n, e) {
        return !e || "object" !== R(e) && "function" != typeof e ? function(n) {
            if (void 0 !== n)
                return n;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(n) : e
    }
    function X(n) {
        return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        }
        )(n)
    }
    function K(n, e) {
        return (K = Object.setPrototypeOf || function(n, e) {
            return n.__proto__ = e,
            n
        }
        )(n, e)
    }
    var G = function(n) {
        function o(n, e, t) {
            var i;
            return function(n, e) {
                if (!(n instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            (i = H(this, X(o).call(this, {
                eventHub: {},
                store: c,
                router: {
                    resize: function() {}
                },
                url: n,
                client: e,
                appData: t,
                appType: "DESKTOP",
                templateFunction: m.a
            }))).mainUniforms = {
                colorBg1: "#1f497d",
                colorBg2: "#1f497d",
                rimLimit: .26,
                rimPower: 1.,
                rimIntensity: .4,
                speed: .0007,
                color: "#785bff",
                colorVariance: .07,
                fogStart: 7,
                fogEnd: 16,
                heatScale: "desktop" === i.store.client.device ? .3 : .72,
                displacement: .06,
                bloomRadius: .25,
                bloomStr: 1.01,
                threshold: .37
            },
            i
        }
        var e, t, i;
        return function(n, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && K(n, e)
        }(o, a["a"]),
        e = o,
        (t = [{
            key: "setup",
            value: function() {
                var n = this;
                this.renderer = new s.s({
                    canvas: document.querySelector("canvas"),
                    antialias: !1,
                    transparent: !1
                }),
                // this.renderer.setClearColor("#000000"),
                this.renderer.autoClear = !1,
                this.camera = new s.j(70,this.store.client.sizes.width / this.store.client.sizes.height,.01,10),
                this.camera.target = new s.q(0,0,0),
                this.camera.position.set(-5, -1, 5),
                this.camera.lookAt(this.camera.target),
                this.effectComposerBg = new f.a(this.renderer),
                this.passBg = new F(this.mainUniforms),
                this.effectComposerBg.addPass(this.passBg.pass),
                this.effectComposerScene = new f.a(this.renderer),
                this.passScene = new y(this.camera,this.renderer,this.mainUniforms),
                this.passScene.bgMaterial.uniforms.bgTexture.value = this.effectComposerBg.readBuffer.texture,
                this.passScene.sphereMaterial.uniforms.bgTexture.value = this.effectComposerBg.readBuffer.texture,
                this.passHeat = new O(this.mainUniforms),
                this.passFXAA = new L,
                this.passBloom = new A(this.mainUniforms.bloomRadius,this.mainUniforms.bloomStr,this.mainUniforms.threshold),
                this.effectComposerScene.addPass(this.passScene.pass),
                this.effectComposerScene.addPass(this.passHeat.pass),
                this.effectComposerScene.addPass(this.passFXAA.pass),
                this.effectComposerScene.addPass(this.passBloom.pass),
                this.createGui(),
                this.mousePosition = new s.p(-1,-1),
                this.events.add(document, "mousemove", this.move, this),
                this.events.add(document, "touchmove", this.move, this),
                Object(r.a)(-1, function() {
                    n.passHeat.heatmap.mousePosition.x = n.mousePosition.x,
                    n.passHeat.heatmap.mousePosition.y = n.mousePosition.y,
                    n.passHeat.heatmap.update(),
                    n.passScene.addTime(),
                    n.passHeat.addTime(),
                    n.effectComposerBg.render(),
                    n.effectComposerScene.render()
                })
            }
        }, {
            key: "move",
            value: function(n) {
                var e = n.targetTouches ? n.targetTouches[0] : n;
                this.mousePosition.x = e.clientX,
                this.mousePosition.y = e.clientY
            }
        }, {
            key: "createGui",
            value: function() {
                var e = this
                  , n = new l.a
                  , t = n.addFolder("Background");
                t.closed = !1,
                t.addColor(this.mainUniforms, "colorBg1").onChange(function(n) {
                    e.passBg.material.uniforms.colorBg1.value = new s.e(n)
                }),
                t.addColor(this.mainUniforms, "colorBg2").onChange(function(n) {
                    e.passBg.material.uniforms.colorBg2.value = new s.e(n)
                });
                var i = n.addFolder("Rim");
                i.closed = !1,
                i.add(this.mainUniforms, "rimLimit", 0, 1).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.rimLimit.value = n
                }),
                i.add(this.mainUniforms, "rimPower", 0, 5).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.rimPower.value = n
                }),
                i.add(this.mainUniforms, "rimIntensity", 0, 5).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.rimIntensity.value = n
                });
                var o = n.addFolder("Sphere");
                o.closed = !1,
                o.add(this.mainUniforms, "speed", 0, .03).onChange(function(n) {
                    e.passScene.timeIncrement = n
                }),
                o.addColor(this.mainUniforms, "color").onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.color.value = new s.e(n)
                }),
                o.add(this.mainUniforms, "colorVariance", 0, 1).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.colorVariance.value = n
                }),
                o.add(this.mainUniforms, "fogStart", 0, 20).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.fogStart.value = n
                }),
                o.add(this.mainUniforms, "fogEnd", 0, 20).onChange(function(n) {
                    e.passScene.sphereMaterial.uniforms.fogEnd.value = n
                });
                var r = n.addFolder("Interaction");
                r.closed = !1,
                r.add(this.mainUniforms, "heatScale", 0, 1).onChange(function(n) {
                    e.passHeat.heatmap._scale = n
                }),
                r.add(this.mainUniforms, "displacement", 0, .25).onChange(function(n) {
                    e.passHeat.material.uniforms.displacement.value = n
                });
                var a = n.addFolder("Bloom");
                a.closed = !1,
                a.add(this.mainUniforms, "bloomRadius", .01, 1).onChange(function(n) {
                    e.passBloom.pass.radius = n
                }),
                a.add(this.mainUniforms, "bloomStr", 0, 2).onChange(function(n) {
                    e.passBloom.pass.strength = n
                }),
                a.add(this.mainUniforms, "threshold", 0, .75).onChange(function(n) {
                    e.passBloom.pass.threshold = n
                }),
                n.close()
            }
        }, {
            key: "resize",
            value: function(n, e) {
                this.renderer && (this.camera.aspect = this.store.client.sizes.width / this.store.client.sizes.height,
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize(this.store.client.sizes.width, this.store.client.sizes.height),
                this.effectComposerScene && (this.effectComposerBg.setSize(this.store.client.sizes.width, this.store.client.sizes.height),
                this.effectComposerScene.setSize(this.store.client.sizes.width, this.store.client.sizes.height)))
            }
        }]) && k(e.prototype, t),
        i && k(e, i),
        o
    }();
    "loading" !== document.readyState ? (new G).render() : document.addEventListener("DOMContentLoaded", function() {
        (new G).render()
    }, !1)
}
]);

});
