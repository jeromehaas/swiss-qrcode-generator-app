const fs = require("fs");
const path = require('path');

const createSvg = (xml) => {

	fs.writeFileSync(path.join(__dirname, '../dist/qrcode.svg'), xml.toString(), (error) => {
		if (error) console.log(error)
	});

};

module.exports = createSvg;