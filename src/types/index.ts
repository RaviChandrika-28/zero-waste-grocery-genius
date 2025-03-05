
// User type
export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
}

// Authentication types
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends AuthCredentials {
  name: string;
  phoneNumber?: string;
}

// Grocery item type
export interface GroceryItem {
  id: string;
  name: string;
  expiryDate: Date;
  quantity: number;
  category?: string;
  notes?: string;
  reminderSet?: boolean;
}

// Reminder type
export interface Reminder {
  id: string;
  groceryItemId: string;
  daysBeforeExpiry: number;
  notificationMethod: 'email' | 'sms' | 'both';
}

// Recipe suggestion type
export interface RecipeSuggestion {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  imageUrl?: string;
  preparationTime?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}
