"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";
import { Lock } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const result = await signIn.email({
        email: values.email.toLowerCase(),
        password: values.password,
        rememberMe: true,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      toast.success("Logged in successfully");

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error instanceof Error
          ? `Error: ${error.message}. Please check your credentials and try again.`
          : "Login failed. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-black dark:to-gray-900">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.04] dark:opacity-[0.06]">
        <h1 className="text-[25vw] font-extrabold tracking-tighter text-black dark:text-gray-100 sm:text-[20vw]">
          Matrix
        </h1>
      </div>

      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-pink-200 opacity-20 blur-3xl dark:bg-gray-800 dark:opacity-30"></div>
      <div className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-gray-700 dark:opacity-20"></div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-8 overflow-auto">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm dark:bg-gray-950/70 dark:border-gray-800">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Welcome to <span className="inline-flex">Matrix</span>
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          autoComplete="email"
                          className="bg-white dark:bg-gray-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          className="bg-white dark:bg-gray-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" isLoading={isLoading}>
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 hidden opacity-20 sm:block dark:opacity-10">
        <div className="h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
      </div>
      <div className="pointer-events-none absolute top-8 right-8 hidden opacity-20 sm:block dark:opacity-10">
        <div className="h-20 w-20 rounded-full bg-primary/20 blur-xl"></div>
      </div>
    </div>
  );
}
