/*global define, $,*/

define(function (require, exports, module) {
    var ThemeManager = brackets.getModule("view/ThemeManager");
    var PreferencesManager = brackets.getModule("preferences/PreferencesManager");
    var prefs = PreferencesManager.getExtensionPrefs("themes");
    var themeIsPresent = document.getElementById("cssUiThemeEnabler");

    //Setup applyTheme function -- Calls for current theme path and appends theme css to brackets body, if theme is already present, removes previous theme before applying new one.
    var applyTheme = function () {
        var currentTheme = ThemeManager.getCurrentTheme().file._path;
        if (themeIsPresent !== undefined) {
            $("#cssUiThemeEnabler").remove();
            $("body").append('<link id="cssUiThemeEnabler" rel="stylesheet" href=" ' + currentTheme + '">');
        } else {
            $("body").append('<link id="cssUiThemeEnabler" rel="stylesheet" href=" ' + currentTheme + '">');
        }
    };
    prefs.on("change", "theme", function () {
        applyTheme();
    });
});
