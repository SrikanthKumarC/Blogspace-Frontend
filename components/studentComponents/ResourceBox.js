const ResourceBox = ({ name = "M1 Notes", link = "https://mrcet.com/downloads/digital_notes/HS/Mathematics-I.pdf" }) => {
  return (
    <div className="bg-slate-300 p-4 m-4">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <a href={link} className=" text-white bg-slate-400 p-2 rounded-md">
        Downlaod
      </a>
    </div>
  );
};

export default ResourceBox;
