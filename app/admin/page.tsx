
'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminPage(){
    // Dữ liệu mẫu cho thống kê
    const stats = [
        { id: 1, name: 'Tổng doanh thu', value: '5.500.000₫', change: '+12%', icon: '💰', color: 'bg-blue-100 text-blue-800' },
        { id: 2, name: 'Đơn hàng mới', value: '25', change: '+8%', icon: '📦', color: 'bg-green-100 text-green-800' },
        { id: 3, name: 'Khách hàng mới', value: '15', change: '+5%', icon: '👥', color: 'bg-purple-100 text-purple-800' },
        { id: 4, name: 'Tỷ lệ hoàn thành', value: '92%', change: '+2%', icon: '✅', color: 'bg-yellow-100 text-yellow-800' },
    ];

    // Dữ liệu mẫu cho đơn hàng gần đây
    const recentOrders = [
        { id: 'ORD-001', customer: 'Nguyễn Văn A', date: '12/06/2025', amount: '850.000₫', status: 'Completed' },
        { id: 'ORD-002', customer: 'Trần Thị B', date: '11/06/2025', amount: '1.200.000₫', status: 'Processing' },
        { id: 'ORD-003', customer: 'Lê Văn C', date: '10/06/2025', amount: '650.000₫', status: 'Processing' },
        { id: 'ORD-004', customer: 'Phạm Thị D', date: '09/06/2025', amount: '1.500.000₫', status: 'Completed' },
        { id: 'ORD-005', customer: 'Hoàng Văn E', date: '08/06/2025', amount: '950.000₫', status: 'Cancelled' },
    ];

    // Dữ liệu mẫu cho sản phẩm bán chạy
    const topProducts = [
        { id: 'PRD-001', name: 'Laptop Dell XPS 13', sold: 24, price: '25.990.000₫', stock: 12 },
        { id: 'PRD-002', name: 'iPhone 15 Pro Max', sold: 18, price: '30.490.000₫', stock: 8 },
        { id: 'PRD-003', name: 'Samsung Galaxy S24', sold: 15, price: '23.990.000₫', stock: 10 },
        { id: 'PRD-004', name: 'Tai nghe AirPods Pro', sold: 42, price: '5.990.000₫', stock: 25 },
    ];

    // Hàm để hiển thị màu phù hợp với trạng thái đơn hàng
    const getStatusColor = (status: string) => {
        switch(status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Processing': return 'bg-blue-100 text-blue-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="text-sm text-gray-500">Cập nhật gần nhất: 12/06/2025, 10:30 AM</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                    <div key={stat.id} className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${stat.color}`}>
                            <span className="text-xl">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">{stat.name}</p>
                            <div className="flex items-center">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <span className="text-xs font-semibold text-green-600 ml-2">
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow lg:col-span-2">
                    <div className="p-6 border-b flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Đơn hàng gần đây</h2>
                        <Link href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-800">
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 text-gray-600 text-sm">
                                <tr>
                                    <th className="py-3 px-6 text-left">Mã đơn</th>
                                    <th className="py-3 px-6 text-left">Khách hàng</th>
                                    <th className="py-3 px-6 text-left">Ngày</th>
                                    <th className="py-3 px-6 text-left">Số tiền</th>
                                    <th className="py-3 px-6 text-left">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {recentOrders.map(order => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="py-4 px-6 text-blue-600 font-medium">{order.id}</td>
                                        <td className="py-4 px-6">{order.customer}</td>
                                        <td className="py-4 px-6 text-gray-500">{order.date}</td>
                                        <td className="py-4 px-6 font-medium">{order.amount}</td>
                                        <td className="py-4 px-6">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Top Products */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Sản phẩm bán chạy</h2>
                        <Link href="/admin/products" className="text-sm text-blue-600 hover:text-blue-800">
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="p-6 space-y-4">
                        {topProducts.map(product => (
                            <div key={product.id} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-gray-500 text-sm">Đã bán: {product.sold}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{product.price}</p>
                                    <p className="text-gray-500 text-sm">Còn {product.stock}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};