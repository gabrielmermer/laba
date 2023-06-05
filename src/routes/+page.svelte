<script>

export let data = [];




//console.log(data);

const linksArray = data.links;
//console.log(linksArray);


data.links.forEach((link) => {
  //console.log(link.address);
});




</script>


<h1>Laba</h1>
<p>The bookmark manager</p>

<ul>
{#each data.links as bookmark}
	 <!-- content here -->
	 <li><a href="{bookmark.address}" target=”_blank”>{bookmark.name} {bookmark.id}</a></li>
{/each}
</ul>


<p>Add a new bookmark</p>
<form method="POST" action="?/add">
	<label for="name">Name</label>
	<input type="text" id="name" name="name">
	<label for="address">Address</label>
	<input type="text" id="address" name="address">
	<button type="submit">Add</button>
</form>

