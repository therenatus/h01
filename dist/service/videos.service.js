"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const data = [
    {
        id: "string2",
        title: "string",
        author: "string",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "string",
        publicationDate: "string",
        availableResolution: ["P1080", "P720", "P480", "P360", "P240"],
    },
    {
        id: "string3",
        title: "string",
        author: "string",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "string",
        publicationDate: "string",
        availableResolution: ["P1080", "P720", "P480", "P360", "P240"],
    },
];
class VideosService {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const video = data.filter((video) => video.id === id);
                if (!video.length) {
                    return res.status(404).send();
                }
                return res.status(200).json(video[0]);
            }
            catch (error) {
                console.log("Error");
                return res.status(500).send();
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(data);
            }
            catch (error) {
                console.log("Error");
                return res.status(500).send();
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const date = new Date();
                const video = req.body;
                const id = Math.random().toString(36).substr(2, 9);
                video.createdAt = date.toISOString();
                video.canBeDownloaded = true;
                (video.minAgeRestriction = null), (video.id = id);
                video.publicationDate = new Date(date.getTime() + 86400000).toISOString();
                data.push(video);
                console.log(data);
                return res.status(201).json({ message: "Created" });
            }
            catch (error) {
                console.log(error);
                console.log("Error");
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoId = data.findIndex((video) => video.id === req.params.id);
                const video = data[videoId];
                if (!video) {
                    return res.status(404).json("Not Found");
                }
                const updateVideo = Object.assign(Object.assign({}, video), req.body);
                const newVideos = data.splice(videoId, 1, updateVideo);
                res.status(201).json(newVideos);
            }
            catch (error) {
                console.log("Error");
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoId = data.findIndex((video) => video.id === req.params.id);
                const newVideo = data.splice(videoId, 1);
                res.status(204).json("Success");
            }
            catch (error) {
                console.log("Error");
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empty = data.splice(0, data.length);
                res.status(204).json("All data is deleted");
            }
            catch (error) {
                console.log("Error");
            }
        });
    }
}
exports.VideosService = VideosService;
