// Write your tests here!
// Here is an example.
if(Meteor.isServer){
  Tinytest.add('example', function (test) {
    var obj = {
      command: {
        '@name': "login",
        param: [
          { '#text': "username", '@type': 'string' },
          { '#text': "password", '@type': 'string' }
        ],
      }
    };

    var xml = XMLBuilder.create(obj, {
      encoding: 'UTF-8',
      separateArrayItems: false,
      noDoubleEncoding: false,
    });

    test.equal(xml.end(), '<?xml version="1.0" encoding="UTF-8"?><command name="login"><param type="string">username</param><param type="string">password</param></command>');
  });
}
