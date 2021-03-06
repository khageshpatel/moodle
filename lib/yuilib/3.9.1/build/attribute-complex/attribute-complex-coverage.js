/* YUI 3.9.1 (build 5852) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/attribute-complex/attribute-complex.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/attribute-complex/attribute-complex.js",
    code: []
};
_yuitest_coverage["build/attribute-complex/attribute-complex.js"].code=["YUI.add('attribute-complex', function (Y, NAME) {","","    /**","     * Adds support for attribute providers to handle complex attributes in the constructor","     *","     * @module attribute","     * @submodule attribute-complex","     * @for Attribute","     * @deprecated AttributeComplex's overrides are now part of AttributeCore.","     */","","    var Attribute = Y.Attribute;","","    Attribute.Complex = function() {};","    Attribute.Complex.prototype = {","","        /**","         * Utility method to split out simple attribute name/value pairs (\"x\")","         * from complex attribute name/value pairs (\"x.y.z\"), so that complex","         * attributes can be keyed by the top level attribute name.","         *","         * @method _normAttrVals","         * @param {Object} valueHash An object with attribute name/value pairs","         *","         * @return {Object} An object literal with 2 properties - \"simple\" and \"complex\",","         * containing simple and complex attribute values respectively keyed","         * by the top level attribute name, or null, if valueHash is falsey.","         *","         * @private","         */","        _normAttrVals : Attribute.prototype._normAttrVals,","","        /**","         * Returns the initial value of the given attribute from","         * either the default configuration provided, or the","         * over-ridden value if it exists in the set of initValues","         * provided and the attribute is not read-only.","         *","         * @param {String} attr The name of the attribute","         * @param {Object} cfg The attribute configuration object","         * @param {Object} initValues The object with simple and complex attribute name/value pairs returned from _normAttrVals","         *","         * @return {Any} The initial value of the attribute.","         *","         * @method _getAttrInitVal","         * @private","         */","        _getAttrInitVal : Attribute.prototype._getAttrInitVal","","    };","","    // Consistency with the rest of the Attribute addons for now.","    Y.AttributeComplex = Attribute.Complex;","","","}, '3.9.1', {\"requires\": [\"attribute-base\"]});"];
_yuitest_coverage["build/attribute-complex/attribute-complex.js"].lines = {"1":0,"12":0,"14":0,"15":0,"53":0};
_yuitest_coverage["build/attribute-complex/attribute-complex.js"].functions = {"(anonymous 1):1":0};
_yuitest_coverage["build/attribute-complex/attribute-complex.js"].coveredLines = 5;
_yuitest_coverage["build/attribute-complex/attribute-complex.js"].coveredFunctions = 1;
_yuitest_coverline("build/attribute-complex/attribute-complex.js", 1);
YUI.add('attribute-complex', function (Y, NAME) {

    /**
     * Adds support for attribute providers to handle complex attributes in the constructor
     *
     * @module attribute
     * @submodule attribute-complex
     * @for Attribute
     * @deprecated AttributeComplex's overrides are now part of AttributeCore.
     */

    _yuitest_coverfunc("build/attribute-complex/attribute-complex.js", "(anonymous 1)", 1);
_yuitest_coverline("build/attribute-complex/attribute-complex.js", 12);
var Attribute = Y.Attribute;

    _yuitest_coverline("build/attribute-complex/attribute-complex.js", 14);
Attribute.Complex = function() {};
    _yuitest_coverline("build/attribute-complex/attribute-complex.js", 15);
Attribute.Complex.prototype = {

        /**
         * Utility method to split out simple attribute name/value pairs ("x")
         * from complex attribute name/value pairs ("x.y.z"), so that complex
         * attributes can be keyed by the top level attribute name.
         *
         * @method _normAttrVals
         * @param {Object} valueHash An object with attribute name/value pairs
         *
         * @return {Object} An object literal with 2 properties - "simple" and "complex",
         * containing simple and complex attribute values respectively keyed
         * by the top level attribute name, or null, if valueHash is falsey.
         *
         * @private
         */
        _normAttrVals : Attribute.prototype._normAttrVals,

        /**
         * Returns the initial value of the given attribute from
         * either the default configuration provided, or the
         * over-ridden value if it exists in the set of initValues
         * provided and the attribute is not read-only.
         *
         * @param {String} attr The name of the attribute
         * @param {Object} cfg The attribute configuration object
         * @param {Object} initValues The object with simple and complex attribute name/value pairs returned from _normAttrVals
         *
         * @return {Any} The initial value of the attribute.
         *
         * @method _getAttrInitVal
         * @private
         */
        _getAttrInitVal : Attribute.prototype._getAttrInitVal

    };

    // Consistency with the rest of the Attribute addons for now.
    _yuitest_coverline("build/attribute-complex/attribute-complex.js", 53);
Y.AttributeComplex = Attribute.Complex;


}, '3.9.1', {"requires": ["attribute-base"]});
