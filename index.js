const createDataString = require('./lib/create-data-string');
const createXml = require('./lib/create-xml');
const createSvg = require('./lib/create-svg');
const data = require('./data');

const generateSwissQrcode = async () => {
	const dataString = await createDataString(data);
	const xml = await createXml(dataString);
	const svg = await createSvg(xml);
};

generateSwissQrcode();
	
	
	