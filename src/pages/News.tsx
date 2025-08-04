function News() {
  return (
    <div className="min-h-screen pt-16">
      <h1 className="text-3xl font-bold p-8">Latest News</h1>
      <div className="p-8">
        <article className="mb-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">DC4Biathletes Project Officially Launched</h2>
          <p className="text-gray-600 mb-2">2025-01-04</p>
          <p>The DC4Biathletes project has officially launched its innovative dual career program for young biathlon athletes.</p>
          <p className="text-sm text-gray-500 mt-2">By: DC4Biathletes Team</p>
        </article>
        
        <article className="mb-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer</h2>
          <p className="text-gray-600 mb-2">2025-01-04</p>
          <p>A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.</p>
          <p className="text-sm text-gray-500 mt-2">By: Research Team</p>
        </article>
      </div>
    </div>
  );
}

export default News;