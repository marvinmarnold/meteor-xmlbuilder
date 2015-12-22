A wrapper for [xmlbuilder](https://www.npmjs.com/package/xmlbuilder).

An XML builder for [node.js](https://nodejs.org/) similar to
[java-xmlbuilder](https://github.com/jmurty/java-xmlbuilder).

Inspired by [Meteor's native xmlbuilder]().

### Installation:

``` sh
meteor add marvin:xmlbuilder
```

### Usage:

``` js
var xml = XMLBuilder.create('root')
  .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
  .end({ pretty: true});

console.log(xml);
```

will result in:

``` xml
<?xml version="1.0"?>
<root>
  <xmlbuilder>
    <repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
  </xmlbuilder>
</root>
```

It is also possible to convert objects into nodes:

``` js
XMLBuilder.create({
  root: {
    xmlbuilder: {
      repo: {
        '@type': 'git', // attributes start with @
        '#text': 'git://github.com/oozcitak/xmlbuilder-js.git' // text node
      }
    }
  }
});
```

If you need to do some processing:

``` js
var root = XMLBuilder.create('squares');
root.com('f(x) = x^2');
for(var i = 1; i <= 5; i++)
{
  var item = root.ele('data');
  item.att('x', i);
  item.att('y', i * i);
}
```

This will result in:

``` xml
<?xml version="1.0"?>
<squares>
  <!-- f(x) = x^2 -->
  <data x="1" y="1"/>
  <data x="2" y="4"/>
  <data x="3" y="9"/>
  <data x="4" y="16"/>
  <data x="5" y="25"/>
</squares>
```

See the [wiki](https://github.com/oozcitak/xmlbuilder-js/wiki) for details.
