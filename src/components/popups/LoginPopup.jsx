import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";

const LoginPopUp = ({ handleClose }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setLoggedInUser } = useUserContext();
  const navigate = useNavigate();

  // Validation schema
  const validationSchema = yup.object({
    email: yup.string().required("Email Is Required"),
    password: yup.string().required("Password Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      const targetUser = user.find((user) => user.email === formik.values.email);

      if (!targetUser) {
        toast.error("User Not Found");
        return;
      }

      // Validate password
      if (targetUser.password !== formik.values.password) {
        toast.warn("Invalid Password");
        return;
      }

      setLoggedInUser(targetUser);

      formik.resetForm();
      handleClose();
      navigate("/myAccount");
      toast.success(`Welcome, ${targetUser.name}!`);
      return;
    },
  });

  // Listen for formik values changes
  useEffect(() => {
    const { email, password } = formik.values;

    if (email.trim().length > 0 && password.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  const cancelButtonStyles = {
    backgroundColor: "#228b22",
    color: "white",
  };

  const loginButtonStyles = {
    backgroundColor: "#228b22",
    color: "white",
  };

  return (
    <>
      <div className="popup-box" style={{ zIndex: 9999 }}>
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">Login</span>
              <hr />
              <div>
                <Box m={2}>
                  <TextField
                    className="text-box custom-input-box"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>

                <Box m={2}>
                  <TextField
                    className="text-box custom-input-box"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                       variant="contained"
                       type="submit"
                       onClick={formik.handleSubmit}
                       disabled={isDisabled}
                       style={loginButtonStyles}
                     >
                       Login
                  </Button>

                  <Button
                   variant="contained"
                   style={cancelButtonStyles}
                   type="submit"
                   onClick={handleClose}
              >
                Cancel
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default LoginPopUp;