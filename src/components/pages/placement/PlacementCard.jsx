const PlacementCard = ({ image, name, position }) => {
  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden border hover:shadow-md transition">
      <img src={image} alt={name} className="w-full h-64 object-contin" />

      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 italic">{position}</p>
      </div>
    </div>
  );
};

export default PlacementCard;
