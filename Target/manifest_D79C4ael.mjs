import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_w8CiETCW.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/","adapterName":"","routes":[{"file":"file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/Editor/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/editor","isIndex":false,"type":"page","pattern":"^\\/Editor\\/?$","segments":[[{"content":"Editor","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Editor.astro","pathname":"/Editor","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/VSCode/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/vscode","isIndex":false,"type":"page","pattern":"^\\/VSCode\\/?$","segments":[[{"content":"VSCode","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/VSCode.astro","pathname":"/VSCode","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"Source/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:Source/pages/Editor@_@astro":"pages/editor.astro.mjs","\u0000@astro-page:Source/pages/VSCode@_@astro":"pages/vscode.astro.mjs","\u0000@astro-page:Source/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D79C4ael.mjs","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.DvSLRLVP.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/node_modules/@codeeditorland/wind/Target/Context/Action/Context.js":"_astro/Context.BXvYE1l5.js","D:/Developer/node_modules/@swup/head-plugin/dist/index.modern.js":"_astro/index.modern.FjGODCox.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/node_modules/@codeeditorland/wind/Target/Context/Action.js":"_astro/Action.DyhnjI71.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js":"_astro/azcli.wOXQAaSw.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js":"_astro/bat.GiIhAm5l.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts":"_astro/Base.astro_astro_type_script_index_1_lang.D4DYKVOQ.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/html/html.worker.js?worker":"_astro/html.worker.BEJ3N4Ml.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.js":"_astro/cameligo.BnWsUyne.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/css/css.worker.js?worker":"_astro/css.worker.krus72yV.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js":"_astro/clojure.BGC-7y6g.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js":"_astro/apex.CEty9Uul.js","@codeeditorland/wind/Target/Element/Page/Editor.js":"_astro/Editor.B8ZjYkau.js","D:/Developer/node_modules/@swup/body-class-plugin/dist/index.modern.js":"_astro/index.modern.aa8fLSdp.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js":"_astro/coffee.Cy6zTyAa.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js":"_astro/abap.7EmQD73J.js","D:/Developer/node_modules/@swup/preload-plugin/dist/index.modern.js":"_astro/index.modern.CUPCPLSa.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js":"_astro/fsharp.CvjO4WBT.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js":"_astro/bicep.Cs_PtMjV.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/node_modules/@codeeditorland/wind/Target/Script/Monaco/Theme/Amoled.json":"_astro/Amoled.Ci6ZcdC2.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js?worker":"_astro/ts.worker.41lMNFp3.js","D:/Developer/node_modules/monaco-editor/esm/vs/editor/editor.worker.js?worker":"_astro/editor.worker.Ha1RRQYx.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.js":"_astro/elixir.BfNyebOr.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js":"_astro/flow9.DuyZcqv8.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.js":"_astro/ecl.D4gKMsHf.js","@astrojs/solid-js/client.js":"_astro/client.pEnc5leR.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.js":"_astro/kotlin.CE2j7eJk.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js":"_astro/cpp.hMsdNOCL.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":"_astro/csharp.sr8hhXH5.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js":"_astro/dockerfile.-mFXN9k8.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.js":"_astro/dart.BQuHQae5.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js":"_astro/csp.xszl_Q2l.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":"_astro/css.Dlt7brhx.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.js":"_astro/cypher.T4fWJcDV.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js":"_astro/mdx.ByVdqvU-.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/go/go.js":"_astro/go.Q4oGs7Zi.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js":"_astro/julia.DkIlWIkk.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":"_astro/graphql.ovRx7Oda.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/less/less.js":"_astro/less.BDcuwERU.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js":"_astro/lexon.cJNBsTlB.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js":"_astro/lua.CVyCsqHd.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js":"_astro/handlebars.I5mKvnlW.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js":"_astro/liquid.CLFH11kp.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.js":"_astro/m3.DH9BTFLf.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js":"_astro/tcl.DXo_pUYW.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":"_astro/markdown.GE2iLcnk.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js":"_astro/hcl.C2J1_B3f.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js":"_astro/freemarker2.CWDY72z_.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/node_modules/@codeeditorland/wind/Target/Script/Monaco/Theme/Active4D.json":"_astro/Active4D.DCMaBw04.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/st/st.js":"_astro/st.ClAeTk0M.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/html/html.js":"_astro/html.Io7P-7_f.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":"_astro/swift.CoH7EiLZ.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":"_astro/typescript.Dl9i5CWZ.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.js":"_astro/ini.XT3tSoFz.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js":"_astro/systemverilog.CoMfZOXC.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/java/java.js":"_astro/java.DmwcZ_FI.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js":"_astro/javascript.D-WfbeIX.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.js":"_astro/sparql.hXRp7jJ7.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js":"_astro/sophia.CLMXsyzu.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js":"_astro/yaml.CyMAnigq.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js":"_astro/sql.BmlgaYHv.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js":"_astro/rust.BrXTz81u.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js":"_astro/restructuredtext.Dc-wndRK.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":"_astro/ruby.d6l3z7-p.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js":"_astro/redshift.Dj_vmnj9.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js":"_astro/solidity.CtWUlafK.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":"_astro/xml.DJK17ZFX.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js":"_astro/sb.vcDyAwen.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":"_astro/vb.BN1V8mMp.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.js":"_astro/wgsl.CRbFBJj6.js","astro:scripts/page.js":"_astro/page.gH9HJ_Vs.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js":"_astro/scala.Be3dUdh6.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js":"_astro/scheme.DNWDcnS3.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":"_astro/scss.C1b5tqQA.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":"_astro/shell.CjnVwx59.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.js":"_astro/pla.C4J4rbNS.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js":"_astro/pgsql.Dxa9W7vH.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":"_astro/twig.f-JLEFhw.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js":"_astro/redis.DxhLtyk8.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/php/php.js":"_astro/php.TWyYxVEG.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":"_astro/postiats.BXd_hOAR.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js":"_astro/razor.fa6I3VOZ.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js":"_astro/pascaligo.EHxpZrRZ.js","D:/Developer/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts":"_astro/ViewTransitions.astro_astro_type_script_index_0_lang.Bvzvg9jW.js","D:/Developer/node_modules/@swup/overlay-theme/dist/index.modern.js":"_astro/index.modern.DpLP8u1C.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":"_astro/pug.CruACEdS.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/typespec/typespec.js":"_astro/typespec.d8koGFGP.js","D:/Developer/node_modules/@swup/scroll-plugin/dist/index.modern.js":"_astro/index.modern.ljjH5-f0.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/r/r.js":"_astro/r.COwbLKzQ.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js":"_astro/powershell.C7wMzqnQ.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":"_astro/objective-c.DIQT0-Wy.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js":"_astro/pascal.Bi6OtZ6T.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js":"_astro/perl.BhS9E0O-.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":"_astro/tsMode.BFNgk4fG.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":"_astro/mips.CQ2pa7Zs.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js":"_astro/qsharp.C-U9mNiE.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":"_astro/python.HBpHHEIu.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js":"_astro/msdax.ClZfrVld.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js":"_astro/mysql.QOcECUwo.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.js":"_astro/protobuf.BTyEc9Pe.js","D:/Developer/node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js":"_astro/powerquery.saoeROhZ.js","D:/Developer/node_modules/swup/dist/Swup.modern.js":"_astro/Swup.modern.BemQoQWS.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/css/cssMode.js":"_astro/cssMode.DdJ1AAON.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/json/jsonMode.js":"_astro/jsonMode.z5yPP_Tv.js","D:/Developer/node_modules/monaco-editor/esm/vs/language/html/htmlMode.js":"_astro/htmlMode.Cnbdzv36.js","D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/node_modules/@codeeditorland/wind/Target/Element/Editor.js":"_astro/Editor.DUtospb_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts","document.documentElement.classList.remove(\"no-js\");document.documentElement.classList.add(\"js\");\n//# sourceMappingURL=Base.astro_astro_type_script_index_1_lang.D4DYKVOQ.js.map"]],"assets":["/_astro/page.gH9HJ_Vs.js","/file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/Editor/index.html","/file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/VSCode/index.html","/file:///D:/Developer/Application/CodeEditorLand/EcoSystem/Elements/Sky/Target/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
//# sourceMappingURL=manifest_D79C4ael.mjs.map