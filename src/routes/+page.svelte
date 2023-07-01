<script>

export let data = [];

import { toggle } from '../stores.js';

import { fade } from 'svelte/transition';

//console.log(data);

const linksArray = data.links;
//console.log(linksArray);



let isEditable = false;



function toggleEdit() {
	isEditable = !isEditable;
	toggle.update(n => !n);
}



</script>

<canvas id="c"></canvas>

<div class="bg-gradient-to-r from-pink-200 to-rose-200 py-4 shadow-sm">
	<h1 class="font-medium text-3xl pt-1 mx-6">Laba</h1>
	<p class="text-xl text-gray-700 mx-6">The bookmark manager</p> 
</div>
<div class="m-6">
	<button on:click={toggleEdit}  class="mb-2 px-4 py-2 bg-rose-300 hover:bg-pink-600 text-white rounded-xl">edit</button>
					

	<ul class="my-3">
	{#each data.links as bookmark}
		<form method="POST" action="?/delete">
			<div class="flex justify-between my-6 max-w-xs">
				<input type="hidden" name="id" value={bookmark.id} />
				<li><a href="{bookmark.address}" target=”_blank” class="text-white text-lg bg-pink-500 rounded-xl px-3 py-2 shadow-s">{bookmark.name}</a></li>
				{#if isEditable == true}
					<button transition:fade class="mx-5 text-red-500 hover:text-red-700 shadow-sm">X</button>
				{/if}

			</div>
		</form>
	{/each}
	</ul>



	{#if isEditable == true}
		<div transition:fade>
			<p class="text-xl">Add a new bookmark</p>
			<form method="POST" action="?/add">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" class="rounded-l mr-3">
				<label for="address">Address</label>
				<input type="text" id="address" name="address" class="rounded-l mr-3">
				<button type="submit" class="my-4 px-4 py-2 bg-pink-400 hover:bg-pink-600 text-white rounded-xl">Add</button>
			</form>
		</div>
	{/if}

</div>
	
	
