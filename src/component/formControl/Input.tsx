import React, { FC } from "react";
import cx from "classnames";
import { FormState, UseFormMethods } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    type: "text" | "email" | "number";
    register: () => any;
    formState: FormState<any>;
  };

const Input: FC<InputProps> = ({ name, type, label, register, formState }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <input
        className={cx("input", formState.touched[name] && formState.errors[name] && "is-danger")}
        type={type}
        name={name}
        id={name}
        ref={register}
      />

      {!!formState.touched[name] && !!formState.errors[name] && (
        <p className="help is-danger" role="alert">
          {formState.errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Input };
