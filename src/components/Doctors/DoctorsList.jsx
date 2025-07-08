import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../../services/doctorService';

export const DoctorsList = () => {
  const { data: doctors = [], isLoading, isError} = useQuery({
    queryKey: ['doctors'],    
    queryFn: getDoctors,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>

    if (!Array.isArray(doctors)) {
    console.error('doctors is not an array:', doctors);
    return <p>No doctor data available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doc) => (
        <div key={doc.id} className="p-4 border rounded shadow-md">
          <img src={doc.photo} alt={doc.fullName} className="w-full h-40 object-cover rounded" />
          <h3 className="text-xl font-bold mt-2">{doc.fullName}</h3>
          <p className="text-sm text-gray-600">{doc.specialty}</p>
          <p className="text-sm text-gray-400">{doc.experienceYears} years of experience</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
