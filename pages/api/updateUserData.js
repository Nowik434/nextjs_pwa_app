import { table, getMinifiedRecord } from "./getUserData";

// export default async (req, res) => {
//     const { item } = req.body;
//     console.log("ITEM UPD COMP ", item);
//     // console.log("REQ", req)
//     try {
//         const newRecords = await table.create([{ fields: item }]);
//         res.status(200).json(getMinifiedRecord(newRecords[0]));
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: "Something went wrong! 😕" });
//     }
// };


export default async (req, res) => {
    const { id, fields } = req.body;
    try {
        const updatedRecords = await table.update([{ id, fields }]);
        res.status(200).json(getMinifiedItem(updatedRecords[0]));
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};


// fields: {
//     "name": "Jan Kowalski",
//     "sub": "618e1d9ca9ee1000717f982e",
//     "rodo": true,
//     "marketing": true
// }