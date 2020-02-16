
function calculatePayroll() {

    const basicSalary = parseInt(document.getElementById('basic_salary').value);
    const houseAllowance = parseInt(document.getElementById('house_allowance').value);
    const nhif = parseInt(document.getElementById('nhif').value);
    const dogAllowance = parseInt(document.getElementById('dog_allowance').value);
    const paye = parseInt(document.getElementById('paye').value);

    var totalAllowances = houseAllowance + dogAllowance;
    var totalDeductions = nhif + paye;
    var expenses = totalAllowances+totalDeductions;
    var taxableIncome = basicSalary + expenses;
    var netIncome = basicSalary - expenses;
    
    document.getElementById('BS').innerHTML = basicSalary;
    document.getElementById('TA').innerHTML = totalAllowances;
    document.getElementById('TD').innerHTML = totalDeductions;
    document.getElementById('TI').innerHTML = taxableIncome;
    document.getElementById('NI').innerHTML = netIncome;
    
    //so
}

const calcButton = document.getElementById('calc');

calcButton.addEventListener('click', calculatePayroll);




function printPayroll(){
var payroll= new jsPDF;

payroll.fromHTML($('#myDoc').get(0), 15, 15, {
    'width':170,
});
payroll.save('sample-payroll.pdf');

}   


