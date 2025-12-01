export default function Loading() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-4 w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4 w-1/3 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-24"></div>
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-24"></div>
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}