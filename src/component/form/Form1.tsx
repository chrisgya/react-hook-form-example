import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cx from "classnames";
import {
  Checkbox,
  FileInput,
  Input,
  Radio,
  Textarea,
  DatePicker,
  SelectInput,
  InputFormat,
  CustomSelect,
} from "../formControl";

interface IFormInputs {
  age: number;
  firstName: string;
  email: string;
  salary: number | null;
  message: string;
  hasPhone: boolean;
  phone: string | null;
  gender: string;
  dob: Date | null;
  files: any;
  occupation: string;
  food: object;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  age: yup.number().positive().required("Age must be a positive number"),
  email: yup.string().email("Email should have correct format").required("Email is a required field"),
  message: yup.string().required(),
  gender: yup.string().required(),
  occupation: yup.string().required(),
});

const sampleOccupationData = [
  {
    value: "cook",
    display: "Best Cooker",
  },
  {
    value: "software",
    display: "Software Engineer",
  },
  {
    value: "docter",
    display: "Medical Docker",
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const defaultValues = {
  age: 10,
  firstName: "john sampson",
  email: "",
  salary: 5000000.536,
  message: "my message to the whole wide world is this",
  hasPhone: true,
  phone: null,
  gender: "off",
  dob: new Date(new Date().setMonth(-2)),
  files: null,
  occupation: "docter",
  food: { value: "strawberry", label: "Strawberry" },
};

export default () => {
  const { control, register, handleSubmit, watch, formState, getValues, setValue, reset } = useForm<IFormInputs>({
    mode: "onBlur", //onChange
    resolver: yupResolver(schema),
    defaultValues,
    // defaultValues: {
    //   age: 10,
    //   firstName: "john sampson",
    //   email: "",
    //   salary: 5000000.536,
    //   message: "my message to the whole wide world is this",
    //   hasPhone: true,
    //   phone: null,
    //   gender: "off",
    //   dob: new Date(new Date().setMonth(-2)),
    //   files: null,
    //   occupation: "docter",
    // },
  });

  const hasPhone = watch("hasPhone");
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <DatePicker
        name="dob"
        intialValue={getValues().dob}
        control={control}
        formState={formState}
        onChange={(date: any) => setValue("dob", date)}
      />
      <Input name="firstName" type="text" label="Your Name" register={register} formState={formState} />
      <Input name="email" type="email" label="Email" register={register} formState={formState} />
      <InputFormat
        name="age"
        label="Your Age"
        decimalScale={0}
        allowNegative={false}
        register={register}
        control={control}
        formState={formState}
      />
      <InputFormat name="salary" label="Salary" thousandSeparator control={control} formState={formState} />
      <InputFormat
        name="phone"
        label="Mobile Number"
        type="tel"
        format="+234 (###) ###-####"
        mask="_"
        allowEmptyFormatting
        control={control}
        formState={formState}
      />
      <SelectInput
        name="occupation"
        label="Occupation"
        register={register}
        formState={formState}
        selectOption={sampleOccupationData}
      />
      <CustomSelect name="food" label="Food Items" options={options} control={control} formState={formState} />
      <Textarea name="message" label="Message" register={register} formState={formState} />
      <Checkbox name="hasPhone" label="Message" register={register} formState={formState} />
      <Radio name="gender" label="Male" register={register} formState={formState} />
      <Radio name="gender" label="Female" register={register} formState={formState} />
      <FileInput name="files" control={control} />

      {hasPhone && <h1>show phone control</h1>}
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      {/* <pre>{JSON.stringify(getValues().salary, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(getValues(), null, 2)}</pre> */}

      <button type="submit" className={cx("button", formState.isSubmitting && "is-loading")}>
        Submit
      </button>
      <button
        type="button"
        onClick={() => reset(defaultValues)}
        className={cx("button", formState.isSubmitting && "is-loading")}
      >
        reset
      </button>
      {/* <button type="submit" className={cx("button", formState.isSubmitting && "is-loading")} disabled={!formState.isValid || formState.isSubmitting}>Submit</button> */}
    </form>
  );
};
