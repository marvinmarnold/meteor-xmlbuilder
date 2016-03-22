// Write your tests here!
// Here is an example.
if(Meteor.isServer) {
  Tinytest.add('example 1', function (test) {
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

    console.log(xml.end());
    test.equal(xml.end(), '<?xml version="1.0" encoding="UTF-8"?><command name="login"><param type="string">username</param><param type="string">password</param></command>');
  });

  Tinytest.add('example 2', function (test) {
    var obj = {
      command: {
        '@tid': "123",
        '@name': "deactivateXIQSObject",
        param: [
          { '#text': 99, '@type': 'integer' },
          { '#text': 222, '@type': 'long' }
        ],
      }
    };

    var xml = XMLBuilder.create(obj, {
      encoding: 'UTF-8',
      standalone: 'yes',
      separateArrayItems: false,
      noDoubleEncoding: false,
    });

    console.log(xml.end());
    test.equal(xml.end(), '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><command tid="123" name="deactivateXIQSObject"><param type="integer">99</param><param type="long">222</param></command>');
  });
}
