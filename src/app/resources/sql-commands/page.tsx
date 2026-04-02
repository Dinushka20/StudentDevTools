import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "SQL Commands Reference | StudentDev Hub",
  description: "A quick reference cheatsheet for basic SQL Commands (DDL, DML).",
};

export default function SqlCommands() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">SQL Commands Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-12">Essential Structured Query Language operations.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. DDL (Data Definition Language)</h2>
        <p className="mb-4 text-muted-foreground">Commands used to define the database structure or schema.</p>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">CREATE</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`CREATE TABLE Students (
    ID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">ALTER</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`ALTER TABLE Students
ADD Email varchar(255);`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">DROP</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`DROP TABLE Students; -- Deletes the entire table structure and data`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. DML (Data Manipulation Language)</h2>
        <p className="mb-4 text-muted-foreground">Commands used for managing data within schema objects.</p>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">INSERT INTO</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`INSERT INTO Students (FirstName, LastName, Age)
VALUES ('John', 'Doe', 21);`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">UPDATE</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`UPDATE Students
SET Age = 22
WHERE FirstName = 'John' AND LastName = 'Doe';`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">DELETE</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`DELETE FROM Students
WHERE Age < 18;`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">3. DQL (Data Query Language)</h2>
        
        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">SELECT</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`SELECT FirstName, Age FROM Students
WHERE Age > 20
ORDER BY LastName ASC
LIMIT 10;`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">JOIN (Inner Join)</h3>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`}
        </code></pre>
      </div>
    </div>
  );
}
