'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  writing: {

    app: function() {
      this.spawnCommand('spm', ['init']);
    }

  },

});
