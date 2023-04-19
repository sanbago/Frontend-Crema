import { jsxDEV as _jsxDEV } from "@emotion/react/jsx-dev-runtime";
var _s = $RefreshSig$();
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const columns = [
  {
    id: "typeDocument",//antiguo name
    label: "T.Doc.",
    minWidth: 10
},
{
    id: "document", //antiguo code
    label: "Document",
    minWidth: 40
},
{
    id: "name", //antiguo population
    label: "Name",
    minWidth: 100,
},
{
    id: "lastName", //antiguo size
    label: "Last Name",
    minWidth: 100,
},
{
    id: "gender", //antiguo density
    label: "Gender",
    minWidth: 15,
},
{
    id: "birthdate",
    label: "Birthdate",
    minWidth: 70,
},
{
    id: "phone",
    label: "Phone",
    minWidth: 70,
},
{
    id: "professionalCard",
    label: "Professional Card",
    minWidth: 100,
},
{
    id: "state",
    label: "State",
    minWidth: 50,
}
];

const createData = (typeDocument, document, name, lastName, gender, birthdate, phone, professionalCard, state) => {
  return {
      typeDocument,
      document,
      name,
      lastName,
      gender, 
      birthdate, 
      phone, 
      professionalCard, 
      state
  };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("China", "CN", 1403500365, 9596961, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Italy", "IT", 60483973, 301340, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("United States", "US", 327167434, 9833520, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Canada", "CA", 37602103, 9984670, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Australia", "AU", 25475400, 7692024, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Germany", "DE", 83019200, 357578, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Ireland", "IE", 4857000, 70273, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Mexico", "MX", 126577691, 1972550, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Japan", "JP", 126317000, 377973, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("France", "FR", 67022000, 640679, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("United Kingdom", "GB", 67545757, 242495, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Russia", "RU", 146793744, 17098246, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Nigeria", "NG", 200962417, 923768, 'sss', 'dwadfw', 'brazil', 'yo', 123),
  createData("Brazil", "BR", 210147125, 851576, 'sss', 'dwadfw', 'brazil', 'yo', 123)
];
export default function StickyHeadTable() {
    _s();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return /*#__PURE__*/ _jsxDEV(Paper, {
        sx: {
            width: "100%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ _jsxDEV(TableContainer, {
                sx: {
                    maxHeight: 440
                },
                children: /*#__PURE__*/ _jsxDEV(Table, {
                    stickyHeader: true,
                    "aria-label": "sticky table",
                    children: [
                        /*#__PURE__*/ _jsxDEV(TableHead, {
                            children: /*#__PURE__*/ _jsxDEV(TableRow, {
                                children: columns.map((column)=>/*#__PURE__*/ _jsxDEV(TableCell, {
                                        align: column.align,
                                        style: {
                                            minWidth: column.minWidth
                                        },
                                        children: column.label
                                    }, column.id, false, {
                                        fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(TableBody, {
                            children: rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row)=>{
                                return /*#__PURE__*/ _jsxDEV(TableRow, {
                                    hover: true,
                                    role: "checkbox",
                                    tabIndex: -1,
                                    children: columns.map((column)=>{
                                        const value = row[column.id];
                                        return /*#__PURE__*/ _jsxDEV(TableCell, {
                                            align: column.align,
                                            children: column.format && typeof value === "number" ? column.format(value) : value
                                        }, column.id, false, {
                                            fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                                            lineNumber: 122,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, row.code, false, {
                                    fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                                    lineNumber: 118,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TablePagination, {
                rowsPerPageOptions: [
                    10,
                    25,
                    100
                ],
                component: "div",
                count: rows.length,
                rowsPerPage: rowsPerPage,
                page: page,
                onPageChange: handleChangePage,
                onRowsPerPageChange: handleChangeRowsPerPage
            }, void 0, false, {
                fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\User\\Desktop\\Frontend\\Frontend-Crema-Ts\\libs\\modules\\src\\lib\\muiComponents\\dataDisplay\\Table\\StickyHeadTable.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(StickyHeadTable, "65nbIEELuFY2eeUXbED/8VsHrEQ=");
_c = StickyHeadTable;
var _c;
$RefreshReg$(_c, "StickyHeadTable");


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = __webpack_module__.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                __webpack_module__.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                import.meta.webpackHot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        __webpack_module__.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    __webpack_module__.hot.invalidate();
                }
            }
        }
    })();
