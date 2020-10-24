import React, { FC } from "react";
import cx from "classnames";
import { UseFormMethods, FieldErrors } from "react-hook-form";

type CheckboxProps = React.DetailedHTMLProps<any, any> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    disabled?: boolean;
    register: () => any;
    errors: FieldErrors<any>;
  };

const Checkbox: FC<CheckboxProps> = ({ name, label, disabled, register, errors, ...rest }) => (
  <div className="field">
    <div className="control">
      <label className={cx("checkbox", errors[name] && "is-danger")}>
        <input type="checkbox" name={name} id={name}disabled={disabled} ref={register} {...rest} />
        {label}
      </label>
      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Checkbox };
