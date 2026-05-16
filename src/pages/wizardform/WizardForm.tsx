import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import DynamyicInput from "../../components/DynamyicInput";
import { personalDetailsInput } from "../../services/json/personalinput.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalDetailsSchema } from "../../services/validation/persolandetails.validation";

const steps = ["Personal Details", "Address", "Academic Details"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set<number>());

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalDetailsSchema),
    defaultValues: {},
  });

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  // const isStepSkipped = (step: number) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#9ca3af",
                    }}
                  >
                    Optional
                  </Typography>
                );
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
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
              );
            })}
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
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#16a34a",
                  mb: 2,
                }}
              >
                Registration Completed
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                }}
              >
                All steps completed successfully.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 4,
                }}
              >
                <Button
                  onClick={handleReset}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    paddingX: 4,
                    backgroundColor: "#111827",
                  }}
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* STEP TITLE */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#111827",
                }}
              >
                {steps[activeStep]}
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  mb: 4,
                }}
              >
                Fill in the required information for this step.
              </Typography>

              {/* TEMPORARY FORM PLACEHOLDER */}
              <Box
                component="form"
                // onSubmit={}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {personalDetailsInput.map((item) => (
                  <DynamyicInput
                    key={item.name}
                    field={item}
                    register={register}
                    errors={errors}
                  />
                ))}

                <Button
                  id="submitBTN"
                  type="submit"
                  variant="contained"
                  sx={{ visibility: "hidden" }}
                >
                  Save Data
                </Button>
                {/* on clicking on the next this btn will tiggared  */}
              </Box>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 5,
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
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

                <Button
                  // type="submit"
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Container>
  );
}
