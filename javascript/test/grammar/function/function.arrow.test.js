const expect = require('chai').expect;      //引入 BDD 风格的断言库 expect.js

describe("箭头函数用法", function() {

    const elements = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];

    it('基础写法 ', function () {
        let res = elements.map(function(element) {
            return element.length;
        });
        expect(res).to.eql([8, 6, 7, 9]);
    });

    it('箭头函数写法 ', function () {
        let res = elements.map((element) => {
            return element.length;
        });
        expect(res).to.eql([8, 6, 7, 9]);
    });

    it('当箭头函数只有一个参数时，可以省略参数的圆括号', function () {
        let res = elements.map(element => {
            return element.length;
        });
        expect(res).to.eql([8, 6, 7, 9]);
    });

    it('当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号', function () {
        let res = elements.map(element => element.length);
        expect(res).to.eql([8, 6, 7, 9]);
    });

    //==================  参数解构  ===============

    // 参数解构参考资料：
    // 1. https://stackoverflow.com/questions/56061769/how-this-works-elements-map-length-lengthfoobarx-lengthfoobarx
    // 2. http://es6.ruanyifeng.com/#docs/destructuring
    // 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
    // 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
    // 可以替换成任意合法的变量名

    it('参数解构写法1', function () {
        let res = elements.map(({ "length": lengthFooBArX }) => lengthFooBArX);
        expect(res).to.eql([8, 6, 7, 9]);
    });

    it('参数解构写法2', function () {
        let res = elements.map(({ length: lengthFooBArX }) => lengthFooBArX);
        expect(res).to.eql([8, 6, 7, 9]);
    });

    it('参数解构写法3', function () {
        let res = elements.map(({length}) => length);
        expect(res).to.eql([8, 6, 7, 9]);
    });

})