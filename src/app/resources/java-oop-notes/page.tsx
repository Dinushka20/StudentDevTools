import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Java OOP Notes | StudentDev Hub",
  description: "Core Object-Oriented Programming (OOP) concepts explained in Java.",
};

export default function JavaOopNotes() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">Java OOP Concepts</h1>
      <p className="text-lg text-muted-foreground mb-12">The four pillars of Object-Oriented Programming explained concisely for Java developers.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. Encapsulation</h2>
        <p className="mb-4 text-muted-foreground bg-muted/30 p-4 border border-border rounded-lg italic">
          Meaning: Hiding the internal state and requiring all interaction to be performed through an object's methods.
        </p>
        <p className="mb-4 text-muted-foreground">In Java, this is achieved by declaring the class variables as private and providing public getter and setter methods to modify and view the values.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`public class Student {
    private String name; // Private = restricted access

    // Getter
    public String getName() {
        return name;
    }

    // Setter
    public void setName(String newName) {
        this.name = newName;
    }
}`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. Inheritance</h2>
        <p className="mb-4 text-muted-foreground bg-muted/30 p-4 border border-border rounded-lg italic">
          Meaning: Deriving a new class from an existing class to inherit its properties and methods.
        </p>
        <p className="mb-4 text-muted-foreground">Java uses the <code>extends</code> keyword for class inheritance. It promotes code reusability.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`public class User {
    protected String username;
    public void login() {
        System.out.println("Logging in...");
    }
}

// Admin inherits from User
public class Admin extends User {
    public void deleteSystem() {
        System.out.println("System deleted by " + username);
    }
}`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">3. Polymorphism</h2>
        <p className="mb-4 text-muted-foreground bg-muted/30 p-4 border border-border rounded-lg italic">
          Meaning: The ability of an object to take on many forms. The most common use in OOP occurs when a parent class reference is used to refer to a child class object.
        </p>
        <p className="mb-4 text-muted-foreground">Polymorphism in Java is often categorized into compile-time (method overloading) and runtime (method overriding).</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`class Animal {
    public void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Bark");
    }
}

// Usage
Animal myAnimal = new Dog();
myAnimal.sound(); // Prints "Bark"`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">4. Abstraction</h2>
        <p className="mb-4 text-muted-foreground bg-muted/30 p-4 border border-border rounded-lg italic">
          Meaning: Hiding complex implementation details and showing only the essential features of the object.
        </p>
        <p className="mb-4 text-muted-foreground">This is achieved using abstract classes or interfaces.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`abstract class Shape {
    abstract void draw(); // No body!
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle...");
    }
}`}
        </code></pre>
      </div>
    </div>
  );
}
