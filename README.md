# Hack Express

*Note:* This documentation is a work in progress and is quite out of date due to latest changes.  These changes will be updated soon.

Hack Express is a hacking competition management system.  It provides utilities to manage tokens providing score tracking for participants in the competition.

##Installation

###node.js

###mongodb

###hack-express

##Configuration

###Users

####couchdb users

####hack-express users

###Tokens

###Hints

###Security

####Generate Self Signed Certificate

<pre>
<code>
$&gt; cd hack-express  
$&gt; ./ssl-key-gen.sh
</code>
</pre>
  
This will create a _security_ directory that will contain the self-signed certificate and keys.
  
####Configure SSL
  
To configure SSL edit _hack-express/config.js_:

<pre>
<code>
config.ssl.key='./security/hack-express-dev.key'  
config.ssl.cert='./security/hack-express-dev.crt'
</code>
</pre>
