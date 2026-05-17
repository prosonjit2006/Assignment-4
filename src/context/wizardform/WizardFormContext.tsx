import { createContext } from "react";
import type { wizardformcontexttype } from "../../typescript/interface/wizardform.interface";

const WizardFormContext = createContext<wizardformcontexttype | null>(null);

export default WizardFormContext;
