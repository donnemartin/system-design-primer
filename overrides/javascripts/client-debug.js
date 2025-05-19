(function() {
    function h(a) {
        return '[giscus] An error occurred. Error message: "'.concat(a, '".')
    }
    function l(a, f) {
        void 0 === f && (f = !1);
        f = f ? "meta[property='og:".concat(a, "'],") : "";
        return (a = document.querySelector(f + "meta[name='".concat(a, "']"))) ? a.content : ""
    }
    function p() {
        delete c.session;
        var a = "".concat(k).concat(q, "/widget?").concat(new URLSearchParams(c));
        e.src = a
    }
    // Grab the <script> that loaded this file
    var m = document.currentScript;

    // ── FORCE REMOTE GISCUS ORIGIN ──
    var k = "https://giscus.app";

    // Current page URL
    var b = new URL(location.href);

    // Session token (if any)
    var d = b.searchParams.get("giscus") || "";
    var n = localStorage.getItem("giscus-session");
    b.searchParams.delete("giscus");
    b.hash = "";
    var g = b.toString();
    if (d)
        localStorage.setItem("giscus-session", JSON.stringify(d)),
        history.replaceState(void 0, document.title, g);
    else if (n)
        try {
            d = JSON.parse(n)
        } catch (a) {
            localStorage.removeItem("giscus-session"),
            console.warn("".concat(h(null === a || void 0 === a ? void 0 : a.message), " Session has been cleared."))
        }
    b = m.dataset;

    // ── FORCE CORRECT CONFIG (DEBUG ONLY) ──
    // Replace these strings with your real values
    b.repo          = b.repo          || "ido777/system-design-primer-update";
    b.repoId        = b.repoId        || "R_kgDOORdCfw";
    b.category      = b.category      || "Feedback by Page";
    b.categoryId    = b.categoryId    || "DIC_kwDOORdCf84CqLEY";
    b.theme         = b.theme         || "light";               // or "preferred_color_scheme"
    b.mapping       = b.mapping       || "pathname";
    b.reactionsEnabled = b.reactionsEnabled || "1";
    b.emitMetadata  = b.emitMetadata  || "0";
    b.inputPosition = b.inputPosition || "bottom";
    b.lang          = b.lang          || "en";
    // ────────────────────────────────────────


    var c = {};
    c.origin = g;
    c.session = d;
    c.theme = b.theme;
    c.reactionsEnabled = b.reactionsEnabled || "1";
    c.emitMetadata = b.emitMetadata || "0";
    c.inputPosition = b.inputPosition || "bottom";
    c.repo = b.repo;
    c.repoId = b.repoId;
    c.category = b.category || "";
    c.categoryId = b.categoryId;
    c.strict = b.strict || "0";
    c.description = l("description", !0);
    c.backLink = l("giscus:backlink") || g;
    switch (b.mapping) {
    case "url":
        c.term = g;
        break;
    case "title":
        c.term = document.title;
        break;
    case "og:title":
        c.term = l("title", !0);
        break;
    case "specific":
        c.term = b.term;
        break;
    case "number":
        c.number = b.term;
        break;
    default:
        c.term = 2 > location.pathname.length ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "")
    }
    var r = (d = document.querySelector(".giscus")) && d.id;
    r && (c.origin = "".concat(g, "#").concat(r));
    var q = b.lang ? "/".concat(b.lang) : "";
    g = "".concat(k).concat(q, "/widget?").concat(new URLSearchParams(c));
    b = "lazy" === b.loading ? "lazy" : void 0;
    var e = document.createElement("iframe");
    Object.entries({
        class: "giscus-frame giscus-frame--loading",
        title: "Comments",
        scrolling: "no",
        allow: "clipboard-write",
        src: g,
        loading: b
    }).forEach(function(a) {
        var f = a[0];
        return (a = a[1]) && e.setAttribute(f, a)
    });
    e.style.opacity = "0";
    e.addEventListener("load", function() {
        e.style.removeProperty("opacity");
        e.classList.remove("giscus-frame--loading")
    });
    b = document.getElementById("giscus-css") || document.createElement("link");
    b.id = "giscus-css";
    b.rel = "stylesheet";
    b.href = "".concat(k, "/default.css");
    document.head.prepend(b);
    if (d) {
        for (; d.firstChild; )
            d.firstChild.remove();
        d.appendChild(e)
    } else
        d = document.createElement("div"),
        d.setAttribute("class", "giscus"),
        d.appendChild(e),
        m.insertAdjacentElement("afterend", d);
    window.addEventListener("message", function(a) {
        a.origin === k && (a = a.data,
        "object" === typeof a && a.giscus && (a.giscus.resizeHeight && (e.style.height = "".concat(a.giscus.resizeHeight, "px")),
        a.giscus.signOut ? (localStorage.removeItem("giscus-session"),
        console.log("[giscus] User has logged out. Session has been cleared."),
        p()) : a.giscus.error && (a = a.giscus.error,
        a.includes("Bad credentials") || a.includes("Invalid state value") || a.includes("State has expired") ? null !== localStorage.getItem("giscus-session") ? (localStorage.removeItem("giscus-session"),
        console.warn("".concat(h(a), " Session has been cleared.")),
        p()) : n || console.error("".concat(h(a), " No session is stored initially. ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")) : a.includes("Discussion not found") ? console.warn("[giscus] ".concat(a, ". A new discussion will be created if a comment/reaction is submitted.")) : a.includes("API rate limit exceeded") ? console.warn(h(a)) : console.error("".concat(h(a), " ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")))))
    })
}
)();
