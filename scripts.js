// Watch the 'container' id for change
document.getElementById('container').onchange = function() {
	// grab the values in the id
	var bill = Number(document.getElementById('billTotal').value);
	var tipPercent = document.getElementById('tipAmount').value;
	var splitAmount = document.getElementById('split').value;
	//Calculate the tip, bill and splits
	var tipValue = bill * (tipPercent / 100);
	var newBillEach = (bill + tipValue) / splitAmount;
	var tipEach = tipValue / splitAmount;
	//Calculate total bill
	var totalBill = bill + tipValue;
	// display the tip percentage and split number beside the slider
	document.getElementById('tipOutput').innerHTML = tipPercent + '%';
	document.getElementById('splitOutput').innerHTML = ' ' + splitAmount;
	document.getElementById('newBillPP').innerHTML = ' £' + newBillEach.toFixed(2);
	document.getElementById('tipPP').innerHTML = ' £' + tipEach.toFixed(2);
	document.getElementById('totalBillAmount').innerHTML = ' £' + totalBill.toFixed(2);
};
