<!DOCTYPE html>
<html lang="pt-BR">

  <head>
    <meta charset="UTF-8" />

    <!-- Meta Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "380271121371050");
      fbq("track", "PageView");
    </script>
    <!-- End Meta Pixel Code -->
    <script>
      if (
        location.protocol !== "https:" &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1"
      ) {
        location.replace(
          `https://${location.hostname}${location.pathname}${location.search}`
        );
      }
      window.onload = function () {
        // Captura todos os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        let utmSource = urlParams.get("utm_source");

        // Se não houver utm_source, pega o primeiro parâmetro disponível
        if (!utmSource && urlParams.entries().next().value) {
          utmSource = urlParams.entries().next().value[0];
        }

        // Verifica se encontrou algum parâmetro válido
        if (utmSource) {
          // Seleciona todos os links de compra
          const purchaseLinks = document.querySelectorAll(".cta_btn");

          // Adiciona o parâmetro a cada link
          purchaseLinks.forEach((link) => {
            link.href += `?utm_source=${utmSource}`;
          });

          // Atualiza o texto do botão "ENTRE EM CONTATO"
          const contactButton = document.querySelector(".signin__button");
          contactButton.setAttribute(
            "onclick",
            `window.location.href='https://wa.me/554391768151?text=Ola%20vim%20do%20${utmSource}';`
          );
        }
      };
    </script>
       <script>
      class RocketLazyLoadScripts {
        constructor() {
          (this.triggerEvents = [
            "keydown",
            "mousedown",
            "mousemove",
            "touchmove",
            "touchstart",
            "touchend",
            "wheel",
          ]),
            (this.userEventHandler = this._triggerListener.bind(this)),
            (this.touchStartHandler = this._onTouchStart.bind(this)),
            (this.touchMoveHandler = this._onTouchMove.bind(this)),
            (this.touchEndHandler = this._onTouchEnd.bind(this)),
            (this.clickHandler = this._onClick.bind(this)),
            (this.interceptedClicks = []),
            window.addEventListener("pageshow", (e) => {
              this.persisted = e.persisted;
            }),
            window.addEventListener("DOMContentLoaded", () => {
              this._preconnect3rdParties();
            }),
            (this.delayedScripts = { normal: [], async: [], defer: [] }),
            (this.allJQueries = []);
        }
        _addUserInteractionListener(e) {
          document.hidden
            ? e._triggerListener()
            : (this.triggerEvents.forEach((t) =>
                window.addEventListener(t, e.userEventHandler, { passive: !0 })
              ),
              window.addEventListener("touchstart", e.touchStartHandler, {
                passive: !0,
              }),
              window.addEventListener("mousedown", e.touchStartHandler),
              document.addEventListener(
                "visibilitychange",
                e.userEventHandler
              ));
        }
        _removeUserInteractionListener() {
          this.triggerEvents.forEach((e) =>
            window.removeEventListener(e, this.userEventHandler, {
              passive: !0,
            })
          ),
            document.removeEventListener(
              "visibilitychange",
              this.userEventHandler
            );
        }
        _onTouchStart(e) {
          "HTML" !== e.target.tagName &&
            (window.addEventListener("touchend", this.touchEndHandler),
            window.addEventListener("mouseup", this.touchEndHandler),
            window.addEventListener("touchmove", this.touchMoveHandler, {
              passive: !0,
            }),
            window.addEventListener("mousemove", this.touchMoveHandler),
            e.target.addEventListener("click", this.clickHandler),
            this._renameDOMAttribute(e.target, "onclick", "rocket-onclick"));
        }
        _onTouchMove(e) {
          window.removeEventListener("touchend", this.touchEndHandler),
            window.removeEventListener("mouseup", this.touchEndHandler),
            window.removeEventListener("touchmove", this.touchMoveHandler, {
              passive: !0,
            }),
            window.removeEventListener("mousemove", this.touchMoveHandler),
            e.target.removeEventListener("click", this.clickHandler),
            this._renameDOMAttribute(e.target, "rocket-onclick", "onclick");
        }
        _onTouchEnd(e) {
          window.removeEventListener("touchend", this.touchEndHandler),
            window.removeEventListener("mouseup", this.touchEndHandler),
            window.removeEventListener("touchmove", this.touchMoveHandler, {
              passive: !0,
            }),
            window.removeEventListener("mousemove", this.touchMoveHandler);
        }
        _onClick(e) {
          e.target.removeEventListener("click", this.clickHandler),
            this._renameDOMAttribute(e.target, "rocket-onclick", "onclick"),
            this.interceptedClicks.push(e),
            e.preventDefault(),
            e.stopPropagation(),
            e.stopImmediatePropagation();
        }
        _replayClicks() {
          window.removeEventListener("touchstart", this.touchStartHandler, {
            passive: !0,
          }),
            window.removeEventListener("mousedown", this.touchStartHandler),
            this.interceptedClicks.forEach((e) => {
              e.target.dispatchEvent(
                new MouseEvent("click", {
                  view: e.view,
                  bubbles: !0,
                  cancelable: !0,
                })
              );
            });
        }
        _renameDOMAttribute(e, t, n) {
          e.hasAttribute &&
            e.hasAttribute(t) &&
            (event.target.setAttribute(n, event.target.getAttribute(t)),
            event.target.removeAttribute(t));
        }
        _triggerListener() {
          this._removeUserInteractionListener(this),
            "loading" === document.readyState
              ? document.addEventListener(
                  "DOMContentLoaded",
                  this._loadEverythingNow.bind(this)
                )
              : this._loadEverythingNow();
        }
        _preconnect3rdParties() {
          let e = [];
          document
            .querySelectorAll("script[type=rocketlazyloadscript]")
            .forEach((t) => {
              if (t.hasAttribute("src")) {
                const n = new URL(t.html).origin;
                n !== location.origin &&
                  e.push({
                    src: n,
                    crossOrigin:
                      t.crossOrigin ||
                      "module" === t.getAttribute("data-rocket-type"),
                  });
              }
            }),
            (e = [...new Map(e.map((e) => [JSON.stringify(e), e])).values()]),
            this._batchInjectResourceHints(e, "preconnect");
        }
        async _loadEverythingNow() {
          (this.lastBreath = Date.now()),
            this._delayEventListeners(),
            this._delayJQueryReady(this),
            this._handleDocumentWrite(),
            this._registerAllDelayedScripts(),
            this._preloadAllScripts(),
            await this._loadScriptsFromList(this.delayedScripts.normal),
            await this._loadScriptsFromList(this.delayedScripts.defer),
            await this._loadScriptsFromList(this.delayedScripts.async);
          try {
            await this._triggerDOMContentLoaded(),
              await this._triggerWindowLoad();
          } catch (e) {}
          window.dispatchEvent(new Event("rocket-allScriptsLoaded")),
            this._replayClicks();
        }
        _registerAllDelayedScripts() {
          document
            .querySelectorAll("script[type=rocketlazyloadscript]")
            .forEach((e) => {
              e.hasAttribute("src")
                ? e.hasAttribute("async") && !1 !== e.async
                  ? this.delayedScripts.async.push(e)
                  : (e.hasAttribute("defer") && !1 !== e.defer) ||
                    "module" === e.getAttribute("data-rocket-type")
                  ? this.delayedScripts.defer.push(e)
                  : this.delayedScripts.normal.push(e)
                : this.delayedScripts.normal.push(e);
            });
        }
        async _transformScript(e) {
          return (
            await this._littleBreath(),
            new Promise((t) => {
              const n = document.createElement("script");
              [...e.attributes].forEach((e) => {
                let t = e.nodeName;
                "type" !== t &&
                  ("data-rocket-type" === t && (t = "type"),
                  n.setAttribute(t, e.nodeValue));
              }),
                e.hasAttribute("src")
                  ? (n.addEventListener("load", t),
                    n.addEventListener("error", t))
                  : ((n.text = e.text), t());
              try {
                e.parentNode.replaceChild(n, e);
              } catch (e) {
                t();
              }
            })
          );
        }
        async _loadScriptsFromList(e) {
          const t = e.shift();
          return t
            ? (await this._transformScript(t), this._loadScriptsFromList(e))
            : Promise.resolve();
        }
        _preloadAllScripts() {
          this._batchInjectResourceHints(
            [
              ...this.delayedScripts.normal,
              ...this.delayedScripts.defer,
              ...this.delayedScripts.async,
            ],
            "preload"
          );
        }
        _batchInjectResourceHints(e, t) {
          var n = document.createDocumentFragment();
          e.forEach((e) => {
            if (e.src) {
              const i = document.createElement("link");
              (i.href = e.src),
                (i.rel = t),
                "preconnect" !== t && (i.as = "script"),
                e.getAttribute &&
                  "module" === e.getAttribute("data-rocket-type") &&
                  (i.crossOrigin = !0),
                e.crossOrigin && (i.crossOrigin = e.crossOrigin),
                n.appendChild(i);
            }
          }),
            document.head.appendChild(n);
        }
        _delayEventListeners() {
          let e = {};
          function t(t, n) {
            !(function (t) {
              function n(n) {
                return e[t].eventsToRewrite.indexOf(n) >= 0 ? "rocket-" + n : n;
              }
              e[t] ||
                ((e[t] = {
                  originalFunctions: {
                    add: t.addEventListener,
                    remove: t.removeEventListener,
                  },
                  eventsToRewrite: [],
                }),
                (t.addEventListener = function () {
                  (arguments[0] = n(arguments[0])),
                    e[t].originalFunctions.add.apply(t, arguments);
                }),
                (t.removeEventListener = function () {
                  (arguments[0] = n(arguments[0])),
                    e[t].originalFunctions.remove.apply(t, arguments);
                }));
            })(t),
              e[t].eventsToRewrite.push(n);
          }
          function n(e, t) {
            let n = e[t];
            Object.defineProperty(e, t, {
              get: () => n || function () {},
              set(i) {
                e["rocket" + t] = n = i;
              },
            });
          }
          t(document, "DOMContentLoaded"),
            t(window, "DOMContentLoaded"),
            t(window, "load"),
            t(window, "pageshow"),
            t(document, "readystatechange"),
            n(document, "onreadystatechange"),
            n(window, "onload"),
            n(window, "onpageshow");
        }
        _delayJQueryReady(e) {
          let t = window.jQuery;
          Object.defineProperty(window, "jQuery", {
            get: () => t,
            set(n) {
              if (n && n.fn && !e.allJQueries.includes(n)) {
                n.fn.ready = n.fn.init.prototype.ready = function (t) {
                  e.domReadyFired
                    ? t.bind(document)(n)
                    : document.addEventListener("rocket-DOMContentLoaded", () =>
                        t.bind(document)(n)
                      );
                };
                const t = n.fn.on;
                (n.fn.on = n.fn.init.prototype.on =
                  function () {
                    if (this[0] === window) {
                      function e(e) {
                        return e
                          .split(" ")
                          .map((e) =>
                            "load" === e || 0 === e.indexOf("load.")
                              ? "rocket-jquery-load"
                              : e
                          )
                          .join(" ");
                      }
                      "string" == typeof arguments[0] ||
                      arguments[0] instanceof String
                        ? (arguments[0] = e(arguments[0]))
                        : "object" == typeof arguments[0] &&
                          Object.keys(arguments[0]).forEach((t) => {
                            delete Object.assign(arguments[0], {
                              [e(t)]: arguments[0][t],
                            })[t];
                          });
                    }
                    return t.apply(this, arguments), this;
                  }),
                  e.allJQueries.push(n);
              }
              t = n;
            },
          });
        }
        async _triggerDOMContentLoaded() {
          (this.domReadyFired = !0),
            await this._littleBreath(),
            document.dispatchEvent(new Event("rocket-DOMContentLoaded")),
            await this._littleBreath(),
            window.dispatchEvent(new Event("rocket-DOMContentLoaded")),
            await this._littleBreath(),
            document.dispatchEvent(new Event("rocket-readystatechange")),
            await this._littleBreath(),
            document.rocketonreadystatechange &&
              document.rocketonreadystatechange();
        }
        async _triggerWindowLoad() {
          await this._littleBreath(),
            window.dispatchEvent(new Event("rocket-load")),
            await this._littleBreath(),
            window.rocketonload && window.rocketonload(),
            await this._littleBreath(),
            this.allJQueries.forEach((e) =>
              e(window).trigger("rocket-jquery-load")
            ),
            await this._littleBreath();
          const e = new Event("rocket-pageshow");
          (e.persisted = this.persisted),
            window.dispatchEvent(e),
            await this._littleBreath(),
            window.rocketonpageshow &&
              window.rocketonpageshow({ persisted: this.persisted });
        }
        _handleDocumentWrite() {
          const e = new Map();
          document.write = document.writeln = function (t) {
            const n = document.currentScript,
              i = document.createRange(),
              r = n.parentElement;
            let o = e.get(n);
            void 0 === o && ((o = n.nextSibling), e.set(n, o));
            const s = document.createDocumentFragment();
            i.setStart(s, 0),
              s.appendChild(i.createContextualFragment(t)),
              r.insertBefore(s, o);
          };
        }
        async _littleBreath() {
          Date.now() - this.lastBreath > 45 &&
            (await this._requestAnimFrame(), (this.lastBreath = Date.now()));
        }
        async _requestAnimFrame() {
          return document.hidden
            ? new Promise((e) => setTimeout(e))
            : new Promise((e) => requestAnimationFrame(e));
        }
        static run() {
          const e = new RocketLazyLoadScripts();
          e._addUserInteractionListener(e);
        }
      }
      RocketLazyLoadScripts.run();
    </script>

    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <style>
      img:is([sizes="auto" i], [sizes^="auto," i]) {
        contain-intrinsic-size: 3000px 1500px;
      }
    </style>


    <title>
      REIFLICK | REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas
      R$19,90/mês
    </title>
    <link
      rel="preload"
      href="wp-content/cache/perfmatters/dogflick.com.br/css/front.usedf45b.css?ver=1732479770"
      as="style"
      onload="this.rel='stylesheet';this.removeAttribute('onload');"
    />
    <link
      rel="stylesheet"
      id="perfmatters-used-css"
      href="wp-content/cache/perfmatters/dogflick.com.br/css/front.usedf45b.css?ver=1732479770"
      media="all"
    />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap"
      media="print"
      onload="this.media='all'"
    />
    <noscript
      ><link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap"
    /></noscript>
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&amp;display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&amp;display=swap"
      media="print"
      onload="this.media='all'"
    />
    <noscript
      ><link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&amp;display=swap"
    /></noscript>
    <link rel="canonical" href="index.html" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="REIFLICK | REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas R$19,90/mês"
    />
    <meta
      property="og:description"
      content="Compra aprovada na mesma hora para pagamentos via PIX ou CARTÃO Conteúdo de qualidade, com um preço que cabe no seu bolso! Mais de 2000 canais, por um preço que cabe no seu bolso! Com o REIFLICK, toda a sua diversão está em um só lugar. Quero assinar agora! [&hellip;]"
    />
    <meta property="og:url" content="https://reiflick2.vercel.app/" />
    <meta
      property="og:site_name"
      content="REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas R$19,90/mês"
    />
    <meta
      property="article:modified_time"
      content="2025-02-11T01:32:26+00:00"
    />
    <meta
      property="og:image"
      content="https://reiflick2.vercel.app/images/logo.webp"
    />
    <meta property="og:image:width" content="175" />
    <meta property="og:image:height" content="206" />
    <meta property="og:image:type" content="image/png" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json" class="yoast-schema-graph">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://dogflick.com.br/",
            "url": "https://dogflick.com.br/",
            "name": "REIFLICK | REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas R$19,90/mês",
            "isPartOf": { "@id": "https://dogflick.com.br/#website" },
            "about": { "@id": "https://dogflick.com.br/#organization" },
            "primaryImageOfPage": {
              "@id": "https://dogflick.com.br/#primaryimage"
            },
            "image": { "@id": "https://dogflick.com.br/#primaryimage" },
            "thumbnailUrl": "https://dogflick.com.br/wp-content/uploads/2025/01/Picsart_25-01-28_17-22-35-746-1.png",
            "datePublished": "2025-01-31T16:05:17+00:00",
            "dateModified": "2025-02-11T01:32:26+00:00",
            "breadcrumb": { "@id": "https://dogflick.com.br/#breadcrumb" },
            "inLanguage": "pt-BR",
            "potentialAction": [
              { "@type": "ReadAction", "target": ["https://dogflick.com.br/"] }
            ]
          },
          {
            "@type": "ImageObject",
            "inLanguage": "pt-BR",
            "@id": "https://dogflick.com.br/#primaryimage",
            "url": "https://dogflick.com.br/wp-content/uploads/2025/01/Picsart_25-01-28_17-22-35-746-1.png",
            "contentUrl": "https://dogflick.com.br/wp-content/uploads/2025/01/Picsart_25-01-28_17-22-35-746-1.png",
            "width": 175,
            "height": 206
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://dogflick.com.br/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Início" }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://dogflick.com.br/#website",
            "url": "https://dogflick.com.br/",
            "name": "REIFLICK",
            "description": "Transforme sua casa em um cinema de luxo! Filmes, séries e canais ao vivo com qualidade 4K por R$19,90/mês. Experiência única, suporte completo e diversão garantida!",
            "publisher": { "@id": "https://dogflick.com.br/#organization" },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://dogflick.com.br/?s={search_term_string}"
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "search_term_string"
                }
              }
            ],
            "inLanguage": "pt-BR"
          },
          {
            "@type": "Organization",
            "@id": "https://dogflick.com.br/#organization",
            "name": "REIFLICK",
            "url": "https://dogflick.com.br/",
            "logo": {
              "@type": "ImageObject",
              "inLanguage": "pt-BR",
              "@id": "https://dogflick.com.br/#/schema/logo/image/",
              "url": "https://dogflick.com.br/wp-content/uploads/2024/11/Sem-nome-2048-x-2048-px-500-x-500-px-1-1.png",
              "contentUrl": "https://dogflick.com.br/wp-content/uploads/2024/11/Sem-nome-2048-x-2048-px-500-x-500-px-1-1.png",
              "width": 500,
              "height": 500,
              "caption": "REIFLICK"
            },
            "image": { "@id": "https://dogflick.com.br/#/schema/logo/image/" }
          }
        ]
      }
    </script>
    <!-- / Yoast SEO plugin. -->

    <link rel="dns-prefetch" href="http://www.googletagmanager.com/" />
    <link rel="dns-prefetch" href="http://maps.googleapis.com/" />
    <link rel="dns-prefetch" href="http://maps.gstatic.com/" />
    <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
    <link rel="dns-prefetch" href="http://fonts.gstatic.com/" />
    <link rel="dns-prefetch" href="http://ajax.googleapis.com/" />
    <link rel="dns-prefetch" href="http://apis.google.com/" />
    <link rel="dns-prefetch" href="http://google-analytics.com/" />
    <link rel="dns-prefetch" href="http://www.google-analytics.com/" />
    <link rel="dns-prefetch" href="http://ssl.google-analytics.com/" />
    <link rel="dns-prefetch" href="http://youtube.com/" />
    <link rel="dns-prefetch" href="http://api.pinterest.com/" />
    <link rel="dns-prefetch" href="http://cdnjs.cloudflare.com/" />
    <link rel="dns-prefetch" href="http://connect.facebook.net/" />
    <link rel="dns-prefetch" href="http://platform.twitter.com/" />
    <link rel="dns-prefetch" href="http://syndication.twitter.com/" />
    <link rel="dns-prefetch" href="http://platform.instagram.com/" />
    <link rel="dns-prefetch" href="http://disqus.com/" />
    <link rel="dns-prefetch" href="http://sitename.disqus.com/" />
    <link rel="dns-prefetch" href="http://s7.addthis.com/" />
    <link rel="dns-prefetch" href="http://platform.linkedin.com/" />
    <link rel="dns-prefetch" href="http://w.sharethis.com/" />
    <link rel="dns-prefetch" href="http://i0.wp.com/" />
    <link rel="dns-prefetch" href="http://i1.wp.com/" />
    <link rel="dns-prefetch" href="http://i2.wp.com/" />
    <link rel="dns-prefetch" href="http://stats.wp.com/" />
    <link rel="dns-prefetch" href="http://pixel.wp.com/" />
    <link rel="dns-prefetch" href="http://s.gravatar.com/" />
    <link rel="dns-prefetch" href="http://0.gravatar.com/" />
    <link rel="dns-prefetch" href="http://2.gravatar.com/" />
    <link rel="dns-prefetch" href="http://1.gravatar.com/" />
    <link rel="dns-prefetch" href="http://googletagmanager.com/" />
    <link href="https://fonts.gstatic.com/" crossorigin rel="preconnect" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Feed para REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas R$19,90/mês &raquo;"
      href="feed/index.html"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Feed de comentários para REIFLICK - Assista Filmes, Séries e Canais ao Vivo por Apenas R$19,90/mês &raquo;"
      href="comments/feed/index.html"
    />
    <script type="rocketlazyloadscript">
      window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/dogflick.com.br\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.7.2"}};
      /*! This file is auto-generated */
      !function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83d\udc26\u200d\u2b1b","\ud83d\udc26\u200b\u2b1b")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
    </script>
    <style id="wp-emoji-styles-inline-css">
      img.wp-smiley,
      img.emoji {
        display: inline !important;
        border: none !important;
        box-shadow: none !important;
        height: 1em !important;
        width: 1em !important;
        margin: 0 0.07em !important;
        vertical-align: -0.1em !important;
        background: none !important;
        padding: 0 !important;
      }
    </style>
    <style id="safe-svg-svg-icon-style-inline-css">
      .safe-svg-cover {
        text-align: center;
      }
      .safe-svg-cover .safe-svg-inside {
        display: inline-block;
        max-width: 100%;
      }
      .safe-svg-cover svg {
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        width: 100%;
      }
    </style>
    <style id="classic-theme-styles-inline-css">
      /*! This file is auto-generated */
      .wp-block-button__link {
        color: #fff;
        background-color: #32373c;
        border-radius: 9999px;
        box-shadow: none;
        text-decoration: none;
        padding: calc(0.667em + 2px) calc(1.333em + 2px);
        font-size: 1.125em;
      }
      .wp-block-file__button {
        background: #32373c;
        color: #fff;
        text-decoration: none;
      }
    </style>
    <style id="global-styles-inline-css">
      :root {
        --wp--preset--aspect-ratio--square: 1;
        --wp--preset--aspect-ratio--4-3: 4/3;
        --wp--preset--aspect-ratio--3-4: 3/4;
        --wp--preset--aspect-ratio--3-2: 3/2;
        --wp--preset--aspect-ratio--2-3: 2/3;
        --wp--preset--aspect-ratio--16-9: 16/9;
        --wp--preset--aspect-ratio--9-16: 9/16;
        --wp--preset--color--black: #000000;
        --wp--preset--color--cyan-bluish-gray: #abb8c3;
        --wp--preset--color--white: #ffffff;
        --wp--preset--color--pale-pink: #f78da7;
        --wp--preset--color--vivid-red: #cf2e2e;
        --wp--preset--color--luminous-vivid-orange: #ff6900;
        --wp--preset--color--luminous-vivid-amber: #fcb900;
        --wp--preset--color--light-green-cyan: #7bdcb5;
        --wp--preset--color--vivid-green-cyan: #00d084;
        --wp--preset--color--pale-cyan-blue: #8ed1fc;
        --wp--preset--color--vivid-cyan-blue: #0693e3;
        --wp--preset--color--vivid-purple: #9b51e0;
        --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
          135deg,
          rgba(6, 147, 227, 1) 0%,
          rgb(155, 81, 224) 100%
        );
        --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
          135deg,
          rgb(122, 220, 180) 0%,
          rgb(0, 208, 130) 100%
        );
        --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
          135deg,
          rgba(252, 185, 0, 1) 0%,
          rgba(255, 105, 0, 1) 100%
        );
        --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
          135deg,
          rgba(255, 105, 0, 1) 0%,
          rgb(207, 46, 46) 100%
        );
        --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
          135deg,
          rgb(238, 238, 238) 0%,
          rgb(169, 184, 195) 100%
        );
        --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
          135deg,
          rgb(74, 234, 220) 0%,
          rgb(151, 120, 209) 20%,
          rgb(207, 42, 186) 40%,
          rgb(238, 44, 130) 60%,
          rgb(251, 105, 98) 80%,
          rgb(254, 248, 76) 100%
        );
        --wp--preset--gradient--blush-light-purple: linear-gradient(
          135deg,
          rgb(255, 206, 236) 0%,
          rgb(152, 150, 240) 100%
        );
        --wp--preset--gradient--blush-bordeaux: linear-gradient(
          135deg,
          rgb(254, 205, 165) 0%,
          rgb(254, 45, 45) 50%,
          rgb(107, 0, 62) 100%
        );
        --wp--preset--gradient--luminous-dusk: linear-gradient(
          135deg,
          rgb(255, 203, 112) 0%,
          rgb(199, 81, 192) 50%,
          rgb(65, 88, 208) 100%
        );
        --wp--preset--gradient--pale-ocean: linear-gradient(
          135deg,
          rgb(255, 245, 203) 0%,
          rgb(182, 227, 212) 50%,
          rgb(51, 167, 181) 100%
        );
        --wp--preset--gradient--electric-grass: linear-gradient(
          135deg,
          rgb(202, 248, 128) 0%,
          rgb(113, 206, 126) 100%
        );
        --wp--preset--gradient--midnight: linear-gradient(
          135deg,
          rgb(2, 3, 129) 0%,
          rgb(40, 116, 252) 100%
        );
        --wp--preset--font-size--small: 13px;
        --wp--preset--font-size--medium: 20px;
        --wp--preset--font-size--large: 36px;
        --wp--preset--font-size--x-large: 42px;
        --wp--preset--spacing--20: 0.44rem;
        --wp--preset--spacing--30: 0.67rem;
        --wp--preset--spacing--40: 1rem;
        --wp--preset--spacing--50: 1.5rem;
        --wp--preset--spacing--60: 2.25rem;
        --wp--preset--spacing--70: 3.38rem;
        --wp--preset--spacing--80: 5.06rem;
        --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
        --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),
          6px 6px rgba(0, 0, 0, 1);
        --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
      }
      :where(.is-layout-flex) {
        gap: 0.5em;
      }
      :where(.is-layout-grid) {
        gap: 0.5em;
      }
      body .is-layout-flex {
        display: flex;
      }
      .is-layout-flex {
        flex-wrap: wrap;
        align-items: center;
      }
      .is-layout-flex > :is(*, div) {
        margin: 0;
      }
      body .is-layout-grid {
        display: grid;
      }
      .is-layout-grid > :is(*, div) {
        margin: 0;
      }
      :where(.wp-block-columns.is-layout-flex) {
        gap: 2em;
      }
      :where(.wp-block-columns.is-layout-grid) {
        gap: 2em;
      }
      :where(.wp-block-post-template.is-layout-flex) {
        gap: 1.25em;
      }
      :where(.wp-block-post-template.is-layout-grid) {
        gap: 1.25em;
      }
      .has-black-color {
        color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-color {
        color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-color {
        color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-color {
        color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-color {
        color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-color {
        color: var(--wp--preset--color--luminous-vivid-orange) !important;
      }
      .has-luminous-vivid-amber-color {
        color: var(--wp--preset--color--luminous-vivid-amber) !important;
      }
      .has-light-green-cyan-color {
        color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-color {
        color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-color {
        color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-color {
        color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-color {
        color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-black-background-color {
        background-color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-background-color {
        background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-background-color {
        background-color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-background-color {
        background-color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-background-color {
        background-color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-background-color {
        background-color: var(
          --wp--preset--color--luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-amber-background-color {
        background-color: var(
          --wp--preset--color--luminous-vivid-amber
        ) !important;
      }
      .has-light-green-cyan-background-color {
        background-color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-background-color {
        background-color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-background-color {
        background-color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-background-color {
        background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-background-color {
        background-color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-black-border-color {
        border-color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-border-color {
        border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-border-color {
        border-color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-border-color {
        border-color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-border-color {
        border-color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-border-color {
        border-color: var(
          --wp--preset--color--luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-amber-border-color {
        border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
      }
      .has-light-green-cyan-border-color {
        border-color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-border-color {
        border-color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-border-color {
        border-color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-border-color {
        border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-border-color {
        border-color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
        background: var(
          --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple
        ) !important;
      }
      .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
        background: var(
          --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan
        ) !important;
      }
      .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
        background: var(
          --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-orange-to-vivid-red-gradient-background {
        background: var(
          --wp--preset--gradient--luminous-vivid-orange-to-vivid-red
        ) !important;
      }
      .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
        background: var(
          --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray
        ) !important;
      }
      .has-cool-to-warm-spectrum-gradient-background {
        background: var(
          --wp--preset--gradient--cool-to-warm-spectrum
        ) !important;
      }
      .has-blush-light-purple-gradient-background {
        background: var(--wp--preset--gradient--blush-light-purple) !important;
      }
      .has-blush-bordeaux-gradient-background {
        background: var(--wp--preset--gradient--blush-bordeaux) !important;
      }
      .has-luminous-dusk-gradient-background {
        background: var(--wp--preset--gradient--luminous-dusk) !important;
      }
      .has-pale-ocean-gradient-background {
        background: var(--wp--preset--gradient--pale-ocean) !important;
      }
      .has-electric-grass-gradient-background {
        background: var(--wp--preset--gradient--electric-grass) !important;
      }
      .has-midnight-gradient-background {
        background: var(--wp--preset--gradient--midnight) !important;
      }
      .has-small-font-size {
        font-size: var(--wp--preset--font-size--small) !important;
      }
      .has-medium-font-size {
        font-size: var(--wp--preset--font-size--medium) !important;
      }
      .has-large-font-size {
        font-size: var(--wp--preset--font-size--large) !important;
      }
      .has-x-large-font-size {
        font-size: var(--wp--preset--font-size--x-large) !important;
      }
      :where(.wp-block-post-template.is-layout-flex) {
        gap: 1.25em;
      }
      :where(.wp-block-post-template.is-layout-grid) {
        gap: 1.25em;
      }
      :where(.wp-block-columns.is-layout-flex) {
        gap: 2em;
      }
      :where(.wp-block-columns.is-layout-grid) {
        gap: 2em;
      }
      :root :where(.wp-block-pullquote) {
        font-size: 1.5em;
        line-height: 1.6;
      }
    </style>
    <link
      rel="stylesheet"
      id="hello-elementor-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/themes/hello-elementor/style.min.css?ver=3.1.1"
      media="all"
    />
    <link
      rel="stylesheet"
      id="hello-elementor-theme-style-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/themes/hello-elementor/theme.min.css?ver=3.1.1"
      media="all"
    />
    <link
      rel="stylesheet"
      id="hello-elementor-header-footer-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.1.1"
      media="all"
    />
    <link
      rel="stylesheet"
      id="elementor-frontend-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.26.3"
      media="all"
    />
    <style id="elementor-frontend-inline-css">
      @-webkit-keyframes ha_fadeIn {
        0% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes ha_fadeIn {
        0% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @-webkit-keyframes ha_zoomIn {
        0% {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }
      @keyframes ha_zoomIn {
        0% {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }
      @-webkit-keyframes ha_rollIn {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
          transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        }
        to {
          opacity: 1;
        }
      }
      @keyframes ha_rollIn {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
          transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        }
        to {
          opacity: 1;
        }
      }
      @-webkit-keyframes ha_bounce {
        0%,
        20%,
        53%,
        to {
          -webkit-animation-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        40%,
        43% {
          -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
          transform: translate3d(0, -30px, 0) scaleY(1.1);
          -webkit-animation-timing-function: cubic-bezier(
            0.755,
            0.05,
            0.855,
            0.06
          );
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        }
        70% {
          -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
          transform: translate3d(0, -15px, 0) scaleY(1.05);
          -webkit-animation-timing-function: cubic-bezier(
            0.755,
            0.05,
            0.855,
            0.06
          );
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        }
        80% {
          -webkit-transition-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
          transform: translate3d(0, 0, 0) scaleY(0.95);
        }
        90% {
          -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
          transform: translate3d(0, -4px, 0) scaleY(1.02);
        }
      }
      @keyframes ha_bounce {
        0%,
        20%,
        53%,
        to {
          -webkit-animation-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        40%,
        43% {
          -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
          transform: translate3d(0, -30px, 0) scaleY(1.1);
          -webkit-animation-timing-function: cubic-bezier(
            0.755,
            0.05,
            0.855,
            0.06
          );
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        }
        70% {
          -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
          transform: translate3d(0, -15px, 0) scaleY(1.05);
          -webkit-animation-timing-function: cubic-bezier(
            0.755,
            0.05,
            0.855,
            0.06
          );
          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        }
        80% {
          -webkit-transition-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
          transform: translate3d(0, 0, 0) scaleY(0.95);
        }
        90% {
          -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
          transform: translate3d(0, -4px, 0) scaleY(1.02);
        }
      }
      @-webkit-keyframes ha_bounceIn {
        0%,
        20%,
        40%,
        60%,
        80%,
        to {
          -webkit-animation-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        0% {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
        20% {
          -webkit-transform: scale3d(1.1, 1.1, 1.1);
          transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
          -webkit-transform: scale3d(0.9, 0.9, 0.9);
          transform: scale3d(0.9, 0.9, 0.9);
        }
        60% {
          opacity: 1;
          -webkit-transform: scale3d(1.03, 1.03, 1.03);
          transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
          -webkit-transform: scale3d(0.97, 0.97, 0.97);
          transform: scale3d(0.97, 0.97, 0.97);
        }
        to {
          opacity: 1;
        }
      }
      @keyframes ha_bounceIn {
        0%,
        20%,
        40%,
        60%,
        80%,
        to {
          -webkit-animation-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
          );
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        0% {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
        20% {
          -webkit-transform: scale3d(1.1, 1.1, 1.1);
          transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
          -webkit-transform: scale3d(0.9, 0.9, 0.9);
          transform: scale3d(0.9, 0.9, 0.9);
        }
        60% {
          opacity: 1;
          -webkit-transform: scale3d(1.03, 1.03, 1.03);
          transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
          -webkit-transform: scale3d(0.97, 0.97, 0.97);
          transform: scale3d(0.97, 0.97, 0.97);
        }
        to {
          opacity: 1;
        }
      }
      @-webkit-keyframes ha_flipInX {
        0% {
          opacity: 0;
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        40% {
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          opacity: 1;
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        }
        80% {
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }
      }
      @keyframes ha_flipInX {
        0% {
          opacity: 0;
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        40% {
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          opacity: 1;
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        }
        80% {
          -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }
      }
      @-webkit-keyframes ha_flipInY {
        0% {
          opacity: 0;
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        40% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          opacity: 1;
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        }
        80% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        }
      }
      @keyframes ha_flipInY {
        0% {
          opacity: 0;
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        40% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          opacity: 1;
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        }
        80% {
          -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        }
      }
      @-webkit-keyframes ha_swing {
        20% {
          -webkit-transform: rotate3d(0, 0, 1, 15deg);
          transform: rotate3d(0, 0, 1, 15deg);
        }
        40% {
          -webkit-transform: rotate3d(0, 0, 1, -10deg);
          transform: rotate3d(0, 0, 1, -10deg);
        }
        60% {
          -webkit-transform: rotate3d(0, 0, 1, 5deg);
          transform: rotate3d(0, 0, 1, 5deg);
        }
        80% {
          -webkit-transform: rotate3d(0, 0, 1, -5deg);
          transform: rotate3d(0, 0, 1, -5deg);
        }
      }
      @keyframes ha_swing {
        20% {
          -webkit-transform: rotate3d(0, 0, 1, 15deg);
          transform: rotate3d(0, 0, 1, 15deg);
        }
        40% {
          -webkit-transform: rotate3d(0, 0, 1, -10deg);
          transform: rotate3d(0, 0, 1, -10deg);
        }
        60% {
          -webkit-transform: rotate3d(0, 0, 1, 5deg);
          transform: rotate3d(0, 0, 1, 5deg);
        }
        80% {
          -webkit-transform: rotate3d(0, 0, 1, -5deg);
          transform: rotate3d(0, 0, 1, -5deg);
        }
      }
      @-webkit-keyframes ha_slideInDown {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
      }
      @keyframes ha_slideInDown {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
      }
      @-webkit-keyframes ha_slideInUp {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
      }
      @keyframes ha_slideInUp {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
      }
      @-webkit-keyframes ha_slideInLeft {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }
      }
      @keyframes ha_slideInLeft {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }
      }
      @-webkit-keyframes ha_slideInRight {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
      }
      @keyframes ha_slideInRight {
        0% {
          visibility: visible;
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
      }
      .ha_fadeIn {
        -webkit-animation-name: ha_fadeIn;
        animation-name: ha_fadeIn;
      }
      .ha_zoomIn {
        -webkit-animation-name: ha_zoomIn;
        animation-name: ha_zoomIn;
      }
      .ha_rollIn {
        -webkit-animation-name: ha_rollIn;
        animation-name: ha_rollIn;
      }
      .ha_bounce {
        -webkit-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-name: ha_bounce;
        animation-name: ha_bounce;
      }
      .ha_bounceIn {
        -webkit-animation-name: ha_bounceIn;
        animation-name: ha_bounceIn;
        -webkit-animation-duration: 0.75s;
        -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
        animation-duration: 0.75s;
        animation-duration: calc(var(--animate-duration) * 0.75);
      }
      .ha_flipInX,
      .ha_flipInY {
        -webkit-animation-name: ha_flipInX;
        animation-name: ha_flipInX;
        -webkit-backface-visibility: visible !important;
        backface-visibility: visible !important;
      }
      .ha_flipInY {
        -webkit-animation-name: ha_flipInY;
        animation-name: ha_flipInY;
      }
      .ha_swing {
        -webkit-transform-origin: top center;
        -ms-transform-origin: top center;
        transform-origin: top center;
        -webkit-animation-name: ha_swing;
        animation-name: ha_swing;
      }
      .ha_slideInDown {
        -webkit-animation-name: ha_slideInDown;
        animation-name: ha_slideInDown;
      }
      .ha_slideInUp {
        -webkit-animation-name: ha_slideInUp;
        animation-name: ha_slideInUp;
      }
      .ha_slideInLeft {
        -webkit-animation-name: ha_slideInLeft;
        animation-name: ha_slideInLeft;
      }
      .ha_slideInRight {
        -webkit-animation-name: ha_slideInRight;
        animation-name: ha_slideInRight;
      }
      .ha-css-transform-yes {
        -webkit-transition-duration: var(--ha-tfx-transition-duration, 0.2s);
        transition-duration: var(--ha-tfx-transition-duration, 0.2s);
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-transform: translate(
            var(--ha-tfx-translate-x, 0),
            var(--ha-tfx-translate-y, 0)
          )
          scale(var(--ha-tfx-scale-x, 1), var(--ha-tfx-scale-y, 1))
          skew(var(--ha-tfx-skew-x, 0), var(--ha-tfx-skew-y, 0))
          rotateX(var(--ha-tfx-rotate-x, 0)) rotateY(var(--ha-tfx-rotate-y, 0))
          rotateZ(var(--ha-tfx-rotate-z, 0));
        transform: translate(
            var(--ha-tfx-translate-x, 0),
            var(--ha-tfx-translate-y, 0)
          )
          scale(var(--ha-tfx-scale-x, 1), var(--ha-tfx-scale-y, 1))
          skew(var(--ha-tfx-skew-x, 0), var(--ha-tfx-skew-y, 0))
          rotateX(var(--ha-tfx-rotate-x, 0)) rotateY(var(--ha-tfx-rotate-y, 0))
          rotateZ(var(--ha-tfx-rotate-z, 0));
      }
      .ha-css-transform-yes:hover {
        -webkit-transform: translate(
            var(--ha-tfx-translate-x-hover, var(--ha-tfx-translate-x, 0)),
            var(--ha-tfx-translate-y-hover, var(--ha-tfx-translate-y, 0))
          )
          scale(
            var(--ha-tfx-scale-x-hover, var(--ha-tfx-scale-x, 1)),
            var(--ha-tfx-scale-y-hover, var(--ha-tfx-scale-y, 1))
          )
          skew(
            var(--ha-tfx-skew-x-hover, var(--ha-tfx-skew-x, 0)),
            var(--ha-tfx-skew-y-hover, var(--ha-tfx-skew-y, 0))
          )
          rotateX(var(--ha-tfx-rotate-x-hover, var(--ha-tfx-rotate-x, 0)))
          rotateY(var(--ha-tfx-rotate-y-hover, var(--ha-tfx-rotate-y, 0)))
          rotateZ(var(--ha-tfx-rotate-z-hover, var(--ha-tfx-rotate-z, 0)));
        transform: translate(
            var(--ha-tfx-translate-x-hover, var(--ha-tfx-translate-x, 0)),
            var(--ha-tfx-translate-y-hover, var(--ha-tfx-translate-y, 0))
          )
          scale(
            var(--ha-tfx-scale-x-hover, var(--ha-tfx-scale-x, 1)),
            var(--ha-tfx-scale-y-hover, var(--ha-tfx-scale-y, 1))
          )
          skew(
            var(--ha-tfx-skew-x-hover, var(--ha-tfx-skew-x, 0)),
            var(--ha-tfx-skew-y-hover, var(--ha-tfx-skew-y, 0))
          )
          rotateX(var(--ha-tfx-rotate-x-hover, var(--ha-tfx-rotate-x, 0)))
          rotateY(var(--ha-tfx-rotate-y-hover, var(--ha-tfx-rotate-y, 0)))
          rotateZ(var(--ha-tfx-rotate-z-hover, var(--ha-tfx-rotate-z, 0)));
      }
      .happy-addon > .elementor-widget-container {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .happy-addon > .elementor-widget-container,
      .happy-addon > .elementor-widget-container * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .happy-addon p:empty {
        display: none;
      }
      .happy-addon .elementor-inline-editing {
        min-height: auto !important;
      }
      .happy-addon-pro img {
        max-width: 100%;
        height: auto;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .ha-screen-reader-text {
        position: absolute;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        margin: -1px;
        padding: 0;
        width: 1px;
        height: 1px;
        border: 0;
        word-wrap: normal !important;
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
      }
      .ha-has-bg-overlay > .elementor-widget-container {
        position: relative;
        z-index: 1;
      }
      .ha-has-bg-overlay > .elementor-widget-container:before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        content: "";
      }
      .ha-popup--is-enabled .ha-js-popup,
      .ha-popup--is-enabled .ha-js-popup img {
        cursor: -webkit-zoom-in !important;
        cursor: zoom-in !important;
      }
      .mfp-wrap .mfp-arrow,
      .mfp-wrap .mfp-close {
        background-color: transparent;
      }
      .mfp-wrap .mfp-arrow:focus,
      .mfp-wrap .mfp-close:focus {
        outline-width: thin;
      }
      .ha-advanced-tooltip-enable {
        position: relative;
        cursor: pointer;
        --ha-tooltip-arrow-color: black;
        --ha-tooltip-arrow-distance: 0;
      }
      .ha-advanced-tooltip-enable .ha-advanced-tooltip-content {
        position: absolute;
        z-index: 999;
        display: none;
        padding: 5px 0;
        width: 120px;
        height: auto;
        border-radius: 6px;
        background-color: #000;
        color: #fff;
        text-align: center;
        opacity: 0;
      }
      .ha-advanced-tooltip-enable .ha-advanced-tooltip-content::after {
        position: absolute;
        border-width: 5px;
        border-style: solid;
        content: "";
      }
      .ha-advanced-tooltip-enable .ha-advanced-tooltip-content.no-arrow::after {
        visibility: hidden;
      }
      .ha-advanced-tooltip-enable .ha-advanced-tooltip-content.show {
        display: inline-block;
        opacity: 1;
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-top
        .ha-advanced-tooltip-content,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-top
        .ha-advanced-tooltip-content {
        top: unset;
        right: 0;
        bottom: calc(101% + var(--ha-tooltip-arrow-distance));
        left: 0;
        margin: 0 auto;
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-top
        .ha-advanced-tooltip-content::after,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-top
        .ha-advanced-tooltip-content::after {
        top: 100%;
        right: unset;
        bottom: unset;
        left: 50%;
        border-color: var(--ha-tooltip-arrow-color) transparent transparent
          transparent;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-bottom
        .ha-advanced-tooltip-content,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-bottom
        .ha-advanced-tooltip-content {
        top: calc(101% + var(--ha-tooltip-arrow-distance));
        right: 0;
        bottom: unset;
        left: 0;
        margin: 0 auto;
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-bottom
        .ha-advanced-tooltip-content::after,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-bottom
        .ha-advanced-tooltip-content::after {
        top: unset;
        right: unset;
        bottom: 100%;
        left: 50%;
        border-color: transparent transparent var(--ha-tooltip-arrow-color)
          transparent;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-left
        .ha-advanced-tooltip-content,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-left
        .ha-advanced-tooltip-content {
        top: 50%;
        right: calc(101% + var(--ha-tooltip-arrow-distance));
        bottom: unset;
        left: unset;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-left
        .ha-advanced-tooltip-content::after,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-left
        .ha-advanced-tooltip-content::after {
        top: 50%;
        right: unset;
        bottom: unset;
        left: 100%;
        border-color: transparent transparent transparent
          var(--ha-tooltip-arrow-color);
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-right
        .ha-advanced-tooltip-content,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-right
        .ha-advanced-tooltip-content {
        top: 50%;
        right: unset;
        bottom: unset;
        left: calc(101% + var(--ha-tooltip-arrow-distance));
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .ha-advanced-tooltip-enable.ha-advanced-tooltip-right
        .ha-advanced-tooltip-content::after,
      body[data-elementor-device-mode="tablet"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-tablet-right
        .ha-advanced-tooltip-content::after {
        top: 50%;
        right: 100%;
        bottom: unset;
        left: unset;
        border-color: transparent var(--ha-tooltip-arrow-color) transparent
          transparent;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-top
        .ha-advanced-tooltip-content {
        top: unset;
        right: 0;
        bottom: calc(101% + var(--ha-tooltip-arrow-distance));
        left: 0;
        margin: 0 auto;
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-top
        .ha-advanced-tooltip-content::after {
        top: 100%;
        right: unset;
        bottom: unset;
        left: 50%;
        border-color: var(--ha-tooltip-arrow-color) transparent transparent
          transparent;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-bottom
        .ha-advanced-tooltip-content {
        top: calc(101% + var(--ha-tooltip-arrow-distance));
        right: 0;
        bottom: unset;
        left: 0;
        margin: 0 auto;
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-bottom
        .ha-advanced-tooltip-content::after {
        top: unset;
        right: unset;
        bottom: 100%;
        left: 50%;
        border-color: transparent transparent var(--ha-tooltip-arrow-color)
          transparent;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-left
        .ha-advanced-tooltip-content {
        top: 50%;
        right: calc(101% + var(--ha-tooltip-arrow-distance));
        bottom: unset;
        left: unset;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-left
        .ha-advanced-tooltip-content::after {
        top: 50%;
        right: unset;
        bottom: unset;
        left: 100%;
        border-color: transparent transparent transparent
          var(--ha-tooltip-arrow-color);
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-right
        .ha-advanced-tooltip-content {
        top: 50%;
        right: unset;
        bottom: unset;
        left: calc(101% + var(--ha-tooltip-arrow-distance));
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      body[data-elementor-device-mode="mobile"]
        .ha-advanced-tooltip-enable.ha-advanced-tooltip-mobile-right
        .ha-advanced-tooltip-content::after {
        top: 50%;
        right: 100%;
        bottom: unset;
        left: unset;
        border-color: transparent var(--ha-tooltip-arrow-color) transparent
          transparent;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      body.elementor-editor-active .happy-addon.ha-gravityforms .gform_wrapper {
        display: block !important;
      }
      .ha-scroll-to-top-wrap.ha-scroll-to-top-hide {
        display: none;
      }
      .ha-scroll-to-top-wrap.edit-mode,
      .ha-scroll-to-top-wrap.single-page-off {
        display: none !important;
      }
      .ha-scroll-to-top-button {
        position: fixed;
        right: 15px;
        bottom: 15px;
        z-index: 9999;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #5636d1;
        color: #fff;
        text-align: center;
        opacity: 1;
        cursor: pointer;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .ha-scroll-to-top-button i {
        color: #fff;
        font-size: 16px;
      }
      .ha-scroll-to-top-button:hover {
        background-color: #e2498a;
      }
    </style>
    <link
      rel="stylesheet"
      id="elementor-post-8-css"
      href="wp-content/uploads/elementor/css/post-8120b.css?ver=1738341123"
      media="all"
    />
    <link
      data-minify="1"
      rel="stylesheet"
      id="font-awesome-5-all-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=1735936654"
      media="all"
    />
    <link
      rel="stylesheet"
      id="font-awesome-4-shim-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-text-editor-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-image-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-heading-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-counter-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-counter.min.css?ver=3.26.3"
      media="all"
    />
    <link
      data-minify="1"
      rel="stylesheet"
      id="swiper-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=1735936654"
      media="all"
    />
    <link
      rel="stylesheet"
      id="e-swiper-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-image-carousel-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-image-box-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-image-box.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="widget-icon-list-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.26.3"
      media="all"
    />
    <link
      rel="stylesheet"
      id="elementor-post-2220-css"
      href="wp-content/uploads/elementor/css/post-22208e59.css?ver=1739239142"
      media="all"
    />
    <link
      data-minify="1"
      rel="stylesheet"
      id="happy-icons-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/cache/min/1/wp-content/plugins/happy-elementor-addons/assets/fonts/style.min.css?ver=1735936654"
      media="all"
    />
    <link
      data-minify="1"
      rel="stylesheet"
      id="font-awesome-css"
      data-pmdelayedstyle="https://dogflick.com.br/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css?ver=1735936654"
      media="all"
    />

    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <script
      type="rocketlazyloadscript"
      src="wp-includes/js/jquery/jquery.minf43b.js?ver=3.7.1"
      id="jquery-core-js"
      defer
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-includes/js/jquery/jquery-migrate.min5589.js?ver=3.4.1"
      id="jquery-migrate-js"
    ></script>

    <!-- Snippet da tag do Google (gtag.js) adicionado pelo Site Kit -->

    <!-- Snippet do Google Analytics adicionado pelo Site Kit -->
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="https://www.googletagmanager.com/gtag/js?id=GT-NGBPLC3X"
      id="google_gtagjs-js"
      async
    ></script>
    <script type="rocketlazyloadscript" id="google_gtagjs-js-after">
      window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
      gtag("set","linker",{"domains":["dogflick.com.br"]});
      gtag("js", new Date());
      gtag("set", "developer_id.dZTNiMT", true);
      gtag("config", "GT-NGBPLC3X", {"googlesitekit_post_type":"page"});
       window._googlesitekit = window._googlesitekit || {}; window._googlesitekit.throttledEvents = []; window._googlesitekit.gtagEvent = (name, data) => { var key = JSON.stringify( { name, data } ); if ( !! window._googlesitekit.throttledEvents[ key ] ) { return; } window._googlesitekit.throttledEvents[ key ] = true; setTimeout( () => { delete window._googlesitekit.throttledEvents[ key ]; }, 5 ); gtag( "event", name, { ...data, event_source: "site-kit" } ); }
    </script>

    <!-- Fim do snippet da tag do Google (gtag.js) adicionado pelo Site Kit -->
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min7ac2.js?ver=3.26.3"
      id="font-awesome-4-shim-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/happy-elementor-addons/assets/vendor/dom-purify/purify.min005e.js?ver=3.1.6"
      id="dom-purify-js"
    ></script>
    <link rel="https://api.w.org/" href="wp-json/index.html" />
    <link
      rel="alternate"
      title="JSON"
      type="application/json"
      href="wp-json/wp/v2/pages/2220.json"
    />
    <link
      rel="EditURI"
      type="application/rsd+xml"
      title="RSD"
      href="xmlrpc0db0.php?rsd"
    />
    <meta name="generator" content="WordPress 6.7.2" />
    <link rel="shortlink" href="index.html" />
    <link
      rel="alternate"
      title="oEmbed (JSON)"
      type="application/json+oembed"
      href="wp-json/oembed/1.0/embedcdf1.json?url=https%3A%2F%2Fdogflick.com.br%2F"
    />
    <link
      rel="alternate"
      title="oEmbed (XML)"
      type="text/xml+oembed"
      href="wp-json/oembed/1.0/embed17f6?url=https%3A%2F%2Fdogflick.com.br%2F&amp;format=xml"
    />
    <meta name="generator" content="Site Kit by Google 1.146.0" />
    <meta
      name="generator"
      content="Elementor 3.26.3; features: e_font_icon_svg, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap"
    />
    <script type="rocketlazyloadscript" data-rocket-type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "pc0y14xzlz");
    </script>
    <style>
      .e-con.e-parent:nth-of-type(n + 4):not(.e-lazyloaded):not(.e-no-lazyload),
      .e-con.e-parent:nth-of-type(n + 4):not(.e-lazyloaded):not(.e-no-lazyload)
        * {
        background-image: none !important;
      }
      @media screen and (max-height: 1024px) {
        .e-con.e-parent:nth-of-type(n + 3):not(.e-lazyloaded):not(
            .e-no-lazyload
          ),
        .e-con.e-parent:nth-of-type(n + 3):not(.e-lazyloaded):not(
            .e-no-lazyload
          )
          * {
          background-image: none !important;
        }
      }
      @media screen and (max-height: 640px) {
        .e-con.e-parent:nth-of-type(n + 2):not(.e-lazyloaded):not(
            .e-no-lazyload
          ),
        .e-con.e-parent:nth-of-type(n + 2):not(.e-lazyloaded):not(
            .e-no-lazyload
          )
          * {
          background-image: none !important;
        }
      }
    </style>
    <link
      rel="icon"
      href="https://reiflick2.vercel.app/images/logo.webp"
      sizes="32x32"
    />
    <link
      rel="icon"
      href="https://reiflick2.vercel.app/images/logo.webp"
      sizes="192x192"
    />
    <link
      rel="apple-touch-icon"
      href="https://reiflick2.vercel.app/images/logo.webp"
    />
    <meta
      name="msapplication-TileImage"
      content="https://reiflick2.vercel.app/images/logo.webp"
    />
    <style id="wp-custom-css">
      			.pulse {
      	animation: pulse 0.7s infinite;
      	margin: 0 auto;
      	display: table;
      	margin-top: 0px;
      	animation-direction: alternate;
      	-webkit-animation-name: pulse;
      	animation-name: pulse;
      }
      @-webkit-keyframes pulse {
      	0% {
      	-webkit-transform: scale(1);
      }
      100% {
      	-webkit-transform: scale(1.1);
      }
      } @keyframes pulse {
      	0% {
      	transform: scale(1);
      }
      100% {
      	transform: scale(1.1);
      }
    </style>
    <noscript
      ><style id="rocket-lazyload-nojs-css">
        .rll-youtube-player,
        [data-lazy-src] {
          display: none !important;
        }
      </style></noscript
    >
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
  </head>
  <body
    class="home page-template page-template-elementor_canvas page page-id-2220 wp-custom-logo elementor-default elementor-template-canvas elementor-kit-8 elementor-page elementor-page-2220"
  >
    <div
      data-elementor-type="wp-page"
      data-elementor-id="2220"
      class="elementor elementor-2220"
      data-elementor-settings='{"ha_cmc_init_switcher":"no"}'
      data-elementor-post-type="page"
    >
      <div
        class="elementor-element elementor-element-f4b9c56 e-flex e-con-boxed e-con e-parent"
        data-id="f4b9c56"
        data-element_type="container"
        data-settings='{"background_background":"gradient"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-2322c7c6 elementor-widget-mobile__width-initial elementor-widget__width-inherit elementor-widget elementor-widget-text-editor"
            data-id="2322c7c6"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <p>
                Compra aprovada na mesma hora para pagamentos via
                <span style="text-decoration: underline"
                  ><strong>PIX ou CARTÃO</strong></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-a641808 e-flex e-con-boxed e-con e-parent"
        data-id="a641808"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-1fa72802 e-con-full e-flex e-con e-child"
            data-id="1fa72802"
            data-element_type="container"
          >
            <div
              class="elementor-element elementor-element-6d66c898 elementor-widget__width-initial elementor-widget elementor-widget-image"
              data-id="6d66c898"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <picture
                  decoding="async"
                  class="attachment-large size-large wp-image-2300"
                >
                  <source
                    type="image/webp"
                    data-lazy-srcset="https://reiflick2.vercel.app/images/logo.webp"
                  />
                  <img
                    decoding="async"
                    width="175"
                    height="206"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20175%20206'%3E%3C/svg%3E"
                    alt=""
                    data-lazy-src="wp-content/uploads/2025/01/Picsart_25-01-28_17-22-35-746-1.png"
                  /><noscript
                    ><img
                      decoding="async"
                      width="175"
                      height="206"
                      src="wp-content/uploads/2025/01/Picsart_25-01-28_17-22-35-746-1.png"
                      alt=""
                  /></noscript>
                </picture>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-8275c72 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading"
              data-id="8275c72"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  Conteúdo de qualidade, com
                  <span class="destaque">um preço que cabe no seu bolso!</span>
                </h2>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-760aa895 elementor-widget-mobile__width-initial elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="760aa895"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div class="elementor-widget-container">
                <p>
                  Mais de 2000 canais por
                  um preço que cabe no seu bolso! Com o REIFLICK, toda a sua
                  diversão está em um só lugar.
                </p>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-1b5d66b8 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
              data-id="1b5d66b8"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-button-wrapper">
                  <a
                    class="elementor-button elementor-button-link elementor-size-sm"
                    href="#planos"
                  >
                    <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-text"
                        >Quero assinar agora!</span
                      >
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-42386d4a e-grid e-con-boxed e-con e-parent"
        data-id="42386d4a"
        data-element_type="container"
        data-settings='{"background_background":"gradient"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-7eb544f3 elementor-widget elementor-widget-counter"
            data-id="7eb544f3"
            data-element_type="widget"
            data-widget_type="counter.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-counter">
                <div class="elementor-counter-title">
                  canais abertos e fechados
                </div>
                <div class="elementor-counter-number-wrapper">
                  <span class="elementor-counter-number-prefix">+</span>
                  <span
                    class="elementor-counter-number"
                    data-duration="2000"
                    data-to-value="4000"
                    data-from-value="0"
                    data-delimiter="."
                    >0</span
                  >
                  <span class="elementor-counter-number-suffix"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-908c243 elementor-widget elementor-widget-counter"
            data-id="908c243"
            data-element_type="widget"
            data-widget_type="counter.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-counter">
                <div class="elementor-counter-title">filmes e séries</div>
                <div class="elementor-counter-number-wrapper">
                  <span class="elementor-counter-number-prefix">+</span>
                  <span
                    class="elementor-counter-number"
                    data-duration="2000"
                    data-to-value="27000"
                    data-from-value="0"
                    data-delimiter="."
                    >0</span
                  >
                  <span class="elementor-counter-number-suffix"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-465adb84 elementor-widget elementor-widget-counter"
            data-id="465adb84"
            data-element_type="widget"
            data-widget_type="counter.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-counter">
                <div class="elementor-counter-title">novelas</div>
                <div class="elementor-counter-number-wrapper">
                  <span class="elementor-counter-number-prefix">+</span>
                  <span
                    class="elementor-counter-number"
                    data-duration="2000"
                    data-to-value="500"
                    data-from-value="0"
                    data-delimiter="."
                    >0</span
                  >
                  <span class="elementor-counter-number-suffix"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-181b40d2 e-flex e-con-boxed e-con e-parent"
        data-id="181b40d2"
        data-element_type="container"
        id="planos"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-1395083c elementor-widget__width-initial elementor-widget elementor-widget-heading"
            data-id="1395083c"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                Escolha seu plano e assine já!
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-4efab89d e-grid e-con-full e-con e-child"
            data-id="4efab89d"
            data-element_type="container"
          >
          <div
              class="elementor-element elementor-element-794d7a60 e-con-full e-flex e-con e-child"
              data-id="794d7a60"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                class="elementor-element elementor-element-26fa8890 elementor-widget elementor-widget-text-editor"
                data-id="26fa8890"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>Plano REIFLICK</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-6d32a64d elementor-widget elementor-widget-heading"
                data-id="6d32a64d"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    PLANO 3 MESES
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-7aedffa5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="7aedffa5"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text">Completo</span>
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Sem fidelidade</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista em 2 telas simultâneas</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >+ de 40 mil conteúdos</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Canais Adultos (opcional)</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Qualidade SD/HD/FHD/4K</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na Smart Tv</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no Smartphone</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na TV Box</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no computador</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-53c5eaed elementor-widget-mobile__width-initial elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="53c5eaed"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-gift"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >40% DE DESCONTO</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-1ac192b1 elementor-widget elementor-widget-text-editor"
                data-id="1ac192b1"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>De <del>R$ 59,70</del> por apenas:</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-6723aac5 elementor-widget elementor-widget-heading"
                data-id="6723aac5"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    <span>R$ </span>39,90
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-15e90401 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
                data-id="15e90401"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <a
                      class="elementor-button elementor-button-link elementor-size-sm"
                      href="https://pay.kirvano.com/17344977-6382-47de-aa1a-021740143d2d"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text"
                          >Quero assinar agora!</span
                        >
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-292612bb e-con-full e-flex e-con e-child"
              data-id="292612bb"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                class="elementor-element elementor-element-6162b13c elementor-widget elementor-widget-text-editor"
                data-id="6162b13c"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>Plano REIFLICK</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-604bea1b elementor-widget elementor-widget-heading"
                data-id="604bea1b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    PLANO 1 MÊS
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-900e81e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="900e81e"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text">Completo</span>
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Sem fidelidade</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista em 2 telas simultâneas</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >+ de 40 mil conteúdos</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Canais Adultos (opcional)</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Qualidade SD/HD/FHD/4K</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na Smart Tv</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no Smartphone</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na TV Box</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no computador</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-53c5eaed elementor-widget-mobile__width-initial elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="53c5eaed"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-gift"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >40% DE DESCONTO</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-1ac192b1 elementor-widget elementor-widget-text-editor"
                data-id="1ac192b1"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>De <del>R$ 24,90</del> por apenas:</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-6723aac5 elementor-widget elementor-widget-heading"
                data-id="6723aac5"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    <span>R$ </span>19,90
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-388ee06f elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
                data-id="388ee06f"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <a
                      class="elementor-button elementor-button-link elementor-size-sm"
                      href="https://pay.kirvano.com/6026d4be-6c16-4869-85e7-b49181f23523"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text"
                          >Quero assinar agora!</span
                        >
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="elementor-element elementor-element-205b1c4d e-con-full e-flex e-con e-child"
              data-id="205b1c4d"
              data-element_type="container"
              data-settings='{"background_background":"gradient"}'
            >
              <div
                class="elementor-element elementor-element-552bdf25 elementor-widget elementor-widget-text-editor"
                data-id="552bdf25"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>Plano REIFLICK</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-1943e95e elementor-widget elementor-widget-heading"
                data-id="1943e95e"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    Plano 12 Meses
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-4c7f8085 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="4c7f8085"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text">Completo</span>
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Sem fidelidade</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista em 2 telas simultâneas</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >+ de 40 mil conteúdos</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Canais Adultos (opcional)</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Qualidade SD/HD/FHD/4K</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na Smart Tv</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no Smartphone</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na TV Box</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no computador</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-6f6fa845 elementor-widget-mobile__width-initial elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="6f6fa845"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-gift"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >46% DE DESCONTO</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-3c62ed2 elementor-widget elementor-widget-text-editor"
                data-id="3c62ed2"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>De <del>R$ 238,80</del> por apenas:</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-695f5d87 elementor-widget elementor-widget-heading"
                data-id="695f5d87"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    <span>R$ </span>129,90
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-169096d9 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
                data-id="169096d9"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <a
                      class="elementor-button elementor-button-link elementor-size-sm"
                      href="https://pay.kirvano.com/10c9b8cd-0202-4e77-86fe-9c63fbe0c613"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text"
                          >Quero assinar agora!</span
                        >
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-b0dec4f e-con-full e-flex e-con e-child"
              data-id="b0dec4f"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                class="elementor-element elementor-element-056a052 elementor-widget elementor-widget-text-editor"
                data-id="056a052"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>Plano REIFLICK</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-8b0b827 elementor-widget elementor-widget-heading"
                data-id="8b0b827"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    PLANO 6 MESES
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-ae870e4 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="ae870e4"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text">Completo</span>
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Sem fidelidade</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista em 2 telas simultâneas</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >+ de 40 mil conteúdos</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Canais Adultos (opcional)</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Qualidade SD/HD/FHD/4K</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na Smart Tv</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no Smartphone</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista na TV Box</span
                      >
                    </li>
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >Assista no computador</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-3a685c3 elementor-widget-mobile__width-initial elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="3a685c3"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div class="elementor-widget-container">
                  <ul class="elementor-icon-list-items">
                    <li class="elementor-icon-list-item">
                      <span class="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fas-gift"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-icon-list-text"
                        >40% DE DESCONTO</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-c34a5ea elementor-widget elementor-widget-text-editor"
                data-id="c34a5ea"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>De <del>R$ 119,40</del> por apenas:</p>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-05d77df elementor-widget elementor-widget-heading"
                data-id="05d77df"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    <span>R$ </span>69,90
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-8b7c6c9 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
                data-id="8b7c6c9"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <a
                      class="elementor-button elementor-button-link elementor-size-sm"
                      href="https://pay.kirvano.com/391cb7e8-9744-49d2-84ae-7b4aef946081"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text"
                          >Quero assinar agora!</span
                        >
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-2287c550 e-con-full e-flex e-con e-parent"
        data-id="2287c550"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div
          class="elementor-element elementor-element-5c267c55 elementor-widget__width-initial elementor-widget elementor-widget-heading"
          data-id="5c267c55"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title elementor-size-default">
              O conteúdo de todos os aplicativos de streaming
              <span class="destaque">em uma única plataforma</span>
            </h2>
          </div>
        </div>
        <div
          class="elementor-element elementor-element-33646b1a elementor-widget elementor-widget-image-carousel"
          data-id="33646b1a"
          data-element_type="widget"
          data-settings='{"slides_to_show":"8","navigation":"none","autoplay_speed":0,"speed":5000,"image_spacing_custom":{"unit":"px","size":8,"sizes":[]},"slides_to_show_mobile":"3","slides_to_show_tablet":"5","autoplay":"yes","infinite":"yes","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
          data-widget_type="image-carousel.default"
        >
          <div class="elementor-widget-container">
            <div
              class="elementor-image-carousel-wrapper swiper"
              role="region"
              aria-roledescription="carousel"
              aria-label="Carrossel de imagens"
              dir="ltr"
            >
              <div
                class="elementor-image-carousel swiper-wrapper"
                aria-live="off"
              >
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="xq4v7JE8niZ75OYYPDGNn6Gzpyt"
                        data-lazy-src="wp-content/uploads/2025/02/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg"
                          alt="xq4v7JE8niZ75OYYPDGNn6Gzpyt"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/yBYDzzmNoT5uXkXo3NGatLIANYK.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="yBYDzzmNoT5uXkXo3NGatLIANYK"
                        data-lazy-src="wp-content/uploads/2025/02/yBYDzzmNoT5uXkXo3NGatLIANYK.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/yBYDzzmNoT5uXkXo3NGatLIANYK.jpg"
                          alt="yBYDzzmNoT5uXkXo3NGatLIANYK"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="xUfRZu2mi8jH6SzQEJGP6tjBuYj"
                        data-lazy-src="wp-content/uploads/2025/02/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
                          alt="xUfRZu2mi8jH6SzQEJGP6tjBuYj"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/xq1X6H8pupwx0jeZpu4Piq0V5uL.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="xq1X6H8pupwx0jeZpu4Piq0V5uL"
                        data-lazy-src="wp-content/uploads/2025/02/xq1X6H8pupwx0jeZpu4Piq0V5uL.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/xq1X6H8pupwx0jeZpu4Piq0V5uL.jpg"
                          alt="xq1X6H8pupwx0jeZpu4Piq0V5uL"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="vWeOgzlhnP1sS23H3rzctGHB9Nb"
                        data-lazy-src="wp-content/uploads/2025/02/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg"
                          alt="vWeOgzlhnP1sS23H3rzctGHB9Nb"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="600"
                      height="900"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E"
                      alt="vQukNzGMHzrC7naAr4rlexEfVPY"
                      data-lazy-src="wp-content/uploads/2025/02/vQukNzGMHzrC7naAr4rlexEfVPY.jpg"
                    /><noscript
                      ><img
                        width="600"
                        height="900"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/02/vQukNzGMHzrC7naAr4rlexEfVPY.jpg"
                        alt="vQukNzGMHzrC7naAr4rlexEfVPY"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="7 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="uOOtwVbSr4QDjAGIifLDwpb2Pdl"
                        data-lazy-src="wp-content/uploads/2025/02/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg"
                          alt="uOOtwVbSr4QDjAGIifLDwpb2Pdl"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="8 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/uJ1kQWTY1nElMcrrbHtDitbV85K.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="uJ1kQWTY1nElMcrrbHtDitbV85K"
                        data-lazy-src="wp-content/uploads/2025/02/uJ1kQWTY1nElMcrrbHtDitbV85K.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/uJ1kQWTY1nElMcrrbHtDitbV85K.jpg"
                          alt="uJ1kQWTY1nElMcrrbHtDitbV85K"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="9 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/u226mX8Fr6eHpRnB0SBvZbWgSrJ.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="u226mX8Fr6eHpRnB0SBvZbWgSrJ"
                        data-lazy-src="wp-content/uploads/2025/02/u226mX8Fr6eHpRnB0SBvZbWgSrJ.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/u226mX8Fr6eHpRnB0SBvZbWgSrJ.jpg"
                          alt="u226mX8Fr6eHpRnB0SBvZbWgSrJ"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="10 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="300"
                      height="450"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%20450'%3E%3C/svg%3E"
                      alt="sLJ7z9IT0nLXJbuszYbZ4uy8AOO"
                      data-lazy-src="wp-content/uploads/2025/02/sLJ7z9IT0nLXJbuszYbZ4uy8AOO.webp"
                    /><noscript
                      ><img
                        width="300"
                        height="450"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/02/sLJ7z9IT0nLXJbuszYbZ4uy8AOO.webp"
                        alt="sLJ7z9IT0nLXJbuszYbZ4uy8AOO"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="11 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/pXOC1Z6npX2V5xgOCOzMtCHf0Hx.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="pXOC1Z6npX2V5xgOCOzMtCHf0Hx"
                        data-lazy-src="wp-content/uploads/2025/02/pXOC1Z6npX2V5xgOCOzMtCHf0Hx.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/pXOC1Z6npX2V5xgOCOzMtCHf0Hx.jpg"
                          alt="pXOC1Z6npX2V5xgOCOzMtCHf0Hx"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="12 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/l2ezB41chGDjXcKo24lseuXYtKP.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="l2ezB41chGDjXcKo24lseuXYtKP"
                        data-lazy-src="wp-content/uploads/2025/02/l2ezB41chGDjXcKo24lseuXYtKP.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/l2ezB41chGDjXcKo24lseuXYtKP.jpg"
                          alt="l2ezB41chGDjXcKo24lseuXYtKP"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="13 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="300"
                      height="450"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%20450'%3E%3C/svg%3E"
                      alt="lwU8lY65QqcLOTVlZvL4Dse1h69"
                      data-lazy-src="wp-content/uploads/2025/02/lwU8lY65QqcLOTVlZvL4Dse1h69.webp"
                    /><noscript
                      ><img
                        width="300"
                        height="450"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/02/lwU8lY65QqcLOTVlZvL4Dse1h69.webp"
                        alt="lwU8lY65QqcLOTVlZvL4Dse1h69"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="14 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="ovFzkkKknAo2SbM2DfOabxRvzmy"
                        data-lazy-src="wp-content/uploads/2025/02/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg"
                          alt="ovFzkkKknAo2SbM2DfOabxRvzmy"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="15 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="600"
                      height="900"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E"
                      alt="i0uajcHH9yogXMfDHpOXexIukG9"
                      data-lazy-src="wp-content/uploads/2025/02/i0uajcHH9yogXMfDHpOXexIukG9.jpg"
                    /><noscript
                      ><img
                        width="600"
                        height="900"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/02/i0uajcHH9yogXMfDHpOXexIukG9.jpg"
                        alt="i0uajcHH9yogXMfDHpOXexIukG9"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="16 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/47AmmkY5Vo4ODLueXUksEin0aWw.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="47AmmkY5Vo4ODLueXUksEin0aWw"
                        data-lazy-src="wp-content/uploads/2025/02/47AmmkY5Vo4ODLueXUksEin0aWw.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/47AmmkY5Vo4ODLueXUksEin0aWw.jpg"
                          alt="47AmmkY5Vo4ODLueXUksEin0aWw"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="17 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="30erzlzIOtOK3k3T3BAl1GiVMP1"
                        data-lazy-src="wp-content/uploads/2025/02/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg"
                          alt="30erzlzIOtOK3k3T3BAl1GiVMP1"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="18 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="8aMqmB5xSblsZc7bLMEhE28yHa2"
                        data-lazy-src="wp-content/uploads/2025/02/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg"
                          alt="8aMqmB5xSblsZc7bLMEhE28yHa2"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="19 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <picture decoding="async" class="swiper-slide-image">
                      <source
                        type="image/webp"
                        data-lazy-srcset="wp-content/uploads/2025/02/6gcHdboppvplmBWxvROc96NJnmm.jpg.webp"
                      />
                      <img
                        decoding="async"
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="6gcHdboppvplmBWxvROc96NJnmm"
                        data-lazy-src="wp-content/uploads/2025/02/6gcHdboppvplmBWxvROc96NJnmm.jpg"
                      /><noscript
                        ><img
                          decoding="async"
                          src="wp-content/uploads/2025/02/6gcHdboppvplmBWxvROc96NJnmm.jpg"
                          alt="6gcHdboppvplmBWxvROc96NJnmm"
                      /></noscript>
                    </picture>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="20 de 20"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="600"
                      height="900"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20900'%3E%3C/svg%3E"
                      alt="5qfd0e2uMbVInX3YdeFbDsfxi1t"
                      data-lazy-src="wp-content/uploads/2025/02/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg"
                    /><noscript
                      ><img
                        width="600"
                        height="900"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/02/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg"
                        alt="5qfd0e2uMbVInX3YdeFbDsfxi1t"
                    /></noscript>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-element elementor-element-699489f2 elementor-widget elementor-widget-image-carousel"
          data-id="699489f2"
          data-element_type="widget"
          data-settings='{"slides_to_show":"8","navigation":"none","autoplay_speed":0,"speed":5000,"image_spacing_custom":{"unit":"px","size":8,"sizes":[]},"slides_to_show_mobile":"3","slides_to_show_tablet":"5","autoplay":"yes","infinite":"yes","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
          data-widget_type="image-carousel.default"
        >
          <div class="elementor-widget-container">
            <div
              class="elementor-image-carousel-wrapper swiper"
              role="region"
              aria-roledescription="carousel"
              aria-label="Carrossel de imagens"
              dir="rtl"
            >
              <div
                class="elementor-image-carousel swiper-wrapper"
                aria-live="off"
              >
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-14.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-14.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-14.webp"
                        alt="Serie-14.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-13.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-13.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-13.webp"
                        alt="Serie-13.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-12.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-12.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-12.webp"
                        alt="Serie-12.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-11.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-11.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-11.webp"
                        alt="Serie-11.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-10.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-10.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-10.webp"
                        alt="Serie-10.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-09.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-09.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-09.webp"
                        alt="Serie-09.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="7 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-08.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-08.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-08.webp"
                        alt="Serie-08.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="8 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-07.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-07.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-07.webp"
                        alt="Serie-07.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="9 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-04.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-04.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-04.webp"
                        alt="Serie-04.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="10 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-03.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-03.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-03.webp"
                        alt="Serie-03.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="11 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="500"
                      height="750"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20750'%3E%3C/svg%3E"
                      alt="Serie-02.webp"
                      data-lazy-src="wp-content/uploads/2025/01/Serie-02.webp"
                    /><noscript
                      ><img
                        width="500"
                        height="750"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/Serie-02.webp"
                        alt="Serie-02.webp"
                    /></noscript>
                  </figure>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="12 de 12"
                >
                  <figure class="swiper-slide-inner">
                    <img
                      width="362"
                      height="536"
                      decoding="async"
                      class="swiper-slide-image"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20362%20536'%3E%3C/svg%3E"
                      alt="image3.webp"
                      data-lazy-src="wp-content/uploads/2025/01/image3.webp"
                    /><noscript
                      ><img
                        width="362"
                        height="536"
                        decoding="async"
                        class="swiper-slide-image"
                        src="wp-content/uploads/2025/01/image3.webp"
                        alt="image3.webp"
                    /></noscript>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-element elementor-element-1797f70b elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
          data-id="1797f70b"
          data-element_type="widget"
          data-widget_type="button.default"
        >
          <div class="elementor-widget-container">
            <div class="elementor-button-wrapper">
              <a
                class="elementor-button elementor-button-link elementor-size-sm"
                href="#planos"
              >
                <span class="elementor-button-content-wrapper">
                  <span class="elementor-button-text"
                    >Quero assinar agora!</span
                  >
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          class="elementor-element elementor-element-4128e5f2 e-con-full e-flex e-con e-child"
          data-id="4128e5f2"
          data-element_type="container"
        >
          <div
            class="elementor-element elementor-element-d6f6d56 elementor-widget elementor-widget-heading"
            data-id="d6f6d56"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                Assista o vídeo abaixo e conheça a REIFLICK
              </h2>
            </div>
</div>
<div
  class="elementor-element elementor-element-56e9dcb e-con-full e-flex e-con e-child"
  data-id="56e9dcb"
  data-element_type="container"
>
  <div
    class="elementor-element elementor-element-4d64103 elementor-widget elementor-widget-html"
    data-id="4d64103"
    data-element_type="widget"
    data-widget_type="html.default"

  </div>

  <div
  class="elementor-element elementor-element-56e9dcb e-con-full e-flex e-con e-child"
  data-id="56e9dcb"
  data-element_type="container"
>
  <div
    class="elementor-element elementor-element-4d64103 elementor-widget elementor-widget-html"
    data-id="4d64103"
    data-element_type="widget"
    data-widget_type="html.default"
  >
    <div class="elementor-widget-container" style="position: relative; display: flex; justify-content: center; align-items: center; background: #000; padding: 20px; border-radius: 15px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);">
      <div style="position: relative; width: 100%; padding-top: 56.25%;">
        <iframe
          id="reiflickVideo"
          src="https://www.youtube.com/embed/LELzCxuVRK0?autoplay=1"
          title="Vídeo REIFLICK"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;"
        ></iframe>
      </div>
    </div>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        let video = document.getElementById("reiflickVideo");
        let observer = new IntersectionObserver(
          function (entries) {
            if (entries[0].isIntersecting) {
              video.src = "https://www.youtube.com/embed/LELzCxuVRK0?autoplay=1";
              observer.disconnect();
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(video);
      });
    </script>
  </div>

  
</div>

          </div>
          <div
            class="elementor-element elementor-element-3113d62 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
            data-id="3113d62"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a
                  class="elementor-button elementor-button-link elementor-size-sm"
                  href="#planos"
                >
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-text"
                      >Quero assinar agora!</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-53cfd2c0 e-flex e-con-boxed e-con e-parent"
        data-id="53cfd2c0"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-72f8ec25 elementor-widget__width-initial elementor-widget elementor-widget-heading"
            data-id="72f8ec25"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                Confira tudo o que você vai encontrar na plataforma
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-af7d755 e-grid e-con-full e-con e-child"
            data-id="af7d755"
            data-element_type="container"
          >
            <div
              class="elementor-element elementor-element-2a2cf37e elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="2a2cf37e"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      fetchpriority="high"
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2401"
                      alt=""
                      data-lazy-srcset="https://reiflick2.vercel.app/images/logo.webp 500w, https://reiflick2.vercel.app/images/logo.webp 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="https://reiflick2.vercel.app/images/logo.webp"
                    /><noscript
                      ><img
                        fetchpriority="high"
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/DISPOSITIVOS-1.png"
                        class="attachment-full size-full wp-image-2401"
                        alt=""
                        srcset="
                          https://reiflick2.vercel.app/images/logo.webp         500w,
                          https://reiflick2.vercel.app/images/logo.webp 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">
                      Disponível em Todos os Dispositivos
                    </h3>
                    <p class="elementor-image-box-description">
                      Disponível em Smart TVs, celulares, tablets, PCs e TV Box.
                      Instalação fácil e rápida para você curtir filmes, séries
                      e canais ao vivo sem complicação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-21d74e9c elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="21d74e9c"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2385"
                      alt=""
                      data-lazy-srcset="https://dogflick.com.br/wp-content/uploads/2025/02/Sem-Titulo-1-1.png 500w, https://dogflick.com.br/wp-content/uploads/2025/02/Sem-Titulo-1-1-300x180.png 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="https://dogflick.com.br/wp-content/uploads/2025/02/Sem-Titulo-1-1.png"
                    /><noscript
                      ><img
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/Sem-Titulo-1-1.png"
                        class="attachment-full size-full wp-image-2385"
                        alt=""
                        srcset="
                          https://dogflick.com.br/wp-content/uploads/2025/02/Sem-Titulo-1-1.png         500w,
                          https://dogflick.com.br/wp-content/uploads/2025/02/Sem-Titulo-1-1-300x180.png 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">
                      Filmes e Séries imperdíveis
                    </h3>
                    <p class="elementor-image-box-description">
                      Acompanhe suas séries favoritas e encontre novas paixões.
                      Temporadas completas e episódios atualizados para
                      maratonar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-196daffc elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="196daffc"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2386"
                      alt=""
                      data-lazy-srcset="https://dogflick.com.br/wp-content/uploads/2025/02/Esportes.png 500w, https://dogflick.com.br/wp-content/uploads/2025/02/Esportes-300x180.png 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="https://dogflick.com.br/wp-content/uploads/2025/02/Esportes.png"
                    /><noscript
                      ><img
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/Esportes.png"
                        class="attachment-full size-full wp-image-2386"
                        alt=""
                        srcset="
                          https://dogflick.com.br/wp-content/uploads/2025/02/Esportes.png         500w,
                          https://dogflick.com.br/wp-content/uploads/2025/02/Esportes-300x180.png 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">Esportes ao vivo</h3>
                    <p class="elementor-image-box-description">
                      Não perca um só lance! Assista a eventos esportivos ao
                      vivo, incluindo futebol, basquete, e muito mais,
                      diretamente na sua TV.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-2073f42a elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="2073f42a"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2389"
                      alt=""
                      data-lazy-srcset="wp-content/uploads/2025/_18.webp 500w, wp-content/uploads/2025/_18.webp 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="wp-content/uploads/2025/_18.webp"
                    /><noscript
                      ><img
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/Adulto.png"
                        class="attachment-full size-full wp-image-2389"
                        alt=""
                        srcset="
                          wp-content/uploads/2025/_18.webp         500w,
                          wp-content/uploads/2025/_18.webp 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">
                      Canais adultos em HD
                    </h3>
                    <p class="elementor-image-box-description">
                      Conteúdo exclusivo para adultos com alta qualidade de
                      imagem e variedade. Aproveite a programação completa e
                      segura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-21151bf4 elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="21151bf4"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2387"
                      alt=""
                      data-lazy-srcset="https://dogflick.com.br/wp-content/uploads/2025/02/Infantis.png 500w, https://dogflick.com.br/wp-content/uploads/2025/02/Infantis-300x180.png 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="https://dogflick.com.br/wp-content/uploads/2025/02/Infantis.png"
                    /><noscript
                      ><img
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/Infantis.png"
                        class="attachment-full size-full wp-image-2387"
                        alt=""
                        srcset="
                          https://dogflick.com.br/wp-content/uploads/2025/02/Infantis.png         500w,
                          https://dogflick.com.br/wp-content/uploads/2025/02/Infantis-300x180.png 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">Canais infantis</h3>
                    <p class="elementor-image-box-description">
                      Diversão garantida para as crianças com canais dedicados,
                      desenhos, filmes e programação educativa para todas as
                      idades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-3570ff5 elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="3570ff5"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="500"
                      height="300"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20300'%3E%3C/svg%3E"
                      class="attachment-full size-full wp-image-2388"
                      alt=""
                      data-lazy-srcset="https://dogflick.com.br/wp-content/uploads/2025/02/Animes.png 500w, https://dogflick.com.br/wp-content/uploads/2025/02/Animes-300x180.png 300w"
                      data-lazy-sizes="(max-width: 500px) 100vw, 500px"
                      data-lazy-src="https://dogflick.com.br/wp-content/uploads/2025/02/Animes.png"
                    /><noscript
                      ><img
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="300"
                        src="wp-content/uploads/2025/02/Animes.png"
                        class="attachment-full size-full wp-image-2388"
                        alt=""
                        srcset="
                          https://dogflick.com.br/wp-content/uploads/2025/02/Animes.png         500w,
                          https://dogflick.com.br/wp-content/uploads/2025/02/Animes-300x180.png 300w
                        "
                        sizes="(max-width: 500px) 100vw, 500px"
                    /></noscript>
                  </figure>
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">
                      Os melhores animes
                    </h3>
                    <p class="elementor-image-box-description">
                      Para os fãs de anime, uma seleção de títulos populares e
                      novidades. Episódios atualizados e qualidade HD para você
                      maratonar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-56288865 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
            data-id="56288865"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a
                  class="elementor-button elementor-button-link elementor-size-sm"
                  href="#planos"
                >
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-text"
                      >Quero assinar agora!</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-1ee464d4 e-flex e-con-boxed e-con e-parent"
        data-id="1ee464d4"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >

      </div>
      <div
        class="elementor-element elementor-element-d943d02 e-flex e-con-boxed e-con e-parent"
        data-id="d943d02"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >

      </div>

      <div
        class="elementor-element elementor-element-6aec1cb7 e-flex e-con-boxed e-con e-parent"
        data-id="6aec1cb7"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-70ac72df e-flex e-con-boxed e-con e-child"
            data-id="70ac72df"
            data-element_type="container"
          >
            <div class="e-con-inner">
              <div
                class="elementor-element elementor-element-48d00786 elementor-widget__width-initial elementor-widget elementor-widget-image"
                data-id="48d00786"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div class="elementor-widget-container">
                  <img
                    decoding="async"
                    width="273"
                    height="265"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20273%20265'%3E%3C/svg%3E"
                    class="attachment-large size-large wp-image-2383"
                    alt=""
                    data-lazy-src="wp-content/uploads/2025/02/7-dias.png.png"
                  /><noscript
                    ><img
                      loading="lazy"
                      decoding="async"
                      width="273"
                      height="265"
                      src="wp-content/uploads/2025/02/7-dias.png.png"
                      class="attachment-large size-large wp-image-2383"
                      alt=""
                  /></noscript>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-72ab826b e-con-full e-flex e-con e-child"
                data-id="72ab826b"
                data-element_type="container"
              >
                <div
                  class="elementor-element elementor-element-181ede42 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading"
                  data-id="181ede42"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">
                      Você não corre nenhum risco!
                    </h2>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-2d23c404 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor"
                  data-id="2d23c404"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div class="elementor-widget-container">
                    <p>
                      <strong
                        >É simples, ou você fica feliz com o conteúdo, ou você
                        fica na tranquilidade com 100% do seu dinheiro de
                        volta.</strong
                      >
                    </p>
                    <p>
                      Se, dentro de 7 dias, por qualquer motivo você decidir não
                      continuar com a REIFLICK, basta enviar um email e nós
                      faremos o seu reembolso sem nenhuma burocracia.<!-- notionvc: 0a25f907-97fb-4a8b-9883-daf039c06a3a -->
                    </p>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-1291b1b1 elementor-align-justify elementor-widget__width-initial btn elementor-widget elementor-widget-button"
                  data-id="1291b1b1"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                      <a
                        class="elementor-button elementor-button-link elementor-size-sm"
                        href="#planos"
                      >
                        <span class="elementor-button-content-wrapper">
                          <span class="elementor-button-text"
                            >Quero assinar agora!</span
                          >
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-2c7414f4 e-flex e-con-boxed e-con e-parent"
        data-id="2c7414f4"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-5f78c82b e-con-full e-flex e-con e-child"
            data-id="5f78c82b"
            data-element_type="container"
            data-settings='{"background_background":"gradient"}'
          >
            <div
              class="elementor-element elementor-element-7a9ea683 elementor-widget__width-initial elementor-widget elementor-widget-heading"
              data-id="7a9ea683"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  Ainda está com dúvidas sobre a REIFLICK?
                </h2>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-22905a05 elementor-widget-tablet__width-initial elementor-widget elementor-widget-text-editor"
              data-id="22905a05"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div class="elementor-widget-container">
                <p>
                  Clique no botão a seguir e tire suas dúvidas com nossa equipe!
                </p>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-42505fb4 elementor-align-justify elementor-widget-tablet__width-initial elementor-widget__width-initial elementor-widget elementor-widget-button"
              data-id="42505fb4"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-button-wrapper">
                  <a
                    class="elementor-button elementor-button-link elementor-size-sm"
                    href="https://api.whatsapp.com/send/?phone=554391768151&text=Ola+vim+do+site+quero+ajuda&type=phone_number&app_absent=0"
                  >
                    <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-icon">
                        <svg
                          aria-hidden="true"
                          class="e-font-icon-svg e-fab-whatsapp"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                          ></path>
                        </svg>
                      </span>
                      <span class="elementor-button-text"
                        >Conversar no WhatsApp</span
                      >
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-fffd4a2 e-flex e-con-boxed e-con e-parent"
        data-id="fffd4a2"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-5b8a882 elementor-widget__width-initial elementor-widget elementor-widget-image"
            data-id="5b8a882"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div class="elementor-widget-container">
              <picture
                loading="lazy"
                decoding="async"
                class="attachment-large size-large wp-image-2301"
              >
                <source
                  type="image/webp"
                  data-lazy-srcset="https://reiflick2.vercel.app/images/logo.webp"
                />
                <img
                  decoding="async"
                  width="175"
                  height="206"
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20175%20206'%3E%3C/svg%3E"
                  alt=""
                  data-lazy-src="https://reiflick2.vercel.app/images/logo.webp"
                /><noscript
                  ><img
                    loading="lazy"
                    decoding="async"
                    width="175"
                    height="206"
                    src="https://reiflick2.vercel.app/images/logo.webp"
                    alt=""
                /></noscript>
              </picture>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-e24460a e-con-full e-flex e-con e-child"
            data-id="e24460a"
            data-element_type="container"
          >
            <div
              class="elementor-element elementor-element-65b12c73 elementor-widget elementor-widget-heading"
              data-id="65b12c73"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  Suporte ao cliente
                </h2>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-58b62ff7 elementor-mobile-align-center elementor-tablet-align-center elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="58b62ff7"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div class="elementor-widget-container">
                <ul class="elementor-icon-list-items">
                  <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-far-envelope"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                        ></path>
                      </svg>
                    </span>
                    <span class="elementor-icon-list-text"
                      ><div
                        href="suporte@reiflick.com"
                        class="__cf_email__"
                        data-cfemail="6d1e181d021f19082d09020a0b01040e06430e0200430f1f"
                        >suporte@reiflick.com</
                      ></span
                    >
                  </li>
                  <li class="elementor-icon-list-item">

                   

                </ul>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-4b581fc7 e-con-full e-flex e-con e-child"
            data-id="4b581fc7"
            data-element_type="container"
          >
            <div
              class="elementor-element elementor-element-152dc5ab elementor-widget elementor-widget-heading"
              data-id="152dc5ab"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  Formas de pagamento
                </h2>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-ef16e97 elementor-widget elementor-widget-image"
              data-id="ef16e97"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <img
                  decoding="async"
                  width="739"
                  height="243"
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20739%20243'%3E%3C/svg%3E"
                  class="attachment-large size-large wp-image-2118"
                  alt=""
                  data-lazy-srcset="https://dogflick.com.br/wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO.webp 739w, https://dogflick.com.br/wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO-300x99.webp 300w"
                  data-lazy-sizes="(max-width: 739px) 100vw, 739px"
                  data-lazy-src="wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO.webp"
                /><noscript
                  ><img
                    loading="lazy"
                    decoding="async"
                    width="739"
                    height="243"
                    src="wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO.webp"
                    class="attachment-large size-large wp-image-2118"
                    alt=""
                    srcset="
                      https://dogflick.com.br/wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO.webp        739w,
                      https://dogflick.com.br/wp-content/uploads/2025/01/FORMA-DE-PAGAMENTO-300x99.webp 300w
                    "
                    sizes="(max-width: 739px) 100vw, 739px"
                /></noscript>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-eed1351 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor"
            data-id="eed1351"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <p>
                Esta página não tem qualquer vínculo com o Facebook S/A e suas
                empresas, apenas usamos a plataforma para promover os nossos
                produtos. Ao sair da plataforma toda responsabilidade sobre
                produtos vendidos e ofertados é de inteira responsabilidade da
                nossa empresa, bem como se houver quaisquer eventualidades
                legais.
              </p>
              <p>
                Declaramos que o Facebook S/A não tem qualquer vínculo de
                associação em processos civeis ou criminais. Nosso email de
                suporte é:
                <p href="suporte@reiflick.com">suporte@reiflick.com</p>
              </p>
              <p>
                Não compre produtos piratas, não vendemos em marketplaces como:
                Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc. Não damos
                suporte a produtos comprados nestes canais.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-6eb973e6 e-flex e-con-boxed e-con e-parent"
        data-id="6eb973e6"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-aec8397 elementor-widget elementor-widget-text-editor"
            data-id="aec8397"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              REIFLICK © Todos o direitos reservados
            </div>
          </div>
          <div
            class="elementor-element elementor-element-1f9026e4 elementor-widget elementor-widget-text-editor"
            data-id="1f9026e4"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            
          </div>
        </div>
      </div>
      <div
        class="elementor-element elementor-element-cb073d4 e-flex e-con-boxed e-con e-parent"
        data-id="cb073d4"
        data-element_type="container"
      >
        <div class="e-con-inner">
          <div
            class="elementor-element elementor-element-35eb2ea elementor-widget elementor-widget-html"
            data-id="35eb2ea"
            data-element_type="widget"
            data-widget_type="html.default"
          >
            <div class="elementor-widget-container">
              <!DOCTYPE html>
              <html lang="pt-BR">
                <head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                  />
                  <title>Popups Exemplo</title>

                  <style>
                    /* Estilos do Popup */
                    @media (min-width: 1025px) {
                      .popup-container {
                        position: fixed;
                        left: 10px;
                        bottom: 10px;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        font-family: Poppins, sans-serif;
                        font-size: 15px;
                        opacity: 0;
                        transform: translateX(-100%);
                        animation-fill-mode: forwards;
                        border-radius: 10px;
                        color: white;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 17px;
                        z-index: 9999;
                      }
                    }
                    @media (min-width: 760px) and (max-width: 1024px) {
                      .popup-container {
                        position: fixed;
                        left: 10px;
                        bottom: 10px;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        font-family: Poppins, sans-serif;
                        font-size: 15px;
                        opacity: 0;
                        transform: translateX(-100%);
                        animation-fill-mode: forwards;
                        border-radius: 10px;
                        color: white;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 15px;
                        z-index: 9999;
                      }
                    }
                    @media (max-width: 759px) {
                      .popup-container {
                        position: fixed;
                        left: 5px;
                        right: 5px;
                        bottom: 30px;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        font-family: Poppins, sans-serif;
                        font-size: 13px;
                        opacity: 0;
                        transform: translateX(-100%);
                        animation-fill-mode: forwards;
                        border-radius: 10px;
                        color: white;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 15px 5px;
                        z-index: 9999;
                      }
                    }

                    /* Estilo do ícone */
                    .fas.fa-check-circle.fa-2x.icon {
                      color: #01b35d;
                    }

                    .popup-container .icon {
                      margin-right: 10px;
                    }

                    /* Animações */
                    @keyframes popup {
                      0% {
                        opacity: 0;
                        transform: translateX(-100%);
                      }
                      50% {
                        opacity: 1;
                      }
                      100% {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }

                    @keyframes fadeOutUp {
                      0% {
                        opacity: 1;
                        transform: translateY(0);
                      }
                      100% {
                        opacity: 0;
                        transform: translateY(-100%);
                      }
                    }

                    /* Estilo para o nome do cliente */
                    .destaque-nome {
                      color: black;
                    }

                    /* Estilo para o plano com espaçamento ajustado */
                    .destaque {
                      margin-right: 5px; /* Espaçamento entre plano e "do" */
                    }

                    /* Estilo para a marca (REIFLICK) */
                    .bonus-brand {
                      margin-left: 5px; /* Espaçamento entre "do" e a marca */
                    }
                  </style>
                </head>
                <body>
                  <!-- Popups de exemplo -->
                  <div class="popup-container">
                    <i class="fas fa-check-circle fa-2x icon"></i>
                    <span class="destaque-nome"><b>Marcio</b></span>
                    acabou de adquirir o plano
                    <span class="destaque"><b>Mensal</b></span>
                    do <b class="bonus-brand">REIFLICK</b>
                  </div>

                  <!-- JavaScript para randomizar pop-ups e tempos -->
                  <script
                    data-cfasync="false"
                    src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                  ></script>
                  <script type="rocketlazyloadscript">
                    document.addEventListener('DOMContentLoaded', function () {
                        const nomes = [
                            "Marcio", "João", "Ana", "Maria", "Lucas", "Fernanda", "Carlos",
                            "Patrícia", "Bruno", "Mariana", "Gustavo", "Julia", "Ricardo",
                            "Luciana", "Eduardo", "Sofia", "Thiago", "Beatriz", "Felipe",
                            "Larissa", "Rafael", "Vera", "Roberta", "Paulo", "Tânia",
                            "Tiago", "Simone", "Ricardo", "Claudia", "Renato", "Isabela"
                        ];
                        const planos = ["Mensal", "Anual", "Trimestral"];
                        const popups = [];

                        // Criação dos pop-ups com nomes e planos aleatórios
                        for (let i = 0; i < 10; i++) {
                            const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
                            const planoAleatorio = planos[Math.floor(Math.random() * planos.length)];

                            const popup = document.createElement('div');
                            popup.classList.add('popup-container');
                            popup.innerHTML = `<i class="fas fa-check-circle fa-2x icon"></i>&nbsp;<span class="destaque-nome"><b>${nomeAleatorio}</b></span>&nbsp;assinou o plano&nbsp;<span class="destaque"><b>${planoAleatorio}</b></span>&nbsp;do <b class="bonus-brand">REIFLICK</b>`;
                            document.body.appendChild(popup);
                            popups.push(popup);
                        }

                        // Função para remover o popup com animação
                        function removePopup(popup) {
                            popup.style.animation = "fadeOutUp 3s forwards"; // Ajustado para 3 segundos
                            setTimeout(function() {
                                popup.remove();
                            }, 3000); // Tempo de animação de 3 segundos
                        }

                        // Função para exibir os pop-ups com tempos aleatórios
                        function displayPopups() {
                            let delay = 0;
                            popups.forEach(function(popup) {
                                const tempoAleatorio = Math.floor(Math.random() * (15 - 8 + 1)) + 8; // Tempo aleatório entre 8 e 15 segundos
                                setTimeout(function() {
                                    popup.style.animationDelay = delay + "s";
                                    popup.style.opacity = 1;
                                    popup.style.transform = "translateX(0)";
                                    setTimeout(function() {
                                        removePopup(popup);
                                    }, 3000); // Tempo de exibição do pop-up
                                }, delay * 1000);
                                delay += tempoAleatorio; // Incrementando o delay de exibição
                            });
                        }

                        // Iniciar a exibição dos pop-ups
                        displayPopups();
                    });
                  </script>

                  <!-- Incluindo o Font Awesome -->
                  <script
                    type="rocketlazyloadscript"
                    src="../kit.fontawesome.com/a076d05399.html"
                    crossorigin="anonymous"
                    defer
                  ></script>
                  <script>
                    class RocketElementorAnimation {
                      constructor() {
                        (this.deviceMode = document.createElement("span")),
                          (this.deviceMode.id = "elementor-device-mode"),
                          this.deviceMode.setAttribute(
                            "class",
                            "elementor-screen-only"
                          ),
                          document.body.appendChild(this.deviceMode);
                      }
                      _detectAnimations() {
                        let t = getComputedStyle(
                          this.deviceMode,
                          ":after"
                        ).content.replace(/"/g, "");
                        (this.animationSettingKeys =
                          this._listAnimationSettingsKeys(t)),
                          document
                            .querySelectorAll(
                              ".elementor-invisible[data-settings]"
                            )
                            .forEach((t) => {
                              const e = t.getBoundingClientRect();
                              if (e.bottom >= 0 && e.top <= window.innerHeight)
                                try {
                                  this._animateElement(t);
                                } catch (t) {}
                            });
                      }
                      _animateElement(t) {
                        const e = JSON.parse(t.dataset.settings),
                          i = e._animation_delay || e.animation_delay || 0,
                          n = e[this.animationSettingKeys.find((t) => e[t])];
                        if ("none" === n)
                          return void t.classList.remove("elementor-invisible");
                        t.classList.remove(n),
                          this.currentAnimation &&
                            t.classList.remove(this.currentAnimation),
                          (this.currentAnimation = n);
                        let s = setTimeout(() => {
                          t.classList.remove("elementor-invisible"),
                            t.classList.add("animated", n),
                            this._removeAnimationSettings(t, e);
                        }, i);
                        window.addEventListener(
                          "rocket-startLoading",
                          function () {
                            clearTimeout(s);
                          }
                        );
                      }
                      _listAnimationSettingsKeys(t = "mobile") {
                        const e = [""];
                        switch (t) {
                          case "mobile":
                            e.unshift("_mobile");
                          case "tablet":
                            e.unshift("_tablet");
                          case "desktop":
                            e.unshift("_desktop");
                        }
                        const i = [];
                        return (
                          ["animation", "_animation"].forEach((t) => {
                            e.forEach((e) => {
                              i.push(t + e);
                            });
                          }),
                          i
                        );
                      }
                      _removeAnimationSettings(t, e) {
                        this._listAnimationSettingsKeys().forEach(
                          (t) => delete e[t]
                        ),
                          (t.dataset.settings = JSON.stringify(e));
                      }
                      static run() {
                        const t = new RocketElementorAnimation();
                        requestAnimationFrame(t._detectAnimations.bind(t));
                      }
                    }
                    document.addEventListener(
                      "DOMContentLoaded",
                      RocketElementorAnimation.run
                    );
                  </script>
                  <script
                    type="text/javascript"
                    id="perfmatters-delayed-styles-js"
                  >
                    !(function () {
                      const e = [
                        "keydown",
                        "mousemove",
                        "wheel",
                        "touchmove",
                        "touchstart",
                        "touchend",
                      ];
                      function t() {
                        document
                          .querySelectorAll("link[data-pmdelayedstyle]")
                          .forEach(function (e) {
                            e.setAttribute(
                              "href",
                              e.getAttribute("data-pmdelayedstyle")
                            );
                          }),
                          e.forEach(function (e) {
                            window.removeEventListener(e, t, { passive: !0 });
                          });
                      }
                      e.forEach(function (e) {
                        window.addEventListener(e, t, { passive: !0 });
                      });
                    })();
                  </script>
                </body>

                <!-- Mirrored from dogflick.com.br/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Feb 2025 16:25:22 GMT -->
              </html>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--BEGIN: TRACKING CODE MANAGER (v2.3.0) BY INTELLYWP.COM IN FOOTER//-->
    <script type="rocketlazyloadscript">
      (function(w,d,s,t){
          if(w._brpBstr)return;w._brpBstr=t;var f=d.getElementsByTagName(s)[0],j=d.createElement(s);
          j.async=true;j.src="../ev.braip.com/js/braip-boosterec92.js?v="+t;
          f.parentNode.insertBefore(j,f);
      })(window,document,'script',Date.now());
    </script>
    <!--END: https://wordpress.org/plugins/tracking-code-manager IN FOOTER//-->
    <script type="rocketlazyloadscript">
      window.addEventListener('DOMContentLoaded', function() {
      				;
      				(function($, w) {
      					'use strict';
      					let $window = $(w);

      					$(document).ready(function() {

      						let isEnable = "";
      						let isEnableLazyMove = "";
      						let speed = isEnableLazyMove ? '0.7' : '0.2';

      						if( !isEnable ) {
      							return;
      						}

      						if (typeof haCursor == 'undefined' || haCursor == null) {
      							initiateHaCursorObject(speed);
      						}

      						setTimeout(function() {
      							let targetCursor = $('.ha-cursor');
      							if (targetCursor) {
      								if (!isEnable) {
      									$('body').removeClass('hm-init-default-cursor-none');
      									$('.ha-cursor').addClass('ha-init-hide');
      								} else {
      									$('body').addClass('hm-init-default-cursor-none');
      									$('.ha-cursor').removeClass('ha-init-hide');
      								}
      							}
      						}, 500);

      					});

      				}(jQuery, window));
      			});
    </script>

    <script type="rocketlazyloadscript" data-rocket-type="text/javascript">
      const lazyloadRunObserver = () => {
      	const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
      	const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
      		entries.forEach( ( entry ) => {
      			if ( entry.isIntersecting ) {
      				let lazyloadBackground = entry.target;
      				if( lazyloadBackground ) {
      					lazyloadBackground.classList.add( 'e-lazyloaded' );
      				}
      				lazyloadBackgroundObserver.unobserve( entry.target );
      			}
      		});
      	}, { rootMargin: '200px 0px 200px 0px' } );
      	lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
      		lazyloadBackgroundObserver.observe( lazyloadBackground );
      	} );
      };
      const events = [
      	'DOMContentLoaded',
      	'elementor/lazyload/observe',
      ];
      events.forEach( ( event ) => {
      	document.addEventListener( event, lazyloadRunObserver );
      } );
    </script>
    <script type="rocketlazyloadscript" id="rocket-browser-checker-js-after">
      "use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
    </script>
    <script id="rocket-preload-links-js-extra">
      var RocketPreloadLinksConfig = {
        excludeUris:
          "\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/",
        usesTrailingSlash: "1",
        imageExt:
          "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php",
        fileExt:
          "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm",
        siteUrl: "https:\/\/dogflick.com.br",
        onHoverDelay: "100",
        rateThrottle: "3",
      };
    </script>
    <script type="rocketlazyloadscript" id="rocket-preload-links-js-after">
      (function() {
      "use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("index.html")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("index.html")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
      }());
    </script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/themes/hello-elementor/assets/js/hello-frontend.minb12b.js?ver=3.1.1"
      id="hello-theme-frontend-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/happy-elementor-addons/assets/js/extension-reading-progress-bar.min6319.js?ver=3.15.2"
      id="happy-reading-progress-bar-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min3958.js?ver=0.2.1"
      id="jquery-numerator-js"
    ></script>
    <script id="happy-elementor-addons-js-extra">
      var HappyLocalize = {
        ajax_url: "https:\/\/dogflick.com.br\/wp-admin\/admin-ajax.php",
        nonce: "0941cf3bd0",
        pdf_js_lib:
          "https:\/\/dogflick.com.br\/wp-content\/plugins\/happy-elementor-addons\/assets\/vendor\/pdfjs\/lib",
      };
    </script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/happy-elementor-addons/assets/js/happy-addons.min6319.js?ver=3.15.2"
      id="happy-elementor-addons-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/wp-rocket/assets/js/heartbeat0567.js?ver=3.12.4"
      id="heartbeat-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/pro-elements/assets/js/webpack-pro.runtime.mind92b.js?ver=3.26.1"
      id="elementor-pro-webpack-runtime-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/elementor/assets/js/webpack.runtime.min7ac2.js?ver=3.26.3"
      id="elementor-webpack-runtime-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/elementor/assets/js/frontend-modules.min7ac2.js?ver=3.26.3"
      id="elementor-frontend-modules-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-includes/js/dist/hooks.min4fdd.js?ver=4d63a3d491d11ffd8ac6"
      id="wp-hooks-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-includes/js/dist/i18n.minc33c.js?ver=5e580eb46a90c2b997e6"
      id="wp-i18n-js"
    ></script>
    <script type="rocketlazyloadscript" id="wp-i18n-js-after">
      wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
    </script>
    <script type="rocketlazyloadscript" id="elementor-pro-frontend-js-before">
      var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/dogflick.com.br\/wp-admin\/admin-ajax.php","nonce":"11a3537e15","urls":{"assets":"https:\/\/dogflick.com.br\/wp-content\/plugins\/pro-elements\/assets\/","rest":"https:\/\/dogflick.com.br\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"pt_BR","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/dogflick.com.br\/wp-content\/plugins\/pro-elements\/modules\/lottie\/assets\/animations\/default.json"}};
    </script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/pro-elements/assets/js/frontend.mind92b.js?ver=3.26.1"
      id="elementor-pro-frontend-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-includes/js/jquery/ui/core.minb37e.js?ver=1.13.3"
      id="jquery-ui-core-js"
    ></script>
    <script type="rocketlazyloadscript" id="elementor-frontend-js-before">
      var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Compartilhar no Facebook","shareOnTwitter":"Compartilhar no Twitter","pinIt":"Fixar","download":"Baixar","downloadImage":"Baixar imagem","fullscreen":"Tela cheia","zoom":"Zoom","share":"Compartilhar","playVideo":"Reproduzir v\u00eddeo","previous":"Anterior","next":"Pr\u00f3ximo","close":"Fechar","a11yCarouselPrevSlideMessage":"Slide anterior","a11yCarouselNextSlideMessage":"Pr\u00f3ximo slide","a11yCarouselFirstSlideMessage":"Este \u00e9 o primeiro slide","a11yCarouselLastSlideMessage":"Este \u00e9 o \u00faltimo slide","a11yCarouselPaginationBulletMessage":"Ir para o slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Dispositivos m\u00f3veis no modo retrato","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Dispositivos m\u00f3veis no modo paisagem","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet no modo retrato","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet no modo paisagem","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Notebook","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Tela ampla (widescreen)","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.26.3","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"e_nested_atomic_repeaters":true,"e_onboarding":true,"e_css_smooth_scroll":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"home_screen":true,"landing-pages":true,"nested-elements":true,"editor_v2":true,"link-in-bio":true,"floating-buttons":true},"urls":{"assets":"https:\/\/dogflick.com.br\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/dogflick.com.br\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/dogflick.com.br\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"875f41e068"},"swiperClass":"swiper","settings":{"page":{"ha_cmc_init_switcher":"no"},"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"logo","hello_footer_logo_type":"logo","ha_rpb_enable":"no"},"post":{"id":2220,"title":"DOG%20FLICK%20%7C%20Dog%20Flick%20-%20Assista%20Filmes%2C%20S%C3%A9ries%20e%20Canais%20ao%20Vivo%20por%20Apenas%20R%2419%2C90%2Fm%C3%AAs","excerpt":"","featuredImage":false}};
    </script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/elementor/assets/js/frontend.min7ac2.js?ver=3.26.3"
      id="elementor-frontend-js"
    ></script>
    <script
      type="rocketlazyloadscript"
      defer="defer"
      src="wp-content/plugins/pro-elements/assets/js/elements-handlers.mind92b.js?ver=3.26.1"
      id="pro-elements-handlers-js"
    ></script>
    <script>
      window.lazyLoadOptions = [
        {
          elements_selector:
            "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
          data_src: "lazy-src",
          data_srcset: "lazy-srcset",
          data_sizes: "lazy-sizes",
          class_loading: "lazyloading",
          class_loaded: "lazyloaded",
          threshold: 300,
          callback_loaded: function (element) {
            if (
              element.tagName === "IFRAME" &&
              element.dataset.rocketLazyload == "fitvidscompatible"
            ) {
              if (element.classList.contains("lazyloaded")) {
                if (typeof window.jQuery != "undefined") {
                  if (jQuery.fn.fitVids) {
                    jQuery(element).parent().fitVids();
                  }
                }
              }
            }
          },
        },
        {
          elements_selector: ".rocket-lazyload",
          data_src: "lazy-src",
          data_srcset: "lazy-srcset",
          data_sizes: "lazy-sizes",
          class_loading: "lazyloading",
          class_loaded: "lazyloaded",
          threshold: 300,
        },
      ];
      window.addEventListener(
        "LazyLoad::Initialized",
        function (e) {
          var lazyLoadInstance = e.detail.instance;
          if (window.MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
              var image_count = 0;
              var iframe_count = 0;
              var rocketlazy_count = 0;
              mutations.forEach(function (mutation) {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                  if (
                    typeof mutation.addedNodes[i].getElementsByTagName !==
                    "function"
                  ) {
                    continue;
                  }
                  if (
                    typeof mutation.addedNodes[i].getElementsByClassName !==
                    "function"
                  ) {
                    continue;
                  }
                  images = mutation.addedNodes[i].getElementsByTagName("img");
                  is_image = mutation.addedNodes[i].tagName == "IMG";
                  iframes =
                    mutation.addedNodes[i].getElementsByTagName("iframe");
                  is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                  rocket_lazy =
                    mutation.addedNodes[i].getElementsByClassName(
                      "rocket-lazyload"
                    );
                  image_count += images.length;
                  iframe_count += iframes.length;
                  rocketlazy_count += rocket_lazy.length;
                  if (is_image) {
                    image_count += 1;
                  }
                  if (is_iframe) {
                    iframe_count += 1;
                  }
                }
              });
              if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
                lazyLoadInstance.update();
              }
            });
            var b = document.getElementsByTagName("body")[0];
            var config = { childList: !0, subtree: !0 };
            observer.observe(b, config);
          }
        },
        !1
      );
    </script>
    <script
      data-no-minify="1"
      async
      src="wp-content/plugins/wp-rocket/assets/js/lazyload/17.5/lazyload.min.js"
    ></script>
    <script type="text/javascript" id="perfmatters-delayed-styles-js">
      !(function () {
        const e = [
          "keydown",
          "mousemove",
          "wheel",
          "touchmove",
          "touchstart",
          "touchend",
        ];
        function t() {
          document
            .querySelectorAll("link[data-pmdelayedstyle]")
            .forEach(function (e) {
              e.setAttribute("href", e.getAttribute("data-pmdelayedstyle"));
            }),
            e.forEach(function (e) {
              window.removeEventListener(e, t, { passive: !0 });
            });
        }
        e.forEach(function (e) {
          window.addEventListener(e, t, { passive: !0 });
        });
      })();
    </script>
  </body>
</html>

<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1739428340 -->
