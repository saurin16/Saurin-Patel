// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://giknpzhsgsjgnhswkith.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpa25wemhzZ3NqZ25oc3draXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNjQwNzksImV4cCI6MjA2MzY0MDA3OX0.yLb2sKyKggqfjWNT_40D5froguQ6dNzQEYYUnC3FZMA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);