const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"_astro/Get.CS5v4IJV.js",
			"_astro/Editor.DCPGuuul.js",
			"_astro/solid.-melTDdq.js",
		]),
) => i.map((i) => d[i]);
import { _ as o } from "./Editor.DCPGuuul.js";
import "./solid.-melTDdq.js";
var p = (...[[t, [_, a]], i = null]) => {
	let e = r(t);
	try {
		e = s(JSON.parse(r(t)));
	} catch (l) {
		console.log(l);
	}
	return a(i ?? e), [_, a];
};
const { get: r } = await o(
		() => import("./store.legacy.DD2y5COG.js").then((t) => t.s),
		[],
	),
	{ default: s } = await o(
		async () => {
			const { default: t } = await import("./Get.CS5v4IJV.js");
			return { default: t };
		},
		__vite__mapDeps([0, 1, 2]),
	);
export { s as Get, p as default, r as get };
//# sourceMappingURL=Create.D7egYPT2.js.map