/* @ds-bundle: {"format":4,"namespace":"EmpRioCoisasDeMinasDesignSystem_3a51f4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"AccordionItem","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"AccordionTrigger","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"AccordionContent","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/core/Button.jsx":"d989d7d17810","components/core/Card.jsx":"ce5306ec05a7","components/core/Input.jsx":"be641c44d887","components/disclosure/Accordion.jsx":"ecc4c8fdd5d6","components/disclosure/Tabs.jsx":"b9cfc1a5784c","components/layout/Footer.jsx":"1b201381cb5c","components/navigation/Navbar.jsx":"3173a3368ffc","ui_kits/website/App.jsx":"c76d77606c0d","ui_kits/website/animations.js":"f4ffb9099d2c","ui_kits/website/pages/Contact.jsx":"16e79cd3139c","ui_kits/website/pages/History.jsx":"a2879eef813c","ui_kits/website/pages/Home.jsx":"cba2126836c4","ui_kits/website/pages/Products.jsx":"f44d0484263e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmpRioCoisasDeMinasDesignSystem_3a51f4 = window.EmpRioCoisasDeMinasDesignSystem_3a51f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT_STYLE = {
  default: {
    background: "var(--color-van-cleef)",
    color: "var(--color-white)",
    boxShadow: "var(--btn-shadow-rest)"
  },
  alternate: {
    background: "var(--color-white)",
    color: "var(--color-neutral-darkest)",
    boxShadow: "var(--btn-shadow-rest-light)"
  },
  secondary: {
    background: "var(--color-neutral-darkest-5)",
    color: "var(--text-body)",
    boxShadow: "0 5px 0 0 var(--color-neutral-darkest-15)",
    backdropFilter: "blur(10px)"
  },
  link: {
    background: "transparent",
    color: "var(--text-body)",
    boxShadow: "none",
    padding: 0
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    boxShadow: "none"
  }
};
const PRESS_SHADOW = {
  default: "var(--btn-shadow-press)",
  alternate: "var(--btn-shadow-press-light)",
  secondary: "0 2px 0 0 var(--color-neutral-darkest-15)"
};
const SIZE_STYLE = {
  default: {
    padding: "10px 24px"
  },
  sm: {
    padding: "6px 20px"
  },
  link: {
    padding: 0
  },
  icon: {
    width: 40,
    height: 40,
    padding: 0
  }
};

/** Empório Coisas de Minas primary button — "bubble" style with a hard drop shadow that compresses on press, plus a soft radial glow that expands from center on hover. */
function Button({
  variant = "default",
  size = "default",
  iconLeft,
  iconRight,
  disabled,
  children,
  style,
  className,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onMouseEnter,
  ...props
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const base = VARIANT_STYLE[variant] || VARIANT_STYLE.default;
  const sizeStyle = SIZE_STYLE[size] || SIZE_STYLE.default;
  const isBubble = variant === "default" || variant === "alternate" || variant === "secondary";
  const glowColor = variant === "alternate" ? "rgba(82,23,12,0.12)" : "rgba(255,255,255,0.28)";
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-slot": "button",
    "data-variant": variant,
    className: className ? "emp-focusable " + className : "emp-focusable",
    disabled: disabled,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseDown: e => {
      setPressed(true);
      onMouseDown && onMouseDown(e);
    },
    onMouseUp: e => {
      setPressed(false);
      onMouseUp && onMouseUp(e);
    },
    onMouseLeave: e => {
      setPressed(false);
      setHover(false);
      onMouseLeave && onMouseLeave(e);
    },
    style: {
      position: "relative",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "var(--radius-button)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--text-regular)",
      transition: `all var(--duration-fast) var(--ease-standard)`,
      opacity: disabled ? 0.5 : 1,
      transform: isBubble && pressed ? "translateY(3px)" : "translateY(0)",
      boxShadow: isBubble && pressed ? PRESS_SHADOW[variant] : base.boxShadow,
      ...base,
      ...sizeStyle,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "160%",
      paddingBottom: "160%",
      borderRadius: "50%",
      background: glowColor,
      transform: hover ? "scale(1)" : "scale(0)",
      opacity: hover ? 1 : 0,
      transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, iconLeft, children, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat, generously-rounded content card. Inherits background/text from the surrounding scheme via CSS vars, or pass style to override. */
function Card({
  variant = "default",
  className,
  style,
  children,
  ...props
}) {
  const base = variant === "transparent" ? {
    background: "transparent",
    border: "1px solid var(--color-white)",
    color: "var(--color-white)"
  } : {
    background: "var(--scheme-fg, var(--surface-card))",
    color: "var(--scheme-text, var(--text-body))"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-flat",
    className: className,
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      ...base,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input used in newsletter/CTA forms — tinted glass fill, no visible border until focus. */
function Input({
  icon,
  iconPosition = "left",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, icon && iconPosition === "left" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    "data-slot": "input",
    className: "emp-focusable",
    style: {
      width: "100%",
      minHeight: 44,
      padding: icon && iconPosition === "left" ? "8px 12px 8px 44px" : "8px 12px",
      borderRadius: "var(--radius-form)",
      border: "1px solid transparent",
      background: "var(--color-neutral-darkest-5)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-regular)",
      backdropFilter: "blur(10px)",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, props)), icon && iconPosition === "right" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 12
    }
  }, icon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
const AccordionCtx = React.createContext(null);

/** Simple multi-open accordion (FAQ pattern). Each item is its own Card in the source design. */
function Accordion({
  children,
  defaultOpen = []
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = value => {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(value) ? next.delete(value) : next.add(value);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement(AccordionCtx.Provider, {
    value: {
      open,
      toggle
    }
  }, /*#__PURE__*/React.createElement("div", null, children));
}
function AccordionItem({
  value,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    },
    "data-value": value
  }, children);
}
function AccordionTrigger({
  value,
  children
}) {
  const ctx = React.useContext(AccordionCtx);
  const isOpen = ctx.open.has(value);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.toggle(value),
    className: "emp-focusable",
    "aria-expanded": isOpen,
    "aria-controls": "emp-accordion-panel-" + value,
    id: "emp-accordion-trigger-" + value,
    style: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-medium)",
      color: "var(--scheme-text, var(--text-body))",
      textAlign: "left"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
      transition: "transform 0.3s ease",
      fontSize: 24,
      lineHeight: 1
    }
  }, "+"));
}
function AccordionContent({
  value,
  children
}) {
  const ctx = React.useContext(AccordionCtx);
  const isOpen = ctx.open.has(value);
  return /*#__PURE__*/React.createElement("div", {
    id: "emp-accordion-panel-" + value,
    role: "region",
    "aria-labelledby": "emp-accordion-trigger-" + value,
    style: {
      display: "grid",
      gridTemplateRows: isOpen ? "1fr" : "0fr",
      transition: "grid-template-rows 0.3s ease",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0,
      overflow: "hidden",
      paddingBottom: isOpen ? 24 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Accordion, AccordionItem, AccordionTrigger, AccordionContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Tabs.jsx
try { (() => {
const TabsCtx = React.createContext(null);

/** Timeline-style tabs: a row of year triggers over a progress rail, content pane below. Used for "Nossa História". */
function Tabs({
  defaultValue,
  children,
  onValueChange
}) {
  const [value, setValue] = React.useState(defaultValue);
  const set = v => {
    setValue(v);
    onValueChange && onValueChange(v);
  };
  return /*#__PURE__*/React.createElement(TabsCtx.Provider, {
    value: {
      value,
      set
    }
  }, /*#__PURE__*/React.createElement("div", null, children));
}
function TabsList({
  items,
  style
}) {
  const ctx = React.useContext(TabsCtx);
  const activeIndex = items.findIndex(i => i.value === ctx.value);
  const progress = 100 / (items.length * 2) * (activeIndex * 2 + 1) / 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      marginBottom: 48,
      borderBottom: "1px solid transparent",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 0,
      height: 3,
      width: "100%",
      background: "var(--scheme-text)",
      transform: `scaleX(${progress})`,
      transformOrigin: "left",
      transition: "transform 0.3s ease",
      zIndex: 1
    }
  }), items.map((item, i) => {
    const isActive = i <= activeIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => ctx.set(item.value),
      className: "emp-focusable",
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        color: isActive ? "var(--scheme-text)" : "var(--color-neutral-darkest-20)"
      }
    }, /*#__PURE__*/React.createElement("h5", {
      style: {
        fontSize: "var(--text-h5)"
      }
    }, item.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        width: "100%",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        width: "100%",
        background: "var(--color-neutral-darkest-15)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: 2,
        flex: "none",
        width: 15,
        height: 15,
        borderRadius: "50%",
        boxShadow: "0 0 0 8px var(--scheme-bg)",
        background: isActive ? "var(--scheme-text)" : "var(--color-neutral-darkest-20)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        width: "100%",
        background: "var(--color-neutral-darkest-15)"
      }
    })));
  }));
}
function TabsContent({
  value,
  children,
  style
}) {
  const ctx = React.useContext(TabsCtx);
  if (ctx.value !== value) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 48,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
const SOCIALS = [{
  name: "facebook",
  href: "#"
}, {
  name: "instagram",
  href: "#"
}, {
  name: "x",
  href: "#"
}, {
  name: "linkedin",
  href: "#"
}, {
  name: "youtube",
  href: "#"
}];

/** Dark footer — logo, address/contact, social icons, two link columns, legal row. Always scheme-4. */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "scheme-4",
    style: {
      padding: "64px 5% 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emp-footer-top",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 48,
      paddingBottom: 48,
      borderBottom: "1px solid var(--scheme-border, var(--color-white-20))"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mark-cream.png",
    alt: "Emp\xF3rio Coisas de Minas",
    style: {
      height: 64,
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Endere\xE7o"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Rua Serra da Canastra, 450, Centro, Passos de Minas, MG"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Contato"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "block",
      textDecoration: "underline",
      color: "inherit",
      marginBottom: 24
    }
  }, "WhatsApp: (35) 99853-9441"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, SOCIALS.map(s => s.name === "linkedin" ? /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#fff",
    "aria-label": "linkedin"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"
  }))) : /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: s.name,
    width: "24",
    height: "24",
    style: {
      filter: "invert(1)"
    },
    src: `https://cdn.simpleicons.org/${s.name === "x" ? "x" : s.name}/000000`
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "emp-footer-links",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, ["Início", "Nossa história", "Produtos", "Contato", "Antepastos e patês"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      padding: "8px 0",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, t)))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, ["Doces em geral", "Geleia de pimenta", "Pimentas e molhos", "Torradas e pães", "Vinhos"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      padding: "8px 0",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 24,
      fontSize: "var(--text-small)",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Emp\xF3rio Coisas de Minas. Todos os direitos reservados."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "underline"
    }
  }, "Pol\xEDtica de privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "underline"
    }
  }, "Termos de servi\xE7o"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "underline"
    }
  }, "Configura\xE7\xF5es de cookies")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const LINKS = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Nossa história",
  href: "#historia"
}, {
  label: "Produtos",
  href: "#produtos"
}, {
  label: "Contato",
  href: "#contato"
}];
function NavLink({
  l,
  active,
  onNavigate,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.label);
      onClick && onClick();
    },
    className: "emp-focusable",
    style: {
      padding: "8px 12px",
      fontSize: "var(--text-regular)",
      textDecoration: "none",
      color: hover ? "var(--color-di-serria)" : "var(--color-white-linen)",
      fontWeight: active === l.label ? 700 : 400,
      transition: "color 0.2s ease",
      borderRadius: "var(--radius-button)"
    }
  }, l.label);
}
function CtaButton({
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: "emp-focusable",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 9999,
      border: "none",
      cursor: "pointer",
      padding: "10px 44px 10px 20px",
      background: "var(--color-van-cleef-darkest)",
      color: "var(--color-white-linen)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "var(--text-regular)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: hover ? "50%" : 4,
      right: hover ? "50%" : 4,
      transform: hover ? "translate(50%,-50%) scale(11)" : "translate(0,0) scale(1)",
      transformOrigin: "center",
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--color-di-serria)",
      transition: "transform 0.3s ease, top 0.3s ease, right 0.3s ease",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      width: 22,
      height: 22,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      color: "var(--color-van-cleef-darkest)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }, "↗"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1
    },
    className: "emp-navbar-cta-label"
  }, children));
}
function HamburgerButton({
  open,
  onClick,
  buttonRef
}) {
  return /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    "aria-label": open ? "Fechar menu" : "Abrir menu",
    "aria-expanded": open,
    "aria-controls": "emp-mobile-drawer",
    onClick: onClick,
    className: "emp-focusable emp-navbar-hamburger",
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--color-di-serria)",
      border: "none",
      cursor: "pointer",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--color-van-cleef-darkest)",
      borderRadius: 1,
      transition: "transform 0.25s ease, opacity 0.25s ease",
      transform: open ? "translateY(5px) rotate(45deg)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--color-van-cleef-darkest)",
      borderRadius: 1,
      transition: "opacity 0.2s ease",
      opacity: open ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--color-van-cleef-darkest)",
      borderRadius: 1,
      transition: "transform 0.25s ease, opacity 0.25s ease",
      transform: open ? "translateY(-5px) rotate(-45deg)" : "none"
    }
  }));
}

