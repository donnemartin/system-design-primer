(function() {
    console.log("[Giscus – Debug] Starting debug harness");
  
    // —— client.js loader watcher ——
    let scriptRetries = 0;
    function watchScript() {
      const script = document.querySelector('script[src="js/client-debug.js"]');
      if (script) {
        console.log("[Giscus – Debug] Found client.js tag", script);
        script.onload = () => console.log("[Giscus – Debug] client.js loaded successfully");
        script.onerror = () => console.error("[Giscus – Debug] client.js failed to load");
      } else {
        scriptRetries++;
        if (scriptRetries <= 3) {
          console.warn(`[Giscus – Debug] client.js tag not yet present (attempt ${scriptRetries}/3)… retrying`);
          setTimeout(watchScript, 200);
        } else {
          console.error("[Giscus – Debug] ❌ client.js tag still not found after 3 attempts — persistent problem.");
        }
      }
    }
    document.addEventListener("DOMContentLoaded", watchScript);
  
  
    // —— iframe watcher ——
    let iframeRetries = 0;
    function watchIframe() {
      const container = document.querySelector(".giscus-frame");
      if (!container) {
        console.error("[Giscus – Debug] No .giscus-frame container found in DOM! MkDocs template may be missing it.");
        return;
      }
  
      const iframe = container.querySelector("iframe");
      if (iframe) {
        console.log("[Giscus – Debug] iframe injected", iframe);
        iframe.addEventListener("load", () => console.log("[Giscus – Debug] iframe loaded"));
        iframe.addEventListener("error", () => console.error("[Giscus – Debug] iframe error"));
      } else {
        iframeRetries++;
        if (iframeRetries <= 3) {
          console.warn(`[Giscus – Debug] iframe not yet present (attempt ${iframeRetries}/3)… retrying`);
          setTimeout(watchIframe, 200);
        } else {
          console.error("[Giscus – Debug] ❌ iframe still not found after 3 attempts — persistent problem.");
        }
      }
    }
    document.addEventListener("DOMContentLoaded", watchIframe);
  
  
    // —— postMessage logger ——
    window.addEventListener("message", event => {
      if (event.origin.includes("giscus.app")) {
        console.log("[Giscus ▶ parent]", event.data);
      }
    });
  })();
  