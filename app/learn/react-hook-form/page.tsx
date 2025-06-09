"use client";

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumber: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

export default function YoutubeForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "",
      channel: "",
      social: {
        twitter: "profiletwitter",
        facebook: "profilefacebook",
      },
      phoneNumber: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });
  const { register, control, handleSubmit, formState, watch, getValues, setValue } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  useEffect(() => {
    const subscription = watch((value) => {
      console.log("Form value changed:", value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const handleGetValues = () => {
    const values = getValues();
    console.log("Current form values:", values);
  }

  renderCount++;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        YouTube Form {renderCount / 2}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              required: "Email is required",
              validate: {
                notAdmin: (fieldValue) =>
                  fieldValue !== "admin@gmail.com" || "Enter a different email",
                notBlacklisted: (fieldValue) =>
                  !fieldValue.endsWith("@blacklist.com") ||
                  "This domain is not supported",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="channel"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Channel
          </label>
          <input
            id="channel"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your channel name"
            {...register("channel", { required: "Channel is required" })}
          />
          {errors.channel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.channel?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Twitter
          </label>
          <input
            id="twitter"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your Twitter handle"
            {...register("social.twitter", {
              required: "Twitter handle is required",
            })}
          />
          {errors.social?.twitter && (
            <p className="text-red-500 text-sm mt-1">
              {errors.social.twitter?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Facebook
          </label>
          <input
            id="facebook"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your Facebook profile URL"
            {...register("social.facebook", {
              required: "Facebook profile URL is required",
            })}
          />
          {errors.social?.facebook && (
            <p className="text-red-500 text-sm mt-1">
              {errors.social.facebook?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone primary
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            {...register("phoneNumber.0", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber?.[0] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber[0]?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone secondary
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            {...register("phoneNumber.1", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber?.[1] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber[1]?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            List of phone numbers
          </label>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mt-4"
                  placeholder="Enter your phone number"
                  {...register(`phNumbers.${index}.number` as const, {
                    required: "Phone number is required",
                  })}
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="ml-2 mt-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-md transition-colors"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}

          <button
            type="button"
            className="mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded-md transition-colors"
            onClick={() => append({ number: "" })}
          >
            Add Phone Number
          </button>
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your age"
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.age?.message}</p>
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <input
            id="dob"
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your date of birth"
            {...register("dob", {
              valueAsDate: true,
              required: "Date of birth is required",
            })}
          />
          <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors mt-2"
          onClick={handleGetValues}
        >
          Get Current Values
        </button>
        <button
          type="button"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors mt-2"
          onClick={() => setValue("username", "", { shouldDirty: true, shouldTouch: true , shouldValidate: true})}
        >
          Set Username to Superman
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
