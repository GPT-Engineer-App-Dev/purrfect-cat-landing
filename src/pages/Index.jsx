import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Cat Haven</h1>
          <p className="mt-4 text-xl">Your ultimate destination for all things feline</p>
          <Button className="mt-8">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">
          Cat Haven is dedicated to providing cat lovers with the latest information, tips, and products for their feline friends.
        </p>
      </section>

      {/* Featured Cats Section */}
      <section id="featured-cats" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Featured Cats</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Whiskers", description: "A playful kitten who loves to explore.", image: "/placeholder.svg" },
            { name: "Shadow", description: "A shy cat who enjoys quiet time.", image: "/placeholder.svg" },
            { name: "Mittens", description: "A friendly cat who loves attention.", image: "/placeholder.svg" },
          ].map((cat, index) => (
            <Card key={index}>
              <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{cat.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{cat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Blog</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "How to Care for Your Cat", excerpt: "Learn the best tips and tricks for taking care of your feline friend.", link: "#" },
            { title: "Top 10 Cat Breeds", excerpt: "Discover the most popular cat breeds and their unique characteristics.", link: "#" },
            { title: "Understanding Cat Behavior", excerpt: "Decode the mysteries of your cat's behavior with our expert insights.", link: "#" },
          ].map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
                <Button variant="link" className="mt-4" as="a" href={post.link}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Cat Haven. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;