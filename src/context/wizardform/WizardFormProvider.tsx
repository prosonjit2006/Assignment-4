import { useEffect, useReducer, type ReactNode } from "react";
import WizardFormContext from "./WizardFormContext";
import {
  wizardformInitialData,
  wizardformReducer,
} from "../../reducer/wizardform.reducer";
import { personalDetailsInput } from "../../services/json/personalinput.json";
import { addressDetailsInput } from "../../services/json/addressinput.json";
import { academicDetailsInput } from "../../services/json/academicinput.json";
import { toast } from "sonner";

const LOCAL_STORAGE_KEY = "wizard-form-data";

const getInitialState = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedData) {
    return JSON.parse(savedData);
  }

  return wizardformInitialData;
};

export const WizardFormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatchFormData] = useReducer(
    wizardformReducer,
    getInitialState(),
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const validateCurrentStep = () => {
    
    let currentFields: typeof personalDetailsInput = [];
    
    switch (state.step) {
      case 0:
        currentFields = personalDetailsInput;
        break;

      case 1:
        currentFields = addressDetailsInput;
        break;

      case 2:
        currentFields = academicDetailsInput;
        break;

      default:
        currentFields = [];
    }

    const hasEmptyRequiredField = currentFields.some((field) => {
      if (!field.required) {
        return false;
      }

      const value = state.formData[field.name as keyof typeof state.formData];

      return !value?.trim();
    });

    if (hasEmptyRequiredField) {
      toast.error("Please fill all required fields *");

      return false;
    }

    return true;
  };

  const handleNext = () => {
    const isValid = validateCurrentStep();

    if (!isValid) return;

    dispatchFormData({
      type: "NEXT_STEP",
    });
  };

  const handlePrevious = () => {
    dispatchFormData({ type: "PREVIOUS_STEP" });
  };

  const updateField = (field: string, value: string) => {
    dispatchFormData({ type: "UPDATE_FIELD", payload: { field, value } });
  };

  const resetForm = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);

    dispatchFormData({
      type: "RESET_FORM",
    });
  };

  return (
    <WizardFormContext.Provider
      value={{ state, handleNext, handlePrevious, updateField, resetForm }}
    >
      {children}
    </WizardFormContext.Provider>
  );
};
