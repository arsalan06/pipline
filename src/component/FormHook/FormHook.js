import React from "react";
import { useForm } from "react-hook-form";
function FormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Arslan",
      lastName: "Qadir",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("firstName"));
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          //   event.preventDefault();
          console.log(data);
        })}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="test"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>firstName field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("lastName", {
            required: true,
            minLength: {
              value: 8,
              message: "last name is required",
            },
          })}
        />
        {/* errors will return when field validation fails  */}
        {errors?.lastName?.message && <span>firstName field is required</span>}

        <input type="submit" title="Submit" />
      </form>
    </div>
  );
}

export default FormHook;
