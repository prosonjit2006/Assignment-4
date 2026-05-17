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

  //  get current step fields

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

  //  preview section

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
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: 1,
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 1,
              wordBreak: "break-word",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
              }}
            >
              {field.label}
            </Typography>

            <Typography
              sx={{
                textAlign: {
                  xs: "left",
                  sm: "right",
                },
                width: "100%",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
              }}
            >
              {state.formData[field.name as keyof typeof state.formData]}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  // final submit

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

        // responsive container padding
        padding: {
          xs: 1.5,
          sm: 2,
          md: 3,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",

          // fixed responsive width issue
          maxWidth: {
            xs: "100%",
            sm: "700px",
            md: "900px",
          },

          backgroundColor: "white",
          borderRadius: {
            xs: "14px",
            md: "20px",
          },

          padding: {
            xs: "18px",
            sm: "25px",
            md: "40px",
          },

          boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {/* header */}

        <Box sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#111827",
              mb: 1,

              // responsive heading
              fontSize: {
                xs: "26px",
                sm: "32px",
                md: "38px",
              },
            }}
          >
            Student Registration
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
            }}
          >
            Complete all steps to finish your registration
          </Typography>
        </Box>

        {/* stepper */}

        <Box
          sx={{
            mb: { xs: 4, md: 6 },

            // allow horizontal scroll on mobile
            overflowX: "auto",

            // remove scrollbar visibility
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Stepper
            activeStep={state.step}
            alternativeLabel
            sx={{
              minWidth: {
                xs: "650px",
                md: "100%",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                      },
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* form area */}

        <Box
          sx={{
            minHeight: "300px",
            border: "1px solid #e5e7eb",
            borderRadius: {
              xs: "12px",
              md: "16px",
            },

            padding: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* step title */}

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#111827",

              // responsive title
              fontSize: {
                xs: "22px",
                sm: "28px",
              },
            }}
          >
            {steps[state.step]}
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
              mb: 4,
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
            }}
          >
            Fill in the required information.
          </Typography>

          {/* dynamic form */}

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
                  size="small"
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

          {/* buttons */}

          <Box
            sx={{
              display: "flex",

              // responsive button layout
              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 2,
              justifyContent: "space-between",
              mt: 5,
            }}
          >
            <Button
              disabled={state.step === 0}
              onClick={handlePrevious}
              variant="outlined"
              fullWidth
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                paddingX: 4,
                paddingY: 1.2,
                order: {
                  xs: 2,
                  sm: 1,
                },
              }}
            >
              Previous
            </Button>

            {state.step === 3 ? (
              <Button
                onClick={handleFinalSubmit}
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  paddingX: 4,
                  paddingY: 1.2,
                  backgroundColor: "#16a34a",
                  order: {
                    xs: 1,
                    sm: 2,
                  },
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  paddingX: 4,
                  paddingY: 1.2,
                  backgroundColor: "#111827",
                  order: {
                    xs: 1,
                    sm: 2,
                  },
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
