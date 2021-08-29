import {
  ADD_SEARCH,
  CLEAR_SEARCH,
  ERROR_SEARCH,
  ADD_SUPPLIER_DESCRIPTION,
} from "../actions/actions";

const initialState = {
  responses: {
    habrCareer: [],
    hhRu: [],
    rospatent: [],
    RBC: [],
    suppliers: [],
    okved: [],
    // okved: [
    //   {
    //     link: "/contragent/304526219600028",
    //     name: "ИП ЛАЗАРЕНКО ГАЛИНА НИКОЛАЕВНА",
    //     other: [
    //       {
    //         name: "Статус организации: ",
    //         value: "Ликвидирована",
    //       },
    //       {
    //         name: "Город: ",
    //         value: "Нижний Новгород",
    //       },
    //       {
    //         name: "Адрес: ",
    //         value: "Нижегородская область, город Нижний Новгород",
    //       },
    //       {
    //         name: "ОГРН: ",
    //         value: "304526219600028",
    //       },
    //       {
    //         name: "ИНН: ",
    //         value: "526201034423",
    //       },
    //       {
    //         name: "ОКВЭД: ",
    //         value: "41.1 Разработка строительных проектов",
    //       },
    //       {
    //         name: "Дата регистрации: ",
    //         value: "23 декабря 1999",
    //       },
    //     ],
    //   },
    //   {
    //     link: "/contragent/1037867008882",
    //     name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОИТЕЛЬНАЯ КОМПАНИЯ "НОРТОН"',
    //     other: [
    //       {
    //         name: "Статус организации: ",
    //         value: "Ликвидирована",
    //       },
    //       {
    //         name: "Город: ",
    //         value: "Санкт-Петербург",
    //       },
    //       {
    //         name: "Адрес: ",
    //         value: "191028, Санкт-Петербург, Фурштатская улица, 18, -, -",
    //       },
    //       {
    //         name: "Генеральный Директор: ",
    //         value: "ШУЛЬГИН ВАЛЕРИЙ ВИТАЛЬЕВИЧ",
    //       },
    //       {
    //         name: "ОГРН: ",
    //         value: "1037867008882",
    //       },
    //       {
    //         name: "ИНН: ",
    //         value: "7841006194",
    //       },
    //       {
    //         name: "Уставный капитал: ",
    //         value: "10,0 тыс ₽",
    //       },
    //       {
    //         name: "ОКВЭД: ",
    //         value: "41.1 Разработка строительных проектов",
    //       },
    //       {
    //         name: "Дата регистрации: ",
    //         value: "22 октября 2003",
    //       },
    //     ],
    //   },
    // ],
  },
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
    case ADD_SUPPLIER_DESCRIPTION:
      return {
        // ...state,
        responses: {
          ...state.responses,
          suppliers: state?.responses?.suppliers?.map((supplier) => {
            if (supplier?.id == action.payload.id) {
              supplier.description = action.payload.description;
            }
            return supplier;
          }),
        },
        // TODO: see it, why it work
        // it not in response
        // but data in response modifyed
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
