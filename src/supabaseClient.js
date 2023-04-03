import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zygnciikdyabufikydye.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z25jaWlrZHlhYnVmaWt5ZHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDEzMzIsImV4cCI6MTk5MzcxNzMzMn0.8SkCh6dCUtrC2KGOJxLRcgGsB8fODh1ZkbFYlvBhphA';

export const supabase = createClient(supabaseUrl, supabaseKey)