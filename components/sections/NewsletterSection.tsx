import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Join Our Newsletter
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Subscribe to our newsletter to receive updates on new arrivals,
              special offers and other discount information.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing you agree to our{" "}
              <Link href="#" className="underline underline-offset-2">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
