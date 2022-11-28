// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한 달 근무시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간 당 10000원
// 파트타임 직원은 시간 당 8000원

class Employee{
    constructor(name, deparement, hoursPerMonth, payRate){
        this.name = name;
        this.deparement = deparement;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    caculatePay(){
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee{
    static #PAY_RATE = 10000;
    constructor(name, deparement, hoursPerMonth){
        super(name, deparement, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
    }
}
class PartTimeEmployee extends Employee{
    static #PAY_RATE = 8000;
    constructor(name, deparement, hoursPerMonth){
        super(name, deparement, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
    }
}

const rose = new FullTimeEmployee('로제', 'sw', 30);
const soo = new PartTimeEmployee('수', 'sw', 20);
console.log(rose.caculatePay());
console.log(soo.caculatePay());

