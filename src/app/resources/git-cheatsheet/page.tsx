import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Git Commands Cheatsheet | StudentDev Hub",
  description: "A quick reference guide for essential Git commands.",
};

export default function GitCheatsheet() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">Git Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-12">The most commanding Git commands. Save this page to quickly remember how to manage your code history.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. Setup & Initialization</h2>
        <ul className="list-none space-y-4 text-muted-foreground mb-8">
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git init</code>
            Initialize a local repository in the current directory.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git clone [url]</code>
            Clone an entire repository from a remote server to your local machine.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. Staging & Committing</h2>
        <ul className="list-none space-y-4 text-muted-foreground mb-8">
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git status</code>
            Check the status of your files (untracked, modified, or staged).
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git add [file]</code>
            Add a file (or `.` for all files) to the staging area to precisely define your commit.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git commit -m "[descriptive message]"</code>
            Commit your staged content as a new commit snapshot.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">3. Branching</h2>
        <ul className="list-none space-y-4 text-muted-foreground mb-8">
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git branch</code>
            List all local branches.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git checkout -b [branch-name]</code>
            Create a new branch and switch to it immediately.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git merge [branch-name]</code>
            Merge the specified branch's history into the current branch.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">4. Remote Repositories</h2>
        <ul className="list-none space-y-4 text-muted-foreground mb-8">
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git remote add origin [url]</code>
            Connect your local repository to a remote server.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git pull origin branch-name</code>
            Fetch and merge changes on the remote server to your working directory.
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <code className="text-blue-400 font-bold mb-2 block">git push origin branch-name</code>
            Push your local history to the remote repository.
          </li>
        </ul>
      </div>
    </div>
  );
}
