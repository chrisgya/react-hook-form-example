import React, { FC } from "react";
import cx from "classnames";
import { FormState, UseFormMethods } from "react-hook-form";

type RadioProps = React.DetailedHTMLProps<any, any> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    disabled?: boolean;
    register: () => any;
    formState: FormState<any>;
  };

const Radio: FC<RadioProps> = ({ name, label, disabled, register, formState }) => (
  <div className="field">
    <div className="control">
      <label className={cx("radio", formState.touched[name] && formState.errors[name] && "is-danger")}>
        <input type="radio" name={name} disabled={disabled} ref={register} />
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

export { Radio };
