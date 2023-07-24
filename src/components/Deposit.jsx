import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";

import createTransaction from "../helpers/createTransaction";

const Deposit = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, loggedInUser, setLoggedInUser } = useUserContext();
  const [balance, setBalance] = useState();

  const validationSchema = yup.object({
    depositAmount: yup
      .number()
      .min(1, "Must Be Greater Or Equal Than $1")
      .required("Deposit Amount Is Required")
      .typeError("The Deposit Amount Must Be A Number"),
  });

  const formik = useFormik({
    initialValues: {
      depositAmount: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      if (!loggedInUser) {
        toast.error("Please Login");
        return;
      }

      const depAmount = parseFloat(formik.values.depositAmount);
      let newBalance = 0;
      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance += depAmount;
          newBalance = u.balance;
          const newTransaction = createTransaction("Deposit", depAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      setUser(newData);
      setLoggedInUser((prev) => ({ ...prev, balance: newBalance }));
      formik.resetForm();
      toast.success("Deposit Successful");
      return;
    },
  });

  useEffect(() => {
    if (loggedInUser) {
      setBalance(loggedInUser.balance);
    }
  }, [loggedInUser]);

  useEffect(() => {
    const { depositAmount } = formik.values;

    if (depositAmount.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9fe2bf",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9fe2bf",
            },
          },
          input: {
            "&::placeholder": {
              color: "#9fe2bf",
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: "#9fe2bf",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <div
          style={{
            width: "500px",
            padding: "24px",
            borderRadius: "5px",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.1)",
            background: loggedInUser ? "white" : "rgba(255, 255, 255, 0.01)",
            border: "5px solid #228b22",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {!loggedInUser ? (
            <>
              <Typography variant="h5" style={{ marginBottom: "24px" }}>
                Deposit
              </Typography>
              <Typography>Please Login</Typography>
            </>
          ) : (
            <>
              <Typography variant="h5" style={{ marginBottom: "24px" }}>
                Deposit
              </Typography>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", fontSize: "24px" }}>
                Balance: ${balance}
              </Typography>
              <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <TextField
                  fullWidth
                  id="depositAmount"
                  name="depositAmount"
                  label="Deposit Amount"
                  placeholder="Enter deposit amount"
                  value={formik.values.depositAmount}
                  onChange={formik.handleChange}
                  error={formik.touched.depositAmount && Boolean(formik.errors.depositAmount)}
                  helperText={formik.touched.depositAmount && formik.errors.depositAmount}
                  variant="outlined"
                  InputProps={{ style: { backgroundColor: 'white' } }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isDisabled}
                  style={{ background: "#228b22", color: "#fffaf0", "&:hover": { background: "#22291f" } }}
                >
                  Deposit
                </Button>
              </form>
            </>
          )}
        </div>
        <footer
  style={{
    background: "black",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: -20,
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <p style={{ marginRight: "20px", fontFamily: "'Indie Flower', cursive", fontSize: "24px" }}>
    Tempe City Bank <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 520 520">
<polygon fill="#33383f" points="477.5,425 477.5,465 42.5,465 42.5,425 75.54,425 444.47,425"></polygon><path fill="#545b66" d="M477.5,185v40h-50h-65h-25h-65h-15c25.18,0,46.4-16.91,52.93-40H477.5z"></path><polygon fill="#757d8c" points="42.5,185 258.98,75 477.5,185"></polygon><path d="M470,130c4.15,0,7.5,3.36,7.5,7.5s-3.35,7.5-7.5,7.5c-4.141,0-7.5-3.36-7.5-7.5S465.859,130,470,130z"></path><path d="M470,355c4.15,0,7.5,3.36,7.5,7.5s-3.35,7.5-7.5,7.5c-4.141,0-7.5-3.36-7.5-7.5S465.859,355,470,355z"></path><path fill="#07cc66" d="M447.5,55c16.57,0,30,13.43,30,30s-13.43,30-30,30c-16.561,0-30-13.43-30-30S430.939,55,447.5,55z"></path><path d="M445,275c4.15,0,7.5,3.36,7.5,7.5s-3.35,7.5-7.5,7.5c-4.141,0-7.5-3.36-7.5-7.5S440.859,275,445,275z"></path><polygon fill="#3f4751" points="444.47,395 444.47,425 75.54,425 75.54,395 92.5,395 157.5,395 182.5,395 247.5,395 272.5,395 337.5,395 362.5,395 427.5,395"></polygon><polygon fill="#757d8c" points="427.5,370 427.5,395 362.5,395 362.5,370 372.5,370 417.5,370"></polygon><polygon fill="#757d8c" points="427.5,225 427.5,250 417.5,250 392.5,250 372.5,250 362.5,250 362.5,225"></polygon><polygon fill="#545b66" points="392.5,250 372.5,250 372.5,370 417.5,370 417.5,250"></polygon><path d="M392.5,325c2.77,0,5,2.24,5,5s-2.23,5-5,5c-2.76,0-5-2.24-5-5S389.74,325,392.5,325z"></path><path d="M345,55c4.15,0,7.5,3.36,7.5,7.5S349.15,70,345,70c-4.141,0-7.5-3.36-7.5-7.5S340.859,55,345,55z"></path><polygon fill="#757d8c" points="337.5,370 337.5,395 272.5,395 272.5,370 282.5,370 302.5,370 327.5,370"></polygon><polygon fill="#757d8c" points="337.5,225 337.5,250 327.5,250 282.5,250 272.5,250 272.5,225"></polygon><polygon fill="#545b66" points="302.5,370 282.5,370 282.5,250 327.5,250 327.5,370"></polygon><path fill="#ffd400" d="M257.5,115c-30.37,0-55,24.62-55,55c0,5.2,0.72,10.23,2.07,15c6.53,23.09,27.76,40,52.93,40 c25.18,0,46.4-16.91,52.93-40c1.35-4.77,2.07-9.8,2.07-15C312.5,139.62,287.88,115,257.5,115z"></path><path d="M276.85,179.32c0,2.58-0.449,4.78-1.359,6.59s-2.121,3.3-3.641,4.46c-3.24,2.45-7.43,3.46-11.46,3.63v7.89h-4.69v-7.96 c-5.99-0.52-12.43-2.44-17.54-5.84l4.89-9.73c0.96,1.22,7.47,4.71,13.4,5.51v-9.04c-1.29-0.41-5.37-1.38-9.04-3.16 c-2.89-1.41-5.28-3.36-6.43-6.36c-1.12-2.92-1.1-7.57,0.44-11.05c2.6-5.83,7.9-8.63,14.28-9.28v-6.87h4.69v6.87 c2.95,0.27,5.72,0.93,8.3,1.97s4.83,2.11,6.73,3.19l-4.891,9.25c-0.6-0.77-5.92-3.74-10.879-4.49v9.25 c0.489,0.14,4.35,0.97,8.43,2.62C274.369,169.31,276.85,173.5,276.85,179.32z M259.65,184.01c3.489-0.14,5.229-1.34,5.229-3.61 c0-1.17-0.47-2.09-1.431-2.75c-0.949-0.66-2.219-1.26-3.799-1.8V184.01z M256.45,163.2v-8.36c-3.17,0.27-4.76,1.58-4.76,3.94 c0,1.13,0.4,2.03,1.19,2.69C253.67,162.12,254.86,162.7,256.45,163.2z"></path><path fill="#545b66" d="M257.5,225h-10h-65h-25h-65h-50v-40h162.07C211.1,208.09,232.33,225,257.5,225z"></path><polygon fill="#757d8c" points="247.5,370 247.5,395 182.5,395 182.5,370 192.5,370 237.5,370"></polygon><polygon fill="#757d8c" points="247.5,225 247.5,250 237.5,250 212.5,250 192.5,250 182.5,250 182.5,225"></polygon><polygon fill="#545b66" points="212.5,250 192.5,250 192.5,370 237.5,370 237.5,250"></polygon><circle cx="212.5" cy="330" r="5"></circle><path d="M175,65c4.15,0,7.5,3.36,7.5,7.5S179.15,80,175,80c-4.14,0-7.5-3.36-7.5-7.5S170.86,65,175,65z"></path><polygon fill="#757d8c" points="157.5,370 157.5,395 92.5,395 92.5,370 102.5,370 147.5,370"></polygon><polygon fill="#757d8c" points="157.5,225 157.5,250 147.5,250 122.5,250 102.5,250 92.5,250 92.5,225"></polygon><polygon fill="#545b66" points="122.5,250 147.5,250 147.5,370 102.5,370 102.5,250"></polygon><path fill="#07cc66" d="M82.5,80c11.05,0,20,8.95,20,20s-8.95,20-20,20c-11.04,0-20-8.95-20-20S71.46,80,82.5,80z"></path><path d="M60,335c4.15,0,7.5,3.36,7.5,7.5S64.15,350,60,350c-4.14,0-7.5-3.36-7.5-7.5S55.86,335,60,335z"></path><path d="M50,255c4.15,0,7.5,3.359,7.5,7.5c0,4.14-3.35,7.5-7.5,7.5c-4.14,0-7.5-3.36-7.5-7.5C42.5,258.359,45.86,255,50,255z"></path><path d="M444.47,430c-2.761,0-5-2.238-5-5v-25H427.5c-2.762,0-5-2.238-5-5s2.238-5,5-5h16.97c2.761,0,5,2.238,5,5v30 C449.47,427.762,447.23,430,444.47,430z"></path><path d="M362.5,400h-25c-2.762,0-5-2.238-5-5s2.238-5,5-5h25c2.762,0,5,2.238,5,5S365.262,400,362.5,400z"></path><path d="M272.5,400h-25c-2.761,0-5-2.238-5-5s2.239-5,5-5h25c2.762,0,5,2.238,5,5S275.262,400,272.5,400z"></path><path d="M182.5,400h-25c-2.761,0-5-2.238-5-5s2.239-5,5-5h25c2.761,0,5,2.238,5,5S185.261,400,182.5,400z"></path><path d="M75.54,430c-2.761,0-5-2.238-5-5v-30c0-2.762,2.239-5,5-5H92.5c2.761,0,5,2.238,5,5s-2.239,5-5,5H80.54v25 C80.54,427.762,78.301,430,75.54,430z"></path><path d="M477.5,470c-2.762,0-5-2.238-5-5v-35h-425v35c0,2.762-2.239,5-5,5s-5-2.238-5-5v-40c0-2.762,2.239-5,5-5h435 c2.762,0,5,2.238,5,5v40C482.5,467.762,480.262,470,477.5,470z"></path><path d="M157.5,400h-65c-2.761,0-5-2.238-5-5v-25c0-2.762,2.239-5,5-5h10c2.761,0,5,2.238,5,5s-2.239,5-5,5h-5v15h55v-15h-5 c-2.761,0-5-2.238-5-5s2.239-5,5-5h10c2.761,0,5,2.238,5,5v25C162.5,397.762,160.261,400,157.5,400z"></path><path d="M102.5,255h-10c-2.761,0-5-2.239-5-5v-25c0-2.761,2.239-5,5-5s5,2.239,5,5v20h5c2.761,0,5,2.239,5,5 S105.261,255,102.5,255z"></path><path d="M157.5,255h-10c-2.761,0-5-2.239-5-5s2.239-5,5-5h5v-20c0-2.761,2.239-5,5-5s5,2.239,5,5v25 C162.5,252.761,160.261,255,157.5,255z"></path><path d="M147.5,375h-45c-2.761,0-5-2.238-5-5V250c0-2.761,2.239-5,5-5h45c2.761,0,5,2.239,5,5v120 C152.5,372.762,150.261,375,147.5,375z M107.5,365h35V255h-35V365z"></path><path d="M122.5,320c-2.761,0-5-2.238-5-5v-65c0-2.761,2.239-5,5-5s5,2.239,5,5v65C127.5,317.762,125.261,320,122.5,320z"></path><path d="M247.5,400h-65c-2.761,0-5-2.238-5-5v-25c0-2.762,2.239-5,5-5h10c2.761,0,5,2.238,5,5s-2.239,5-5,5h-5v15h55v-15h-5 c-2.761,0-5-2.238-5-5s2.239-5,5-5h10c2.761,0,5,2.238,5,5v25C252.5,397.762,250.261,400,247.5,400z"></path><path d="M192.5,255h-10c-2.761,0-5-2.239-5-5v-25c0-2.761,2.239-5,5-5s5,2.239,5,5v20h5c2.761,0,5,2.239,5,5 S195.261,255,192.5,255z"></path><path d="M247.5,255h-10c-2.761,0-5-2.239-5-5s2.239-5,5-5h5v-20c0-2.761,2.239-5,5-5s5,2.239,5,5v25 C252.5,252.761,250.261,255,247.5,255z"></path><path d="M237.5,375h-45c-2.761,0-5-2.238-5-5V250c0-2.761,2.239-5,5-5h45c2.761,0,5,2.239,5,5v120 C242.5,372.762,240.261,375,237.5,375z M197.5,365h35V255h-35V365z"></path><path d="M212.5,320c-2.761,0-5-2.238-5-5v-65c0-2.761,2.239-5,5-5s5,2.239,5,5v65C217.5,317.762,215.261,320,212.5,320z"></path><path d="M337.5,400h-65c-2.762,0-5-2.238-5-5v-25c0-2.762,2.238-5,5-5h10c2.762,0,5,2.238,5,5s-2.238,5-5,5h-5v15h55v-15h-5 c-2.762,0-5-2.238-5-5s2.238-5,5-5h10c2.762,0,5,2.238,5,5v25C342.5,397.762,340.262,400,337.5,400z"></path><path d="M282.5,255h-10c-2.762,0-5-2.239-5-5v-25c0-2.761,2.238-5,5-5s5,2.239,5,5v20h5c2.762,0,5,2.239,5,5 S285.262,255,282.5,255z"></path><path d="M337.5,255h-10c-2.762,0-5-2.239-5-5s2.238-5,5-5h5v-20c0-2.761,2.238-5,5-5s5,2.239,5,5v25 C342.5,252.761,340.262,255,337.5,255z"></path><path d="M327.5,375h-45c-2.762,0-5-2.238-5-5V250c0-2.761,2.238-5,5-5h45c2.762,0,5,2.239,5,5v120 C332.5,372.762,330.262,375,327.5,375z M287.5,365h35V255h-35V365z"></path><path d="M302.5,375c-2.762,0-5-2.238-5-5v-65c0-2.762,2.238-5,5-5s5,2.238,5,5v65C307.5,372.762,305.262,375,302.5,375z"></path><path d="M427.5,400h-65c-2.762,0-5-2.238-5-5v-25c0-2.762,2.238-5,5-5h10c2.762,0,5,2.238,5,5s-2.238,5-5,5h-5v15h55v-15h-5 c-2.762,0-5-2.238-5-5s2.238-5,5-5h10c2.762,0,5,2.238,5,5v25C432.5,397.762,430.262,400,427.5,400z"></path><path d="M372.5,255h-10c-2.762,0-5-2.239-5-5v-25c0-2.761,2.238-5,5-5s5,2.239,5,5v20h5c2.762,0,5,2.239,5,5 S375.262,255,372.5,255z"></path><path d="M427.5,255h-10c-2.762,0-5-2.239-5-5s2.238-5,5-5h5v-20c0-2.761,2.238-5,5-5s5,2.239,5,5v25 C432.5,252.761,430.262,255,427.5,255z"></path><path d="M417.5,375h-45c-2.762,0-5-2.238-5-5V250c0-2.761,2.238-5,5-5h45c2.762,0,5,2.239,5,5v120 C422.5,372.762,420.262,375,417.5,375z M377.5,365h35V255h-35V365z"></path><path d="M392.5,320c-2.762,0-5-2.238-5-5v-65c0-2.761,2.238-5,5-5s5,2.239,5,5v65C397.5,317.762,395.262,320,392.5,320z"></path><path d="M487.5,470h-455c-2.761,0-5-2.238-5-5s2.239-5,5-5h455c2.762,0,5,2.238,5,5S490.262,470,487.5,470z"></path><path d="M477.496,190.001c-0.756,0-1.523-0.172-2.244-0.535L258.99,80.603L44.765,189.458c-2.462,1.25-5.471,0.27-6.723-2.192 c-1.251-2.462-0.27-5.472,2.192-6.723l216.48-110c1.418-0.721,3.094-0.724,4.514-0.009l218.52,110 c2.467,1.242,3.459,4.248,2.219,6.714C481.088,188.994,479.325,190.001,477.496,190.001z"></path><path d="M257.5,230h-215c-2.761,0-5-2.239-5-5v-40c0-2.761,2.239-5,5-5h162.07c2.761,0,5.01,2.239,5.01,5s-2.229,5-4.99,5H47.5v30 h210c2.762,0,5,2.239,5,5S260.262,230,257.5,230z"></path><path d="M477.5,230h-220c-2.761,0-5-2.239-5-5s2.239-5,5-5h215v-30H310.43c-2.762,0-5.005-2.239-5.005-5s2.233-5,4.995-5H477.5 c2.762,0,5,2.239,5,5v40C482.5,227.761,480.262,230,477.5,230z"></path><path d="M230.77,201.74c-1.28,0-2.559-0.488-3.536-1.464c-16.694-16.694-16.694-43.857,0-60.552c1.953-1.952,5.118-1.952,7.071,0 c1.953,1.953,1.953,5.119,0,7.071c-12.795,12.795-12.795,33.614,0,46.409c1.953,1.953,1.953,5.119,0,7.071 C233.329,201.252,232.05,201.74,230.77,201.74z"></path><path d="M284.24,201.74c-1.28,0-2.56-0.488-3.536-1.464c-1.952-1.953-1.952-5.119,0-7.071c12.796-12.795,12.796-33.614,0-46.409 c-1.952-1.953-1.952-5.119,0-7.071c1.953-1.952,5.118-1.952,7.071,0c16.693,16.694,16.693,43.857,0,60.552 C286.799,201.252,285.52,201.74,284.24,201.74z"></path><path d="M257.5,230c-26.731,0-50.475-17.945-57.742-43.639c-1.499-5.295-2.258-10.8-2.258-16.361c0-33.084,26.916-60,60-60 s60,26.916,60,60c0,5.56-0.76,11.065-2.26,16.362C307.975,212.055,284.23,230,257.5,230z M257.5,120c-27.57,0-50,22.43-50,50 c0,4.64,0.633,9.229,1.881,13.638C215.436,205.048,235.223,220,257.5,220s42.064-14.952,48.118-36.361 c1.249-4.412,1.882-9,1.882-13.639C307.5,142.43,285.07,120,257.5,120z"></path><path d="M82.5,125c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S96.285,125,82.5,125z M82.5,85 c-8.271,0-15,6.729-15,15s6.729,15,15,15s15-6.729,15-15S90.771,85,82.5,85z"></path><path d="M447.5,120c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S466.799,120,447.5,120z M447.5,60 c-13.785,0-25,11.215-25,25s11.215,25,25,25s25-11.215,25-25S461.285,60,447.5,60z"></path>
</svg>
  </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Deposit;