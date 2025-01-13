const diplomas = [
  {
    name: "Information Technology",
    id: "information-technology",
    modules: [
      {
        name: "C218 | UI/UX Design for Apps",
        id: "ui-ux-design-for-apps",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        lecturer: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        name: "C346 | Mobile App Development",
        id: "mobile-app-development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        lecturer: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    modules: [
      {
        name: "C237 | Software Application Development",
        id: "software-application-development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        lecturer: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        name: "C372 | Payment Technologies",
        id: "payment-technologies",
        desc: "This module introduces students to different payment technologies and systems.",
        lecturer: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
];

export function getModule({ moduleId, dipId }) {
  return diplomas
    .find(({ id }) => id === dipId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(dipId) {
  return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
