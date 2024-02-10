const Airtable = require('airtable');

exports.handler = async (event, context) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appxUK8EFDFVG3zJt');
    const table = base('Widget Database');
    try {
        const records = await table.select({}).firstPage();
        const items = records.map(record => {
            return {
                id: record.id,
                ...record.fields
            };
        });
        return {
            statusCode: 200,
            body: JSON.stringify(items)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({msg: "Failed to fetch data"})
        };
    }
};
