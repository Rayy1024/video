=============================
Image Minification with Grunt
=============================

When running Grunt, save images to /images/source and compressed images will 
automatically be saved to /images/optimized.

===========================
How to Use Grunt with S-Video
===========================

Grunt requires Node.JS to be installed on your machine. There are various
package managers that can handle this for you.

https://nodejs.org/download/

Once Node.JS is installed, go to s_video/grunt and install your Grunt packages:

  npm install

This will install the neccessary node_modules to run Grunt. Once installed, run
Grunt via the command line:

  grunt

This will initialize Grunt and start watching changes to your SASS files. Voilà!
