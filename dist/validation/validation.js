"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDateTime = exports.validateInt32 = exports.MinLength = exports.MaxLength = exports.IsString = void 0;
const IsString = (req) => {
    if (!req) {
        return false;
    }
    if (typeof req !== 'string') {
        return false;
    }
    return true;
};
exports.IsString = IsString;
const MaxLength = (text, maxLength) => {
    if (text.length > maxLength) {
        return false;
    }
    return true;
};
exports.MaxLength = MaxLength;
const MinLength = (text, minLength) => {
    if (text.length < minLength) {
        return false;
    }
    return true;
};
exports.MinLength = MinLength;
const validateInt32 = (req) => {
    return Number.isInteger(req) && req >= 1 && req <= 18;
};
exports.validateInt32 = validateInt32;
const validateDateTime = (req) => {
    const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(([+-])(\d{2}):(\d{2}))?$/;
    return dateTimeRegex.test(req);
};
exports.validateDateTime = validateDateTime;
