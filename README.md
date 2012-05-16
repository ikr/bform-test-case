# A mini-project demonstating a problem with custom templates in backbone-forms

[backbone-forms](https://github.com/powmedia/backbone-forms)

## Installation

You'll need an apache vhost configured, as AMD (RequireJS) only can load the modules and texts via
XHR; therefore, opening index.html via `file://` protocol won't work.

    <VirtualHost *:80>
        ServerName bform.ikr.xiag.ch
        DocumentRoot /Users/ikr/Sandbox/bform
    </VirtualHost>

## Testing

See `entry-point.js`. Commenting line 16 (custom templates definition) results in the form being
successfully rendered. Otherwise, only the partial rendering takes place
![img](http://xiag.ch/share/2012-05-16_1538.png)