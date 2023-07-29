import PocketBase from 'pocketbase';

const pb = new PocketBase('http://20.13.128.32');


export async function load() {
	const records = await pb.collection('bookmarks').getFullList({
    sort: '-created',
	});
	//console.log('Records:', records);
	// Additional logging to inspect individual records
    records.forEach((record, i) => {
        //console.log(`Record ${i}:`, record);
    });
	return {
		links: records.map((record) => ({
			address: record.address,
			name: record.name,
			id: record.id
			// Other properties you want to include
		})),
	};

	

}

// POST methods
export const actions = {
	// the default post method
    add: async ( {request} ) => {
        // TODO log the user in
		const data = await request.formData();

		console.log(data);
		const name = data.get("name");
		console.log(name);
		const address = data.get("address");
		console.log(address);
		const dbdata = {
			"name": name,
			"address": "https://" + address 
		};
		const record = await pb.collection('bookmarks').create(dbdata);
	},

    delete: async ( {request} ) => {
        // TODO log the user in
		const data = await request.formData();

		console.log(data);
		const id = data.get("id");
		console.log(id);
		await pb.collection('bookmarks').delete(id);
	}
};

