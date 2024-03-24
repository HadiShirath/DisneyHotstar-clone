import { KEYWORD_MOVIE } from "../../action/movieAction";

const initialState = {
  keyword: "false",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case KEYWORD_MOVIE:
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    default:
      return state;
  }
}
