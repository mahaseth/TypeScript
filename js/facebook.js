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
var Aboutme = /** @class */ (function () {
    function Aboutme(name, age, gender, Address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.Address = Address;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.Address = Address;
    }
    Aboutme.prototype.getName = function () {
        return this.name;
    };
    Aboutme.prototype.getGender = function () {
        return this.gender;
    };
    Aboutme.prototype.getAge = function () {
        return this.age;
    };
    Aboutme.prototype.getAddress = function () {
        return this.Address;
    };
    return Aboutme;
}());
var Interestedin = /** @class */ (function (_super) {
    __extends(Interestedin, _super);
    function Interestedin(actor, color, film, Passion, name, age, gender, Address) {
        var _this = _super.call(this, name, age, gender, Address) || this;
        _this.actor = actor;
        _this.color = color;
        _this.film = film;
        _this.Passion = Passion;
        _this.name = name;
        _this.age = age;
        _this.gender = gender;
        _this.Address = Address;
        _this.actor = actor;
        _this.film = film;
        _this.Passion = Passion;
        _this.color = color;
        return _this;
    }
    Interestedin.prototype.getFavActor = function () {
        return this.actor;
    };
    Interestedin.prototype.getFavFilem = function () {
        return this.film;
    };
    Interestedin.prototype.getFavPassion = function () {
        return this.Passion;
    };
    Interestedin.prototype.getFavColor = function () {
        return this.color;
    };
    return Interestedin;
}(Aboutme));
var UserProfile = /** @class */ (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile(actor, color, film, Passion, name, age, gender, Address) {
        var _this = _super.call(this, actor, color, film, Passion, name, age, gender, Address) || this;
        _this.actor = actor;
        _this.color = color;
        _this.film = film;
        _this.Passion = Passion;
        _this.name = name;
        _this.age = age;
        _this.gender = gender;
        _this.Address = Address;
        return _this;
    }
    return UserProfile;
}(Interestedin));
var Facebook = /** @class */ (function (_super) {
    __extends(Facebook, _super);
    function Facebook(FacebookId, actor, color, film, Passion, name, age, gender, Address) {
        var _this = _super.call(this, actor, color, film, Passion, name, age, gender, Address) || this;
        _this.FacebookId = FacebookId;
        _this.actor = actor;
        _this.color = color;
        _this.film = film;
        _this.Passion = Passion;
        _this.name = name;
        _this.age = age;
        _this.gender = gender;
        _this.Address = Address;
        _this.FacebookId;
        return _this;
    }
    Facebook.prototype.getFacebookId = function () {
        return this.FacebookId;
    };
    return Facebook;
}(UserProfile));
var user1 = new Facebook(1234, "sarukhKkhan", "red", "tarzan", "web desigining", "Yogesh", 24, "male", "bangalore");
console.log("<-------------user1 details------------------>");
console.log("<-------------Facebook Id------------>");
console.log(user1.getFacebookId());
console.log("<-------------Name------------>");
console.log(user1.getName());
console.log("<-------------Age------------>");
console.log(user1.getAge());
console.log("<-------------Gender------------>");
console.log(user1.getGender());
console.log("<-------------Address------------>");
console.log(user1.getAddress());
console.log("<-------------Fav actor------------>");
console.log(user1.getFavActor());
console.log("<------------  Fav color------------>");
console.log(user1.getFavColor());
console.log("<-------------Fav Passion------------>");
console.log(user1.getFavPassion());
console.log("<-------------Facebook Id------------>");
console.log(user1.getFacebookId());
