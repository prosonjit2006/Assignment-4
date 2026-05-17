import { useEffect, useReducer, type ReactNode } from "react";
import WizardFormContext from "./WizardFormContext";
import {
  wizardformInitialData,
  wizardformReducer,
} from "../../reducer/wizardform.reducer";

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

  const handleNext = () => {
    dispatchFormData({ type: "NEXT_STEP" });
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
