function Education() {
  return (
    <section className="border-b border-gray-300 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-20">
        <div className="flex items-center justify-center">
          <p className="text-xl font-medium tracking-wider text-gray-700 ">
            Education
          </p>
        </div>
        <div className="space-y-1 text-center md:text-start  tracking-wider">
          <p className="text-2xl font-bold  text-gray-600 uppercase">
            Institute of Computing Studies and Library Information Science
          </p>
          <p className="text-lg text-gray-600">BS Computer Science 2022</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
