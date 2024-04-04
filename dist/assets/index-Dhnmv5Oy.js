import { importShared } from './__federation_fn_import-BcdbRT-4.js';
import StudentForm, { j as jsxRuntimeExports } from './__federation_expose_StudentForm-DjU0CoB4.js';
import { r as reactDomExports } from './__federation_shared_react-dom-6cCw-6Kw.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "COMP-308 LAB 4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Student App 1" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Visal Mohan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "301225547" })
    ] })
  ] }) });
}

await importShared('react');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StudentForm, {})
  ] });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
