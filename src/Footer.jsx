function Footer() {
    return (
        <>
        <div className="h-max w-full py-2 text-gray-700 bg-white/10 backdrop-blur-lg border-t border-lime-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-lg font-semibold">Bulandshahr District, Uttar Pradesh</p>
            <p className="text-sm text-gray-400">Famous for Khurja Ceramic Pottery – A GI-tagged cultural heritage of India.</p>
            <div className="mt-4">
              <a href="https://odopup.in/en/article/bulandshahar" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Visit Official ODOP Bulandshahr Page →</a>
            </div>
            <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Shrey Kumar | Khurja Pottery</p>
          </div>
        </div>
        </>
    )
}
export default Footer