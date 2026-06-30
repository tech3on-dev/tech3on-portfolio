import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <Logo className="mx-auto" />
        <p className="mt-10 font-heading text-7xl font-bold text-gradient">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-semibold">
          Page not found
        </h1>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
