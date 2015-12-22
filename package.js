Package.describe({
  name: 'marvin:xmlbuilder',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'An XML builder for node.js similar to java-xmlbuilder',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/marvinmarnold/meteor-xmlbuilder',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'xmlbuilder': '4.2.0'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('xmlbuilder.js', 'server');

  api.export('XMLBuilder', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:xmlbuilder');
  api.addFiles('xmlbuilder-tests.js');
});
