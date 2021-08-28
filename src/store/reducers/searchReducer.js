import { ADD_SEARCH, CLEAR_SEARCH, ERROR_SEARCH } from "../actions/actions";

const initialState = {
  responses: {
    habrCareer: [],
    hhRu: [],
    rospatent: [],
  },
  //     [
  //   {
  //     // sourceName: "Хабр Карьера",
  //     habrCareer: [],
  //     sourceData: [
  //       {
  //         addresses: ["Россия, Москва, ул. Поклонная, дом 3"],
  //         contacts: [
  //           {
  //             link: "mailto:hr@sber-zvuk.com",
  //             type: "Email: ",
  //             value: "hr@sber-zvuk.com",
  //           },
  //           {
  //             link: "https://www.facebook.com/sberzvuk",
  //             type: "Facebook: ",
  //             value: "sberzvuk",
  //           },
  //           {
  //             link: "https://vk.com/sberzvuk",
  //             type: "Вконтакте: ",
  //             value: "sberzvuk",
  //           },
  //           {
  //             link: "https://twitter.com/sberzvuk",
  //             type: "Twitter: ",
  //             value: "sberzvuk",
  //           },
  //         ],
  //         description: [
  //           "\u003cp\u003eМы — команда увлеченных людей и делаем сервис, который позволяет превратить обычный, даже самый рутинный, момент жизни в яркий и насыщенный.\u003cbr/\u003e\u003cbr/\u003eОчень может быть, что скоро ты будешь менять мир аудио вместе с нами.\u003cbr/\u003e\u003cbr/\u003eНаша цель — стать аудиопривычкой современного человека.\u003cbr/\u003e\u003cstrong\u003e\u003cbr/\u003eКак мы живем:\u003cbr/\u003e\u003c/strong\u003e\u003cbr/\u003eМы ценим свободу. Ты всегда можешь свободно выражать свои мысли и идеи, а выбор пути решения задач всегда за тобой.\u003cbr/\u003e\u003cbr/\u003eМы — творцы. Знай, что тут ты можешь смело создавать новое, экспериментировать и творить, развивая себя.\u003cbr/\u003e\u003cbr/\u003eМы все на одной волне. Каким бы сложным не был проект, какие бы сроки не стояли, ты точно знаешь, что найдешь помощь и поддержку среди коллег.\u003cbr/\u003e\u003cbr/\u003eВсе, что тебе нужно для комфортной работы — всегда под рукой, а если чего-то не хватает, то всегда можно об этом сказать.\u003c/p\u003e",
  //           "\u003cp\u003e\u003c/p\u003e",
  //           "\u003cp\u003e\u003c/p\u003e",
  //         ],
  //         employees: [
  //           {
  //             avatar:
  //               "https://habrastorage.org/getpro/moikrug/uploads/user/100/039/248/0/avatar/medium_fc1b16194fa5f57eeb4b70622a3b724f.jpg",
  //             employee_url: "https://career.habr.com/mazhgka",
  //             position: "IT recruiter",
  //             username: "Мария Коновалова",
  //           },
  //           {
  //             avatar:
  //               "https://career.habr.com/assets/defaults/avatars/female_default-77664e301a7e76def810f4cd2c8679a2.png",
  //             employee_url: "https://career.habr.com/v-chemodanova",
  //             position: "HR manager",
  //             username: "Валерия Чемоданова",
  //           },
  //           {
  //             avatar:
  //               "https://habrastorage.org/getpro/moikrug/uploads/user/100/047/308/2/avatar/medium_4806d3294c24cde79cbb476814bd1fe2.jpeg",
  //             employee_url: "https://career.habr.com/eleonoracherkasskaya",
  //             position: "HR",
  //             username: "Элеонора Черкасская",
  //           },
  //           {
  //             avatar:
  //               "https://habrastorage.org/getpro/moikrug/uploads/user/841/308/557/avatar/medium_a462e4567073bd2f4d3435c957c4ab48.jpg",
  //             employee_url: "https://career.habr.com/aleksandra-tumanyan",
  //             position: "Team Lead recruitment",
  //             username: "Александра Савочкина",
  //           },
  //           {
  //             avatar:
  //               "https://habrastorage.org/getpro/moikrug/uploads/user/100/021/335/4/avatar/medium_78fbd923d41e685e5733250cc0c89178.jpg",
  //             employee_url: "https://career.habr.com/maria-skokova",
  //             position: "HR",
  //             username: "Maria Skokova",
  //           },
  //         ],
  //         logo: "https://habrastorage.org/getpro/moikrug/uploads/company/100/005/046/6/logo/medium_5f8c1fcc108a9e953d6b66452dd08987.png",
  //         name: "СберЗвук",
  //         site: "https://sber-zvuk.com/",
  //         skills: [
  //           "Python",
  //           "Рекрутмент",
  //           "Подбор IT-специалистов",
  //           "PostgreSQL",
  //           "MongoDB",
  //           "Docker",
  //           "Git",
  //           "Поиск талантов",
  //           "Высоконагруженные системы",
  //           "Java",
  //           "Проведение интервью",
  //           "Управление людьми",
  //           "Управление проектами",
  //           "Построение команды",
  //           "SQL",
  //           "JavaScript",
  //           "Django",
  //           "Организация мероприятий",
  //           "Обработка резюме",
  //           "Английский язык",
  //           "Ручное тестирование",
  //           "Разработка тест-кейсов",
  //           "Node.js",
  //           "ReactJS",
  //           "Microsoft Office",
  //           "Onboarding",
  //           "Linux",
  //           "asyncio",
  //           "Консультирование",
  //           "Agile",
  //         ],
  //       },
  //     ],
  //   },
  // ],
  isError: false,
  message: "",
};

export const addResponseToStore = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        responses: action.payload,
      };
    case ERROR_SEARCH:
      return {
        ...state,
        isError: true,
        message: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        isError: false,
        message: "",
      };
    default:
      return state;
  }
};
