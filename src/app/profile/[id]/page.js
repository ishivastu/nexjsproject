const ProfilePage = async ({ params }) => {
  const { id } = await params;

  return <div>ProfilePage is {id}</div>;
};

export default ProfilePage;
