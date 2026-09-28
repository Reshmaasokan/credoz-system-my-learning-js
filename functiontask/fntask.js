const employee = {

    salary: 30000,

    calculate: function() {

        let hra = this.salary * 20 / 100;
        let da = this.salary * 10 / 100;
        let sa = this.salary * 5 / 100;
        let pf = this.salary * 12 / 100;
        let pt = 200;

        this.currentsalary =
            this.salary - hra - da - sa - pf - pt;

        console.log("Salary:", this.salary);
        console.log("HRA:", hra);
        console.log("DA:", da);
        console.log("SA:", sa);
        console.log("PF:", pf);
        console.log("PT:", pt);
        console.log("Remaining Salary:", this.currentsalary);
    }
};

employee.calculate();

console.log(employee.currentsalary);