import React, { FC } from "react";
import cx from "classnames";
import { UseFormMethods, FormState } from "react-hook-form";

type CheckboxProps = React.DetailedHTMLProps<any, any> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    disabled?: boolean;
    register: () => any;
    formState: FormState<any>;
  };

const Checkbox: FC<CheckboxProps> = ({ name, label, disabled, register, formState, ...rest }) => (
  <div className="field">
    <div className="control">
      <label className={cx("checkbox", formState.touched[name] && formState.errors[name] && "is-danger")}>
        <input type="checkbox" name={name} id={name} disabled={disabled} ref={register} {...rest} />
        {label}
      </label>
      {formState.touched[name] && formState.errors[name] && (
        <p className="help is-danger" role="alert">
          {formState.errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Checkbox };
