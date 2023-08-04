"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "@t3-oss/env-nextjs":
/*!*************************************!*\
  !*** external "@t3-oss/env-nextjs" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(api)/./src/server/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_1__]);\n_server_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFFNUMsaUVBQWVBLGdEQUFRQSxDQUFDQyxxREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXQzLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIn4vc2VydmVyL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(api)/./src/server/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = (ctx)=>{\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(ctx.req, ctx.res, authOptions);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQU12QztBQUN1QztBQUMxQjtBQUNLO0FBdUJyQzs7OztDQUlDLEdBQ00sTUFBTUssY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQU07Z0JBQy9CLEdBQUdELE9BQU87Z0JBQ1ZDLE1BQU07b0JBQ0osR0FBR0QsUUFBUUMsSUFBSTtvQkFDZkMsSUFBSUQsS0FBS0MsRUFBRTtnQkFDYjtZQUNGO0lBQ0Y7SUFDQUMsU0FBU1Ysd0VBQWFBLENBQUNJLDhDQUFNQTtJQUM3Qk8sV0FBVztRQUNUVCxrRUFBZUEsQ0FBQztZQUNkVSxVQUFVVCx5Q0FBR0EsQ0FBQ1UsaUJBQWlCO1lBQy9CQyxjQUFjWCx5Q0FBR0EsQ0FBQ1kscUJBQXFCO1FBQ3pDO0tBVUQ7QUFDSCxFQUFFO0FBRUY7Ozs7Q0FJQyxHQUNNLE1BQU1DLHVCQUF1QixDQUFDQztJQUluQyxPQUFPaEIsMkRBQWdCQSxDQUFDZ0IsSUFBSUMsR0FBRyxFQUFFRCxJQUFJRSxHQUFHLEVBQUVkO0FBQzVDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS10My1hcHAvLi9zcmMvc2VydmVyL2F1dGgudHM/MjJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IHR5cGUgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge1xuICBnZXRTZXJ2ZXJTZXNzaW9uLFxuICB0eXBlIE5leHRBdXRoT3B0aW9ucyxcbiAgdHlwZSBEZWZhdWx0U2Vzc2lvbixcbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwifi9lbnYubWpzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9zZXJ2ZXIvZGJcIjtcblxuLyoqXG4gKiBNb2R1bGUgYXVnbWVudGF0aW9uIGZvciBgbmV4dC1hdXRoYCB0eXBlcy4gQWxsb3dzIHVzIHRvIGFkZCBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgYHNlc3Npb25gXG4gKiBvYmplY3QgYW5kIGtlZXAgdHlwZSBzYWZldHkuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvZ2V0dGluZy1zdGFydGVkL3R5cGVzY3JpcHQjbW9kdWxlLWF1Z21lbnRhdGlvblxuICovXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24gZXh0ZW5kcyBEZWZhdWx0U2Vzc2lvbiB7XG4gICAgdXNlcjogRGVmYXVsdFNlc3Npb25bXCJ1c2VyXCJdICYge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgICAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAgIH07XG4gIH1cblxuICAvLyBpbnRlcmZhY2UgVXNlciB7XG4gIC8vICAgLy8gLi4ub3RoZXIgcHJvcGVydGllc1xuICAvLyAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAvLyB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgTmV4dEF1dGguanMgdXNlZCB0byBjb25maWd1cmUgYWRhcHRlcnMsIHByb3ZpZGVycywgY2FsbGJhY2tzLCBldGMuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+ICh7XG4gICAgICAuLi5zZXNzaW9uLFxuICAgICAgdXNlcjoge1xuICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBEaXNjb3JkUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IGVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvKipcbiAgICAgKiAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZS5cbiAgICAgKlxuICAgICAqIE1vc3Qgb3RoZXIgcHJvdmlkZXJzIHJlcXVpcmUgYSBiaXQgbW9yZSB3b3JrIHRoYW4gdGhlIERpc2NvcmQgcHJvdmlkZXIuIEZvciBleGFtcGxlLCB0aGVcbiAgICAgKiBHaXRIdWIgcHJvdmlkZXIgcmVxdWlyZXMgeW91IHRvIGFkZCB0aGUgYHJlZnJlc2hfdG9rZW5fZXhwaXJlc19pbmAgZmllbGQgdG8gdGhlIEFjY291bnRcbiAgICAgKiBtb2RlbC4gUmVmZXIgdG8gdGhlIE5leHRBdXRoLmpzIGRvY3MgZm9yIHRoZSBwcm92aWRlciB5b3Ugd2FudCB0byB1c2UuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9wcm92aWRlcnMvZ2l0aHViXG4gICAgICovXG4gIF0sXG59O1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGBnZXRTZXJ2ZXJTZXNzaW9uYCBzbyB0aGF0IHlvdSBkb24ndCBuZWVkIHRvIGltcG9ydCB0aGUgYGF1dGhPcHRpb25zYCBpbiBldmVyeSBmaWxlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vbmV4dGpzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJBdXRoU2Vzc2lvbiA9IChjdHg6IHtcbiAgcmVxOiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0W1wicmVxXCJdO1xuICByZXM6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRbXCJyZXNcIl07XG59KSA9PiB7XG4gIHJldHVybiBnZXRTZXJ2ZXJTZXNzaW9uKGN0eC5yZXEsIGN0eC5yZXMsIGF1dGhPcHRpb25zKTtcbn07XG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImdldFNlcnZlclNlc3Npb24iLCJEaXNjb3JkUHJvdmlkZXIiLCJlbnYiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJESVNDT1JEX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsImdldFNlcnZlckF1dGhTZXNzaW9uIiwiY3R4IiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/auth.ts\n");

/***/ }),

