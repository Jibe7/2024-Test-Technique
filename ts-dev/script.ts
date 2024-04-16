async function fetchData() {
    const response: Response = await fetch('data.json');
    const jsonData = await response.json();
    return jsonData;
  }
  
const CURRENTYEAR: number = 1991;
let PROMOTION = [
  [1, "First"],
  [2, "Second"],
  [3, "Third"],
  [4, "Fourth"],
  [5, "Fifth"],
  [6, "Sixth"]
];


class People {
  public name: string;
  public description: string;
  public arrivalDate: string;
  public category: string;

  constructor(jsonObj) {
    this.name = jsonObj.firstName + jsonObj.lastName;
    this.description = jsonObj.description;
    this.arrivalDate = jsonObj.arrivalDate;
  }

}

class Teacher extends People {

  constructor(jsonObj) {
    super(jsonObj);
    this.category = jsonObj.assignment;
  }

}

class Student extends People {
  
  constructor(jsonObj) {
    super(jsonObj)
    this.category = jsonObj.house;
  }
  
}  

class DisplayArray {
  private students: Array<Student>;
  private teachers: Array<Teacher>;
  
  constructor(initialStudents: Array<Student>, initialTeachers: Array<Teacher>) {
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
  
  private sortByArrivalDate(a: People, b: People) {
    const dateA = new Date(a.arrivalDate.split("/").reverse().join("-"))
    const dateB = new Date(b.arrivalDate.split("/").reverse().join("-"))
    if (dateA < dateB) return -1;
    return dateA > dateB ? 1 : 0;
  }
  
  private sortStudents() {
    this.students.sort(this.sortByArrivalDate);
  }
  
  private sortTeachers() {
    this.teachers.sort(this.sortByArrivalDate);
  }
  
  private studentFormatDate(stringDate: string) {
    let year: number = parseInt(stringDate.slice(6));
    let whichYear: number = CURRENTYEAR - year + 1;
    
    return PROMOTION[whichYear-1][1] as string;
  }
  
  private teacherFormatDate(stringDate) {
    return stringDate.replace("/", ".");
  }

  private createListItem(identity: string, charPres: string, category: string, date: string) {
    const listItem: HTMLLIElement = document.createElement("li");
    const pplDiv: HTMLDivElement = document.createElement("div");
    pplDiv.classList.add("ppl");
  
    const metadataDiv: HTMLDivElement = document.createElement("div");
    metadataDiv.classList.add("metadata");
  
    const pplTextDiv: HTMLDivElement = document.createElement("div");
    pplTextDiv.classList.add("ppl-text");
  
    const identityP: HTMLParagraphElement = document.createElement("p");
    identityP.classList.add("identity");
    identityP.textContent = identity;
  
    const charPresP: HTMLParagraphElement = document.createElement("p");
    charPresP.classList.add("char-pres");
    charPresP.textContent = charPres;
  
    pplTextDiv.appendChild(identityP);
    pplTextDiv.appendChild(charPresP);
  
    const dateContainerDiv: HTMLDivElement = document.createElement("div");
    dateContainerDiv.classList.add("date-container");
  
    const calendarImg:HTMLImageElement = document.createElement("img");
    calendarImg.src = "calendar.svg";
    calendarImg.alt = "Calendrier";
    calendarImg.classList.add("calendar-logo");
  
    const dateP:HTMLParagraphElement = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = date;
  
    dateContainerDiv.appendChild(calendarImg);
    dateContainerDiv.appendChild(dateP);
  
    metadataDiv.appendChild(pplTextDiv);
    metadataDiv.appendChild(dateContainerDiv);
  
    const categoryDiv: HTMLDivElement = document.createElement("div");
    categoryDiv.classList.add("category");
  
    const categoryP:HTMLParagraphElement = document.createElement("p");
    categoryP.textContent = category;
  
    categoryDiv.appendChild(categoryP);
    categoryDiv.classList.add("additional-class"); // Add another class here
  
    pplDiv.appendChild(metadataDiv);
    pplDiv.appendChild(categoryDiv);
  
    listItem.appendChild(pplDiv);
  
    return listItem;
  }

  public drawStudents() {
    const studentHTMLList = document.querySelector(".student-list") as HTMLUListElement;
    for (const student of this.students) {
      const listItem = this.createListItem(student.name, student.description, student.category, this.studentFormatDate(student.arrivalDate));
      studentHTMLList.appendChild(listItem);
    }
  }
  
  public drawTeachers() {
    const teacherHTMLList = document.querySelector("teacher-list") as HTMLUListElement;
    for (const teacher of this.teachers) {
      const listItem = this.createListItem(teacher.name, teacher.description, teacher.category, this.teacherFormatDate(teacher.arrivalDate));
      teacherHTMLList.appendChild(listItem);
    }
  }
}

fetchData().then((jsonObject) => {
  let studentArray = new Array();
  let teacherArray = new Array();
  for (const person of jsonObject) {
    person.isTeacher ? teacherArray.push(person) : studentArray.push(person);
  }
  let arrays = new DisplayArray(studentArray, teacherArray);
  arrays.drawStudents();
  arrays.drawTeachers();
})

