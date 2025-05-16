"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  message?: string;
}

export function Loading({ className}: LoadingProps) {
  return (
    <div className={cn("flex flex-wrap w-full justify-center items-center min-h-[200px]", className)}>
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
            <p className="text-gray-500 dark:text-gray-400">Loading...</p>
          </div>
      </div>
  );
}

export function ErrorDisplay({ className, message = "Failed to load data. Please try again later." }: LoadingProps) {
  return (
      <div className={cn("flex flex-wrap w-full justify-center items-center min-h-[200px]", className)}>
        <p className="text-red-500">{message}</p>
      </div>
  );
}

export function EmptyState({ className, message = "No data available." }: LoadingProps) {
  return (
    <div className={cn("flex flex-wrap w-full justify-center items-center min-h-[200px]", className)}>
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
