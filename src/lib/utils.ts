import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a more readable format
 * @param dateString - Date string in YYYY-MM format
 * @returns Formatted date string (e.g., "June 2021")
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/**
 * Formats a date range for display
 * @param startDate - Start date string in YYYY-MM format
 * @param endDate - End date string in YYYY-MM format or null for "Present"
 * @returns Formatted date range (e.g., "June 2021 - Present")
 */
export function formatDateRange(startDate: string, endDate: string | null): string {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : 'Present';
  
  return `${formattedStartDate} - ${formattedEndDate}`;
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - String to truncate
 * @param length - Maximum length
 * @returns Truncated string
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}
