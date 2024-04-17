var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('data.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    return [2 /*return*/, jsonData];
            }
        });
    });
}
var CURRENTYEAR = 1991;
var PROMOTION = [
    [1, "First Year"],
    [2, "Second Year"],
    [3, "Third Year"],
    [4, "Fourth Year"],
    [5, "Fifth Year"],
    [6, "Sixth Year"]
];
var People = /** @class */ (function () {
    function People(jsonObj) {
        this.name = jsonObj.firstName + " " + jsonObj.lastName;
        this.description = jsonObj.description;
        this.arrivalDate = jsonObj.arrivalDate;
    }
    return People;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(jsonObj) {
        var _this = _super.call(this, jsonObj) || this;
        _this.category = jsonObj.assignment;
        return _this;
    }
    return Teacher;
}(People));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(jsonObj) {
        var _this = _super.call(this, jsonObj) || this;
        _this.category = jsonObj.house;
        return _this;
    }
    return Student;
}(People));
var DisplayArray = /** @class */ (function () {
    function DisplayArray(initialStudents, initialTeachers) {
        this.students = initialStudents;
        this.teachers = initialTeachers;
        this.sortStudents();
        this.sortTeachers();
    }
    // public addStudent(student: Student) {
    //   this.students.push(student);
    //   let size: number = this.students.length;
    //   let index: number = size-1;
    //   let current: number = size;
    //   while (index > 0) { // Add at the end and exchange places until the place is the right one by comparing by sortByArrivalDate
    //   }
    // }
    DisplayArray.prototype.sortByArrivalDate = function (a, b) {
        var dateA = new Date(a.arrivalDate.split("/").reverse().join("-"));
        var dateB = new Date(b.arrivalDate.split("/").reverse().join("-"));
        if (dateA < dateB)
            return -1;
        return dateA > dateB ? 1 : 0;
    };
    DisplayArray.prototype.sortByHouseAndName = function (a, b) {
        var houseA = a.category;
        var houseB = b.category;
        if (houseA === houseB) {
            var nameA = a.name;
            var nameB = b.name;
            if (nameA === nameB)
                return 0;
            return nameA > nameB ? 1 : -1;
        }
        return houseA > houseB ? 1 : -1;
    };
    DisplayArray.prototype.sortStudents = function () {
        console.log(this.students);
        this.students.sort(this.sortByHouseAndName);
        console.log(this.students);
    };
    DisplayArray.prototype.sortTeachers = function () {
        this.teachers.sort(this.sortByArrivalDate);
    };
    DisplayArray.prototype.studentFormatDate = function (stringDate) {
        var year = parseInt(stringDate.slice(6));
        var whichYear = CURRENTYEAR - year + 1;
        return PROMOTION[whichYear - 1][1];
    };
    DisplayArray.prototype.teacherFormatDate = function (stringDate) {
        return stringDate.replaceAll("/", ".");
    };
    DisplayArray.prototype.createListItem = function (identity, charPres, category, date) {
        var listItem = document.createElement("li");
        var pplDiv = document.createElement("div");
        pplDiv.classList.add("ppl");
        var metadataDiv = document.createElement("div");
        metadataDiv.classList.add("metadata");
        var pplTextDiv = document.createElement("div");
        pplTextDiv.classList.add("ppl-text");
        var identityP = document.createElement("p");
        identityP.classList.add("identity");
        identityP.textContent = identity;
        var charPresP = document.createElement("p");
        charPresP.classList.add("char-pres");
        charPresP.textContent = charPres;
        pplTextDiv.appendChild(identityP);
        pplTextDiv.appendChild(charPresP);
        var dateContainerDiv = document.createElement("div");
        dateContainerDiv.classList.add("date-container");
        var calendarImg = document.createElement("img");
        calendarImg.src = "calendar.svg";
        calendarImg.alt = "Calendar Logo";
        calendarImg.classList.add("calendar-logo");
        var dateP = document.createElement("p");
        dateP.classList.add("date");
        dateP.textContent = date;
        dateContainerDiv.appendChild(calendarImg);
        dateContainerDiv.appendChild(dateP);
        metadataDiv.appendChild(pplTextDiv);
        metadataDiv.appendChild(dateContainerDiv);
        var categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        var colorOption = category.toLowerCase();
        categoryDiv.classList.add(colorOption);
        var categoryP = document.createElement("p");
        categoryP.textContent = category;
        categoryDiv.appendChild(categoryP);
        pplDiv.appendChild(metadataDiv);
        pplDiv.appendChild(categoryDiv);
        listItem.appendChild(pplDiv);
        return listItem;
    };
    DisplayArray.prototype.drawStudents = function () {
        var studentHTMLList = document.querySelector(".student-list");
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            var listItem = this.createListItem(student.name, student.description, student.category, this.studentFormatDate(student.arrivalDate));
            studentHTMLList.appendChild(listItem);
        }
    };
    DisplayArray.prototype.drawTeachers = function () {
        var teacherHTMLList = document.querySelector(".teacher-list");
        for (var _i = 0, _a = this.teachers; _i < _a.length; _i++) {
            var teacher = _a[_i];
            var listItem = this.createListItem(teacher.name, teacher.description, teacher.category, this.teacherFormatDate(teacher.arrivalDate));
            teacherHTMLList.appendChild(listItem);
        }
    };
    return DisplayArray;
}());
fetchData().then(function (jsonObject) {
    var studentArray = new Array();
    var teacherArray = new Array();
    for (var _i = 0, jsonObject_1 = jsonObject; _i < jsonObject_1.length; _i++) {
        var person = jsonObject_1[_i];
        person.isTeacher ? teacherArray.push(new Teacher(person)) : studentArray.push(new Student(person));
    }
    var arrays = new DisplayArray(studentArray, teacherArray);
    arrays.drawStudents();
    arrays.drawTeachers();
});
