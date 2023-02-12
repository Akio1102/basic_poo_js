class Comment {
  constructor({ content, studentName, studentRole = "estudiantes" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("se esta reproduciendo desed la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}
class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name() {
    return this._name;
  }
  set name(nuevoNombresito) {
    if (nuevoNombresito === "Malardo") {
      console.warn("Malo usted");
    } else {
      this._name = nuevoNombresito;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Basica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo HTML & CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico Definitivo HTML & CSS",
  lang: "english",
});

class LearningPaths {
  constructor({ name, teacher, courses = [] }) {
    this.name = name;
    this.teacher = teacher;
    this.courses = courses;
  }
}

const escuelaData = new LearningPaths({
  name: "Escuela de Big Data",
  teacher: "JuanDC",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = [] = approvedCourses;
    this.learningPaths = [] = learningPaths;
  }

  publicarComentario(commentContent) {
    const commet = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    commet.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo siento, " + this.name + ", Solo puede mirar sapo");
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo siento, " + this.name + ", Solo puede mirar sapo");
    }
  }
}
class ExperStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}
class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
  publicarComentario(commentContent) {
    const commet = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
    commet.publicar();
  }
}

const akio = new ExperStudent({
  name: "Akio",
  username: "Akio",
  email: "Akio",
  facebook: "Akio",
  learningPaths: [escuelaData],
});
const akio2 = new FreeStudent({
  name: "Akio",
  username: "Akio",
  email: "Akio",
  facebook: "Akio",
  learningPaths: [escuelaData],
});
const akio3 = new BasicStudent({
  name: "Akio",
  username: "Akio",
  email: "Akio",
  facebook: "Akio",
  learningPaths: [escuelaData],
});
const Cristian = new TeacherStudent({
  name: "Cristian",
  username: "Cristian",
  email: "Cristian",
  facebook: "Cristian",
});
