'use client';

import React, { useState } from 'react';

// Dữ liệu mẫu cho đơn hàng
const mockOrders = [
  {
    id: '1',
    orderNumber: 'ORD-2023001',
    customerName: 'Nguyễn Văn A',
    customerEmail: 'nguyenvana@email.com',
    customerPhone: '0912345678',
    orderDate: '2023-06-10T10:30:00',
    status: 'Completed',
    paymentMethod: 'COD',
    paymentStatus: 'Paid',
    shippingAddress: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    totalAmount: 1250000,
    items: [
      { id: '1', productName: 'Laptop Dell XPS 13', quantity: 1, price: 1000000, subtotal: 1000000 },
      { id: '2', productName: 'Chuột không dây Logitech', quantity: 1, price: 250000, subtotal: 250000 }
    ],
    shippingFee: 0,
    note: 'Giao hàng giờ hành chính'
  },
  {
    id: '2',
    orderNumber: 'ORD-2023002',
    customerName: 'Trần Thị B',
    customerEmail: 'tranthib@email.com',
    customerPhone: '0987654321',
    orderDate: '2023-06-11T14:20:00',
    status: 'Processing',
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'Paid',
    shippingAddress: '456 Đường Nguyễn Huệ, Quận 3, TP. Hồ Chí Minh',
    totalAmount: 500000,
    items: [
      { id: '3', productName: 'Tai nghe Bluetooth Sony', quantity: 2, price: 250000, subtotal: 500000 }
    ],
    shippingFee: 0,
    note: ''
  },
  {
    id: '3',
    orderNumber: 'ORD-2023003',
    customerName: 'Lê Văn C',
    customerEmail: 'levanc@email.com',
    customerPhone: '0923456789',
    orderDate: '2023-06-09T09:15:00',
    status: 'Cancelled',
    paymentMethod: 'Momo',
    paymentStatus: 'Refunded',
    shippingAddress: '789 Đường Võ Văn Tần, Quận 10, TP. Hồ Chí Minh',
    totalAmount: 1800000,
    items: [
      { id: '4', productName: 'Samsung Galaxy S23', quantity: 1, price: 1800000, subtotal: 1800000 }
    ],
    shippingFee: 0,
    note: 'Đổi màu xanh sang màu đen'
  },
  {
    id: '4',
    orderNumber: 'ORD-2023004',
    customerName: 'Phạm Thị D',
    customerEmail: 'phamthid@email.com',
    customerPhone: '0934567890',
    orderDate: '2023-06-12T08:45:00',
    status: 'Shipped',
    paymentMethod: 'COD',
    paymentStatus: 'Pending',
    shippingAddress: '101 Đường Cách Mạng Tháng 8, Quận 1, TP. Hồ Chí Minh',
    totalAmount: 2350000,
    items: [
      { id: '5', productName: 'iPad Air 5', quantity: 1, price: 1980000, subtotal: 1980000 },
      { id: '6', productName: 'Ốp lưng iPad', quantity: 1, price: 320000, subtotal: 320000 },
      { id: '7', productName: 'Cáp sạc Type-C', quantity: 1, price: 50000, subtotal: 50000 }
    ],
    shippingFee: 0,
    note: 'Gọi điện trước khi giao'
  },
  {
    id: '5',
    orderNumber: 'ORD-2023005',
    customerName: 'Hoàng Văn E',
    customerEmail: 'hoangvane@email.com',
    customerPhone: '0945678901',
    orderDate: '2023-06-08T16:20:00',
    status: 'Pending',
    paymentMethod: 'Zalopay',
    paymentStatus: 'Pending',
    shippingAddress: '202 Đường Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh',
    totalAmount: 950000,
    items: [
      { id: '8', productName: 'Bàn phím cơ Leopold', quantity: 1, price: 950000, subtotal: 950000 }
    ],
    shippingFee: 0,
    note: ''
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Xử lý hiển thị modal chi tiết đơn hàng
  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
  };
  
  // Xử lý cập nhật trạng thái đơn hàng
  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    // Trong thực tế sẽ gọi API, ở đây chỉ mô phỏng
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus } 
        : order
    ));
    
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
    
    alert(`Đã cập nhật trạng thái đơn hàng ${orderId} thành ${newStatus}`);
  };
  
  // Lọc đơn hàng theo trạng thái và từ khóa tìm kiếm
  const filteredOrders = orders.filter(order => {
    const matchStatus = filterStatus === '' || order.status === filterStatus;
    const matchSearch = searchTerm === '' || 
                       order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  // Format tiền tệ VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };
  
  // Format ngày giờ
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('vi-VN');
  };

  // Function chuyển đổi trạng thái đơn hàng thành màu và text
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed':
        return { color: 'bg-green-100 text-green-800', text: 'Hoàn thành' };
      case 'Processing':
        return { color: 'bg-blue-100 text-blue-800', text: 'Đang xử lý' };
      case 'Shipped':
        return { color: 'bg-indigo-100 text-indigo-800', text: 'Đã giao hàng' };
      case 'Pending':
        return { color: 'bg-yellow-100 text-yellow-800', text: 'Chờ xử lý' };
      case 'Cancelled':
        return { color: 'bg-red-100 text-red-800', text: 'Đã hủy' };
      default:
        return { color: 'bg-gray-100 text-gray-800', text: status };
    }
  };
  
  // Function chuyển đổi trạng thái thanh toán thành màu và text
  const getPaymentStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid':
        return { color: 'bg-green-100 text-green-800', text: 'Đã thanh toán' };
      case 'Pending':
        return { color: 'bg-yellow-100 text-yellow-800', text: 'Chờ thanh toán' };
      case 'Refunded':
        return { color: 'bg-orange-100 text-orange-800', text: 'Đã hoàn tiền' };
      default:
        return { color: 'bg-gray-100 text-gray-800', text: status };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Đơn hàng</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Tổng số: {filteredOrders.length} đơn hàng</span>
        </div>
      </div>
      
      {/* Bộ lọc và tìm kiếm */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4 items-center">
        <div className="flex-grow md:flex-grow-0">
          <input 
            type="text"
            placeholder="Tìm kiếm đơn hàng..."
            className="border rounded-md px-3 py-2 w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="border rounded-md px-3 py-2 bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="Pending">Chờ xử lý</option>
            <option value="Processing">Đang xử lý</option>
            <option value="Shipped">Đã giao hàng</option>
            <option value="Completed">Hoàn thành</option>
            <option value="Cancelled">Đã hủy</option>
          </select>
        </div>
        <div>
          <select className="border rounded-md px-3 py-2 bg-white">
            <option value="">Thời gian</option>
            <option value="today">Hôm nay</option>
            <option value="yesterday">Hôm qua</option>
            <option value="this_week">Tuần này</option>
            <option value="this_month">Tháng này</option>
          </select>
        </div>
      </div>
      
      {/* Danh sách đơn hàng */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã đơn hàng
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Khách hàng
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày đặt
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tổng tiền
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thanh toán
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const statusBadge = getStatusBadge(order.status);
                const paymentStatusBadge = getPaymentStatusBadge(order.paymentStatus);
                
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{order.orderNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                      <div className="text-xs text-gray-500">{order.customerPhone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(order.orderDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{formatCurrency(order.totalAmount)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusBadge.color}`}>
                        {statusBadge.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${paymentStatusBadge.color}`}>
                          {paymentStatusBadge.text}
                        </span>
                        <span className="ml-1 text-xs text-gray-500">{order.paymentMethod}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleViewOrder(order)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Xem
                      </button>
                    </td>
                  </tr>
                );
              })}
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
                Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> của <span className="font-medium">5</span> kết quả
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  &laquo;
                </button>
                <button className="bg-blue-50 border-gray-300 text-blue-600 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  &raquo;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal chi tiết đơn hàng */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-3xl w-full">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">Chi tiết đơn hàng #{selectedOrder.orderNumber}</h2>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Thông tin đơn hàng</h3>
                <div className="bg-gray-50 p-4 rounded-md space-y-2">
                  <div>
                    <span className="text-gray-500 text-sm">Mã đơn hàng:</span>
                    <p className="font-medium">{selectedOrder.orderNumber}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Ngày đặt hàng:</span>
                    <p>{formatDate(selectedOrder.orderDate)}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Trạng thái đơn hàng:</span>
                    <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(selectedOrder.status).color}`}>
                      {getStatusBadge(selectedOrder.status).text}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Phương thức thanh toán:</span>
                    <p>{selectedOrder.paymentMethod}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Trạng thái thanh toán:</span>
                    <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusBadge(selectedOrder.paymentStatus).color}`}>
                      {getPaymentStatusBadge(selectedOrder.paymentStatus).text}
                    </span>
                  </div>
                  {selectedOrder.note && (
                    <div>
                      <span className="text-gray-500 text-sm">Ghi chú:</span>
                      <p>{selectedOrder.note}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Thông tin khách hàng</h3>
                <div className="bg-gray-50 p-4 rounded-md space-y-2">
                  <div>
                    <span className="text-gray-500 text-sm">Họ tên:</span>
                    <p className="font-medium">{selectedOrder.customerName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Email:</span>
                    <p>{selectedOrder.customerEmail}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Số điện thoại:</span>
                    <p>{selectedOrder.customerPhone}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Địa chỉ giao hàng:</span>
                    <p>{selectedOrder.shippingAddress}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Sản phẩm đã đặt</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sản phẩm
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số lượng
                      </th>
                      <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Đơn giá
                      </th>
                      <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedOrder.items.map((item: any) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.productName}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="text-sm text-gray-900">{item.quantity}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">{formatCurrency(item.price)}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right">
                          <div className="text-sm font-medium text-gray-900">{formatCurrency(item.subtotal)}</div>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td colSpan={3} className="px-4 py-2 text-right text-sm font-medium">
                        Phí vận chuyển:
                      </td>
                      <td className="px-4 py-2 text-right text-sm font-medium">
                        {formatCurrency(selectedOrder.shippingFee || 0)}
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td colSpan={3} className="px-4 py-2 text-right text-base font-bold">
                        Tổng cộng:
                      </td>
                      <td className="px-4 py-2 text-right text-base font-bold">
                        {formatCurrency(selectedOrder.totalAmount)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <button 
                onClick={() => setSelectedOrder(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Đóng
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Cập nhật trạng thái:</span>
                <select 
                  className="border rounded-md px-3 py-2 bg-white"
                  value={selectedOrder.status}
                  onChange={(e) => handleUpdateStatus(selectedOrder.id, e.target.value)}
                >
                  <option value="Pending">Chờ xử lý</option>
                  <option value="Processing">Đang xử lý</option>
                  <option value="Shipped">Đã giao hàng</option>
                  <option value="Completed">Hoàn thành</option>
                  <option value="Cancelled">Đã hủy</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  In hóa đơn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
