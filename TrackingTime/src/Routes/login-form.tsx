import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useApi } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  
  className, ...props
  
}: React.ComponentProps<"div">,) {
  const { mutateLogin, isLoggingIn, isLoginError, loginError } = useApi(); // Access login functionality from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To store error messages
  let navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const credentials = { email, password };

  //   try {
  //     setErrorMessage(""); 
     
  //     await mutateLogin(credentials);
  //     navigate('/');

  //   } catch (error) {
     
  //     setErrorMessage(error.response?.data?.message || "Something went wrong");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateLogin(credentials); // Trigger the mutation
      // Do something with the successful response if needed
    } catch (error) {
      // Handle the error
      console.error(loginError || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
            </a>
            <h1 className="text-xl font-bold">Welcome to ChilFlix</h1>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/singup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>

      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
    </div>
  );
}
