"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideoValidation = exports.CreateVideoValidation = void 0;
const validation_1 = require("../validation/validation");
const CreateVideoValidation = (req, res, next) => {
    const { title, author } = req.body;
    let message = [];
    if (req.body) {
        if (!(0, validation_1.IsString)(title) || !(0, validation_1.MaxLength)(title, 40)) {
            message.push({
                message: 'Type of filed must be string or length is too long',
                field: 'title',
            });
        }
        if (!(0, validation_1.IsString)(author) || !(0, validation_1.MaxLength)(author, 20)) {
            message.push({
                message: 'Type of filed must be string or length is too long',
                field: 'author',
            });
        }
        if (message.length) {
            return res.status(400).json(message);
        }
    }
    next();
};
exports.CreateVideoValidation = CreateVideoValidation;
const UpdateVideoValidation = (req, res, next) => {
    const { title, author, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;
    let message = [];
    if (req.body) {
        if (!(0, validation_1.IsString)(title) || !(0, validation_1.MaxLength)(title, 40)) {
            message.push({
                message: 'Type of filed must be string or length is too long',
                field: 'title',
            });
        }
        if (!(0, validation_1.IsString)(author) || !(0, validation_1.MaxLength)(author, 20)) {
            message.push({
                message: 'Type of filed must be string or length is too long',
                field: 'author',
            });
        }
        if (!(typeof canBeDownloaded === 'boolean')) {
            message.push({
                message: 'Type of filed must be boolean',
                field: 'canBeDownloaded',
            });
        }
        if (!(0, validation_1.validateInt32)(minAgeRestriction)) {
            message.push({
                message: 'Type of filed must be integer or age between 1 and 18',
                field: 'minAgeRestriction',
            });
        }
        if (!(0, validation_1.IsString)(publicationDate) && !(0, validation_1.validateDateTime)(publicationDate)) {
            message.push({
                message: 'Type of date must be string and date format must be YYYY-MM-DDTHH:mm:ss.sssZ',
                field: 'publicationDate',
            });
        }
        if (message.length) {
            return res.status(400).json(message);
        }
    }
    next();
};
exports.UpdateVideoValidation = UpdateVideoValidation;
