const ProfilePage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-r from-blue-900 to-blue-500">
      <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-3xl font-bold text-gray-800">
        ProfilePage is <span className="text-blue-600">{id}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
