import React, { FC } from "react";
import cx from "classnames";
import { UseFormMethods, FormState } from "react-hook-form";

type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    register: () => any;
    formState: FormState<any>;
  };

const Textarea: FC<TextAreaProps> = ({ name, label, register, formState }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <textarea
        className={cx("textarea", formState.touched[name] && formState.errors[name] && "is-danger")}
        name={name}
        id={name}
        ref={register}
      />
      {formState.touched[name] && formState.errors[name] && (
        <p className="help is-danger" role="alert">
          {formState.errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Textarea };
