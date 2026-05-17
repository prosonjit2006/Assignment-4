export interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  personalMessage: string;

  state: string;
  city: string;
  pin: string;
  landmark: string;
  addressMessage: string;

  tenth: string;
  twelfth: string;
  ug: string;
  pg: string;
  additional: string;
}

export interface wizardformInitialDataType {
  isLoading: boolean;
  isError: string | null;
  step: number;

  formData: FormData;
}

export interface wizardformcontexttype {
  state: wizardformInitialDataType;

  handleNext: () => void;

  handlePrevious: () => void;

  updateField: (field: string, value: string) => void;
  resetForm: () => void;
}