/** Fixed floating navbar — nav links left, centered logo, CTA/hamburger right. Hamburger opens a mobile drawer with the same nav links below 1024px. */
function Navbar({
  active = "Início",
  onNavigate
}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const hamburgerRef = React.useRef(null);
  const drawerRef = React.useRef(null);
  const closeDrawer = (returnFocus) => {
    setDrawerOpen(false);
    if (returnFocus && hamburgerRef.current) hamburgerRef.current.focus();
  };
  React.useEffect(() => {
    if (!drawerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = drawerRef.current && drawerRef.current.querySelector("a,button");
    first && first.focus();
    const onKey = e => {
      if (e.key === "Escape") { closeDrawer(true); return; }
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusables = Array.from(drawerRef.current.querySelectorAll("a,button"));
      if (!focusables.length) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [drawerOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: "emp-navbar-shell",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emp-navbar-bar",
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      minHeight: 64,
      maxWidth: "100%",
      padding: "0 12px 0 24px",
      borderRadius: 9999,
      background: "var(--color-van-cleef)",
      boxShadow: "0 8px 30px rgba(13,12,12,0.25)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "emp-navbar-links",
    style: {
      alignItems: "center",
      gap: 4
    }
  }, LINKS.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.label,
    l: l,
    active: active,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mark-cream.png",
    alt: "Emp\xF3rio Coisas de Minas",
    className: "emp-navbar-logo",
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "emp-navbar-actions",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(CtaButton, null, "Pe\xE7a pelo App"), /*#__PURE__*/React.createElement(HamburgerButton, {
    open: drawerOpen,
    buttonRef: hamburgerRef,
    onClick: () => setDrawerOpen(o => !o)
  }))), /*#__PURE__*/React.createElement("div", {
    ref: drawerRef,
    id: "emp-mobile-drawer",
    className: "emp-navbar-drawer",
    "data-open": drawerOpen ? "true" : "false",
    "aria-hidden": !drawerOpen,
    style: {
      width: "calc(100% - 10%)",
      maxWidth: 420,
      marginTop: 8,
      display: "grid",
      gridTemplateRows: drawerOpen ? "1fr" : "0fr",
      opacity: drawerOpen ? 1 : 0,
      transition: "grid-template-rows 0.3s ease, opacity 0.2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 4,
      padding: 16,
      borderRadius: 24,
      background: "var(--color-van-cleef)",
      boxShadow: "0 8px 30px rgba(13,12,12,0.25)"
    }
  }, LINKS.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.label,
    l: l,
    active: active,
    onNavigate: onNavigate,
    onClick: () => closeDrawer(false)
  })))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function EmpApp() {
  const [page, setPage] = React.useState("Início");
  const {
    Navbar,
    Footer
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const pages = {
    "Início": window.EmpHome,
    "Nossa história": window.EmpHistory,
    "Produtos": window.EmpProducts,
    "Contato": window.EmpContact
  };
  const Page = pages[page];
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) window.__lenis.scrollTo(0, {
      immediate: true
    });
    window.EmpAnim && window.EmpAnim.reset();
    const t = setTimeout(() => window.EmpAnim && window.EmpAnim.runAll(), 60);
    return () => clearTimeout(t);
  }, [page]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    active: page,
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Page, {
    go: setPage
  })), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(EmpApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/animations.js
try { (() => {
(function () {
  function initSmoothScroll() {
    if (window.__lenis || !window.Lenis) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 3),
      smoothWheel: true
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    window.__lenis = lenis;
  }
  function splitWords(el) {
    if (el.dataset.split) return;
    const words = el.textContent.split(/(\s+)/).filter(w => w.length);
    el.innerHTML = "";
    words.forEach(w => {
      if (/^\s+$/.test(w)) {
        el.appendChild(document.createTextNode(w));
        return;
      }
      const wrap = document.createElement("span");
      wrap.style.cssText = "display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.15em;margin-bottom:-0.15em";
      const inner = document.createElement("span");
      inner.className = "__word";
      inner.style.display = "inline-block";
      inner.textContent = w;
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
    el.dataset.split = "true";
  }
  function revealWords(root) {
    root.querySelectorAll("h1,h2").forEach(h => {
      splitWords(h);
      const words = h.querySelectorAll(".__word");
      if (!words.length) return;
      gsap.fromTo(words, {
        yPercent: 110,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.045,
        scrollTrigger: {
          trigger: h,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      });
    });
  }
  function staggerGrids(root) {
    root.querySelectorAll("div").forEach(el => {
      if (el.dataset.staggered) return;
      const cs = getComputedStyle(el);
      if (cs.display === "grid" && el.children.length > 1 && el.children.length <= 8) {
        el.dataset.staggered = "true";
        gsap.fromTo(el.children, {
          opacity: 0,
          y: 28
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        });
      }
    });
  }
  function parallaxImages(root) {
    root.querySelectorAll("img").forEach(img => {
      if (img.dataset.parallax) return;
      img.dataset.parallax = "true";
      gsap.to(img, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });
    });
  }
  function eyebrowLines(root) {
    root.querySelectorAll("p").forEach(p => {
      if (p.dataset.squiggle) return;
      const cs = getComputedStyle(p);
      const next = p.nextElementSibling;
      if (parseInt(cs.fontWeight, 10) >= 600 && next && /^H[12]$/.test(next.tagName)) {
        p.dataset.squiggle = "true";
        p.style.display = "inline-flex";
        p.style.alignItems = "center";
        p.style.gap = "10px";
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 40 20");
        svg.setAttribute("width", "32");
        svg.setAttribute("height", "16");
        svg.style.overflow = "visible";
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M2,18 C8,2 14,2 20,10 C26,18 32,18 38,4");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "var(--color-di-serria)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-linecap", "round");
        svg.appendChild(path);
        p.appendChild(svg);
        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        gsap.fromTo(path, {
          strokeDashoffset: len
        }, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: p,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true
          }
        });
      }
    });
  }
  function waveDividers(root) {
    const sections = Array.from(new Set(root.querySelectorAll("section, footer")));
    sections.forEach((sec, i) => {
      if (sec.dataset.waved) return;
      const next = sections[i + 1];
      if (!next) return;
      sec.dataset.waved = "true";
      if (!sec.style.position) sec.style.position = "relative";
      const nextBg = getComputedStyle(next).backgroundColor;
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 1440 60");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.style.cssText = "position:absolute;left:0;right:0;bottom:-1px;width:100%;height:44px;display:block;pointer-events:none;";
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M0,30 C220,58 380,2 620,18 C860,34 1040,58 1220,26 C1320,10 1380,10 1440,20 L1440,60 L0,60 Z");
      path.setAttribute("fill", nextBg);
      svg.appendChild(path);
      sec.appendChild(svg);
    });
  }
  function runAll() {
    const root = document.getElementById("root");
    if (!root || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    initSmoothScroll();
    waveDividers(root);
    revealWords(root);
    staggerGrids(root);
    parallaxImages(root);
    eyebrowLines(root);
    root.querySelectorAll("img").forEach(img => {
      if (img.complete) return;
      img.addEventListener("load", () => ScrollTrigger.refresh(), {
        once: true
      });
    });
    ScrollTrigger.refresh();
    // Safety net: force-complete any tween whose trigger is already active (above-the-fold content)
    // so it never sits hidden waiting for a scroll event that already happened.
    requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.isActive && st.animation && st.animation.progress() < 1) st.animation.progress(1);
      });
    });
  }
  function reset() {
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(t => t.kill());
  }
  window.EmpAnim = {
    runAll,
    reset
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/animations.js", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Contact.jsx
try { (() => {
function EmpContact() {
  const {
    Card,
    Button,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = {
    padding: "112px 5%"
  };
  const Placeholder = ({
    h = 200
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3/2",
      borderRadius: "var(--radius-image)",
      background: "var(--color-neutral-lighter)"
    }
  });
  const faqs = [{
    q: "Como faço um pedido",
    a: "Todos os pedidos são feitos pelo nosso aplicativo. Baixe na Play Store, escolha seus produtos favoritos e finalize por lá. É rápido e seguro."
  }, {
    q: "Vocês entregam em todo Brasil",
    a: "Entregamos para todo o país com cuidado para que os produtos cheguem inteiros e frescos. O prazo varia conforme a região."
  }, {
    q: "Posso retirar na loja",
    a: "Sim. Ao fazer o pedido no app, escolha a opção de retirada. Você recebe um código e é só buscar no nosso endereço em Passos de Minas."
  }, {
    q: "Os produtos são artesanais mesmo",
    a: "Cada pote e cada pão saem de mãos mineiras, com receitas da Serra da Canastra. Não usamos produção em massa."
  }, {
    q: "Como acompanho meu pedido",
    a: "Pelo próprio aplicativo você acompanha cada etapa. Da separação dos produtos até a saída para entrega, está tudo lá."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Visite"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Onde estamos"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Venha sentir o cheiro de Minas de perto.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Placeholder, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 12
    }
  }, "Passos de Minas"), /*#__PURE__*/React.createElement("p", null, "Rua Serra da Canastra, 450, Centro, Passos de Minas, MG"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no mapa"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Placeholder, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 12
    }
  }, "Hor\xE1rios"), /*#__PURE__*/React.createElement("p", null, "Segunda a sexta, das 9h \xE0s 18h. S\xE1bado, das 9h \xE0s 13h."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no mapa")))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Fale"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Canais diretos"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Escolha o melhor caminho para um papo reto e mineiro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48
    }
  }, [{
    icon: "mail",
    title: "E-mail",
    text: "Mande sua mensagem e responderemos com o carinho de sempre.",
    link: "@emporiocoisasdeminas.com.br"
  }, {
    icon: "call",
    title: "WhatsApp",
    text: "Prefere um café virtual? Chame a gente por aqui.",
    link: "35 99898-7421"
  }, {
    icon: "location_on",
    title: "Instagram",
    text: "Acompanhe os bastidores e as novidades da cozinha.",
    link: "@EMPORIOCOISASDEMINASPASSOS"
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/${c.icon}.svg`,
    width: "48",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 12
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, c.text), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: "underline"
    }
  }, c.link)))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-2",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "D\xFAvidas"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 48
    }
  }, "Se a sua pergunta n\xE3o estiver aqui, \xE9 s\xF3 chamar no WhatsApp."), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ["q0"]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement(AccordionItem, {
    value: "q" + i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(AccordionTrigger, {
    value: "q" + i
  }, f.q), /*#__PURE__*/React.createElement(AccordionContent, {
    value: "q" + i
  }, /*#__PURE__*/React.createElement("p", null, f.a)))))))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Contato"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 24
    }
  }, "Fale com a gente"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Um peda\xE7o de Minas est\xE1 a uma mensagem de dist\xE2ncia. Conte com a gente para o que precisar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "App")))));
}
window.EmpContact = EmpContact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/History.jsx
try { (() => {
function EmpHistory({
  go
}) {
  const {
    Button,
    Card,
    Tabs,
    TabsList,
    TabsContent
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = {
    padding: "112px 5%"
  };
  const years = [{
    value: "2015",
    label: "2015",
    title: "O primeiro tacho no fogão a lenha",
    text: "Tudo começou na cozinha de casa, com uma receita de família e o desejo de compartilhar o sabor verdadeiro. O fogo brando fez o resto."
  }, {
    value: "2017",
    label: "2017",
    title: "As portas se abrem para a serra",
    text: "O empório físico nasceu em Passos de Minas, um cantinho para receber quem busca o autêntico."
  }, {
    value: "2019",
    label: "2019",
    title: "Mãos que se unem às nossas",
    text: "Famílias produtoras da Canastra se tornaram parceiras, levando o leite, a fruta e a pimenta da terra para muito mais mesas."
  }, {
    value: "2021",
    label: "2021",
    title: "O mundo cabe na palma da mão",
    text: "Lançamos o aplicativo para encurtar o caminho entre o tacho e a sua casa."
  }, {
    value: "2023",
    label: "2023",
    title: "Mais de oitenta motivos para se orgulhar",
    text: "Hoje são mais de 80 produtos no app, todos feitos com a mesma paciência do primeiro pote."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Origem"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 24
    }
  }, "Nossa hist\xF3ria"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Da terra vermelha da Canastra para a sua mesa, cada pote carrega o tempo, o fogo brando e a mem\xF3ria afetiva de Minas Gerais."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("Produtos")
  }, "Produtos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Pe\xE7a pelo app")))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Raiz"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "O fogo brando que vem da serra"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Tudo come\xE7a com as m\xE3os de quem conhece a terra. A mesma paci\xEAncia do fog\xE3o a lenha est\xE1 em cada receita que chega at\xE9 voc\xEA."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    style: {
      marginBottom: 12
    }
  }, "Parceiros"), /*#__PURE__*/React.createElement("p", null, "Fam\xEDlias que transformam o leite, a fruta e a pimenta em pura mem\xF3ria afetiva.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    style: {
      marginBottom: 12
    }
  }, "Feito \xE0 m\xE3o"), /*#__PURE__*/React.createElement("p", null, "Nenhum pote \xE9 igual ao outro, cada um carrega o tempo certo e o carinho de Minas.")))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/sobre-origem.jpg",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-4",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultValue: "2015"
  }, /*#__PURE__*/React.createElement(TabsList, {
    items: years.map(y => ({
      value: y.value,
      label: y.label
    }))
  }), years.map(y => /*#__PURE__*/React.createElement(TabsContent, {
    key: y.value,
    value: y.value,
    style: {
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 12
    }
  }, y.value), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 24
    }
  }, y.title), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, y.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280,
      borderRadius: "var(--radius-image)",
      background: "var(--color-neutral-darkest)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-white-20)"
    }
  }, "foto do per\xEDodo")))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Ess\xEAncia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "O que nos move"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Tr\xEAs pilares simples que sustentam cada pote que chega at\xE9 voc\xEA.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gridRow: "span 2",
      padding: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      borderRadius: "var(--radius-image)",
      background: "var(--color-neutral-lighter)",
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Feito \xE0 m\xE3o"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 24
    }
  }, "Nenhum pote \xE9 igual ao outro"), /*#__PURE__*/React.createElement("p", null, "O que nos move"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Produtos"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Produtos"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/bento.svg",
    width: "48",
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 24
    }
  }, "O terroir fala mais alto"), /*#__PURE__*/React.createElement("p", null, "Tr\xEAs pilares simples que sustentam cada pote que chega at\xE9 voc\xEA."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Produtos"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Produtos"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/bento.svg",
    width: "48",
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 24
    }
  }, "O terroir fala mais alto"), /*#__PURE__*/React.createElement("p", null, "Tr\xEAs pilares simples que sustentam cada pote que chega at\xE9 voc\xEA."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Produtos"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Produtos")))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-2",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "A mesa espera por voc\xEA"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Explore nossos antepastos, geleias e doces. A hist\xF3ria continua no seu pr\xF3ximo pedido, direto no aplicativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("Produtos")
  }, "Produtos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Pe\xE7a pelo app")))));
}
window.EmpHistory = EmpHistory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/History.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Home.jsx
try { (() => {
function EmpHome({
  go
}) {
  const {
    Button,
    Card
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = {
    padding: "112px 5%"
  };
  const Placeholder = ({
    h = 320,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: h,
      borderRadius: "var(--radius-image)",
      background: "var(--color-neutral-lighter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-neutral-dark)",
      fontSize: 13
    }
  }, label || "Relume placeholder image");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 24
    }
  }, "O sabor de Minas na sua mesa"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Direto da Serra da Canastra, produtos feitos com a calma e o capricho de quem conhece a terra."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Pe\xE7a pelo App"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("Nossa história")
  }, "Conhe\xE7a nossa hist\xF3ria"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-produtos-mesa.jpg",
    alt: "Relume placeholder image",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-4",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Categorias"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Nossos sabores"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Escolha o que combina com o seu momento.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      background: "var(--color-neutral-darkest)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    h: 140,
    label: `Relume placeholder image ${i}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Artesanal"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 8
    }
  }, "Antepastos e Pat\xEAs"), /*#__PURE__*/React.createElement("p", null, "Sabores intensos para abrir o apetite com perfei\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver"))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: "span 2",
      gridRow: "span 2",
      background: "var(--color-neutral-darkest)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    h: 220,
    label: "Relume placeholder image 5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 32px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Selecionado"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 16
    }
  }, "Vinhos"), /*#__PURE__*/React.createElement("p", null, "R\xF3tulos escolhidos a dedo para brindar os sabores de Minas."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Ver todos"))))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Destaques"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Os favoritos da casa"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Selecionamos o que h\xE1 de melhor saindo do nosso tacho.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: "span 2",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Novidade"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 8
    }
  }, "Pasta de alho negro da Canastra"), /*#__PURE__*/React.createElement("p", null, "Intensa e aveludada, feita com alho negro artesanal."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no app"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/destaque-alho-negro.jpg",
    alt: "Relume placeholder image 3",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cake.svg",
    width: "48",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 8
    }
  }, "Doce de leite com cumaru no ponto de corte"), /*#__PURE__*/React.createElement("p", null, "A madeira nobre encontra o leite da melhor proced\xEAncia."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no app"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cake.svg",
    width: "48",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 8
    }
  }, "Doce de leite com cumaru no ponto de corte"), /*#__PURE__*/React.createElement("p", null, "A madeira nobre encontra o leite da melhor proced\xEAncia."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no app"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: "span 2",
      gridRow: "span 2",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Premium"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 16
    }
  }, "Antepasto de berinjela defumada"), /*#__PURE__*/React.createElement("p", null, "O sabor da brasa em uma receita que atravessa gera\xE7\xF5es na Serra da Canastra."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver no app"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/destaque-berinjela.jpg",
    alt: "Relume placeholder image 1",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Simples"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Como receber o sabor de Minas"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "\xC9 r\xE1pido e f\xE1cil. O caminho mais curto entre a Serra da Canastra e a sua mesa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48,
      width: "100%"
    }
  }, [{
    icon: "apps",
    title: "Peça no app",
    text: "Escolha seus produtos favoritos e monte a cesta perfeita."
  }, {
    icon: "select",
    title: "Escolha entrega ou retirada",
    text: "Você decide se recebe em casa ou busca no nosso empório."
  }, {
    icon: "code",
    title: "Receba ou retire com código",
    text: "Prático e seguro, seu pedido chega até você sem complicação."
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/${s.icon}.svg`,
    width: "48",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 20
    }
  }, s.title), /*#__PURE__*/React.createElement("p", null, s.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Baixar o App"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ver como funciona")))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/sobre-origem.jpg",
    alt: "Relume placeholder image",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Ess\xEAncia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Feito em Minas, feito com carinho"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Nossas receitas nascem na Serra da Canastra, do encontro da terra boa com as m\xE3os de quem respeita o tempo. Cada pote carrega a mem\xF3ria de um fog\xE3o a lenha e o orgulho de ser mineiro."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Hist\xF3ria"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "Ler"))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-2",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Quem provou"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "A palavra de quem j\xE1 recebeu um pedacinho de Minas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 32
    }
  }, [{
    name: "Ana Clara",
    city: "Cliente de São Paulo",
    img: "depoimento-ana-clara.jpg",
    quote: "O antepasto de berinjela defumada me levou direto para a roça. Sabor de comida feita com calma."
  }, {
    name: "João Pedro",
    city: "Cliente de Uberlândia",
    img: "depoimento-joao-pedro.jpg",
    quote: "A geleia de pimenta biquinho com cachaça é um espetáculo. Combina com tudo, do queijo ao churrasco."
  }, {
    name: "Mariana Souza",
    city: "Cliente de Belo Horizonte",
    img: "depoimento-mariana.jpg",
    quote: "Presenteei minha família com a cesta de doces. O doce de leite com cumaru é inesquecível."
  }].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 24,
      color: "var(--color-van-cleef)"
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("h5", {
    style: {
      fontWeight: 400,
      fontSize: 20,
      marginBottom: 24
    }
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/images/${t.img}`,
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600
    }
  }, t.name), /*#__PURE__*/React.createElement("p", null, t.city)))))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-2",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Baixe o app e fique por dentro de tudo"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Acompanhe seus pedidos, receba promo\xE7\xF5es exclusivas e saiba das novidades antes de todo mundo."), /*#__PURE__*/React.createElement(NewsletterForm, null)), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/cta-app.jpg",
    alt: "Relume placeholder image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })))));
}
function NewsletterForm() {
  const {
    Input,
    Button
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Seu melhor e-mail",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, sent ? "Enviado!" : "Baixar")), /*#__PURE__*/React.createElement("p", {
    className: "text-tiny"
  }, "Ao se inscrever, voc\xEA concorda em receber nossas novidades e est\xE1 de acordo com nossa Pol\xEDtica de Privacidade."));
}
window.EmpHome = EmpHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Products.jsx
try { (() => {
function EmpProducts({
  go
}) {
  const {
    Button,
    Card
  } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = {
    padding: "112px 5%"
  };
  const cats = [{
    tag: "Doce",
    title: "Doces em geral",
    desc: "Doce de leite, compotas e frutas cristalizadas em calda."
  }, {
    tag: "Doce",
    title: "Geleia de pimenta",
    desc: "O equilíbrio perfeito entre doce e picante."
  }, {
    tag: "Salgado",
    title: "Pimentas e molhos",
    desc: "Fermentados e temperados no ponto mineiro."
  }, {
    tag: "Padaria",
    title: "Torradas e pães",
    desc: "Crocância artesanal para acompanhar qualquer pote."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Artesanal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 24
    }
  }, "Nossos produtos"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Sabores aut\xEAnticos da Serra da Canastra feitos com ingredientes selecionados e aquele carinho que s\xF3 Minas Gerais tem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Pe\xE7a"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("Nossa história")
  }, "Hist\xF3ria")))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-4",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto 80px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Categorias"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Escolha o seu sabor"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Cada pote carrega a tradi\xE7\xE3o da Serra da Canastra.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gridRow: "span 2",
      padding: 48,
      background: "var(--color-neutral-darkest)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600
    }
  }, "Artesanal"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28
    }
  }, "Antepastos e pat\xEAs cremosos da cozinha mineira"), /*#__PURE__*/React.createElement("p", null, "Berinjela, alcachofra e tomate seco temperados com ervas frescas e azeite de oliva."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Comprar"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "App"))), cats.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    style: {
      padding: 24,
      background: "var(--color-neutral-darkest)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small",
    style: {
      fontWeight: 600
    }
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20
    }
  }, c.title), /*#__PURE__*/React.createElement("p", null, c.desc), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "App")))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-1",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Curadoria"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "Mais de 80 motivos para abrir o apetite"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Cada produto \xE9 escolhido a dedo, direto dos produtores da Serra da Canastra. A tradi\xE7\xE3o mineira cabe no seu bolso, dentro do app."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Explorar"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "link",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u203A")
  }, "App"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "+120"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18
    }
  }, "Produtos no app"), /*#__PURE__*/React.createElement("p", null, "De geleias a vinhos, tudo em um s\xF3 lugar.")), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "100%"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18
    }
  }, "Feito artesanalmente"), /*#__PURE__*/React.createElement("p", null, "Produ\xE7\xE3o pequena, sabor grande e aten\xE7\xE3o a cada detalhe."))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-2",
    style: sectionPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 24
    }
  }, "O app est\xE1 te esperando"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      marginBottom: 32
    }
  }, "Mais de 80 produtos mineiros esperam por voc\xEA no nosso app. Baixe agora e explore todos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Baixar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Hist\xF3ria")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      height: 320,
      borderRadius: "var(--radius-image)",
      background: "var(--color-neutral-lighter)"
    }
  }))));
}
window.EmpProducts = EmpProducts;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Products.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.AccordionTrigger = __ds_scope.AccordionTrigger;

__ds_ns.AccordionContent = __ds_scope.AccordionContent;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsContent = __ds_scope.TabsContent;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
