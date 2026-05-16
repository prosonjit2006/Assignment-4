import { useReducer, type ReactNode } from "react";
import WizardFormContext from "./WizardFormContext";
import {
  wizardformInitialData,
  wizardformReducer,
} from "../../reducer/wizardform.reducer";

export const WizardFormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatchFormData] = useReducer(
    wizardformReducer,
    wizardformInitialData,
  );

  return <WizardFormContext value={{ state }}>{children}</WizardFormContext>;
};
