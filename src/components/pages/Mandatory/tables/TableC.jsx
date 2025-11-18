import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SchoolContext } from "../../../../store/school-site-context";

export default function TableC() {
  const schoolCtx = useContext(SchoolContext);

  const handleEyeClick = (selected) => {
    schoolCtx.setChosenPDFAndName(selected);
  };

  const docs = [
    {
      file: "/affiltation.pdf",
      title: "Fee Structure of the College",
    },
    {
      file: "/affiltation.pdf",
      title: "Annual Academic Calendar",
    },
    {
      file: "/affiltation.pdf",
      title: "LIST OF College MANAGEMENT COMMITTEE (SMC)",
    },
    {
      file: "/affiltation.pdf",
      title: "List of Parents Teachers Association (PTA) Members",
    },
    {
      file: "/affiltation.pdf",
      title: "Last three-year result of the Board Examination",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3">S.No.</th>
            <th className="px-4 py-3">Documents and Information</th>
            <th className="px-4 py-3">Documents</th>
          </tr>
        </thead>

        <tbody>
          {docs.map((doc, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 py-3">{index + 1}</td>

              <td className="px-4 py-3">{doc.title}</td>

              <td className="px-4 py-3">
                <Link to={doc.file}>
                  <FaEye
                    className="cursor-pointer text-blue-600"
                    onClick={() => handleEyeClick([doc.file, doc.title])}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
