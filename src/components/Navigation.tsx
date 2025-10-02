const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c3e50] text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-12 gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('research')}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Research
          </button>
          <button
            onClick={() => scrollToSection('teaching')}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Teaching
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
