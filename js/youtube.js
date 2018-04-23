var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var data = "hello world yogesh this is typescript";
console.log(data);
var Vedios = /** @class */ (function () {
    function Vedios(vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) {
        var _this = this;
        this.vedioTitle = vedioTitle;
        this.videoId = videoId;
        this.videoUploadDate = videoUploadDate;
        this.views = views;
        this.likes = likes;
        this.disLikes = disLikes;
        this.comments = comments;
        this.uploadedBy = uploadedBy;
        this.getVedioTitles = function () {
            return _this.vedioTitle;
        };
        this.getVedioId = function () {
            return _this.videoId;
        };
        this.getVedioUploadDate = function () {
            return _this.videoUploadDate;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getUploadedBy = function () {
            return _this.uploadedBy;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.disLikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.vedioTitle = vedioTitle;
        this.comments = comments;
        this.disLikes = disLikes;
        this.likes = likes;
        this.uploadedBy = uploadedBy;
        this.videoId = videoId;
        this.videoUploadDate = videoUploadDate;
        this.views = views;
    }
    return Vedios;
}());
var YoutubeChannel = /** @class */ (function (_super) {
    __extends(YoutubeChannel, _super);
    function YoutubeChannel(channelName, subscriberNo, totalVedio, vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) {
        var _this = _super.call(this, vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) || this;
        _this.channelName = channelName;
        _this.subscriberNo = subscriberNo;
        _this.totalVedio = totalVedio;
        _this.vedioTitle = vedioTitle;
        _this.videoId = videoId;
        _this.videoUploadDate = videoUploadDate;
        _this.views = views;
        _this.likes = likes;
        _this.disLikes = disLikes;
        _this.comments = comments;
        _this.uploadedBy = uploadedBy;
        _this.channelName = channelName;
        _this.subscriberNo = subscriberNo;
        _this.totalVedio = totalVedio;
        return _this;
    }
    YoutubeChannel.prototype.getchannelName = function () {
        return this.channelName;
    };
    YoutubeChannel.prototype.getsubscriberNo = function () {
        return this.subscriberNo;
    };
    YoutubeChannel.prototype.gettotalVedio = function () {
        return this.totalVedio;
    };
    return YoutubeChannel;
}(Vedios));
var vediosInfo1 = new YoutubeChannel("WorriorSongs", 40000, 5, "Baghi 2 tere sang yaraaa song", 123, "35/5/2018", "3 min", 50000, 1000, 200, ["good", "superp"], "raju");
console.log(vediosInfo1);
console.log("<----------------2nd vedioss iNformation ------------------------------------>");
var vediosInfo2 = new YoutubeChannel("WorriorSongs", 40000, 5, "Baghi 2 tere sang yaraaa song", 123, "35/5/2018", "3 min", 50000, 1000, 200, ["good", "superp"], "raju");
var vedioname = vediosInfo2.getVedioTitles();
var vedioviews = vediosInfo2.getViews();
var vedioChannel = vediosInfo2.getchannelName();
var vedioComments = vediosInfo2.getComments();
console.log("<----------------vedio name------------------------------------>");
console.log(vedioname);
console.log("<----------------vedio views------------------------------------>");
console.log(vedioviews);
console.log("<---------------------vedio channel------------------------------->");
console.log(vedioChannel);
console.log("<----------------vedio name------------------------------------>");
console.log(vediosInfo2.getUploadedBy());
console.log("<----------------vedio comments------------------------------------>");
console.log(vediosInfo2.getComments());
console.log("<---------------------vedio likes------------------------------->");
console.log(vediosInfo2.getLikes());
console.log("<----------------vedio dislikes------------------------------------>");
console.log(vediosInfo2.getDislikes());
