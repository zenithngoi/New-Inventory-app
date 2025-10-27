import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Supabase client setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Placeholder pages
function LoginPage() {
  return <div>Login Page (Supabase Auth coming soon)</div>;
}
function InventoryPage() {
  return <div>Inventory CRUD Page (coming soon)</div>;
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Container>
    </>
  );
}
