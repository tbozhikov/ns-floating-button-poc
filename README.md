# A way to make a floating button (or whatever thing) using {N}

Points to notice:
-  [iOS] Notice the usage of IQKeyboardManager and the config to control the distance:
```ts
this.iqKeyboard = IQKeyboardManager.sharedManager();
this.iqKeyboard.keyboardDistanceFromTextField = 90;
```
- [Android] Notice the `android:windowSoftInputMode="adjustResize"` in AndroidManifest - it shrinks the view port and "pushes" the FAB up when the keyboard is open 
-  The floating button is inside components/fab-button
