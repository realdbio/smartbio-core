Package.describe({
  name: 'ramshackle:smartbio',
  summary: ' /* contains UI elements and back end logic for EHR functionality  */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

    api.use(
        ['mongo', 'aldeed:collection2', 'accounts-base', 'matteodem:easy-search', 'peerlibrary:async', 'sergeyt:typeahead', 'ramshackle:realdb-facts'],
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
//    api.addFiles(
//        [
//            'client/init-client.js',
//            'client/entity.html',
//            'client/entity.js',
//            'client/etype.html',
//            'client/etype.js',
//            'client/dataloader.html',
//            'client/dataloader.js'],
//        ['client']
//    );
//
//    api.addFiles(
//        [
//            'server/init-server.js',
//            'server/methods.js',
//        ],
//        ['server']
//    );
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ramshackle:smartbio');
  api.addFiles('test/smartbio-tests.js');
});