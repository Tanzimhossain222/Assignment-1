import Avatar from "../assets/avatar.png";

const Class = ({ className, students }) => {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {`Class ${className}`}
        </td>
      </tr>
      {students
        .sort((a, b) => a.id - b.id)
        .map((student, index) => (
          <tr key={student.id} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{index + 1}</td>{" "}
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Avatar}
                  width="32"
                  height="32"
                  alt={student.name}
                />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{`${student.percentage}%`}</td>
          </tr>
        ))}
    </>
  );
};

export default Class;
