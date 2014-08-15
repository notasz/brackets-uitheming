/*global define, $,*/

define(function (require, exports, module) {
    var ThemeManager = brackets.getModule("view/ThemeManager");

    //Setup applyTheme function -- Calls for current theme path and appends theme css to brackets body
    var applyTheme = function () {
        //Setting up var for the current theme pathing
        var currentTheme = ThemeManager.getCurrentTheme().file._path;
        //Apply current theme
        $("body").append('<link rel="stylesheet" href=" ' + currentTheme + '">');
    };
    applyTheme();
});
