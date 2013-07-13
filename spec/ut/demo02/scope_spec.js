/**
 * Created with JetBrains WebStorm.
 * User: fortunezhang
 * Date: 13-7-13
 * Time: 上午10:58
 * To change this template use File | Settings | File Templates.
 */
describe("scope test", function () {
    var scope ;
    beforeEach(inject(function ($rootScope) {

        scope = $rootScope;
    }));

    it("should return right eval value", function () {

        expect(scope.$eval('2+3')).toEqual(5);
    });

    // ??????????????

    it("should inherit from partent scope", function () {
        var child_scope = scope.$new();

        scope.name = 'parent';

        expect(child_scope.name).toEqual("parent");
    });


});
