const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecord = (record) => {
    return {
        name: record.fields.name,
        marketing: record.fields.marketing,
        rodo: record.fields.rodo,
    }
}

const minifyRecords = (records) => {
    return records.map((record) => getMinifiedRecord(record))
}


export default async (req, res) => {

    const records = await table.select({}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    // res.json(records);
    res.json(minifiedRecords);
}
