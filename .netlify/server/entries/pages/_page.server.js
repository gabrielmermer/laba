import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
async function load() {
  const records = await pb.collection("bookmarks").getFullList({
    sort: "-created"
  });
  records.forEach((record, i) => {
  });
  return {
    links: records.map((record) => ({
      address: record.address,
      name: record.name,
      id: record.id
      // Other properties you want to include
    }))
  };
}
const actions = {
  // the default post method
  add: async ({ request }) => {
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
    await pb.collection("bookmarks").create(dbdata);
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    console.log(data);
    const id = data.get("id");
    console.log(id);
    await pb.collection("bookmarks").delete(id);
  }
};
export {
  actions,
  load
};
