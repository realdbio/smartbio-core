Package.describe({
  name: 'ramshackle:smartbio-core',
  summary: 'Meteor package that contains UI elements and back end logic for PHR functionality',
  version: '1.0.0',
  git: 'https://github.com/realdbio/smartbio-core.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

    api.use(
        [
            'mongo',
            'aldeed:collection2',
            'accounts-base',
            'matteodem:easy-search',
            'peerlibrary:async',
            'pahans:reactive-modal',
            'ramshackle:realdb-facts'],
        ['client', 'server']
    );

    api.use(
        ['templating', 'mizzao:bootstrap-3', 'less', 'tsega:bootstrap3-datetimepicker'],
        ['client']
    );


//    api.addFiles(
//        ['lib/schema.js',
//            'lib/init.js',
//            'lib/util.js',
//            'lib/RealdbioImporter.js'],
//        ['client', 'server']
//    );
//
    api.addFiles(
        [
            'html/conditions.html',
            'client/conditions.js'],
        ['client']
    );
//
    api.addFiles(
        [
            'server/init-server.js'
        ],
        ['server']
    );
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ramshackle:smartbio');
  api.addFiles('test/smartbio-tests.js');
});
