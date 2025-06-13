'use client';

import React, { useState } from 'react';

// Dữ liệu mẫu cho danh mục
const mockCategories = [
  {
    id: '1',
    name: 'Laptop',
    description: 'Các loại máy tính xách tay từ các thương hiệu hàng đầu',
    slug: 'laptop',
    productCount: 24,
    isActive: true,
    imageUrl: '/images/categories/laptop.jpg',
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Điện thoại thông minh từ các thương hiệu nổi tiếng',
    slug: 'smartphone',
    productCount: 32,
    isActive: true,
    imageUrl: '/images/categories/smartphone.jpg',
  },
  {
    id: '3',
    name: 'Tablet',
    description: 'Máy tính bảng đa dạng kích thước và tính năng',
    slug: 'tablet',
    productCount: 15,
    isActive: true,
    imageUrl: '/images/categories/tablet.jpg',
  },
  {
    id: '4',
    name: 'Phụ kiện',
    description: 'Phụ kiện điện tử cho các thiết bị di động',
    slug: 'phu-kien',
    productCount: 48,
    isActive: true,
    imageUrl: '/images/categories/accessories.jpg',
  },
  {
    id: '5',
    name: 'Màn hình',
    description: 'Màn hình máy tính đa dạng kích thước và độ phân giải',
    slug: 'man-hinh',
    productCount: 17,
    isActive: true,
    imageUrl: '/images/categories/monitor.jpg',
  },
  {
    id: '6',
    name: 'PC & Linh kiện',
    description: 'Máy tính để bàn và các linh kiện lắp ráp',
    slug: 'pc-linh-kien',
    productCount: 36,
    isActive: false,
    imageUrl: '/images/categories/pc.jpg',
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);
  
  // Xử lý hiển thị modal thêm/sửa danh mục
  const handleAddEditCategory = (category: any = null) => {
    setEditingCategory(category);
    setShowModal(true);
  };
  
  // Xử lý xóa danh mục
  const handleDeleteCategory = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      // Trong thực tế sẽ gọi API, ở đây chỉ mô phỏng
      setCategories(categories.filter(category => category.id !== id));
    }
  };
  
  // Xử lý lưu danh mục
  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    // Trong thực tế sẽ gọi API, ở đây chỉ mô phỏng
    setShowModal(false);
    
    // Hiển thị thông báo
    alert(editingCategory 
      ? `Đã cập nhật danh mục ${editingCategory.name}` 
      : 'Đã thêm danh mục mới'
    );
    
    setEditingCategory(null);
  };
  
  // Xử lý thay đổi trạng thái active
  const handleToggleActive = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, isActive: !category.isActive } 
        : category
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Danh mục</h1>
        <button 
          onClick={() => handleAddEditCategory()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <span className="mr-2">+</span>
          Thêm danh mục mới
        </button>
      </div>
      
      {/* Danh sách danh mục */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên danh mục
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mô tả
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số sản phẩm
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                          📁
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        <div className="text-xs text-gray-500">/{category.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 truncate max-w-xs">{category.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {category.productCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={category.isActive}
                        onChange={() => handleToggleActive(category.id)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">
                        {category.isActive ? 'Hiện' : 'Ẩn'}
                      </span>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleAddEditCategory(category)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Sửa
                    </button>
                    <button 
                      onClick={() => handleDeleteCategory(category.id)}
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
      </div>
      
      {/* Modal thêm/sửa danh mục */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-lg w-full">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">
                {editingCategory ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới'}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSaveCategory} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Tên danh mục
                </label>    
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                  defaultValue={editingCategory?.name || ''}
                  required
                />
              </div>
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug (URL)
                </label>
                <input 
                  type="text" 
                  id="slug" 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                  defaultValue={editingCategory?.slug || ''}
                />
                <p className="text-xs text-gray-500 mt-1">Để trống để tự động tạo từ tên</p>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Mô tả
                </label>
                <textarea 
                  id="description" 
                  rows={3} 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={editingCategory?.description || ''}
                ></textarea>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Hình ảnh
                </label>
                <input 
                  type="file" 
                  id="image"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="isActive"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  defaultChecked={editingCategory ? editingCategory.isActive : true}
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                  Hiển thị danh mục
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                >
                  Hủy
                </button>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  {editingCategory ? 'Cập nhật' : 'Thêm danh mục'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
