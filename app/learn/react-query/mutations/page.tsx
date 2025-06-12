"use client";

import Container from "@/components/custom/Container";
import {
  useCategoryCreate,
  useCategoryDelete,
  useCategoryGet,
} from "@/hooks/useCategoryData";
import { TypeCategoryModel } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";

export default function MutationsPage() {
  const { data: categories, isLoading, isError, error } = useCategoryGet();

  const mutationAdd = useCategoryCreate();

  const deleteCategoryMutate = useCategoryDelete();

  const { register, handleSubmit, reset, formState } =
    useForm<TypeCategoryModel>({
      defaultValues: {
        name: "",
        description: "",
      },
    });

  const { errors } = formState;

  const onSubmit = (data: TypeCategoryModel) => {
    mutationAdd.mutate(data);
    reset();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      deleteCategoryMutate.mutate(id);
    }
  };
  return (
    <Container>
      <h1>Mutations</h1>
      <h2>List Categories</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Category Name"
            {...register("name", {
              required: "Category name is required",
              minLength: {
                value: 3,
                message: "Category name must be at least 3 characters long",
              },
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="description">Category Description</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Category Description"
            {...register("description", {
              required: "Category description is required",
              minLength: {
                value: 5,
                message:
                  "Category description must be at least 5 characters long",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-amber-800 p-2"
          disabled={mutationAdd.isPending}
        >
          Create Category
        </button>
      </form>
      {isLoading || mutationAdd.isPending || deleteCategoryMutate.isPending ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {(error as Error).message}</p>
      ) : (
        <ul>
          {categories?.data.result.content.map(
            (category: TypeCategoryModel) => (
              <li key={category.id}>
                {category.name}{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </Container>
  );
}
