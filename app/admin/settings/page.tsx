'use client';

import React, { useState } from 'react';

// Mock data for site settings
const initialSettings = {
  general: {
    siteName: 'eCommerce Marketplace',
    siteDescription: 'Your one-stop shop for everything tech',
    siteEmail: 'contact@ecommerce-marketplace.com',
    supportPhone: '+84 123 456 789',
    address: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    logo: '/images/logos/Logo.svg',
    favicon: '/favicon.ico',
    defaultLanguage: 'vi-VN',
    defaultCurrency: 'VND',
    timezone: 'Asia/Ho_Chi_Minh'
  },
  appearance: {
    theme: 'light',
    primaryColor: '#1E40AF',
    secondaryColor: '#F59E0B',
    fontFamily: 'Inter, sans-serif',
    heroImage: '/images/hero/hero-1.jpg',
    showNewArrivals: true,
    showBestSellers: true,
    showDeals: true
  },
  commerce: {
    productsPerPage: 12,
    enableReviews: true,
    enableWishlist: true,
    enableCompare: true,
    taxRate: 10,
    enableCoupons: true,
    outOfStockDisplay: 'hide',
    showStock: true
  },
  shipping: {
    freeShippingThreshold: 500000,
    domesticShippingRate: 30000,
    internationalShippingRate: 250000,
    shippingCalculation: 'flat',
    shippingOriginZip: '70000',
    shippingOriginCountry: 'Vietnam'
  },
  payment: {
    enableCOD: true,
    enableBankTransfer: true,
    enableCreditCard: true,
    enableMomo: true,
    enableZaloPay: true,
    merchantId: 'MERCHANT123',
    merchantName: 'eCommerce Marketplace Ltd.',
    paymentAPIEndpoint: 'https://api.payment.com/v1'
  },
  email: {
    smtpHost: 'smtp.example.com',
    smtpPort: 587,
    smtpUsername: 'notifications@ecommerce-marketplace.com',
    smtpPassword: '••••••••',
    fromEmail: 'no-reply@ecommerce-marketplace.com',
    fromName: 'eCommerce Marketplace',
    enableOrderConfirmation: true,
    enableShippingNotification: true,
    enableAccountCreation: true
  },
  social: {
    facebook: 'https://facebook.com/ecommerce-marketplace',
    instagram: 'https://instagram.com/ecommerce-marketplace',
    twitter: 'https://twitter.com/ecommerce-marketplace',
    youtube: '',
    linkedin: '',
    tiktok: ''
  },
  seo: {
    metaTitle: 'eCommerce Marketplace | Your One-Stop Tech Shop',
    metaDescription: 'Shop the latest tech gadgets, electronics, and accessories at eCommerce Marketplace. Free shipping on orders over 500.000₫.',
    keywords: 'ecommerce, tech, electronics, gadgets, online shopping',
    googleAnalyticsId: 'UA-123456789-1',
    structuredDataType: 'Organization',
    enableSitemap: true,
    enableRobotsTxt: true
  }
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  
  // Handle settings form change
  const handleChange = (section: string, field: string, value: any) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section as keyof typeof settings],
        [field]: value
      }
    });
  };
  
  // Handle save settings
  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSavedMessage(true);
      
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowSavedMessage(false);
      }, 3000);
    }, 1000);
  };
  
  // Get fields for the active tab
  const getTabFields = () => {
    switch(activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Site Name</label>
                <input
                  type="text"
                  value={settings.general.siteName}
                  onChange={(e) => handleChange('general', 'siteName', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Support Email</label>
                <input
                  type="email"
                  value={settings.general.siteEmail}
                  onChange={(e) => handleChange('general', 'siteEmail', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Support Phone</label>
                <input
                  type="text"
                  value={settings.general.supportPhone}
                  onChange={(e) => handleChange('general', 'supportPhone', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Default Language</label>
                <select
                  value={settings.general.defaultLanguage}
                  onChange={(e) => handleChange('general', 'defaultLanguage', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="vi-VN">Vietnamese (vi-VN)</option>
                  <option value="en-US">English (en-US)</option>
                  <option value="zh-CN">Chinese (zh-CN)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Default Currency</label>
                <select
                  value={settings.general.defaultCurrency}
                  onChange={(e) => handleChange('general', 'defaultCurrency', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="VND">Vietnamese Dong (VND)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Timezone</label>
                <select
                  value={settings.general.timezone}
                  onChange={(e) => handleChange('general', 'timezone', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="Asia/Ho_Chi_Minh">Vietnam (GMT+7)</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time (GMT-5)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                value={settings.general.address}
                onChange={(e) => handleChange('general', 'address', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Site Description</label>
              <textarea
                value={settings.general.siteDescription}
                onChange={(e) => handleChange('general', 'siteDescription', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        );
        
      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <select
                  value={settings.appearance.theme}
                  onChange={(e) => handleChange('appearance', 'theme', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto (System)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Font Family</label>
                <select
                  value={settings.appearance.fontFamily}
                  onChange={(e) => handleChange('appearance', 'fontFamily', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="Inter, sans-serif">Inter</option>
                  <option value="Roboto, sans-serif">Roboto</option>
                  <option value="Montserrat, sans-serif">Montserrat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Primary Color</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="color"
                    value={settings.appearance.primaryColor}
                    onChange={(e) => handleChange('appearance', 'primaryColor', e.target.value)}
                    className="h-10 w-10 rounded-l-md border border-r-0 border-gray-300"
                  />
                  <input
                    type="text"
                    value={settings.appearance.primaryColor}
                    onChange={(e) => handleChange('appearance', 'primaryColor', e.target.value)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Secondary Color</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="color"
                    value={settings.appearance.secondaryColor}
                    onChange={(e) => handleChange('appearance', 'secondaryColor', e.target.value)}
                    className="h-10 w-10 rounded-l-md border border-r-0 border-gray-300"
                  />
                  <input
                    type="text"
                    value={settings.appearance.secondaryColor}
                    onChange={(e) => handleChange('appearance', 'secondaryColor', e.target.value)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Homepage Sections</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <input
                    id="show-new-arrivals"
                    type="checkbox"
                    checked={settings.appearance.showNewArrivals}
                    onChange={(e) => handleChange('appearance', 'showNewArrivals', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="show-new-arrivals" className="ml-3 text-sm text-gray-700">
                    Show New Arrivals Section
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="show-best-sellers"
                    type="checkbox"
                    checked={settings.appearance.showBestSellers}
                    onChange={(e) => handleChange('appearance', 'showBestSellers', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="show-best-sellers" className="ml-3 text-sm text-gray-700">
                    Show Best Sellers Section
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="show-deals"
                    type="checkbox"
                    checked={settings.appearance.showDeals}
                    onChange={(e) => handleChange('appearance', 'showDeals', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="show-deals" className="ml-3 text-sm text-gray-700">
                    Show Deals Section
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'commerce':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Products Per Page</label>
                <input
                  type="number"
                  min="4"
                  max="48"
                  value={settings.commerce.productsPerPage}
                  onChange={(e) => handleChange('commerce', 'productsPerPage', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tax Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={settings.commerce.taxRate}
                  onChange={(e) => handleChange('commerce', 'taxRate', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Out of Stock Display</label>
                <select
                  value={settings.commerce.outOfStockDisplay}
                  onChange={(e) => handleChange('commerce', 'outOfStockDisplay', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="hide">Hide Products</option>
                  <option value="show-disabled">Show as Disabled</option>
                  <option value="show-backorder">Show with Backorder Option</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    id="enable-reviews"
                    type="checkbox"
                    checked={settings.commerce.enableReviews}
                    onChange={(e) => handleChange('commerce', 'enableReviews', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-reviews" className="ml-3 text-sm text-gray-700">
                    Enable Product Reviews
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-wishlist"
                    type="checkbox"
                    checked={settings.commerce.enableWishlist}
                    onChange={(e) => handleChange('commerce', 'enableWishlist', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-wishlist" className="ml-3 text-sm text-gray-700">
                    Enable Wishlist
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-compare"
                    type="checkbox"
                    checked={settings.commerce.enableCompare}
                    onChange={(e) => handleChange('commerce', 'enableCompare', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-compare" className="ml-3 text-sm text-gray-700">
                    Enable Product Compare
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-coupons"
                    type="checkbox"
                    checked={settings.commerce.enableCoupons}
                    onChange={(e) => handleChange('commerce', 'enableCoupons', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-coupons" className="ml-3 text-sm text-gray-700">
                    Enable Discount Coupons
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="show-stock"
                    type="checkbox"
                    checked={settings.commerce.showStock}
                    onChange={(e) => handleChange('commerce', 'showStock', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="show-stock" className="ml-3 text-sm text-gray-700">
                    Show Stock Quantity
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'shipping':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Free Shipping Threshold (VND)</label>
                <input
                  type="number"
                  min="0"
                  step="10000"
                  value={settings.shipping.freeShippingThreshold}
                  onChange={(e) => handleChange('shipping', 'freeShippingThreshold', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">Set to 0 to disable free shipping</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Calculation</label>
                <select
                  value={settings.shipping.shippingCalculation}
                  onChange={(e) => handleChange('shipping', 'shippingCalculation', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="flat">Flat Rate</option>
                  <option value="weight">Based on Weight</option>
                  <option value="price">Based on Price</option>
                  <option value="api">Real-time Calculation API</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Domestic Shipping Rate (VND)</label>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={settings.shipping.domesticShippingRate}
                  onChange={(e) => handleChange('shipping', 'domesticShippingRate', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">International Shipping Rate (VND)</label>
                <input
                  type="number"
                  min="0"
                  step="10000"
                  value={settings.shipping.internationalShippingRate}
                  onChange={(e) => handleChange('shipping', 'internationalShippingRate', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Origin ZIP/Postal Code</label>
                <input
                  type="text"
                  value={settings.shipping.shippingOriginZip}
                  onChange={(e) => handleChange('shipping', 'shippingOriginZip', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Origin Country</label>
                <input
                  type="text"
                  value={settings.shipping.shippingOriginCountry}
                  onChange={(e) => handleChange('shipping', 'shippingOriginCountry', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        );
        
      case 'payment':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    id="enable-cod"
                    type="checkbox"
                    checked={settings.payment.enableCOD}
                    onChange={(e) => handleChange('payment', 'enableCOD', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-cod" className="ml-3 text-sm text-gray-700">
                    Cash On Delivery (COD)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-bank-transfer"
                    type="checkbox"
                    checked={settings.payment.enableBankTransfer}
                    onChange={(e) => handleChange('payment', 'enableBankTransfer', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-bank-transfer" className="ml-3 text-sm text-gray-700">
                    Bank Transfer
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-credit-card"
                    type="checkbox"
                    checked={settings.payment.enableCreditCard}
                    onChange={(e) => handleChange('payment', 'enableCreditCard', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-credit-card" className="ml-3 text-sm text-gray-700">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-momo"
                    type="checkbox"
                    checked={settings.payment.enableMomo}
                    onChange={(e) => handleChange('payment', 'enableMomo', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-momo" className="ml-3 text-sm text-gray-700">
                    MoMo
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-zalopay"
                    type="checkbox"
                    checked={settings.payment.enableZaloPay}
                    onChange={(e) => handleChange('payment', 'enableZaloPay', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-zalopay" className="ml-3 text-sm text-gray-700">
                    ZaloPay
                  </label>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Merchant ID</label>
                <input
                  type="text"
                  value={settings.payment.merchantId}
                  onChange={(e) => handleChange('payment', 'merchantId', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Merchant Name</label>
                <input
                  type="text"
                  value={settings.payment.merchantName}
                  onChange={(e) => handleChange('payment', 'merchantName', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Payment API Endpoint</label>
                <input
                  type="text"
                  value={settings.payment.paymentAPIEndpoint}
                  onChange={(e) => handleChange('payment', 'paymentAPIEndpoint', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        );
        
      case 'social':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Facebook Page URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.facebook.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'facebook', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.instagram.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'instagram', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.twitter.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'twitter', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">YouTube Channel URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.youtube.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'youtube', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.linkedin.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'linkedin', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">TikTok URL</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    value={settings.social.tiktok.replace('https://', '')}
                    onChange={(e) => handleChange('social', 'tiktok', `https://${e.target.value}`)}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'seo':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Meta Title</label>
                <input
                  type="text"
                  value={settings.seo.metaTitle}
                  onChange={(e) => handleChange('seo', 'metaTitle', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Meta Description</label>
                <textarea
                  value={settings.seo.metaDescription}
                  onChange={(e) => handleChange('seo', 'metaDescription', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Keywords</label>
                <textarea
                  value={settings.seo.keywords}
                  onChange={(e) => handleChange('seo', 'keywords', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Separate keywords with commas"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Google Analytics ID</label>
                  <input
                    type="text"
                    value={settings.seo.googleAnalyticsId}
                    onChange={(e) => handleChange('seo', 'googleAnalyticsId', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Structured Data Type</label>
                  <select
                    value={settings.seo.structuredDataType}
                    onChange={(e) => handleChange('seo', 'structuredDataType', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="Organization">Organization</option>
                    <option value="LocalBusiness">Local Business</option>
                    <option value="OnlineStore">Online Store</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-medium">Search Engine Optimization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input
                      id="enable-sitemap"
                      type="checkbox"
                      checked={settings.seo.enableSitemap}
                      onChange={(e) => handleChange('seo', 'enableSitemap', e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="enable-sitemap" className="ml-3 text-sm text-gray-700">
                      Generate XML Sitemap
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="enable-robots"
                      type="checkbox"
                      checked={settings.seo.enableRobotsTxt}
                      onChange={(e) => handleChange('seo', 'enableRobotsTxt', e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="enable-robots" className="ml-3 text-sm text-gray-700">
                      Generate robots.txt
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Host</label>
                <input
                  type="text"
                  value={settings.email.smtpHost}
                  onChange={(e) => handleChange('email', 'smtpHost', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Port</label>
                <input
                  type="number"
                  value={settings.email.smtpPort}
                  onChange={(e) => handleChange('email', 'smtpPort', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Username</label>
                <input
                  type="text"
                  value={settings.email.smtpUsername}
                  onChange={(e) => handleChange('email', 'smtpUsername', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Password</label>
                <input
                  type="password"
                  value={settings.email.smtpPassword}
                  onChange={(e) => handleChange('email', 'smtpPassword', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">From Email</label>
                <input
                  type="email"
                  value={settings.email.fromEmail}
                  onChange={(e) => handleChange('email', 'fromEmail', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">From Name</label>
                <input
                  type="text"
                  value={settings.email.fromName}
                  onChange={(e) => handleChange('email', 'fromName', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Email Notifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    id="enable-order-confirmation"
                    type="checkbox"
                    checked={settings.email.enableOrderConfirmation}
                    onChange={(e) => handleChange('email', 'enableOrderConfirmation', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-order-confirmation" className="ml-3 text-sm text-gray-700">
                    Send Order Confirmation Emails
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-shipping-notification"
                    type="checkbox"
                    checked={settings.email.enableShippingNotification}
                    onChange={(e) => handleChange('email', 'enableShippingNotification', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-shipping-notification" className="ml-3 text-sm text-gray-700">
                    Send Shipping Notification Emails
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-account-creation"
                    type="checkbox"
                    checked={settings.email.enableAccountCreation}
                    onChange={(e) => handleChange('email', 'enableAccountCreation', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="enable-account-creation" className="ml-3 text-sm text-gray-700">
                    Send Account Creation Emails
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab to view settings</div>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 rounded-lg font-medium ${
              isSaving ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {showSavedMessage && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Settings saved successfully
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden">
        {/* Sidebar */}
        <div className="md:w-64 bg-gray-50 p-4 border-r">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('general')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'general' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              General
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'appearance' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('commerce')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'commerce' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Commerce
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'shipping' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              Shipping
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'payment' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Payment
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'email' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'social' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`w-full flex items-center px-3 py-3 text-sm rounded-lg transition-colors ${
                activeTab === 'seo' 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              SEO
            </button>
          </div>
        </div>
        
        {/* Settings Content */}
        <div className="flex-1 p-6">
          <div className="bg-white">
            <h2 className="text-lg font-medium border-b pb-4 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
            </h2>
            {getTabFields()}
          </div>
        </div>
      </div>
    </div>
  );
}
