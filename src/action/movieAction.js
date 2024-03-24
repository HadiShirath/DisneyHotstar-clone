export const KEYWORD_MOVIE = "KEYWORD_MOVIE";

export const saveKeywordMovie = (search) => ({
  type: KEYWORD_MOVIE,
  payload: {
    keyword: search,
  },
});
