import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


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
			name: record.name
			// Other properties you want to include
		})),
	};

	

}

