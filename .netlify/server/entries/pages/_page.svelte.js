import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  data.links;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<canvas id="c"></canvas>

<div class="bg-gradient-to-r from-pink-200 to-rose-200 py-4 shadow-sm"><h1 class="font-medium text-3xl pt-1 mx-6">Laba</h1>
	<p class="text-xl text-gray-700 mx-6">The bookmark manager</p></div>
<div class="m-6"><button class="mb-2 px-4 py-2 bg-rose-300 hover:bg-pink-600 text-white rounded-xl">edit</button>
					

	<ul class="my-3">${each(data.links, (bookmark) => {
    return `<form method="POST" action="?/delete"><div class="flex justify-between my-6 max-w-xs"><input type="hidden" name="id"${add_attribute("value", bookmark.id, 0)}>
				<li><a${add_attribute("href", bookmark.address, 0)} target="”_blank”" class="text-white text-lg bg-pink-500 rounded-xl px-3 py-2 shadow-s">${escape(bookmark.name)}</a></li>
				${``}</div>
		</form>`;
  })}</ul>



	${``}</div>`;
});
export {
  Page as default
};
