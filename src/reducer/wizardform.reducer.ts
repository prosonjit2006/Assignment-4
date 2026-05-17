import type { wizardformInitialDataType } from "../typescript/interface/wizardform.interface";
import type { WizardFormAction } from "../typescript/types/wizardform.types";

export const wizardformInitialData: wizardformInitialDataType = {
  isLoading: false,
  isError: null,
  step: 0,

  formData: {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    personalMessage: "",

    state: "",
    city: "",
    pin: "",
    landmark: "",
    addressMessage: "",

    tenth: "",
    twelfth: "",
    ug: "",
    pg: "",
    additional: "",
  },
};

export const wizardformReducer = (
  state: wizardformInitialDataType,
  action: WizardFormAction,
): wizardformInitialDataType => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    case "RESET_FORM":
      return wizardformInitialData;
    default:
      return state;
  }
};
