export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <p className="text-orange-400 font-semibold tracking-widest text-sm uppercase mb-4">
          The Truth About Your Fuel
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6 max-w-3xl">
          You Pay ₹94 For Petrol.
          <span className="text-orange-400"> ₹37 Is Just Tax.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-10">
          When crude oil crashed 75% between 2014 and 2016, you did not save a single rupee. 
          The government raised taxes 10 times to keep your prices exactly where they were.
          This is that story.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition">
            See The Breakdown
          </button>
          <button className="border border-gray-600 hover:border-orange-400 text-gray-300 font-semibold px-8 py-3 rounded-full transition">
            10 Year Chart
          </button>
        </div>

      </section>

    </main>
  )
}