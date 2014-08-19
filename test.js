describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        expect('11111').toEqual(kingarthas('22322'));

    });
});

describe("B suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse1("ABCD"));
        expect('11111').toEqual(kingarthas1('22322'));
    });
});