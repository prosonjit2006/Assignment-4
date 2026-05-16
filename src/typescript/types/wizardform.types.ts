export type WizardFormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_FIELD"; 
    payload: { field: string; value: string } 
};
