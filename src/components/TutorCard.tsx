import Link from 'next/link';
import { Tutor } from '@/types';

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const avgRating = tutor.reviews?.length
    ? (tutor.reviews.reduce((sum, r) => sum + r.rating, 0) / tutor.reviews.length).toFixed(1)
    : 'N/A';

  return (
    <div className="bg-white border shadow rounded-lg p-4 hover:shadow-lg transition">
      <div className="flex gap-4 items-start">
        <img
          src={tutor.user.avatar}
          alt={tutor.user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg">{tutor.user.name}</h3>
          <p className="text-gray-600">
            {tutor.subject} • Grade {tutor.gradeLevel}
          </p>
          <p className="text-sm mt-2">{tutor.bio.substring(0, 100)}...</p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-green-600">${tutor.pricePerHr}/hr</span>
            <span className="text-yellow-500">⭐ {avgRating}</span>
          </div>
          <Link
            href={`/tutors/${tutor.id}`}
            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
