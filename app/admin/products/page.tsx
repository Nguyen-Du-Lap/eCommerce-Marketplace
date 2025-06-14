"use client";

import { useBrandGet } from "@/hooks/useBrandData";
import { useCategoryGet } from "@/hooks/useCategoryData";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useProductCreate,
  useProductDelete,
  useProductGet,
  useProductUpdate,
} from "@/hooks/useProductData";
import {
  TypeBrandModel,
  TypeCategoryModel,
  TypeFormProduct,
  TypeProductModel,
} from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ProductsPage() {
  const [page, setPage] = useState(0);
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [currentBrandId, setCurrentBrandId] = useState("");
  const [sort, setSort] = useState("id");
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data: products } = useProductGet(page, debouncedSearchTerm, currentCategoryId, currentBrandId, sort);
  const { data: categories } = useCategoryGet();
  const { data: brands } = useBrandGet();
  const mutationUpdate = useProductUpdate();
  const mutationCreate = useProductCreate();
  const mutationDelete = useProductDelete();

  const [selectedProduct, setSelectedProduct] =
    useState<TypeProductModel | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<TypeProductModel | null>(
    null
  );

  const { register, handleSubmit, reset, formState } = useForm<TypeFormProduct>(
    {
      defaultValues: {
        id: "",
        name: "",
        categoryId: "",
        description: "",
        price: 0,
        stock: 0,
        brandId: "",
      },
    }
  );
  const { errors } = formState;
  useEffect(() => {
    if (editingProduct) {
      reset({
        id: editingProduct.id,
        name: editingProduct.name,
        categoryId: editingProduct.categoryId,
        description: editingProduct.description,
        price: editingProduct.price,
        stock: editingProduct.stock,
        brandId: editingProduct.brandId,
      });
    } else {
      reset({
        id: "",
        name: "",
        categoryId: "",
        description: "",
        price: 0,
        stock: 0,
        brandId: "",
      });
    }
  }, [editingProduct, reset]);

  // Mở modal chi tiết sản phẩm
  const handleViewProduct = (product: TypeProductModel) => {
    setSelectedProduct(product);
  };

  // Mở modal xóa sản phẩm
  const handleDeleteClick = (product: TypeProductModel) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  // Mở modal thêm/sửa sản phẩm
  const handleEditProduct = (product: TypeProductModel) => {
    setEditingProduct(product);
    setShowAddEditModal(true);
  };

  // Format tiền tệ VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  // Xử lý submit form thêm/sửa sản phẩm
  const onSubmit = (data: TypeFormProduct) => {
    if (editingProduct) {
      // Cập nhật sản phẩm
      mutationUpdate.mutate({
        ...data,
      });
    } else {
      data.storeId = "4ac30173-d3be-44ba-856f-dc36d61e29a8"; // Giả sử storeId là cố định
      mutationCreate.mutate(data);
    }
    setShowAddEditModal(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Sản phẩm</h1>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowAddEditModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <span className="mr-2">+</span>
          Thêm sản phẩm mới
        </button>
      </div>

      {/* Bộ lọc và tìm kiếm */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4 items-center">
        <div>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="border rounded-md px-3 py-2 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select className="border rounded-md px-3 py-2 bg-white" value={currentCategoryId} onChange={(e) => setCurrentCategoryId(e.target.value)}>
            <option value="">Tất cả danh mục</option>
            {categories?.data.result.content.map(
              (category: TypeCategoryModel) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <select className="border rounded-md px-3 py-2 bg-white" value={currentBrandId} onChange={(e) => setCurrentBrandId(e.target.value)}>
            <option value="">Tất cả nhãn hiệu</option>
            {brands?.data.result.content.map(
              (brand: TypeBrandModel) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              )
            )}
          </select>
        </div>
        
        <div>
          <select className="border rounded-md px-3 py-2 bg-white" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="id">Sắp xếp theo</option>
            <option value="name">Tên</option>
            <option value="price">Giá</option>
          </select>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sản phẩm
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Danh mục
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Giá
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tồn kho
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Danh mục
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products?.content.map((product: TypeProductModel) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        {product?.images.length > 0 &&
                        product?.images?.[0].imageUrl ? (
                          <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                            <Image
                              src={product.images[0].imageUrl}
                              alt={product.name}
                              width={20}
                              height={20}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center text-gray-500">
                            📷
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {product.categoryName}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.categoryName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Xem
                    </button>
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phân trang */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Trước
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Tiếp
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Hiển thị <span className="font-medium">{page * 6 + 1}</span> đến{" "}
                <span className="font-medium">
                  {products?.numberOfElements
                    ? page * 6 + products?.numberOfElements
                    : 0}
                </span>{" "}
                của{" "}
                <span className="font-medium">{products?.totalElements}</span>{" "}
                kết quả
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  disabled={page === 0}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  &laquo;
                </button>
                {products?.totalPages > 1 &&
                  Array.from({ length: products?.totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        i === page
                          ? "bg-blue-50 border-blue-500 text-blue-600"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                <button
                  disabled={page === products?.totalPages - 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  &raquo;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Modal xem chi tiết sản phẩm */}
      {selectedProduct && !showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-2xl w-full">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">Chi tiết sản phẩm</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center bg-gray-100 rounded-lg h-64">
                <div className="text-6xl">
                  {selectedProduct.images.length > 0 &&
                  selectedProduct.images?.[0].imageUrl ? (
                    <Image
                      src={selectedProduct.images[0].imageUrl}
                      alt={selectedProduct.name}
                      objectFit="cover"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center text-gray-500">
                      📷
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-500">
                    {selectedProduct.categoryName}
                  </p>
                </div>
                <p>{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Giá</p>
                    <p className="font-medium text-lg">
                      {formatCurrency(selectedProduct.price)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tồn kho</p>
                    <p className="font-medium">
                      {selectedProduct.stock} sản phẩm
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Danh mục</p>
                    <p>{selectedProduct.categoryName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  handleEditProduct(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal xóa sản phẩm */}
      {showDeleteModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Xóa sản phẩm
              </h3>
              <p className="text-gray-600">
                Bạn có chắc chắn muốn xóa sản phẩm {selectedProduct.name} Hành
                động này không thể hoàn tác.
              </p>
            </div>
            <div className="mt-6 flex justify-center space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedProduct(null);
                }}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedProduct(null);
                  mutationDelete.mutate(selectedProduct.id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal thêm/sửa sản phẩm */}
      {showAddEditModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-3xl w-full">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">
                {editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
              </h2>
              <button
                onClick={() => setShowAddEditModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Tên sản phẩm là bắt buộc</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Danh mục
                </label>
                <select
                  id="category"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("categoryId", { required: true })}
                >
                  {categories?.data.result.content.map(
                    (category: TypeCategoryModel) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mô tả
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">Mô tả là bắt buộc</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Giá (VNĐ)
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-500">Giá là bắt buộc</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tồn kho
                </label>
                <input
                  type="number"
                  id="stock"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("stock", { required: true })}
                />
                {errors.stock && (
                  <span className="text-red-500">Tồn kho là bắt buộc</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Thương hiệu
                </label>
                <select
                  id="brand"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  {...register("brandId", { required: true })}
                >
                  {brands?.data.result.content.map((brand: TypeBrandModel) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hình ảnh
                </label>
                <input
                  type="file"
                  id="image"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="md:col-span-2 flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddEditModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  {editingProduct ? "Cập nhật" : "Thêm sản phẩm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
