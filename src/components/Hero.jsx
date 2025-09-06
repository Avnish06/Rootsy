

export default function Hero() {
  const projects = [
    {
      title: "Thekua - Bihar",
      image: "https://www.holidify.com/images/cmsuploads/compressed/Thekua_20190822160242.jpg",
      description: "A traditional sweet dish from Bihar, offered during Chhath Puja.",
    },
    {
      title: "Rajasthani Clothing",
      image: "https://www.rajasthandirect.com/wp-content/uploads/2013/09/rajasthani-traditional-dress.jpg",
      description: "Colorful lehengas, turbans, and traditional Rajasthani attire.",
    },
    {
      title: "Punjabi Attire",
      image: "https://punjabtourism.punjab.gov.in/wp-content/uploads/2021/05/phulkari.jpg",
      description: "Phulkari dupatta, kurta-pajama, and vibrant Punjabi cultural wear.",
    },
    {
      title: "Madhubani Painting - Bihar",
      image: "https://www.dsource.in/sites/default/files/resource/madhubani-painting/introduction/madhubani-painting-header.jpg",
      description: "Ancient folk art depicting nature, mythology, and culture.",
    },
    {
      title: "Assam Tea",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Assam_tea_garden.jpg",
      description: "Famous Assamese tea, known worldwide for its flavor.",
    },
    {
      title: "Kathakali - Kerala",
      image: "https://www.holidify.com/images/cmsuploads/compressed/Kathakali_20190822155823.jpg",
      description: "Classical dance form from Kerala with dramatic masks and costumes.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <section className="w-full bg-yellow-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Celebrating Indian Culture 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover India’s rich traditions, food, art, and attire across states.
          </p>
          <img
            src="https://thumbs.dreamstime.com/z/indian-collage-illustration-showing-culture-tradition-festival-india-vector-design-155786785.jpg"
            alt="Indian Culture"
            className="rounded-xl shadow-lg w-full max-h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Featured Cultural Highlights 🌍
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
