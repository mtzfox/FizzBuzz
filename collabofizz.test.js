const num = 3;

const fizzbuzz = num => {
    console.log(num.toString);
};

/* test */
describe("fizzbuzz file", () => {
    it("returns a string", () => {
        expect(typeof fizzbuzz("")).toBe("string");
    });
});