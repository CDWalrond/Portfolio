'use client';
export function validateEnvVars() {
  // Check if all required environment variables are set

  // Set optional environment variables with default values if not set
  process.env.SITE_URL = process.env.SITE_URL || 'http://localhost:3000'; // Default URL
}

export function getEnvVars() {
  return {
    SITE_URL: process.env.SITE_URL
  };
}
