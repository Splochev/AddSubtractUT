const { expect, AssertionError } = require("chai");
const { createCalculator } = require("./AddSubtract");


describe("Testing createCalculator", () => {
    let calc = createCalculator();

    it("Test calc has fn add",()=>{
        let exists;
        if(calc["add"]){
            exists = true;
        }
        expect(exists).to.equal(true)
    })

    it("Test calc has fn subtract",()=>{
        let exists;
        if(calc["subtract"]){
            exists = true;
        }
        expect(exists).to.equal(true)
    })

    it("Test calc has fn get",()=>{
        let exists;
        if(calc["get"]){
            exists = true;
        }
        expect(exists).to.equal(true)
    })


    it("Test calc is object",()=>{
        let a = {};
        expect(typeof calc).to.equal(typeof a);
    })

    it("Test get fn of calc", () => {
        expect(calc.get()).to.equal(0);
    })


    it("Test subtract of calc with 0", () => {
        calc.subtract(0);
        expect(calc.get()).to.equal(0);
    })

    it("Test subtract of calc with 0 as string", () => {
        calc.subtract('0');
        expect(calc.get()).to.equal(0);
    })

    it("Test add of calc with 0", () => {
        calc.add(0);
        expect(calc.get()).to.equal(0);
    })

    it("Test add of calc with 0 as string", () => {
        calc.add('0');
        expect(calc.get()).to.equal(0);
    })

    it("Test subtract fn of calc", () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    })

    it("Test subtract fn of calc works with strings", () => {
        calc.subtract("1");
        expect(calc.get()).to.equal(-2);
    })

    it("Test subtract fn of calc with negative numbers", () => {
        calc.subtract(-1);
        expect(calc.get()).to.equal(-1);
    })

    it("Test subtract fn of calc with negative nubmer as string", () => {
        calc.subtract("-1");
        expect(calc.get()).to.equal(0);
    })

    it("Test add fn of calc", () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    })
    it("Test add fn of calc with string", () => {
        calc.add("1");
        expect(calc.get()).to.equal(2)
    })
    it("Test add fn of calc with negative number", () => {
        calc.add(-1);
        expect(calc.get()).to.equal(1);
    })
    it("Test add fn of calc with negative number as string", () => {
        calc.add("-1");
        expect(calc.get()).to.equal(0);
    })

    it("Test subtract of calc with string", () => {
        calc.subtract("hello");
        expect(Number.isNaN(calc.get())).to.equal(true);
    })
    it("Test add of calc with string", () => {
        calc = createCalculator();
        calc.add("hello");
        expect(Number.isNaN(calc.get())).to.equal(true);
    })

    it("Test if you can access value of calc",()=>{
        expect(calc.value).to.equal(undefined);
    })
})