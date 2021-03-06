import React, { useContext } from 'react'
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecord = (record) => {
    console.log(record)
    return {
        id: record.getId(),
        name: record.fields.name,
        marketing: record.fields.marketing !== undefined ? record.fields.score : null,
        rodo: record.fields.rodo !== undefined ? record.fields.score : null,
        score: record.fields.score !== undefined ? record.fields.score : null,
        email: record.fields.email !== undefined ? record.fields.email : null,
    }
}

const minifyRecords = (records, id) => {
    console.log(records,id)
    const records2 = records.filter((i) => i.id === id)
    return records2.map((record) => getMinifiedRecord(record))
}


// export default async (req, res) => {
//     const records = await table.select({}).firstPage();
//     const minifiedRecords = minifyRecords(records);
//     res.statusCode = 200;
//     // res.json(records);
//     res.json(minifiedRecords);
// }


export { table, minifyRecords, getMinifiedRecord }
