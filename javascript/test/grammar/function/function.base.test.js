const expect = require('chai').expect;      //引入 BDD 风格的断言库 expect.js

describe("函数基础用法", function() {

    it('将函数赋值给变量', function () {
        //将 console 对象的 log 函数赋值给 log 变量，方便打印信息
        let log = console.log
        log("我是日志")
    });


    it('声明函数', function () {
        expect(get()).to.equal(100);
        // 函数声明可以放在任意的地方，可以在代码前或代码最后。解析器会先读取函数声明，并使其在执行任何代码之前可用。
        function get() {
            return 100;
        }
    });

    it('函数表达式', function () {
        try{
            sum(3,5);                       // 运行会报错，因为 sum 是函数表达式，不是函数声明，解析器不会提前加载它。
        }catch (e) {
            // console.log(e);
            expect(e.message).to.equal("Cannot access 'sum' before initialization")
        }

        let sum = function (num1, num2) {   //函数表达式
            return num1 + num2;
        }

        expect(sum(3,5)).to.equal(8);        // 运行成功，因为解析器从上到下运行代码，到这里时，sum 对象已经赋值为 Function 实例了。
    });

})
