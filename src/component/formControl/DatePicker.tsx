import React, { FC, useState } from "react";
import { Controller, FieldErrors, UseFormMethods } from "react-hook-form";
import Calendar, { CalendarProps } from "react-calendar";
import cx from "classnames";
import { format } from "date-fns";
import "./DateInput.scss";

type DatePickerProps = CalendarProps &
  Partial<UseFormMethods> & {
    name: string;
    intialValue: Date | null;
    dateFormat?: string;
    maxDate?: Date;
    minDate?: Date;
    errors: FieldErrors<any>;
    onChange: (date: Date | Date[]) => void;
  };

const DatePicker: FC<DatePickerProps> = ({
  name,
  minDate,
  maxDate,
  control,
  errors,
  onChange,
  intialValue,
  dateFormat = "dd MMM yyyy",
}) => {
  const [showCalendar, setshowCalendar] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | number | readonly string[] | undefined>("");
  const rootRef = React.useRef(null);

  const toggleCalendar = (val?: boolean) => {
    setshowCalendar(val || !showCalendar);
  };

  const handleClickAway = (e: MouseEvent) => {
    const el: any = rootRef.current;
    if (el && !el.contains(e.target)) {
      setshowCalendar(false);
    }
  };

  const onCalendarChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      onChange(date);
      setInputValue(format(date, dateFormat));
      toggleCalendar(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickAway, false);
    return () => document.removeEventListener("mousedown", handleClickAway, false);
  });

  return (
    <div className="field react-calendar" ref={rootRef}>
      <input
        value={inputValue ? inputValue : intialValue ? format(intialValue, dateFormat) : ""}
        readOnly={true}
        onFocus={() => toggleCalendar(true)}
        className={cx("input", errors[name] && "is-danger")}
      />
      <Controller
        control={control}
        name={name}
        render={({ value }) => (
          <>
            {showCalendar && (
              <Calendar
                onChange={onCalendarChange}
                value={value}
                calendarType="US"
                maxDate={maxDate}
                minDate={minDate}
              />
            )}
            {errors[name] && (
              <p className="help is-danger" role="alert">
                {errors[name].message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export { DatePicker };
