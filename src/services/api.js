/**
 * API Service for communicating with the NestJS backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'An error occurred' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
}

/**
 * API methods
 */
export const api = {
    // Health check
    getHealth: () => fetchAPI('/health'),

    // Get welcome message
    getWelcome: () => fetchAPI('/'),

    // Generic GET request
    get: (endpoint) => fetchAPI(endpoint),

    // Generic POST request
    post: (endpoint, data) => fetchAPI(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    // Generic PUT request
    put: (endpoint, data) => fetchAPI(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    // Generic DELETE request
    delete: (endpoint) => fetchAPI(endpoint, {
        method: 'DELETE',
    }),
};

export default api;
