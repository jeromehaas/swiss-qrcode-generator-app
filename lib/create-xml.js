const generator = require('@cheprasov/qrcode');
const { QRCodeSVG } = generator;
const path = require('path');

const createXml = async (dataString) => {

	const xml = await new QRCodeSVG(dataString, {
		level: 'H',
		image: {
				source: path.join(__dirname, '../assets/swiss-cross.png'),
				width: '20%',
				height: '20%',
				x: 'center',
				y: 'center',
		}
	});
	return xml

};

module.exports = createXml;