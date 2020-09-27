const expect = require('chai').expect;      //引入 BDD 风格的断言库 expect.js

describe("数组测试", function() {

    let arr;

    before(function () {
        arr = ["one", 2, 3];
    });

    it("访问数组元素", function(){
        //通过变量名访问数组中的第一个元素
        expect(arr[0]).to.equal("one");

        //直接访问数组中的第一个元素
        expect([1,2,3][0]).to.equal(1)
    });

});