/***/ "(api)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = prisma;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUVoQyxNQUFNRSxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSix3REFBWUEsQ0FBQztJQUNmSyxLQUNFSix5Q0FBR0EsQ0FBQ0ssUUFBUSxLQUFLLGdCQUFnQjtRQUFDO1FBQVM7UUFBUztLQUFPLEdBQUc7UUFBQztLQUFRO0FBQzNFLEdBQUc7QUFFTCxJQUFJTCx5Q0FBR0EsQ0FBQ0ssUUFBUSxLQUFLLGNBQWNKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXQzLWFwcC8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2Vudi5tanNcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/db.ts\n");

/***/ }),

/***/ "(api)/./src/env.mjs":
/*!*********************!*\
  !*** ./src/env.mjs ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"@t3-oss/env-nextjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);\n([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        // Add `.min(1) on ID and SECRET if you want to make sure they're not empty\n        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,\n        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.\n   * This is especially useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDdkI7QUFFakIsTUFBTUUsTUFBTUYsNkRBQVNBLENBQUM7SUFDM0I7OztHQUdDLEdBQ0RHLFFBQVE7UUFDTkMsY0FBY0gsa0NBQUNBLENBQUNJLE1BQU0sR0FBR0MsR0FBRztRQUM1QkMsVUFBVU4sa0NBQUNBLENBQUNPLElBQUksQ0FBQztZQUFDO1lBQWU7WUFBUTtTQUFhO1FBQ3REQyxpQkFDRUMsTUFBcUMsR0FDakNULENBQWlCLEdBQ2pCQSxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHTSxHQUFHLENBQUMsR0FBR0MsUUFBUTtRQUNoQ0MsY0FBY1osa0NBQUNBLENBQUNhLFVBQVUsQ0FDeEIsdUVBQXVFO1FBQ3ZFLGtFQUFrRTtRQUNsRSxDQUFDQyxNQUFRTCxRQUFRUixHQUFHLENBQUNjLFVBQVUsSUFBSUQsS0FDbkMsc0VBQXNFO1FBQ3RFTCxRQUFRUixHQUFHLENBQUNlLE1BQU0sR0FBR2hCLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdNLEdBQUcsQ0FBQyxLQUFLVixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHO1FBRXpELDJFQUEyRTtRQUMzRVksbUJBQW1CakIsa0NBQUNBLENBQUNJLE1BQU07UUFDM0JjLHVCQUF1QmxCLGtDQUFDQSxDQUFDSSxNQUFNO0lBQ2pDO0lBRUE7Ozs7R0FJQyxHQUNEZSxRQUFRO0lBRVI7SUFFQTs7O0dBR0MsR0FDREMsWUFBWTtRQUNWakIsY0FBY00sUUFBUVIsR0FBRyxDQUFDRSxZQUFZO1FBQ3RDRyxVQUFVRyxhQUFvQjtRQUM5QkQsaUJBQWlCQyxRQUFRUixHQUFHLENBQUNPLGVBQWU7UUFDNUNJLGNBQWNILFFBQVFSLEdBQUcsQ0FBQ1csWUFBWTtRQUN0Q0ssbUJBQW1CUixRQUFRUixHQUFHLENBQUNnQixpQkFBaUI7UUFDaERDLHVCQUF1QlQsUUFBUVIsR0FBRyxDQUFDaUIscUJBQXFCO0lBQzFEO0lBQ0E7OztHQUdDLEdBQ0RHLGdCQUFnQixDQUFDLENBQUNaLFFBQVFSLEdBQUcsQ0FBQ3FCLG1CQUFtQjtBQUNuRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdDMtYXBwLy4vc3JjL2Vudi5tanM/YzNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tIFwiQHQzLW9zcy9lbnYtbmV4dGpzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICAgIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gICAgTkVYVEFVVEhfU0VDUkVUOlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gei5zdHJpbmcoKS5taW4oMSlcbiAgICAgICAgOiB6LnN0cmluZygpLm1pbigxKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpLm1pbigxKSA6IHouc3RyaW5nKCkudXJsKClcbiAgICApLFxuICAgIC8vIEFkZCBgLm1pbigxKSBvbiBJRCBhbmQgU0VDUkVUIGlmIHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGV5J3JlIG5vdCBlbXB0eVxuICAgIERJU0NPUkRfQ0xJRU5UX0lEOiB6LnN0cmluZygpLFxuICAgIERJU0NPUkRfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmeSB5b3VyIGNsaWVudC1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS4gVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcFxuICAgKiBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuIFRvIGV4cG9zZSB0aGVtIHRvIHRoZSBjbGllbnQsIHByZWZpeCB0aGVtIHdpdGhcbiAgICogYE5FWFRfUFVCTElDX2AuXG4gICAqL1xuICBjbGllbnQ6IHtcbiAgICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHouc3RyaW5nKCkubWluKDEpLFxuICB9LFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuJ3QgZGVzdHJ1Y3QgYHByb2Nlc3MuZW52YCBhcyBhIHJlZ3VsYXIgb2JqZWN0IGluIHRoZSBOZXh0LmpzIGVkZ2UgcnVudGltZXMgKGUuZy5cbiAgICogbWlkZGxld2FyZXMpIG9yIGNsaWVudC1zaWRlIHNvIHdlIG5lZWQgdG8gZGVzdHJ1Y3QgbWFudWFsbHkuXG4gICAqL1xuICBydW50aW1lRW52OiB7XG4gICAgREFUQUJBU0VfVVJMOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICAgIE5FWFRBVVRIX1NFQ1JFVDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIE5FWFRBVVRIX1VSTDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIERJU0NPUkRfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICBESVNDT1JEX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgfSxcbiAgLyoqXG4gICAqIFJ1biBgYnVpbGRgIG9yIGBkZXZgIHdpdGggYFNLSVBfRU5WX1ZBTElEQVRJT05gIHRvIHNraXAgZW52IHZhbGlkYXRpb24uXG4gICAqIFRoaXMgaXMgZXNwZWNpYWxseSB1c2VmdWwgZm9yIERvY2tlciBidWlsZHMuXG4gICAqL1xuICBza2lwVmFsaWRhdGlvbjogISFwcm9jZXNzLmVudi5TS0lQX0VOVl9WQUxJREFUSU9OLFxufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRW52IiwieiIsImVudiIsInNlcnZlciIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJtaW4iLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJzdHIiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiRElTQ09SRF9DTElFTlRfSUQiLCJESVNDT1JEX0NMSUVOVF9TRUNSRVQiLCJjbGllbnQiLCJydW50aW1lRW52Iiwic2tpcFZhbGlkYXRpb24iLCJTS0lQX0VOVl9WQUxJREFUSU9OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/env.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();