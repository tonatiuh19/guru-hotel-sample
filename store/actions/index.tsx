export const saveId = (id: string) => {
  return {
    type: "SAVE_ID",
    payload: id,
  };
};
