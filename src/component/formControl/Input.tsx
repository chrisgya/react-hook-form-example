import React, { FC } from "react";
import cx from "classnames";
import { FieldErrors, UseFormMethods } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    type: "text" | "email" | "number";
    register: () => any;
    errors: FieldErrors<any>;
  };

const Input: FC<InputProps> = ({ name, type, label, register, errors }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <input
        className={cx("input", errors[name] && "is-danger")}
        type={type}
        name={name}
        id={name}
        ref={register}
      />

      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Input };
