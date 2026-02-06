import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

/**
 * useAuth Hook
 * Manages user authentication state with Supabase
 */
export function useAuth() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }

        setSession(session);
        
        if (session?.user) {
          const userData = {
            id: session.user.id,
            email: session.user.email,
            fullName: session.user.user_metadata?.full_name || '',
            institutionName: session.user.user_metadata?.institution_name || '',
            institutionType: session.user.user_metadata?.institution_type || '',
            instituteId: session.user.user_metadata?.institute_id || '',
            phone: session.user.user_metadata?.phone || '',
            address: session.user.user_metadata?.address || {},
            role: 'admin',
          };
          setUser(userData);
        }
      } catch (err) {
        console.error('Session check error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (session?.user) {
          const userData = {
            id: session.user.id,
            email: session.user.email,
            fullName: session.user.user_metadata?.full_name || '',
            institutionName: session.user.user_metadata?.institution_name || '',
            institutionType: session.user.user_metadata?.institution_type || '',
            instituteId: session.user.user_metadata?.institute_id || '',
            phone: session.user.user_metadata?.phone || '',
            address: session.user.user_metadata?.address || {},
            role: 'admin',
          };
          setUser(userData);
        } else {
          setUser(null);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError(err.message);
    }
  };

  return { 
    user, 
    session,
    isAuthenticated: !!session?.user,
    isLoading, 
    error,
    logout 
  };
}

