"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WeekDays;
var _react = _interopRequireWildcard(require("react"));
var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));
var _locale = require("../locale");
var _utils = require("../utils");
var _constants = require("../constants");
var _excluded = ["value", "setValue", "locale", "className", "humanizeLabels", "monthDays", "disabled", "readOnly", "period"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function WeekDays(props) {
  var value = props.value,
    setValue = props.setValue,
    locale = props.locale,
    className = props.className,
    humanizeLabels = props.humanizeLabels,
    monthDays = props.monthDays,
    disabled = props.disabled,
    readOnly = props.readOnly,
    period = props.period,
    selectProps = _objectWithoutProperties(props, _excluded);
  var optionsList = locale.weekDays || _locale.DEFAULT_LOCALE_EN.weekDays;
  var noMonthDays = period === 'week' || !monthDays || monthDays.length === 0;
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;
    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-week-days': true,
      'react-js-cron-week-days-placeholder': !noMonthDays
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-week-days"), !!className), _classNames));
  }, [className, noMonthDays]);
  var localeJSON = JSON.stringify(locale);
  var placeholder = (0, _react.useMemo)(function () {
    if (noMonthDays) {
      return locale.emptyWeekDays || _locale.DEFAULT_LOCALE_EN.emptyWeekDays;
    }
    return locale.emptyWeekDaysShort || _locale.DEFAULT_LOCALE_EN.emptyWeekDaysShort;
  }, [noMonthDays, localeJSON]);
  var displayWeekDays = period === 'week' || !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!monthDays || monthDays.length === 0);
  var monthDaysIsDisplayed = !readOnly || monthDays && monthDays.length > 0 || (!monthDays || monthDays.length === 0) && (!value || value.length === 0);
  return displayWeekDays ? _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixWeekDays !== '' && (period === 'week' || !monthDaysIsDisplayed) && _react["default"].createElement("span", null, locale.prefixWeekDays || _locale.DEFAULT_LOCALE_EN.prefixWeekDays), locale.prefixWeekDaysForMonthAndYearPeriod !== '' && period !== 'week' && monthDaysIsDisplayed && _react["default"].createElement("span", null, locale.prefixWeekDaysForMonthAndYearPeriod || _locale.DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: placeholder,
    optionsList: optionsList,
    value: value,
    unit: _objectSpread(_objectSpread({}, _constants.UNITS[4]), {}, {
      alt: locale.altWeekDays || _locale.DEFAULT_LOCALE_EN.altWeekDays
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period
  }, selectProps))) : null;
}