var postcss = require("postcss"),
    expect = require("chai").expect,
    fs = require("fs"),
    path = require("path"),
    plugin = require("../");

var test = function (fixture, opts, done) {
  var input = fixture + ".css",
      expected = fixture + ".expected.css";

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

  it("sets animation-name: bounce correctly", function(done) {
   test("bounce", {}, done);
  });

  it("sets animation-name: flash correctly", function(done) {
   test("flash", {}, done);
  });

  it("sets animation-name: pulse correctly", function(done) {
   test("pulse", {}, done);
  });

  it("sets animation-name: rubberBand correctly", function(done) {
   test("rubberBand", {}, done);
  });

  it("sets animation-name: shake correctly", function(done) {
   test("shake", {}, done);
  });

  it("sets animation-name: swing correctly", function(done) {
   test("swing", {}, done);
  });

  it("sets animation-name: tada correctly", function(done) {
   test("tada", {}, done);
  });

  it("sets animation-name: wobble correctly", function(done) {
   test("wobble", {}, done);
  });

  it("sets animation-name: jello correctly", function(done) {
   test("jello", {}, done);
  });

  it("sets animation-name: bounceIn correctly", function(done) {
   test("bounceIn", {}, done);
  });

  it("sets animation-name: bounceInDown correctly", function(done) {
   test("bounceInDown", {}, done);
  });

  it("sets animation-name: bounceInLeft correctly", function(done) {
   test("bounceInLeft", {}, done);
  });

  it("sets animation-name: bounceInRight correctly", function(done) {
   test("bounceInRight", {}, done);
  });

  it("sets animation-name: bounceInUp correctly", function(done) {
   test("bounceInUp", {}, done);
  });

  it("sets animation-name: bounceOut correctly", function(done) {
   test("bounceOut", {}, done);
  });

  it("sets animation-name: bounceOutDown correctly", function(done) {
   test("bounceOutDown", {}, done);
  });

  it("sets animation-name: bounceOutLeft correctly", function(done) {
   test("bounceOutLeft", {}, done);
  });

  it("sets animation-name: bounceOutRight correctly", function(done) {
   test("bounceOutRight", {}, done);
  });

  it("sets animation-name: bounceOutUp correctly", function(done) {
   test("bounceOutUp", {}, done);
  });

  it("sets animation-name: fadeInDown correctly", function(done) {
   test("fadeInDown", {}, done);
  });

  it("sets animation-name: fadeIn correctly", function(done) {
   test("fadeIn", {}, done);
  });

  it("sets animation-name: fadeInDownBig correctly", function(done) {
   test("fadeInDownBig", {}, done);
  });

  it("sets animation-name: fadeInLeft correctly", function(done) {
   test("fadeInLeft", {}, done);
  });

  it("sets animation-name: fadeInLeftBig correctly", function(done) {
   test("fadeInLeftBig", {}, done);
  });

});
