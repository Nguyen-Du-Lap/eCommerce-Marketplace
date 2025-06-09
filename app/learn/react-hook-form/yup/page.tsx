"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    channel: yup.string().required("Channel is required"),
})

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export default function YoutubeForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit, formState} = form;
  const { errors } = formState;
  

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

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
            {...register("username")}
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
            {...register("email")}
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
            {...register("channel")}
          />
          {errors.channel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.channel?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
