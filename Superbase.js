import { createClient } from "@supabase/supabase-js";

const subURL = "https://djjdbzrkmfutmycbypkv.supabase.co";
const subKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqamRienJrbWZ1dG15Y2J5cGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTU2NjAsImV4cCI6MjA2NjkzMTY2MH0.pkUzF7jU61lVFsr92lVYeKvvtrVdWqDfjUDognpwKHs";

export const supabase = createClient(subURL, subKey);
