Brackets UI Theming Enable
===

A simple extension to allow native theme developers to include CSS code to style all available UI elements in Brackets. Brackets themes available via the extension registry cannot currently theme outside of the editor, but this extension solves that. Using this extension, any theme developer can include code to style any UI element available in Brackets. If the user does not have this extension, the editor will still be themed and there will be no problems.

Screenshots
---
Without enabler [Midnight Glow](https://github.com/notasz/Brackets-Midnightglow) looks like this:
![HTML](screenshots/without.png)

With enabler [Midnight Glow](https://github.com/notasz/Brackets-Midnightglow) looks like this:
![HTML](screenshots/with.png)

Notes
---
Currently this extension only applies the theme at launch, and on reload. I need to add a listener for theme changes, but i'm not entirely sure how to do that just yet.