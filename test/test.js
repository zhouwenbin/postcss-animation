"use strict";

var postcss = require("postcss"),
    expect = require("chai").expect,
    fs = require("fs"),
    path = require("path"),
    plugin = require("../"),
    keyframes = require("postcss-animation-data");

var test = function (fixture, opts, done) {
var input = fixture + ".css",
      expected = fixture + ".expected.css";
var opts = {atRoot: true};

  input = fs.readFileSync(path.join(__dirname, "fixtures", input), "utf8");
  expected = fs.readFileSync(path.join(__dirname, "fixtures", expected), "utf8");

  postcss([ plugin(opts) ])
    .process(input)
    .then(function (result) {
      expect(result.css).to.eql(expected);
      console.log(result.warnings());
      expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });

};

describe("postcss-animation", function () {

  for(var i in keyframes){
    it("sets animation-name: "+ i +" correctly", function(done) {
     test(i, {}, done);
    });
  }

});
