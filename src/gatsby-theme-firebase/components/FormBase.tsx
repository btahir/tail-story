/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const FormBase: React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement>
> = ({ ...restProps }) => {
  return <form sx={{ p: 3, backgroundColor: "background" }} {...restProps} />;
};

export default FormBase;
