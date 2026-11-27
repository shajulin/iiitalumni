import initialData from '../data/initialData.json';

const STORAGE_KEY_DATASETS = 'alumni_portal_datasets';
const STORAGE_KEY_USERS = 'alumni_portal_users';
const STORAGE_KEY_CURRENT_USER = 'user';

// Initialize localStorage with preset data if not already initialized
function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY_DATASETS)) {
    localStorage.setItem(STORAGE_KEY_DATASETS, JSON.stringify(initialData.datasets || {}));
  }
  if (!localStorage.getItem(STORAGE_KEY_USERS)) {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(initialData.users || []));
  }
}

// Auto-run init on import
initStorage();

export const dataService = {
  // Get all records for a specific dataset (e.g., '2016', '2017', etc.)
  getAlumniData(datasetId) {
    initStorage();
    try {
      const allDatasets = JSON.parse(localStorage.getItem(STORAGE_KEY_DATASETS)) || {};
      return allDatasets[datasetId] || [];
    } catch (err) {
      console.error('Error reading alumni data from storage:', err);
      return [];
    }
  },

  // Add a new record to a dataset
  addAlumniRecord(datasetId, record) {
    initStorage();
    try {
      const allDatasets = JSON.parse(localStorage.getItem(STORAGE_KEY_DATASETS)) || {};
      if (!allDatasets[datasetId]) {
        allDatasets[datasetId] = [];
      }

      const newId = Date.now();
      const newRecord = { id: newId, ...record };
      // Insert at the beginning so newly added records show first
      allDatasets[datasetId].unshift(newRecord);

      localStorage.setItem(STORAGE_KEY_DATASETS, JSON.stringify(allDatasets));
      return { status: 'success', id: newId, data: newRecord };
    } catch (err) {
      console.error('Error adding record to storage:', err);
      return { status: 'error', message: err.message || 'Failed to save record' };
    }
  },

  // Get all registered users
  getUsers() {
    initStorage();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_USERS)) || [];
    } catch {
      return [];
    }
  },

  // Register a new user
  registerUser({ fullName, email, password, batch, rollNumber }) {
    initStorage();
    try {
      const users = this.getUsers();
      const normalizedEmail = (email || '').trim().toLowerCase();

      // Check if user already exists
      const existing = users.find(u => (u.email || '').toLowerCase() === normalizedEmail);
      if (existing) {
        return { status: 'error', message: 'An account with this email already exists. Please login.' };
      }

      const newUser = {
        id: Date.now(),
        full_name: fullName.trim(),
        email: normalizedEmail,
        password: password, // For pure client-side demo
        role: 'alumni',
        batch: batch,
        roll_number: rollNumber ? rollNumber.trim() : '',
        created_at: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

      // Also automatically add a starter entry in the corresponding dataset table
      if (batch) {
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || fullName;
        const lastName = nameParts.slice(1).join(' ') || '';

        const datasetPayload = {
          first_name: firstName,
          last_name: lastName,
          student_name: fullName.trim(),
          roll_no: rollNumber,
          personal_email: normalizedEmail,
          email: normalizedEmail,
          timestamp: new Date().toLocaleString('en-IN')
        };
        this.addAlumniRecord(batch, datasetPayload);
      }

      return {
        status: 'success',
        message: 'Registration successful',
        user: newUser,
        table: `alumni_${batch}`
      };
    } catch (err) {
      return { status: 'error', message: err.message || 'Failed to register' };
    }
  },

  // Login a user
  loginUser(email, password) {
    initStorage();
    try {
      const users = this.getUsers();
      const normalizedEmail = (email || '').trim().toLowerCase();

      const user = users.find(u => (u.email || '').toLowerCase() === normalizedEmail);

      if (!user) {
        return {
          status: 'error',
          message: 'Account not found. Please check your email or click Register to create an account.'
        };
      }

      if (user.password && user.password !== password) {
        return { status: 'error', message: 'Invalid password. Please try again.' };
      }

      const userData = {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role || 'alumni',
        batch: user.batch || '2016',
        roll_number: user.roll_number || null,
        batch_table: user.batch ? `alumni_${user.batch}` : null
      };

      sessionStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(userData));

      return {
        status: 'success',
        message: 'Login successful',
        user: userData
      };
    } catch (err) {
      return { status: 'error', message: err.message || 'Login failed' };
    }
  },

  // Get current logged-in user session
  getCurrentUser() {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY_CURRENT_USER);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  },

  // Logout
  logout() {
    sessionStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  }
};
