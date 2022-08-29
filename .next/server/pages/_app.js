"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Layouts/DefaultLayout.tsx


const DefaultLayout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const Layouts_DefaultLayout = (DefaultLayout);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./Components/Header.tsx



// import "../styles/home.module.css";
const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "jsx-1806352012",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "jsx-1806352012 inverse",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-1806352012 navRoot",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-1806352012 logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                style: {
                                    cursor: "pointer"
                                },
                                className: "jsx-1806352012",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/logosymbol.svg",
                                            alt: "Helium Logo",
                                            className: "jsx-1806352012 logo-img"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/logosymbol.svg",
                                            alt: "Helium Logo",
                                            className: "jsx-1806352012 logo-imgsm"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-1806352012 secondary",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "inline-block",
                                        margin: "0 12px"
                                    },
                                    className: "jsx-1806352012",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/careers",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: "jsx-1806352012 navLink",
                                                children: "Careers"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: {
                                                marginRight: "12px",
                                                opacity: "0.4"
                                            },
                                            className: "jsx-1806352012 navLink",
                                            children: "|"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            style: {
                                                fontWeight: 500,
                                                cursor: "pointer"
                                            },
                                            className: "jsx-1806352012",
                                            children: [
                                                "Build",
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/navarrow.svg",
                                                    style: {
                                                        position: "relative",
                                                        top: "-1px",
                                                        paddingLeft: "5px"
                                                    },
                                                    className: "jsx-1806352012"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "szh-menu-container szh-menu-container--itemTransition"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "inline-block",
                                        margin: "0 12px"
                                    },
                                    className: "jsx-1806352012",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            style: {
                                                fontWeight: 500,
                                                cursor: "pointer"
                                            },
                                            className: "jsx-1806352012",
                                            children: [
                                                "Use",
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/navarrow.svg",
                                                    style: {
                                                        position: "relative",
                                                        top: "-1px",
                                                        paddingLeft: "5px"
                                                    },
                                                    className: "jsx-1806352012"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "szh-menu-container szh-menu-container--itemTransition"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "inline-block",
                                        margin: "0 12px"
                                    },
                                    className: "jsx-1806352012",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            style: {
                                                fontWeight: 500,
                                                cursor: "pointer"
                                            },
                                            className: "jsx-1806352012",
                                            children: [
                                                "Resources",
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/navarrow.svg",
                                                    style: {
                                                        position: "relative",
                                                        top: "-1px",
                                                        paddingLeft: "5px"
                                                    },
                                                    className: "jsx-1806352012"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "szh-menu-container szh-menu-container--itemTransition"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    className: "jsx-1806352012 navLink",
                                    children: "Who Uses Helium?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        opacity: "0.4"
                                    },
                                    className: "jsx-1806352012 navLink",
                                    children: "|"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    className: "jsx-1806352012 navLink",
                                    children: "Cellular Summer"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-1806352012 third",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-1806352012 languagepicker"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-637639245 picker inverse",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "jsx-1806352012 languagepicker",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/globe.svg",
                                                className: "jsx-637639245 globeimg",
                                                style: {
                                                    color: "white"
                                                }
                                            }, 3723076367)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-637639245 dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-1806352012 languagepicker"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link current",
                                                    children: "English"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Francais"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Italiano"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Deutsche"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Espanol"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Nederlands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "русский"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "中文"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "日本語"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "한국어"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-1806352012 buyhotspot",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        right: "10px"
                                    },
                                    className: "jsx-1806352012 languagepicker"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-637639245 picker inverse",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: {
                                                right: "10px"
                                            },
                                            className: "jsx-1806352012 languagepicker",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/globe.svg",
                                                className: "jsx-637639245 globeimg",
                                                style: {
                                                    color: "white"
                                                }
                                            }, 2342324234)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-637639245 dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    style: {
                                                        right: "10px"
                                                    },
                                                    className: "jsx-1806352012 languagepicker"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link current",
                                                    children: "English"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Francais"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Italiano"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Deutsche"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Espanol"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "Nederlands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "русский"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "中文"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "日本語"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-637639245 link",
                                                    children: "한국어"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-1806352012 responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-788206497 responsiveNav inverse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-788206497 trigger",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/menuwhite.svg",
                                    alt: "Menu",
                                    className: "jsx-788206497 menubar"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    opacity: 0,
                                    top: "-1100px"
                                },
                                className: "menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            display: "block",
                                            background: "black",
                                            padding: "20px",
                                            paddingBottom: "10px",
                                            position: "relative",
                                            boxSizing: "border-box"
                                        },
                                        className: "jsx-788206497 trigger",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/cross.svg",
                                            className: "jsx-788206497 cross"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "Collapsible",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "collapsible-trigger-1660156793931",
                                                className: "Collapsible__trigger is-closed",
                                                style: {
                                                    background: "black",
                                                    padding: "5px",
                                                    paddingTop: "50px",
                                                    paddingLeft: "15px",
                                                    fontWeight: 400,
                                                    fontSize: "23px",
                                                    textAlign: "left",
                                                    width: "100%",
                                                    display: "block",
                                                    boxSizing: "border-box",
                                                    position: "relative"
                                                },
                                                "aria-expanded": "false",
                                                "aria-disabled": "false",
                                                "aria-controls": "collapsible-content-1660156793931",
                                                role: "button",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "jsx-346442028",
                                                    children: [
                                                        "Build",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/dropdownarrow.svg",
                                                            className: "jsx-346442028 dropdownarrow"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "collapsible-content-1660156793931",
                                                className: "Collapsible__contentOuter",
                                                style: {
                                                    height: 0,
                                                    WebkitTransition: "height 200ms ease-in",
                                                    msTransition: "height 200ms ease-in",
                                                    transition: "height 200ms ease-in",
                                                    overflow: "hidden"
                                                },
                                                role: "region",
                                                "aria-labelledby": "collapsible-trigger-1660156793931",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Collapsible__contentInner",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            position: "relative",
                                                            background: "black",
                                                            color: "white",
                                                            textAlign: "left",
                                                            paddingLeft: "15px",
                                                            paddingBottom: "30px"
                                                        },
                                                        className: "jsx-788206497",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/mine",
                                                                className: "jsx-788206497",
                                                                children: "Hotspots"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/stake",
                                                                className: "jsx-788206497",
                                                                children: "Stake"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/token",
                                                                className: "jsx-788206497",
                                                                children: "Token"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/5G",
                                                                className: "jsx-788206497",
                                                                children: "5G"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "Collapsible",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "collapsible-trigger-1660156793931",
                                                className: "Collapsible__trigger is-closed",
                                                style: {
                                                    background: "black",
                                                    padding: "5px",
                                                    paddingLeft: "15px",
                                                    paddingTop: "10px",
                                                    fontWeight: 400,
                                                    fontSize: "23px",
                                                    textAlign: "left",
                                                    width: "100%",
                                                    display: "block",
                                                    boxSizing: "border-box",
                                                    position: "relative"
                                                },
                                                "aria-expanded": "false",
                                                "aria-disabled": "false",
                                                "aria-controls": "collapsible-content-1660156793931",
                                                role: "button",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "jsx-346442028",
                                                    children: [
                                                        "Use",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/dropdownarrow.svg",
                                                            className: "jsx-346442028 dropdownarrow"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "collapsible-content-1660156793931",
                                                className: "Collapsible__contentOuter",
                                                style: {
                                                    height: 0,
                                                    WebkitTransition: "height 200ms ease-in",
                                                    msTransition: "height 200ms ease-in",
                                                    transition: "height 200ms ease-in",
                                                    overflow: "hidden"
                                                },
                                                role: "region",
                                                "aria-labelledby": "collapsible-trigger-1660156793931",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Collapsible__contentInner",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            position: "relative",
                                                            background: "black",
                                                            color: "white",
                                                            textAlign: "left",
                                                            paddingLeft: "15px",
                                                            paddingBottom: "30px"
                                                        },
                                                        className: "jsx-788206497",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/enterprise",
                                                                className: "jsx-788206497",
                                                                children: "Enterprise"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/roam",
                                                                className: "jsx-788206497",
                                                                children: "Roam"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/solutions",
                                                                className: "jsx-788206497",
                                                                children: "Solutions"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://docs.helium.com",
                                                                className: "jsx-788206497",
                                                                children: "Developer Docs"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "Collapsible",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "collapsible-trigger-1660156793931",
                                                className: "Collapsible__trigger is-closed",
                                                style: {
                                                    background: "black",
                                                    padding: "5px",
                                                    paddingLeft: "15px",
                                                    paddingTop: "10px",
                                                    fontWeight: 400,
                                                    fontSize: "23px",
                                                    textAlign: "left",
                                                    width: "100%",
                                                    display: "block",
                                                    boxSizing: "border-box",
                                                    position: "relative"
                                                },
                                                "aria-expanded": "false",
                                                "aria-disabled": "false",
                                                "aria-controls": "collapsible-content-1660156793931",
                                                role: "button",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "jsx-346442028",
                                                    children: [
                                                        "Resources",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/dropdownarrow.svg",
                                                            className: "jsx-346442028 dropdownarrow"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "collapsible-content-1660156793931",
                                                className: "Collapsible__contentOuter",
                                                style: {
                                                    height: 0,
                                                    WebkitTransition: "height 200ms ease-in",
                                                    msTransition: "height 200ms ease-in",
                                                    transition: "height 200ms ease-in",
                                                    overflow: "hidden"
                                                },
                                                role: "region",
                                                "aria-labelledby": "collapsible-trigger-1660156793931",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Collapsible__contentInner",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            position: "relative",
                                                            background: "black",
                                                            color: "red",
                                                            textAlign: "left",
                                                            paddingLeft: "15px",
                                                            paddingBottom: "30px"
                                                        },
                                                        className: "jsx-788206497",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://blog.helium.com",
                                                                className: "jsx-788206497",
                                                                children: "Blog"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://explorer.helium.com",
                                                                className: "jsx-788206497",
                                                                children: "Helium Explorer"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://discord.gg/helium",
                                                                className: "jsx-788206497",
                                                                children: "Community"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-788206497 toplevellink",
                                        children: "Ecosystem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-788206497 toplevellink",
                                        children: "Cellular Summer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-788206497 toplevellink",
                                        children: "Helium: Chapter 2"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Components_Header = (Header); // import { Image } from "@mantine/core";
 // import { createStyles } from "@mantine/styles";
 // import React from "react";
 // const useStyles = createStyles((theme) => ({
 //   root: {
 //     backgroundColor: "rgba(26,26,26,0.75)",
 //     backdropFilter: "saturate(380%) blur(20px)",
 //     height: 55,
 //     position: "fixed",
 //     top: 0,
 //     right: 0,
 //     zIndex: 9999,
 //     width: "100vw",
 //     paddingLeft: 10,
 //   },
 //   linksMain: {
 //     display: "flex",
 //     alignItems: "center",
 //   },
 //   borderLink: {
 //     color: "white",
 //   },
 // }));
 // const Header = () => {
 //   const { classes } = useStyles();
 //   return (
 //     <div
 //       className={`${classes.root} m-0 d-flex align-items-center justify-content-between`}
 //     >
 //       <Image src={"/logosymbol.svg"} className="mx-3" style={{ width: 34 }} />
 //       <div className={`${classes.linksMain}`}>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold"
 //           role="button"
 //         >
 //           Chapter 2
 //         </a>
 //         <a
 //           className={`px-2 text-decoration-none m-0 text-white fw-bolder text-muted`}
 //         >
 //           |
 //         </a>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
 //           role="button"
 //         >
 //           Build
 //           <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
 //         </a>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
 //           role="button"
 //         >
 //           Use
 //           <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
 //         </a>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
 //           role="button"
 //         >
 //           Resources
 //           <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
 //         </a>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold d-flex align-items-center h6"
 //           role="button"
 //         >
 //           Who Uses Helium
 //           <Image src={"/navarrow.svg"} className="mx-1" style={{ width: 12 }} />
 //         </a>
 //         <a
 //           className={`px-2 text-decoration-none m-0 text-white fw-bolder text-muted`}
 //         >
 //           |
 //         </a>
 //         <a
 //           className="px-2 text-decoration-none m-0 text-white fw-bold"
 //           role="button"
 //         >
 //           Cellular Summer
 //         </a>
 //       </div>
 //       <Image src={"/globe.svg"} className="mx-3" style={{ width: 34 }} />
 //     </div>
 //   );
 // };
 // export default Header;

;// CONCATENATED MODULE: ./Layouts/MainLayout.tsx



const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "jsx-4178290654",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Header, {}),
            children
        ]
    });
};
/* harmony default export */ const Layouts_MainLayout = (MainLayout);

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const CustomLayout = Layouts_MainLayout || Layouts_DefaultLayout;
    return /*#__PURE__*/ jsx_runtime_.jsx(CustomLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(5921)));
module.exports = __webpack_exports__;

})();