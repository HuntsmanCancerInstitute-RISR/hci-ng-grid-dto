require("core-js/es6");
require("core-js/es7/reflect");

Error.stackTraceLimit = Infinity;

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(require.context("../src", true, /\.spec\.ts/));
