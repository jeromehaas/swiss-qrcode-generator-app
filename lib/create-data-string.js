const createDataString = (data) => {

	let string = "";
	string += "SPC" + "\n";
	string += "0200" + "\n";
	string += "1" + "\n";
	string += "CH6730808004996453979" + "\n";
	string += "K" + "\n";
	string += data.receiver.address.company + "\n";
	string += data.receiver.address.street + "\n";
	string += data.receiver.address.plz + " " + data.receiver.address.town + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += data.receiver.address.country + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += data.bank.total + "\n";
	string += data.bank.currency + "\n";
	string += "K" + "\n";
	string += data.sender.address.company + "\n";
	string += data.sender.address.street + "\n";
	string += data.sender.address.plz + " " + data.sender.address.town + "\n";
	string += "" + "\n";
	string += "" + "\n";
	string += data.sender.address.country + "\n";
	string += "QRR" + "\n";
	string += data.bank.reference + "\n";
	string += "" + "\n";
	string += "EPD" + "\n";
	return string;

};

module.exports = createDataString;