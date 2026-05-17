import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, TextField } from "@mui/material";
import { useContext } from "react";
import WizardFormContext from "../../context/wizardform/WizardFormContext";
// import DynamyicInput from "../../components/DynamyicInput";
import { personalDetailsInput } from "../../services/json/personalinput.json";
import { addressDetailsInput } from "../../services/json/addressinput.json";
import { academicDetailsInput } from "../../services/json/academicinput.json";
import { toast } from "sonner";

const steps = ["Personal Details", "Address", "Academic Details", "Preview"];

export default function HorizontalLinearStepper() {
  const wizardcontext = useContext(WizardFormContext);

  if (!wizardcontext) {
    return null;
  }

  const { state, handleNext, handlePrevious, updateField } = wizardcontext;

  // ============================================
  // GET CURRENT STEP FIELDS
  // ============================================

  const getCurrentFields = () => {
    switch (state.step) {
      case 0:
        return personalDetailsInput;

      case 1:
        return addressDetailsInput;

      case 2:
        return academicDetailsInput;

      default:
        return [];
    }
  };

  // ============================================
  // PREVIEW SECTION
  // ============================================

  const allFields = [
    ...personalDetailsInput,
    ...addressDetailsInput,
    ...academicDetailsInput,
  ];

  const renderPreview = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {allFields.map((field) => (
          <Box
            key={field.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {field.label}
            </Typography>

            <Typography>
              {state.formData[field.name as keyof typeof state.formData]}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  // ============================================
  // FINAL SUBMIT
  // ============================================

  const handleFinalSubmit = () => {
    console.log(state.formData);

    toast.success("Form submitted successfully");
    wizardcontext.resetForm();
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "850px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: {
            xs: "25px",
            md: "40px",
          },
          boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}

        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#111827",
              mb: 1,
            }}
          >
            Student Registration
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
            }}
          >
            Complete all steps to finish your registration
          </Typography>
        </Box>

        {/* STEPPER */}

        <Box sx={{ mb: 6 }}>
          <Stepper activeStep={state.step}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* FORM AREA */}

        <Box
          sx={{
            minHeight: "300px",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: 4,
            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* STEP TITLE */}

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#111827",
            }}
          >
            {steps[state.step]}
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
              mb: 4,
            }}
          >
            Fill in the required information.
          </Typography>

          {/* DYNAMIC FORM */}

          {state.step === 3 ? (
            renderPreview()
          ) : (
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {getCurrentFields().map((item) => (
                <TextField
                  key={item.name}
                  fullWidth
                  type={item.type}
                  label={item.label}
                  placeholder={item.palceholder}
                  value={
                    state.formData[item.name as keyof typeof state.formData]
                  }
                  onChange={(e) => updateField(item.name, e.target.value)}
                  required={item.required}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                // <DynamyicInput
                //   key={item.name}
                //   field={item}
                //   value={
                //     state.formData[item.name as keyof typeof state.formData]
                //   }
                //   onChange={(e) => updateField(item.name, e.target.value)}
                // />
              ))}
            </Box>
          )}

          {/* BUTTONS */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 5,
            }}
          >
            <Button
              disabled={state.step === 0}
              onClick={handlePrevious}
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                paddingX: 4,
                paddingY: 1,
              }}
            >
              Previous
            </Button>

            {state.step === 3 ? (
              <Button
                onClick={handleFinalSubmit}
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  paddingX: 4,
                  paddingY: 1,
                  backgroundColor: "#16a34a",
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  paddingX: 4,
                  paddingY: 1,
                  backgroundColor: "#111827",
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
