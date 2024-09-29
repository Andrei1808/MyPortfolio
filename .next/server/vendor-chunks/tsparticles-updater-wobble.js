"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-wobble";
exports.ids = ["vendor-chunks/tsparticles-updater-wobble"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Wobble = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst WobbleSpeed_1 = __webpack_require__(/*! ./WobbleSpeed */ \"(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js\");\nclass Wobble {\n    constructor() {\n        this.distance = 5;\n        this.enable = false;\n        this.speed = new WobbleSpeed_1.WobbleSpeed();\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = (0, tsparticles_engine_1.setRangeValue)(data.distance);\n        }\n        if (data.enable !== undefined) {\n            this.enable = data.enable;\n        }\n        if (data.speed !== undefined) {\n            if ((0, tsparticles_engine_1.isNumber)(data.speed)) {\n                this.speed.load({ angle: data.speed });\n            }\n            else {\n                const rangeSpeed = data.speed;\n                if (rangeSpeed.min !== undefined) {\n                    this.speed.load({ angle: rangeSpeed });\n                }\n                else {\n                    this.speed.load(data.speed);\n                }\n            }\n        }\n    }\n}\nexports.Wobble = Wobble;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyx5R0FBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL0FuZHJlaSBwb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGUuanM/NzcxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV29iYmxlID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgV29iYmxlU3BlZWRfMSA9IHJlcXVpcmUoXCIuL1dvYmJsZVNwZWVkXCIpO1xuY2xhc3MgV29iYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDU7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBuZXcgV29iYmxlU3BlZWRfMS5Xb2JibGVTcGVlZCgpO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGlzdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5zZXRSYW5nZVZhbHVlKShkYXRhLmRpc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmlzTnVtYmVyKShkYXRhLnNwZWVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQubG9hZCh7IGFuZ2xlOiBkYXRhLnNwZWVkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VTcGVlZCA9IGRhdGEuc3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3BlZWQubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZC5sb2FkKHsgYW5nbGU6IHJhbmdlU3BlZWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkLmxvYWQoZGF0YS5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Xb2JibGUgPSBXb2JibGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WobbleSpeed = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass WobbleSpeed {\n    constructor() {\n        this.angle = 50;\n        this.move = 10;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.angle !== undefined) {\n            this.angle = (0, tsparticles_engine_1.setRangeValue)(data.angle);\n        }\n        if (data.move !== undefined) {\n            this.move = (0, tsparticles_engine_1.setRangeValue)(data.move);\n        }\n    }\n}\nexports.WobbleSpeed = WobbleSpeed;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGVTcGVlZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbmRyZWkgcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItd29iYmxlL2Nqcy9PcHRpb25zL0NsYXNzZXMvV29iYmxlU3BlZWQuanM/Zjc2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV29iYmxlU3BlZWQgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jbGFzcyBXb2JibGVTcGVlZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSA1MDtcbiAgICAgICAgdGhpcy5tb3ZlID0gMTA7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5hbmdsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnNldFJhbmdlVmFsdWUpKGRhdGEuYW5nbGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLm1vdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnNldFJhbmdlVmFsdWUpKGRhdGEubW92ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLldvYmJsZVNwZWVkID0gV29iYmxlU3BlZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/cjs/Utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateWobble = void 0;\nfunction updateWobble(particle, delta) {\n    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;\n    if (!wobbleOptions?.enable || !wobble) {\n        return;\n    }\n    const angleSpeed = wobble.angleSpeed * delta.factor, moveSpeed = wobble.moveSpeed * delta.factor, distance = (moveSpeed * ((particle.retina.wobbleDistance ?? 0) * delta.factor)) / (1000 / 60), max = 2 * Math.PI, { position } = particle;\n    wobble.angle += angleSpeed;\n    if (wobble.angle > max) {\n        wobble.angle -= max;\n    }\n    position.x += distance * Math.cos(wobble.angle);\n    position.y += distance * Math.abs(Math.sin(wobble.angle));\n}\nexports.updateWobble = updateWobble;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL1V0aWxzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBLFlBQVksd0JBQXdCLHNCQUFzQixTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDBOQUEwTixXQUFXO0FBQ3JPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQW5kcmVpIHBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXdvYmJsZS9janMvVXRpbHMuanM/YjgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlV29iYmxlID0gdm9pZCAwO1xuZnVuY3Rpb24gdXBkYXRlV29iYmxlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgIGNvbnN0IHsgd29iYmxlOiB3b2JibGVPcHRpb25zIH0gPSBwYXJ0aWNsZS5vcHRpb25zLCB7IHdvYmJsZSB9ID0gcGFydGljbGU7XG4gICAgaWYgKCF3b2JibGVPcHRpb25zPy5lbmFibGUgfHwgIXdvYmJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFuZ2xlU3BlZWQgPSB3b2JibGUuYW5nbGVTcGVlZCAqIGRlbHRhLmZhY3RvciwgbW92ZVNwZWVkID0gd29iYmxlLm1vdmVTcGVlZCAqIGRlbHRhLmZhY3RvciwgZGlzdGFuY2UgPSAobW92ZVNwZWVkICogKChwYXJ0aWNsZS5yZXRpbmEud29iYmxlRGlzdGFuY2UgPz8gMCkgKiBkZWx0YS5mYWN0b3IpKSAvICgxMDAwIC8gNjApLCBtYXggPSAyICogTWF0aC5QSSwgeyBwb3NpdGlvbiB9ID0gcGFydGljbGU7XG4gICAgd29iYmxlLmFuZ2xlICs9IGFuZ2xlU3BlZWQ7XG4gICAgaWYgKHdvYmJsZS5hbmdsZSA+IG1heCkge1xuICAgICAgICB3b2JibGUuYW5nbGUgLT0gbWF4O1xuICAgIH1cbiAgICBwb3NpdGlvbi54ICs9IGRpc3RhbmNlICogTWF0aC5jb3Mod29iYmxlLmFuZ2xlKTtcbiAgICBwb3NpdGlvbi55ICs9IGRpc3RhbmNlICogTWF0aC5hYnMoTWF0aC5zaW4od29iYmxlLmFuZ2xlKSk7XG59XG5leHBvcnRzLnVwZGF0ZVdvYmJsZSA9IHVwZGF0ZVdvYmJsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WobbleUpdater = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Wobble_1 = __webpack_require__(/*! ./Options/Classes/Wobble */ \"(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-wobble/cjs/Utils.js\");\nclass WobbleUpdater {\n    constructor(container) {\n        this.container = container;\n    }\n    init(particle) {\n        const wobbleOpt = particle.options.wobble;\n        if (wobbleOpt?.enable) {\n            particle.wobble = {\n                angle: (0, tsparticles_engine_1.getRandom)() * Math.PI * 2,\n                angleSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.angle) / 360,\n                moveSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.move) / 10,\n            };\n        }\n        else {\n            particle.wobble = {\n                angle: 0,\n                angleSpeed: 0,\n                moveSpeed: 0,\n            };\n        }\n        particle.retina.wobbleDistance = (0, tsparticles_engine_1.getRangeValue)(wobbleOpt?.distance ?? 0) * this.container.retina.pixelRatio;\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.wobble) {\n            options.wobble = new Wobble_1.Wobble();\n        }\n        for (const source of sources) {\n            options.wobble.load(source?.wobble);\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0, Utils_1.updateWobble)(particle, delta);\n    }\n}\nexports.WobbleUpdater = WobbleUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL1dvYmJsZVVwZGF0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RCxpQkFBaUIsbUJBQU8sQ0FBQywrR0FBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkVBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbmRyZWkgcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItd29iYmxlL2Nqcy9Xb2JibGVVcGRhdGVyLmpzPzhjMjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldvYmJsZVVwZGF0ZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jb25zdCBXb2JibGVfMSA9IHJlcXVpcmUoXCIuL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGVcIik7XG5jb25zdCBVdGlsc18xID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5jbGFzcyBXb2JibGVVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIGluaXQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgd29iYmxlT3B0ID0gcGFydGljbGUub3B0aW9ucy53b2JibGU7XG4gICAgICAgIGlmICh3b2JibGVPcHQ/LmVuYWJsZSkge1xuICAgICAgICAgICAgcGFydGljbGUud29iYmxlID0ge1xuICAgICAgICAgICAgICAgIGFuZ2xlOiAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZG9tKSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgICAgICAgYW5nbGVTcGVlZDogKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKHdvYmJsZU9wdC5zcGVlZC5hbmdsZSkgLyAzNjAsXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkOiAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkod29iYmxlT3B0LnNwZWVkLm1vdmUpIC8gMTAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFydGljbGUud29iYmxlID0ge1xuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgICAgIGFuZ2xlU3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0aWNsZS5yZXRpbmEud29iYmxlRGlzdGFuY2UgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkod29iYmxlT3B0Py5kaXN0YW5jZSA/PyAwKSAqIHRoaXMuY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvO1xuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuICFwYXJ0aWNsZS5kZXN0cm95ZWQgJiYgIXBhcnRpY2xlLnNwYXduaW5nICYmICEhcGFydGljbGUub3B0aW9ucy53b2JibGU/LmVuYWJsZTtcbiAgICB9XG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIW9wdGlvbnMud29iYmxlKSB7XG4gICAgICAgICAgICBvcHRpb25zLndvYmJsZSA9IG5ldyBXb2JibGVfMS5Xb2JibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBvcHRpb25zLndvYmJsZS5sb2FkKHNvdXJjZT8ud29iYmxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKDAsIFV0aWxzXzEudXBkYXRlV29iYmxlKShwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuV29iYmxlVXBkYXRlciA9IFdvYmJsZVVwZGF0ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/cjs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/cjs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadWobbleUpdater = void 0;\nconst WobbleUpdater_1 = __webpack_require__(/*! ./WobbleUpdater */ \"(ssr)/./node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js\");\nasync function loadWobbleUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"wobble\", (container) => new WobbleUpdater_1.WobbleUpdater(container), refresh);\n}\nexports.loadWobbleUpdater = loadWobbleUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QjtBQUN6Qix3QkFBd0IsbUJBQU8sQ0FBQyw2RkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQW5kcmVpIHBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXdvYmJsZS9janMvaW5kZXguanM/MzVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFdvYmJsZVVwZGF0ZXIgPSB2b2lkIDA7XG5jb25zdCBXb2JibGVVcGRhdGVyXzEgPSByZXF1aXJlKFwiLi9Xb2JibGVVcGRhdGVyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZFdvYmJsZVVwZGF0ZXIoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRQYXJ0aWNsZVVwZGF0ZXIoXCJ3b2JibGVcIiwgKGNvbnRhaW5lcikgPT4gbmV3IFdvYmJsZVVwZGF0ZXJfMS5Xb2JibGVVcGRhdGVyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkV29iYmxlVXBkYXRlciA9IGxvYWRXb2JibGVVcGRhdGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/cjs/index.js\n");

/***/ })

};
;