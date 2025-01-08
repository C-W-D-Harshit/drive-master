import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <main className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Drive Master
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          AI-Powered S3 Bucket Interface
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          Effortlessly manage your S3 buckets with an intuitive UI and
          AI-assisted operations. Streamline your workflow and boost
          productivity with Drive Master.
        </p>
        <div className="space-y-4 pt-3">
          <Link href="/dashboard">
            <Button effect={"shine"} size="lg" className="">
              Get Started
            </Button>
          </Link>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Link
                href="https://github.com/c-w-d-harshit/drive-master"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
