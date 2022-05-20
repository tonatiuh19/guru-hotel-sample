import { BusinessReducer } from "../../interfaces/BusinessReducer.interface";

const initialData = {
  businessesId: "",
};

const businessesReducer = (state = initialData, action: BusinessReducer) => {
  switch (action.type) {
    case "SAVE_ID":
      return {
        ...state,
        businessesId: state.businessesId.concat(
          `${action.payload}*`,
          state.businessesId
        ),
      };
    default:
      return state;
  }
};

export default businessesReducer;
