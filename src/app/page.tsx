import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Student Mentor</h1>
        <p className="text-xl mb-8">
          Connect with peer tutors for affordable, personalized learning. By students, for students.
        </p>
        <Link
          href="/tutors"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100"
        >
          Browse Tutors
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Mentor Moose?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Affordable</h3>
            <p>Student tutors offer competitive rates. No middleman.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Relatable</h3>
            <p>Learn from peers who recently mastered the material.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Flexible</h3>
            <p>Book sessions that fit your schedule. Online & in-person.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
        <Link
          href="/tutors"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
