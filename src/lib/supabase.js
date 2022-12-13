import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://axctzfgrfpcxeqqwykww.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3R6ZmdyZnBjeGVxcXd5a3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5MjA2MTUsImV4cCI6MTk4NjQ5NjYxNX0.99n4ByH_QiiYB2Q31bdsGqMi35giBLeX8qUG11oKa8o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)