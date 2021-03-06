
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function AppAgileNodeRedContribUI(args, metadata) {
    Application.apply(this, ['AppAgileNodeRedContribUI', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

     var src = document.location.protocol + "//" + document.location.hostname + ":1880/api/ui/";

    this.options.src = src;
  }

  AppAgileNodeRedContribUI.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.AppAgileNodeRedContribUI = OSjs.Applications.AppAgileNodeRedContribUI || {};
  OSjs.Applications.AppAgileNodeRedContribUI.Class = AppAgileNodeRedContribUI;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
